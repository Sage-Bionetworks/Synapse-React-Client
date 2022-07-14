import { View } from './View'

export const DATASET_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.table.Dataset'
export type DATASET_CONCRETE_TYPE = typeof DATASET_CONCRETE_TYPE_VALUE
export interface Dataset extends View {
  items?: EntityRef[] // items is undefined on new datasets
  concreteType: DATASET_CONCRETE_TYPE
}

// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/EntityRef.html
export interface EntityRef {
  entityId: string
  versionNumber: number
}

export const DATASET_COLLECTION_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.table.DatasetCollection'
export type DATASET_COLLECTION_CONCRETE_TYPE =
  typeof DATASET_COLLECTION_CONCRETE_TYPE_VALUE
export interface DatasetCollection extends View {
  items?: EntityRef[] // items is undefined on new datasets
  concreteType: DATASET_CONCRETE_TYPE
}
