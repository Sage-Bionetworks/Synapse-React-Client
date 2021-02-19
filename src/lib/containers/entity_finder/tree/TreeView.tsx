import React, { useEffect, useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer'
import { SynapseClient } from '../../..'
import FileIcon from '../../../assets/icons/entity/File.svg'
import FolderIcon from '../../../assets/icons/entity/Folder.svg'
import ProjectIcon from '../../../assets/icons/entity/Project.svg'
import {
  getEntityTypeFromHeader,
  isContainerType,
} from '../../../utils/functions/EntityTypeUtils'
import useGetEntityBundle from '../../../utils/hooks/SynapseAPI/useEntityBundle'
import { useGetEntityChildrenInfinite } from '../../../utils/hooks/SynapseAPI/useGetEntityChildren'
import useTraceUpdate from '../../../utils/hooks/useTraceUpdate'
import {
  EntityHeader,
  EntityPath,
  ProjectHeader,
} from '../../../utils/synapseTypes'
import { EntityType } from '../../../utils/synapseTypes/EntityType'
import { EntityBadge } from '../../EntityBadge'
import {
  EntityFinderDetailsConfiguration,
  EntityFinderDetailsConfigurationType,
} from '../details/EntityFinderDetails'

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

type TreeViewRowProps = {
  sessionToken: string
  entityHeader: EntityHeader | ProjectHeader
  selectedId: string
  setSelectedId: (entityId: string) => void
  level?: number
  autoExpand?: (entityId: string) => boolean
}

export const getIconForEntityType = (type: EntityType) => {
  let src = undefined
  switch (type) {
    case EntityType.PROJECT:
      src = ProjectIcon
      break
    case EntityType.FILE:
      src = FileIcon
      break
    case EntityType.FOLDER:
      src = FolderIcon
      break
    default:
      src = undefined // todo
  }
  return (
    <img
      // alt={type} // TODO: the string types will look bad here
      style={{
        maxWidth: '15px',
        maxHeight: '15px',

        margin: '3px',
      }}
      src={src}
    ></img>
  )
}

const TreeViewRow: React.FunctionComponent<TreeViewRowProps> = ({
  sessionToken,
  entityHeader,
  selectedId,
  setSelectedId,
  level = 0,
  autoExpand = () => false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const { ref: nodeRef, inView: nodeInView } = useInView({
    triggerOnce: true,
  })

  const { ref: endRef, inView: endInView } = useInView({
    triggerOnce: false,
    rootMargin: '200px',
  })

  const {
    data: children,
    fetchNextPage,
    hasNextPage,
    isSuccess,
  } = useGetEntityChildrenInfinite(
    sessionToken,
    {
      parentId: entityHeader.id,
      includeTypes: [EntityType.PROJECT, EntityType.FOLDER],
    },
    {
      enabled:
        nodeInView && isContainerType(getEntityTypeFromHeader(entityHeader)),
      staleTime: Infinity,
    },
  )

  const { data: bundle } = useGetEntityBundle(
    sessionToken,
    entityHeader.id,
    {
      includeEntity: true,
      includeAnnotations: true,
      includeBenefactorACL: true,
      includePermissions: true,
      includeRootWikiId: true,
      includeThreadCount: true,
    },
    undefined,
    {
      enabled: nodeInView,
      staleTime: 10000,
    },
  )

  useEffect(() => {
    if (autoExpand(entityHeader.id)) {
      setIsExpanded(true)
    }
  }, [autoExpand, entityHeader.id])

  useEffect(() => {
    if (isSuccess && endInView && hasNextPage) {
      fetchNextPage()
    }
  }, [isSuccess, endInView, hasNextPage])

  return (
    <>
      <div
        ref={nodeRef}
        style={{ paddingLeft: `${level * 15 + 15}px` }}
        className={`EntityFinderTreeView__Row${
          selectedId === entityHeader.id
            ? ' EntityFinderTreeView__Row__Selected'
            : ''
        }`}
        key={entityHeader.id}
        onClick={() => setSelectedId(entityHeader.id)}
      >
        {children && children.pages && children.pages[0].page.length > 0 ? (
          <div
            className={'EntityFinderTreeView__Row__ExpandButton'}
            onClick={e => {
              e.stopPropagation()
              setIsExpanded(!isExpanded)
            }}
          >
            {isExpanded ? '▾' : '▸'}
          </div>
        ) : (
          <span style={{ padding: '10px' }}></span>
        )}
        <div className="EntityFinderTreeView__Row__EntityIcon">
          {getIconForEntityType(getEntityTypeFromHeader(entityHeader))}
        </div>
        <div className="EntityFinderTreeView__Row__EntityName">
          {entityHeader.name}
        </div>
        <div>
          {bundle && (
            <EntityBadge
              entityId={entityHeader.id}
              bundle={bundle}
              wrap={'wrap'}
            />
          )}
        </div>
      </div>
      <div style={!isExpanded ? { display: 'none' } : {}}>
        {children?.pages.map(page => {
          return (
            <div key={'' + page.nextPageToken}>
              {page.page.map(child => {
                return (
                  <TreeViewRow
                    key={child.id}
                    sessionToken={sessionToken}
                    entityHeader={child}
                    selectedId={selectedId}
                    setSelectedId={setSelectedId}
                    level={level + 1}
                    autoExpand={autoExpand}
                  ></TreeViewRow>
                )
              })}
            </div>
          )
        })}
      </div>
      <div ref={endRef}></div>
    </>
  )
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
  useTraceUpdate({
    sessionToken,
    initialContainer,
    setDetailsViewConfiguration,
    showFakeRootNode,
  })

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
