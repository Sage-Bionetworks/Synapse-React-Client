import * as React from 'react'
import { mount } from 'enzyme'
import RequestDataAccess from '../../../../../lib/containers/access_requirement_list/managedACTAccess/RequestDataAccess'
import {
  ACCESS_TYPE,
  ManagedACTAccessRequirement,
  SUBMISSION_STATE,
} from '../../../../../lib/utils/synapseTypes'
import { SynapseTestContext } from '../../../../../mocks/MockSynapseContext'

describe('RequestDataAccess: basic functionality', () => {
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
      <SynapseTestContext>
        <RequestDataAccess
          user={undefined}
          wikiPage={undefined}
          entityId={'123'}
          accessRequirement={mockAccessRequirement}
          accessRequirementStatus={mockAccessRequirementStatus}
          showButton={true}
        />
      </SynapseTestContext>,
    )
    expect(wrapper).toBeDefined()
  })

  it('should show request access button regardless logged in or not', async () => {
    delete mockAccessRequirementStatus.currentSubmissionStatus.state
    const wrapper = mount(
      <SynapseTestContext>
        <RequestDataAccess
          user={undefined}
          token={undefined}
          wikiPage={undefined}
          entityId={'123'}
          accessRequirement={mockAccessRequirement}
          accessRequirementStatus={mockAccessRequirementStatus}
          showButton={true}
        />
      </SynapseTestContext>,
    )
    expect(wrapper.find('button.accept-button').text()).toEqual(
      'Request access',
    )
  })
})
