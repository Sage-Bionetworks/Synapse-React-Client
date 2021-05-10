import React, { useState, useEffect } from 'react';
import { useErrorHandler } from 'react-error-boundary';
import { DownloadListItemResult } from '../../utils/synapseTypes/DownloadListV2/DownloadListItemResult';
import { toError } from '../ErrorBanner';
import * as ReactBootstrap from 'react-bootstrap'
import { calculateFriendlyFileSize } from '../../utils/functions/calculateFriendlyFileSize';
import { useGetAvailableFilesToDownloadInfinite } from '../../utils/hooks/SynapseAPI/useGetAvailableFilesToDownload';
import { useInView } from 'react-intersection-observer';
import { AvailableFilesResponse } from '../../utils/synapseTypes/DownloadListV2/QueryResponseDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Sort, SortField } from '../../utils/synapseTypes/DownloadListV2/QueryRequestDetails';
import {
    faSortAmountDown,
    faSortAmountUp,
} from '@fortawesome/free-solid-svg-icons'

export type DownloadListTableV2Props = {
    token: string
}
export default function DownloadListTableV2(props: DownloadListTableV2Props) {
    const handleError = useErrorHandler()

    // Load the next page when this ref comes into view.
    const { ref, inView } = useInView()
    const [sort, setSort] = useState<Sort>({ field: 'fileName', direction: 'DESC' })
    const {
        data,
        status,
        isFetching,
        hasNextPage,
        fetchNextPage,
        isError,
        error: newError,
    } = useGetAvailableFilesToDownloadInfinite(props.token, sort)

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

    const sortColumn = async (field: SortField) => {
        try {
            const direction =
                field === sort.field ? (sort.direction === 'ASC' ? 'DESC' : 'ASC') : 'DESC'

            setSort({
                field,
                direction,
            })
            // TODO: reset to page 1
        } catch (err) {
            console.error(err)
        }
    }


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
            <thead>
                <tr>
                    <th>
                        File Name
                <button
                            className={`sort SRC-primary-background-color-hover ${sort.field === 'fileName'
                                    ? 'SRC-primary-background-color'
                                    : ''
                                }`}
                            onClick={() => {
                                sortColumn('fileName')
                            }}
                        >
                            <FontAwesomeIcon
                                icon={
                                    sort.field === 'fileName'
                                        ? sort.direction === 'DESC'
                                            ? faSortAmountDown
                                            : faSortAmountUp
                                        : faSortAmountDown
                                }
                                color={sort.field === 'fileName' ? 'white' : ''}
                            />
                        </button>
                    </th>
                    <th>
                        Project
                <button
                            className={`sort SRC-primary-background-color-hover ${sort.field === 'projectName'
                                    ? 'SRC-primary-background-color'
                                    : ''
                                }`}
                            onClick={() => {
                                sortColumn('projectName')
                            }}
                        >
                            <FontAwesomeIcon
                                icon={
                                    sort.field === 'projectName'
                                        ? sort.direction === 'DESC'
                                            ? faSortAmountDown
                                            : faSortAmountUp
                                        : faSortAmountDown
                                }
                                color={sort.field === 'projectName' ? 'white' : ''}
                            />
                        </button>
                    </th>
                    <th>
                        SynID
                <button
                            className={`sort SRC-primary-background-color-hover ${sort.field === 'synId'
                                    ? 'SRC-primary-background-color'
                                    : ''
                                }`}
                            onClick={() => {
                                sortColumn('synId')
                            }}
                        >
                            <FontAwesomeIcon
                                icon={
                                    sort.field === 'synId'
                                        ? sort.direction === 'DESC'
                                            ? faSortAmountDown
                                            : faSortAmountUp
                                        : faSortAmountDown
                                }
                                color={sort.field === 'synId' ? 'white' : ''}
                            />
                        </button>
                    </th>
                    <th>
                        Added On
                <button
                            className={`sort SRC-primary-background-color-hover ${sort.field === 'addedOn'
                                    ? 'SRC-primary-background-color'
                                    : ''
                                }`}
                            onClick={() => {
                                sortColumn('addedOn')
                            }}
                        >
                            <FontAwesomeIcon
                                icon={
                                    sort.field === 'addedOn'
                                        ? sort.direction === 'DESC'
                                            ? faSortAmountDown
                                            : faSortAmountUp
                                        : faSortAmountDown
                                }
                                color={sort.field === 'addedOn' ? 'white' : ''}
                            />
                        </button>
                    </th>
                    <th>
                        Created By
                <button
                            className={`sort SRC-primary-background-color-hover ${sort.field === 'createdBy'
                                    ? 'SRC-primary-background-color'
                                    : ''
                                }`}
                            onClick={() => {
                                sortColumn('createdBy')
                            }}
                        >
                            <FontAwesomeIcon
                                icon={
                                    sort.field === 'createdBy'
                                        ? sort.direction === 'DESC'
                                            ? faSortAmountDown
                                            : faSortAmountUp
                                        : faSortAmountDown
                                }
                                color={sort.field === 'createdBy' ? 'white' : ''}
                            />
                        </button>
                    </th>
                    <th>
                        Created On
                <button
                            className={`sort SRC-primary-background-color-hover ${sort.field === 'createdOn'
                                    ? 'SRC-primary-background-color'
                                    : ''
                                }`}
                            onClick={() => {
                                sortColumn('createdOn')
                            }}
                        >
                            <FontAwesomeIcon
                                icon={
                                    sort.field === 'createdOn'
                                        ? sort.direction === 'DESC'
                                            ? faSortAmountDown
                                            : faSortAmountUp
                                        : faSortAmountDown
                                }
                                color={sort.field === 'createdOn' ? 'white' : ''}
                            />
                        </button>
                    </th>
                    <th>
                        Size
                <button
                            className={`sort SRC-primary-background-color-hover ${sort.field === 'fileSize'
                                    ? 'SRC-primary-background-color'
                                    : ''
                                }`}
                            onClick={() => {
                                sortColumn('fileSize')
                            }}
                        >
                            <FontAwesomeIcon
                                icon={
                                    sort.field === 'fileSize'
                                        ? sort.direction === 'DESC'
                                            ? faSortAmountDown
                                            : faSortAmountUp
                                        : faSortAmountDown
                                }
                                color={sort.field === 'fileSize' ? 'white' : ''}
                            />
                        </button>
                    </th>
                    {/* th below is made for trash can icon but holds no content */}
                    <th />
                </tr>
            </thead>
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
                                <td>{item.projectName}</td>
                                <td>{item.projectId}</td>
                                <td>{item.addedOn}</td>
                                <td>{item.createdBy}</td>
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