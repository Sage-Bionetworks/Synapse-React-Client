import { isTypeViaConcreteTypeFactory } from '../../functions/TypeUtils'
import { Entity, VersionableEntity } from '../Entity/Entity'
import { VIEW_CONCRETE_TYPE } from './View'

export const TABLE_ENTITY_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.table.TableEntity'
export type TABLE_ENTITY_CONCRETE_TYPE =
  'org.sagebionetworks.repo.model.table.TableEntity'

export type TABLE_CONCRETE_TYPE =
  | VIEW_CONCRETE_TYPE
  | TABLE_ENTITY_CONCRETE_TYPE

// https://docs.synapse.org/rest/org/sagebionetworks/repo/model/table/Table.html
export interface Table extends VersionableEntity {
  columnIds: string[]
  concreteType: TABLE_CONCRETE_TYPE
}

// https://docs.synapse.org/rest/org/sagebionetworks/repo/model/table/TableEntity.html
export interface TableEntity extends Table {
  concreteType: TABLE_ENTITY_CONCRETE_TYPE
  isSearchEnabled: boolean
}

export const isTableEntity = isTypeViaConcreteTypeFactory<TableEntity, Entity>(
  TABLE_ENTITY_CONCRETE_TYPE_VALUE,
)
