import { QueryBundleRequest } from '../lib/utils/jsonResponses/Table/QueryBundleRequest'

let mockRequest: QueryBundleRequest = {
  partMask: 0,
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  query: {
    isConsistent: false,
    sql: ``,
    limit: 0,
    offset: 0,
    selectedFacets: [],
    sort: [],
  },
}
export default mockRequest
