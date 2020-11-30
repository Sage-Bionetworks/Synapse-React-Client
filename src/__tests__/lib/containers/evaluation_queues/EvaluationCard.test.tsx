import { UserEvaluationPermissions } from '../../../../lib/utils/synapseTypes/Evaluation/UserEvaluationPermissions'
import React from 'react'
import JestMockPromise from 'jest-mock-promise'
import { SynapseClient } from '../../../../lib'
import {
  Evaluation,
  EvaluationStatus,
} from '../../../../lib/utils/synapseTypes/Evaluation'
import { mount } from 'enzyme'
import {
  EvaluationCard,
  EvaluationCardProps,
} from '../../../../lib/containers/evaluation_queues/EvaluationCard'
import { CreatedOnByUserDiv } from '../../../../lib/containers/evaluation_queues/CreatedOnByUserDiv'

describe('test Evaluation Card', () => {
  let permissions: UserEvaluationPermissions
  let evaluation: Evaluation
  let props: EvaluationCardProps

  let mockGetEvaluationPermissions: jest.Mock
  let mockGetEvaluation: jest.Mock

  let mockOnEdit: jest.Mock
  let mockOnDelete: jest.Mock
  let mockOnModifyAccess: jest.Mock
  let mockOnSubmit: jest.Mock

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
    mockOnDelete = jest.fn()
    mockOnSubmit = jest.fn()

    props = {
      evaluationId: '112233',
      onDelete: mockOnDelete,
      onEdit: mockOnEdit,
      onModifyAccess: mockOnModifyAccess,
      onSubmit: mockOnSubmit,
      sessionToken: 'session token',
      utc: false,
    }

    mockGetEvaluation = jest.fn(
      () => new JestMockPromise(resolve => resolve(evaluation)),
    )
    jest
      .spyOn(SynapseClient, 'getEvaluation')
      .mockImplementation(mockGetEvaluation)

    mockGetEvaluationPermissions = jest.fn(
      () => new JestMockPromise(resolve => resolve(permissions)),
    )
    jest
      .spyOn(SynapseClient, 'getEvaluationPermissions')
      .mockImplementation(mockGetEvaluationPermissions)
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
    expect(wrapper.find('ErrorBanner').exists()).toBe(true)
    expect(wrapper.find('ErrorBanner').text()).toBe(
      "OOPS! It's a error getting EvaluationPermission",
    )
  })

  test('test retrieve evaluation metadata - failure', () => {
    mockGetEvaluation.mockImplementation(() => {
      return new JestMockPromise((resolve, reject) => {
        reject(new Error("OOPS! It's a error getting Evaluation"))
      })
    })

    const wrapper = mount(<EvaluationCard {...props} />)

    expect(wrapper.find('ErrorBanner').exists()).toBe(true)
    expect(wrapper.find('ErrorBanner').text()).toBe(
      "OOPS! It's a error getting Evaluation",
    )
  })

  test('test all retrieve calls happy case', () => {
    const wrapper = mount(<EvaluationCard {...props} />)

    expect(wrapper.find('ErrorBanner').exists()).toBe(false)
    expect(wrapper.contains(<h4>E V A L U A T I O N</h4>)).toBe(true)
    expect(wrapper.contains(<p>Open</p>)).toBe(true)

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

  // Can't test dropdown menu interaction w/ permissions
  // because the DropdownMenu does not generate child components in enzyme's tree
  // the options will show up in the wrapper.html()
  // once a click on the dropdown is simulated,
  // but doing a string search on that seems hacky
})
