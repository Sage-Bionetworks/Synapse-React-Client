import { QueryBundleRequest } from 'src/lib/utils/jsonResponses/Table/QueryBundleRequest';

let mockRequest: QueryBundleRequest = {
    partMask: 0,
    concreteType: "a",
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