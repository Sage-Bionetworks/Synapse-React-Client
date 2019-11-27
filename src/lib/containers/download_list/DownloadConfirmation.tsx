import React, { useState, useEffect } from 'react'
import { SynapseClient } from '../../utils'
import { SynapseConstants } from '../../utils'
import { AddFilesToDownloadListRequest } from '../../utils/jsonResponses/AddFilesToDownloadListRequest'
import { QueryBundleRequest } from '../../utils/jsonResponses/Table/QueryBundleRequest'
import { testDownloadSpeed } from '../../utils/functions/testDownloadSpeed'
import moment from 'moment'
import { Query } from '../../utils/jsonResponses/Table/Query'
import { DownloadDetails } from './'

enum StatusEnum {
  LOADING_INFO,
  PROCESSING,
  INFO,
  SUCCESS,
  ERROR,
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
  fnClose: Function
  token: string
  queryBundleRequest: QueryBundleRequest
}

//get the info about the files stats
async function getFilesInformation(
  query: Query,
  token: string,
): Promise<DownloadConfirmationState> {
  const partMask =
    SynapseConstants.BUNDLE_MASK_QUERY_COUNT |
    SynapseConstants.BUNDLE_MASK_SUM_FILES_SIZE_BYTES

  const queryBundleRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    query: query,
    partMask,
  }

  const { queryCount, sumFileSizes } = await SynapseClient.getQueryTableResults(
    queryBundleRequest,
  )
  const estimatedDownloadBytesPerSecond = await testDownloadSpeed(token)
  const size = sumFileSizes ? sumFileSizes['sumFileSizesBytes'] : 0
  const durationSeconds = size / estimatedDownloadBytesPerSecond
  const duration = moment.duration(durationSeconds, 'seconds').humanize()

  return {
    fileCount: queryCount || 0,
    fileSize: size,
    downloadEstimate: duration,
    status: StatusEnum.INFO,
  }
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
    infoText: string
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
  [StatusEnum.SUCCESS]: {
    className: 'alert-info',
    closeText: 'Close',
    infoText: '',
  },
}

//============= DownloadConfirmation component =============

export const DownloadConfirmation: React.FunctionComponent<DownloadConfirmationProps> = ({
  queryBundleRequest,
  token,
  fnClose,
}) => {
  const [state, setState] = useState<DownloadConfirmationState>({
    fileCount: 0,
    fileSize: 0,
    status: StatusEnum.LOADING_INFO,
  })

  useEffect(() => {
    ;(async function getDataOnLoad(query: Query, token: string) {
      const result = await getFilesInformation(query, token)
      setState(result)
    })(queryBundleRequest.query, token)
  }, [queryBundleRequest.query, token])

  const hideComponent = () => fnClose()

  const triggerAddToDownload = async () => {
    setState({ ...state, status: StatusEnum.PROCESSING })
    const result = await addToDownload(queryBundleRequest.query, token)
    const status = result[0]

    if (status === StatusEnum.SUCCESS) {
      setState({ ...state, ownerId: result[1], status })
    } else {
      setState({ ...state, errorMessage: result[1], status })
    }
  }

  const getContent = (
    {
      status,
      fileCount,
      fileSize,
      errorMessage,
      ownerId,
    }: DownloadConfirmationState,
    token: string,
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

      case StatusEnum.ERROR:
        return <>{errorMessage}</>

      case StatusEnum.INFO:
        return (
          <>
            <DownloadDetails
              token={token}
              numFiles={fileCount}
              numBytes={fileSize}
            ></DownloadDetails>
            <span>{StatusConstruct[status].infoText}</span>
          </>
        )

      case StatusEnum.SUCCESS:
        return (
          <span>
            <a
              href={`https://www.synapse.org/#!Profile:${ownerId}/downloads`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Download List
            </a>
          </span>
        )

      default:
        return <></>
    }
  }

  return (
    <div
      className={`alert download-confirmation ${
        StatusConstruct[state.status].className
      }`}
    >
      <div className="download-confirmation__section">
        {getContent(state, token)}
      </div>
      <div
        className="download-confirmation__section text-right"
        style={{
          width: '150px',
        }}
      >
        {state.status !== StatusEnum.PROCESSING && (
          <button className="btn btn-link" onClick={hideComponent}>
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
    </div>
  )
}
