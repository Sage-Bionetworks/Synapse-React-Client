import { Map } from 'immutable'
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { Dropdown } from 'react-bootstrap'
import { useErrorHandler } from 'react-error-boundary'
import { SynapseClient } from '../../../utils'
import { convertToEntityType } from '../../../utils/functions/EntityTypeUtils'
import { SYNAPSE_ENTITY_ID_REGEX } from '../../../utils/functions/RegularExpressions'
import useGetEntityBundle from '../../../utils/hooks/SynapseAPI/entity/useEntityBundle'
import { useGetProjectsInfinite } from '../../../utils/hooks/SynapseAPI/useProjects'
import { useSynapseContext } from '../../../utils/SynapseContext'
import {
  EntityHeader,
  EntityPath,
  EntityType,
  ProjectHeader,
  Reference,
} from '../../../utils/synapseTypes'
import { SynapseSpinner } from '../../LoadingScreen'
import { BreadcrumbItem } from '../Breadcrumbs'
import {
  EntityDetailsListDataConfiguration,
  EntityDetailsListDataConfigurationType,
} from '../details/EntityDetailsList'
import { EntityTreeNodeType } from './VirtualizedTree'
import { RootNodeConfiguration, VirtualizedTree } from './VirtualizedTree'

const isEntityIdInPath = (entityId: string, path: EntityPath): boolean => {
  for (const eh of path.path) {
    if (entityId === eh.id) {
      return true
    }
  }
  return false
}

export enum FinderScope {
  CURRENT_PROJECT = 'Current Project',
  ALL_PROJECTS = 'All Projects',
  CREATED_BY_ME = 'Projects Created By Me',
  FAVORITES = 'My Favorites',
}

function getScopeOptionDefaultContainer(
  scope: FinderScope,
): EntityTreeContainer {
  switch (scope) {
    case FinderScope.FAVORITES:
      return 'root'
    case FinderScope.CURRENT_PROJECT:
    case FinderScope.ALL_PROJECTS:
    case FinderScope.CREATED_BY_ME:
      return null
  }
}

function getScopeOptionNodeName(scope: FinderScope): string {
  switch (scope) {
    case FinderScope.CURRENT_PROJECT:
    case FinderScope.ALL_PROJECTS:
    case FinderScope.CREATED_BY_ME:
      return 'Projects'
    case FinderScope.FAVORITES:
      return 'Favorites'
  }
}

/**
 * Indicates which container is selected when the tree is used to control another component. If 'root', then the top-level entities
 * should be shown in the other component. If a synID, then that entity's children should be shown in the other component. If null,
 * then a selection has not been made.
 */
export type EntityTreeContainer = string | 'root' | null

// if the first item is selected (matching the dropdown), then output a configuration. otherwise, output a synId
export type EntityTreeProps = {
  initialScope?: FinderScope
  /** To show the current project, projectId must be defined */
  projectId?: string
  initialContainer: EntityTreeContainer
  currentContainer: EntityTreeContainer
  setCurrentContainer: Dispatch<SetStateAction<EntityTreeContainer>>
  showDropdown: boolean
  selectedEntities: Map<string, number>
  visibleTypes?: EntityType[]
  toggleSelection?: (entity: Reference) => void
  setDetailsViewConfiguration?: (
    configuration: EntityDetailsListDataConfiguration,
  ) => void
  setBreadcrumbItems?: (items: BreadcrumbItem[]) => void
  /** Determines whether to show the root node corresponding to the selected scope */
  showScopeAsRootNode?: boolean
  treeNodeType: EntityTreeNodeType
  /** The entity types that may be selected. */
  selectableTypes: EntityType[]
}

/**
 * The TreeView displays a user's entities hierarchically, allowing a user to quickly dive into an entity tree.
 *
 * The tree view currently can only be used to drive a DetailsView using the `setDetailsViewConfiguration` property.
 */
export function EntityTree(props: EntityTreeProps) {
  const {
    initialScope = FinderScope.CURRENT_PROJECT,
    projectId,
    initialContainer = null,
    currentContainer,
    setCurrentContainer,
    visibleTypes = [EntityType.PROJECT, EntityType.FOLDER],
    toggleSelection,
    selectedEntities,
    setDetailsViewConfiguration,
    setBreadcrumbItems,
    showScopeAsRootNode = true,
    treeNodeType,
    selectableTypes,
  } = props

  const DEFAULT_CONFIGURATION: EntityDetailsListDataConfiguration = {
    type: EntityDetailsListDataConfigurationType.PROMPT,
  }

  const { accessToken } = useSynapseContext()

  const [isLoading, setIsLoading] = useState(false)
  const [topLevelEntities, setTopLevelEntities] = useState<
    (Pick<EntityHeader, 'name' | 'id' | 'type'> | ProjectHeader)[]
  >([])
  const [scope, setScope] = useState(initialScope)
  const [initialContainerPath, setInitialContainerPath] = useState<EntityPath>()

  const handleError = useErrorHandler()

  useEffect(() => {
    if (setDetailsViewConfiguration) {
      setDetailsViewConfiguration(DEFAULT_CONFIGURATION)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setSelectedId = useCallback(
    (entityId: string) => {
      if (toggleSelection) {
        toggleSelection({ targetId: entityId })
      }
      setCurrentContainer(entityId)
    },
    [setCurrentContainer, toggleSelection],
  )

  // For these scopes, use the `useGetProjectsInfinite` hook
  const useProjectData =
    scope === FinderScope.ALL_PROJECTS || scope === FinderScope.CREATED_BY_ME

  const {
    data: projectData,
    isSuccess: isSuccessProjects,
    fetchNextPage: fetchNextPageProjects,
    hasNextPage: hasNextPageProjects,
    isLoading: isLoadingProjects,
  } = useGetProjectsInfinite(
    scope === FinderScope.CREATED_BY_ME
      ? { filter: 'CREATED', sort: 'PROJECT_NAME', sortDirection: 'ASC' }
      : { sort: 'PROJECT_NAME', sortDirection: 'ASC' },
    {
      enabled: useProjectData,
      // Don't refetch the projects. Updating the entity headers will drop all of the children that VirtualizedTree has fetched
      refetchInterval: Infinity,
    },
  )

  const { data: currentContainerBundle, isSuccess: isSuccessBundle } =
    useGetEntityBundle(currentContainer!, undefined, undefined, {
      enabled: !!currentContainer && currentContainer !== 'root',
    })

  useEffect(() => {
    if (useProjectData && isSuccessProjects) {
      if (projectData?.pages) {
        setTopLevelEntities(projectData.pages.flatMap(page => page.results))
      }
    }
  }, [useProjectData, isSuccessProjects, projectData])

  // Populates the first level of entities in the tree view
  useEffect(() => {
    setIsLoading(true)
    switch (scope) {
      case FinderScope.ALL_PROJECTS:
      case FinderScope.CREATED_BY_ME:
        setIsLoading(isLoadingProjects)
        // See the useGetProjectsInfinite hook
        break
      case FinderScope.FAVORITES: {
        SynapseClient.getUserFavorites(accessToken).then(({ results }) => {
          // TODO: https://sagebionetworks.jira.com/browse/PLFM-6652
          results = results.filter(result =>
            visibleTypes.includes(convertToEntityType(result.type)),
          )
          setTopLevelEntities(results)
          setIsLoading(false)
        })
        break
      }
      case FinderScope.CURRENT_PROJECT:
        if (projectId) {
          if (initialContainer?.match(SYNAPSE_ENTITY_ID_REGEX)) {
            SynapseClient.getEntityPath(initialContainer, accessToken)
              .then(path => {
                if (!path.path.map(entity => entity.id).includes(projectId)) {
                  handleError(
                    new Error(
                      `An initial container (${initialContainer}) was provided but is not within or the same as the provided project (${projectId})`,
                    ),
                  )
                }
                setInitialContainerPath(path)
                setTopLevelEntities([path.path[1]])
                setIsLoading(false)
              })
              .catch(e => handleError(e))
          } else {
            SynapseClient.getEntityHeader(projectId, accessToken)
              .then(header => {
                setTopLevelEntities([header])
                setIsLoading(false)
              })
              .catch(e => handleError(e))
          }
        } else {
          handleError(
            new Error(
              'Cannot open current project because the current project is unknown',
            ),
          )
        }
        break
      default:
        handleError(new Error('No scope selected'))
    }
  }, [
    accessToken,
    scope,
    initialContainer,
    handleError,
    visibleTypes,
    isLoadingProjects,
    projectId,
  ])

  // Creates the configuration for the details view and invokes the callback
  useEffect(() => {
    if (setDetailsViewConfiguration || setBreadcrumbItems) {
      let detailsViewConfig: EntityDetailsListDataConfiguration
      let breadcrumbItems: BreadcrumbItem[] = []
      if (currentContainer === null) {
        detailsViewConfig = {
          type: EntityDetailsListDataConfigurationType.PROMPT,
        }
        breadcrumbItems = []
      } else if (currentContainer === 'root') {
        switch (scope) {
          case FinderScope.ALL_PROJECTS:
            detailsViewConfig = {
              type: EntityDetailsListDataConfigurationType.USER_PROJECTS,
            }
            break
          case FinderScope.CREATED_BY_ME:
            detailsViewConfig = {
              type: EntityDetailsListDataConfigurationType.USER_PROJECTS,
              getProjectParams: {
                filter: 'CREATED',
              },
            }
            break
          case FinderScope.CURRENT_PROJECT:
            detailsViewConfig = {
              type: EntityDetailsListDataConfigurationType.HEADER_LIST,
              headerList: topLevelEntities,
            }
            break
          case FinderScope.FAVORITES:
            detailsViewConfig = {
              type: EntityDetailsListDataConfigurationType.USER_FAVORITES,
            }
            break
        }
        breadcrumbItems = [
          {
            name: scope,
            isCurrent: true,
            action: () => {
              setCurrentContainer('root')
            },
          },
        ]
      } else {
        detailsViewConfig = {
          type: EntityDetailsListDataConfigurationType.PARENT_CONTAINER,
          parentContainerId: currentContainer,
        }
        if (isSuccessBundle) {
          breadcrumbItems = [
            {
              name: scope,
              isCurrent: false,
              action: () => {
                setCurrentContainer('root')
              },
            },
            ...currentContainerBundle!
              .path!.path.slice(1) // Remove the root entity, syn4489
              .map(entity => {
                return {
                  name: entity.name,
                  isCurrent: entity.id === currentContainer,
                  action: () => {
                    setCurrentContainer(entity.id)
                  },
                }
              }),
          ]
        }
      }
      if (setDetailsViewConfiguration) {
        setDetailsViewConfiguration(detailsViewConfig)
      }
      if (setBreadcrumbItems) {
        setBreadcrumbItems(breadcrumbItems)
      }
    }
  }, [
    scope,
    currentContainer,
    topLevelEntities,
    setDetailsViewConfiguration,
    setBreadcrumbItems,
    currentContainerBundle,
    isSuccessBundle,
    setCurrentContainer,
  ])

  const rootNodeConfiguration: RootNodeConfiguration = useMemo(
    () => ({
      show: showScopeAsRootNode,
      nodeText: getScopeOptionNodeName(scope),
      children: topLevelEntities,
      fetchNextPage: async () => {
        await fetchNextPageProjects()
      },
      hasNextPage: useProjectData && hasNextPageProjects! && !isLoadingProjects,
    }),
    [
      showScopeAsRootNode,
      scope,
      topLevelEntities,
      useProjectData,
      hasNextPageProjects,
      isLoadingProjects,
      fetchNextPageProjects,
    ],
  )

  const shouldAutoExpand = useCallback(
    (entityId: string) => {
      if (entityId === 'root') {
        return true
      } else {
        return !!(
          scope === FinderScope.CURRENT_PROJECT &&
          initialContainerPath &&
          isEntityIdInPath(entityId, initialContainerPath)
        )
      }
    },
    [scope, initialContainerPath],
  )

  return (
    <div
      className={`TreeView ${
        treeNodeType === EntityTreeNodeType.SINGLE_PANE
          ? 'SelectTree'
          : 'BrowseTree'
      }`}
    >
      <div className="Header">
        <div className="Browse">Browse:</div>
        <div onClick={e => e.stopPropagation()}>
          <Dropdown>
            <Dropdown.Toggle variant="gray-primary-500" id="dropdown-basic">
              {scope}
            </Dropdown.Toggle>
            <Dropdown.Menu role="menu">
              {Object.values(FinderScope).map(scopeOption => {
                if (
                  scopeOption === FinderScope.CURRENT_PROJECT &&
                  projectId == null
                ) {
                  return <React.Fragment key={scopeOption} />
                }
                return (
                  <Dropdown.Item
                    role="menuitem"
                    key={scopeOption}
                    onClick={e => {
                      e.stopPropagation()
                      if (scope !== scopeOption) {
                        setScope(scopeOption)
                        setCurrentContainer(
                          getScopeOptionDefaultContainer(scopeOption),
                        )
                      }
                    }}
                  >
                    {scopeOption}
                  </Dropdown.Item>
                )
              })}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      {isLoading ? (
        <div className="Placeholder">
          <SynapseSpinner size={30} />
        </div>
      ) : (
        <div className="Tree" role="tree">
          <VirtualizedTree
            selected={selectedEntities}
            visibleTypes={visibleTypes}
            autoExpand={shouldAutoExpand}
            rootNodeConfiguration={rootNodeConfiguration}
            treeNodeType={treeNodeType}
            selectableTypes={selectableTypes}
            currentContainer={currentContainer}
            setSelectedId={setSelectedId}
          />
        </div>
      )}
    </div>
  )
}
