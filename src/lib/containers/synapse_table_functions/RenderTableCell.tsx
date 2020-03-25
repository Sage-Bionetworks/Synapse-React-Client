import * as React from 'react'
import { Dictionary } from '../table/SynapseTable'
import { EntityHeader } from '../../utils/synapseTypes/EntityHeader'
import { EntityLink } from '../EntityLink'
import MarkdownSynapse from '../MarkdownSynapse'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UserCard from '../UserCard'
import { ElementWithTooltip } from '../widgets/ElementWithTooltip'
import { AUTHENTICATED_USERS } from '../../utils/SynapseConstants'
import { noop } from 'lodash-es'

// Render table cell, supports Entity's and User Icons
export default function RenderTableCell({
  entityColumnIndicies,
  userColumnIndicies,
  dateColumnIndicies,
  dateListColumnIndicies,
  booleanListColumnIndicies,
  otherListColumnIndicies,
  colIndex,
  columnValue,
  isBold,
  mapEntityIdToHeader,
  mapUserIdToHeader,
  isMarkdownColumn,
  rowIndex,
}: {
  entityColumnIndicies: number[]
  userColumnIndicies: number[]
  dateColumnIndicies: number[]
  dateListColumnIndicies: number[]
  booleanListColumnIndicies: number[]
  otherListColumnIndicies: number[]
  colIndex: number
  columnValue: string
  isBold: string
  mapEntityIdToHeader: Dictionary<EntityHeader>
  mapUserIdToHeader: Dictionary<any>
  isMarkdownColumn: boolean
  rowIndex?: number
}): React.ReactNode {
  const getShortString = (
    longString: string,
    maxCharCount = 20,
  ): [string, boolean] => {
    if (!longString || longString.length <= maxCharCount) {
      return [longString, false]
    } else {
      return [longString.substr(0, maxCharCount), true]
    }
  }
  if (!columnValue) {
    return <></>
  }
  if (isMarkdownColumn) {
    return <MarkdownSynapse renderInline={true} markdown={columnValue} />
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
    return jsonData.map((val: number, index: number) => {
      return (
        <span className={isBold}>
          {new Date(val).toLocaleString()}
          {index !== jsonData.length - 1 ? ', ' : ''}
        </span>
      )
    })
  }
  if (booleanListColumnIndicies.includes(colIndex)) {
    const jsonData: boolean[] = JSON.parse(columnValue)
    return jsonData.map((val: boolean, index: number) => {
      return (
        <span className={isBold}>
          {val ? 'true' : 'false'}
          {index !== jsonData.length - 1 ? ', ' : ''}
        </span>
      )
    })
  }
  if (otherListColumnIndicies.includes(colIndex)) {
    const jsonData: string[] = JSON.parse(columnValue)
    return jsonData.map((val: string, index: number) => {
      return (
        <span className={isBold}>
          {val}
          {index !== jsonData.length - 1 ? ', ' : ''}
        </span>
      )
    })
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
    const [displayString, isShortened] = getShortString(columnValue)
    if (!isShortened) {
      return <p className={isBold}> {columnValue}</p>
    } else {
      return (
        <p className={isBold}>
          <ElementWithTooltip
            tooltipText={columnValue}
            callbackFn={noop}
            idForToolTip={`${colIndex}_${rowIndex}`}
          >
            <p className={isBold}> {displayString}...</p>
          </ElementWithTooltip>
        </p>
      )
    }
  }
}
