import { VersionableEntity } from '../Entity/Entity'
import { VIEW_CONCRETE_TYPE } from './View'

export type TABLE_CONCRETE_TYPE = VIEW_CONCRETE_TYPE // | TABLE_ENTITY_CONCRETE_TYPE

// https://docs.synapse.org/rest/org/sagebionetworks/repo/model/table/Table.html
export interface Table extends VersionableEntity {
  columnIds: string[]
  concreteType: TABLE_CONCRETE_TYPE
}
