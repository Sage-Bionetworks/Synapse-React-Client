import { UserCardSize } from '../containers/UserCard'

/** Bootstrapped principals */
/** The group representing all users logged-in to Synapse */
export const AUTHENTICATED_PRINCIPAL_ID = 273948
/** The group representing all logged-in Synapse users AND anonymous */
export const PUBLIC_PRINCIPAL_ID = 273949
/** The single user representing all unauthenticated users */
export const ANONYMOUS_PRINCIPAL_ID = 273950
/** The Synapse Access and Compliance team */
export const ACT_TEAM_ID = 464532
/** The team containing Synapse users whose HTML files may be rendered without sanitization */
export const TRUSTED_HTML_USERS_TEAM_ID = '3351236'

/** QueryBundleRequest constants */
export const BUNDLE_MASK_QUERY_RESULTS: number = 1
export const BUNDLE_MASK_QUERY_COUNT: number = 2
export const BUNDLE_MASK_QUERY_SELECT_COLUMNS: number = 4
export const BUNDLE_MASK_QUERY_MAX_ROWS_PER_PAGE: number = 8
export const BUNDLE_MASK_QUERY_COLUMN_MODELS: number = 16
export const BUNDLE_MASK_QUERY_FACETS: number = 32
export const BUNDLE_MASK_SUM_FILES_SIZE_BYTES: number = 64
export const BUNDLE_MASK_LAST_UPDATED_ON = 0x80
export const BUNDLE_MASK_COMBINED_SQL = 0x100

/** Request object to return all Entity Bundle fields */
export const ALL_ENTITY_BUNDLE_FIELDS = {
  includeEntity: true,
  includeEntityPath: true,
  includeAnnotations: true,
  includePermissions: true,
  includeHasChildren: true,
  includeAccessControlList: true,
  includeFileHandles: true,
  includeTableBundle: true,
  includeRootWikiId: true,
  includeBenefactorACL: true,
  includeDOIAssociation: true,
  includeFileName: true,
  includeThreadCount: true,
  includeRestrictionInformation: true,
} as const

/** Row Types  */
export const STUDY: string = 'study'
/** Unannotated value for query */
export const VALUE_NOT_SET = 'org.sagebionetworks.UNDEFINED_NULL_NOTSET'
export const FRIENDLY_VALUE_NOT_SET = 'Not Assigned'
// for study icons
export const STUDY_ACTIVE: string = 'study active'
export const STUDY_COMPLETE: string = 'study complete'
export const DATABASE: string = 'database'
export const DATASET: string = 'dataset'
export const AMP_CONSORTIUM: string = 'AMP_Consortium'
export const FUNDER: string = 'funder'
export const PUBLICATION: string = 'publication'
export const TOOL: string = 'tool'
export const GENERIC_CARD: string = 'GENERIC_CARD'
export const OBSERVATION_CARD: string = 'observation_card'
export const COMPUTATIONAL: string = 'computational'
export const COMPUTATIONAL_TOOL: string = 'computational tool'
export const EXPERIMENTAL: string = 'experimental'
export const EXPERIMENTAL_TOOL: string = 'experimental tool'
export const CLINICAL: string = 'clinical'
export const PROJECT: string = 'Project'
export const GRANT: string = 'Grant'
export const ORGANIZATION: string = 'ORGANIZATION'
export const PERSON: string = 'PERSON'
export const MOUSE: string = 'MOUSE'
export const EXPLORE: string = 'explore'
export const SEARCH: string = 'search'
export const CHART: string = 'chart'
export const FILTER: string = 'filter'
export const SQL_EDITOR: string = 'sqleditor'
export const DOWNLOAD: string = 'download'
export const EXPAND: string = 'expand'
export const COLLAPSE: string = 'collapse'
export const CLOSE: string = 'close'
export const SORTUP: string = 'sortup'
export const SORTDOWN: string = 'sortdown'
export const SETTINGS: string = 'settings'
export const COLUMNS: string = 'columns'
export const COLUMNSDARK: string = 'columnsdark'
export const VERTICAL_DOTS: string = 'verticaldots'
export const FILE: string = 'file'
export const CHART2: string = 'chart2'
export const EXTERNALLINK: string = 'externallink'
export const EASY_DIFFICULTY: string = 'easy-difficulty'
export const MEDIUM_DIFFICULTY: string = 'medium-difficulty'
export const VARIABLE_DIFFICULTY: string = 'variable-difficulty'
export const DOWNLOAD_PERMISSION_REQUIRED: string =
  'download-permission-required'

export const DEFAULT_PAGE_SIZE: number = 25
// For User Profile Cards
export const AVATAR: UserCardSize = 'AVATAR'
export const SMALL_USER_CARD: UserCardSize = 'SMALL USER CARD'
export const MEDIUM_USER_CARD: UserCardSize = 'MEDIUM USER CARD'
export const LARGE_USER_CARD: UserCardSize = 'LARGE USER CARD'
export const SEPERATOR = 'SEPERATOR'
export const AUTHENTICATED_USERS = 'AUTHENTICATED_USERS'

// For internal testing only
export const _TIME_DELAY = 75
export const SRC_SIGN_IN_CLASS = 'SRC-SIGN-IN-CLASS'
export const EXPERIMENTAL_MODE_COOKIE = 'SynapseTestWebsite'
export const STYLEGUIDE_STACK_LOCAL_STORAGE_KEY =
  'SynapseReactClientStyleGuideStack'

// UserBundle constants
export const USER_BUNDLE_MASK_USER_PROFILE = 0x1
export const USER_BUNDLE_MASK_ORCID = 0x2
export const USER_BUNDLE_MASK_VERIFICATION_SUBMISSION = 0x4
export const USER_BUNDLE_MASK_IS_CERTIFIED = 0x8
export const USER_BUNDLE_MASK_IS_VERIFIED = 0x10
export const USER_BUNDLE_MASK_IS_ACT_MEMBER = 0x20
export const USER_BUNDLE_MASK_IS_AR_REVIEWER = 0x40
// SessionStorage keys for info from ids
export const USER_PROFILE_STORAGE_KEY = 'INFO_FROM_IDS_USER_PROFILE'
export const ENTITY_HEADER_STORAGE_KEY = 'INFO_FROM_IDS_ENTITY_HEADER'

export const DATETIME_UTC_COOKIE_KEY =
  'org.sagebionetworks.synapse.datetime.utc'

export const BASE = 1024,
  KB = BASE,
  MB = KB * BASE,
  GB = MB * BASE,
  TB = GB * BASE
