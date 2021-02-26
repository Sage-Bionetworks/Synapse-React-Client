import React, { useState } from 'react'
import useDeepCompareEffect from 'use-deep-compare-effect'
import {
  EntityHeader,
  EntityType,
  ProjectHeader,
  Reference,
} from '../../../utils/synapseTypes'
import { GetProjectsParameters } from '../../../utils/synapseTypes/GetProjectsParams'
import { SearchQuery } from '../../../utils/synapseTypes/Search'
import { EntityChildrenDetails } from './configurations/EntityChildrenDetails'
import { EntityHeaderListDetails } from './configurations/EntityHeaderListDetails'
import { FavoritesDetails } from './configurations/FavoritesDetails'
import { ProjectListDetails } from './configurations/ProjectListDetails'
import { SearchDetails } from './configurations/SearchDetails'

export enum EntityFinderDetailsConfigurationType {
  HEADER_LIST, // simply displays one or more entity headers. incompatible with pagination
  PARENT_CONTAINER, // retrieve the children for a given entity ID
  USER_PROJECTS, // retrieve the user's projects (using the parameters)
  USER_FAVORITES, // retrieve the user's favorites (using the parameters)
  ENTITY_SEARCH, // Search for an entity
}

export type EntityFinderDetailsConfiguration = {
  type: EntityFinderDetailsConfigurationType
  /** Defined if type is HEADER_LIST */
  headerList?: (EntityHeader | ProjectHeader)[]
  /** Defined if type is PARENT_CONTAINER */
  parentContainerParams?: {
    parentContainerId: string
  }
  /** Defined if type is USER_PROJECTS */
  getProjectParams?: GetProjectsParameters
  /** Defined if type is ENTITY_SEARCH */
  query?: SearchQuery
}

/**
 * These props are set by a parent to this component, but they are not affected by the configuration.
 * We collect them into this type to simplify passing them through to the view.
 */
export type EntityFinderDetailsSharedProps = {
  sessionToken: string
  showVersionSelection: boolean
  selectColumnType: 'checkbox' | 'radio' | 'none'
  includeTypes: EntityType[]
  selected: Reference[] // synId(s)
  selectableTypes: EntityType[]
  toggleSelection: (entity: Reference) => void
}

export type EntityFinderDetailsProps = EntityFinderDetailsSharedProps & {
  configuration: EntityFinderDetailsConfiguration
}

export const EntityFinderDetails: React.FunctionComponent<EntityFinderDetailsProps> = ({
  configuration,
  ...sharedProps
}) => {
  /**
   * This component simply uses the configuration prop to determine which configuration component
   * to use. Each configuration component has its own logic to utilize different Synapse APIs.
   * The configuration components also manage view props that are more tightly-coupled with data,
   * such as pagination and sorting.
   */

  const [component, setComponent] = useState(<div></div>)

  useDeepCompareEffect(() => {
    const getComponentFromConfiguration = (
      configuration: EntityFinderDetailsConfiguration,
    ) => {
      switch (configuration.type) {
        case EntityFinderDetailsConfigurationType.PARENT_CONTAINER:
          return (
            <EntityChildrenDetails
              parentContainerId={
                configuration.parentContainerParams!.parentContainerId
              }
              {...sharedProps}
            />
          )

        case EntityFinderDetailsConfigurationType.HEADER_LIST:
          return (
            <EntityHeaderListDetails
              entityHeaders={configuration.headerList!}
              {...sharedProps}
            />
          )
        case EntityFinderDetailsConfigurationType.USER_FAVORITES:
          return <FavoritesDetails {...sharedProps} />
        case EntityFinderDetailsConfigurationType.ENTITY_SEARCH:
          return (
            <SearchDetails
              searchQuery={configuration.query!}
              {...sharedProps}
            />
          )

        case EntityFinderDetailsConfigurationType.USER_PROJECTS:
          return (
            <ProjectListDetails
              projectsParams={configuration.getProjectParams!}
              {...sharedProps}
            />
          )

        default:
          console.warn(
            'The configuration type does not map to a known view type. No Details view will be rendered. Invalid configuration: ',
            configuration,
          )
          return <div></div>
      }
    }
    setComponent(getComponentFromConfiguration(configuration))
  }, [configuration, sharedProps])

  return component
}
