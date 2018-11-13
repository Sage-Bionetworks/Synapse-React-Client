import { Query } from './Query';

// https://docs.synapse.org/rest/org/sagebionetworks/repo/model/table/QueryBundleRequest.html
export type QueryBundleRequest = {
    concreteType:	string	
    entityId?:	    string	
    query:	        Query	
    partMask:	    number
}