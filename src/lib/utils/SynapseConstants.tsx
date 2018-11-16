/** QueryBundleRequest constants */
export const BUNDLE_MASK_QUERY_RESULTS: number = 1;
export const BUNDLE_MASK_QUERY_COUNT: number = 2;
export const BUNDLE_MASK_QUERY_SELECT_COLUMNS: number = 4;
export const BUNDLE_MASK_QUERY_MAX_ROWS_PER_PAGE: number = 8;
export const BUNDLE_MASK_QUERY_COLUMN_MODELS: number = 16;
export const BUNDLE_MASK_QUERY_FACETS: number = 32;
/** EntityBundle constants */
export const ENTITY_BUNDLE_MASK_ENTITY: number = 1;
export const ENTITY_BUNDLE_MASK_ANNOTATIONS: number = 2;
export const ENTITY_BUNDLE_MASK_PERMISSIONS: number = 4;
export const ENTITY_BUNDLE_MASK_ENTITY_PATH: number = 8;
export const ENTITY_BUNDLE_MASK_HAS_CHILDREN: number = 32;
export const ENTITY_BUNDLE_MASK_ACL: number = 64;
export const ENTITY_BUNDLE_MASK_FILE_HANDLES: number = 2048;
export const ENTITY_BUNDLE_MASK_TABLE_DATA: number = 4096;
export const ENTITY_BUNDLE_MASK_ROOT_WIKI_ID: number = 8192;
export const ENTITY_BUNDLE_MASK_BENEFACTOR_ACL: number = 16384;
export const ENTITY_BUNDLE_MASK_DOI: number = 32768;
export const ENTITY_BUNDLE_MASK_FILE_NAME: number = 65536;
export const ENTITY_BUNDLE_MASK_THREAD_COUNT: number = 131072;
export const ENTITY_BUNDLE_MASK_RESTRICTION_INFORMATION: number = 262144;
/** Row Types  */
export const STUDY: string = "study";
// for study icons
export const STUDY_ACTIVE: string = "study active";
export const STUDY_COMPLETE: string = "study complete";
export const DATASET: string = "dataset";
export const AMP_PROJECT: string = "AMP_Project";
export const FUNDER: string = "funder";
export const PUBLICATION: string = "publication";
export const TOOL: string = "tool";
