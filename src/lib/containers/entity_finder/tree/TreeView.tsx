import React, { useEffect, useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { SynapseClient } from '../../../utils'
import {
  EntityHeader,
  EntityPath,
  ProjectHeader,
} from '../../../utils/synapseTypes'
import {
  EntityFinderDetailsConfiguration,
  EntityFinderDetailsConfigurationType,
} from '../details/EntityFinderDetails'
import { TreeViewRow } from './TreeViewRow'

const isEntityIdInPath = (entityId: string, path: EntityPath): boolean => {
  for (const eh of path.path) {
    if (entityId === eh.id) {
      return true
    }
  }
  return false
}

enum FinderScope {
  CURRENT_PROJECT = 'Current Project',
  ALL_PROJECTS = 'All Projects',
  CREATED_BY_ME = 'Projects Created By Me',
  FAVORITES = 'My Favorites',
}

// if the first item is selected (matching the dropdown), then output a configuration. otherwise, output a synId
export type TreeViewProps = {
  sessionToken: string
  initialContainer: string // synId
  showDropdown: boolean
  showFakeRootNode?: boolean // necessary to select root nodes in a details view
  setDetailsViewConfiguration?: (
    configuration: EntityFinderDetailsConfiguration,
  ) => void
}

/**
 * The TreeView displays a user's entities hierarchically, allowing a user to quickly dive into an entity tree.
 *
 * The tree view can be used as a standalone entity picker, or can be used to drive a DetailsView using the `setDetailsViewConfiguration` property.
 * @param param0
 */
export const TreeView: React.FunctionComponent<TreeViewProps> = ({
  sessionToken,
  initialContainer,
  setDetailsViewConfiguration = () => {},
  showFakeRootNode = true,
}) => {
  const DEFAULT_CONFIGURATION: EntityFinderDetailsConfiguration = {
    type: EntityFinderDetailsConfigurationType.PARENT_CONTAINER,
    parentContainerParams: {
      parentContainerId: initialContainer,
    },
  }

  const [expandFakeRoot, setExpandFakeRoot] = useState(true)

  const [isLoading, setIsLoading] = useState(false)
  const [topLevelEntities, setTopLevelEntities] = useState<
    (EntityHeader | ProjectHeader)[]
  >([])
  const [scope, setScope] = useState(FinderScope.CURRENT_PROJECT)
  const [initialContainerPath, setInitialContainerPath] = useState<EntityPath>()

  const [currentContainer, setCurrentContainer] = useState<string>(
    initialContainer,
  ) // synId or 'root'

  useEffect(() => {
    setDetailsViewConfiguration(DEFAULT_CONFIGURATION)
  }, [])

  useEffect(() => {
    setIsLoading(true)
    switch (scope) {
      case FinderScope.ALL_PROJECTS:
        SynapseClient.getMyProjects(sessionToken).then(projects => {
          setTopLevelEntities(projects.results)
          // TODO: Pagination
          setIsLoading(false)
        })

        break
      case FinderScope.CREATED_BY_ME:
        SynapseClient.getMyProjects(sessionToken, { filter: 'CREATED' }).then(
          projects => {
            setTopLevelEntities(projects.results)
            // TODO: Pagination
            setIsLoading(false)
          },
        )

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
        SynapseClient.getEntityPath(sessionToken, initialContainer).then(
          path => {
            setInitialContainerPath(path)
            setTopLevelEntities([path.path[1]])
            setIsLoading(false)
          },
        )

        break
    }
  }, [sessionToken, scope, initialContainer])

  useEffect(() => {
    if (currentContainer === 'root') {
      switch (scope) {
        case FinderScope.ALL_PROJECTS:
          setDetailsViewConfiguration({
            type: EntityFinderDetailsConfigurationType.USER_PROJECTS,
          })
          break
        case FinderScope.CREATED_BY_ME:
          setDetailsViewConfiguration({
            type: EntityFinderDetailsConfigurationType.USER_PROJECTS,
            getProjectParams: {
              filter: 'CREATED',
            },
          })
          break
        case FinderScope.CURRENT_PROJECT:
          setDetailsViewConfiguration({
            type: EntityFinderDetailsConfigurationType.HEADER_LIST,
            headerList: topLevelEntities,
          })
          break
        case FinderScope.FAVORITES:
          setDetailsViewConfiguration({
            type: EntityFinderDetailsConfigurationType.USER_FAVORITES,
            headerList: topLevelEntities,
          })

          break
      }
    } else {
      setDetailsViewConfiguration({
        type: EntityFinderDetailsConfigurationType.PARENT_CONTAINER,
        parentContainerParams: {
          parentContainerId: currentContainer,
        },
      })
    }
  }, [scope, currentContainer, topLevelEntities, setDetailsViewConfiguration])

  return (
    <div className="EntityFinderTreeView" style={{ height: '500px' }}>
      {/* <div className={`EntityFinderTreeView__SelectionHeader`}></div> */}
      <div style={{ overflow: 'auto' }}>
        {isLoading ? (
          <div className="spinner" />
        ) : (
          <>
            {showFakeRootNode && (
              <div
                style={{ paddingLeft: `5px` }}
                className={`EntityFinderTreeView__Row${
                  currentContainer === 'root'
                    ? ' EntityFinderTreeView__Row__Selected'
                    : ''
                }`}
                onClick={() => {
                  setCurrentContainer('root')
                }}
              >
                <div
                  className={'EntityFinderTreeView__Row__ExpandButton'}
                  onClick={e => {
                    e.stopPropagation()
                    setExpandFakeRoot(!expandFakeRoot)
                  }}
                >
                  {expandFakeRoot ? '▾' : '▸'}
                </div>
                <span></span>{' '}
                <div
                  style={{ width: 'min-content' }}
                  onClick={e => e.stopPropagation()}
                >
                  <Dropdown
                    style={{
                      position: 'static',
                    }}
                  >
                    <Dropdown.Toggle
                      variant="light-primary-500"
                      id="dropdown-basic"
                    >
                      {scope}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {Object.values(FinderScope).map(s => {
                        return (
                          <Dropdown.Item
                            key={s}
                            onClick={e => {
                              console.log('setting scope', s)
                              e.stopPropagation()
                              setScope(s)
                            }}
                          >
                            {s}
                          </Dropdown.Item>
                        )
                      })}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
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
                    autoExpand={entityId => {
                      return !!(
                        scope === FinderScope.CURRENT_PROJECT &&
                        initialContainerPath &&
                        isEntityIdInPath(entityId, initialContainerPath)
                      )
                    }}
                  ></TreeViewRow>
                )
              })}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
