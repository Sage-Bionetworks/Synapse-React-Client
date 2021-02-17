import { EntityPath } from './EntityHeader'
import { Annotations } from './Annotations'
import { Entity } from './Entity'
import { EntityType } from './EntityType'
import { FileHandle } from './FileHandle'
import { AccessControlList } from './AccessControlList'
import { RestrictionInformationResponse } from './RestrictionInformation'
import { UserEntityPermissions } from './UserEntityPermissions'
import { TableBundle } from './Table/TableBundle'
import { DoiAssociation } from './DoiAssociation'

// https://docs.synapse.org/rest/org/sagebionetworks/repo/model/entitybundle/v2/EntityBundle.html
export type EntityBundle = {
  entity?: Entity
  entityType?: EntityType
  annotations?: Annotations
  permissions?: UserEntityPermissions
  path?: EntityPath
  hasChildren?: boolean
  accessControlList?: AccessControlList
  fileHandles?: FileHandle[]
  tableBundle?: TableBundle
  rootWikiId?: string
  benefactorAcl?: AccessControlList
  doiAssociation?: DoiAssociation
  fileName?: string
  threadCount?: number
  restrictionInformation?: RestrictionInformationResponse
}

// https://docs.synapse.org/rest/org/sagebionetworks/repo/model/entitybundle/v2/EntityBundleRequest.html
export type EntityBundleRequest = {
  includeEntity?: boolean
  includeAnnotations?: boolean
  includePermissions?: boolean
  includeEntityPath?: boolean
  includeHasChildren?: boolean
  includeAccessControlList?: boolean
  includeFileHandles?: boolean
  includeTableBundle?: boolean
  includeRootWikiId?: boolean
  includeBenefactorACL?: boolean
  includeDOIAssociation?: boolean
  includeFileName?: boolean
  includeThreadCount?: boolean
  includeRestrictionInformation?: boolean
}
