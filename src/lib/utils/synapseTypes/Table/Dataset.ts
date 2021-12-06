import { View } from './View'

export type DATASET_CONCRETE_TYPE =
  'org.sagebionetworks.repo.model.table.Dataset'

export interface Dataset extends View {
  items?: DatasetItem[] // items is undefined on new datasets
  concreteType: DATASET_CONCRETE_TYPE
}

export interface DatasetItem {
  entityId: string
  versionNumber: number
}
