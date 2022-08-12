import React from 'react'
import { useGetProjectsInfinite } from '../../../../utils/hooks/SynapseAPI/user/useProjects'
import useGetIsAllSelectedFromInfiniteList from '../../../../utils/hooks/useGetIsAllSelectedInfiniteList'
import { ProjectHeader } from '../../../../utils/synapseTypes'
import { GetProjectsParameters } from '../../../../utils/synapseTypes/GetProjectsParams'
import { EntityHeaderFromProjectHeader } from '../../EntityFinderHeader'
import { EntityDetailsListSharedProps } from '../EntityDetailsList'
import { DetailsView } from '../view/DetailsView'

type ProjectListDetailsProps = EntityDetailsListSharedProps & {
  projectsParams: GetProjectsParameters
}

export function toEntityHeader(
  projectHeader: ProjectHeader,
): EntityHeaderFromProjectHeader {
  return {
    ...projectHeader,
    type: 'org.sagebionetworks.repo.model.Project',
  }
}

export const ProjectListDetails: React.FunctionComponent<
  ProjectListDetailsProps
> = ({ projectsParams, ...sharedProps }) => {
  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useGetProjectsInfinite(projectsParams, { useErrorBoundary: true })

  const projects =
    data?.pages.flatMap(page => page.results).map(toEntityHeader) ?? []

  const selectAllCheckboxState = useGetIsAllSelectedFromInfiniteList(
    projects,
    sharedProps.selected.size,
    sharedProps.isIdSelected,
    sharedProps.isSelectable,
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
