/**
 * This is the base interface that all Request implements.
 * http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/dataaccess/RequestInterface.html
 */
import { AccessorChange } from './AccessorChange'

export interface RequestInterface {
  id: string
  accessRequirementId: string
  researchProjectId: string
  createdOn: string
  modifiedOn: string
  createdBy: string
  modifiedBy: string
  ducFileHandleId: string
  irbFileHandleId: string
  attachments: string[]
  accessorChanges: AccessorChange[]
  etag: string
  concreteType: string
}
