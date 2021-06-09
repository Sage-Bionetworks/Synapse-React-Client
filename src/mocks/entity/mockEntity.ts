import {
  Entity,
  EntityHeader,
  EntityType,
  FileEntity,
} from '../../lib/utils/synapseTypes'

export const MOCK_FILE_HANDLE_ID = 'syn123'
export const MOCK_FOLDER_ID = 'syn1234'
export const MOCK_PROJECT_ID = 'syn12345'

export const mockFileEntity: FileEntity = {
  id: MOCK_FILE_HANDLE_ID,
  parentId: MOCK_PROJECT_ID,
  dataFileHandleId: '123332',
  name: 'my file name',
  concreteType: 'org.sagebionetworks.repo.model.FileEntity',
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
