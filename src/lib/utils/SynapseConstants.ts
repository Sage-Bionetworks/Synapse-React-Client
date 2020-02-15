import { UserCardSize } from '../containers/UserCard'

/** QueryBundleRequest constants */
export const BUNDLE_MASK_QUERY_RESULTS: number = 1
export const BUNDLE_MASK_QUERY_COUNT: number = 2
export const BUNDLE_MASK_QUERY_SELECT_COLUMNS: number = 4
export const BUNDLE_MASK_QUERY_MAX_ROWS_PER_PAGE: number = 8
export const BUNDLE_MASK_QUERY_COLUMN_MODELS: number = 16
export const BUNDLE_MASK_QUERY_FACETS: number = 32
export const BUNDLE_MASK_SUM_FILES_SIZE_BYTES: number = 64
/** EntityBundle constants */
export const ENTITY_BUNDLE_MASK_ENTITY: number = 1
export const ENTITY_BUNDLE_MASK_ANNOTATIONS: number = 2
export const ENTITY_BUNDLE_MASK_PERMISSIONS: number = 4
export const ENTITY_BUNDLE_MASK_ENTITY_PATH: number = 8
export const ENTITY_BUNDLE_MASK_HAS_CHILDREN: number = 32
export const ENTITY_BUNDLE_MASK_ACL: number = 64
export const ENTITY_BUNDLE_MASK_FILE_HANDLES: number = 2048
export const ENTITY_BUNDLE_MASK_TABLE_DATA: number = 4096
export const ENTITY_BUNDLE_MASK_ROOT_WIKI_ID: number = 8192
export const ENTITY_BUNDLE_MASK_BENEFACTOR_ACL: number = 16384
export const ENTITY_BUNDLE_MASK_DOI: number = 32768
export const ENTITY_BUNDLE_MASK_FILE_NAME: number = 65536
export const ENTITY_BUNDLE_MASK_THREAD_COUNT: number = 131072
export const ENTITY_BUNDLE_MASK_RESTRICTION_INFORMATION: number = 262144
/** Row Types  */
export const STUDY: string = 'study'
/** Not set value for query */
export const VALUE_NOT_SET = 'org.sagebionetworks.UNDEFINED_NULL_NOTSET'
// for study icons
export const STUDY_ACTIVE: string = 'study active'
export const STUDY_COMPLETE: string = 'study complete'
export const DATASET: string = 'dataset'
export const AMP_CONSORTIUM: string = 'AMP_Consortium'
export const FUNDER: string = 'funder'
export const PUBLICATION: string = 'publication'
export const TOOL: string = 'tool'
export const GENERIC_CARD: string = 'GENERIC_CARD'
export const COMPUTATIONAL: string = 'computational'
export const EXPERIMENTAL: string = 'experimental'
export const CLINICAL: string = 'clinical'
export const PROJECT: string = 'Project'
export const PAGE_SIZE: number = 25
// For User Profile Cards
export const SMALL_USER_CARD: UserCardSize = 'SMALL USER CARD'
export const MEDIUM_USER_CARD: UserCardSize = 'MEDIUM USER CARD'
export const LARGE_USER_CARD: UserCardSize = 'LARGE USER CARD'
export const SEPERATOR = 'SEPERATOR'
export const AUTHENTICATED_USERS = 'AUTHENTICATED_USERS'
// For internal testing only
export const _TIME_DELAY = 75
export const SRC_SIGN_IN_CLASS = 'SRC-SIGN-IN-CLASS'

// UserBundle constants
export const USER_BUNDLE_MASK_USER_PROFILE = 0X1;
export const USER_BUNDLE_MASK_ORCID = 0X2;
export const USER_BUNDLE_MASK_VERIFICATION_SUBMISSION = 0X4;
export const USER_BUNDLE_MASK_IS_CERTIFIED = 0X8;
export const USER_BUNDLE_MASK_IS_VERIFIED = 0X10;
export const USER_BUNDLE_MASK_IS_ACT_MEMBER = 0X2;
