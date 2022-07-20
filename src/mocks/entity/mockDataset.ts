import { Dataset, EntityPath } from '../../lib/utils/synapseTypes'
import { MOCK_USER_ID } from '../user/mock_user_profile'
import { MockEntityData } from './MockEntityData'
import mockProjectEntityData from './mockProject'

const MOCK_DATASET_ENTITY_ID = 'syn234'
const MOCK_DATASET_NAME = 'A Mocked Dataset'

export const mockDatasetEntity: Dataset = {
  id: MOCK_DATASET_ENTITY_ID,
  parentId: mockProjectEntityData.id,
  name: MOCK_DATASET_NAME,
  concreteType: 'org.sagebionetworks.repo.model.table.Dataset',
  createdBy: MOCK_USER_ID.toString(),
  modifiedBy: MOCK_USER_ID.toString(),
  etag: '00000000-0000-0000-0000-000000000000',
  items: [],
  columnIds: [],
}

const path: EntityPath = {
  path: [
    {
      name: 'root',
      id: 'syn4489',
      type: 'org.sagebionetworks.repo.model.Folder',
    },
    {
      name: mockProjectEntityData.name,
      id: mockProjectEntityData.id,
      type: 'org.sagebionetworks.repo.model.Project',
    },
    {
      name: MOCK_DATASET_NAME,
      id: MOCK_DATASET_ENTITY_ID,
      type: 'org.sagebionetworks.repo.model.FileEntity',
    },
  ],
}

const mockDatasetData: MockEntityData<Dataset> = {
  id: MOCK_DATASET_ENTITY_ID,
  name: MOCK_DATASET_NAME,
  entity: mockDatasetEntity,
  path: path,
}

export default mockDatasetData
