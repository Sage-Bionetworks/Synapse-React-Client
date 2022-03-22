import '@testing-library/jest-dom'
import { act, render, waitFor, screen } from '@testing-library/react'
import React from 'react'
import { SynapseClient } from '../../../../../lib'
import { EntityDetailsListDataConfigurationType } from '../../../../../lib/containers/entity_finder/details/EntityDetailsList'
import {
  FinderScope,
  TreeView,
  TreeViewProps,
} from '../../../../../lib/containers/entity_finder/tree/TreeView'
import { useGetProjectsInfinite } from '../../../../../lib/utils/hooks/SynapseAPI/useProjects'
import useGetEntityBundle from '../../../../../lib/utils/hooks/SynapseAPI/useEntityBundle'
import {
  EntityHeader,
  EntityPath,
  EntityType,
  PaginatedResults,
  ProjectHeader,
} from '../../../../../lib/utils/synapseTypes'
import userEvent from '@testing-library/user-event'
import { SynapseContextProvider } from '../../../../../lib/utils/SynapseContext'
import { MOCK_CONTEXT_VALUE } from '../../../../../mocks/MockSynapseContext'
import {
  EntityTreeNodeType,
  RootNodeConfiguration,
  TreePresenterProps,
} from '../../../../../lib/containers/entity_finder/tree/VirtualizedTree'
import { Map } from 'immutable'

jest.mock('../../../../../lib/utils/SynapseClient', () => {
  return {
    getUserFavorites: jest.fn(),
    getEntityPath: jest.fn(),
    getEntityHeader: jest.fn(),
  }
})

const mockSetSelectedId = jest.fn()
const mockAutoExpand = jest.fn().mockReturnValue(true)

const mockGetUserFavorites = SynapseClient.getUserFavorites as jest.Mock
const mockGetEntityPath = SynapseClient.getEntityPath as jest.Mock
const mockGetEntityHeader = SynapseClient.getEntityHeader as jest.Mock
const mockFetchNextPage = jest.fn()

const mockSetDetailsViewConfiguration = jest.fn()

const rootNodeConfiguration: RootNodeConfiguration = {
  show: true,
  nodeText: 'Root Node',
  children: [],
  fetchNextPage: function (): Promise<void> {
    throw new Error('Function not implemented.')
  },
  hasNextPage: false,
}

const defaultProps: TreePresenterProps = {
  rootNodeConfiguration: rootNodeConfiguration,
  selected: Map<string, number>(),
  treeNodeType: EntityTreeNodeType.DUAL_PANE,
  visibleTypes: [EntityType.PROJECT, EntityType.FOLDER],
  selectableTypes: Object.values(EntityType),
  setSelectedId: mockSetSelectedId,

  currentContainer: 'root',
  autoExpand: mockAutoExpand,
}

const projectsPage1: Partial<ProjectHeader>[] = [
  {
    id: 'syn1',
    name: 'Project 1',
    modifiedOn: 'today',
    modifiedBy: 100000,
  },
]

const projectsPage2: Partial<ProjectHeader>[] = [
  {
    id: 'syn2',
    name: 'Project 2',
    modifiedOn: 'today',
    modifiedBy: 100000,
  },
]

const favorites: PaginatedResults<EntityHeader> = {
  results: [
    {
      id: 'syn3',
      name: 'Favorite 1 - A Project',
      modifiedOn: 'today',
      modifiedBy: '100000',
      type: 'org.sagebionetworks.repo.model.Folder',
      versionNumber: 1,
      versionLabel: '',
      benefactorId: 123,
      createdOn: 'yesterday',
      createdBy: '10000',
    },
    {
      id: 'syn4',
      name: 'Favorite 2 - A file',
      modifiedOn: 'today',
      modifiedBy: '100000',
      type: 'org.sagebionetworks.repo.model.FileEntity',
      versionNumber: 1,
      versionLabel: '',
      benefactorId: 123,
      createdOn: 'yesterday',
      createdBy: '10000',
    },
  ],
}

const entityPath: EntityPath = {
  path: [
    {
      id: 'syn0',
      name: 'The root entity that is never seen',
      modifiedOn: 'today',
      modifiedBy: '100000',
      type: 'org.sagebionetworks.repo.model.Folder',
      versionNumber: 1,
      versionLabel: '',
      benefactorId: 123,
      createdOn: 'yesterday',
      createdBy: '10000',
    },
    {
      id: 'syn5',
      name: 'Project in entity path',
      modifiedOn: 'today',
      modifiedBy: '100000',
      type: 'org.sagebionetworks.repo.model.Project',
      versionNumber: 1,
      versionLabel: '',
      benefactorId: 123,
      createdOn: 'yesterday',
      createdBy: '10000',
    },
    {
      id: 'syn6',
      name: 'Folder in entity path',
      modifiedOn: 'today',
      modifiedBy: '100000',
      type: 'org.sagebionetworks.repo.model.Folder',
      versionNumber: 1,
      versionLabel: '',
      benefactorId: 123,
      createdOn: 'yesterday',
      createdBy: '10000',
    },
  ],
}

function renderComponent(propOverrides?: Partial<TreeViewProps>) {
  return render(
    <SynapseContextProvider synapseContext={MOCK_CONTEXT_VALUE}>
      <TreeView {...defaultProps} {...propOverrides} />
    </SynapseContextProvider>,
  )
}

describe('TreeView tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()

    // mockGetUserFavorites.mockResolvedValue(favorites)
    // mockGetEntityPath.mockResolvedValue(entityPath)
    // mockGetEntityHeader.mockResolvedValue(entityPath.path[1])

    // mockUseGetEntityBundle.mockReturnValue({
    //   data: {
    //     path: entityPath,
    //   },
    //   isSuccess: true,
    // })
    // mockUseGetProjectsInfinite.mockReturnValue({
    //   data: {
    //     pages: [
    //       {
    //         results: projectsPage1,
    //         nextPageToken: '50a0',
    //       },
    //       {
    //         results: projectsPage2,
    //         nextPageToken: null,
    //       },
    //     ],
    //     pageParams: [],
    //   },
    //   fetchNextPage: mockFetchNextPage,
    //   hasNextPage: false,
    // })
  })

  it('loads more projects when rootNodeConfiguration.fetchNextPageOfTopLevelEntities is called', async () => {})
})
