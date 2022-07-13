import React, { useEffect } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { useGetProjectsInfinite } from '../../../../utils/hooks/SynapseAPI/user/useProjects'
import { GetProjectsParameters } from '../../../../utils/synapseTypes/GetProjectsParams'
import { EntityDetailsListSharedProps } from '../EntityDetailsList'
import { DetailsView } from '../view/DetailsView'
import useGetIsAllSelectedFromInfiniteList from '../../../../utils/hooks/useGetIsAllSelectedInfiniteList'

type ProjectListDetailsProps = EntityDetailsListSharedProps & {
  projectsParams: GetProjectsParameters
}

export const ProjectListDetails: React.FunctionComponent<
  ProjectListDetailsProps
> = ({ projectsParams, ...sharedProps }) => {
  const {
    data,
    isLoading,
    isFetchingNextPage,
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
    sharedProps.selectableTypes,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  )

  useEffect(() => {
    if (isError && error) {
      handleError(error)
    }
  }, [isError, error, handleError])

  return (
    <DetailsView
      entities={projects}
      isLoading={isLoading}
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      isFetchingNextPage={isFetchingNextPage}
      selectAllIsChecked={selectAllCheckboxState}
      {...sharedProps}
    />
  )
}
