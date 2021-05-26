import React, { useState, useEffect } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { DownloadListItemResult } from '../../utils/synapseTypes/DownloadListV2/DownloadListItemResult'
import { toError } from '../../utils/ErrorUtils'
import * as ReactBootstrap from 'react-bootstrap'
import { calculateFriendlyFileSize } from '../../utils/functions/calculateFriendlyFileSize'
import { useGetAvailableFilesToDownloadInfinite } from '../../utils/hooks/SynapseAPI/useGetAvailableFilesToDownload'
import { useInView } from 'react-intersection-observer'
import { AvailableFilesResponse } from '../../utils/synapseTypes/DownloadListV2/QueryResponseDetails'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Sort, SortField } from '../../utils/synapseTypes/DownloadListV2/QueryRequestDetails'
import { DownloadListItem } from '../../utils/synapseTypes/DownloadListV2/DownloadListItem'
import { SynapseClient } from '../../utils'
import moment from 'moment'
import UserCard from '../UserCard'
import SortIcon from '../../assets/icons/Sort'
import { Direction } from '../../utils/synapseTypes'
import { SynapseSpinner } from '../LoadingScreen'

export type DownloadListTableV2Props = {
    token: string
}

export const TESTING_TRASH_BTN_CLASS = 'TESTING_TRASH_BTN_CLASS'
export const TESTING_CLEAR_BTN_CLASS = 'TESTING_CLEAR_BTN_CLASS'

export default function DownloadListTableV2(props: DownloadListTableV2Props) {
    const handleError = useErrorHandler()
    // Load the next page when this ref comes into view.
    const { ref, inView } = useInView()
    const [sort, setSort] = useState<Sort | undefined>(undefined)
    const {
        data,
        status,
        isFetching,
        hasNextPage,
        fetchNextPage,
        isError,
        error: newError,
        refetch
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

    const allRows = data ? ([] as DownloadListItemResult[]).concat.apply(
        [],
        data.pages.map(page => (page.reponseDetails as AvailableFilesResponse).page),
    ) : []

    const removeItem = async (item: DownloadListItem) => {
        try {
            await SynapseClient.removeItemFromDownloadListV2(item, props.token)
            refetch()
        } catch (err) {
            console.error(err)
        }
    }
    
    const showInteractiveSortIcon = (columnSortBy: SortField) => {
        return (
          setSort && (
            <SortIcon
              role="button"
              style={{ height: '20px' }}
              active={sort?.field === columnSortBy}
              direction={
                sort?.field === columnSortBy ? (sort.direction === 'DESC' ? Direction.DESC : Direction.ASC) : Direction.DESC
              }
              onClick={() => {
                    const direction =
                    columnSortBy === sort?.field ? (sort.direction === 'ASC' ? 'DESC' : 'ASC') : 'DESC'
                setSort({
                    field: columnSortBy,
                    direction,
                })
              }}
            />
          )
        )
      }
    return (
        <>
            {allRows.length > 0 &&
                <ReactBootstrap.Table striped={true} responsive={true} className="DownloadListTableV2">
                    <thead>
                        <tr>
                            <th>
                                File Name
                                <span>{showInteractiveSortIcon('fileName')}</span>
                            </th>
                            <th>
                                Project
                                <span>{showInteractiveSortIcon('projectName')}</span>
                            </th>
                            <th>
                                SynID
                                <span>{showInteractiveSortIcon('synId')}</span>
                            </th>
                            <th>
                                Added On
                                <span>{showInteractiveSortIcon('addedOn')}</span>
                            </th>
                            <th>
                                Created By
                                <span>{showInteractiveSortIcon('createdBy')}</span>
                            </th>
                            <th>
                                Created On
                                <span>{showInteractiveSortIcon('createdOn')}</span>
                            </th>
                            <th>
                                Size
                                <span>{showInteractiveSortIcon('fileSize')}</span>
                            </th>
                            {/* th below is made for trash can icon but holds no content */}
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {allRows.map((item) => {
                            if (item) {
                                const addedOn = moment(item.addedOn).format('L LT')
                                const createdOn = moment(item.createdOn).format('L LT')
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
                                        <td>{addedOn}</td>
                                        <td>
                                            <UserCard
                                                size={'SMALL USER CARD'}
                                                ownerId={item.createdBy}
                                                token={props.token}
                                            />
                                        </td>
                                        <td>{createdOn}</td>
                                        <td>
                                            {item.fileSizeBytes && calculateFriendlyFileSize(item.fileSizeBytes)}
                                        </td>
                                        <td>
                                            <button
                                                className={TESTING_TRASH_BTN_CLASS}
                                                onClick={ () => { removeItem({fileEntityId: item.fileEntityId, versionNumber: item.versionNumber}) }}
                                            >
                                            <FontAwesomeIcon
                                                className="SRC-primary-text-color"
                                                icon="trash"
                                            />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }
                            else return false
                        })}
                        {/* To trigger loading the next page */}
                        <tr ref={ref} />
                    </tbody>
                </ReactBootstrap.Table>}
                {isFetching && 
                    <div className="EntityFinderDetailsView__Placeholder">
                        <SynapseSpinner size={30} />
                    </div>}
                {!isFetching && allRows.length === 0 && (
                    <div className="EntityFinderDetailsView__Placeholder">
                        <div>No rows</div>
                    </div>
                )}
        </>
    )
}