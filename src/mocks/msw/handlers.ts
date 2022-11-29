import { rest } from 'msw'
import { SynapseError } from '../../lib/utils/SynapseClient'
import { entityHandlers, getEntityHandlers } from './handlers/entityHandlers'
import {
  getUserProfileHandlers,
  userProfileHandlers,
} from './handlers/userProfileHandlers'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../lib/utils/functions/getEndpoint'

// Simple utility type that just indicates that the response body could be an error like the Synapse backend may send.
export type SynapseApiResponse<T> = T | SynapseError

const getHandlers = (backendOrigin: string) => [
  rest.options('*', async (req, res, ctx) => {
    return res(ctx.status(200))
  }),
  rest.get(
    `${backendOrigin}/auth/v1/authenticatedOn`,
    async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({ authenticatedOn: new Date().toISOString() }),
      )
    },
  ),
  ...getEntityHandlers(backendOrigin),
  ...getUserProfileHandlers(backendOrigin),
]

const handlers = getHandlers(getEndpoint(BackendDestinationEnum.REPO_ENDPOINT))

export { handlers, getHandlers }
