import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer'
import { SynapseClient } from '../..'
import SortIcon from '../../assets/icons/Sort'
import { formatDate } from '../../utils/functions/DateFormatter'
import { SYNAPSE_ENTITY_ID_REGEX } from '../../utils/functions/RegularExpressions'
import {
  getEntityTypeFromHeader,
  isVersionableEntityType,
} from '../../utils/functions/EntityTypeUtils'
import useGetEntityBundle from '../../utils/hooks/SynapseAPI/useEntityBundle'
import { useListState } from '../../utils/hooks/useListState'
import {
  Direction,
  EntityHeader,
  ProjectHeader,
  SortBy,
} from '../../utils/synapseTypes'
import { EntityType } from '../../utils/synapseTypes/EntityType'
import { GetProjectsParameters } from '../../utils/synapseTypes/GetProjectsParams'
import { Hit, SearchQuery } from '../../utils/synapseTypes/Search'
import { VersionInfo } from '../../utils/synapseTypes/VersionInfo'
import { EntityBadge } from '../EntityBadge'
import { Checkbox } from '../widgets/Checkbox'
import { RadioGroup } from '../widgets/RadioGroup'
import { EntityIdAndVersion } from './EntityFinder'
import { getIconForEntityType } from './EntityFinderTreeView'
import useTraceUpdate from '../../utils/hooks/useTraceUpdate'
import useGetEntityChildren from '../../utils/hooks/SynapseAPI/useGetEntityChildren'

type DetailsViewRowProps = {
  sessionToken: string
  entityHeader: EntityHeader | ProjectHeader | Hit
  isSelected: boolean
  disabled: boolean
  hidden: boolean
  showVersionColumn: boolean
  showSelectButton: 'checkbox' | 'radio' | 'none'
  onSelect: (entity: EntityIdAndVersion) => void
  onDeselect: (entity: EntityIdAndVersion) => void
}

const DetailsViewRow: React.FunctionComponent<DetailsViewRowProps> = ({
  sessionToken,
  entityHeader,
  isSelected, //consider collapsing selected, hidden, and disabled because they are mutually exclusive
  disabled,
  hidden,
  showVersionColumn,
  showSelectButton: selectButtonType,
  onSelect,
  onDeselect,
}) => {
  const [versions, setVersions] = useState<VersionInfo[]>()
  const [currentSelectedVersion, setCurrentSelectedVersion] = useState<number>()
  const { ref, inView } = useInView({
    triggerOnce: false,
  })

  const isVersionableEntity = isVersionableEntityType(
    getEntityTypeFromHeader(entityHeader),
  )

  const { data: bundle } = useGetEntityBundle(
    sessionToken,
    entityHeader.id,
    {
      includeEntity: true,
      includeAnnotations: true,
      includeBenefactorACL: true,
      includePermissions: true,
      includeRootWikiId: true,
      includeThreadCount: true,
    },
    undefined,
    {
      enabled: inView,
      staleTime: 10000,
    },
  )

  useEffect(() => {
    if (inView && isSelected && versions === undefined) {
      SynapseClient.getEntityVersions(sessionToken, entityHeader.id).then(
        response => {
          setVersions(response.results)
        },
      )
    }
  }, [inView, isSelected])

  return (
    <tr
      ref={ref}
      className={`EntityFinderDetailsView__Row${
        isSelected ? ' EntityFinderDetailsView__Row__Selected' : ''
      }${disabled ? ' EntityFinderDetailsView__Row__Disabled' : ''}`}
      style={hidden ? { display: 'none' } : {}}
      onClick={() => {
        if (!disabled) {
          if (isSelected) {
            onDeselect({
              entityId: entityHeader.id,
              entityVersion: currentSelectedVersion,
            })
          } else {
            onSelect({
              entityId: entityHeader.id,
              entityVersion: currentSelectedVersion,
            })
          }
        }
      }}
    >
      {selectButtonType !== 'none' && (
        <td className="IsSelectedColumn">
          {!disabled && selectButtonType === 'checkbox' && (
            <Checkbox
              label=""
              id=""
              className="SRC-pointer-events-none"
              checked={isSelected}
              onChange={() => {}}
            />
          )}{' '}
          {!disabled && selectButtonType === 'radio' && (
            <RadioGroup
              className="SRC-pointer-events-none"
              options={[{ label: '', value: 'true' }]}
              value={isSelected.toString()}
              id=""
              onChange={() => {}}
            />
          )}
        </td>
      )}

      <td className="EntityIconColumn">
        {getIconForEntityType(getEntityTypeFromHeader(entityHeader))}
      </td>

      <td className="NameColumn">{entityHeader.name}</td>
      <td className="AccessColumn">
        {bundle && <EntityBadge entityId={entityHeader.id} bundle={bundle} />}
      </td>
      <td className="IdColumn">{entityHeader.id}</td>
      <td className="CreatedOnColumn">
        {bundle && formatDate(moment(bundle.entity!.modifiedOn))}

        {/* TODO: Gotta get from bundle for project header apparently */}
        {/* {moment(entityHeader.createdOn).format('YYYY-MM-DD h:mm A')} */}
      </td>
      <td className="ModifiedOnColumn">
        {bundle && formatDate(moment(bundle.entity!.modifiedOn))}
      </td>
      {showVersionColumn && (
        <td className="VersionColumn">
          {isSelected &&
            isVersionableEntity &&
            versions &&
            versions.length > 0 && (
              <Form.Control
                size="sm"
                as="select"
                value={currentSelectedVersion}
                onClick={(event: any) => {
                  event.stopPropagation()
                  const version = parseInt(event.target.value)
                  setCurrentSelectedVersion(version)
                  onSelect({
                    entityId: entityHeader.id,
                    entityVersion: version,
                  })
                }}
                onChange={event => {
                  const version = parseInt(event.target.value)
                  setCurrentSelectedVersion(version)
                  onSelect({
                    entityId: entityHeader.id,
                    entityVersion: version,
                  })
                }}
              >
                {versions?.map((version, index) => {
                  return (
                    <option
                      key={version.versionNumber}
                      value={version.versionNumber}
                    >
                      Version {version.versionNumber}
                      {index === 0 ? ' (Current)' : ''}
                    </option>
                  )
                })}
              </Form.Control>
            )}
        </td>
      )}
    </tr>
  )
}

// Defines the behavior of the view
export enum EntityFinderViewConfigurationType {
  HEADER_LIST, // simply displays one or more entity headers. incompatible with pagination
  PARENT_CONTAINER, // retrieve the children for a given entity ID
  USER_PROJECTS, // retrieve the user's projects (using the parameters)
  USER_FAVORITES, // retrieve the user's favorites (using the parameters)
  ENTITY_SEARCH, // Search for an entity
}

export type EntityFinderDetailsViewConfiguration = {
  type: EntityFinderViewConfigurationType
  headerList?: (EntityHeader | ProjectHeader)[]
  parentContainerParams?: {
    parentContainerId: string
  }
  getProjectParams?: GetProjectsParameters
  query?: SearchQuery
}

/**
 * Must supply either parentContainer OR entities
 */
export type DetailsViewProps = {
  sessionToken: string
  configuration: EntityFinderDetailsViewConfiguration
  showVersionSelection: boolean
  selectMultiple: boolean
  selected: EntityIdAndVersion[] // synId(s)
  showTypes: EntityType[]
  selectableTypes: EntityType[]
  onSelect: (entity: EntityIdAndVersion) => void
  onDeselect: (entity: EntityIdAndVersion) => void
}

export const DetailsView: React.FunctionComponent<DetailsViewProps> = ({
  sessionToken,
  configuration,
  showVersionSelection,
  selectMultiple,
  selected,
  showTypes,
  selectableTypes,
  onSelect,
  onDeselect,
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const {
    list: entities,
    appendToList: appendEntities,
    setList: setEntities,
  } = useListState<EntityHeader | ProjectHeader | Hit>([])
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.NAME)
  const [sortDirection, setSortDirection] = useState<Direction>(Direction.ASC)
  const [nextPageToken, setNextPageToken] = useState<string | null>(null)
  const [loadNextPage, setLoadNextPage] = useState(true)
  const canSort =
    configuration.type === EntityFinderViewConfigurationType.PARENT_CONTAINER

  // TODO: consider converting the view to its own component
  // Each of these contexts/configurations would get its own component that uses the view component.
  // OR maybe each of these configurations should be a hook?
  const getEntities = async (): Promise<{
    entities: (EntityHeader | ProjectHeader | Hit)[]
    nextPageToken: string | null
  }> => {
    switch (configuration.type) {
      case EntityFinderViewConfigurationType.HEADER_LIST: {
        return { entities: configuration.headerList!, nextPageToken: null }
      }
      case EntityFinderViewConfigurationType.PARENT_CONTAINER: {
        const response = await SynapseClient.getEntityChildren(
          {
            parentId: configuration.parentContainerParams!.parentContainerId,
            includeTypes: showTypes,
            sortBy: sortBy,
            sortDirection: sortDirection,
            nextPageToken: nextPageToken,
          },
          sessionToken,
        )

        return {
          entities: response.page,
          nextPageToken: response.nextPageToken,
        }
      }
      case EntityFinderViewConfigurationType.USER_PROJECTS: {
        const response = await SynapseClient.getMyProjects(
          sessionToken,
          configuration.getProjectParams,
        )
        return {
          entities: response.results,
          nextPageToken: response.nextPageToken,
        }
      }
      case EntityFinderViewConfigurationType.USER_FAVORITES: {
        const response = await SynapseClient.getUserFavorites(sessionToken)
        return { entities: response.results, nextPageToken: null }
      }
      case EntityFinderViewConfigurationType.ENTITY_SEARCH: {
        const synIdMatch = configuration.query!.queryTerm[0].match(
          SYNAPSE_ENTITY_ID_REGEX,
        )

        if (configuration.query?.queryTerm[0] && synIdMatch) {
          const response = await SynapseClient.getEntityHeader(
            [
              {
                targetId: synIdMatch[1],
                targetVersionNumber: synIdMatch[2]
                  ? parseInt(synIdMatch[2])
                  : undefined,
              },
            ],
            sessionToken,
          )
          return { entities: response.results, nextPageToken: null }
        } else {
          const response = await SynapseClient.searchEntities(
            configuration.query!,
            sessionToken,
          )
          return {
            entities: response.hits,
            nextPageToken: null,
          }
        }
      }
      default: {
        console.log('No Configuration Type Specified')
        // TODO Error
        return { entities: [], nextPageToken: null }
      }
    }
  }

  useTraceUpdate({
    sessionToken,
    configuration,
    showVersionSelection,
    selectMultiple,
    selected,
    showTypes,
    selectableTypes,
    onSelect,
    onDeselect,
  })

  // Deep compare because the entity filter may change but its contents may not
  useEffect(() => {
    setEntities([])
    setNextPageToken(null)
    setIsLoading(false)
    setLoadNextPage(true)
  }, [configuration, sortBy, sortDirection])

  useEffect(() => {
    if (loadNextPage && !isLoading) {
      setIsLoading(true)
      setLoadNextPage(false)

      getEntities().then(result => {
        appendEntities(...result.entities)
        setNextPageToken(result.nextPageToken)
        setIsLoading(false)
      })
    }
  }, [loadNextPage, nextPageToken, isLoading])

  // To trigger loading the next page
  // const { ref, inView } = useInView({
  //   triggerOnce: true,
  //   rootMargin: '500px',
  // })

  return (
    <div
      className="EntityFinderDetailsView"
      style={{ width: '100%', overflow: 'auto' }}
    >
      <table style={{ width: '100%' }}>
        <thead>
          <tr className="EntityFinderDetailsView__HeaderRow">
            <th className="EntityIconColumn"></th>
            <th className="IsSelectedColumn"></th>
            <th className="NameColumn">
              <span>Name</span>
              <span>
                {/* TODO: Refactor to reduce code duplication and cache the entity bundle results. */}
                {canSort && (
                  <SortIcon
                    style={{ float: 'right', height: '20px' }}
                    active={sortBy === SortBy.NAME}
                    direction={
                      sortBy === SortBy.NAME ? sortDirection : Direction.DESC
                    }
                    onClick={() => {
                      if (sortBy === SortBy.NAME) {
                        setSortDirection(
                          sortDirection === Direction.ASC
                            ? Direction.DESC
                            : Direction.ASC,
                        )
                      } else {
                        setSortBy(SortBy.NAME)
                        setSortDirection(Direction.DESC)
                      }
                    }}
                  />
                )}
              </span>
            </th>
            <th className="AccessColumn"></th>
            <th className="IdColumn">ID</th>
            <th className="CreatedOnColumn">
              <span>Created On</span>
              <span>
                {canSort && (
                  <SortIcon
                    style={{ float: 'right', height: '20px' }}
                    active={sortBy === SortBy.CREATED_ON}
                    direction={
                      sortBy === SortBy.CREATED_ON
                        ? sortDirection
                        : Direction.DESC
                    }
                    onClick={() => {
                      if (sortBy === SortBy.CREATED_ON) {
                        setSortDirection(
                          sortDirection === Direction.ASC
                            ? Direction.DESC
                            : Direction.ASC,
                        )
                      } else {
                        setSortBy(SortBy.CREATED_ON)
                        setSortDirection(Direction.DESC)
                      }
                    }}
                  />
                )}{' '}
              </span>
            </th>
            <th className="ModifiedOnColumn">
              <span>Modified On</span>
              <span>
                {canSort && (
                  <SortIcon
                    style={{ float: 'right', height: '20px' }}
                    active={sortBy === SortBy.MODIFIED_ON}
                    direction={
                      sortBy === SortBy.MODIFIED_ON
                        ? sortDirection
                        : Direction.DESC
                    }
                    onClick={() => {
                      if (sortBy === SortBy.MODIFIED_ON) {
                        setSortDirection(
                          sortDirection === Direction.ASC
                            ? Direction.DESC
                            : Direction.ASC,
                        )
                      } else {
                        setSortBy(SortBy.MODIFIED_ON)
                        setSortDirection(Direction.DESC)
                      }
                    }}
                  />
                )}
              </span>
            </th>
            <th className="VersionColumn">Version</th>
          </tr>
        </thead>
        <tbody className="EntityFinderDetailsView__TableBody">
          {isLoading && entities.length === 0 ? (
            <tr className="spinner" />
          ) : (
            entities?.map(entity => {
              return (
                <DetailsViewRow
                  key={entity.id}
                  sessionToken={sessionToken}
                  entityHeader={entity}
                  hidden={!showTypes.includes(getEntityTypeFromHeader(entity))}
                  disabled={
                    !selectableTypes.includes(getEntityTypeFromHeader(entity))
                  }
                  showVersionColumn={showVersionSelection}
                  showSelectButton={selectMultiple ? 'checkbox' : 'radio'}
                  isSelected={selected.map(e => e.entityId).includes(entity.id)}
                  onSelect={e => {
                    onSelect(e)
                  }}
                  onDeselect={e => {
                    onDeselect(e)
                  }}
                ></DetailsViewRow>
              )
            })
          )}
          {
            /* Just for pagination: */
            // !loadNextPage && nextPageToken && !isLoading && <tr ref={ref} />
          }
        </tbody>
      </table>
    </div>
  )
}
