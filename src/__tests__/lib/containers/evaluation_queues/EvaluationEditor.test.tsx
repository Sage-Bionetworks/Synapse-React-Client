import { Evaluation } from '../../../../lib/utils/synapseTypes'
import {
  EvaluationEditor,
  EvaluationEditorProps,
} from '../../../../lib/containers/evaluation_queues/EvaluationEditor'
import JestMockPromise from 'jest-mock-promise'
import { SynapseClient } from '../../../../lib/utils'
import { mount } from 'enzyme'
import React from 'react'
import { Form } from 'react-bootstrap'
import { ErrorBanner } from '../../../../lib/containers/ErrorBanner'
import WarningModal from '../../../../lib/containers/synapse_form_wrapper/WarningModal'

describe('test EvaluationEditor', () => {
  const sessionToken = 'sssssssssssssssssssssss'
  const evaluationId = '1234'
  const entityId = 'syn1111111'
  let evaluation: Evaluation
  let props: EvaluationEditorProps

  let mockOnDeleteSuccess: jest.Mock

  let mockGetEvaluation: jest.Mock
  let mockCreateEvaluation: jest.Mock
  let mockUpdateEvaluation: jest.Mock
  let mockDeleteEvaluation: jest.Mock
  let mockOnSaveSuccess: jest.Mock

  beforeEach(() => {
    evaluation = {
      id: evaluationId,
      etag: 'eeeeeeeeeeeeeeeee',
      name: 'E V A L U A T I O N',
      description: 'This is an awesome queue',
      ownerId: '1231231321',
      createdOn: '2020-09-18T09:44:04.939Z',
      contentSource: entityId,
      submissionInstructionsMessage: "no you can't just make a submission",
      submissionReceiptMessage: 'haha submission go brrrrrrrr',
    }

    mockOnDeleteSuccess = jest.fn()
    mockOnSaveSuccess = jest.fn()

    props = {
      sessionToken: sessionToken,
      evaluationId: evaluationId,
      utc: true,
      onDeleteSuccess: mockOnDeleteSuccess,
      onSaveSuccess: mockOnSaveSuccess,
    }

    mockGetEvaluation = jest.fn(
      () => new JestMockPromise(resolve => resolve(evaluation)),
    )
    jest
      .spyOn(SynapseClient, 'getEvaluation')
      .mockImplementation(mockGetEvaluation)

    mockUpdateEvaluation = jest.fn(
      () => new JestMockPromise(resolve => resolve(evaluation)),
    )
    jest
      .spyOn(SynapseClient, 'updateEvaluation')
      .mockImplementation(mockUpdateEvaluation)

    mockCreateEvaluation = jest.fn(
      () => new JestMockPromise(resolve => resolve(evaluation)),
    )
    jest
      .spyOn(SynapseClient, 'createEvaluation')
      .mockImplementation(mockCreateEvaluation)

    mockDeleteEvaluation = jest.fn(
      () => new JestMockPromise(resolve => resolve()),
    )
    jest
      .spyOn(SynapseClient, 'deleteEvaluation')
      .mockImplementation(mockDeleteEvaluation)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('retrieve evaluation from API if evaluationId is provided', () => {
    const wrapper = mount(<EvaluationEditor {...props} />)

    expect(wrapper.find('h4').text()).toBe('Edit Evaluation Queue')
    expect(mockGetEvaluation).toBeCalledWith(evaluationId, sessionToken)
    expect(wrapper.find(ErrorBanner).exists()).toBe(false)
  })

  test('do not retrieve evaluation from API if id is not provided', () => {
    props = { ...props, entityId, evaluationId: undefined }
    const wrapper = mount(<EvaluationEditor {...props} />)

    expect(wrapper.find('h4').text()).toBe('Create Evaluation Queue')
    expect(mockGetEvaluation).not.toBeCalled()
    expect(wrapper.find(ErrorBanner).exists()).toBe(false)
  })

  test('retrieve evaluation from API failed', () => {
    mockGetEvaluation.mockImplementation(
      () =>
        new JestMockPromise((resolve, reject) =>
          reject(new Error('GetEvaluation error')),
        ),
    )

    const wrapper = mount(<EvaluationEditor {...props} />)

    expect(mockGetEvaluation).toBeCalledWith(evaluationId, sessionToken)
    expect(wrapper.find(ErrorBanner).exists()).toBe(true)
  })

  test('error thrown when using both evaluationId and entityId', () => {
    props = { ...props, entityId, evaluationId }

    spyOn(console, 'error')

    expect(() => mount(<EvaluationEditor {...props} />)).toThrow(Error)
  })

  test('save button clicked when using entityId creates new evaluation', () => {
    props = { ...props, entityId, evaluationId: undefined }

    const wrapper = mount(<EvaluationEditor {...props} />)

    const nameInputBox = wrapper.find(Form.Control).at(0)
    expect(nameInputBox.prop('value')).toBe('')
    nameInputBox.simulate('change', {
      target: { value: 'E V A L U A T I O N' },
    })

    wrapper.find('Button.save-button').simulate('click')

    expect(mockCreateEvaluation).toBeCalledWith(
      {
        contentSource: 'syn1111111',
        description: '',
        name: 'E V A L U A T I O N',
        submissionInstructionsMessage: '',
        submissionReceiptMessage: '',
      },
      sessionToken,
    )
    expect(mockUpdateEvaluation).not.toBeCalled()
    expect(mockOnSaveSuccess).toBeCalledWith(evaluationId)

    //clicking save button again after the first time should call update instead
    wrapper.find('Button.save-button').simulate('click')
    expect(mockUpdateEvaluation).toBeCalledWith(evaluation, sessionToken)
    expect(mockOnSaveSuccess).toBeCalledWith(evaluationId)
    expect(wrapper.find(ErrorBanner).exists()).toBe(false)
    expect(wrapper.find('Alert.save-success-alert').exists()).toBe(true)
  })

  test('save button clicked when using evaluationId updates evaluation', () => {
    const wrapper = mount(<EvaluationEditor {...props} />)

    //clicking save button again after the first time should call update instead
    wrapper.find('Button.save-button').simulate('click')
    expect(mockUpdateEvaluation).toBeCalledWith(evaluation, sessionToken)
    expect(mockCreateEvaluation).not.toBeCalled()
    expect(mockOnSaveSuccess).toBeCalledWith(evaluationId)
    expect(wrapper.find(ErrorBanner).exists()).toBe(false)
    expect(wrapper.find('Alert.save-success-alert').exists()).toBe(true)
  })

  test('save button clicked - save failure', () => {
    mockUpdateEvaluation.mockImplementation(
      () =>
        new JestMockPromise((resolve, reject) =>
          reject(new Error('UpdateEvaluation error')),
        ),
    )

    const wrapper = mount(<EvaluationEditor {...props} />)

    //clicking save button again after the first time should call update instead
    wrapper.find('Button.save-button').simulate('click')
    expect(mockUpdateEvaluation).toBeCalledWith(evaluation, sessionToken)
    expect(mockCreateEvaluation).not.toBeCalled()
    expect(mockOnSaveSuccess).not.toBeCalled()
    expect(wrapper.find(ErrorBanner).exists()).toBe(true)
    expect(wrapper.find('Alert.save-success-alert').exists()).toBe(false)
  })

  test('dropdown menu evaluation has no id - hide delete option', () => {
    props = { ...props, entityId, evaluationId: undefined }

    const wrapper = mount(<EvaluationEditor {...props} />)

    wrapper.find('DropdownToggle').simulate('click')

    // the warning modal for delete should not be instantiated at all
    expect(wrapper.find(WarningModal).exists()).toBe(false)

    const dropdownItems = wrapper.find('DropdownMenu').find('DropdownItem')
    expect(dropdownItems.length).toBe(1)

    const saveOption = dropdownItems.at(0)
    expect(saveOption.text()).toBe('Save')
    saveOption.simulate('click')
    expect(mockCreateEvaluation).toBeCalled()
    expect(mockUpdateEvaluation).not.toBeCalled()
  })

  test('dropdown menu evaluation has id - delete successful', () => {
    const wrapper = mount(<EvaluationEditor {...props} />)

    wrapper.find('DropdownToggle').simulate('click')

    const dropdownItems = wrapper.find('DropdownMenu').find('DropdownItem')
    expect(dropdownItems.length).toBe(2)

    const saveOption = dropdownItems.at(0)
    expect(saveOption.text()).toBe('Save')
    saveOption.simulate('click')
    expect(mockCreateEvaluation).not.toBeCalled()
    expect(mockUpdateEvaluation).toBeCalled()

    const deleteOption = dropdownItems.at(1)
    expect(deleteOption.text()).toBe('Delete')
    deleteOption.simulate('click')

    const deleteWarningModal = wrapper.find(WarningModal)
    expect(deleteWarningModal.prop('show')).toBe(true)

    //simulate the warning button click
    deleteWarningModal.find('.btn-danger').simulate('click')

    expect(mockDeleteEvaluation).toBeCalled()
    expect(mockOnDeleteSuccess).toBeCalled()

    expect(wrapper.find(ErrorBanner).exists()).toBe(false)
  })

  test('dropdown menu evaluation has id - delete failed', () => {
    mockDeleteEvaluation.mockImplementation(
      () =>
        new JestMockPromise((resolve, reject) =>
          reject(new Error('GetEvaluation error')),
        ),
    )

    const wrapper = mount(<EvaluationEditor {...props} />)

    wrapper.find('DropdownToggle').simulate('click')

    const dropdownItems = wrapper.find('DropdownMenu').find('DropdownItem')
    expect(dropdownItems.length).toBe(2)

    const saveOption = dropdownItems.at(0)
    expect(saveOption.text()).toBe('Save')
    saveOption.simulate('click')
    expect(mockCreateEvaluation).not.toBeCalled()
    expect(mockUpdateEvaluation).toBeCalled()

    //delete should exist, but clicking it is predestined to fail
    const deleteOption = dropdownItems.at(1)
    expect(deleteOption.text()).toBe('Delete')
    deleteOption.simulate('click')

    const deleteWarningModal = wrapper.find(WarningModal)
    expect(deleteWarningModal.prop('show')).toBe(true)

    //simulate the warning button click
    deleteWarningModal.find('.btn-danger').simulate('click')

    expect(mockDeleteEvaluation).toBeCalled()
    expect(mockOnDeleteSuccess).not.toBeCalled()

    expect(wrapper.find(ErrorBanner).exists()).toBe(true)
    expect(wrapper.find('Alert.save-success-alert').exists()).toBe(false)
  })
})
