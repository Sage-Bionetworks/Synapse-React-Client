import {
  AccessApprovalSearchResult,
  AccessApprovalSearchResponse,
  ApprovalState,
} from '../lib/utils/synapseTypes'
import { MOCK_USER_ID } from './user/mock_user_profile'

export const mockAccessApprovalSearchResult: AccessApprovalSearchResult = {
  accessRequirementId: '9602629',
  accessRequirementName: 'Access Requirement',
  accessRequirementVersion: '3',
  id: '9602631',
  modifiedOn: '2022-05-24T21:20:58.420Z',
  expiredOn: '2022-05-24T21:20:58.420Z',
  reviewerId: MOCK_USER_ID.toString(),
  state: ApprovalState.APPROVED,
  submitterId: MOCK_USER_ID.toString(),
}

export const mockApprovalSearchResponse: AccessApprovalSearchResponse = {
  results: [mockAccessApprovalSearchResult],
}
