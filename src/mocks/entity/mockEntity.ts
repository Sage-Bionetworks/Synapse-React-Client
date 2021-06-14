import {
  AnnotationsValueType,
  Entity,
  EntityBundle,
  EntityHeader,
  EntityType,
  FileEntity,
  ObjectType,
  RestrictionLevel,
} from '../../lib/utils/synapseTypes'
import {
  mockFileHandle,
  mockPreviewFileHandle,
  MOCK_FILE_HANDLE_ID,
} from '../mock_file_handle'
import { MOCK_USER_ID } from '../user/mock_user_profile'

export const MOCK_FILE_ENTITY_ID = 'syn123'
export const MOCK_FOLDER_ID = 'syn1234'
export const MOCK_PROJECT_ID = 'syn12345'

export const mockFileEntity: FileEntity = {
  id: MOCK_FILE_ENTITY_ID,
  parentId: MOCK_PROJECT_ID,
  dataFileHandleId: MOCK_FILE_HANDLE_ID,
  name: 'My mock file entity',
  concreteType: 'org.sagebionetworks.repo.model.FileEntity',
}

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
}

export const mockFileEntityHeader: EntityHeader = {
  id: mockFileEntity.id!,
  name: mockFileEntity.name!,
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

export const mockProjectEntityBundle: EntityBundle = {
  entity: {
    name: 'A Mock Project',
    id: MOCK_PROJECT_ID,
    etag: '7849ff2c-1c93-4104-adcf-9e6d6b0c50b5',
    createdOn: '2020-11-18T20:05:06.519Z',
    modifiedOn: '2021-05-19T12:44:35.457Z',
    createdBy: `${MOCK_USER_ID}`,
    modifiedBy: `${MOCK_USER_ID}`,
    parentId: 'syn4489',
    concreteType: 'org.sagebionetworks.repo.model.Project',
  },
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
          'DELETE',
          'CHANGE_SETTINGS',
          'MODERATE',
          'CHANGE_PERMISSIONS',
          'UPDATE',
          'READ',
          'DOWNLOAD',
          'CREATE',
        ],
      },
      {
        principalId: 273948,
        accessType: ['READ'],
      },
      {
        principalId: 273949,
        accessType: ['READ'],
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
          'DELETE',
          'CHANGE_SETTINGS',
          'MODERATE',
          'CHANGE_PERMISSIONS',
          'UPDATE',
          'READ',
          'DOWNLOAD',
          'CREATE',
        ],
      },
      {
        principalId: 273948,
        accessType: ['READ'],
      },
      {
        principalId: 273949,
        accessType: ['READ'],
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
