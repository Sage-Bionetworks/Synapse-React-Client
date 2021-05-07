import * as React from 'react'
import { Dictionary } from '../table/SynapseTable'
import { EntityHeader } from '../../utils/synapseTypes/EntityHeader'
import { EntityLink } from '../EntityLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UserCard from '../UserCard'
import { ElementWithTooltip } from '../widgets/ElementWithTooltip'
import { AUTHENTICATED_USERS } from '../../utils/SynapseConstants'
import { noop } from 'lodash-es'
import { MarkdownLink, CardLink } from '../CardContainerLogic'
import { renderLabel } from '../GenericCard'
import {
  SelectColumn,
  ColumnModel,
  FileHandleAssociateType,
} from '../../utils/synapseTypes'
import { NOT_SET_DISPLAY_VALUE } from '../table/SynapseTableConstants'
import DirectDownload from '../DirectDownload'
import EntityIdList from '../EntityIdList'

// Render table cell, supports Entity's and User Icons
export const renderTableCell = ({
  entityColumnIndicies,
  userColumnIndicies,
  dateColumnIndicies,
  dateListColumnIndicies,
  booleanListColumnIndicies,
  fileHandleIdColumnIndicies,
  entityIdListColumnIndicies,
  otherListColumnIndicies,
  colIndex,
  columnValue,
  isBold,
  mapEntityIdToHeader,
  mapUserIdToHeader,
  columnLinkConfig,
  rowIndex,
  columnName,
  selectColumns,
  columnModels,
  tableEntityId,
}: {
  entityColumnIndicies: number[]
  userColumnIndicies: number[]
  dateColumnIndicies: number[]
  dateListColumnIndicies: number[]
  booleanListColumnIndicies: number[]
  fileHandleIdColumnIndicies: number[]
  entityIdListColumnIndicies: number[]
  otherListColumnIndicies: number[]
  colIndex: number
  columnValue: string
  isBold: string
  mapEntityIdToHeader: Dictionary<EntityHeader>
  mapUserIdToHeader: Dictionary<any>
  columnLinkConfig?: MarkdownLink | CardLink
  rowIndex?: number
  columnName: string
  selectColumns: SelectColumn[] | undefined
  columnModels: ColumnModel[] | undefined
  tableEntityId?: string
}): React.ReactNode => {
  const isShortString = (s: string, maxCharCount = 20): boolean => {
    return !s || s.length <= maxCharCount
  }
  if (!columnValue) {
    return (
      <p className="SRC-center-text SRC-inactive"> {NOT_SET_DISPLAY_VALUE}</p>
    )
  }
  if (columnLinkConfig) {
    return renderLabel({
      value: columnValue,
      columnName,
      selectColumns,
      columnModels,
      isHeader: false,
      labelLink: columnLinkConfig,
    })
  }
  if (
    entityColumnIndicies.includes(colIndex) &&
    Object.prototype.hasOwnProperty.call(mapEntityIdToHeader, columnValue)
  ) {
    return (
      <EntityLink
        entityHeader={mapEntityIdToHeader[columnValue]}
        className={isBold}
      />
    )
  }
  if (dateListColumnIndicies.includes(colIndex)) {
    const jsonData: number[] = JSON.parse(columnValue)
    return (
      <p>
        {jsonData.map((val: number, index: number) => {
          return (
            <span key={index} className={isBold}>
              {new Date(val).toLocaleString()}
              {index !== jsonData.length - 1 ? ', ' : ''}
            </span>
          )
        })}{' '}
      </p>
    )
  }
  if (booleanListColumnIndicies.includes(colIndex)) {
    const jsonData: boolean[] = JSON.parse(columnValue)
    return (
      <p>
        {jsonData.map((val: boolean, index: number) => {
          return (
            <span key={index} className={isBold}>
              {val ? 'true' : 'false'}
              {index !== jsonData.length - 1 ? ', ' : ''}
            </span>
          )
        })}
      </p>
    )
  }

  // If it's a file from a table view
  if (fileHandleIdColumnIndicies.includes(colIndex)) {
    return (
      <>
        <DirectDownload
          associatedObjectId={tableEntityId!}
          associatedObjectType={FileHandleAssociateType.TableEntity}
          fileHandleId={columnValue}
          displayFileName={true}
        />
      </>
    )
  }

  // If it's a list of entity ids
  if (entityIdListColumnIndicies.includes(colIndex)) {
    const jsonData: string[] = JSON.parse(columnValue)
    return <EntityIdList entityIdList={jsonData} />
  }

  if (otherListColumnIndicies.includes(colIndex)) {
    const jsonData: string[] = JSON.parse(columnValue)
    return (
      <p>
        {jsonData.map((val: string, index: number) => {
          return (
            <span key={val} className={isBold}>
              {val}
              {index !== jsonData.length - 1 ? ', ' : ''}
            </span>
          )
        })}
      </p>
    )
  }
  if (dateColumnIndicies.includes(colIndex)) {
    return (
      <p className={isBold}>{new Date(Number(columnValue)).toLocaleString()}</p>
    )
  } else if (
    userColumnIndicies.includes(colIndex) &&
    Object.prototype.hasOwnProperty.call(mapUserIdToHeader, columnValue)
  ) {
    const { ownerId, userName } = mapUserIdToHeader[columnValue]
    if (mapUserIdToHeader[columnValue].isIndividual === false) {
      // isUserGroupHeader
      const icon = userName === AUTHENTICATED_USERS ? 'globe-americas' : 'users'
      if (userName === AUTHENTICATED_USERS) {
        return (
          <span>
            <FontAwesomeIcon icon={icon} /> All registered Synapse users
          </span>
        )
      }
      return (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.synapse.org/#!Team:${ownerId}`}
        >
          <FontAwesomeIcon icon={icon} /> {userName}
        </a>
      )
    } else {
      // isUserCard
      return (
        <UserCard
          userProfile={mapUserIdToHeader[columnValue]}
          preSignedURL={mapUserIdToHeader[columnValue].clientPreSignedURL}
          size={'SMALL USER CARD'}
        />
      )
    }
  } else {
    const isShort = isShortString(columnValue)
    if (isShort) {
      return <p className={isBold}> {columnValue}</p>
    } else {
      return (
        <div className={isBold}>
          <ElementWithTooltip
            tooltipText={columnValue}
            callbackFn={noop}
            idForToolTip={`${colIndex}_${rowIndex}`}
          >
            <p className={isBold}> {columnValue}</p>
          </ElementWithTooltip>
        </div>
      )
    }
  }
}
