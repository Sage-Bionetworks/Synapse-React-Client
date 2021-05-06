import React, { useState, useEffect } from 'react';
import { useErrorHandler } from 'react-error-boundary';
import { SynapseClient } from '../..';
import { DownloadListItemResult } from '../../utils/synapseTypes/DownloadListV2/DownloadListItemResult';
import { DownloadListQueryRequest } from '../../utils/synapseTypes/DownloadListV2/DownloadListQueryRequest';
import { DownloadListQueryResponse } from '../../utils/synapseTypes/DownloadListV2/DownloadListQueryResponse';
import { AvailableFilesRequest } from '../../utils/synapseTypes/DownloadListV2/QueryRequestDetails';
import { AvailableFilesResponse } from '../../utils/synapseTypes/DownloadListV2/QueryResponseDetails';
import { toError } from '../ErrorBanner';
import * as ReactBootstrap from 'react-bootstrap'
import { calculateFriendlyFileSize } from '../../utils/functions/calculateFriendlyFileSize';

type DownloadListTableV2Props = {
    token?: string
  }
export default function DownloadListTableV2(props: DownloadListTableV2Props) {
  const [nextPageToken, setNextPageToken] = useState<string | undefined>(undefined)
  const [downloadListItems, setDownloadListItems] = useState<DownloadListItemResult[] | undefined>(undefined)
  const handleError = useErrorHandler()
  
  const getMoreResults = () => {
    const availableFilesRequest: AvailableFilesRequest = {
        concreteType: 'org.sagebionetworks.repo.model.download.AvailableFilesRequest',
        nextPageToken
    }
    const downloadListRequest: DownloadListQueryRequest = {
        concreteType: 'org.sagebionetworks.repo.model.download.DownloadListQueryRequest',
        requestDetails: availableFilesRequest
    }
    SynapseClient.getDownloadListV2(downloadListRequest, props.token).then((response: DownloadListQueryResponse) => {
        const availableFiles: AvailableFilesResponse = response.reponseDetails as AvailableFilesResponse
        setNextPageToken(availableFiles.nextPageToken)
        const allDownloadListItems = downloadListItems ?? []
        setDownloadListItems(allDownloadListItems.concat(availableFiles.page))
    }).catch(err => {
        handleError(toError(err))
    })
  }
  useEffect(() => {
      if (props.token)
        getMoreResults()
    return () => {
    }
  }, [props.token, getMoreResults])

  if (!props.token) return <></>
  if (downloadListItems === undefined) {
    return 'Loading...';
  }

  return <>
    <ReactBootstrap.Table striped={true} responsive={true}>
        <tbody className="download-list-table">
            {downloadListItems.map(item => {
                return (
                    <tr key={item.fileEntityId}>
                        <td>
                            <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`https://www.synapse.org/#!Synapse:${item.fileEntityId}.${item.versionNumber}`}
                            >
                            {item.fileName}
                            </a>
                        </td>
                        <td>{item.createdOn}</td>
                        <td>
                            {item.fileSizeBytes && calculateFriendlyFileSize(item.fileSizeBytes)}
                        </td>
                    </tr>
                )
                })}
        </tbody>
        </ReactBootstrap.Table>
        {nextPageToken && (
        <div className="FeedViewAllNewsButtonContainer">
          <ReactBootstrap.Button
            variant="primary"
            size="lg"
            className="pill"
            onClick={() => getMoreResults()}
          >
            VIEW MORE
          </ReactBootstrap.Button>
        </div>
      )}
    </>

}