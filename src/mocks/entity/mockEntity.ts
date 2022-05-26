import {
  ACCESS_TYPE,
  AnnotationsValueType,
  Dataset,
  Entity,
  EntityBundle,
  EntityHeader,
  EntityJson,
  EntityType,
  FileEntity,
  ObjectType,
  PaginatedResults,
  RestrictionLevel,
} from '../../lib/utils/synapseTypes'
import { VersionInfo } from '../../lib/utils/synapseTypes/VersionInfo'
import {
  mockFileHandle,
  mockPreviewFileHandle,
  MOCK_FILE_HANDLE_ID,
} from '../mock_file_handle'
import { MOCK_USER_ID } from '../user/mock_user_profile'

export const MOCK_FILE_ENTITY_ID = 'syn123'
export const MOCK_FILE_NAME = 'My mock file entity'
export const MOCK_FOLDER_ID = 'syn1234'
export const MOCK_PROJECT_ID = 'syn12345'
export const MOCK_PROJECT_NAME = 'A Mock Project'
export const MOCK_INVALID_PROJECT_NAME = 'A $@*#$% terribly named Project'
export const MOCK_DATASET_ENTITY_ID = 'syn234'
// TODO: Create a mock wiki
const MOCK_WIKI_ID = '45745485'

export const mockFileEntity: FileEntity = {
  id: MOCK_FILE_ENTITY_ID,
  parentId: MOCK_PROJECT_ID,
  dataFileHandleId: MOCK_FILE_HANDLE_ID,
  name: MOCK_FILE_NAME,
  concreteType: 'org.sagebionetworks.repo.model.FileEntity',
  createdBy: MOCK_USER_ID.toString(),
  modifiedBy: MOCK_USER_ID.toString(),
  etag: '00000000-0000-0000-0000-000000000000',
  versionNumber: 3,
  versionLabel: '3',
  isLatestVersion: true,
}

/**
 * Version numbers 1 and 3 exist for our mock file
 */
export const mockFileEntityVersionInfo: VersionInfo[] = [
  {
    id: MOCK_FILE_ENTITY_ID,
    modifiedBy: MOCK_USER_ID.toString(),
    versionNumber: 1,
    versionLabel: '1',
    versionComment: 'a comment',
    contentSize: '100',
    contentMd5: 'd836adae5632872014783b05cd2f76d7',
    modifiedByPrincipalId: MOCK_USER_ID.toString(),
    modifiedOn: '2021-03-02T15:05:34.973Z',
    isLatestVersion: false,
  },
  {
    id: MOCK_FILE_ENTITY_ID,
    modifiedBy: MOCK_USER_ID.toString(),
    versionNumber: 3,
    versionLabel: '3',
    versionComment: 'a comment about version 3',
    contentSize: '100',
    contentMd5: 'bc91a4a16ccb21944fcee55275dc4574',
    modifiedByPrincipalId: MOCK_USER_ID.toString(),
    modifiedOn: '2021-03-05T11:31:24.521Z',
    isLatestVersion: true,
  },
]

export const mockFileEntityVersions: FileEntity[] = [
  {
    id: MOCK_FILE_ENTITY_ID,
    parentId: MOCK_PROJECT_ID,
    dataFileHandleId: MOCK_FILE_HANDLE_ID,
    name: MOCK_FILE_NAME,
    concreteType: 'org.sagebionetworks.repo.model.FileEntity',
    createdBy: MOCK_USER_ID.toString(),
    modifiedBy: MOCK_USER_ID.toString(),
    etag: '00000000-0000-0000-0000-000000000000',
    versionNumber: 3,
    versionLabel: '3',
    isLatestVersion: true,
  },
  {
    id: MOCK_FILE_ENTITY_ID,
    parentId: MOCK_PROJECT_ID,
    dataFileHandleId: MOCK_FILE_HANDLE_ID,
    name: MOCK_FILE_NAME,
    concreteType: 'org.sagebionetworks.repo.model.FileEntity',
    createdBy: MOCK_USER_ID.toString(),
    modifiedBy: MOCK_USER_ID.toString(),
    etag: '00000000-0000-0000-0000-000000000000',
    versionNumber: 1,
    versionLabel: '1',
    isLatestVersion: false,
  },
]

export const mockFileEntityBundle: EntityBundle = {
  entity: mockFileEntity,
  entityType: EntityType.FILE,
  fileHandles: [mockFileHandle, mockPreviewFileHandle],
  annotations: {
    id: MOCK_FILE_ENTITY_ID,
    etag: '00000000-0000-0000-0000-000000000000',
    annotations: {
      myStringKey: {
        type: AnnotationsValueType.STRING,
        value: ['myValue'],
      },
      myIntegerKey: {
        type: AnnotationsValueType.LONG,
        value: [4325435345213, 4321],
      },
      myFloatKey: {
        type: AnnotationsValueType.LONG,
        value: [1.5, 17 / 13],
      },
    },
  },
  rootWikiId: MOCK_WIKI_ID,
  benefactorAcl: {
    id: MOCK_PROJECT_ID,
    creationDate: '2020-11-18T20:05:06.540Z',
    etag: 'f143bbfd-ba09-4a42-b1e9-f9368777ad9b',
    resourceAccess: [
      {
        principalId: MOCK_USER_ID,
        accessType: [
          ACCESS_TYPE.DELETE,
          ACCESS_TYPE.CHANGE_SETTINGS,
          ACCESS_TYPE.MODERATE,
          ACCESS_TYPE.CHANGE_PERMISSIONS,
          ACCESS_TYPE.UPDATE,
          ACCESS_TYPE.READ,
          ACCESS_TYPE.DOWNLOAD,
          ACCESS_TYPE.CREATE,
        ],
      },
      {
        principalId: 273948,
        accessType: [ACCESS_TYPE.READ],
      },
      {
        principalId: 273949,
        accessType: [ACCESS_TYPE.READ],
      },
    ],
  },
  threadCount: 5,
  path: {
    path: [
      {
        name: 'root',
        id: 'syn4489',
        type: 'org.sagebionetworks.repo.model.Folder',
      },
      {
        name: MOCK_PROJECT_NAME,
        id: MOCK_PROJECT_ID,
        type: 'org.sagebionetworks.repo.model.Project',
      },
      {
        name: MOCK_FILE_NAME,
        id: MOCK_FILE_ENTITY_ID,
        type: 'org.sagebionetworks.repo.model.FileEntity',
      },
    ],
  },
}

export const mockFileEntityJson: EntityJson = {
  id: mockFileEntity.id!,
  name: mockFileEntity.name,
  etag: mockFileEntity.etag!,
  createdOn: mockFileEntity.createdOn!,
  modifiedOn: mockFileEntity.modifiedOn!,
  createdBy: mockFileEntity.createdBy!,
  modifiedBy: mockFileEntity.modifiedBy!,
  parentId: 'syn4489',
  concreteType: 'org.sagebionetworks.repo.model.Project',
  myStringKey: 'myValue',
  myIntegerKey: [4325435345213, 4321],
  myFloatKey: [1.5, 17 / 13],
}

export const mockFileEntityHeader: EntityHeader = {
  id: mockFileEntity.id!,
  name: mockFileEntity.name,
  type: mockFileEntity.concreteType,
  versionNumber: 1,
  versionLabel: 'Version label',
  benefactorId: 123,
  createdOn: '',
  modifiedOn: '',
  createdBy: '', // TODO: Replace with a valid mock user ID
  modifiedBy: '',
}

export const mockFolderEntity: Entity = {
  id: MOCK_FOLDER_ID,
  parentId: MOCK_PROJECT_ID,
  name: 'my folder name',
  concreteType: 'org.sagebionetworks.repo.model.Folder',
}

export const mockFolderEntityHeader: EntityHeader = {
  id: mockFolderEntity.id!,
  name: mockFolderEntity.name!,
  type: mockFolderEntity.concreteType,
  versionNumber: 1,
  versionLabel: 'Version label',
  benefactorId: 1234,
  createdOn: '',
  modifiedOn: '',
  createdBy: '', // TODO: Replace with a valid mock user ID
  modifiedBy: '',
}

export const mockPaginatedEntityHeaders: PaginatedResults<EntityHeader> = {
  totalNumberOfResults: 2,
  results: [mockFileEntityHeader, mockFolderEntityHeader],
}

export const mockProjectEntity: Entity = {
  name: MOCK_PROJECT_NAME,
  id: MOCK_PROJECT_ID,
  etag: '7849ff2c-1c93-4104-adcf-9e6d6b0c50b5',
  createdOn: '2020-11-18T20:05:06.519Z',
  modifiedOn: '2021-05-19T12:44:35.457Z',
  createdBy: `${MOCK_USER_ID}`,
  modifiedBy: `${MOCK_USER_ID}`,
  parentId: 'syn4489',
  concreteType: 'org.sagebionetworks.repo.model.Project',
}

export const mockProjectEntityBundle: EntityBundle = {
  entity: mockProjectEntity,
  entityType: EntityType.PROJECT,
  annotations: {
    id: MOCK_PROJECT_ID,
    etag: '7849ff2c-1c93-4104-adcf-9e6d6b0c50b5',
    annotations: {
      projectImage: {
        type: AnnotationsValueType.STRING,
        value: ['69006408'],
      },
      projectDescription: {
        type: AnnotationsValueType.STRING,
        value: ['WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW'],
      },
      projectDisplayName: {
        type: AnnotationsValueType.STRING,
        value: ['WWWWWWWWWWWWWWWWWW'],
      },
    },
  },
  permissions: {
    canView: true,
    canEdit: true,
    canAddChild: true,
    canCertifiedUserEdit: true,
    canCertifiedUserAddChild: true,
    isCertifiedUser: true,
    canChangePermissions: true,
    canChangeSettings: true,
    canDelete: true,
    canDownload: true,
    canUpload: true,
    canEnableInheritance: false,
    ownerPrincipalId: MOCK_USER_ID,
    canPublicRead: true,
    canModerate: true,
    isCertificationRequired: true,
  },
  path: {
    path: [
      {
        name: 'root',
        id: 'syn4489',
        type: 'org.sagebionetworks.repo.model.Folder',
      },
      {
        name: 'A Mock Project',
        id: MOCK_PROJECT_ID,
        type: 'org.sagebionetworks.repo.model.Project',
      },
    ],
  },
  hasChildren: true,
  accessControlList: {
    id: MOCK_PROJECT_ID,
    creationDate: '2020-11-18T20:05:06.540Z',
    etag: 'f143bbfd-ba09-4a42-b1e9-f9368777ad9b',
    resourceAccess: [
      {
        principalId: MOCK_USER_ID,
        accessType: [
          ACCESS_TYPE.DELETE,
          ACCESS_TYPE.CHANGE_SETTINGS,
          ACCESS_TYPE.MODERATE,
          ACCESS_TYPE.CHANGE_PERMISSIONS,
          ACCESS_TYPE.UPDATE,
          ACCESS_TYPE.READ,
          ACCESS_TYPE.DOWNLOAD,
          ACCESS_TYPE.CREATE,
        ],
      },
      {
        principalId: 273948,
        accessType: [ACCESS_TYPE.READ],
      },
      {
        principalId: 273949,
        accessType: [ACCESS_TYPE.READ],
      },
    ],
  },
  fileHandles: [],
  rootWikiId: '607416',
  benefactorAcl: {
    id: MOCK_PROJECT_ID,
    creationDate: '2020-11-18T20:05:06.540Z',
    etag: 'f143bbfd-ba09-4a42-b1e9-f9368777ad9b',
    resourceAccess: [
      {
        principalId: MOCK_USER_ID,
        accessType: [
          ACCESS_TYPE.DELETE,
          ACCESS_TYPE.CHANGE_SETTINGS,
          ACCESS_TYPE.MODERATE,
          ACCESS_TYPE.CHANGE_PERMISSIONS,
          ACCESS_TYPE.UPDATE,
          ACCESS_TYPE.READ,
          ACCESS_TYPE.DOWNLOAD,
          ACCESS_TYPE.CREATE,
        ],
      },
      {
        principalId: 273948,
        accessType: [ACCESS_TYPE.READ],
      },
      {
        principalId: 273949,
        accessType: [ACCESS_TYPE.READ],
      },
    ],
  },
  doiAssociation: {
    associationId: '9606623',
    etag: 'ddef9fe1-56b2-42f5-9a3c-db2d6f15401b',
    doiUri: `10.7303/${MOCK_PROJECT_ID}`,
    doiUrl: `https://repo-prod.prod.sagebase.org/repo/v1/doi/locate?id=${MOCK_PROJECT_ID}&type=ENTITY`,
    objectId: MOCK_PROJECT_ID,
    objectType: ObjectType.ENTITY,
    associatedBy: `${MOCK_USER_ID}`,
    associatedOn: '2021-01-04T15:42:18.000Z',
    updatedBy: `${MOCK_USER_ID}`,
    updatedOn: '2021-04-28T18:49:48.000Z',
  },
  threadCount: 2,
  restrictionInformation: {
    restrictionLevel: RestrictionLevel.OPEN,
    hasUnmetAccessRequirement: false,
  },
}

export const mockDatasetEntity: Dataset = {
  id: MOCK_DATASET_ENTITY_ID,
  parentId: MOCK_PROJECT_ID,
  name: MOCK_FILE_NAME,
  concreteType: 'org.sagebionetworks.repo.model.table.Dataset',
  createdBy: MOCK_USER_ID.toString(),
  modifiedBy: MOCK_USER_ID.toString(),
  etag: '00000000-0000-0000-0000-000000000000',
  items: [],
  columnIds: [],
}
