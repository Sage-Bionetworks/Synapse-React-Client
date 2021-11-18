import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { noop } from 'lodash-es'
import React from 'react'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'
import { AUTHENTICATED_USERS } from '../../utils/SynapseConstants'
import {
  ColumnModel,
  ColumnType,
  FileHandleAssociateType,
  SelectColumn,
  UserGroupHeader,
  UserProfile,
} from '../../utils/synapseTypes'
import { EntityHeader } from '../../utils/synapseTypes/EntityHeader'
import {
  CardLink,
  ColumnSpecifiedLink,
  MarkdownLink,
} from '../CardContainerLogic'
import DirectDownload from '../DirectDownload'
import EntityIdList from '../EntityIdList'
import { EntityLink } from '../EntityLink'
import { SynapseCardLabel } from '../GenericCard'
import { NOT_SET_DISPLAY_VALUE } from '../table/SynapseTableConstants'
import UserCard from '../UserCard'
import { ElementWithTooltip } from '../widgets/ElementWithTooltip'

type SynapseTableCellProps = {
  columnType: ColumnType
  columnValue: string
  isBold: string
  columnLinkConfig?: CardLink | MarkdownLink | ColumnSpecifiedLink
  mapEntityIdToHeader: Record<string, EntityHeader>
  mapUserIdToHeader: Partial<UserGroupHeader & UserProfile>
  rowIndex?: number
  columnName: string
  selectColumns?: SelectColumn[]
  columnModels?: ColumnModel[]
  tableEntityId?: string
  rowData: string[]
}

export const SynapseTableCell: React.FC<SynapseTableCellProps> = ({
  columnType,
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
  rowData,
}) => {
  const isShortString = (s: string, maxCharCount = 20): boolean => {
    return !s || s.length <= maxCharCount
  }
  if (!columnValue) {
    return (
      <p className="SRC-center-text SRC-inactive"> {NOT_SET_DISPLAY_VALUE}</p>
    )
  }

  if (columnLinkConfig) {
    return (
      <SynapseCardLabel
        value={columnValue}
        columnName={columnName}
        selectColumns={selectColumns}
        columnModels={columnModels}
        isHeader={false}
        labelLink={columnLinkConfig}
        rowData={rowData}
      />
    )
  }

  switch (columnType) {
    case ColumnType.ENTITYID:
      if (
        Object.prototype.hasOwnProperty.call(mapEntityIdToHeader, columnValue)
      ) {
        return (
          <EntityLink
            entity={mapEntityIdToHeader[columnValue]}
            className={`${isBold}`}
          />
        )
      }
      break
    case ColumnType.DATE_LIST: {
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
    case ColumnType.BOOLEAN_LIST: {
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
    case ColumnType.FILEHANDLEID:
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
    case ColumnType.ENTITYID_LIST: {
      const jsonData: string[] = JSON.parse(columnValue)
      return <EntityIdList entityIdList={jsonData} />
    }
    // handle other list types
    case ColumnType.STRING_LIST:
    case ColumnType.INTEGER_LIST:
    case ColumnType.USERID_LIST: {
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
    case ColumnType.DATE:
      return (
        <p className={isBold}>
          {new Date(Number(columnValue)).toLocaleString()}
        </p>
      )

    case ColumnType.USERID:
      if (
        Object.prototype.hasOwnProperty.call(mapUserIdToHeader, columnValue)
      ) {
        const { ownerId, userName } = mapUserIdToHeader[columnValue]
        if (mapUserIdToHeader[columnValue].isIndividual === false) {
          // isUserGroupHeader
          const icon =
            userName === AUTHENTICATED_USERS ? 'globe-americas' : 'users'
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
              href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Team:${ownerId}`}
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
      }
      break
    case ColumnType.STRING:
    case ColumnType.DOUBLE:
    case ColumnType.INTEGER:
    case ColumnType.BOOLEAN:
    case ColumnType.LINK:
    case ColumnType.LARGETEXT: {
      const isShort = isShortString(columnValue)
      if (isShort) {
        return <p className={isBold}> {columnValue}</p>
      } else {
        return (
          <div className={isBold}>
            <ElementWithTooltip
              tooltipText={columnValue}
              callbackFn={noop}
              idForToolTip={`${columnName}_${rowIndex}`}
            >
              <p className={isBold}> {columnValue}</p>
            </ElementWithTooltip>
          </div>
        )
      }
    }
    default:
      console.warn(
        `ColumnType ${columnType} has unspecified handler. Rendering the column value.`,
      )
      return <p className={isBold}>{columnValue}</p>
  }
  // We can reach this if we don't get a mapping of IDs to entities or principals.
  // TODO: If we don't have a id:data mapping, we should render a component that can fetch the required data, rather than breaking from the case.
  return <p className={isBold}>{columnValue}</p>
}
