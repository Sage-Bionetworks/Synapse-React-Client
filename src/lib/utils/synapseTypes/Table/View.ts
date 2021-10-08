import { DATASET_CONCRETE_TYPE } from './Dataset'
import { ENTITY_VIEW_CONCRETE_TYPE } from './EntityView'
import { SUBMISSION_VIEW_CONCRETE_TYPE } from './SubmissionView'
import { Table } from './Table'

export type VIEW_CONCRETE_TYPE =
  | ENTITY_VIEW_CONCRETE_TYPE
  | SUBMISSION_VIEW_CONCRETE_TYPE
  | DATASET_CONCRETE_TYPE

// https://docs.synapse.org/rest/org/sagebionetworks/repo/model/table/View.html

// The View interface only exists in
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface View extends Table {
  concreteType: VIEW_CONCRETE_TYPE
}
