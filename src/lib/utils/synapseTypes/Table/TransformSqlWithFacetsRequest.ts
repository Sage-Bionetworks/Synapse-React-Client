import { FacetColumnRequest, ColumnModel } from '.'
import { QueryFilter } from './QueryFilter'

// Request to transform the provided SQL by adding a WHERE clause that is based on the provided selected facets.
export type TransformSqlWithFacetsRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.TransformSqlWithFacetsRequest'
  sqlToTransform: string //	The original SQL statement to be transformed.
  selectedFacets: FacetColumnRequest[] //	The facets that should be selected in the resulting SQL
  schema: ColumnModel[] // The schema assciated with this request
  additionalFilters?: QueryFilter[] // Additional filters applied to the query
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/SqlTransformResponse.html
export type SqlTransformResponse = {
  transformedSql: string //
}
