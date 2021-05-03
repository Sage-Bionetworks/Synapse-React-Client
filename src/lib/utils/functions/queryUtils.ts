import { QueryBundleRequest } from '../synapseTypes/'
import { SynapseClient, SynapseConstants } from '..'
import { QueryResultBundle } from '../synapseTypes/'
import { cloneDeep } from 'lodash-es'

type PartialStateObject = {
  hasMoreData: boolean
  data: QueryResultBundle
}

/**
 * Retrieve the index of a column using the column name
 * @param name the column name
 * @param result the QueryResultBundle containing the columns
 * @returns The index of the column, or -1 if the column doesn't exist in the result
 */
export const getFieldIndex = (
  name: string,
  result: QueryResultBundle | undefined,
) => {
  return (
    result?.selectColumns?.findIndex(el => {
      return el.name === name
    }) ?? -1
  )
}

/**
 * Grab the next page of data, pulling in 25 more rows.
 *
 * @param {*} queryRequest Query request as specified by
 *                         https://docs.synapse.org/rest/org/sagebionetworks/repo/model/table/Query.html
 */
export const getNextPageOfData = async (
  queryRequest: QueryBundleRequest,
  data: QueryResultBundle,
  token?: string,
) => {
  return await SynapseClient.getQueryTableResults(queryRequest, token)
    .then((newData: QueryResultBundle) => {
      const oldData: QueryResultBundle = cloneDeep(data)!
      // push on the new data retrieved from the API call
      const hasMoreData =
        newData.queryResult.queryResults.rows.length ===
        queryRequest.query.limit ?? SynapseConstants.DEFAULT_PAGE_SIZE
      oldData.queryResult.queryResults.rows.push(
        ...newData.queryResult.queryResults.rows,
      )
      const newState: PartialStateObject = {
        hasMoreData,
        data: oldData,
      }
      return newState
    })
    .catch(err => {
      console.log('Failed to get data ', err)
      return {} as PartialStateObject
    })
}
