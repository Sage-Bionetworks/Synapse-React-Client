import React, { useEffect } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { toError } from '../../../../utils/ErrorUtils'
import { useGetProjectsInfinite } from '../../../../utils/hooks/SynapseAPI/useProjects'
import { GetProjectsParameters } from '../../../../utils/synapseTypes/GetProjectsParams'
import { EntityDetailsListSharedProps } from '../EntityDetailsList'
import { DetailsView } from '../view/DetailsView'

type ProjectListDetailsProps = EntityDetailsListSharedProps & {
  projectsParams: GetProjectsParameters
}

export const ProjectListDetails: React.FunctionComponent<ProjectListDetailsProps> = ({
  projectsParams,
  ...sharedProps
}) => {
  const {
    data,
    status,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isError,
    error,
  } = useGetProjectsInfinite(projectsParams)
  const handleError = useErrorHandler()

  useEffect(() => {
    if (isError && error) {
      handleError(toError(error))
    }
  }, [isError, error, handleError])

  return (
    <DetailsView
      entities={data?.pages.flatMap(page => page.results) ?? []}
      queryStatus={status}
      queryIsFetching={isFetching}
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      {...sharedProps}
    />
  )
}
