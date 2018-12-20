// https://docs.synapse.org/rest/org/sagebionetworks/repo/model/table/FacetColumnValuesRequest.html

export type FaceFacetColumnValuesRequest = {
  concreteType?: string
  columnName?: string	    // The name of the faceted column
  facetValues?: any	// The set of facet values that were selected
}

// https://docs.synapse.org/rest/org/sagebionetworks/repo/model/table/FacetColumnRangeRequest.html
export type FacetColumnRangeRequest = {
  concreteType?:	string
  columnName?:	string	// The name of the faceted column
  min?:	string
  max?:	string
}

// https://docs.synapse.org/rest/org/sagebionetworks/repo/model/table/FacetColumnRequest.html
export type FacetColumnRequest = FaceFacetColumnValuesRequest & FacetColumnRangeRequest
