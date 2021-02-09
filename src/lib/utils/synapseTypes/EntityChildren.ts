import { EntityHeader } from './EntityHeader'
import { EntityType } from './EntityType'

// https://docs.synapse.org/rest/org/sagebionetworks/repo/model/entity/SortBy.html
export enum SortBy {
  NAME,
  CREATED_ON,
  MODIFIED_ON,
}

// https://docs.synapse.org/rest/org/sagebionetworks/repo/model/entity/Direction.html
export enum Direction {
  ASC,
  DESC,
}

// https://docs.synapse.org/rest/org/sagebionetworks/repo/model/EntityChildrenRequest.html
export type EntityChildrenRequest = {
  parentId: string
  nextPageToken?: string
  includeTypes: Array<EntityType>
  sortBy?: SortBy
  sortDirection?: Direction
  includeTotalChildCount?: boolean
  includeSumFileSizes?: boolean
}

// https://docs.synapse.org/rest/org/sagebionetworks/repo/model/EntityChildrenResponse.html
export type EntityChildrenResponse = {
  page: EntityHeader[]
  nextPageToken: string | null
  totalChildCount?: number
  sumFileSizesBytes?: number
}
