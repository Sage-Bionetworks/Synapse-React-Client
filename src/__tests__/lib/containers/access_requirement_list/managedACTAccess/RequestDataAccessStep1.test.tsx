import * as React from 'react'
import { mount } from 'enzyme'
import RequestDataAccessStep1
  from '../../../../../lib/containers/access_requirement_list/managedACTAccess/RequestDataAccessStep1'
import { ACCESS_TYPE, ManagedACTAccessRequirement } from '../../../../../lib/utils/synapseTypes'

describe('RequestDataAccessStep1: basic functionality', () => {

  const mockAccessRequirement:ManagedACTAccessRequirement = {
    concreteType: 'org.sagebionetworks.repo.model.ManagedACTAccessRequirement',
    isCertifiedUserRequired: false,
    isValidatedProfileRequired: false,
    isDUCRequired: false,
    ducTemplateFileHandleId: '123',
    isIRBApprovalRequired: false,
    areOtherAttachmentsRequired: false,
    expirationPeriod: 1,
    isIDUPublic: false,
    isIDURequired: false,
    versionNumber: 1,
    id: 1234,
    etag: '12345',
    createdOn: '',
    createdBy: '',
    modifiedOn: '',
    modifiedBy: '',
    subjectIds: [],
    accessType: ACCESS_TYPE.UPDATE
  }

  it('render component without crashing', async () => {
    const wrapper = mount(<RequestDataAccessStep1
      token={'123'}
      accessRequirementId={'123'}
      managedACTAccessRequirement={mockAccessRequirement}
    />)
    expect(wrapper).toBeDefined()
  })

  it('should show IDU field if not required', async () => {
    const wrapper = mount(<RequestDataAccessStep1
      token={'123'}
      accessRequirementId={'123'}
      managedACTAccessRequirement={mockAccessRequirement}
    />)
    expect(wrapper.find('#data-use')).toHaveLength(0)
  })

  it('should show IDU field if required', async () => {
    mockAccessRequirement.isIDURequired = true
    const wrapper = mount(<RequestDataAccessStep1
      token={'123'}
      accessRequirementId={'123'}
      managedACTAccessRequirement={mockAccessRequirement}
    />)
    expect(wrapper.find('#data-use')).toBeDefined()
  })

})