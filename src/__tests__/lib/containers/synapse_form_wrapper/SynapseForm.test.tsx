import * as React from 'react'
import { shallow } from 'enzyme'
import { Engine } from 'json-rules-engine'
import $RefParser from 'json-schema-ref-parser'
import _ from 'lodash-es'

import SynapseForm, {
  SynapseFormProps,
} from '../../../../lib/containers/synapse_form_wrapper/SynapseForm'

import {
  mockFormSchema as formSchema,
  mockNavSchema as formNavSchema,
  mockFormData as submissionData,
  mockUiSchema as formUiSchema,
  mockInvalidScreenData as inVivoData,
} from '../../../../mocks/mock_drug_tool_data'
import { NavActionEnum, Step } from '../../../../lib/containers/synapse_form_wrapper/types'

const formTitle = 'my submission'

const newFormData = {
  metadata: {
    formSchemaVersion: '01',
    uiSchemaVersion: '01',
    navSchemaVersion: '01',
  },
}

const createShallowComponent = async (props: SynapseFormProps) => {
  const schema = await $RefParser.dereference(props.schema)
  const _props = { ...props, ...{ schema } }
  const wrapper = shallow<SynapseForm>(<SynapseForm {..._props} />, {})

  const instance = wrapper.instance()
  return { wrapper, instance }
}

const mock = {
  submitFn: jest.fn(() => 'ok'),
  saveFn: jest.fn(() => 'ok'),
  formRef: {
    current: {
      submit: jest.fn(() => ''),
      setState: jest.fn(() => ''),
    },
  },
}

const props: SynapseFormProps = {
  schema: formSchema,

  navSchema: formNavSchema,
  uiSchema: formUiSchema,

  formData: newFormData,
  onSubmit: mock.submitFn,
  onSave: mock.saveFn,
  formTitle: formTitle,
  isWizardMode: false,
}

Engine.run = jest.fn(() => Promise.resolve('restrictions'))

describe('initialization tests', () => {
  it('intialize for new submission', async () => {
    const { instance, wrapper } = await createShallowComponent(props)

    expect(wrapper).toBeDefined()
    expect(instance.state.steps.length).toBe(props.navSchema.steps.length)
    expect(instance.state.formData).toEqual(newFormData)
    expect(instance.state.currentStep.id).toBe(props.navSchema.steps[0].id)
    expect(Object.keys(props.schema.properties!).length).toBeGreaterThan(1)
    const schema = instance.getSchema(instance.state.currentStep)
    expect(Object.keys(schema.properties).length).toBe(1)
    expect(Object.keys(schema.properties)[0]).toEqual(
      Object.keys(props.schema.properties!)[0],
    )
  })

  it('intialize for existing submission', async () => {
    const _props = { ...props, ...{ formData: submissionData } }
    const { instance, wrapper } = await createShallowComponent(_props)

    expect(wrapper).toBeDefined()
    expect(instance.state.formData['naming']['first_name']).toBe(
      submissionData.naming.first_name,
    )
  })
})

describe('action tests', () => {
  let instance: any
  let wrapper: any
  beforeEach(async () => {
    ;({ instance, wrapper } = await createShallowComponent(props))
    instance.formRef = mock.formRef
  })

  it('go to next step', async () => {
    const submitSpy = jest.spyOn(instance.formRef.current, 'submit')
    const saveState = jest.spyOn(instance, 'saveStepState')
    const getNextStepFn = jest
      .spyOn(instance, 'getNextStepId')
      .mockReturnValue(Promise.resolve('measurements'))
    expect(wrapper).toBeDefined()
    expect(instance.state.currentStep).toEqual(instance.state.steps[0])
    await instance.triggerAction(NavActionEnum.NEXT)
    expect(submitSpy).toHaveBeenCalled()
    const oldStepId = instance.state.currentStep.id
    await instance.performAction(NavActionEnum.NEXT, false)

    expect(getNextStepFn).toHaveBeenCalledWith(
      expect.objectContaining({ id: oldStepId }),
      instance.state.formData,
      undefined,
    )
    const nextStep = instance.state.steps.find(
      (step: Step) => step.id === 'measurements',
    )
    expect(saveState).toBeCalledTimes(1)
    expect(instance.state.currentStep.id).toEqual(nextStep!.id)
  })

  it('go to predetermined step', async () => {
    const submitSpy = jest.spyOn(instance.formRef.current, 'submit')
    const saveState = jest.spyOn(instance, 'saveStepState')
    const getNextStepFn = jest.spyOn(instance, 'getNextStepId')

    expect(instance.state.currentStep).toEqual(instance.state.steps[0])
    instance.nextStep = instance.state.steps[3]

    await instance.triggerAction(NavActionEnum.GO_TO_STEP)
    expect(submitSpy).toHaveBeenCalled()
    const oldStepId = instance.state.currentStep.id
    await instance.performAction(NavActionEnum.GO_TO_STEP, false)

    expect(getNextStepFn).toHaveBeenCalledWith(
      expect.objectContaining({ id: oldStepId }),
      instance.state.formData,
      instance.state.steps[3].id,
    )

    expect(saveState).toBeCalledTimes(1)
    expect(instance.state.currentStep.id).toEqual(instance.state.steps[3].id)
  })

  it('go to previous numerical step if not wizard', async () => {
    instance.nextStep = instance.state.steps[3]
    await instance.performAction(NavActionEnum.GO_TO_STEP, false)
    expect(instance.state.currentStep.id).toEqual(instance.state.steps[3].id)
    await instance.performAction(NavActionEnum.PREVIOUS, false)
    expect(instance.state.currentStep.id).toEqual(instance.state.steps[2].id)
  })

  it('go to previous visited step if  wizard', async () => {
    const _props = { ...props, ...{ isWizard: true } }
    let { instance } = await createShallowComponent(_props)
    instance.formRef = mock.formRef
    instance.nextStep = instance.state.steps[3]
    await instance.performAction(NavActionEnum.GO_TO_STEP, false)
    expect(instance.state.currentStep.id).toEqual(instance.state.steps[3].id)
    await instance.performAction(NavActionEnum.PREVIOUS, false)
    expect(instance.state.currentStep.id).toEqual(instance.state.steps[2].id)
  })

  it('show warning when excluding a screen', async () => {
    instance.nextStep = instance.state.steps[4]
    const excludeSpy = jest.spyOn(instance, 'showExcludeStateWarningModal')
    await instance.performAction(NavActionEnum.GO_TO_STEP, false)
    expect(instance.state.currentStep.id).toEqual(instance.state.steps[4].id)
    wrapper.find('.step-exclude-directions button').simulate('click')
    expect(excludeSpy).toHaveBeenCalled()
  })
})

describe('custom validation tests', () => {
  let instance: any
  let wrapper: any
  const updatedData = _.cloneDeep(submissionData)
  updatedData['in_vivo_data'] = inVivoData.in_vivo_data
  beforeEach(async () => {
    ;({ instance, wrapper } = await createShallowComponent({
      ...props,
      ...{ formData: updatedData },
    }))
    instance.formRef = mock.formRef
  })

  it('check custom validation before submitting the form', async () => {
    const submitSpy = jest.spyOn(instance.formRef.current, 'submit')
    const customValidation = jest.spyOn(instance, 'runCustomValidation')
    instance.nextStep = instance.state.steps[3]
    await instance.triggerAction(NavActionEnum.GO_TO_STEP)
    await instance.performAction(NavActionEnum.GO_TO_STEP, false)
    expect(submitSpy).toHaveBeenCalled()
    expect(customValidation).toHaveBeenCalled()
  })

  it('only run custom validation on all sections if the state is final', async () => {
    const currentStep = instance.state.steps[instance.state.steps.length - 1]
    expect(currentStep.final).toBe(true)
    expect(currentStep.validationRules).toBeUndefined()
    const errors = await instance.runCustomValidation(
      updatedData,
      currentStep,
      instance.state.steps,
    )
    expect(errors).toHaveLength(5)
  })

  it('run custom validation on a single  section if the step is not final', async () => {
    const currentStep = instance.state.steps[0]
    expect(currentStep.final).toBeFalsy()
    expect(currentStep.validationRules.length).toBe(2)
    const errors = await instance.runCustomValidation(
      updatedData,
      currentStep,
      instance.state.steps,
    )
    expect(errors).toHaveLength(1)
  })

  it('should generate additional rules if the the rule is specified with [*]', async () => {
    const currentStep = instance.state.steps[6]
    expect(currentStep.final).toBeFalsy()
    expect(currentStep.validationRules.length).toBe(2)
    expect(
      currentStep.validationRules[0].event.params.property.indexOf('[*]'),
    ).not.toBe(-1)
    expect(
      currentStep.validationRules[1].event.params.property.indexOf('[*]'),
    ).not.toBe(-1)
    expect(
      updatedData.in_vivo_data.experiments[0].age_range.age_range_min,
    ).toBeGreaterThan(
      updatedData.in_vivo_data.experiments[0].age_range.age_range_max,
    )
    expect(
      updatedData.in_vivo_data.experiments[1].age_range.age_range_min,
    ).toBeGreaterThan(
      updatedData.in_vivo_data.experiments[1].age_range.age_range_max,
    )
    expect(
      updatedData.in_vivo_data.experiments[0].dose_range.dose_range_min,
    ).toBeGreaterThan(
      updatedData.in_vivo_data.experiments[0].dose_range.dose_range_max,
    )
    expect(
      updatedData.in_vivo_data.experiments[1].dose_range.dose_range_min,
    ).toBeGreaterThan(
      updatedData.in_vivo_data.experiments[1].dose_range.dose_range_max,
    )

    expect(updatedData['in_vivo_data']['experiments']).toHaveLength(2)
    let errors = await instance.runCustomValidation(
      updatedData,
      currentStep,
      instance.state.steps,
    )
    expect(errors).toHaveLength(4)
    updatedData.in_vivo_data.experiments[0].age_range.age_range_min = 2
    updatedData.in_vivo_data.experiments[0].dose_range.dose_range_min = 1
    errors = await instance.runCustomValidation(
      updatedData,
      currentStep,
      instance.state.steps,
    )
    expect(errors).toHaveLength(2)
    updatedData.in_vivo_data.experiments[1].age_range.age_range_min = 2
    updatedData.in_vivo_data.experiments[1].dose_range.dose_range_min = 1
    errors = await instance.runCustomValidation(
      updatedData,
      currentStep,
      instance.state.steps,
    )
    expect(errors).toHaveLength(0)
  })
})
