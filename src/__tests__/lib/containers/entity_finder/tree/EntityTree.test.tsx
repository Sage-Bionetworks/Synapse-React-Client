import '@testing-library/jest-dom'
import { act, render, waitFor, screen } from '@testing-library/react'
import React, { useState } from 'react'
import { SynapseClient } from '../../../../../lib'
import { EntityDetailsListDataConfigurationType } from '../../../../../lib/containers/entity_finder/details/EntityDetailsList'
import {
  FinderScope,
  EntityTree,
  EntityTreeProps,
  EntityTreeContainer,
} from '../../../../../lib/containers/entity_finder/tree/EntityTree'
import { useGetProjectsInfinite } from '../../../../../lib/utils/hooks/SynapseAPI/useProjects'
import useGetEntityBundle from '../../../../../lib/utils/hooks/SynapseAPI/entity/useEntityBundle'
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
  VirtualizedTreeProps,
} from '../../../../../lib/containers/entity_finder/tree/VirtualizedTree'

const VirtualizedTree = require('../../../../../lib/containers/entity_finder/tree/VirtualizedTree')

let invokeSetSelectedId: (containerId: string) => void

VirtualizedTree.VirtualizedTree = jest
  .fn()
  .mockImplementation(({ rootNodeConfiguration, setSelectedId }) => {
    invokeSetSelectedId = (containerId: string) => {
      setSelectedId(containerId)
    }
    return <></>
  })

const mockTreePresenter = VirtualizedTree.VirtualizedTree

jest.mock('../../../../../lib/utils/hooks/SynapseAPI/useProjects', () => {
  return {
    useGetProjectsInfinite: jest.fn(),
  }
})

jest.mock(
  '../../../../../lib/utils/hooks/SynapseAPI/entity/useEntityBundle',
  () => {
    return {
      __esModule: true,
      default: jest.fn(),
    }
  },
)

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

const defaultProps: EntityTreeProps = {
  // We use JS arrays rather than Immutable.Map so we can easily inspect it in
  selectedEntities: [],
  initialScope: FinderScope.CURRENT_PROJECT,
  projectId: 'syn5',
  initialContainer: 'syn123',
  showDropdown: true,
  visibleTypes: [EntityType.PROJECT, EntityType.FOLDER],
  setDetailsViewConfiguration: mockSetDetailsViewConfiguration,
  setBreadcrumbItems: mockSetBreadcrumbItems,
  toggleSelection: mockToggleSelection,
  treeNodeType: EntityTreeNodeType.SINGLE_PANE,
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

const setCurrentContainerSpy = jest.fn()

function renderComponent(propOverrides?: Partial<EntityTreeProps>) {
  function EntityTreeWithCurrentContainer() {
    const [currentContainer, setCurrentContainer] =
      useState<EntityTreeContainer>(propOverrides?.initialContainer ?? null)
    setCurrentContainerSpy.mockImplementation(setCurrentContainer)
    return (
      <EntityTree
        {...defaultProps}
        {...propOverrides}
        currentContainer={currentContainer}
        setCurrentContainer={setCurrentContainerSpy}
      />
    )
  }

  return render(
    <SynapseContextProvider synapseContext={MOCK_CONTEXT_VALUE}>
      <EntityTreeWithCurrentContainer />
    </SynapseContextProvider>,
  )
}

describe('EntityTree tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()

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

  it('loads more projects when rootNodeConfiguration.fetchNextPageOfTopLevelEntities is called', async () => {
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

    // Don't fetch the next page until the prop is called
    expect(mockFetchNextPage).not.toBeCalled()

    // Capture the fetch function passed to the component
    const props = mockTreePresenter.mock.calls[0][0] as VirtualizedTreeProps
    expect(props.rootNodeConfiguration.fetchNextPage).toBeDefined()

    // Invoke the function
    props.rootNodeConfiguration.fetchNextPage!()

    await waitFor(() => expect(mockFetchNextPage).toBeCalled())
  })

  describe('Dropdown selection tests', () => {
    it('cannot select Current Project if project ID is not provided', async () => {
      renderComponent({
        initialScope: FinderScope.ALL_PROJECTS,
        projectId: undefined,
      })

      userEvent.click(screen.getByRole('button'))
      await waitFor(() =>
        expect(screen.getAllByRole('menuitem').length).toBeGreaterThan(0),
      )

      expect(screen.queryByLabelText('Current Project')).not.toBeInTheDocument()
    })

    it('can select Current Project if initial container is provided', async () => {
      renderComponent({
        initialScope: FinderScope.ALL_PROJECTS,
        projectId: 'syn123',
      })

      userEvent.click(screen.getByRole('button'))
      await waitFor(() =>
        expect(screen.getAllByRole('menuitem').length).toBeGreaterThan(0),
      )

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
      // SWC-5593 - When switching to favorites, the container should be 'root'
      expect(setCurrentContainerSpy).toHaveBeenLastCalledWith('root')
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
        currentContainer: 'root',
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

    expect(mockTreePresenter).toHaveBeenLastCalledWith(
      expect.objectContaining<VirtualizedTreeProps>({
        rootNodeConfiguration: {
          nodeText: 'Projects',
          children: [entityPath.path[1]],
          fetchNextPage: expect.any(Function),
          hasNextPage: false,
          show: true,
        },
        autoExpand: expect.any(Function),
        selected: [],
        setSelectedId: expect.any(Function),
        visibleTypes: defaultProps.visibleTypes,
      }),
      {},
    )

    // Select an entity using callback prop in child component
    const newSelectedId = 'syn99999'
    act(() => {
      invokeSetSelectedId(newSelectedId)
    })

    await waitFor(() => expect(mockToggleSelection).toBeCalled())

    // The wrapping component that controls the selection should be updated via callback, changing the prop
    renderComponent({ selectedEntities: [{ targetId: newSelectedId }] })

    await waitFor(() => expect(mockSetDetailsViewConfiguration).toBeCalled())

    expect(mockTreePresenter).toHaveBeenLastCalledWith(
      expect.objectContaining<VirtualizedTreeProps>({
        rootNodeConfiguration: {
          nodeText: 'Projects',
          children: [entityPath.path[1]],
          fetchNextPage: expect.any(Function),
          hasNextPage: false,
          show: true,
        },
        autoExpand: expect.any(Function),
        selectableTypes: defaultProps.selectableTypes,
        selected: [{ targetId: newSelectedId }],
        setSelectedId: expect.any(Function),
        visibleTypes: defaultProps.visibleTypes,
      }),
      {},
    )
  })
})
