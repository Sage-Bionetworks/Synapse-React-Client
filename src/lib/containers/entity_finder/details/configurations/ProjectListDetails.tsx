import React from 'react'
import { useGetProjectsInfinite } from '../../../../utils/hooks/SynapseAPI/user/useProjects'
import useGetIsAllSelectedFromInfiniteList from '../../../../utils/hooks/useGetIsAllSelectedInfiniteList'
import { GetProjectsParameters } from '../../../../utils/synapseTypes/GetProjectsParams'
import { EntityDetailsListSharedProps } from '../EntityDetailsList'
import { DetailsView } from '../view/DetailsView'

type ProjectListDetailsProps = EntityDetailsListSharedProps & {
  projectsParams: GetProjectsParameters
}

export const ProjectListDetails: React.FunctionComponent<
  ProjectListDetailsProps
> = ({ projectsParams, ...sharedProps }) => {
  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useGetProjectsInfinite(projectsParams, { useErrorBoundary: true })

  const projects = data?.pages.flatMap(page => page.results) ?? []

  const selectAllCheckboxState = useGetIsAllSelectedFromInfiniteList(
    projects,
    sharedProps.selected,
    sharedProps.selectableTypes,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  )

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
