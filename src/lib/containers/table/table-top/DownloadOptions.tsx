import { DownloadLoginModal } from './DownloadLoginModal'
import * as React from 'react'
import { Dropdown } from 'react-bootstrap'
import { ElementWithTooltip } from '../../widgets/ElementWithTooltip'
import {
  QueryResultBundle,
  QueryBundleRequest,
} from '../../../utils/synapseTypes'
import ProgrammaticTableDownload from './ProgrammaticTableDownload'
import ModalDownload from '../../../containers/ModalDownload'
import { useSynapseContext } from '../../../utils/SynapseContext'
import { useQueryContext } from '../../QueryWrapper'
import {
  isDataset,
  isEntityView,
  isFileView,
} from '../../../utils/functions/EntityTypeUtils'

export const DOWNLOAD_OPTIONS_CONTAINER_CLASS = 'SRC-download-options-container'

type DownloadOptionsProps = {
  onDownloadFiles: () => void
  darkTheme?: boolean
  queryResultBundle?: QueryResultBundle
  queryBundleRequest: QueryBundleRequest
}

export const DOWNLOAD_FILES_MENU_TEXT = 'Add To Download Cart'
const tooltipDownloadId = 'download'

export const DownloadOptions: React.FunctionComponent<
  DownloadOptionsProps
> = props => {
  const { accessToken } = useSynapseContext()
  const { entity } = useQueryContext()
  const [showLoginModal, setShowLoginModal] = React.useState(false)
  const [showExportMetadata, setShowExportMetadata] = React.useState(false)
  const [showProgrammaticOptions, setShowProgrammaticOptions] =
    React.useState(false)
  const {
    onDownloadFiles,
    queryResultBundle,
    queryBundleRequest,
    darkTheme = true,
  } = props

  const isFileViewOrDataset =
    entity &&
    ((isEntityView(entity) && isFileView(entity)) || isDataset(entity))

  return (
    <React.Fragment>
      <Dropdown as="span">
        <ElementWithTooltip
          idForToolTip={tooltipDownloadId}
          tooltipText={'Download Options'}
          size="lg"
          darkTheme={darkTheme}
          icon={'download'}
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
          {isFileViewOrDataset && (
            <Dropdown.Item
              onClick={() =>
                accessToken ? onDownloadFiles() : setShowLoginModal(true)
              }
            >
              {DOWNLOAD_FILES_MENU_TEXT}
            </Dropdown.Item>
          )}
          <Dropdown.Item onClick={() => setShowProgrammaticOptions(true)}>
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
          />
        )
      }
      {showProgrammaticOptions && queryResultBundle && (
        <ProgrammaticTableDownload
          onHide={() => setShowProgrammaticOptions(false)}
          queryBundleRequest={queryBundleRequest}
          queryResultBundle={queryResultBundle}
        ></ProgrammaticTableDownload>
      )}
    </React.Fragment>
  )
}
