import React, { useEffect } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { useGetProjectsInfinite } from '../../../../utils/hooks/SynapseAPI/useProjects'
import { ProjectHeader } from '../../../../utils/synapseTypes'
import { GetProjectsParameters } from '../../../../utils/synapseTypes/GetProjectsParams'
import { toError } from '../../../ErrorBanner'
import { EntityDetailsListSharedProps } from '../EntityDetailsList'
import { DetailsView } from '../view/DetailsView'

type ProjectListDetailsProps = EntityDetailsListSharedProps & {
  projectsParams: GetProjectsParameters
}

export const ProjectListDetails: React.FunctionComponent<ProjectListDetailsProps> = ({
  projectsParams,
  showVersionSelection,
  selectColumnType,
  selected,
  visibleTypes: includeTypes,
  selectableTypes,
  toggleSelection,
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
      visibleTypes={includeTypes}
      selectableTypes={selectableTypes}
      toggleSelection={toggleSelection}
    />
  )
}
