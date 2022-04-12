import { rest } from 'msw'
import {
  FAVORITES,
  USER_ID_BUNDLE,
  USER_PROFILE,
  USER_PROFILE_ID,
} from '../../../lib/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../lib/utils/functions/getEndpoint'
import { UserBundle, UserProfile } from '../../../lib/utils/synapseTypes'
import { mockPaginatedEntityHeaders } from '../../entity/mockEntity'
import {
  mockUserBundle,
  mockUserProfileData,
  MOCK_USER_ID,
} from '../../user/mock_user_profile'
import { SynapseApiResponse } from '../handlers'

export const userProfileHandlers = [
  /**
   * Get User Profile by ID
   */
  rest.get(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${USER_PROFILE_ID(
      ':id',
    )}`,
    async (req, res, ctx) => {
      let status = 404
      let response: SynapseApiResponse<UserProfile> = {
        reason: `Mock Service worker could not find a user profile with ID ${req.params.id}`,
      }
      if (req.params.id === MOCK_USER_ID.toString()) {
        response = mockUserProfileData
        status = 200
      }
      return res(ctx.status(status), ctx.json(response))
    },
  ),

  /**
   * Get the caller's user profile
   */
  rest.get(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${USER_PROFILE}`,
    async (req, res, ctx) => {
      // default return a mock UserProfile.
      const response: UserProfile = mockUserProfileData
      const status = 200
      return res(ctx.status(status), ctx.json(response))
    },
  ),

  /**
   * Get a user bundle by ID
   */
  rest.get(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${USER_ID_BUNDLE(
      ':id',
    )}`,
    async (req, res, ctx) => {
      let status = 404
      let response: SynapseApiResponse<UserBundle> = {
        reason: `Mock Service worker could not find a user bundle with ID ${req.params.id}`,
      }
      if (req.params.id === MOCK_USER_ID.toString()) {
        response = mockUserBundle
        status = 200
      }
      return res(ctx.status(status), ctx.json(response))
    },
  ),

  /**
   * Get the caller's favorites
   */
  rest.get(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${FAVORITES}`,
    async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockPaginatedEntityHeaders))
    },
  ),
]
