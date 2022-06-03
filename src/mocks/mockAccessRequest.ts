import { ACT_TEAM_ID } from '../lib/utils/SynapseConstants'
import { AccessType, SubmissionState } from '../lib/utils/synapseTypes'
import { SubmissionSearchResponse } from '../lib/utils/synapseTypes/AccessSubmission'
import { mockManagedACTAccessRequirement } from './mockAccessRequirements'
import { MOCK_USER_ID, MOCK_USER_ID_2 } from './user/mock_user_profile'

export const mockSubmissionSearchResponse: SubmissionSearchResponse = {
  results: [
    {
      id: mockManagedACTAccessRequirement.id.toString(),
      createdOn: mockManagedACTAccessRequirement.createdOn,
      modifiedOn: mockManagedACTAccessRequirement.modifiedOn,
      accessRequirementName: mockManagedACTAccessRequirement.name,
      accessRequirementVersion:
        mockManagedACTAccessRequirement.versionNumber.toString(),
      accessRequirementId:
        mockManagedACTAccessRequirement.subjectIds[0].id.toString(),
      submitterId: MOCK_USER_ID.toString(),
      state: SubmissionState.REJECTED,
      accessorChanges: [
        {
          userId: MOCK_USER_ID_2.toString(),
          type: AccessType.REVOKE_ACCESS,
        },
      ],
      accessRequirementReviewerIds: [ACT_TEAM_ID.toString()],
    },
    {
      id: '9603055',
      createdOn: '2017-08-23T18:48:20.892Z',
      modifiedOn: '2022-05-20T22:26:44.406Z',
      accessRequirementName: 'Access Requirement',
      accessRequirementVersion: '269',
      accessRequirementId: '1234321',
      submitterId: '456',
      state: SubmissionState.APPROVED,
      accessorChanges: [
        {
          userId: '456',
          type: AccessType.GAIN_ACCESS,
        },
      ],
      accessRequirementReviewerIds: ['12345', '52642'],
    },
    {
      id: '9606455',
      createdOn: '2013-07-23T18:48:20.892Z',
      modifiedOn: '2022-05-29T22:26:44.406Z',
      accessRequirementName: 'Another Access Requirement',
      accessRequirementVersion: '2',
      accessRequirementId: '894',
      submitterId: '5326',
      state: SubmissionState.APPROVED,
      accessorChanges: [
        {
          userId: '456',
          type: AccessType.GAIN_ACCESS,
        },
        {
          userId: '5326',
          type: AccessType.RENEW_ACCESS,
        },
        {
          userId: '999',
          type: AccessType.GAIN_ACCESS,
        },
      ],
      accessRequirementReviewerIds: ['12345', '4214'],
    },
  ],
}
