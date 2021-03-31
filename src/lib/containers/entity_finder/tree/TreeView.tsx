import React, { useCallback, useEffect, useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { useErrorHandler } from 'react-error-boundary'
import { useInView } from 'react-intersection-observer'
import { SynapseClient } from '../../../utils'
import { convertToEntityType } from '../../../utils/functions/EntityTypeUtils'
import useGetEntityBundle from '../../../utils/hooks/SynapseAPI/useEntityBundle'
import { useGetProjectsInfinite } from '../../../utils/hooks/SynapseAPI/useProjects'
import {
  EntityHeader,
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
import { NodeAppearance, TreeNode } from './TreeNode'

// const isEntityIdInPath = (entityId: string, path: EntityPath): boolean => {
//   for (const eh of path.path) {
//     if (entityId === eh.id) {
//       return true
//     }
//   }
//   return false
// }

export enum FinderScope {
  CURRENT_PROJECT = 'Current Project',
  ALL_PROJECTS = 'All Projects',
  CREATED_BY_ME = 'Projects Created By Me',
  FAVORITES = 'My Favorites',
}

// if the first item is selected (matching the dropdown), then output a configuration. otherwise, output a synId
export type TreeViewProps = {
  sessionToken: string
  initialScope?: FinderScope
  initialContainerId?: string // Necessary to show the current project (including if initialScope === CURRENT_PROJECT). initialContainerId must the synId of the current project or a container within that project.
  showDropdown: boolean
  visibleTypes?: EntityType[] // Default ['project', 'folder']
  toggleSelection: (entity: Reference) => void
  setDetailsViewConfiguration: (
    configuration: EntityDetailsListDataConfiguration,
  ) => void
  setBreadcrumbItems: (items: BreadcrumbItem[]) => void
  showFakeRoot?: boolean
  nodeAppearance: NodeAppearance
}

/**
 * The TreeView displays a user's entities hierarchically, allowing a user to quickly dive into an entity tree.
 *
 * The tree view currently can only be used to drive a DetailsView using the `setDetailsViewConfiguration` property.
 */
export const TreeView: React.FunctionComponent<TreeViewProps> = ({
  sessionToken,
  initialScope = FinderScope.CURRENT_PROJECT,
  initialContainerId,
  visibleTypes = [EntityType.PROJECT, EntityType.FOLDER],
  toggleSelection,
  setDetailsViewConfiguration,
  setBreadcrumbItems,
  showFakeRoot = true,
  nodeAppearance,
}: TreeViewProps) => {
  const DEFAULT_CONFIGURATION: EntityDetailsListDataConfiguration = {
    type: EntityDetailsListDataConfigurationType.PROMPT,
  }

  const [isLoading, setIsLoading] = useState(false)
  const [topLevelEntities, setTopLevelEntities] = useState<
    (EntityHeader | ProjectHeader)[]
  >([])
  const [scope, setScope] = useState(initialScope)
  // const [initialContainerPath, setInitialContainerPath] = useState<EntityPath>()

  const [currentContainer, setCurrentContainer] = useState<
    string | 'root' | null
  >(null)

  const handleError = useErrorHandler()

  useEffect(() => {
    setDetailsViewConfiguration(DEFAULT_CONFIGURATION)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setSelectedId = useCallback(
    (entityId: string) => {
      toggleSelection({ targetId: entityId })
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
    sessionToken,
    scope === FinderScope.CREATED_BY_ME ? { filter: 'CREATED' } : {},
    {
      enabled: useProjectData,
    },
  )

  const {
    data: currentContainerBundle,
    isSuccess: isSuccessBundle,
  } = useGetEntityBundle(
    sessionToken,
    currentContainer!,
    {
      includeEntityPath: true,
    },
    undefined,
    {
      enabled: !!currentContainer && currentContainer !== 'root',
    },
  )

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
        SynapseClient.getUserFavorites(sessionToken).then(({ results }) => {
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
        if (initialContainerId == null) {
          handleError(
            new Error(
              'Cannot open current project because the current project is unknown',
            ),
          )
        } else {
          SynapseClient.getEntityPath(sessionToken, initialContainerId).then(
            path => {
              // setInitialContainerPath(path)
              setTopLevelEntities([path.path[1]])
              setIsLoading(false)
            },
          )
        }
        break
      default:
        handleError(new Error('No scope selected'))
    }
  }, [
    sessionToken,
    scope,
    initialContainerId,
    handleError,
    visibleTypes,
    isLoadingProjects,
  ])

  // Creates the configuration for the details view and invokes the callback
  useEffect(() => {
    if (currentContainer === null) {
      setDetailsViewConfiguration({
        type: EntityDetailsListDataConfigurationType.PROMPT,
      })
      setBreadcrumbItems([])
    } else if (currentContainer === 'root') {
      switch (scope) {
        case FinderScope.ALL_PROJECTS:
          setDetailsViewConfiguration({
            type: EntityDetailsListDataConfigurationType.USER_PROJECTS,
          })
          break
        case FinderScope.CREATED_BY_ME:
          setDetailsViewConfiguration({
            type: EntityDetailsListDataConfigurationType.USER_PROJECTS,
            getProjectParams: {
              filter: 'CREATED',
            },
          })
          break
        case FinderScope.CURRENT_PROJECT:
          setDetailsViewConfiguration({
            type: EntityDetailsListDataConfigurationType.HEADER_LIST,
            headerList: topLevelEntities,
          })
          break
        case FinderScope.FAVORITES:
          setDetailsViewConfiguration({
            type: EntityDetailsListDataConfigurationType.USER_FAVORITES,
          })
          break
      }
      setBreadcrumbItems([
        {
          name: scope,
          isCurrent: true,
          action: () => {
            setCurrentContainer('root')
          },
        },
      ])
    } else {
      setDetailsViewConfiguration({
        type: EntityDetailsListDataConfigurationType.PARENT_CONTAINER,
        parentContainerId: currentContainer,
      })
      if (isSuccessBundle) {
        setBreadcrumbItems([
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
        ])
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
    nodeText: scope,
    children: topLevelEntities,
  }
  // TODO: Determine if this is correct behavior
  // const shouldAutoExpand = useCallback(
  //   (entityId: string) => {
  //     return !!(
  //       scope === FinderScope.CURRENT_PROJECT &&
  //       initialContainerPath &&
  //       isEntityIdInPath(entityId, initialContainerPath)
  //     )
  //   },
  //   [scope, initialContainerPath],
  // )

  return (
    <div
      className={`TreeView ${
        nodeAppearance === NodeAppearance.SELECT ? 'SelectTree' : 'BrowseTree'
      }`}
    >
      <div className="Header">
        <div className="Browse">Browse</div>
        <div onClick={e => e.stopPropagation()}>
          <Dropdown>
            <Dropdown.Toggle variant="gray-primary-500" id="dropdown-basic">
              {scope}
            </Dropdown.Toggle>
            <Dropdown.Menu role="menu">
              {Object.values(FinderScope).map(scopeOption => {
                if (
                  // initialContainerId is required to determine the current project. if it's not provided, don't allow the selection.
                  scopeOption === FinderScope.CURRENT_PROJECT &&
                  initialContainerId == null
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
      {isLoading && topLevelEntities.length === 0 ? (
        <div className="Placeholder">
          <SynapseSpinner size={30} />
        </div>
      ) : (
        <div className="Tree" role="tree">
          {showFakeRoot ? (
            <TreeNode
              level={0}
              sessionToken={sessionToken}
              selectedId={currentContainer}
              setSelectedId={setSelectedId}
              visibleTypes={visibleTypes}
              autoExpand={noOp}
              rootNodeConfiguration={rootNodeConfiguration}
              appearance={nodeAppearance}
            />
          ) : (
            topLevelEntities.map(entity => (
              <TreeNode
                key={entity.id}
                level={0}
                sessionToken={sessionToken}
                selectedId={currentContainer}
                setSelectedId={setSelectedId}
                visibleTypes={visibleTypes}
                autoExpand={noOp}
                entityHeader={entity}
                appearance={nodeAppearance}
              />
            ))
          )}
          <div ref={ref} style={{ height: '5px', width: '100%' }}></div>
        </div>
      )}
    </div>
  )
}

function noOp() {
  return false
}
