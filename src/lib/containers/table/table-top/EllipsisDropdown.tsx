import * as React from 'react'
import { Dropdown } from 'react-bootstrap'
import { ElementWithTooltip } from '../../widgets/ElementWithTooltip'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { DownloadLoginModal } from './DownloadLoginModal'

library.add(faEllipsisV)

type EllipsisDropdownProps = {
  onDownloadFiles: Function
  onDownloadTableOnly: Function
  onShowColumns: Function
  onFullScreen: Function
  isExpanded: boolean
  isUnauthenticated?: boolean
  isGroupedQuery?: boolean
  isFileView?: boolean
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
  const [showModal, setShowModal] = React.useState(false)
  return (
    <>
      <Dropdown style={{ padding: 0 }}>
        <ElementWithTooltip
          idForToolTip={tooltipEllipsis}
          tooltipText={'Table Options'}
          image={faEllipsisV}
        ></ElementWithTooltip>
        <Dropdown.Menu
          className="SRC-primary-color-hover-dropdown"
          alignRight={true}
        >
          {!props.isGroupedQuery && [
            props.isFileView && (
              <Dropdown.Item
                key="download_files"
                onClick={() =>
                  props.isUnauthenticated
                    ? setShowModal(true)
                    : onDownloadFiles()
                }
              >
                Download Files
              </Dropdown.Item>
            ),
            <Dropdown.Item
              key="download_tables"
              onClick={() => onDownloadTableOnly()}
            >
              Download Table Only
            </Dropdown.Item>,
            <Dropdown.Divider key="divider1" />,
          ]}
          <Dropdown.Item key="show_columns" onClick={() => onShowColumns()}>
            Show Columns
          </Dropdown.Item>
          <Dropdown.Item key="expand" onClick={() => onFullScreen()}>
            {isExpanded ? 'Shrink' : 'Full Screen'}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {showModal && (
        <DownloadLoginModal
          showModal={showModal}
          onHide={() => setShowModal(false)}
        ></DownloadLoginModal>
      )}
    </>
  )
}
