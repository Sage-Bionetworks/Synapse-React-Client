import { DownloadLoginModal } from './DownloadLoginModal'
import * as React from 'react'
import { Dropdown } from 'react-bootstrap'
import { ElementWithTooltip } from '../../widgets/ElementWithTooltip'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import {
  QueryResultBundle,
  QueryBundleRequest,
} from '../../../utils/synapseTypes'
import ProgrammaticOptions from './ProgrammaticOptions'
import ModalDownload from '../../../containers/ModalDownload'

export const DOWNLOAD_OPTIONS_CONTAINER_CLASS = 'SRC-download-options-container'

type DownloadOptionsProps = {
  onDownloadFiles: Function
  isUnauthenticated?: boolean
  isFileView?: boolean
  darkTheme?: boolean
  token: string | undefined
  queryResultBundle?: QueryResultBundle
  queryBundleRequest: QueryBundleRequest
}

export const DOWNLOAD_FILES_MENU_TEXT = 'Add To Download List'
const tooltipDownloadId = 'download'

export const DownloadOptions: React.FunctionComponent<DownloadOptionsProps> = props => {
  const [showLoginModal, setShowLoginModal] = React.useState(false)
  const [showExportMetadata, setShowExportMetadata] = React.useState(false)
  const [showProgrammaticOptions, setShowProgrammaticOptions] = React.useState(
    false,
  )
  const {
    onDownloadFiles,
    queryResultBundle,
    queryBundleRequest,
    token,
    darkTheme = true,
  } = props

  return (
    <React.Fragment>
      <Dropdown as="span">
        <ElementWithTooltip
          idForToolTip={tooltipDownloadId}
          tooltipText={'Download Options'}
          image={faDownload}
          size="lg"
          darkTheme={darkTheme}
        ></ElementWithTooltip>
        <Dropdown.Menu
          className="SRC-primary-color-hover-dropdown"
          alignRight={true}
        >
          <Dropdown.Item
            onClick={() => {
              setShowExportMetadata(true)
            }}
          >
            Export Table
          </Dropdown.Item>
          {props.isFileView && (
            <Dropdown.Item
              onClick={() =>
                props.token ? onDownloadFiles() : setShowLoginModal(true)
              }
            >
              {DOWNLOAD_FILES_MENU_TEXT}
            </Dropdown.Item>
          )}
          <Dropdown.Item
            // @ts-ignore
            onClick={() => setShowProgrammaticOptions(true)}
          >
            Programmatic Options
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {showLoginModal && (
        <DownloadLoginModal
          showModal={showLoginModal}
          onHide={() => setShowLoginModal(false)}
        ></DownloadLoginModal>
      )}
      {
        // modal can render anywhere, this is not a particular location
        showExportMetadata && (
          <ModalDownload
            onClose={() => setShowExportMetadata(false)}
            queryBundleRequest={queryBundleRequest}
            token={token}
          />
        )
      }
      {showProgrammaticOptions && queryResultBundle && (
        <ProgrammaticOptions
          onHide={() => setShowProgrammaticOptions(false)}
          queryBundleRequest={queryBundleRequest}
          queryResultBundle={queryResultBundle}
        ></ProgrammaticOptions>
      )}
    </React.Fragment>
  )
}
