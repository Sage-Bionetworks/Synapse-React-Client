import { rest } from 'msw'
import {
  FAVORITES,
  NOTIFICATION_EMAIL,
  PROFILE_IMAGE_PREVIEW,
  USER_GROUP_HEADERS,
  USER_GROUP_HEADERS_BATCH,
  USER_ID_BUNDLE,
  USER_PROFILE,
  USER_PROFILE_ID,
} from '../../../lib/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../lib/utils/functions/getEndpoint'
import {
  UserBundle,
  UserGroupHeaderResponsePage,
  UserProfile,
} from '../../../lib/utils/synapseTypes'
import { mockPaginatedEntityHeaders } from '../../entity/mockEntity'
import {
  mockUserBundle,
  mockUserData,
  mockUserProfileData,
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
      const match = mockUserData.find(
        userData => userData.id.toString() === req.params.id,
      )
      if (match && match.userProfile) {
        response = match.userProfile
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
      const match = mockUserData.find(
        userData => userData.id.toString() === req.params.id,
      )
      if (match && match.userBundle) {
        response = match.userBundle
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

  /**
   * Get a batch of user group headers
   */
  rest.get(
    `${getEndpoint(
      BackendDestinationEnum.REPO_ENDPOINT,
    )}${USER_GROUP_HEADERS_BATCH}`,
    async (req, res, ctx) => {
      const ids = req.url.searchParams.get('ids')!.split(',')
      const responsePage: UserGroupHeaderResponsePage = {
        children: mockUserData
          .filter(userData => ids.includes(userData.id.toString()))
          .map(userData => userData.userGroupHeader),
      }
      return res(ctx.status(200), ctx.json(responsePage))
    },
  ),

  /**
   * Get userGroupHeaders by prefix
   */
  rest.get(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${USER_GROUP_HEADERS}`,
    async (req, res, ctx) => {
      const prefix = req.url.searchParams.get('prefix')
      const responsePage: UserGroupHeaderResponsePage = {
        children: mockUserData
          .filter(userData =>
            userData.userGroupHeader.userName.startsWith(prefix ?? ''),
          )
          .map(userData => userData.userGroupHeader),
      }
      return res(ctx.status(200), ctx.json(responsePage))
    },
  ),

  /**
   * Return a 404 when fetching the profile image
   */
  rest.get(
    `${getEndpoint(
      BackendDestinationEnum.REPO_ENDPOINT,
    )}${PROFILE_IMAGE_PREVIEW(':userId')}`,
    async (req, res, ctx) => {
      return res(
        ctx.status(404),
        ctx.json({ reason: 'user has no profile image' }),
      )
    },
  ),

  rest.get(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${NOTIFICATION_EMAIL}`,
    async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({ email: mockUserBundle.userProfile?.email }),
      )
    },
  ),
]
