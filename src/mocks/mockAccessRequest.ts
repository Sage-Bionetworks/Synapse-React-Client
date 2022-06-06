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
  ],
}
