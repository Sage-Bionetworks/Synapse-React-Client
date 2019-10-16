import * as React from 'react'
import { Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { TOOLTIP_DELAY_SHOW } from '../SynapseTable'
import ReactTooltip from "react-tooltip"

library.add(faEllipsisV)

type EllipsisDropdownProps = {
  onDownloadFiles: Function
  onDownloadTableOnly: Function
  onShowColumns: Function
  onFullScreen: Function
}
const tooltipEllipsis = 'tooltip-ellipsis'

export const EllipsisDropdown: React.FunctionComponent<EllipsisDropdownProps> = (props) => {
  const {
    onDownloadFiles,
    onDownloadTableOnly,
    onShowColumns,
    onFullScreen
  } = props
  return (
    <>
      <Dropdown drop="down">
        <Dropdown.Toggle data-for={tooltipEllipsis} data-tip="Table Options" id={tooltipEllipsis} variant={'light'}>
          <FontAwesomeIcon color='white' icon={'ellipsis-v'}/>
        </Dropdown.Toggle>
        <Dropdown.Menu alignRight={true}>
          <Dropdown.Item onClick={() => onDownloadFiles()}> Download Files </Dropdown.Item>
          <Dropdown.Item onClick={() => onDownloadTableOnly()} >Download Table Only</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Item onClick={() => onShowColumns()} > Show Columns </Dropdown.Item>
          <Dropdown.Item onClick={() => onFullScreen()} > Full Screen </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <ReactTooltip
        delayShow={TOOLTIP_DELAY_SHOW}
        place="top"
        type="dark"
        effect="solid"
        id={tooltipEllipsis} 
      />
    </>
  )
}