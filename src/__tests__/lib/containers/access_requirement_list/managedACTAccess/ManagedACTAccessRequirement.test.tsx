import * as React from 'react'
import { mount } from 'enzyme'
import ManagedACTAccessRequirementComponent from '../../../../../lib/containers/access_requirement_list/managedACTAccess/ManagedACTAccessRequirement'
import {
  ACCESS_TYPE,
  ManagedACTAccessRequirement,
  SUBMISSION_STATE,
} from '../../../../../lib/utils/synapseTypes'
import RequestDataAccess from '../../../../../lib/containers/access_requirement_list/managedACTAccess/RequestDataAccess'
import { SynapseTestContext } from '../../../../../mocks/MockSynapseContext'

describe('ManagedACTAccessRequirement: basic functionality', () => {
  const mockAccessRequirement: ManagedACTAccessRequirement = {
    concreteType: 'org.sagebionetworks.repo.model.ManagedACTAccessRequirement',
    isCertifiedUserRequired: true,
    isValidatedProfileRequired: true,
    isDUCRequired: true,
    ducTemplateFileHandleId: '123',
    isIRBApprovalRequired: true,
    areOtherAttachmentsRequired: true,
    expirationPeriod: 1,
    isIDUPublic: true,
    isIDURequired: true,
    versionNumber: 1,
    id: 1234,
    etag: '12345',
    createdOn: '',
    createdBy: '',
    modifiedOn: '',
    modifiedBy: '',
    subjectIds: [],
    accessType: ACCESS_TYPE.UPDATE,
  }

  const mockAccessRequirementStatus = {
    currentSubmissionStatus: {
      submissionId: 'string',
      submittedBy: 'string',
      rejectedReason: 'string',
      state: SUBMISSION_STATE.SUBMITTED,
      modifiedOn: 'string',
    },
    accessRequirementId: 'string',
    concreteType: 'string',
    isApproved: true,
    expiredOn: 'string',
  }

  it('render component without crashing', async () => {
    const wrapper = mount(
      <ManagedACTAccessRequirementComponent
        user={undefined}
        entityId={'1'}
        accessRequirement={mockAccessRequirement}
        accessRequirementStatus={mockAccessRequirementStatus}
      />,
      {
        wrappingComponent: SynapseTestContext,
      },
    )
    expect(wrapper).toBeDefined()
  })

  it('should load RequestDataAccess component', async () => {
    const wrapper = mount(
      <ManagedACTAccessRequirementComponent
        user={undefined}
        entityId={'1'}
        accessRequirement={mockAccessRequirement}
        accessRequirementStatus={mockAccessRequirementStatus}
      />,
      {
        wrappingComponent: SynapseTestContext,
      },
    )
    expect(wrapper.find(RequestDataAccess)).toHaveLength(1)
  })
})
