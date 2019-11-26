import * as React from 'react'
import { Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TOOLTIP_DELAY_SHOW } from '../SynapseTable'
import ReactTooltip from 'react-tooltip'

export const DOWNLOAD_OPTIONS_CONTAINER_CLASS = 'SRC-download-options-container'

type DownloadOptionsProps = {
  onDownloadFiles: Function
  onExportMetadata: Function
  isUnauthenticated?: boolean
}

export const DOWNLOAD_FILES_MENU_TEXT = 'Download Files'
const tooltipDownloadId = 'download'

export const DownloadOptions: React.FunctionComponent<DownloadOptionsProps> = props => {
  const { onDownloadFiles, onExportMetadata } = props
  return (
    <React.Fragment>
      <Dropdown style={{ padding: 5 }}>
        <Dropdown.Toggle
          data-for={tooltipDownloadId}
          data-tip="Download Options"
          variant={'light'}
          id="dropdown-download-options-button"
        >
          <FontAwesomeIcon size="1x" color="white" icon="download" />
        </Dropdown.Toggle>
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
          <Dropdown.Item
            className={props.isUnauthenticated ? 'SRC-deemphasized-text' : ''}
            disabled={props.isUnauthenticated}
            // @ts-ignore
            onClick={onDownloadFiles}
          >
            {DOWNLOAD_FILES_MENU_TEXT}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <ReactTooltip
        delayShow={TOOLTIP_DELAY_SHOW}
        place="top"
        type="dark"
        effect="solid"
        id={tooltipDownloadId}
      />
    </React.Fragment>
  )
}
