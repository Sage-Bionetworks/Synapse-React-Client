import * as React from 'react'
import { Dropdown } from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'
import ModalDownload from '../../../containers/ModalDownload'
import {
  isDataset,
  isEntityView,
  isFileView,
} from '../../../utils/functions/EntityTypeUtils'
import { useSynapseContext } from '../../../utils/SynapseContext'
import { useQueryContext } from '../../QueryWrapper'
import { ElementWithTooltip } from '../../widgets/ElementWithTooltip'
import { DownloadLoginModal } from './DownloadLoginModal'
import ProgrammaticTableDownload from './ProgrammaticTableDownload'

export const DOWNLOAD_OPTIONS_CONTAINER_CLASS = 'SRC-download-options-container'

export type DownloadOptionsProps = {
  onDownloadFiles: () => void
  darkTheme?: boolean
}

export const DOWNLOAD_FILES_MENU_TEXT = 'Add To Download Cart'
const tooltipDownloadId = 'download'

export const DownloadOptions: React.FunctionComponent<
  DownloadOptionsProps
> = props => {
  const { accessToken } = useSynapseContext()
  const {
    entity,
    data: queryResultBundle,
    getLastQueryRequest,
  } = useQueryContext()
  const queryBundleRequest = getLastQueryRequest()
  const [showLoginModal, setShowLoginModal] = React.useState(false)
  const [showExportMetadata, setShowExportMetadata] = React.useState(false)
  const [showProgrammaticOptions, setShowProgrammaticOptions] =
    React.useState(false)
  const { onDownloadFiles, darkTheme = true } = props

  const isFileViewOrDataset =
    entity &&
    ((isEntityView(entity) && isFileView(entity)) || isDataset(entity))

  // SWC-5878 - Disable downloading a "Draft" dataset
  const disableDownload = entity && isDataset(entity) && entity.isLatestVersion

  const TOOLTIP_ID = `download-menu-tooltip-${entity?.id}`

  return (
    <React.Fragment>
      <ReactTooltip
        delayShow={300}
        place="left"
        type="dark"
        effect="solid"
        id={TOOLTIP_ID}
      />
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
          onClick={() => {
            ReactTooltip.rebuild()
          }}
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
              className={disableDownload ? 'ignoreLink' : undefined}
              data-for={TOOLTIP_ID}
              data-tip="A draft version of a dataset cannot be added to the Download Cart"
              data-tip-disable={!disableDownload}
              disabled={disableDownload}
              // If disabled, add pointer-events-auto so the tooltip still works
              style={disableDownload ? { pointerEvents: 'auto' } : {}}
              onClick={() =>
                accessToken ? onDownloadFiles() : setShowLoginModal(true)
              }
            >
              {DOWNLOAD_FILES_MENU_TEXT}
            </Dropdown.Item>
          )}
          <Dropdown.Item
            className={disableDownload ? 'ignoreLink' : undefined}
            data-for={TOOLTIP_ID}
            data-tip="A draft version of a dataset cannot be downloaded programmatically"
            data-tip-disable={!disableDownload}
            disabled={disableDownload}
            // If disabled, add pointer-events-auto so the tooltip still works
            style={disableDownload ? { pointerEvents: 'auto' } : {}}
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
