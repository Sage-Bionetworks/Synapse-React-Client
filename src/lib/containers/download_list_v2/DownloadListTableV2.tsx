import React, { useEffect } from 'react';
import { useErrorHandler } from 'react-error-boundary';
import { DownloadListItemResult } from '../../utils/synapseTypes/DownloadListV2/DownloadListItemResult';
import { toError } from '../ErrorBanner';
import * as ReactBootstrap from 'react-bootstrap'
import { calculateFriendlyFileSize } from '../../utils/functions/calculateFriendlyFileSize';
import { useGetDownloadListV2Infinite } from '../../utils/hooks/SynapseAPI/useGetDownloadListV2';
import { useInView } from 'react-intersection-observer';
import { AvailableFilesResponse } from '../../utils/synapseTypes/DownloadListV2/QueryResponseDetails';

export type DownloadListTableV2Props = {
    token: string
}
export default function DownloadListTableV2(props: DownloadListTableV2Props) {
    const handleError = useErrorHandler()

    // Load the next page when this ref comes into view.
    const { ref, inView } = useInView()

    const {
        data,
        status,
        isFetching,
        hasNextPage,
        fetchNextPage,
        isError,
        error: newError,
    } = useGetDownloadListV2Infinite(props.token, {
        concreteType: 'org.sagebionetworks.repo.model.download.AvailableFilesRequest',
        // TODO: sort
    })

    useEffect(() => {
        if (isError && newError) {
            handleError(toError(newError))
        }
    }, [isError, newError, handleError])

    useEffect(() => {
        if (
            status === 'success' &&
            !isFetching &&
            hasNextPage &&
            fetchNextPage &&
            inView
        ) {
            fetchNextPage()
        }
    }, [status, isFetching, hasNextPage, fetchNextPage, inView])

    const allRows = data ? ([] as DownloadListItemResult[]).concat.apply(
        [],
        data.pages.map(page => (page.reponseDetails as AvailableFilesResponse).page),
      )
    : []
    
    if (allRows.length === 0) {
        return <span>No rows found</span>
    }
    
    return (
        <ReactBootstrap.Table striped={true} responsive={true}>
            <tbody className="download-list-table">
                {allRows.map(item => {
                    if (item) {
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
                    }
                    else return false
                })}
                {/* To trigger loading the next page */}
                <tr ref={ref} />
            </tbody>
        </ReactBootstrap.Table>
    )
}