import React, { ReactElement, useState } from 'react'
import ReactTooltip from 'react-tooltip'
import { DataDictionaryData } from './types/IDataDictionaryTypes'
import EntityDetailViewer from './EntityDetailViewer'
import { stateData } from './state/DataState'

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
  const data: DataDictionaryData[] = stateData()
  const itemData: DataDictionaryData | undefined = data.find(
    item => item.id === id,
  )
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
      {itemData ? itemData.attribute || itemData.label : id}
    </span>
  )
}

export default IdLink
