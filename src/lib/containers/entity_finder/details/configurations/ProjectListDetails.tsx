import React, { useEffect } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { toError } from '../../../../utils/ErrorUtils'
import { useGetProjectsInfinite } from '../../../../utils/hooks/SynapseAPI/useProjects'
import { GetProjectsParameters } from '../../../../utils/synapseTypes/GetProjectsParams'
import { EntityDetailsListSharedProps } from '../EntityDetailsList'
import { DetailsView } from '../view/DetailsView'
import useGetIsAllSelectedFromInfiniteList from './useGetCheckboxStateFromInfiniteList'

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
    isLoading,
    hasNextPage,
    fetchNextPage,
    isError,
    error,
  } = useGetProjectsInfinite(projectsParams)
  const handleError = useErrorHandler()

  const projects = data?.pages.flatMap(page => page.results) ?? []

  const selectAllCheckboxState = useGetIsAllSelectedFromInfiniteList(
    projects,
    sharedProps.selected,
    hasNextPage,
    fetchNextPage,
    sharedProps.selectableTypes,
  )

  useEffect(() => {
    if (isError && error) {
      handleError(toError(error))
    }
  }, [isError, error, handleError])

  return (
    <DetailsView
      entities={projects}
      queryStatus={status}
      queryIsFetching={isLoading}
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      selectAllIsChecked={selectAllCheckboxState}
      {...sharedProps}
    />
  )
}
