import {
    TermsOfUseAccessRequirement,
    SelfSignAccessRequirement,
    ManagedACTAccessRequirement,
    ACTAccessRequirement,
    RestrictableObjectType,
    ACCESS_TYPE
  } from '../lib/utils/synapseTypes'
  
  const defaultAccessRequirement = {
    id: 1,
    etag: "26489045-3a98-405f-b214-9e1c90208c64",
    createdOn: "2019-02-06T21:17:25.790Z",
    modifiedOn: "2020-07-24T18:11:35.323Z",
    versionNumber: 1,
    subjectIds: [
        {
            id: "syn12664802",
            type: RestrictableObjectType.ENTITY
        }
    ],
    createdBy: "1981374",
    modifiedBy: "1981374",
    accessType: ACCESS_TYPE.DOWNLOAD,
  }
  export const mockToUAccessRequirement: TermsOfUseAccessRequirement = {
    ...defaultAccessRequirement,
    concreteType: 'org.sagebionetworks.repo.model.TermsOfUseAccessRequirement',
    termsOfUse: ''
  }
  
  export const mockSelfSignAccessRequirement:SelfSignAccessRequirement = {
    ...defaultAccessRequirement,
    concreteType: 'org.sagebionetworks.repo.model.SelfSignAccessRequirement',
    isCertifiedUserRequired: false,
    isValidatedProfileRequired: false
  }

  export const mockManagedACTAccessRequirement:ManagedACTAccessRequirement = {
    ...defaultAccessRequirement,
    concreteType: 'org.sagebionetworks.repo.model.ManagedACTAccessRequirement',
    areOtherAttachmentsRequired: false,
    isCertifiedUserRequired: false,
    isDUCRequired: false,
    isIDUPublic: false,
    isIDURequired: false,
    ducTemplateFileHandleId: '11111',
    expirationPeriod: 1,
    isIRBApprovalRequired: false,
    isValidatedProfileRequired: false
  }

  export const mockACTAccessRequirement:ACTAccessRequirement = {
    ...defaultAccessRequirement,
    concreteType: 'org.sagebionetworks.repo.model.ACTAccessRequirement',
    actContactInfo: 'not web engineering',
    openJiraIssue: true
  }

  export const mockLockAccessRequirement = {
    ...defaultAccessRequirement,
    concreteType: 'org.sagebionetworks.repo.model.LockAccessRequirement',
}