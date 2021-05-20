import moment from 'moment'
import React, { useContext, useState } from 'react'
import { SynapseClient, SynapseConstants } from '../../utils'
import { testDownloadSpeed } from '../../utils/functions/testDownloadSpeed'
import {
  AddFilesToDownloadListRequest,
  Query,
  QueryBundleRequest,
} from '../../utils/synapseTypes/'
import DownloadDetails from './DownloadDetails'
import DownloadListTable from './DownloadListTable'
import useDeepCompareEffect from 'use-deep-compare-effect'
import { TopLevelControlsState, QueryWrapperState, QUERY_FILTERS_COLLAPSED_CSS, QUERY_FILTERS_EXPANDED_CSS } from '../QueryWrapper'
import SignInButton from '../SignInButton'
import { Alert } from 'react-bootstrap'
import { SynapseContext } from '../../utils/SynapseContext'

enum StatusEnum {
  LOADING_INFO,
  PROCESSING,
  INFO,
  SUCCESS,
  ERROR,
  SIGNED_OUT,
}

export type DownloadConfirmationState = {
  fileCount: number
  fileSize: number
  downloadEstimate?: string
  status: StatusEnum
  errorMessage?: string
  ownerId?: string
}
export type DownloadConfirmationProps = {
  fnClose?: Function
  getLastQueryRequest?: () => QueryBundleRequest
  topLevelControlsState?: TopLevelControlsState
  updateParentState?: <K extends keyof QueryWrapperState>(
    param: Pick<QueryWrapperState, K>,
  ) => void
  onExportTable?: () => void
}

// add files to download list
async function addToDownload(
  query: Query,
  token: string,
): Promise<[StatusEnum, string]> {
  const req: AddFilesToDownloadListRequest = {
    concreteType:
      'org.sagebionetworks.repo.model.file.AddFileToDownloadListRequest',
    query: query,
  }
  try {
    const result = await SynapseClient.addFilesToDownloadList(req, token)
    const ownerId = result.downloadList.ownerId
    return [StatusEnum.SUCCESS, ownerId]
  } catch (error) {
    return [StatusEnum.ERROR, error.reason]
  }
}

type UiStateDictionary = {
  [key: string]: {
    className: string
    infoText: string | JSX.Element
    closeText: string
  }
}

// css classes, text, and close button text associated with different stages
const StatusConstruct: UiStateDictionary = {
  [StatusEnum.INFO]: {
    className: 'alert-info',
    infoText: 'Would you like to add all files to the download list?',
    closeText: 'Cancel',
  },

  [StatusEnum.PROCESSING]: {
    className: 'alert-info',
    infoText: 'Adding Files To List',
    closeText: 'Cancel',
  },

  [StatusEnum.LOADING_INFO]: {
    className: 'alert-info',
    infoText: 'Calculating File Size',
    closeText: 'Cancel',
  },

  [StatusEnum.ERROR]: {
    className: 'alert-danger',
    closeText: 'Close',
    infoText: '',
  },
  [StatusEnum.SIGNED_OUT]: {
    className: 'alert-danger',
    closeText: 'Close',
    infoText: (
      <>
        Please <SignInButton style={{ color: '#337ab7' }} /> to add files to
        your download list.
      </>
    ),
  },
  [StatusEnum.SUCCESS]: {
    className: 'alert-info',
    closeText: 'Close',
    infoText: '',
  },
}

//============= DownloadConfirmation component =============

export const DownloadConfirmation: React.FunctionComponent<DownloadConfirmationProps> = ({
  getLastQueryRequest,
  fnClose,
  updateParentState,
  topLevelControlsState,
  onExportTable,
}) => {
  const { accessToken } = useContext(SynapseContext)
  const { showDownloadConfirmation = true } = topLevelControlsState ?? {}
  const [state, setState] = useState<DownloadConfirmationState>({
    fileCount: 0,
    fileSize: 0,
    status: accessToken ? StatusEnum.LOADING_INFO : StatusEnum.SIGNED_OUT,
  })
  const [showDownloadList, setShowDownloadList] = useState(false)
  const queryBundleRequest = getLastQueryRequest!()

  const getFilesInformation = async (
    queryBundleRequest: QueryBundleRequest,
    token: string,
  ) => {
    setState({
      ...state,
      status: StatusEnum.LOADING_INFO,
    })

    const partMask =
      SynapseConstants.BUNDLE_MASK_QUERY_COUNT |
      SynapseConstants.BUNDLE_MASK_SUM_FILES_SIZE_BYTES

    const queryBundleRequestSizeInformation: QueryBundleRequest = {
      ...queryBundleRequest,
      partMask,
    }

    const {
      queryCount,
      sumFileSizes,
    } = await SynapseClient.getQueryTableResults(
      queryBundleRequestSizeInformation,
      token,
    )
    const estimatedDownloadBytesPerSecond = await testDownloadSpeed(token)
    const size = sumFileSizes ? sumFileSizes['sumFileSizesBytes'] : 0
    const durationSeconds = size / estimatedDownloadBytesPerSecond
    const duration = moment.duration(durationSeconds, 'seconds').humanize()
    setState({
      fileCount: queryCount || 0,
      fileSize: size,
      downloadEstimate: duration,
      status: StatusEnum.INFO,
    })
  }

  // UseEffect memoization only works for arguments where a direct === comparison can be made
  // This fails drastically with the queryBundleRequest object which is a complex object of many fields that
  // change, we could use a custom comparitor but this also introduces risk
  useDeepCompareEffect(() => {
    accessToken && getFilesInformation(queryBundleRequest, accessToken!)
  }, [queryBundleRequest, accessToken])

  const onCancel = fnClose
    ? () => fnClose()
    : () => {
        updateParentState!({
          topLevelControlsState: {
            ...topLevelControlsState!,
            showDownloadConfirmation: false,
          },
        })
      }

  const triggerAddToDownload = async () => {
    if (!accessToken) {
      setState({ ...state, status: StatusEnum.SIGNED_OUT })
    } else {
      setState({ ...state, status: StatusEnum.PROCESSING })
      const result = await addToDownload(queryBundleRequest.query, accessToken)
      const status = result[0]

      if (status === StatusEnum.SUCCESS) {
        setState({ ...state, ownerId: result[1], status })
      } else {
        setState({ ...state, errorMessage: result[1], status })
      }
    }
  }

  const getContent = (
    { status, fileCount, fileSize, errorMessage }: DownloadConfirmationState,
    token?: string,
  ): JSX.Element => {
    switch (status) {
      case StatusEnum.LOADING_INFO:
      case StatusEnum.PROCESSING:
        return (
          <div>
            <span className={'spinner white'} />
            <span className={'spinner__text'}>
              {StatusConstruct[status].infoText}
            </span>
          </div>
        )

      case StatusEnum.SIGNED_OUT:
        return <>{StatusConstruct[status].infoText}</>
      case StatusEnum.ERROR:
        return <>{errorMessage}</>

      case StatusEnum.INFO:
        return (
          <>
            <DownloadDetails
              numFiles={fileCount}
              numBytes={fileSize}
            ></DownloadDetails>
            <span>{StatusConstruct[status].infoText}</span>
          </>
        )

      case StatusEnum.SUCCESS:
        return (
          <span>
            <button
              className="test-view-downloadlist btn-link"
              onClick={() => setShowDownloadList(true)}
            >
              View Download List
            </button>
            
            {onExportTable && <span>
                or 
                <button
                  className="test-download-metadata btn-link"
                  onClick={onExportTable}
                >
                  Download File Metadata
                </button>
              </span>
            }
          </span>
        )

      default:
        return <></>
    }
  }
  const showFacetFilter = topLevelControlsState?.showFacetFilter
  return (
    <>
      <Alert
        dismissible={false}
        show={true}
        variant={'info'}
        transition={false}
        className={`download-confirmation ${
            StatusConstruct[state.status].className
          } ${showDownloadConfirmation ? '' : 'hidden'}
          ${showFacetFilter ? QUERY_FILTERS_EXPANDED_CSS : QUERY_FILTERS_COLLAPSED_CSS}
        `}
      >
        <div>{getContent(state, accessToken)}</div>
        <div className="download-confirmation-action">
          {state.status !== StatusEnum.PROCESSING && (
            <button className="btn btn-link" onClick={onCancel}>
              {StatusConstruct[state.status].closeText}
            </button>
          )}

          {state.status === StatusEnum.INFO && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={triggerAddToDownload}
            >
              Add
            </button>
          )}
        </div>
      </Alert>
      {showDownloadList && (
        <DownloadListTable
          renderAsModal={true}
          onHide={() => setShowDownloadList(false)}
        />
      )}
    </>
  )
}
