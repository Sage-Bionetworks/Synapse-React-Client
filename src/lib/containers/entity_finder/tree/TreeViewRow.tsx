import React, { useEffect, useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer'
import { SynapseClient } from '../../../utils'
import {
  entityTypeToFriendlyName,
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
import { EntityTypeIcon } from '../../EntityIcon'
import {
  EntityDetailsListDataConfiguration,
  EntityDetailsListDataConfigurationType,
} from '../details/EntityDetailsList'
import ReactTooltip from 'react-tooltip'

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

export const TreeViewRow: React.FunctionComponent<TreeViewRowProps> = ({
  sessionToken,
  entityHeader,
  selectedId,
  setSelectedId,
  level = 0,
  autoExpand = () => false,
}) => {
  const TOOLTIP_ID = 'TreeViewRowTooltipId'

  const entityType = getEntityTypeFromHeader(entityHeader)

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
      // We'll make the stale time longer because these requests are expensive + we make a lot of them
      // They also aren't likely to change meaningfully while in the entity finder
      staleTime: 60 * 1000, // 60 seconds
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
      <ReactTooltip id={TOOLTIP_ID} delayShow={500} place={'top'} />
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
        <div
          className="EntityFinderTreeView__Row__EntityIcon"
          data-for={TOOLTIP_ID}
          data-tip={entityTypeToFriendlyName(entityType)}
        >
          {<EntityTypeIcon type={entityType} />}
        </div>
        <div
          className="EntityFinderTreeView__Row__EntityName"
          data-for={TOOLTIP_ID}
          data-tip={entityHeader.name}
        >
          {entityHeader.name}
        </div>
        <div>
          {bundle && <EntityBadge entityId={entityHeader.id} bundle={bundle} />}
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
    configuration: EntityDetailsListDataConfiguration,
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

  const DEFAULT_CONFIGURATION: EntityDetailsListDataConfiguration = {
    type: EntityDetailsListDataConfigurationType.PARENT_CONTAINER,
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
    if (currentContainer === 'root') {
      switch (scope) {
        case FinderScope.ALL_PROJECTS:
          setDetailsViewConfiguration({
            type: EntityDetailsListDataConfigurationType.USER_PROJECTS,
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
