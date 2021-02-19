import React, { useState } from 'react'
import useDeepCompareEffect from 'use-deep-compare-effect'
import { useGetFavorites } from '../../../utils/hooks/SynapseAPI/useFavorites'
import { useGetEntityChildrenInfinite } from '../../../utils/hooks/SynapseAPI/useGetEntityChildren'
import { useGetProjectsInfinite } from '../../../utils/hooks/SynapseAPI/useProjects'
import { useSearchInfinite } from '../../../utils/hooks/SynapseAPI/useSearch'
import {
  Direction,
  EntityHeader,
  EntityType,
  ProjectHeader,
  SortBy,
} from '../../../utils/synapseTypes'
import { GetProjectsParameters } from '../../../utils/synapseTypes/GetProjectsParams'
import { SearchQuery } from '../../../utils/synapseTypes/Search'
import { EntityIdAndVersion } from '../EntityFinder'
import { DetailsView } from './DetailsView'

export enum EntityFinderDetailsConfigurationType {
  HEADER_LIST, // simply displays one or more entity headers. incompatible with pagination
  PARENT_CONTAINER, // retrieve the children for a given entity ID
  USER_PROJECTS, // retrieve the user's projects (using the parameters)
  USER_FAVORITES, // retrieve the user's favorites (using the parameters)
  ENTITY_SEARCH, // Search for an entity
}

export type EntityFinderDetailsConfiguration = {
  type: EntityFinderDetailsConfigurationType
  headerList?: (EntityHeader | ProjectHeader)[]
  parentContainerParams?: {
    parentContainerId: string
  }
  getProjectParams?: GetProjectsParameters
  query?: SearchQuery
}

export type EntityFinderDetailsProps = {
  sessionToken: string
  configuration: EntityFinderDetailsConfiguration
  showVersionSelection: boolean
  selectMultiple: boolean
  includeTypes: EntityType[]
  selected: EntityIdAndVersion[] // synId(s)
  selectableTypes: EntityType[]
  toggleSelection: (entity: EntityIdAndVersion) => void
}

export const EntityFinderDetails: React.FunctionComponent<EntityFinderDetailsProps> = ({
  sessionToken,
  configuration,
  showVersionSelection,
  selectMultiple,
  selected,
  includeTypes,
  selectableTypes,
  toggleSelection,
}) => {
  const [component, setComponent] = useState(<div></div>)

  useDeepCompareEffect(() => {
    const getComponentFromConfiguration = (
      configuration: EntityFinderDetailsConfiguration,
    ) => {
      switch (configuration.type) {
        case EntityFinderDetailsConfigurationType.PARENT_CONTAINER:
          return (
            <ChildrenView
              sessionToken={sessionToken}
              parentContainerId={
                configuration.parentContainerParams!.parentContainerId
              }
              includeTypes={includeTypes}
              showVersionSelection={showVersionSelection}
              selectMultiple={selectMultiple}
              selected={selected}
              selectableTypes={selectableTypes}
              toggleSelection={toggleSelection}
            ></ChildrenView>
          )

        case EntityFinderDetailsConfigurationType.HEADER_LIST:
          return (
            <EntityHeaderListView
              sessionToken={sessionToken}
              entityHeaders={configuration.headerList!}
              includeTypes={includeTypes}
              showVersionSelection={showVersionSelection}
              selectMultiple={selectMultiple}
              selected={selected}
              selectableTypes={selectableTypes}
              toggleSelection={toggleSelection}
            />
          )
        case EntityFinderDetailsConfigurationType.USER_FAVORITES:
          return (
            <FavoritesView
              sessionToken={sessionToken}
              includeTypes={includeTypes}
              showVersionSelection={showVersionSelection}
              selectMultiple={selectMultiple}
              selected={selected}
              selectableTypes={selectableTypes}
              toggleSelection={toggleSelection}
            />
          )
        case EntityFinderDetailsConfigurationType.ENTITY_SEARCH:
          return (
            <SearchView
              sessionToken={sessionToken}
              searchQuery={configuration.query!}
              includeTypes={includeTypes}
              showVersionSelection={showVersionSelection}
              selectMultiple={selectMultiple}
              selected={selected}
              selectableTypes={selectableTypes}
              toggleSelection={toggleSelection}
            />
          )

        case EntityFinderDetailsConfigurationType.USER_PROJECTS:
          return (
            <ProjectsView
              sessionToken={sessionToken}
              projectsParams={configuration.getProjectParams!}
              includeTypes={includeTypes}
              showVersionSelection={showVersionSelection}
              selectMultiple={selectMultiple}
              selected={selected}
              selectableTypes={selectableTypes}
              toggleSelection={toggleSelection}
            />
          )

        default:
          return <div></div>
      }
    }
    setComponent(getComponentFromConfiguration(configuration))
  }, [configuration, selected])

  return component
}

type ChildrenViewProps = {
  sessionToken: string
  parentContainerId: string
  includeTypes: EntityType[]
  showVersionSelection: boolean
  selectMultiple: boolean
  selected: EntityIdAndVersion[]
  selectableTypes: EntityType[]
  toggleSelection: (entity: EntityIdAndVersion) => void
}

const ChildrenView: React.FunctionComponent<ChildrenViewProps> = ({
  sessionToken,
  parentContainerId,
  includeTypes,
  showVersionSelection,
  selectMultiple,
  selected,
  selectableTypes,
  toggleSelection,
}) => {
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.NAME)
  const [sortDirection, setSortDirection] = useState<Direction>(Direction.ASC)

  const {
    data,
    status,
    hasNextPage,
    fetchNextPage,
  } = useGetEntityChildrenInfinite(sessionToken, {
    parentId: parentContainerId,
    includeTypes: includeTypes,
    sortBy: sortBy,
    sortDirection: sortDirection,
  })
  return (
    <DetailsView
      sessionToken={sessionToken}
      entities={data ? data.pages.map(page => page.page).flat() : []}
      queryStatus={status}
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      sort={{ sortBy, sortDirection }}
      setSort={(newSortBy, newSortDirection) => {
        setSortBy(newSortBy)
        setSortDirection(newSortDirection)
      }}
      showVersionSelection={showVersionSelection}
      selectMultiple={selectMultiple}
      selected={selected}
      showTypes={includeTypes}
      selectableTypes={selectableTypes}
      toggleSelection={toggleSelection}
    ></DetailsView>
  )
}

type HeaderListViewProps = {
  sessionToken: string
  entityHeaders: (EntityHeader | ProjectHeader)[]
  includeTypes: EntityType[]
  showVersionSelection: boolean
  selectMultiple: boolean
  selected: EntityIdAndVersion[]
  selectableTypes: EntityType[]
  toggleSelection: (entity: EntityIdAndVersion) => void
}

const EntityHeaderListView: React.FunctionComponent<HeaderListViewProps> = ({
  sessionToken,
  entityHeaders,
  showVersionSelection,
  selectMultiple,
  selected,
  includeTypes,
  selectableTypes,
  toggleSelection,
}) => {
  return (
    <DetailsView
      sessionToken={sessionToken}
      entities={entityHeaders}
      queryStatus={'success'}
      hasNextPage={false}
      showVersionSelection={showVersionSelection}
      selectMultiple={selectMultiple}
      selected={selected}
      showTypes={includeTypes}
      selectableTypes={selectableTypes}
      toggleSelection={toggleSelection}
    ></DetailsView>
  )
}

type FavoritesViewProps = {
  sessionToken: string
  includeTypes: EntityType[]
  showVersionSelection: boolean
  selectMultiple: boolean
  selected: EntityIdAndVersion[]
  selectableTypes: EntityType[]
  toggleSelection: (entity: EntityIdAndVersion) => void
}

const FavoritesView: React.FunctionComponent<FavoritesViewProps> = ({
  sessionToken,
  showVersionSelection,
  selectMultiple,
  selected,
  includeTypes,
  selectableTypes,
  toggleSelection,
}) => {
  const { data, status } = useGetFavorites(sessionToken)
  return (
    <DetailsView
      sessionToken={sessionToken}
      entities={data ? data.results : []}
      queryStatus={status}
      hasNextPage={false}
      showVersionSelection={showVersionSelection}
      selectMultiple={selectMultiple}
      selected={selected}
      showTypes={includeTypes}
      selectableTypes={selectableTypes}
      toggleSelection={toggleSelection}
    ></DetailsView>
  )
}

type SearchViewProps = {
  sessionToken: string
  searchQuery: SearchQuery
  includeTypes: EntityType[]
  showVersionSelection: boolean
  selectMultiple: boolean
  selected: EntityIdAndVersion[]
  selectableTypes: EntityType[]
  toggleSelection: (entity: EntityIdAndVersion) => void
}

const SearchView: React.FunctionComponent<SearchViewProps> = ({
  sessionToken,
  searchQuery,
  showVersionSelection,
  selectMultiple,
  selected,
  includeTypes,
  selectableTypes,
  toggleSelection,
}) => {
  const {
    data,
    status,
    hasNextPage,
    fetchNextPage,
  } = useSearchInfinite(searchQuery, sessionToken, {
    enabled: !!searchQuery.queryTerm,
  })
  if (searchQuery.queryTerm) {
    return (
      <DetailsView
        sessionToken={sessionToken}
        entities={data ? data.pages.map(page => page.hits).flat() : []}
        queryStatus={status}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
        showVersionSelection={showVersionSelection}
        selectMultiple={selectMultiple}
        selected={selected}
        showTypes={includeTypes}
        selectableTypes={selectableTypes}
        toggleSelection={toggleSelection}
      ></DetailsView>
    )
  } else {
    return (
      <DetailsView
        sessionToken={sessionToken}
        entities={[]}
        queryStatus={'success'}
        hasNextPage={false}
        showVersionSelection={showVersionSelection}
        selectMultiple={selectMultiple}
        selected={selected}
        showTypes={includeTypes}
        selectableTypes={selectableTypes}
        toggleSelection={toggleSelection}
        noResultsPlaceholder={
          <div>Enter a term or Synapse ID to start searching</div>
        }
      ></DetailsView>
    )
  }
}

type ProjectsViewProps = {
  sessionToken: string
  projectsParams: GetProjectsParameters
  includeTypes: EntityType[]
  showVersionSelection: boolean
  selectMultiple: boolean
  selected: EntityIdAndVersion[]
  selectableTypes: EntityType[]
  toggleSelection: (entity: EntityIdAndVersion) => void
}
const ProjectsView: React.FunctionComponent<ProjectsViewProps> = ({
  sessionToken,
  projectsParams,
  showVersionSelection,
  selectMultiple,
  selected,
  includeTypes,
  selectableTypes,
  toggleSelection,
}) => {
  const { data, status, hasNextPage, fetchNextPage } = useGetProjectsInfinite(
    sessionToken,
    projectsParams,
  )
  return (
    <DetailsView
      sessionToken={sessionToken}
      entities={data ? data.pages.map(page => page.results).flat() : []}
      queryStatus={status}
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      showVersionSelection={showVersionSelection}
      selectMultiple={selectMultiple}
      selected={selected}
      showTypes={includeTypes}
      selectableTypes={selectableTypes}
      toggleSelection={toggleSelection}
    ></DetailsView>
  )
}
