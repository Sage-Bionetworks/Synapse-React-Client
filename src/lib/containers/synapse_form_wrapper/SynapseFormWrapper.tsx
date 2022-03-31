import $RefParser from '@apidevtools/json-schema-ref-parser'
import { get, includes } from 'lodash-es'
import * as React from 'react'
import { Button } from 'react-bootstrap'
import {Alert} from 'react-bootstrap'
import { UiSchema } from '@rjsf/core'
import { SynapseClient } from '../../utils'
import { SRC_SIGN_IN_CLASS } from '../../utils/SynapseConstants'
import { FileEntity, FormData } from '../../utils/synapseTypes/'
import SynapseForm from './SynapseForm'
import { StatusEnum } from './types'

/**
 * TODO: SWC-5612 - Replace token prop with SynapseContext.accessToken
 *
 * This wasn't done because Enzyme's shallow renderer is not currently
 * compatible with the `contextType` field in the React 16+ context API.
 *
 * This can be fixed by rewriting tests to not rely on the shallow renderer.
 *
 * See here: https://github.com/enzymejs/enzyme/issues/1553
 */

export type UploadToolSearchParams = {
  formDataId?: string //formDataId for user data form data
  dataFileHandleId?: string //fileHandle to get userData
  submitted?: boolean // if the file has been submitted
  formGroupId: string
}

export type SynapseFormWrapperProps = {
  // Provide the parent container (folder/project), that should contain a folder (named <user_id>) that this user can write to.
  formSchemaEntityId: string // Synapse file that contains the form schema.
  formUiSchemaEntityId: string // Synapse file that contains the form ui schema.
  formNavSchemaEntityId: string //Synapse file that consists screen nav schema
  token?: string // user's access token
  searchParams?: UploadToolSearchParams
  isWizardMode?: boolean // if we are displaying the form in wizard mode
  fileNamePath: string // path in data to specify the name of saved file
  formTitle: string //for UI customization
  formClass?: string // to support potential theaming
}

type SynapseFormWrapperState = {
  notification?: Notification
  isLoading?: boolean
  formDataId?: string // file holding user form data
  formData?: any // form data that prepopulates the form
  formSchema?: any // schema that drives the form
  formUiSchema?: UiSchema // ui schema that directs how to render the form elements
  formNavSchema?: any // drives the steps left panel

  status?: StatusEnum
}

type Error = {
  name?: string
  message?: string
}

interface Notification extends Error {
  type: StatusEnum
}

class SynapseFormWrapper extends React.Component<
  SynapseFormWrapperProps,
  SynapseFormWrapperState
> {
  constructor(props: SynapseFormWrapperProps) {
    super(props)
    this.state = {
      isLoading: true,
      formDataId: this.props?.searchParams?.formDataId,
    }
  }

  async componentDidMount() {
    await this.getData(this.props.token)
  }

  async componentDidUpdate(prevProps: SynapseFormWrapperProps) {
    const shouldUpdate = this.props.token !== prevProps.token
    if (shouldUpdate) {
      await this.getData(this.props.token)
    }
  }

  //gets a file entity with content
  getFileEntityData = async (
    token: string,
    entityId: string,
    versionNumber?: string,
  ): Promise<{ version?: number; content: JSON }> => {
    try {
      const entity: FileEntity = await SynapseClient.getEntity(
        token,
        entityId,
        versionNumber,
      )
      const fileHandleContent = await SynapseClient.getFileResult(
        entity,
        token,
        true,
        true,
      )
      const fileContent = await SynapseClient.getFileHandleContent(
        fileHandleContent.fileHandle!,
        fileHandleContent.preSignedURL!,
      )
      const content = JSON.parse(fileContent)
      return {
        version: entity.versionNumber,
        content: content,
      }
    } catch (error) {
      const newError = {
        message: `${error.message}:  configuration data for ${entityId} failed to load`,
      }
      this.onError(newError)
      return Promise.reject(newError)
    }
  }

  //same as above but also uses $RefParser to convert json $refs to regular json
  getFileEntityDataDereferenced = async (
    token: string,
    entityId: string,
    versionNumber?: string,
  ): Promise<{ version?: number; content: JSON }> => {
    const { version, content } = await this.getFileEntityData(
      token,
      entityId,
      versionNumber,
    )
    const derefContent = (await $RefParser.dereference(content)) as JSON
    return {
      version: version,
      content: derefContent,
    }
  }

  getData = async (token?: string): Promise<void> => {
    if (!token) {
      return
    }
    try {
      let formData = {}
      let dataFileHandleId: string | undefined
      let submitted: boolean | undefined
      let formSchemaVersion = undefined
      let uiSchemaVersion = undefined
      let navSchemaVersion = undefined
      const { searchParams } = this.props
      if (searchParams) {
        ;({ dataFileHandleId, submitted } = searchParams)
      }

      //for not new form we need to get the data
      //and if it is submitted form we need to pull appropriave schema versions
      //for new form (no dataFileHandleId) we need to populate schema versions

      if (dataFileHandleId) {
        const fileData = await SynapseClient.getFileHandleContentFromID(
          dataFileHandleId,
          token,
        )
        formData = JSON.parse(fileData)
        if (submitted && formData && formData['metadata']) {
          ;({ formSchemaVersion, uiSchemaVersion, navSchemaVersion } = formData[
            'metadata'
          ])
        }
      }

      const promises = [
        this.getFileEntityDataDereferenced(
          token,
          this.props.formSchemaEntityId,
          formSchemaVersion,
        ),
        this.getFileEntityData(
          token,
          this.props.formUiSchemaEntityId,
          uiSchemaVersion,
        ),
        this.getFileEntityData(
          token,
          this.props.formNavSchemaEntityId,
          navSchemaVersion,
        ),
      ]
      const configData = await Promise.all(promises)

      if (!dataFileHandleId) {
        //if we are creating a new file - store the versions
        formData = {
          metadata: {
            formSchemaVersion: configData[0].version,
            uiSchemaVersion: configData[1].version,
            navSchemaVersion: configData[2].version,
          },
        }
      }
      this.setState({
        formData: formData,
        formSchema: configData[0].content,
        formUiSchema: configData[1].content,
        formNavSchema: configData[2].content,
        isLoading: false,
      })
    } catch (error) {
      this.onError({ message: error })
    } finally {
      this.setState({
        isLoading: false,
      })
    }
  }

  finishedProcessing = (status: StatusEnum, message?: string) => {
    this.setState({
      isLoading: false,
      notification: { type: status, message: message },
      status: status,
    })
    //this will show the update message for 7 seconds
    setTimeout(() => {
      this.setState({ status: undefined })
    }, 7000)
  }

  onError = (error: Error) => {
    this.setState({
      notification: {
        type: StatusEnum.ERROR,
        message: error.message,
        name: error.name,
      },
      status: StatusEnum.ERROR,
      isLoading: false,
    })
  }

  submitForm = async (formData: any) => {
    await this.saveToFile(formData)

    this.setState({
      isLoading: true,
    })

    await SynapseClient.submitFormData(this.state.formDataId!, this.props.token)
    this.finishedProcessing(StatusEnum.SUBMIT_SUCCESS, 'File Submitted')
  }

  createOrUpdateFormDataFile = async (
    fileName: string,
    fileContentsBlob: Blob,
  ): Promise<FormData> => {
    fileName = `${fileName}.json`
    const fileUploadComplete = await SynapseClient.uploadFile(
      this.props.token,
      fileName,
      fileContentsBlob,
    )
    const { searchParams } = this.props
    const formGroupId = searchParams && searchParams.formGroupId
    if (!formGroupId) {
      console.error('formGroupId must be defined')
      throw 'formGroupId must be defined'
    }
    try {
      // do we need to create a new file entity, or update an existing file entity?
      const newFileHandleId = fileUploadComplete.fileHandleId

      let formData
      if (this.state.formDataId) {
        formData = await SynapseClient.updateFormData(
          this.state.formDataId,
          fileName,
          newFileHandleId,
          this.props.token!,
        )
      } else {
        formData = await SynapseClient.createFormData(
          formGroupId,
          fileName,
          newFileHandleId,
          this.props.token!,
        )
      }

      return formData
    } catch (error) {
      this.onError(error)
      throw error
    }
  }

  saveToFile = async (data: any) => {
    const fileName = get(data, this.props.fileNamePath)
    this.setState({
      status: StatusEnum.PROGRESS,
      notification: { type: StatusEnum.PROGRESS, message: 'Progress' },
      isLoading: true,
    })

    if (!fileName) {
      // try to find corresponding property. By convention it should be first level property
      // and follow pattern screen.prop
      let errorTitle = 'File Name'
      try {
        // get it to the schema format
        const searchString = `${this.props.fileNamePath.replace(
          '.',
          '.properties.',
        )}.title`
        errorTitle = get(
          this.state.formSchema.properties,
          searchString,
          errorTitle,
        )
      } finally {
        const error = `Please Provide the ${errorTitle} before saving`
        this.onError({ message: error })
      }
      return
    }

    try {
      const fileContent: Blob = new Blob([JSON.stringify(data)], {
        type: 'text/json',
      })

      const formData = await this.createOrUpdateFormDataFile(
        fileName,
        fileContent,
      )
      this.setState({
        formDataId: formData.formDataId,
      })

      this.finishedProcessing(StatusEnum.SAVE_SUCCESS, 'File Saved')
    } catch (error) {
      this.onError({ message: error })
    }
  }

  isReadyToDisplayForm = (state: SynapseFormWrapperState): boolean => {
    return (
      this.state.status !== StatusEnum.ERROR_CRITICAL &&
      state.formSchema &&
      state.formUiSchema &&
      state.formNavSchema &&
      state.formData
    )
  }

  renderLoader = (
    state: SynapseFormWrapperState,
    props: SynapseFormWrapperProps,
  ): JSX.Element => {
    if (
      includes([StatusEnum.ERROR, StatusEnum.ERROR_CRITICAL], state.status) &&
      props.token &&
      state.isLoading
    ) {
      return (
        <div className="text-center">
          <span className={'spinner'} />
        </div>
      )
    } else {
      return <></>
    }
  }

  renderNotification = (notification?: Notification): JSX.Element => {
    if (!notification) {
      return <></>
    }
    if (notification.type === StatusEnum.ERROR) {
      return (
        <Alert
          variant="danger"
          onClose={() => this.setState({ status: undefined })}
        >
          <Alert.Heading>Error</Alert.Heading>

          <p>
            {notification.name} {notification.message}
          </p>
        </Alert>
      )
    }

    return <></>
  }

  renderUnauthenticatedView = (token: string | undefined) => {
    if (token) {
      return <></>
    } else {
      return (
        <div className="panel padding-full unauthenticated text-center bootstrap-4-backport">
          Please
          <Button
            variant="light-primary-base"
            style={{ margin: '10px' }}
            className={`pill ${SRC_SIGN_IN_CLASS}`}
          >
            sign in
          </Button>
          to initiate or continue your submission
        </div>
      )
    }
  }

  render() {
    return (
      <div className={`theme-${this.props.formClass}`}>
        <div className="SRC-ReactJsonForm">
          {this.renderNotification(this.state.notification)}
          {this.renderLoader(this.state, this.props)}
          {this.renderUnauthenticatedView(this.props.token)}

          {this.isReadyToDisplayForm(this.state) && (
            <div>
              <SynapseForm
                schema={this.state.formSchema}
                uiSchema={this.state.formUiSchema!}
                formData={this.state.formData}
                navSchema={this.state.formNavSchema}
                isWizardMode={this.props.isWizardMode}
                formTitle={this.props.formTitle}
                formClass={this.props.formClass}
                callbackStatus={this.state.status}
                onSave={(data: any) => this.saveToFile(data)}
                onSubmit={(data: any) => this.submitForm(data)}
                isSubmitted={
                  this.props.searchParams && !!this.props.searchParams.submitted
                }
              ></SynapseForm>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default SynapseFormWrapper
