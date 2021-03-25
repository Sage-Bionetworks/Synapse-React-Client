import '@testing-library/jest-dom'
import { act, render, waitFor } from '@testing-library/react'
import React from 'react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { SynapseClient } from '../../../../../lib'
import { EntityDetailsListDataConfigurationType } from '../../../../../lib/containers/entity_finder/details/EntityDetailsList'
import {
  FinderScope,
  TreeView,
  TreeViewProps,
} from '../../../../../lib/containers/entity_finder/tree/TreeView'
import { useGetProjectsInfinite } from '../../../../../lib/utils/hooks/SynapseAPI/useProjects'
import {
  EntityHeader,
  EntityPath,
  EntityType,
  PaginatedResults,
  ProjectHeader,
} from '../../../../../lib/utils/synapseTypes'

const TreeViewNode = require('../../../../../lib/containers/entity_finder/tree/TreeViewNode')

let invokeSetSelectedId: (containerId: string) => void

TreeViewNode.TreeViewNode = jest
  .fn()
  .mockImplementation(({ setSelectedId }) => {
    invokeSetSelectedId = (containerId: string) => {
      setSelectedId(containerId)
    }
    return <></>
  })

const mockTreeViewNode = TreeViewNode.TreeViewNode

jest.mock('../../../../../lib/utils/hooks/SynapseAPI/useProjects', () => {
  return {
    useGetProjectsInfinite: jest.fn(),
  }
})

jest.mock('../../../../../lib/utils/SynapseClient', () => {
  return {
    getUserFavorites: jest.fn(),
    getEntityPath: jest.fn(),
  }
})
const mockGetUserFavorites = SynapseClient.getUserFavorites as jest.Mock
const mockGetEntityPath = SynapseClient.getEntityPath as jest.Mock
const mockFetchNextPage = jest.fn()

const mockSetDetailsViewConfiguration = jest.fn()
const mockUseGetProjectsInfinite = useGetProjectsInfinite as jest.Mock

const defaultProps: TreeViewProps = {
  sessionToken: 'abcd',
  initialScope: FinderScope.CURRENT_PROJECT,
  initialContainerId: 'syn123',
  showDropdown: true,
  visibleTypes: [EntityType.PROJECT, EntityType.FOLDER],
  setDetailsViewConfiguration: mockSetDetailsViewConfiguration,
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

function renderScreen(propOverrides?: Partial<TreeViewProps>) {
  return render(<TreeView {...defaultProps} {...propOverrides} />)
}

describe('TreeView tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockAllIsIntersecting(false)

    mockGetUserFavorites.mockResolvedValue(favorites)
    mockGetEntityPath.mockResolvedValue(entityPath)

    mockUseGetProjectsInfinite.mockReturnValue({
      data: {
        pages: [
          {
            results: projectsPage1,
            nextPageToken: '50a0',
          },
          {
            results: projectsPage2,
            nextPageToken: null,
          },
        ],
        pageParams: [],
      },
      fetchNextPage: mockFetchNextPage,
      hasNextPage: false,
    })
  })

  it('loads more projects when inView', async () => {
    mockUseGetProjectsInfinite.mockReturnValue({
      data: {
        pages: [
          {
            results: projectsPage1,
            nextPageToken: '50a0',
          },
          {
            results: projectsPage2,
            nextPageToken: null,
          },
        ],
        pageParams: [],
      },
      fetchNextPage: mockFetchNextPage,
      hasNextPage: true, // !
      isLoading: false,
    })

    renderScreen({ initialScope: FinderScope.ALL_PROJECTS })

    // Don't fetch the next page until it's in view
    expect(mockFetchNextPage).not.toBeCalled()

    // End of list comes into view, triggering more to load
    mockAllIsIntersecting(true)

    await waitFor(() => expect(mockFetchNextPage).toBeCalled())
  })

  // TODO
  // describe('Dropdown selection tests', () => {
  //   // Test that CURRENT_PROJECT isn't selectable if there's no initialContainerId
  //   // (Multiple) Test that the data shown is correct given the selected dropdown
  // })

  describe('DetailsViewConfiguration callback tests', () => {
    // Test what happens e.g. when 'setCurrentContainer' is called with different values,
    it('Creates a prompt configuration there is no currentContainer', async () => {
      renderScreen({
        initialContainerId: undefined,
        initialScope: FinderScope.ALL_PROJECTS,
      })

      await waitFor(() => expect(mockSetDetailsViewConfiguration).toBeCalled())

      expect(mockSetDetailsViewConfiguration).toBeCalledWith({
        type: EntityDetailsListDataConfigurationType.PROMPT,
      })
    })
    it('Configures to get all projects when the root node is selected with a scope of all projects', async () => {
      renderScreen({
        initialContainerId: 'root',
        initialScope: FinderScope.ALL_PROJECTS,
      })

      await waitFor(() => expect(mockSetDetailsViewConfiguration).toBeCalled())

      expect(mockSetDetailsViewConfiguration).toBeCalledWith({
        type: EntityDetailsListDataConfigurationType.USER_PROJECTS,
        getProjectParams: undefined,
      })
    })

    it('Configures to get projects created by the user when the root node is selected with a scope of projects created by the user', () => {
      renderScreen({
        initialContainerId: 'root',
        initialScope: FinderScope.CREATED_BY_ME,
      })

      expect(mockSetDetailsViewConfiguration).toBeCalledWith({
        type: EntityDetailsListDataConfigurationType.USER_PROJECTS,
        getProjectParams: { filter: 'CREATED' },
      })
    })

    it('Configures to display a list containing just the current project when the root node is selected with a scope of the current project', async () => {
      renderScreen({
        initialContainerId: 'root',
        initialScope: FinderScope.CURRENT_PROJECT,
      })

      await waitFor(() => expect(mockGetEntityPath).toBeCalled())

      const currentProject = entityPath.path[1]

      expect(mockSetDetailsViewConfiguration).toBeCalledWith({
        type: EntityDetailsListDataConfigurationType.HEADER_LIST,
        headerList: [currentProject],
      })
    })

    it('Configures to get favorites when the root node is selected with a scope of favorites', async () => {
      renderScreen({
        initialContainerId: 'root',
        initialScope: FinderScope.FAVORITES,
      })

      await waitFor(() => expect(mockSetDetailsViewConfiguration).toBeCalled())

      expect(mockSetDetailsViewConfiguration).toBeCalledWith({
        type: EntityDetailsListDataConfigurationType.USER_FAVORITES,
      })
    })

    it('Configures to get children of the current container when a container is selected', async () => {
      renderScreen()

      await waitFor(() => expect(mockSetDetailsViewConfiguration).toBeCalled())

      // Select an entity using callback prop in child component
      act(() => {
        invokeSetSelectedId('syn123')
      })

      await waitFor(() => expect(mockSetDetailsViewConfiguration).toBeCalled())

      expect(mockSetDetailsViewConfiguration).toBeCalledWith({
        type: EntityDetailsListDataConfigurationType.PARENT_CONTAINER,
        parentContainerId: 'syn123',
      })
    })
  })

  it('passes down props to children', async () => {
    renderScreen()

    await waitFor(() => expect(mockSetDetailsViewConfiguration).toBeCalled())

    expect(mockTreeViewNode).toHaveBeenLastCalledWith(
      expect.objectContaining({
        sessionToken: defaultProps.sessionToken,
        level: 0,
        rootNodeConfiguration: {
          nodeText: defaultProps.initialScope,
          children: [entityPath.path[1]],
        },
        autoExpand: expect.anything(),
        selectedId: defaultProps.initialContainerId,
        setSelectedId: expect.anything(),
        visibleTypes: defaultProps.visibleTypes,
      }),
      {},
    )

    // Select an entity using callback prop in child component
    const newSelectedId = 'syn99999'
    act(() => {
      invokeSetSelectedId(newSelectedId)
    })

    await waitFor(() => expect(mockSetDetailsViewConfiguration).toBeCalled())

    expect(mockTreeViewNode).toHaveBeenLastCalledWith(
      expect.objectContaining({
        sessionToken: defaultProps.sessionToken,
        level: 0,
        rootNodeConfiguration: {
          nodeText: defaultProps.initialScope,
          children: [entityPath.path[1]],
        },
        autoExpand: expect.anything(),
        selectedId: newSelectedId,
        setSelectedId: expect.anything(),
        visibleTypes: defaultProps.visibleTypes,
      }),
      {},
    )
  })
})
