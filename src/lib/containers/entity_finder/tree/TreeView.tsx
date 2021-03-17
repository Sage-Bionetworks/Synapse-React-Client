import React, { useEffect, useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { useErrorHandler } from 'react-error-boundary'
import { useInView } from 'react-intersection-observer'
import { SynapseClient } from '../../../utils'
import { useGetProjectsInfinite } from '../../../utils/hooks/SynapseAPI/useProjects'
import {
  EntityHeader,
  EntityPath,
  EntityType,
  ProjectHeader,
} from '../../../utils/synapseTypes'
import { SynapseSpinner } from '../../LoadingScreen'
import {
  EntityDetailsListDataConfiguration,
  EntityDetailsListDataConfigurationType,
} from '../details/EntityDetailsList'
import { TreeViewRow } from './TreeViewRow'

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

// if the first item is selected (matching the dropdown), then output a configuration. otherwise, output a synId
export type TreeViewProps = {
  sessionToken: string
  initialScope?: FinderScope
  initialContainerId?: string // Necessary to show the current project (including if initialScope === CURRENT_PROJECT). initialContainerId must the synId of the current project or a container within that project.
  showDropdown: boolean
  visibleTypes?: EntityType[] // Default ['project', 'folder']
  showFakeRootNode?: boolean // necessary to select root nodes in a details view
  setDetailsViewConfiguration?: (
    configuration: EntityDetailsListDataConfiguration,
  ) => void
}

// TODO: Support picking one or more entities rather than creating a configuration.
/**
 * The TreeView displays a user's entities hierarchically, allowing a user to quickly dive into an entity tree.
 *
 * The tree view currently can only be used to drive a DetailsView using the `setDetailsViewConfiguration` property.
 * @param param0
 */
export const TreeView: React.FunctionComponent<TreeViewProps> = ({
  sessionToken,
  initialScope = FinderScope.CURRENT_PROJECT,
  initialContainerId,
  visibleTypes = [EntityType.PROJECT, EntityType.FOLDER],
  setDetailsViewConfiguration = () => {},
  showFakeRootNode = true,
}) => {
  const DEFAULT_CONFIGURATION: EntityDetailsListDataConfiguration = {
    type: EntityDetailsListDataConfigurationType.PROMPT,
  }

  const [expandFakeRoot, setExpandFakeRoot] = useState(true)

  const [isLoading, setIsLoading] = useState(false)
  const [topLevelEntities, setTopLevelEntities] = useState<
    (EntityHeader | ProjectHeader)[]
  >([])
  const [scope, setScope] = useState(initialScope)
  const [initialContainerPath, setInitialContainerPath] = useState<EntityPath>()

  const [currentContainer, setCurrentContainer] = useState<
    string | 'root' | null
  >(initialScope === FinderScope.CURRENT_PROJECT ? initialContainerId! : 'root')

  const handleError = useErrorHandler()

  useEffect(() => {
    setDetailsViewConfiguration(DEFAULT_CONFIGURATION)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const useProjectData =
    scope === FinderScope.ALL_PROJECTS || scope === FinderScope.CREATED_BY_ME

  const {
    data: projectData,
    isSuccess: isSuccessProjects,
    fetchNextPage: fetchNextPageProjects,
    hasNextPage: hasNextPageProjects,
  } = useGetProjectsInfinite(
    sessionToken,
    scope === FinderScope.CREATED_BY_ME ? { filter: 'CREATED' } : {},
    {
      enabled: useProjectData,
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
  }, [useProjectData, isSuccessProjects, projectData?.pages])

  useEffect(() => {
    if (useProjectData && inView && hasNextPageProjects) {
      fetchNextPageProjects()
    }
  }, [inView, hasNextPageProjects, fetchNextPageProjects, scope])

  // Populates the first level of entities in the tree view
  useEffect(() => {
    setIsLoading(true)
    switch (scope) {
      case FinderScope.ALL_PROJECTS:
      case FinderScope.CREATED_BY_ME:
        // See the useGetProjectsInfinite hook
        break
      case FinderScope.FAVORITES: {
        SynapseClient.getUserFavorites(sessionToken).then(({ results }) => {
          setTopLevelEntities(results)
          setIsLoading(false)
        })
        break
      }
      case FinderScope.CURRENT_PROJECT:
      default:
        if (initialContainerId == null) {
          handleError(
            new Error(
              'Cannot open current project because the current project is unknown',
            ),
          )
        } else {
          SynapseClient.getEntityPath(sessionToken, initialContainerId).then(
            path => {
              setInitialContainerPath(path)
              setTopLevelEntities([path.path[1]])
              setIsLoading(false)
            },
          )
        }
        break
    }
  }, [sessionToken, scope, initialContainerId, handleError])

  // Creates the configuration for the details view and calls the callback
  useEffect(() => {
    if (currentContainer === null) {
      setDetailsViewConfiguration({
        type: EntityDetailsListDataConfigurationType.PROMPT,
      })
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
            headerList: topLevelEntities,
          })

          break
      }
    } else {
      setDetailsViewConfiguration({
        type: EntityDetailsListDataConfigurationType.PARENT_CONTAINER,
        parentContainerId: currentContainer,
      })
    }
  }, [scope, currentContainer, topLevelEntities, setDetailsViewConfiguration])

  return (
    <div className="EntityFinderTreeView" style={{ height: '500px' }}>
      <div className={`EntityFinderTreeView__SelectionHeader`}>
        <div
          style={{ width: 'min-content' }}
          onClick={e => e.stopPropagation()}
        >
          <Dropdown
            style={{
              position: 'static',
            }}
          >
            <Dropdown.Toggle variant="light-primary-500" id="dropdown-basic">
              {scope}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {Object.values(FinderScope).map(scopeOption => {
                if (
                  // initialContainerId is required to determine the current project. if it's not provided, don't allow the selection.
                  scopeOption === FinderScope.CURRENT_PROJECT &&
                  initialContainerId == null
                ) {
                  return <></>
                }
                return (
                  <Dropdown.Item
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
        <div className="EntityFinderTreeView__Placeholder">
          <SynapseSpinner size={30} />
        </div>
      ) : (
        <div role="tree" style={{ overflow: 'auto' }}>
          <div className="TreeNode" aria-selected={currentContainer === 'root'}>
            {showFakeRootNode && (
              <div
                style={{ paddingLeft: `5px` }}
                className="TreeNode__Content"
                onClick={() => {
                  setCurrentContainer('root')
                }}
              >
                <div
                  className={'TreeNode__Content__ExpandButton'}
                  onClick={e => {
                    e.stopPropagation()
                    setExpandFakeRoot(!expandFakeRoot)
                  }}
                >
                  {expandFakeRoot ? '▾' : '▸'}
                </div>
                <span></span>
                {scope}
              </div>
            )}
            <div style={!expandFakeRoot ? { display: 'none' } : {}}>
              {topLevelEntities?.map((entity: EntityHeader | ProjectHeader) => {
                return (
                  <TreeViewRow
                    key={entity.id}
                    sessionToken={sessionToken}
                    entityHeader={entity}
                    selectedId={currentContainer}
                    setSelectedId={(entityId: string) => {
                      setCurrentContainer(entityId)
                    }}
                    visibleTypes={visibleTypes}
                    autoExpand={entityId => {
                      return !!(
                        scope === FinderScope.CURRENT_PROJECT &&
                        initialContainerPath &&
                        isEntityIdInPath(entityId, initialContainerPath)
                      )
                    }}
                  />
                )
              })}
            </div>
            <div ref={ref}></div>
          </div>
        </div>
      )}
    </div>
  )
}
