import {
  Entity,
  EntityHeader,
  EntityView,
  ENTITY_VIEW_TYPE_MASK_FILE,
  ENTITY_VIEW_TYPE_MASK_PROJECT,
  PaginatedResults,
  ProjectHeader,
  TableEntity,
} from '../../lib/utils/synapseTypes'
import { MOCK_USER_ID } from '../user/mock_user_profile'
import mockFile from './mockFileEntity'
import mockProject from './mockProject'

const MOCK_PROJECT_ID = mockProject.id
const mockProjectEntity = mockProject.entity
const MOCK_FILE_NAME = mockFile.name
const mockFileEntityHeader = mockFile.entityHeader

export const MOCK_FOLDER_ID = 'syn1234'
export const MOCK_INVALID_PROJECT_NAME = 'A $@*#$% terribly named Project'
export const MOCK_TABLE_ENTITY_ID = 'syn345'
export const MOCK_FILE_VIEW_ENTITY_ID = 'syn456'
export const MOCK_PROJECT_VIEW_ENTITY_ID = 'syn567'

export const mockFolderEntity: Entity = {
  id: MOCK_FOLDER_ID,
  parentId: MOCK_PROJECT_ID,
  name: 'my folder name',
  concreteType: 'org.sagebionetworks.repo.model.Folder',
}

export const mockFolderEntityHeader: EntityHeader = {
  id: mockFolderEntity.id!,
  name: mockFolderEntity.name,
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

export const mockProjectHeader: ProjectHeader = {
  id: mockProjectEntity.id!,
  name: mockProjectEntity.name,
  lastActivity: '2022-02-03T12:44:35.457Z',
  modifiedOn: mockProjectEntity.modifiedOn!,
  modifiedBy: MOCK_USER_ID,
}

export const mockTableEntity: TableEntity = {
  id: MOCK_TABLE_ENTITY_ID,
  parentId: MOCK_PROJECT_ID,
  name: MOCK_FILE_NAME,
  concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
  createdBy: MOCK_USER_ID.toString(),
  modifiedBy: MOCK_USER_ID.toString(),
  etag: '00000000-0000-0000-0000-000000000000',
  columnIds: [],
  isSearchEnabled: true,
}

export const mockFileViewEntity: EntityView = {
  id: MOCK_FILE_VIEW_ENTITY_ID,
  parentId: MOCK_PROJECT_ID,
  name: MOCK_FILE_NAME,
  concreteType: 'org.sagebionetworks.repo.model.table.EntityView',
  createdBy: MOCK_USER_ID.toString(),
  modifiedBy: MOCK_USER_ID.toString(),
  etag: '00000000-0000-0000-0000-000000000000',
  columnIds: [],
  viewTypeMask: ENTITY_VIEW_TYPE_MASK_FILE,
  scopeIds: [MOCK_PROJECT_ID],
}

export const mockProjectViewEntity: EntityView = {
  id: MOCK_PROJECT_VIEW_ENTITY_ID,
  parentId: MOCK_PROJECT_ID,
  name: MOCK_FILE_NAME,
  concreteType: 'org.sagebionetworks.repo.model.table.EntityView',
  createdBy: MOCK_USER_ID.toString(),
  modifiedBy: MOCK_USER_ID.toString(),
  etag: '00000000-0000-0000-0000-000000000000',
  columnIds: [],
  viewTypeMask: ENTITY_VIEW_TYPE_MASK_PROJECT,
  scopeIds: [MOCK_PROJECT_ID],
}
