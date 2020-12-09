import React, { ReactElement, useEffect, useState } from 'react'
import ReactTooltip from 'react-tooltip'
import { DataSchemaData, SchemaContext } from './types/IDataSchemaTypes'
import EntityDetailViewer from './EntityDetailViewer'
import { stateContext, stateData } from './state/DataState'
import getTestIDs from './utils/getTestIds'

export const TEST_IDS = getTestIDs()

interface IdLinkProps {
  id: string
  isParent?: boolean
}

const toolTipIdPrefix: string = `tooltip-`

function IdLink(props: IdLinkProps): ReactElement {
  const { id } = props
  return (
    <>
      <ReactTooltip
        id={`${toolTipIdPrefix}${id}`}
        place={`top`}
        effect={`solid`}
      >
        {id}
      </ReactTooltip>
      <ToolTipTarget {...props} />
    </>
  )
}

function ToolTipTarget({ id, isParent }: IdLinkProps) {
  const data: DataSchemaData[] = stateData()
  const context: SchemaContext = stateContext()
  const [itemData, setItemData] = useState<DataSchemaData>()
  const [entityDetailViewerOpen, setEntityDetailViewerOpen] = useState<boolean>(
    false,
  )

  useEffect(() => {
    setItemData(data.find(item => item.id === id))
  }, [data, setItemData])

  return itemData && !isParent ? (
    <>
      <a
        href={`#`}
        title={`View details of ${id}`}
        data-tip
        data-for={`${toolTipIdPrefix}${id}`}
        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          event.preventDefault()
          setEntityDetailViewerOpen(true)
        }}
        data-testid={TEST_IDS.link}
      >
        {itemData.attribute || itemData.label}
      </a>
      <EntityDetailViewer
        open={entityDetailViewerOpen}
        onClose={() => setEntityDetailViewerOpen(false)}
        entity={itemData}
      />
    </>
  ) : (
    <span
      data-tip
      data-for={`${toolTipIdPrefix}${id}`}
      data-testid={TEST_IDS.noLink}
    >
      {itemData ? itemData.attribute || itemData.label : buildLink(id, context)}
    </span>
  )
}

function buildLink(id: string, context: SchemaContext) {
  const pieces: string[] = id.split(`:`)
  const contexts = Object.keys(context)
  if (pieces.length > 1 && contexts.indexOf(pieces[0]) + 1) {
    return (
      <a
        href={`${context[pieces[0]]}${pieces[1]}`}
        target={`_blank`}
        title={`View details of ${id}`}
        data-testid={TEST_IDS.externalLink}
      >
        {id}
      </a>
    )
  }
  return id
}

export default IdLink
