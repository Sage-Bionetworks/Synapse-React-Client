import {
  TermsOfUseAccessRequirement,
  SelfSignAccessRequirement,
  ManagedACTAccessRequirement,
  ACTAccessRequirement,
  RestrictableObjectType,
  ACCESS_TYPE,
} from '../lib/utils/synapseTypes'
import { AccessRequirementSearchResponse } from '../lib/utils/synapseTypes/AccessRequirement/AccessRequirementSearch'
import { MOCK_PROJECT_ID } from './entity/mockEntity'
import { MOCK_USER_ID } from './user/mock_user_profile'

const defaultAccessRequirement = {
  id: 1,
  name: 'Mocked access requirement',
  etag: '26489045-3a98-405f-b214-9e1c90208c64',
  createdOn: '2019-02-06T21:17:25.790Z',
  modifiedOn: '2020-07-24T18:11:35.323Z',
  versionNumber: 1,
  subjectIds: [
    {
      id: 'syn12664802',
      type: RestrictableObjectType.ENTITY,
    },
  ],
  createdBy: '1981374',
  modifiedBy: '1981374',
  accessType: ACCESS_TYPE.DOWNLOAD,
}
export const mockToUAccessRequirement: TermsOfUseAccessRequirement = {
  ...defaultAccessRequirement,
  concreteType: 'org.sagebionetworks.repo.model.TermsOfUseAccessRequirement',
  termsOfUse: '',
}

export const mockSelfSignAccessRequirement: SelfSignAccessRequirement = {
  ...defaultAccessRequirement,
  concreteType: 'org.sagebionetworks.repo.model.SelfSignAccessRequirement',
  isCertifiedUserRequired: false,
  isValidatedProfileRequired: false,
}

export const mockManagedACTAccessRequirement: ManagedACTAccessRequirement = {
  ...defaultAccessRequirement,
  concreteType: 'org.sagebionetworks.repo.model.ManagedACTAccessRequirement',
  areOtherAttachmentsRequired: false,
  isCertifiedUserRequired: false,
  isDUCRequired: false,
  isIDUPublic: false,
  isIDURequired: false,
  ducTemplateFileHandleId: '11111',
  expirationPeriod: 1000 * 60 * 60 * 24, // 1 day
  isIRBApprovalRequired: false,
  isValidatedProfileRequired: false,
}

export const mockACTAccessRequirement: ACTAccessRequirement = {
  ...defaultAccessRequirement,
  concreteType: 'org.sagebionetworks.repo.model.ACTAccessRequirement',
  actContactInfo: 'not web engineering',
  openJiraIssue: true,
}

export const mockLockAccessRequirement = {
  ...defaultAccessRequirement,
  concreteType: 'org.sagebionetworks.repo.model.LockAccessRequirement',
}

export const mockSearchResults: AccessRequirementSearchResponse = {
  results: [
    {
      id: mockManagedACTAccessRequirement.id.toString(),
      createdOn: mockManagedACTAccessRequirement.createdOn,
      modifiedOn: mockManagedACTAccessRequirement.modifiedOn,
      name: mockManagedACTAccessRequirement.name,
      version: mockManagedACTAccessRequirement.versionNumber.toString(),
      relatedProjectIds: [MOCK_PROJECT_ID],
      reviewerIds: [MOCK_USER_ID.toString()],
    },
    {
      id: '9603055',
      createdOn: '2017-08-23T18:48:20.892Z',
      modifiedOn: '2022-05-20T22:26:44.406Z',
      name: 'Access Requiremnent 2',
      version: '269',
      relatedProjectIds: [MOCK_PROJECT_ID],
      reviewerIds: [],
    },
    {
      id: '9605257',
      createdOn: '2021-01-15T17:05:10.544Z',
      modifiedOn: '2021-01-15T17:13:06.767Z',
      name: 'Another AR',
      version: '3',
      relatedProjectIds: [],
      reviewerIds: [],
    },
    {
      id: '9605529',
      createdOn: '2021-12-20T17:42:32.822Z',
      modifiedOn: '2021-12-20T18:17:46.904Z',
      name: 'Some mock ARs',
      version: '5',
      relatedProjectIds: [],
      reviewerIds: [],
    },
  ],
}
