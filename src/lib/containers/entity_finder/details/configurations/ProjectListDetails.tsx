import React from 'react'
import { useGetProjectsInfinite } from '../../../../utils/hooks/SynapseAPI/useProjects'
import { ProjectHeader } from '../../../../utils/synapseTypes'
import { GetProjectsParameters } from '../../../../utils/synapseTypes/GetProjectsParams'
import { DetailsView } from '../view/DetailsView'
import { EntityFinderDetailsSharedProps } from './../EntityFinderDetails'

type ProjectListDetailsProps = EntityFinderDetailsSharedProps & {
  projectsParams: GetProjectsParameters
}

export const ProjectListDetails: React.FunctionComponent<ProjectListDetailsProps> = ({
  sessionToken,
  projectsParams,
  showVersionSelection,
  selectColumnType,
  selected,
  includeTypes,
  selectableTypes,
  toggleSelection,
}) => {
  const { data, status, isFetching, hasNextPage, fetchNextPage } = useGetProjectsInfinite(
    sessionToken,
    projectsParams,
  )
  return (
    <DetailsView
      sessionToken={sessionToken}
      entities={
        data
          ? ([] as ProjectHeader[]).concat.apply(
              [],
              data.pages.map(page => page.results),
            )
          : []
      }
      queryStatus={status}
      queryIsFetching={isFetching}
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      showVersionSelection={showVersionSelection}
      selectColumnType={selectColumnType}
      selected={selected}
      showTypes={includeTypes}
      selectableTypes={selectableTypes}
      toggleSelection={toggleSelection}
    ></DetailsView>
  )
}
