import React, { useEffect, useState } from 'react'
import useDeepCompareEffect from 'use-deep-compare-effect'
import { SynapseClient } from '../..'
import {
  Direction,
  EntityBundle,
  EntityHeader,
  SortBy,
  SortItem,
} from '../../utils/synapseTypes'
import { EntityType } from '../../utils/synapseTypes/EntityType'
import { EntityBadge } from '../EntityBadge'
import { getIconForEntityType } from './EntityFinderTreeView'
import moment from 'moment'
import { useInView } from 'react-intersection-observer'
import SortIcon from '../../assets/icons/Sort'

type DetailsViewRowProps = {
  sessionToken: string
  entityHeader: EntityHeader
  isSelected: boolean
  onClick: (entityId: string) => void
}

const DetailsViewRow: React.FunctionComponent<DetailsViewRowProps> = ({
  sessionToken,
  entityHeader,
  isSelected,
  onClick,
}) => {
  const [bundle, setBundle] = useState<EntityBundle>()
  const { ref, inView } = useInView({
    triggerOnce: true,
  })
  useEffect(() => {
    if (inView) {
      SynapseClient.getEntityBundleV2(
        entityHeader.id,
        {
          includeAnnotations: true,
          includeBenefactorACL: true,
          includePermissions: true,
          includeRootWikiId: true,
          includeThreadCount: true,
        },
        undefined,
        sessionToken,
      ).then(response => {
        setBundle(response)
      })
    }
  }, [inView])

  return (
    <tr
      ref={ref}
      className={`EntityFinderDetailsView__Row${
        isSelected ? ' EntityFinderDetailsView__Row__Selected' : ''
      }`}
      onClick={() => onClick(entityHeader.id)}
    >
      <td className="EntityIconColumn">
        {getIconForEntityType(entityHeader.type)}
      </td>

      <td className="NameColumn">{entityHeader.name}</td>
      <td className="AccessColumn">
        {bundle && <EntityBadge entityId={entityHeader.id} bundle={bundle} />}
      </td>
      <td className="IdColumn">{entityHeader.id}</td>
      <td className="CreatedOnColumn">
        {moment(entityHeader.createdOn).format('YYYY-MM-DD h:mm A')}
      </td>
      <td className="ModifiedOnColumn">
        {moment(entityHeader.modifiedOn).format('YYYY-MM-DD h:mm A')}
      </td>
    </tr>
  )
}

// TODO: The date needs to respect profile settings. Can probably extract to a util function. The web client sets a cookie

export type DetailsViewProps = {
  sessionToken: string
  parentContainer: string // synId
  selected: string[] // synId(s)
  onSelect: (entityId: string) => void
  onDeselect: (entityId: string) => void
  filter: EntityType[] // default []
}

export const DetailsView: React.FunctionComponent<DetailsViewProps> = ({
  sessionToken,
  parentContainer,
  selected,
  onSelect,
  onDeselect,
  filter = [],
}) => {
  const [entities, setEntities] = useState<EntityHeader[]>([])
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.NAME)
  const [sortDirection, setSortDirection] = useState<Direction>(Direction.ASC)
  const [loadNextPage, setLoadNextPage] = useState(true)
  const [nextPageToken, setNextPageToken] = useState<string | null>(null)

  const resetFinder = () => {
    setEntities([])
    setLoadNextPage(true)
    setNextPageToken(null)
  }
  // Deep compare because the entity filter may change but its contents may not
  useDeepCompareEffect(() => {
    if (loadNextPage) {
      setLoadNextPage(false)
      SynapseClient.getEntityChildren(
        {
          parentId: parentContainer,
          includeTypes: filter,
          sortBy: sortBy,
          sortDirection: sortDirection,
          nextPageToken: nextPageToken,
        },
        sessionToken,
      ).then(response => {
        setEntities([...entities, ...response.page])
        if (response.nextPageToken) {
          setLoadNextPage(true)
          setNextPageToken(response.nextPageToken)
        }
      })
    }
  }, [
    sessionToken,
    parentContainer,
    filter,
    sortBy,
    sortDirection,
    nextPageToken,
  ])

  useEffect(() => {
    resetFinder()
  }, [parentContainer])

  return (
    <div
      className="EntityFinderDetailsView"
      style={{ height: '500px', width: '100%', overflow: 'auto' }}
    >
      <table style={{ width: '100%' }}>
        <thead>
          <tr className="EntityFinderDetailsView__HeaderRow">
            <th className="EntityIconColumn"></th>
            <th className="NameColumn">
              <span>Name</span>
              <span>
                {/* TODO: Refactor to reduce code duplication and cache the entity bundle results. */}
                <SortIcon
                  style={{ float: 'right', height: '20px' }}
                  active={sortBy === SortBy.NAME}
                  direction={
                    sortBy === SortBy.NAME ? sortDirection : Direction.DESC
                  }
                  onClick={() => {
                    resetFinder()
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
              </span>
            </th>
            <th className="AccessColumn"></th>
            <th className="IdColumn">ID</th>
            <th className="CreatedOnColumn">
              <span>Created On</span>
              <span>
                <SortIcon
                  style={{ float: 'right', height: '20px' }}
                  active={sortBy === SortBy.CREATED_ON}
                  direction={
                    sortBy === SortBy.CREATED_ON
                      ? sortDirection
                      : Direction.DESC
                  }
                  onClick={() => {
                    resetFinder()
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
              </span>
            </th>
            <th className="ModifiedOnColumn">
              <span>Modified On</span>
              <span>
                <SortIcon
                  style={{ float: 'right', height: '20px' }}
                  active={sortBy === SortBy.MODIFIED_ON}
                  direction={
                    sortBy === SortBy.MODIFIED_ON
                      ? sortDirection
                      : Direction.DESC
                  }
                  onClick={() => {
                    resetFinder()
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
              </span>
            </th>
          </tr>
        </thead>
        <tbody className="EntityFinderDetailsView__TableBody">
          {entities?.map(entity => {
            return (
              <DetailsViewRow
                key={entity.id}
                sessionToken={sessionToken}
                entityHeader={entity}
                isSelected={selected.includes(entity.id)}
                onClick={entityId => {
                  if (selected.includes(entityId)) {
                    onDeselect(entityId)
                  } else {
                    onSelect(entityId)
                  }
                }}
                //   selectedId={selected}
                //   setSelectedId={(entityId: string) => {
                //     setSelected(entityId)
                //   }}
              ></DetailsViewRow>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
