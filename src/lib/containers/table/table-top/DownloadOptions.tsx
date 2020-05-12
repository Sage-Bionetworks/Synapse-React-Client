import { DownloadLoginModal } from './DownloadLoginModal'
import * as React from 'react'
import { Dropdown } from 'react-bootstrap'
import { ElementWithTooltip } from '../../widgets/ElementWithTooltip'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

export const DOWNLOAD_OPTIONS_CONTAINER_CLASS = 'SRC-download-options-container'

type DownloadOptionsProps = {
  onDownloadFiles: Function
  onExportMetadata: Function
  isUnauthenticated?: boolean
  isFileView?: boolean
}

export const DOWNLOAD_FILES_MENU_TEXT = 'Download Files'
const tooltipDownloadId = 'download'

export const DownloadOptions: React.FunctionComponent<DownloadOptionsProps> = props => {
  const [showModal, setShowModal] = React.useState(false)
  const { onDownloadFiles, onExportMetadata } = props

  return (
    <React.Fragment>
      <Dropdown as="span">
        <ElementWithTooltip
          idForToolTip={tooltipDownloadId}
          tooltipText={'Download Options'}
          image={faDownload}
          size="lg"
        ></ElementWithTooltip>
        <Dropdown.Menu
          className="SRC-primary-color-hover-dropdown"
          alignRight={true}
        >
          <Dropdown.Item
            // @ts-ignore
            onClick={onExportMetadata}
          >
            Export Metadata
          </Dropdown.Item>
          {props.isFileView && (
            <Dropdown.Item
              onClick={() =>
                props.isUnauthenticated ? setShowModal(true) : onDownloadFiles()
              }
            >
              {DOWNLOAD_FILES_MENU_TEXT}
            </Dropdown.Item>
          )}
        </Dropdown.Menu>
      </Dropdown>
      {showModal && (
        <DownloadLoginModal
          showModal={showModal}
          onHide={() => setShowModal(false)}
        ></DownloadLoginModal>
      )}
    </React.Fragment>
  )
}
