import React, {
  useEffect,
  useState,
  ReactElement,
  useCallback,
  useRef,
} from 'react'
//@ts-ignore
import Graph from 'react-graph-network'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompress, faExpand } from '@fortawesome/free-solid-svg-icons'
import { stateData } from './state/DataState'
import { searchEntity } from './state/SearchEntityState'
import { stateViewType } from './state/ViewTypeState'
import { PRIMARY_ENTITY, SECONDARY_ENTITY, VIEW_TYPES } from './constants'
import {
  DataDictionaryData,
  DepState,
  DepStateData,
  GraphNetworkData,
  GraphNodeData,
  GraphNodeLinkData,
} from './types/IDataDictionaryTypes'
import UploadButton from './UploadButton'
import ViewTypeChooser from './ViewTypeChooser'
import GraphNetworkNode from './GraphNetworkNode'
import EntityDetailViewer from './EntityDetailViewer'
import EntitySearch from './EntitySearch'
import GraphNetworkLine from './GraphNetworkLine'
import {
  COLOR_PALETTE_EVEN,
  COLOR_PALETTE_ODD,
} from 'lib/utils/functions/colorPalette'
import IconButton from '@material-ui/core/IconButton'

export interface DataDictionaryViewerProps {
  title: string
}

function DataDictionaryViewer({
  title,
}: DataDictionaryViewerProps): ReactElement {
  const data = stateData()
  const startId = searchEntity()
  const viewType = stateViewType()
  const [graphNetworkData, setGraphNetworkData] = useState<GraphNetworkData>()
  const [clickedNode, setClickedNode] = useState<DataDictionaryData>()
  const [deps, setDeps] = useState<DepState>({} as DepState)
  const nodeColorRefs = useRef<{ [key: string]: string }>({})
  const [isFullScreen, toggleFullScreen] = useState<boolean>(false)

  const onNodeClick = useCallback(
    (id: string) => (event: React.MouseEvent<SVGCircleElement, MouseEvent>) => {
      const itemData: DataDictionaryData | undefined = data.find(
        item => item.id === id,
      )
      setClickedNode(itemData)
    },
    [data],
  )

  useEffect(() => {
    if (data.length > 0) {
      const newDeps = getDepsData(deps, {
        data,
        startId,
        viewType,
        reset: true,
      })
      if (JSON.stringify(newDeps) !== JSON.stringify(deps)) {
        setDeps(newDeps)
      }
    }
  }, [startId, data, deps, viewType, setDeps])

  useEffect(() => {
    const nodes: Array<GraphNodeData> = []
    const links: Array<GraphNodeLinkData> = []

    if (deps[viewType]) {
      // need to convert object into array so we can sort them with the most children first.
      const res = Object.keys(deps[viewType])
        .map(k => {
          return { key: k, value: deps[viewType][k] }
        })
        .sort((a, b) => {
          return b.value.length - a.value.length
        })

      // assign color pair for parent and children using the ODD/EVEN scheme in the palette
      let colorIdx = 0
      res.forEach((item, idx) => {
        if (!(item.key in nodeColorRefs.current)) {
          nodeColorRefs.current[item.key] = COLOR_PALETTE_EVEN[colorIdx]
          item.value.forEach(v => {
            if (!(v in nodeColorRefs.current)) {
              nodeColorRefs.current[v] = COLOR_PALETTE_ODD[colorIdx]
            }
          })
        }

        if (
          colorIdx > COLOR_PALETTE_EVEN.length ||
          colorIdx > COLOR_PALETTE_ODD.length
        ) {
          colorIdx = 0
        } else {
          colorIdx++
        }
      })
    }

    for (const id in deps[viewType]) {
      const node = nodes.find(entity => entity.id === id)
      const currentEntity:
        | GraphNodeData
        | DataDictionaryData
        | undefined = !node ? data.find(entity => entity.id === id) : node
      if (currentEntity) {
        nodes.push({
          ...currentEntity,
          onNodeClick,
          viewType,
          nodeColor: nodeColorRefs.current[id],
        })
        deps[viewType][id].forEach((childId: string) => {
          links.push({
            source: id,
            target: childId,
            viewType,
          })
        })
      }
    }
    setGraphNetworkData({ nodes, links })
  }, [data, deps, viewType, onNodeClick, nodeColorRefs])

  if (!graphNetworkData) {
    return <></>
  }

  return (
    <div className={`DataDictionaryViewerWrapper`}>
      <h2 className={`h2`}>{title}</h2>
      <div className={`tools-dd`}>
        <UploadButton />
        <ViewTypeChooser />
        <EntitySearch />
      </div>
      <div
        className={`graphCanvasContainer ${isFullScreen ? 'fullscreen' : ''}`}
      >
        <IconButton
          aria-label={`fullscreen`}
          className={`fullscreenToggleButton ${
            isFullScreen ? 'fullscreen' : ''
          }`}
          onClick={() => toggleFullScreen(!isFullScreen)}
        >
          {isFullScreen ? (
            <FontAwesomeIcon icon={faCompress} />
          ) : (
            <FontAwesomeIcon icon={faExpand} />
          )}
        </IconButton>
        <Graph
          className={`graph-dd`}
          data={graphNetworkData}
          NodeComponent={GraphNetworkNode}
          LineComponent={GraphNetworkLine}
          id={`dd-graph`}
          hoverOpacity={0.3}
          enableDrag={true}
          zoomDepth={3}
          enableZoomOut={true}
          nodeDistance={50}
          pullIn={false}
        />
      </div>
      <EntityDetailViewer
        open={!!clickedNode}
        onClose={() => setClickedNode(undefined)}
        entity={clickedNode}
      />
    </div>
  )
}

// Helper functions

function buildDepsData(
  id: string,
  viewType: VIEW_TYPES,
  data: DataDictionaryData[],
): DepStateData {
  return { [id]: getChildIds(id, data, viewType) }
}

function buildDepStateData(
  filteredIds: string[],
  viewType: VIEW_TYPES,
  data: DataDictionaryData[],
  currentDepsData: DepStateData,
): DepStateData {
  return filteredIds.reduce((acc: DepStateData, id: string): DepStateData => {
    const deps: DepStateData = buildDepsData(id, viewType, data)
    const depsWithChildren = buildDepStateData(deps[id], viewType, data, deps)
    return { ...acc, ...depsWithChildren }
  }, currentDepsData)
}

function getDepsData(
  state: DepState,
  {
    data,
    startId,
    viewType: type,
    reset,
  }: {
    data: DataDictionaryData[]
    startId?: string
    viewType?: VIEW_TYPES
    reset?: boolean
  },
): DepState {
  let { ids, viewType } = getStart(data, type)
  if (startId) {
    ids = [startId]
    viewType = type || VIEW_TYPES.REQUIRES_COMPONENT
  }
  if (state[viewType] && !reset) {
    return state
  } else {
    const depsData: DepStateData = {}
    const stuff = buildDepStateData(ids, viewType, data, depsData)
    return {
      ...state,
      [viewType]: stuff,
    }
  }
}

function getChildIds(
  parentId: string,
  data: DataDictionaryData[],
  viewType: VIEW_TYPES,
) {
  let childIds: string[] = []
  if (parentId) {
    switch (viewType) {
      case VIEW_TYPES.SUBCLASS_OF:
      case VIEW_TYPES.REQUIRES_DEPENDENCY:
      case VIEW_TYPES.DOMAIN_INCLUDES:
        childIds = data
          .filter(
            entity =>
              entity[viewType].length > 0 &&
              entity[viewType].includes(parentId),
          )
          .map(child => child.id)
        break
      case VIEW_TYPES.REQUIRES_COMPONENT:
      case VIEW_TYPES.RANGE_INCLUDES:
        const entity = data.find(entity => entity.id === parentId)
        childIds = entity ? entity[viewType] : []
        break
      default:
        break
    }
  }
  return childIds
}

function getStart(data: DataDictionaryData[], viewType?: VIEW_TYPES) {
  let startEntity = data.find(entity => entity.id === PRIMARY_ENTITY)
  let ids = startEntity
    ? getChildIds(startEntity.id, data, VIEW_TYPES.RANGE_INCLUDES)
    : []
  viewType =
    viewType ||
    (startEntity ? VIEW_TYPES.REQUIRES_COMPONENT : VIEW_TYPES.SUBCLASS_OF)
  if (!startEntity || ids.length < 1 || viewType === VIEW_TYPES.SUBCLASS_OF) {
    startEntity = data.find(entity => entity.id === SECONDARY_ENTITY)
    ids = startEntity
      ? getChildIds(startEntity.id, data, VIEW_TYPES.SUBCLASS_OF)
      : []
  }
  return { ids, viewType }
}

export default DataDictionaryViewer
