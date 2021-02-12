import { UserEvaluationPermissions } from '../../../../lib/utils/synapseTypes/Evaluation/UserEvaluationPermissions'
import React from 'react'
import JestMockPromise from 'jest-mock-promise'
import { SynapseClient } from '../../../../lib'
import { EvaluationStatus } from '../../../../lib/utils/synapseTypes'
import { mount } from 'enzyme'
import {
  EvaluationCard,
  EvaluationCardProps,
  ExistingEvaluation,
} from '../../../../lib/containers/evaluation_queues/EvaluationCard'
import { CreatedOnByUserDiv } from '../../../../lib/containers/evaluation_queues/CreatedOnByUserDiv'
import { ErrorBanner } from '../../../../lib/containers/ErrorBanner'
import WarningModal from '../../../../lib/containers/synapse_form_wrapper/WarningModal'

describe('test Evaluation Card', () => {
  let permissions: UserEvaluationPermissions
  let evaluation: ExistingEvaluation
  let props: EvaluationCardProps

  let mockGetEvaluationPermissions: jest.Mock
  let mockDeleteEvaluation: jest.Mock

  let mockOnEdit: jest.Mock
  let mockOnModifyAccess: jest.Mock
  let mockOnSubmit: jest.Mock
  let mockOnDeleteSuccess: jest.Mock

  beforeEach(() => {
    evaluation = {
      id: '1234',
      etag: 'eeeeeeeeeeeeeeeee',
      name: 'E V A L U A T I O N',
      description: 'This is an awesome queue',
      ownerId: '1231231321',
      createdOn: '2020-09-18T09:44:04.939Z',
      contentSource: 'syn1111111',
      status: EvaluationStatus.OPEN,
      submissionInstructionsMessage: "no you can't just make a submission",
      submissionReceiptMessage: 'haha submission go brrrrrrrr',
    }

    permissions = {
      canChangePermissions: true,
      canDeleteSubmissions: true,
      canEditSubmissionStatuses: true,
      canParticipate: true,
      canPublicRead: true,
      canView: true,
      canViewPrivateSubmissionStatusAnnotations: true,
      ownerPrincipalId: 12345,
      canEdit: true,
      canSubmit: true,
      canDelete: true,
    }

    mockOnEdit = jest.fn()
    mockOnModifyAccess = jest.fn()
    mockOnSubmit = jest.fn()
    mockOnDeleteSuccess = jest.fn()

    props = {
      evaluation: evaluation,
      onEdit: mockOnEdit,
      onModifyAccess: mockOnModifyAccess,
      onSubmit: mockOnSubmit,
      onDeleteSuccess: mockOnDeleteSuccess,
      sessionToken: 'session token',
      utc: false,
    }

    mockGetEvaluationPermissions = jest.fn(
      () => new JestMockPromise(resolve => resolve(permissions)),
    )
    jest
      .spyOn(SynapseClient, 'getEvaluationPermissions')
      .mockImplementation(mockGetEvaluationPermissions)

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

  test('test retrieve evaluation permissions - failure', () => {
    mockGetEvaluationPermissions.mockImplementation(() => {
      return new JestMockPromise((resolve, reject) => {
        reject(new Error("OOPS! It's a error getting EvaluationPermission"))
      })
    })

    const wrapper = mount(<EvaluationCard {...props} />)
    expect(wrapper.find(ErrorBanner).exists()).toBe(true)
    expect(wrapper.find(ErrorBanner).text()).toBe(
      "OOPS! It's a error getting EvaluationPermission",
    )
  })

  test('test all retrieve calls happy case', () => {
    const wrapper = mount(<EvaluationCard {...props} />)

    expect(wrapper.find(ErrorBanner).exists()).toBe(false)
    expect(wrapper.contains(<h4>E V A L U A T I O N (1234)</h4>)).toBe(true)
    expect(wrapper.find('.status-open').exists()).toBe(true)

    expect(
      wrapper.contains(<p>no you can&apos;t just make a submission</p>),
    ).toBe(true)
    expect(wrapper.contains(<p>This is an awesome queue</p>)).toBe(true)
    expect(wrapper.find(CreatedOnByUserDiv).exists()).toBe(true)
    expect(wrapper.find('Button.submit-button').exists()).toBe(true)
  })

  test('test submit button not shown when user does not have permission', () => {
    permissions.canSubmit = false

    const wrapper = mount(<EvaluationCard {...props} />)

    expect(wrapper.find('Button.submit-button').exists()).toBe(false)
  })

  test('no permissions for any dropdown option - no dropdown shown', () => {
    permissions.canEdit = false
    permissions.canChangePermissions = false
    permissions.canDelete = false

    const wrapper = mount(<EvaluationCard {...props} />)

    expect(wrapper.find('Dropdown').exists()).toBe(false)
  })

  test('no permissions for edit dropdown option - hide option', () => {
    permissions.canEdit = false

    const wrapper = mount(<EvaluationCard {...props} />)

    expect(wrapper.find('Dropdown').exists()).toBe(true)
    // simulate a click
    wrapper.find('DropdownToggle').simulate('click')

    //simulate a dropdown menu click
    const dropdownItems = wrapper.find('DropdownMenu').find('DropdownItem')
    expect(dropdownItems.length).toBe(2)

    const modifyAccessOption = dropdownItems.at(0)
    expect(modifyAccessOption.text()).toBe('Modify Access')
    modifyAccessOption.simulate('click')
    expect(mockOnModifyAccess).toBeCalled()

    const deleteOption = dropdownItems.at(1)
    expect(deleteOption.text()).toBe('Delete')
    deleteOption.simulate('click')

    const deleteWarningModal = wrapper.find(WarningModal)
    expect(deleteWarningModal.prop('show')).toBe(true)

    //simulate the warning button click
    deleteWarningModal.find('.btn-danger').simulate('click')

    expect(mockDeleteEvaluation).toBeCalled()
    expect(mockOnDeleteSuccess).toBeCalled()
  })

  test('no permissions for modify access dropdown option - hide option', () => {
    permissions.canChangePermissions = false

    const wrapper = mount(<EvaluationCard {...props} />)

    expect(wrapper.find('Dropdown').exists()).toBe(true)
    // simulate a click
    wrapper.find('DropdownToggle').simulate('click')

    //simulate a dropdown menu click
    const dropdownItems = wrapper.find('DropdownMenu').find('DropdownItem')
    expect(dropdownItems.length).toBe(2)

    const editOption = dropdownItems.at(0)
    expect(editOption.text()).toBe('Edit')
    editOption.simulate('click')
    expect(mockOnEdit).toBeCalled()

    //a menu separator exists for delete
    expect(wrapper.find('DropdownDivider').exists()).toBe(true)

    const deleteOption = dropdownItems.at(1)
    expect(deleteOption.text()).toBe('Delete')
    deleteOption.simulate('click')

    const deleteWarningModal = wrapper.find(WarningModal)
    expect(deleteWarningModal.prop('show')).toBe(true)

    //simulate the warning button click
    deleteWarningModal.find('.btn-danger').simulate('click')

    expect(mockDeleteEvaluation).toBeCalled()
    expect(mockOnDeleteSuccess).toBeCalled()
  })

  test('no permissions for delete dropdown option - hide option', () => {
    permissions.canDelete = false

    const wrapper = mount(<EvaluationCard {...props} />)

    expect(wrapper.find('Dropdown').exists()).toBe(true)
    // simulate a click
    wrapper.find('DropdownToggle').simulate('click')

    //simulate a dropdown menu click
    const dropdownItems = wrapper.find('DropdownMenu').find('DropdownItem')
    expect(dropdownItems.length).toBe(2)

    const editOption = dropdownItems.at(0)
    expect(editOption.text()).toBe('Edit')
    editOption.simulate('click')
    expect(mockOnEdit).toBeCalled()

    const modifyAccessOption = dropdownItems.at(1)
    expect(modifyAccessOption.text()).toBe('Modify Access')
    modifyAccessOption.simulate('click')
    expect(mockOnModifyAccess).toBeCalled()

    // a menu separator shod not be created because the delete option does not exist
    expect(wrapper.find('DropdownDivider').exists()).toBe(false)
  })

  test('permissions for all dropdown options', () => {
    const wrapper = mount(<EvaluationCard {...props} />)

    expect(wrapper.find('Dropdown').exists()).toBe(true)
    // simulate a click
    wrapper.find('DropdownToggle').simulate('click')

    //simulate a dropdown menu click
    const dropdownItems = wrapper.find('DropdownMenu').find('DropdownItem')
    expect(dropdownItems.length).toBe(3)

    const editOption = dropdownItems.at(0)
    expect(editOption.text()).toBe('Edit')
    editOption.simulate('click')
    expect(mockOnEdit).toBeCalled()

    const modifyAccessOption = dropdownItems.at(1)
    expect(modifyAccessOption.text()).toBe('Modify Access')
    modifyAccessOption.simulate('click')
    expect(mockOnModifyAccess).toBeCalled()

    //a menu separator exists for delete
    expect(wrapper.find('DropdownDivider').exists()).toBe(true)

    const deleteOption = dropdownItems.at(2)
    expect(deleteOption.text()).toBe('Delete')
    deleteOption.simulate('click')

    const deleteWarningModal = wrapper.find(WarningModal)
    expect(deleteWarningModal.prop('show')).toBe(true)

    //simulate the warning button click
    deleteWarningModal.find('.btn-danger').simulate('click')

    expect(mockDeleteEvaluation).toBeCalled()
    expect(mockOnDeleteSuccess).toBeCalled()
  })

  test('Delete options API call failure - onDeleteSuccess callback not called', () => {
    mockDeleteEvaluation.mockImplementation(() => {
      return new JestMockPromise((resolve, reject) => {
        reject(new Error("OOPS! It's a error Deleting"))
      })
    })

    const wrapper = mount(<EvaluationCard {...props} />)

    expect(wrapper.find('Dropdown').exists()).toBe(true)
    // simulate a click
    wrapper.find('DropdownToggle').simulate('click')

    //simulate a dropdown menu click
    const dropdownItems = wrapper.find('DropdownMenu').find('DropdownItem')
    expect(dropdownItems.length).toBe(3)

    const deleteOption = dropdownItems.at(2)
    expect(deleteOption.text()).toBe('Delete')
    deleteOption.simulate('click')

    const deleteWarningModal = wrapper.find(WarningModal)
    expect(deleteWarningModal.prop('show')).toBe(true)

    //simulate the warning button click
    deleteWarningModal.find('.btn-danger').simulate('click')

    expect(mockDeleteEvaluation).toBeCalled()
    expect(mockOnDeleteSuccess).not.toBeCalled()
  })
})
