import React, { useEffect } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { toError } from '../../utils/ErrorUtils'
import { useInView } from 'react-intersection-observer'
import { ProjectHeader } from '../../utils/synapseTypes'
import { SynapseSpinner } from '../LoadingScreen'
import { useSynapseContext } from '../../utils/SynapseContext'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'
import { useGetUserProjectsInfinite } from '../../utils/hooks/SynapseAPI/useGetUserProjects'
import { GetProjectsParameters } from '../../utils/synapseTypes/GetProjectsParams'

export type UserProjectsProps = {
  userId: string
}

export default function UserProjects({userId}:UserProjectsProps) {
  const { accessToken } = useSynapseContext()
  const handleError = useErrorHandler()
  // Load the next page when this ref comes into view.
  const { ref, inView } = useInView()
  const getProjectsParameters: GetProjectsParameters = {}
  const {
    data,
    status,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isError,
    error: newError,
    refetch,
  } = useGetUserProjectsInfinite(userId, getProjectsParameters)

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

  const allRows = data
    ? ([] as ProjectHeader[]).concat.apply(
        [],
        data.pages.map(
          p => p.results,
        ),
      )
    : []

  return (
    <>
      {allRows.length > 0 && (
        <>
          {allRows.map((item:ProjectHeader) => {
            if (item) {
              // another option would be to use an EntityLink
              return (
                <p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Synapse:${item.id}`}
                  >
                    {item.name}
                  </a>
                </p>
              )
            } else return false
          })}
          {/* To trigger loading the next page */}
          <tr ref={ref} />
        </>
      )}
      {isFetching && (
        <div className="placeholder">
          <SynapseSpinner size={30} />
        </div>
      )}
    </>
  )
}
