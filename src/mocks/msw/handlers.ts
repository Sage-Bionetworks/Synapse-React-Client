import { rest } from 'msw'
import { SynapseError } from '../../lib/utils/SynapseClient'
import { entityHandlers } from './handlers/entityHandlers'
import { userProfileHandlers } from './handlers/userProfileHandlers'

// Simple utility type that just indicates that the response body could be an error like the Synapse backend may send.
export type SynapseApiResponse<T> = T | SynapseError

const handlers = [
  rest.options('*', async (req, res, ctx) => {
    return res(ctx.status(200))
  }),

  ...entityHandlers,
  ...userProfileHandlers,
]

export { handlers }
