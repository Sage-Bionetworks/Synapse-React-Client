import { uniqueId } from 'lodash'
import { rest } from 'msw'
import {
  ASYNCHRONOUS_JOB_TOKEN,
  TABLE_QUERY_ASYNC_GET,
  TABLE_QUERY_ASYNC_START,
} from '../../../lib/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../lib/utils/functions/getEndpoint'
import {
  AsynchronousJobStatus,
  AsyncJobId,
  QueryBundleRequest,
  QueryResultBundle,
} from '../../../lib/utils/synapseTypes'

export function getHandlersForTableQuery(response: QueryResultBundle) {
  const asyncJobId = uniqueId()
  let queryBundleRequest: QueryBundleRequest | undefined
  return [
    /**
     * Create a new entity
     */
    rest.post(
      `${getEndpoint(
        BackendDestinationEnum.REPO_ENDPOINT,
      )}${TABLE_QUERY_ASYNC_START(':id')}`,
      async (req, res, ctx) => {
        queryBundleRequest = req.body as QueryBundleRequest
        return res(
          ctx.status(201),
          ctx.json<AsyncJobId>({
            token: asyncJobId,
          }),
        )
      },
    ),

    rest.get(
      `${getEndpoint(
        BackendDestinationEnum.REPO_ENDPOINT,
      )}${ASYNCHRONOUS_JOB_TOKEN(asyncJobId)}`,
      async (req, res, ctx) => {
        return res(
          ctx.status(201),
          ctx.json<
            AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>
          >({
            jobState: 'COMPLETE',
            jobCanceling: false,
            requestBody: queryBundleRequest!,
            etag: '00000000-0000-0000-0000-000000000000',
            jobId: asyncJobId,
            responseBody: response,
            startedByUserId: 0,
            startedOn: '',
            changedOn: '',
            progressMessage: '',
            progressCurrent: 100,
            progressTotal: 100,
            exception: '',
            errorMessage: '',
            errorDetails: '',
            runtimeMS: 100,
          }),
        )
      },
    ),

    rest.get(
      `${getEndpoint(
        BackendDestinationEnum.REPO_ENDPOINT,
      )}${TABLE_QUERY_ASYNC_GET(':id', asyncJobId)}`,
      async (req, res, ctx) => {
        return res(ctx.status(201), ctx.json<QueryResultBundle>(response))
      },
    ),
  ]
}
