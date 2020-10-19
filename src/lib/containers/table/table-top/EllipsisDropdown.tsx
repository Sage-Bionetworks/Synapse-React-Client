import * as React from 'react'
import { Dropdown } from 'react-bootstrap'
import { ElementWithTooltip } from '../../widgets/ElementWithTooltip'
import { DownloadLoginModal } from './DownloadLoginModal'

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
      <Dropdown as="span">
        <ElementWithTooltip
          idForToolTip={tooltipEllipsis}
          tooltipText={'Table Options'}
          size="lg"
          icon={"verticaldots"}
          className={"icon-vertical-dots"}
        />
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
          <Dropdown.Item key="ColumnSelection" onClick={() => onShowColumns()}>
            Add/Remove Columns
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
