import React, { useEffect, useState, ReactElement, useCallback } from 'react'
//@ts-ignore
import Graph from 'react-graph-network'
import { stateData } from './state/DataState'
import { VIEW_TYPES } from './constants'
import {
  DataDictionaryData,
  GraphNetworkData,
  GraphNodeData,
  GraphNodeLinkData,
} from './types/IDataDictionaryTypes'
import { getDataDictionaryDetails } from './utils/getDataDictionaryDetails'
import UploadButton from './UploadButton'
import ViewTypeChooser from './ViewTypeChooser'
import GraphNetworkNode from './GraphNetworkNode'
import EntityDetailViewer from './EntityDetailViewer'
import GraphNetworkLine from './GraphNetworkLine'

export interface DataDictionaryViewerProps {
  title: string
}

function DataDictionaryViewer({
  title,
}: DataDictionaryViewerProps): ReactElement {
  const data = stateData()
  const [graphNetworkData, setGraphNetworkData] = useState<GraphNetworkData>()
  const [clickedNode, setClickedNode] = useState<DataDictionaryData>()

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
      const viewType: VIEW_TYPES = VIEW_TYPES.REQUIRES_COMPONENT
      const startId: string = `schema:Thing`
      const dictionaryData = getDataDictionaryDetails(startId, data)
      const tempNodeArr: Array<GraphNodeData> = []
      const tempNodeLinkArr: Array<GraphNodeLinkData> = []
      const tempRootNode = data.find(item => item.id === startId) || {}
      tempNodeArr.push({
        ...(tempRootNode as GraphNodeData),
        onNodeClick,
        viewType,
      })
      dictionaryData.forEach(dd => {
        tempNodeArr.push({ ...dd, onNodeClick, viewType })
        tempNodeLinkArr.push({
          source: startId,
          target: dd.id,
          viewType,
        })
      })

      setGraphNetworkData({ nodes: tempNodeArr, links: tempNodeLinkArr })
    }
  }, [data, onNodeClick])

  if (!graphNetworkData) {
    return <></>
  }

  return (
    <div className={`DataDictionaryViewerWrapper`}>
      <h2 className={`h2`}>{title}</h2>
      <UploadButton />
      <ViewTypeChooser />
      <br />
      <br />
      <div className={`graphCanvasContainer`}>
        <Graph
          data={graphNetworkData}
          NodeComponent={GraphNetworkNode}
          LineComponent={GraphNetworkLine}
          id={`dd-graph`}
          enableDrag={true}
          zoomDepth={3}
          nodeDistance={500}
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

export default DataDictionaryViewer
