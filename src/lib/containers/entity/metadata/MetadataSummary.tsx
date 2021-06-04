import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { formatDate } from '../../../utils/functions/DateFormatter'
import { entityTypeToFriendlyName } from '../../../utils/functions/EntityTypeUtils'
import { getLocationName } from '../../../utils/functions/FileHandleUtils'
import {
  EntityBundle,
  EntityType,
  FileEntity,
} from '../../../utils/synapseTypes'
import UserCard from '../../UserCard'

export type MetadataSummaryProps = {
  entityBundle: EntityBundle
}

export const MetadataSummaryBody: React.FC<MetadataSummaryProps> = ({
  entityBundle,
}) => {
  const [fileLocationName, setFileLocationName] = useState<string>()

  useEffect(() => {
    if (entityBundle.entityType === EntityType.FILE) {
      const dataFileHandle = entityBundle.fileHandles?.filter(
        fh => fh.id === (entityBundle.entity as FileEntity).dataFileHandleId,
      )[0]

      if (dataFileHandle) {
        setFileLocationName(getLocationName(dataFileHandle))
      }
    }
  }, [entityBundle])

  return (
    <table className="MetadataTable">
      <tbody>
        <tr className="MetadataTable__Row">
          <td className="MetadataTable__Row__Key">Name</td>
          <td className="MetadataTable__Row__Value">
            {entityBundle.entity?.name}
          </td>
        </tr>
        <tr className="MetadataTable__Row">
          <td className="MetadataTable__Row__Key">Type</td>
          <td className="MetadataTable__Row__Value">
            {entityTypeToFriendlyName(entityBundle.entityType!)}
          </td>
        </tr>
        <tr className="MetadataTable__Row">
          <td className="MetadataTable__Row__Key">Synapse ID</td>
          <td className="MetadataTable__Row__Value">
            {entityBundle.entity?.id}
          </td>
        </tr>
        {fileLocationName && (
          <tr className="MetadataTable__Row">
            <td className="MetadataTable__Row__Key">Storage</td>
            <td className="MetadataTable__Row__Value">{fileLocationName}</td>
          </tr>
        )}
        <tr className="MetadataTable__Row">
          <td className="MetadataTable__Row__Key">Last Modified On</td>
          <td className="MetadataTable__Row__Value">
            {formatDate(moment(entityBundle.entity?.modifiedOn))}
          </td>
        </tr>
        <tr className="MetadataTable__Row">
          <td className="MetadataTable__Row__Key">Created On</td>
          <td className="MetadataTable__Row__Value">
            {formatDate(moment(entityBundle.entity?.createdOn))}
          </td>
        </tr>
        <tr className="MetadataTable__Row">
          <td className="MetadataTable__Row__Key">Modified By</td>
          <td className="MetadataTable__Row__Value">
            <UserCard
              size="SMALL USER CARD"
              ownerId={entityBundle.entity?.modifiedBy}
            />
          </td>
        </tr>
        <tr className="MetadataTable__Row">
          <td className="MetadataTable__Row__Key">Created By</td>
          <td className="MetadataTable__Row__Value">
            <UserCard
              size="SMALL USER CARD"
              ownerId={entityBundle.entity?.createdBy}
            />
          </td>
        </tr>
      </tbody>
    </table>
  )
}
