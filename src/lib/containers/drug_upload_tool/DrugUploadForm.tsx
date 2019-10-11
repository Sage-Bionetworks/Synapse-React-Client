import './DrugUploadTool.scss'

import * as React from 'react'
import _ from 'lodash'
import { Engine } from 'json-rules-engine'
import {
  default as Form,
  UiSchema,
  AjvError,
  ErrorListProps,
} from 'react-jsonschema-form'

import { Step, StepStateEnum, NavActionEnum, StatusEnum } from './types'
import Header from './Header'
import StepsSideNav from './StepsSideNav'
import { NavButtons, NextStepLink } from './NavButtons'
import DataDebug from './DataDebug'
import SummaryTable from './SummaryTable'
import WarningModal from './WarningModal'
import Switch from 'react-switch'
import { Prompt } from 'react-router-dom'

export type FormSchema = {
  properties?: any
  definitions?: any
}

export interface IFormData {
  [screen_name: string]: {
    included?: boolean
  }
}

export type DrugUploadFormProps = {
  schema: FormSchema
  uiSchema: UiSchema
  navSchema: {
    steps: any[]
  }
  formData: IFormData
  onSubmit: Function
  onSave: Function
  formTitle: string
  formClass?: string
  isWizardMode?: boolean
  callbackStatus?: StatusEnum
  isSubmitted?: boolean
}

type DrugUploadFormState = {
  formData: IFormData // form data that prepopulates the form
  currentStep: Step
  nextStep?: Step
  steps: Step[]
  previousStepIds: string[]
  hasValidated?: boolean //validation has been called and it passed
  doShowErrors: boolean //if we should show error summary at the top of the page
  doShowHelp: boolean
  modalContext?: { action: Function; arguments: any[] }
  hasUnsavedChanges: boolean
  isSubmitted?: boolean
}

type RulesEvent = {
  type: string
  params: {
    next: string
  }
}

type RulesResult = {
  events: RulesEvent[]
}

export interface SummaryFormat {
  label: string
  value: string
}

export default class DrugUploadForm extends React.Component<
  DrugUploadFormProps,
  DrugUploadFormState
> {
  excludeWarningText = `This action will clear the entire contents of this page. Only this page will be effected.
  Are you sure you want to clear the data enterred on this page?`
  excludeWarningHeader = `Clear Entered Data`
  unsavedDataWarning = `You might have some unsaved data. Are you sure you want to leave?`
  formRef: any //ref to form for submission
  navAction: NavActionEnum = NavActionEnum.NONE
  uiSchema: {}
  nextStep: Step | undefined

  constructor(props: DrugUploadFormProps) {
    super(props)

    //will modify the ui:help to render html vs text
    this.uiSchema = stringToElementForProp(
      _.cloneDeep(props.uiSchema),
      'ui:help',
    )
    //create steps array from the navSchema
    const steps = props.navSchema.steps
      .map((step, i) => {
        return {
          ...step,
          inProgress: i === 0 ? true : false,
        }
      })
      .sort((a, b) => a.order - b.order)

    this.formRef = React.createRef()
    this.state = {
      currentStep: steps[0],
      steps: steps,
      previousStepIds: [],
      formData: props.formData,
      doShowErrors: false,
      doShowHelp: true,
      hasUnsavedChanges: false,
      isSubmitted: props.isSubmitted,
    }
  }

  onUnload = (ev: any) => {
    {
      if (this.state.hasUnsavedChanges) {
        ev.preventDefault()
        return (ev.returnValue = this.unsavedDataWarning)
      }
      return
    }
  }
  // Setup the `beforeunload` event listener
  setupBeforeUnloadListener = () => {
    window.addEventListener('beforeunload', this.onUnload)
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.onUnload)
  }

  componentDidUpdate(prevProps: DrugUploadFormProps) {
    const shouldUpdate = this.props.callbackStatus !== prevProps.callbackStatus
    const isSuccess =
      this.props.callbackStatus === StatusEnum.SAVE_SUCCESS ||
      this.props.callbackStatus === StatusEnum.SUBMIT_SUCCESS
    if (shouldUpdate && isSuccess) {
      this.setState({ hasUnsavedChanges: false })
      if (this.props.callbackStatus === StatusEnum.SUBMIT_SUCCESS) {
        this.setState({ isSubmitted: true })
        window.history.back()
      }
    }
  }

  componentDidMount() {
    this.setupBeforeUnloadListener()
    const formData = this.state.formData
    const isNewForm =
      Object.keys(formData).length == 1 &&
      Object.keys(formData)[0] === 'metadata'
    if (!isNewForm) {
      return
    }
    // for validation of optional forms. Validation is enforced only if included property is set.
    if (!this.props.isWizardMode) {
      const result = {}
      const defs = this.props.schema.definitions
      Object.keys(defs).forEach((key: string) => {
        if (
          defs[key].properties &&
          Object.keys(defs[key].properties).indexOf('included') > -1
        ) {
          _.set(result, `${key}.included`, true)
        }
      })
      this.setState(prevState => ({ formData: prevState.formData, ...result }))
    } else {
      // when in wizard mode we automatically set 'included' after we visit the step so only need to do this for the first step
      this.setState(prevState => {
        const formData = prevState.formData
        const firstStepId = prevState.currentStep.id
        _.set(formData, `${firstStepId}.included`, true)
        return { formData }
      })
    }
  }

  // get the schema slice for the current screen/step
  getSchema = ({ id, final }: Step): FormSchema => {
    if (final) {
      return this.props.schema
    }
    //only get schema for current step. Only the portion of entire form is shown
    // we need all the definitions bacuse we can have fieldset references there
    const currentStepSlice = _.pick(this.props.schema, [
      'definitions',
      'title',
      'type',
      `properties.${id}`,
    ])
    return currentStepSlice
  }

  // find the next step
  getNextStepId = async (
    currentStep: Step,
    formData: any,
    nextStepId?: string,
  ): Promise<string> => {
    if (nextStepId) {
      return nextStepId
    }
    if (!currentStep.rules || currentStep.rules.length === 0) {
      return currentStep.default
    }

    // if there are rules - run the engine and go to the first next step
    let engine = new Engine(currentStep.rules)

    try {
      const result: RulesResult = await engine.run(formData)
      if (result.events.length > 0) {
        return result.events[0].params.next
      } else {
        return currentStep.default
      }
    } catch (error) {
      return currentStep.default
    }
  }

  // called when going next, previous or a given step
  moveStep = async (
    formData: any,
    nextStepId: string | undefined,
    isError: boolean,
    previousStack = [...this.state.previousStepIds],
  ) => {
    const currentStep = this.state.currentStep
    let currentStepState: StepStateEnum
    //we don't wnat to display errors on the page - this will be done explicitly in validation
    this.formRef.current.setState({ errorSchema: {} })
    //in wizard mode we can only move forwards (don't know next step yet) or backwards (do know next step)
    const isMoveForwardInWizardMode = this.props.isWizardMode && !nextStepId

    //previousStack is used for 'back' navigation is wizard mode.
    //only need to do it if moving forward i.e. nextStepId is undefined
    if (isMoveForwardInWizardMode) {
      previousStack.push(currentStep.id)
    }

    if (!isError) {
      currentStepState = StepStateEnum.COMPLETED

      if (!isMoveForwardInWizardMode && this.props.isWizardMode) {
        currentStepState = StepStateEnum.TODO
      }
    } else {
      currentStepState = StepStateEnum.ERROR
    }
    // determine next step
    nextStepId = await this.getNextStepId(currentStep, formData, nextStepId)

    const steps = this.state.steps.map(step => {
      if (step.id === currentStep.id) {
        return {
          ...step,
          ...{ state: currentStepState, inProgress: false },
        }
      } else if (step.id === nextStepId) {
        return { ...step, ...{ inProgress: true } }
      }
      return step
    })
    //if we are in wizard mode we want to make sure that we include the step we are about to go to
    if (isMoveForwardInWizardMode) {
      _.set(formData, `${nextStepId}.included`, true)
    }

    //at this point the form is valid and submitted and the data reflects the latest
    const nextStep = this.state.steps.find(step => step.id === nextStepId)!
    // clean up unused screens in wizard before getting to submit
    if (this.props.isWizardMode && nextStep.final) {
      Object.keys(formData).forEach(key => {
        if (formData[key].included === undefined) {
          formData[key] = {}
        }
      })
    }

    this.saveStepState(previousStack, steps, nextStep!, formData)
  }

  //save the state of the current screen
  saveStepState = (
    previousStepIds: string[],
    steps: Step[],
    currentStep: Step,
    formData: any,
  ) => {
    this.setState({
      previousStepIds,
      steps,
      currentStep,
      formData,
      hasValidated: false,
      doShowErrors: false,
    })
  }

  //--------- fns to support navigation --------------------//
  goPrevious = async (formData: any, isError: boolean) => {
    let previousStepId: string | undefined
    const previousStack: string[] = [...this.state.previousStepIds]
    // in wizard mode we go to the previously visited screen.
    // In regular mode go to the screen with previous index
    if (this.props.isWizardMode) {
      previousStepId = previousStack.pop()
      if (!this.isSubmitScreen()) {
        //since we don't know if we'll get back to that step again - exclude it. We will include it again if we
        // get to it.
        _.set(formData, `${this.state.currentStep.id}.included`, undefined)
      }
    } else {
      const currentIndex = _.findIndex(this.state.steps, {
        id: this.state.currentStep.id,
      })
      if (currentIndex > 0) {
        previousStepId = this.state.steps[currentIndex - 1].id
      }
    }
    if (!_.isUndefined(previousStepId)) {
      return this.moveStep(formData, previousStepId, isError, previousStack)
    }
  }

  triggerAction = (navAction: NavActionEnum) => {
    // we don't need to validate on save so bypassing submit
    if (navAction === NavActionEnum.SAVE) {
      return this.props.onSave(this.state.formData)
    } else {
      this.navAction = navAction
      this.formRef.current.submit()
    }
  }

  // triggered when we click on the step name in left nav (doesn't happen in wizard mode)
  triggerStepChange = (step: Step) => {
    this.nextStep = step
    this.triggerAction(NavActionEnum.GO_TO_STEP)
  }

  onError = (args: any) => {
    this.setState({
      doShowErrors: true,
      hasValidated: false,
    })
    if (this.navAction === NavActionEnum.VALIDATE) {
      const modifiedSteps = this.setStepStatusForFailedValidation(
        args.props,
        this.state.steps,
        this.getSchema(this.state.currentStep),
      )
      this.setState({ steps: modifiedSteps })
    }
  }

  setStepStatusForFailedValidation = (
    errors: AjvError[],
    steps: Step[],
    currentSchemaProperties: any,
  ): Step[] => {
    //error property is in the format: step.somevalue.etc  .welcome.submission_name example
    //find all the steps where there is an error
    const stepsWithError = errors.map(
      error => _.trimStart(error.property, '.').split('.')[0],
    )
    //find all steps in current schema
    const stepsInCurrentSchema = Object.keys(currentSchemaProperties)
    const updatedSteps: Step[] = steps.map(step => {
      if (stepsWithError.indexOf(step.id) > -1) {
        return {
          ...step,
          state: StepStateEnum.ERROR,
        }
      } else if (stepsInCurrentSchema.indexOf(step.id) > -1) {
        return {
          ...step,
          state: StepStateEnum.COMPLETED,
        }
      } else {
        return step
      }
    })
    return updatedSteps
  }

  //we are constantly saving form data. Needed to overwrite on-error behavior
  handleOnChange({ formData }: any) {
    //this is just for form updates. submit screen goes different route
    if (!this.isSubmitScreen()) {
      const hasUnsavedChanges = !_.isEqual(this.state.formData, formData)
      this.setState({ formData, hasUnsavedChanges })
    }
  }

  performAction(navAction: NavActionEnum, hasError: boolean) {
    const formData = this.state.formData

    switch (navAction) {
      case NavActionEnum.NEXT: {
        return this.moveStep(formData, undefined, hasError)
      }
      case NavActionEnum.PREVIOUS: {
        return this.goPrevious(formData, hasError)
      }
      case NavActionEnum.GO_TO_STEP: {
        //nextStep is returned when clicked on the Steps left nav
        if (!this.nextStep) {
          return
        }
        return this.moveStep(formData, this.nextStep.id, hasError)
      }

      case NavActionEnum.SUBMIT: {
        this.props.onSubmit(formData)
      }
      case NavActionEnum.VALIDATE: {
        //we get here is we clicked validate and the data is valid.
        // if it's not valid we handle it in onError fn
        const currentStep = {
          ...this.state.currentStep,
          state: StepStateEnum.COMPLETED,
        }
        const steps = this.state.steps.map(step => {
          return {
            ...step,
            state:
              step.id === currentStep.id ? StepStateEnum.COMPLETED : step.state,
          }
        })

        this.setState({ hasValidated: true, currentStep, steps })
      }
      default:
        return
    }
  }

  //we need to route things through submit - otherwise validation does not kick in
  // it triggers internal library validation and calls the performAction with the params for action
  onSubmit = (): any => {
    this.performAction(
      this.navAction,
      this.state.currentStep.state === StepStateEnum.ERROR,
    )
  }

  isSubmitScreen = (): boolean => {
    return this.state.currentStep.final === true
  }

  showExcludeStateWarningModal = (
    stepId: string,
    isUpdateFlattenedData: boolean = false,
  ): void => {
    this.setState({
      modalContext: {
        action: this.toggleExcludeStep,
        arguments: [stepId, true, isUpdateFlattenedData],
      },
    })
  }

  toggleExcludeStep = (stepId: string, isExclude: boolean): void => {
    this.setState((prevState, props) => {
      const steps = prevState.steps.map(stp => {
        if (stp.id === stepId) {
          return { ...stp, ...{ excluded: isExclude } }
        }
        return stp
      })

      const formDataUpdated = _.cloneDeep(prevState.formData)
      const currentStep = _.cloneDeep(prevState.currentStep)
      //we need this because you can exclude on the ifnal screen so the currentStep.id
      //is not always the one we need to exclude
      if (currentStep.id === stepId) {
        currentStep.excluded = isExclude
      }
      //if exluding - blow away the data for the step
      if (isExclude) {
        formDataUpdated[stepId] = {}
        //_.set(formDataUpdated, `${stepId}.included`, false);
      } else {
        _.set(formDataUpdated, `${stepId}.included`, true)
      }
      return {
        steps,
        formData: formDataUpdated,
        modalContext: undefined,
        currentStep,
      }
    })
  }

  private renderNotification = (status?: StatusEnum): JSX.Element => {
    if (status === StatusEnum.SAVE_SUCCESS) {
      return <div className="notification-area"> Successfully saved </div>
    }
    if (status === StatusEnum.SUBMIT_SUCCESS) {
      return <div className="notification-area"> Successfully submitted </div>
    }
    if (status === StatusEnum.PROGRESS) {
      return <div className="notification-area"> working on it ....</div>
    }
    return <></>
  }

  // displays the text for screens that don't have any form data
  private renderTextForStaticScreen = (): JSX.Element => {
    if (!this.state.currentStep.copy) {
      return <></>
    }
    const copy = this.state.currentStep.copy
    return (
      <div
        className="static-screen"
        dangerouslySetInnerHTML={{ __html: copy! }}
      />
    )
  }

  //displays subheader for forms that can be excluded
  renderOptionalFormSubheader = (isWizard: boolean = false): JSX.Element => {
    if (isWizard) {
      return <></>
    }
    const currentStep = this.state.currentStep

    if (currentStep.excluded === true) {
      return (
        <div className="step-exclude-directions">
          This sub-form is currently not included in the submission.
          <button
            className="btn btn-link"
            onClick={() => this.toggleExcludeStep(currentStep.id, false)}
          >
            INCLUDE
          </button>
        </div>
      )
    } else if (currentStep.excluded === false) {
      return (
        <div className="step-exclude-directions">
          This sub-form is currently included in the submission.{' '}
          <button
            className="btn btn-link"
            onClick={() =>
              this.showExcludeStateWarningModal(this.state.currentStep.id)
            }
          >
            SKIP
          </button>
        </div>
      )
    }
    return <></>
  }

  renderHelpToggle = (
    currentStep: Step,
    showHelp: boolean,
    callbackFn: Function,
  ): JSX.Element => {
    if (currentStep.static || currentStep.final) {
      return <></>
    }
    return (
      <>
        <label className="pull-right toggle-help-label">
          <span>Hide help</span>
          <Switch
            checkedIcon={false}
            uncheckedIcon={false}
            height={20}
            width={45}
            className="toggle-help"
            offColor="#ccc"
            onChange={() => callbackFn()}
            checked={showHelp}
          />
          <span>Show help</span>
        </label>
      </>
    )
  }

  transformErrors = (errors: AjvError[]): AjvError[] => {
    // if we are not in wizard mode and not trying to submit or validate we just want to skip
    // over the errors and just set the step status
    // https://github.com/rjsf-team/react-jsonschema-form/issues/1263

    if (
      this.navAction !== NavActionEnum.SUBMIT &&
      this.navAction !== NavActionEnum.VALIDATE &&
      (!this.props.isWizardMode || this.state.currentStep.final)
    ) {
      const currentStep = {
        ...this.state.currentStep,
      }
      if (errors.length > 0) {
        currentStep.state = StepStateEnum.ERROR
      } else {
        currentStep.state = StepStateEnum.COMPLETED
      }

      this.setState({ currentStep })

      return []
    }

    // there is an odd behavior in the lib that in cases when we have additional fields depending on enum
    // value if it's required and not entered we get 3 error: enum, required, and oneOf
    // so if there is an error Oneof on a parent - ignore it and enum on a child. and just output 'required'
    // if there is an enum error and there is required with the same prefix remove it

    const reqErrors = errors.filter(error => error.name === 'required')
    reqErrors.forEach(error => {
      const parentPath = error.property.substring(
        0,
        error.property.lastIndexOf('.'),
      )
      _.remove(errors, (error: AjvError) => {
        return (
          error.property.indexOf(parentPath) > -1 &&
          (error.name === 'enum' || error.name === 'oneOf')
        )
      })
    })
    return errors.map(error => {
      error.message = error.message.replace('property', 'field')

      return error
    })
    return errors
  }

  renderErrorListTemplate = (props: ErrorListProps) => {
    let { errors } = props
    const currentLis = errors.map((error, i) => {
      return renderTransformedErrorObject(
        this.state.steps,
        error,
        this.uiSchema,
        i,
        this.props.schema,
      )
    })

    return (
      <div className="form-error-summary">
        <ul className="error-detail">{currentLis}</ul>
      </div>
    )
  }

  render() {
    return (
      <div className="outter-wrap">
        <Prompt
          when={this.state.hasUnsavedChanges}
          message={this.unsavedDataWarning}
        />
        <Header
          isSubmitted={this.state.isSubmitted}
          bodyText={this.state.currentStep.description}
          title={this.props.formTitle}
        ></Header>
        <div>
          <div className="inner-wrap">
            <StepsSideNav
              stepList={this.state.steps}
              isWizardMode={this.props.isWizardMode}
              onStepChange={this.triggerStepChange}
            ></StepsSideNav>
            <div className="form-wrap">
              <div className="form-title">{this.state.currentStep.title}</div>
              {this.renderNotification(this.props.callbackStatus)}
              <div
                className={`right-top-actions ${
                  this.state.isSubmitted ? 'hide' : ''
                }`}
              >
                {!this.state.currentStep.static && (
                  <button
                    type="button"
                    className="btn btn-action save pull-right"
                    onClick={() => this.triggerAction(NavActionEnum.VALIDATE)}
                  >
                    VALIDATE
                  </button>
                )}
                {this.renderHelpToggle(
                  this.state.currentStep,
                  this.state.doShowHelp,
                  () =>
                    this.setState({
                      doShowHelp: !this.state.doShowHelp,
                    }),
                )}
                {this.isSubmitScreen() && (
                  <button
                    type="button"
                    className="btn btn-action save pull-right"
                    disabled={this.state.isSubmitted}
                    onClick={() => this.triggerAction(NavActionEnum.SUBMIT)}
                  >
                    SUBMIT
                  </button>
                )}
              </div>
              {this.renderOptionalFormSubheader(this.props.isWizardMode)}
              <div
                className={
                  this.isSubmitScreen() || this.state.currentStep.static
                    ? 'hide-form-only'
                    : 'wrap'
                }
              >
                {this.state.hasValidated && (
                  <div className="notification-area">
                    Great! Your data is valid!
                  </div>
                )}
                <div
                  className={`scroll-area ${
                    this.state.currentStep.excluded ? 'disabled' : ' '
                  } `}
                >
                  <Form
                    className={
                      this.state.doShowHelp
                        ? 'submissionInputForm'
                        : 'submissionInputForm no-help'
                    }
                    liveValidate={false}
                    formData={this.state.formData}
                    schema={this.getSchema(this.state.currentStep)}
                    uiSchema={this.uiSchema}
                    onSubmit={this.onSubmit}
                    onChange={args => this.handleOnChange(args)}
                    onError={args =>
                      this.onError({
                        props: args,
                        form: this.formRef,
                      })
                    }
                    showErrorList={
                      !!this.state.doShowErrors || !!this.props.isWizardMode
                    }
                    ErrorList={this.renderErrorListTemplate}
                    transformErrors={this.transformErrors}
                    ref={this.formRef}
                    disabled={
                      this.state.currentStep.excluded || this.state.isSubmitted
                    }
                  >
                    <div style={{ display: 'none' }}>
                      <button type="submit"></button>
                    </div>
                  </Form>
                  {this.renderTextForStaticScreen()}
                  {!this.props.isWizardMode && (
                    <NextStepLink
                      steps={this.state.steps}
                      nextStepId={this.state.currentStep.default}
                      onNavAction={(step: Step) => this.triggerStepChange(step)}
                    ></NextStepLink>
                  )}
                </div>
              </div>

              {this.isSubmitScreen() && (
                <SummaryTable
                  formData={this.state.formData}
                  steps={this.state.steps}
                  callbackFn={(screenId: string) =>
                    this.showExcludeStateWarningModal(screenId, true)
                  }
                ></SummaryTable>
              )}

              <NavButtons
                currentStep={this.state.currentStep}
                steps={this.state.steps}
                previousStepIds={this.state.previousStepIds}
                isFormSubmitted={this.state.isSubmitted}
                onNavAction={(e: NavActionEnum) => this.triggerAction(e)}
              ></NavButtons>
            </div>
          </div>
        </div>
        {this.state.modalContext && (
          <WarningModal
            show={true}
            title={this.excludeWarningHeader}
            copy={this.excludeWarningText}
            className={`theme-${this.props.formClass}`}
            callbackArgs={this.state.modalContext.arguments}
            onCancel={() => this.setState({ modalContext: undefined })}
            onOK={(stepId: string, isExclude: boolean) =>
              this.toggleExcludeStep(stepId, isExclude)
            }
          ></WarningModal>
        )}
        <DataDebug formData={this.state.formData} hidden={false}></DataDebug>
      </div>
    )
  }
}

// takes in a single validation error and  and displays it in more readable manner
// used by renderErrorListTemplate
function renderTransformedErrorObject(
  steps: Step[],
  error: AjvError,
  uiSchema: UiSchema,

  i: number,
  schema: any,
): JSX.Element {
  const propPath = _.trimStart(error.property, '.')
  const propArr = propPath.split('.')

  // some things require labels in schema (e.g. checkboxes) so this is preferred
  const labelFromSchema = `${propArr.join('.properties.')}.title`
  //can be overriden by label in UI
  const regLabelFromUi = `${propPath}.ui:title`
  //for array fields we need to change the property e.g.
  //  ld50.experiments[0].species_other should look like 'ld50.experiments.items.species_other'
  const arrayLabelFromUi = regLabelFromUi.replace(/\[.*?\]/, '.items')

  let label =
    _.get(schema.definitions, labelFromSchema) ||
    _.get(uiSchema, regLabelFromUi) ||
    _.get(uiSchema, arrayLabelFromUi) ||
    error.property

  const screen = _.find(steps, { id: propArr[0] }) || {
    title: propArr[0],
  }
  const element = (
    <li key={i} className="">
      <span>
        <strong>{screen.title}: </strong>
        {label}&nbsp; {error.message}
      </span>
    </li>
  )
  return element
}

//recursively sets property value to dangerouslySetInnerHTML of that value
function stringToElementForProp(srcObject: any, key: string): object {
  _.keys(srcObject).some(k => {
    if (k === key) {
      const value = srcObject[k]
      srcObject[k] = <span dangerouslySetInnerHTML={{ __html: value }}></span>

      return srcObject
    }
    if (srcObject[k] && typeof srcObject[k] === 'object') {
      stringToElementForProp(srcObject[k], key)
    }
  })
  return srcObject
}
