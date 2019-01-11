import { FacetColumnRequest } from './FacetColumnRequest'

// https://docs.synapse.org/rest/org/sagebionetworks/repo/model/table/SortDirection.html
export type SortItem = {
  column: string
  direction: 'ASC' | 'DESC'
}

// https://docs.synapse.org/rest/org/sagebionetworks/repo/model/table/Query.html
export type Query = {
  sql:	string	// The SQL query string
  selectedFacets?:	FacetColumnRequest []	// The selected facet filters.
  includeEntityEtag?:	boolean	// Optional, default false. When true, a query results against views will
                              // include the Etag of each entity in the results.
                              // Note: The etag is necessary to update Entities in the view.
  isConsistent?:	boolean 	// Optional, default true. When true, a query will be run only if the
                            // index is up-to-date with all changes to the table and a read-lock is
                            // successfully acquired on the index.
                            // When set to false, the query will be run against the index
                            // regardless of the state of the index and without attempting to acquire a read-lock.
                            // When isConsistent is set to false the query results will not contain an etag so the
                            // results cannot be used as input to a table update.
  offset?:	number	// The optional offset into the results
  limit?:	number	// The optional limit to the results
  sort?:	SortItem []
}
