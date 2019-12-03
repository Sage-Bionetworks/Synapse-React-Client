import * as React from 'react'
import { Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { TOOLTIP_DELAY_SHOW } from '../SynapseTableConstants'
import ReactTooltip from 'react-tooltip'

library.add(faEllipsisV)

type EllipsisDropdownProps = {
  onDownloadFiles: Function
  onDownloadTableOnly: Function
  onShowColumns: Function
  onFullScreen: Function
  isExpanded: boolean
  isUnauthenticated?: boolean
  isGroupedQuery?: boolean
}
const tooltipEllipsis = 'tooltip-ellipsis'

export const EllipsisDropdown: React.FunctionComponent<EllipsisDropdownProps> = props => {
  const {
    onDownloadFiles,
    onDownloadTableOnly,
    onShowColumns,
    onFullScreen,
    isExpanded,
  } = props
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          data-for={tooltipEllipsis}
          data-tip="Table Options"
          id={tooltipEllipsis}
          variant={'light'}
        >
          <FontAwesomeIcon color="white" icon={'ellipsis-v'} />
        </Dropdown.Toggle>
        <Dropdown.Menu
          className="SRC-primary-color-hover-dropdown"
          alignRight={true}
        >
          {!props.isGroupedQuery && [
            <Dropdown.Item key='download_files'
              onClick={() => onDownloadFiles()}
              className={props.isUnauthenticated ? 'SRC-deemphasized-text' : ''}
              disabled={props.isUnauthenticated}
            >
              Download Files
            </Dropdown.Item>,
            <Dropdown.Item key='download_tables' onClick={() => onDownloadTableOnly()}>
              Download Table Only
            </Dropdown.Item>,
            <Dropdown.Divider  key='divider1'/>,
          ]}
          <Dropdown.Item  key='show_columns' onClick={() => onShowColumns()}>
            Show Columns
          </Dropdown.Item>
          <Dropdown.Item key='expand' onClick={() => onFullScreen()}>
            {isExpanded ? 'Shrink' : 'Full Screen'}
          </Dropdown.Item>
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
