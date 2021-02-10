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
// import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import { Dropdown } from 'react-bootstrap'
import { EntityBadge } from '../EntityBadge'

enum FinderScope {
  CURRENT_PROJECT = 'Current Project',
  ALL_PROJECTS = 'All of my Projects',
}

type TreeViewRowProps = {
  sessionToken: string
  entityHeader: EntityHeader | ProjectHeader
  selectedId: string
  setSelectedId: (entityId: string) => void
  level?: number
  autoExpand?: (entityId: string) => boolean
}

const getIconForEntityHeader = (header: EntityHeader | ProjectHeader) => {
  if (header.type === undefined) {
    return getIconForEntityType(EntityType.PROJECT)
  } else {
    return getIconForEntityType(header.type)
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
    // TODO: pagination
  }

  useEffect(() => {
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
  }, [childEntities, entityHeader.id])

  useEffect(() => {
    if (autoExpand(entityHeader.id)) {
      setIsExpanded(true)
    }
  }, [childEntities, autoExpand])

  useEffect(() => {
    if (!allChildrenLoaded) {
      loadChildren()
      setAllChildrenLoaded(true)
    }
  }, [allChildrenLoaded, isExpanded])

  return (
    <>
      <div
        style={{ paddingLeft: `${level * 15 + 5}px` }}
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
        <div>{entityHeader.name}</div>
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

export type TreeViewProps = {
  sessionToken: string
  // topLevelEntities: EntityHeader[]
  selected: string // synId(s)
  selectMultiple?: boolean
  setSelected: Function
}

export const TreeView: React.FunctionComponent<TreeViewProps> = ({
  sessionToken,
  // topLevelEntities,
  selected,
  setSelected,
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [topLevelEntities, setTopLevelEntities] = useState<
    EntityHeader[] | ProjectHeader[]
  >()
  const [scope, setScope] = useState(FinderScope.CURRENT_PROJECT)
  const [currentSelectedPath, setCurrentSelectedPath] = useState<EntityPath>()

  const isInPath = (id: string) => {
    if (!currentSelectedPath) {
      return false
    }
    for (const eh of currentSelectedPath.path) {
      if (id === eh.id) {
        return true
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
      case FinderScope.CURRENT_PROJECT:
      default:
        SynapseClient.getEntityPath(sessionToken, selected).then(path => {
          setTopLevelEntities([path.path[1]])
          setIsLoading(false)
        })
        break
    }
  }, [sessionToken, scope])

  useEffect(() => {
    SynapseClient.getEntityPath(sessionToken, selected).then(path => {
      setCurrentSelectedPath(path)
    })
  }, [sessionToken, selected])

  return (
    <div className="EntityFinderTreeView" style={{ height: '500px' }}>
      <div className={`EntityFinderTreeView__SelectionHeader`}>
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            {scope}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {Object.values(FinderScope).map(s => {
              // TODO: This dropdown currently does nothing.
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
      <div style={{ overflow: 'auto' }}>
        {isLoading ? (
          <div className="spinner" />
        ) : (
          topLevelEntities?.map(entity => {
            return (
              <TreeViewRow
                key={entity.id}
                sessionToken={sessionToken}
                entityHeader={entity}
                selectedId={selected}
                setSelectedId={(entityId: string) => {
                  setSelected(entityId)
                }}
                autoExpand={isInPath}
              ></TreeViewRow>
            )
          })
        )}
      </div>
    </div>
  )
}
