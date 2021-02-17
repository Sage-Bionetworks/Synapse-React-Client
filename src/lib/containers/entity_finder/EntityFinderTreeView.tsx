import React, { useEffect, useState } from 'react'
import { SynapseClient } from '../..'
import FolderIcon from '../../assets/icons/entity/Folder.svg'
import FileIcon from '../../assets/icons/entity/File.svg'
import ProjectIcon from '../../assets/icons/entity/Project.svg'
import {
  EntityBundle,
  EntityHeader,
  EntityPath,
  ProjectHeader,
} from '../../utils/synapseTypes'
import { EntityType } from '../../utils/synapseTypes/EntityType'
import { Dropdown } from 'react-bootstrap'
import { EntityBadge } from '../EntityBadge'
import { useInView } from 'react-intersection-observer'
import {
  DetailsView,
  EntityFinderDetailsViewConfiguration,
  EntityFinderViewConfigurationType,
} from './EntityFinderDetailsView'
import { EntityIdAndVersion } from './EntityFinder'
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex'

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

export const getIconForEntityHeader = (
  header: EntityHeader | ProjectHeader,
) => {
  if ((header as EntityHeader).type) {
    return getIconForEntityType((header as EntityHeader).type)
  } else {
    return getIconForEntityType(EntityType.PROJECT)
  }
}

export const getIconForEntityType = (type: string | EntityType) => {
  let src = undefined
  switch (type) {
    case 'org.sagebionetworks.repo.model.Project':
    case EntityType.PROJECT:
      src = ProjectIcon
      break
    case 'org.sagebionetworks.repo.model.FileEntity':
    case EntityType.FILE:
      src = FileIcon
      break
    case 'org.sagebionetworks.repo.model.Folder':
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
  const [bundle, setBundle] = useState<EntityBundle>()

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
      SynapseClient.getEntityBundleV2(
        entityHeader.id,
        {
          includeAnnotations: true,
          includeBenefactorACL: true,
          includePermissions: true,
          includeRootWikiId: true,
          includeThreadCount: true,
        },
        undefined,
        sessionToken,
      ).then(response => {
        setBundle(response)
      })

      loadChildren()
    }
  }, [inView])

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
          {getIconForEntityHeader(entityHeader)}
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
  selected: EntityIdAndVersion[]
  showDetailsView: boolean
  showTypesInDetailsView?: EntityType[]
  showDropdown: boolean
  showFakeRootNode?: boolean // necessary to select root nodes in a details view
  selectMultiple?: boolean
  setSelected: (selected: EntityIdAndVersion[]) => void
}

export const TreeView: React.FunctionComponent<TreeViewProps> = ({
  sessionToken,
  initialContainer,
  selected,
  setSelected,
  showDetailsView,
  showTypesInDetailsView = [],
  selectMultiple,
  showFakeRootNode = showDetailsView,
}) => {
  const DEFAULT_CONFIGURATION: EntityFinderDetailsViewConfiguration = {
    type: EntityFinderViewConfigurationType.PARENT_CONTAINER,
    parentContainerParams: {
      parentContainerId: initialContainer,
      includeTypes: showTypesInDetailsView,
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

  const [
    detailsViewConfiguration,
    setDetailsViewConfiguration,
  ] = useState<EntityFinderDetailsViewConfiguration>(DEFAULT_CONFIGURATION)

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
          includeTypes: showTypesInDetailsView,
        },
      })
    }
  }, [scope, currentContainer])

  const treeView = (
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
                          onClick={() => {
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

  const detailsView = (
    <DetailsView
      sessionToken={sessionToken}
      configuration={detailsViewConfiguration}
      showVersionSelection={true}
      selected={selected}
      onSelect={selectedEntity => {
        if (!selectMultiple) {
          setSelected([selectedEntity])
        } else {
          setSelected([
            ...selected.filter(s => s.entityId !== selectedEntity.entityId),
            selectedEntity,
          ])
        }
      }}
      onDeselect={deselectedEntity => {
        if (selected.map(s => s.entityId).includes(deselectedEntity.entityId)) {
          setSelected(
            selected.filter(e => e.entityId !== deselectedEntity.entityId),
          )
        }
      }}
    ></DetailsView>
  )

  return (
    <>
      {showDetailsView ? (
        <div className="EntityViewReflexContainer">
          <ReflexContainer orientation="vertical">
            <ReflexElement minSize={200} size={350}>
              {treeView}
            </ReflexElement>
            <ReflexSplitter></ReflexSplitter>
            <ReflexElement>{detailsView}</ReflexElement>
          </ReflexContainer>
        </div>
      ) : (
        treeView
      )}
    </>
  )
}
