import React, { ReactElement, useState } from 'react'
import ReactTooltip from 'react-tooltip'
import { DataSchemaData, SchemaContext } from './types/IDataSchemaTypes'
import EntityDetailViewer from './EntityDetailViewer'
import { stateContext, stateData } from './state/DataState'

interface IdLinkProps {
  id: string
  isParent?: boolean
}

const toolTipIdPrefix: string = `tooltip-`

function IdLink(props: IdLinkProps): ReactElement {
  const { id } = props
  console.log()
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
  const itemData: DataSchemaData | undefined = data.find(item => item.id === id)
  const [entityDetailViewerOpen, setEntityDetailViewerOpen] = useState<boolean>(
    false,
  )
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
    <span data-tip data-for={`${toolTipIdPrefix}${id}`}>
      {itemData ? itemData.attribute || itemData.label : buildLink(id, context)}
    </span>
  )
}

function buildLink(id: string, context: SchemaContext) {
  const pieces: string[] = id.split(`:`)
  const contexts = Object.keys(context)
  if (pieces.length > 1 && contexts.indexOf(pieces[0])) {
    return (
      <a
        href={`${context[pieces[0]]}${pieces[1]}`}
        target={`_blank`}
        title={`View details of ${id}`}
      >
        {id}
      </a>
    )
  }
  return id
}

export default IdLink
