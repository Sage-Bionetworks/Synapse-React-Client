import { View } from './View'

export type ENTITY_VIEW_CONCRETE_TYPE =
  'org.sagebionetworks.repo.model.table.EntityView'

export interface EntityView extends View {
  concreteType: ENTITY_VIEW_CONCRETE_TYPE
  /** The list of container ids that define the scope of this view. */
  scopeIds: string[]
  /** Bit mask representing the types to include in the view. The following are the possible types (type=): File=0x01, Project=0x02, Table=0x04, Folder=0x08, View=0x10, Docker=0x20. */
  viewTypeMask: number
}
