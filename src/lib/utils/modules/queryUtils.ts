import { QueryBundleRequest } from '../jsonResponses/Table/QueryBundleRequest'
import { SynapseClient, SynapseConstants } from '../'
import { QueryResultBundle } from '../jsonResponses/Table/QueryResultBundle'
import { cloneDeep } from './rollupCompatibleModules'

type PartialStateObject = {
  hasMoreData: boolean,
  data: QueryResultBundle,
}

/**
 * Grab the next page of data, pulling in 25 more rows.
 *
 * @param {*} queryRequest Query request as specified by
 *                         https://docs.synapse.org/rest/org/sagebionetworks/repo/model/table/Query.html
 */
export const getNextPageOfData = async (queryRequest: QueryBundleRequest, data: QueryResultBundle, token?: string) => {
  return await SynapseClient.getQueryTableResults(queryRequest, token)
    .then(
    (newData: QueryResultBundle) => {
      const oldData: QueryResultBundle = cloneDeep(data)!
      // push on the new data retrieved from the API call
      const hasMoreData = newData
                          .queryResult
                          .queryResults
                          .rows
                          .length === SynapseConstants.PAGE_SIZE
      oldData.queryResult.queryResults.rows.push(...newData.queryResult.queryResults.rows)
      const newState: PartialStateObject = {
        hasMoreData,
        data: oldData,
      }
      return newState
    }
    ).catch((err) => {
      console.log('Failed to get data ', err)
      return {} as PartialStateObject
    })
}
