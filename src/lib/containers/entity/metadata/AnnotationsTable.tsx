import React from 'react'
import { isEmpty } from 'lodash-es'
import {
  convertToEntityType,
  entityTypeToFriendlyName,
} from '../../../utils/functions/EntityTypeUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../utils/functions/getEndpoint'
import { useGetSchemaBinding } from '../../../utils/hooks/SynapseAPI/useSchema'
import { useSynapseContext } from '../../../utils/SynapseContext'
import { useGetJson } from '../../../utils/hooks/SynapseAPI/useEntity'

export type AnnotationsTableProps = {
  entityId: string
}

export const AnnotationsTable: React.FC<AnnotationsTableProps> = ({
  entityId,
}) => {
  /**
   * Currently, schema/validation features are only shown in experimental mode.
   */
  const { isInExperimentalMode } = useSynapseContext()

  const { entityMetadata, annotations } = useGetJson(entityId)

  const { data: boundSchema } = useGetSchemaBinding(entityId, {
    enabled: isInExperimentalMode,
  })

  return entityMetadata && annotations ? (
    <>
      {isEmpty(annotations) ? (
        <div className="placeholder">
          This{' '}
          {entityTypeToFriendlyName(
            convertToEntityType(entityMetadata.concreteType),
          )}{' '}
          has no annotations.
        </div>
      ) : null}
      <table className="AnnotationsTable">
        <tbody>
          {Object.keys(annotations).map((key: string) => {
            return (
              <tr key={key} className="AnnotationsTable__Row">
                <td className="AnnotationsTable__Row__Key">{key}</td>
                <td className="AnnotationsTable__Row__Value">
                  {Array.isArray(annotations[key])
                    ? (annotations[key] as
                        | string[]
                        | number[]
                        | boolean[]).join(', ')
                    : annotations[key]!.toString()}
                </td>
              </tr>
            )
          })}
          {boundSchema && isInExperimentalMode ? (
            <tr className="AnnotationsTable__Row">
              <td className="AnnotationsTable__Row__Key Schema">
                Validation Schema
              </td>
              <td className="AnnotationsTable__Row__Value">
                <a
                  href={`${getEndpoint(
                    BackendDestinationEnum.REPO_ENDPOINT,
                  )}repo/v1/schema/type/registered/${
                    boundSchema.jsonSchemaVersionInfo.$id
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {boundSchema.jsonSchemaVersionInfo.schemaName}
                </a>
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
    </>
  ) : null
}
