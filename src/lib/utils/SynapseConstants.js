/** QueryBundleRequest constants */
export const BUNDLE_MASK_QUERY_RESULTS = 1;
export const BUNDLE_MASK_QUERY_COUNT = 2;
export const BUNDLE_MASK_QUERY_SELECT_COLUMNS = 4;
export const BUNDLE_MASK_QUERY_MAX_ROWS_PER_PAGE = 8;
export const BUNDLE_MASK_QUERY_COLUMN_MODELS = 16;
export const BUNDLE_MASK_QUERY_FACETS = 32;

/** EntityBundle constants */
export const ENTITY_BUNDLE_MASK_ENTITY = 1;
export const ENTITY_BUNDLE_MASK_ANNOTATIONS	= 2;
export const ENTITY_BUNDLE_MASK_PERMISSIONS = 4;
export const ENTITY_BUNDLE_MASK_ENTITY_PATH = 8;
export const ENTITY_BUNDLE_MASK_HAS_CHILDREN = 32;
export const ENTITY_BUNDLE_MASK_ACL = 64;
export const ENTITY_BUNDLE_MASK_FILE_HANDLES = 2048;
export const ENTITY_BUNDLE_MASK_TABLE_DATA = 4096;
export const ENTITY_BUNDLE_MASK_ROOT_WIKI_ID = 8192;
export const ENTITY_BUNDLE_MASK_BENEFACTOR_ACL = 16384;
export const ENTITY_BUNDLE_MASK_DOI = 32768;
export const ENTITY_BUNDLE_MASK_FILE_NAME = 65536;
export const ENTITY_BUNDLE_MASK_THREAD_COUNT = 131072;
export const ENTITY_BUNDLE_MASK_RESTRICTION_INFORMATION = 262144;

/** Row Types  */
export const STUDY = "study"
export const DATASET = "dataset"
export const FUNDER = "funder"
export const PUBLICATION = "publication"
export const TOOL = "tool"
