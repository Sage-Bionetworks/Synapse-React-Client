import { View } from './View'

export const DATASET_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.table.Dataset'
export type DATASET_CONCRETE_TYPE = typeof DATASET_CONCRETE_TYPE_VALUE
export interface Dataset extends View {
  items?: DatasetItem[] // items is undefined on new datasets
  concreteType: DATASET_CONCRETE_TYPE
}

export interface DatasetItem {
  entityId: string
  versionNumber: number
}
