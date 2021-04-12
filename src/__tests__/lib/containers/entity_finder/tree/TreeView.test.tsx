import '@testing-library/jest-dom'
import { act, render, waitFor, screen } from '@testing-library/react'
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
import useGetEntityBundle from '../../../../../lib/utils/hooks/SynapseAPI/useEntityBundle'
import {
  EntityHeader,
  EntityPath,
  EntityType,
  PaginatedResults,
  ProjectHeader,
} from '../../../../../lib/utils/synapseTypes'
import { NodeAppearance } from '../../../../../lib/containers/entity_finder/tree/TreeNode'
import userEvent from '@testing-library/user-event'

const TreeNode = require('../../../../../lib/containers/entity_finder/tree/TreeNode')

let invokeSetSelectedId: (containerId: string) => void

TreeNode.TreeNode = jest.fn().mockImplementation(({ setSelectedId }) => {
  invokeSetSelectedId = (containerId: string) => {
    setSelectedId(containerId)
  }
  return <></>
})

const mockTreeNode = TreeNode.TreeNode

jest.mock('../../../../../lib/utils/hooks/SynapseAPI/useProjects', () => {
  return {
    useGetProjectsInfinite: jest.fn(),
  }
})

jest.mock('../../../../../lib/utils/hooks/SynapseAPI/useEntityBundle', () => {
  return {
    __esModule: true,
    default: jest.fn(),
  }
})

jest.mock('../../../../../lib/utils/SynapseClient', () => {
  return {
    getUserFavorites: jest.fn(),
    getEntityPath: jest.fn(),
    getEntityHeader: jest.fn(),
  }
})
const mockGetUserFavorites = SynapseClient.getUserFavorites as jest.Mock
const mockGetEntityPath = SynapseClient.getEntityPath as jest.Mock
const mockGetEntityHeader = SynapseClient.getEntityHeader as jest.Mock
const mockFetchNextPage = jest.fn()

const mockSetDetailsViewConfiguration = jest.fn()
const mockUseGetProjectsInfinite = useGetProjectsInfinite as jest.Mock
const mockUseGetEntityBundle = useGetEntityBundle as jest.Mock

const mockSetBreadcrumbItems = jest.fn()
const mockToggleSelection = jest.fn()

const defaultProps: TreeViewProps = {
  sessionToken: 'abcd',
  selectedEntities: [],
  initialScope: FinderScope.CURRENT_PROJECT,
  projectId: 'syn5',
  initialContainer: 'syn123',
  showDropdown: true,
  visibleTypes: [EntityType.PROJECT, EntityType.FOLDER],
  setDetailsViewConfiguration: mockSetDetailsViewConfiguration,
  setBreadcrumbItems: mockSetBreadcrumbItems,
  toggleSelection: mockToggleSelection,
  nodeAppearance: NodeAppearance.SELECT,
  showScopeAsRootNode: true,
  selectableTypes: Object.values(EntityType),
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
  return render(<TreeView {...defaultProps} {...propOverrides} />)
}

describe('TreeView tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockAllIsIntersecting(false)

    mockGetUserFavorites.mockResolvedValue(favorites)
    mockGetEntityPath.mockResolvedValue(entityPath)
    mockGetEntityHeader.mockResolvedValue(entityPath.path[1])

    mockUseGetEntityBundle.mockReturnValue({
      data: {
        path: entityPath,
      },
      isSuccess: true,
    })
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

    renderComponent({ initialScope: FinderScope.ALL_PROJECTS })

    // Don't fetch the next page until it's in view
    expect(mockFetchNextPage).not.toBeCalled()

    // End of list comes into view, triggering more to load
    mockAllIsIntersecting(true)

    await waitFor(() => expect(mockFetchNextPage).toBeCalled())
  })

  describe('Dropdown selection tests', () => {
    it('cannot select `Current Project` if project ID is not provided', async () => {
      renderComponent({
        initialScope: FinderScope.ALL_PROJECTS,
        projectId: undefined,
      })

      userEvent.click(screen.getByRole('button'))
      expect(() => screen.getAllByLabelText('Current Project')).toThrowError()
    })

    it('can select `Current Project` if initial container is provided', async () => {
      renderComponent({
        initialScope: FinderScope.ALL_PROJECTS,
        projectId: 'syn123',
      })

      userEvent.click(screen.getByRole('button'))
      expect(screen.getAllByText('Current Project').length).toBe(1)
    })

    it('changes data when a new selection is made', async () => {
      renderComponent({
        initialScope: FinderScope.ALL_PROJECTS,
        initialContainer: defaultProps.initialContainer,
      })

      userEvent.click(screen.getByRole('button'))
      userEvent.click(screen.getByText('My Favorites'))

      await waitFor(() => expect(mockGetUserFavorites).toBeCalled())
    })
  })

  describe('DetailsViewConfiguration callback tests', () => {
    // Test what happens e.g. when 'setCurrentContainer' is called with different values,
    it('Creates a prompt configuration there is no currentContainer', async () => {
      renderComponent({
        initialContainer: undefined,
        initialScope: FinderScope.ALL_PROJECTS,
      })

      await waitFor(() => expect(mockSetDetailsViewConfiguration).toBeCalled())

      expect(mockSetDetailsViewConfiguration).toBeCalledWith({
        type: EntityDetailsListDataConfigurationType.PROMPT,
      })
    })
    it('Configures to get all projects when the root node is selected with a scope of all projects', async () => {
      renderComponent({
        initialContainer: 'root',
        initialScope: FinderScope.ALL_PROJECTS,
      })

      await waitFor(() => expect(mockSetDetailsViewConfiguration).toBeCalled())

      expect(mockSetDetailsViewConfiguration).toHaveBeenLastCalledWith({
        type: EntityDetailsListDataConfigurationType.USER_PROJECTS,
        getProjectParams: undefined,
      })
    })

    it('Configures to get projects created by the user when the root node is selected with a scope of projects created by the user', () => {
      renderComponent({
        initialContainer: 'root',
        initialScope: FinderScope.CREATED_BY_ME,
      })

      expect(mockSetDetailsViewConfiguration).toHaveBeenLastCalledWith({
        type: EntityDetailsListDataConfigurationType.USER_PROJECTS,
        getProjectParams: { filter: 'CREATED' },
      })
    })

    it('Configures to display a list containing just the current project when the root node is selected with a scope of the current project', async () => {
      renderComponent({
        initialContainer: 'root',
        projectId: defaultProps.projectId,
        initialScope: FinderScope.CURRENT_PROJECT,
      })

      await waitFor(() => expect(mockGetEntityHeader).toBeCalled())
      expect(mockGetEntityPath).not.toBeCalled()

      const currentProject = entityPath.path[1]

      expect(mockSetDetailsViewConfiguration).toHaveBeenLastCalledWith({
        type: EntityDetailsListDataConfigurationType.HEADER_LIST,
        headerList: [currentProject],
      })
    })

    it('Configures to get favorites when the root node is selected with a scope of favorites', async () => {
      renderComponent({
        initialContainer: 'root',
        initialScope: FinderScope.FAVORITES,
      })

      await waitFor(() => expect(mockSetDetailsViewConfiguration).toBeCalled())

      expect(mockSetDetailsViewConfiguration).toHaveBeenLastCalledWith({
        type: EntityDetailsListDataConfigurationType.USER_FAVORITES,
      })
    })

    it('Configures to get children of the current container when a container is selected', async () => {
      renderComponent()

      await waitFor(() => expect(mockSetDetailsViewConfiguration).toBeCalled())

      // Select an entity using callback prop in child component
      act(() => {
        invokeSetSelectedId('syn123')
      })

      await waitFor(() => expect(mockSetDetailsViewConfiguration).toBeCalled())

      expect(mockSetDetailsViewConfiguration).toHaveBeenLastCalledWith({
        type: EntityDetailsListDataConfigurationType.PARENT_CONTAINER,
        parentContainerId: 'syn123',
      })
    })
  })

  it('passes down props to children', async () => {
    renderComponent()

    await waitFor(() => expect(mockSetDetailsViewConfiguration).toBeCalled())

    expect(mockTreeNode).toHaveBeenLastCalledWith(
      expect.objectContaining({
        sessionToken: defaultProps.sessionToken,
        level: 0,
        rootNodeConfiguration: {
          nodeText: defaultProps.initialScope,
          children: [entityPath.path[1]],
        },
        autoExpand: expect.anything(),
        selectedId: defaultProps.initialContainer,
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

    expect(mockTreeNode).toHaveBeenLastCalledWith(
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
