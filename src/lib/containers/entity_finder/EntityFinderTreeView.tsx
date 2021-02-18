import React, { useEffect, useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer'
import { SynapseClient } from '../..'
import FileIcon from '../../assets/icons/entity/File.svg'
import FolderIcon from '../../assets/icons/entity/Folder.svg'
import ProjectIcon from '../../assets/icons/entity/Project.svg'
import { getEntityTypeFromHeader } from '../../utils/functions/EntityTypeUtils'
import useGetEntityBundle from '../../utils/hooks/SynapseAPI/useEntityBundle'
import {
  EntityHeader,
  EntityPath,
  ProjectHeader,
} from '../../utils/synapseTypes'
import { EntityType } from '../../utils/synapseTypes/EntityType'
import { EntityBadge } from '../EntityBadge'
import {
  EntityFinderDetailsViewConfiguration,
  EntityFinderViewConfigurationType,
} from './EntityFinderDetailsView'

enum FinderScope {
  CURRENT_PROJECT = 'Current Project',
  ALL_PROJECTS = 'All of my Projects',
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
  const [allChildrenLoaded, setAllChildrenLoaded] = useState(false)
  const [childEntities, setChildEntities] = useState<EntityHeader[]>([])

  const loadChildren = async () => {
    const result = await SynapseClient.getEntityChildren(
      {
        parentId: entityHeader.id,
        includeTypes: [EntityType.PROJECT, EntityType.FOLDER],
      },
      sessionToken,
    )
    setChildEntities(result.page)
    setAllChildrenLoaded(true)
    // TODO: pagination
  }

  const { ref, inView } = useInView({
    triggerOnce: true,
  })
  useEffect(() => {
    if (inView) {
      loadChildren()
    }
  }, [inView])

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
      enabled: inView,
      staleTime: 10000,
    },
  )

  useEffect(() => {
    if (autoExpand(entityHeader.id)) {
      setIsExpanded(true)
    }
  }, [autoExpand, entityHeader.id])

  return (
    <>
      <div
        ref={ref}
        style={{ paddingLeft: `${level * 15 + 15}px` }}
        className={`EntityFinderTreeView__Row${
          selectedId === entityHeader.id
            ? ' EntityFinderTreeView__Row__Selected'
            : ''
        }`}
        key={entityHeader.id}
        onClick={() => setSelectedId(entityHeader.id)}
      >
        {allChildrenLoaded && childEntities && childEntities.length > 0 ? (
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
        {childEntities?.map(child => {
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
    </>
  )
}

// if the first item is selected (matching the dropdown), then output a configuration. otherwise, output a synId
export type TreeViewProps = {
  sessionToken: string
  initialContainer: string // synId
  showDetailsView: boolean
  showDropdown: boolean
  showFakeRootNode?: boolean // necessary to select root nodes in a details view
  setDetailsViewConfiguration?: (
    configuration: EntityFinderDetailsViewConfiguration,
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
  showDetailsView,
  showFakeRootNode = showDetailsView,
}) => {
  const DEFAULT_CONFIGURATION: EntityFinderDetailsViewConfiguration = {
    type: EntityFinderViewConfigurationType.PARENT_CONTAINER,
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

  const isInPath = (id: string) => {
    console.log('checking if', id, 'in path', initialContainerPath)
    if (scope === FinderScope.CURRENT_PROJECT && initialContainerPath) {
      console.log('checking autoexpand', initialContainerPath)
      for (const eh of initialContainerPath.path) {
        if (id === eh.id) {
          return true
        }
      }
    }
    return false
  }

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
  }, [sessionToken, scope])

  useEffect(() => {
    console.log(currentContainer)
    if (currentContainer === 'root') {
      switch (scope) {
        case FinderScope.ALL_PROJECTS:
          setDetailsViewConfiguration({
            type: EntityFinderViewConfigurationType.USER_PROJECTS,
          })
          break
        case FinderScope.CURRENT_PROJECT:
          setDetailsViewConfiguration({
            type: EntityFinderViewConfigurationType.HEADER_LIST,
            headerList: topLevelEntities,
          })
          break
        case FinderScope.FAVORITES:
          setDetailsViewConfiguration({
            type: EntityFinderViewConfigurationType.USER_FAVORITES,
            headerList: topLevelEntities,
          })

          break
      }
    } else {
      setDetailsViewConfiguration({
        type: EntityFinderViewConfigurationType.PARENT_CONTAINER,
        parentContainerParams: {
          parentContainerId: currentContainer,
        },
      })
    }
  }, [scope, currentContainer])

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
                <span></span>
                <Dropdown
                  style={{
                    marginLeft: '20px',
                    position: 'absolute',
                    left: '10px',
                    top: '16px',
                    zIndex: 1,
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
                    autoExpand={isInPath}
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
