import React, { useCallback, useEffect, useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { useErrorHandler } from 'react-error-boundary'
import { useInView } from 'react-intersection-observer'
import { SynapseClient } from '../../../utils'
import { convertToEntityType } from '../../../utils/functions/EntityTypeUtils'
import { SYNAPSE_ENTITY_ID_REGEX } from '../../../utils/functions/RegularExpressions'
import useGetEntityBundle from '../../../utils/hooks/SynapseAPI/useEntityBundle'
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
import { BUNDLE_REQUEST_OBJECT } from '../EntityFinderUtils'
import { NodeAppearance, TreeNode } from './TreeNode'

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
// if the first item is selected (matching the dropdown), then output a configuration. otherwise, output a synId
export type TreeViewProps = {
  initialScope?: FinderScope
  /** To show the current project, projectId must be defined */
  projectId?: string
  initialContainer: string | 'root' | null
  showDropdown: boolean
  selectedEntities: Reference[]
  visibleTypes?: EntityType[]
  toggleSelection?: (entity: Reference) => void
  setDetailsViewConfiguration?: (
    configuration: EntityDetailsListDataConfiguration,
  ) => void
  setBreadcrumbItems?: (items: BreadcrumbItem[]) => void
  /** Determines whether to show the root node corresponding to the selected scope */
  showScopeAsRootNode?: boolean
  nodeAppearance: NodeAppearance
  /** The entity types that may be selected. */
  selectableTypes: EntityType[]
}

/**
 * The TreeView displays a user's entities hierarchically, allowing a user to quickly dive into an entity tree.
 *
 * The tree view currently can only be used to drive a DetailsView using the `setDetailsViewConfiguration` property.
 */
export const TreeView: React.FunctionComponent<TreeViewProps> = ({
  initialScope = FinderScope.CURRENT_PROJECT,
  projectId,
  initialContainer = null,
  visibleTypes = [EntityType.PROJECT, EntityType.FOLDER],
  toggleSelection,
  selectedEntities,
  setDetailsViewConfiguration,
  setBreadcrumbItems,
  showScopeAsRootNode = true,
  nodeAppearance,
  selectableTypes,
}: TreeViewProps) => {
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

  const [currentContainer, setCurrentContainer] = useState<
    string | 'root' | null
  >(
    nodeAppearance === NodeAppearance.BROWSE
      ? initialContainer
      : initialContainer,
  )

  const selected =
    nodeAppearance === NodeAppearance.SELECT
      ? selectedEntities
      : [{ targetId: currentContainer } as Reference]

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
    [toggleSelection],
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
    scope === FinderScope.CREATED_BY_ME ? { filter: 'CREATED' } : {},
    {
      enabled: useProjectData,
    },
  )

  const {
    data: currentContainerBundle,
    isSuccess: isSuccessBundle,
  } = useGetEntityBundle(currentContainer!, BUNDLE_REQUEST_OBJECT, undefined, {
    enabled: !!currentContainer && currentContainer !== 'root',
  })

  const { ref, inView } = useInView({ rootMargin: '500px' })

  useEffect(() => {
    if (useProjectData && isSuccessProjects) {
      if (projectData?.pages) {
        setTopLevelEntities(
          ([] as ProjectHeader[]).concat.apply(
            [],
            projectData.pages.map(page => page.results),
          ),
        )
      }
    }
  }, [useProjectData, isSuccessProjects, projectData])

  useEffect(() => {
    if (useProjectData && inView && hasNextPageProjects && !isLoadingProjects) {
      fetchNextPageProjects()
    }
  }, [
    useProjectData,
    inView,
    hasNextPageProjects,
    fetchNextPageProjects,
    scope,
    isLoadingProjects,
  ])

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
  ])

  const rootNodeConfiguration = {
    nodeText: getScopeOptionNodeName(scope),
    children: topLevelEntities,
  }
  const shouldAutoExpand = useCallback(
    (entityId: string) => {
      return !!(
        scope === FinderScope.CURRENT_PROJECT &&
        initialContainerPath &&
        isEntityIdInPath(entityId, initialContainerPath)
      )
    },
    [scope, initialContainerPath],
  )

  return (
    <div
      className={`TreeView ${
        nodeAppearance === NodeAppearance.SELECT ? 'SelectTree' : 'BrowseTree'
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
                        setCurrentContainer(null)
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
          {showScopeAsRootNode ? (
            <TreeNode
              level={0}
              selected={selected}
              setSelectedId={setSelectedId}
              visibleTypes={visibleTypes}
              autoExpand={shouldAutoExpand}
              rootNodeConfiguration={rootNodeConfiguration}
              appearance={nodeAppearance}
              selectableTypes={selectableTypes}
            />
          ) : (
            topLevelEntities.map(entity => (
              <TreeNode
                key={entity.id}
                level={0}
                selected={selected}
                setSelectedId={setSelectedId}
                visibleTypes={visibleTypes}
                autoExpand={shouldAutoExpand}
                entityHeader={entity}
                appearance={nodeAppearance}
                selectableTypes={selectableTypes}
              />
            ))
          )}
          <div ref={ref} style={{ height: '5px', width: '100%' }}></div>
        </div>
      )}
    </div>
  )
}
