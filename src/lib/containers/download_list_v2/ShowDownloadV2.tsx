import React, {useEffect} from 'react'
import ReactTooltip from 'react-tooltip'
import { TOOLTIP_DELAY_SHOW } from '../table/SynapseTableConstants'
import { useSynapseContext } from '../../utils/SynapseContext'
import { isInSynapseExperimentalMode } from '../../utils/SynapseClient'
import { useErrorHandler } from 'react-error-boundary'
import { toError } from '../../utils/ErrorUtils'
import { useGetDownloadListStatistics } from '../../utils/hooks/SynapseAPI/useGetDownloadListStatistics'
import IconSvg from '../IconSvg'

export type ShowDownloadV2Props = {
  to: string
}

/**
 * Nav bar item, displayed when files have been added to the Download Cart.
 * This must be configured with the URL of a page dedicated to showing the Download Cart.
 */
function ShowDownloadV2({ to }: ShowDownloadV2Props) {
  const { accessToken } = useSynapseContext()
  const handleError = useErrorHandler()
  const idForToolTip = 'SHOW_DOWNLOAD_TOOLTIP'
  const tooltipText = 'Click to view items in your download cart.'
  
  const {
    data,
    isLoading,
    isError,
    error: newError,
  } = useGetDownloadListStatistics()
  
  useEffect(() => {
    if (isError && newError && accessToken) {
      handleError(toError(newError))
    }
  }, [isError, newError, handleError, accessToken])

  const isInExperimentalMode = isInSynapseExperimentalMode()
  if (!accessToken || isLoading || !isInExperimentalMode) {
    return <></>
  }
  
  const size = data?.totalNumberOfFiles ?? 0
  if (size === 0) {
    return <></>
  }
  const content = (
    <>
      <span id={idForToolTip} data-for={idForToolTip} data-tip={tooltipText}>
        <span className="SRC-primary-text-color">
          <IconSvg
            options={{
              icon: 'cart'
            }}
          />
        </span>
        <span className={`download-cart-size`}>{size}</span>
      </span>
      <ReactTooltip
        delayShow={TOOLTIP_DELAY_SHOW}
        place={'bottom'}
        type={'dark'}
        effect={'solid'}
        border={true}
        id={idForToolTip}
      />
    </>
  )
  return <a className="Download-Link v2" href={to} rel="noopener noreferrer">
      {content}
    </a>
  
}

export default ShowDownloadV2
