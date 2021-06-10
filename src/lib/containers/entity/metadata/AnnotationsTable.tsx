import { isEmpty } from 'lodash-es'
import { entityTypeToFriendlyName } from '../../../utils/functions/EntityTypeUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../utils/functions/getEndpoint'
import useGetEntityBundle from '../../../utils/hooks/SynapseAPI/useEntityBundle'
import { useGetSchemaBinding } from '../../../utils/hooks/SynapseAPI/useSchema'
import { useSynapseContext } from '../../../utils/SynapseContext'

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

  const { data: entityBundle } = useGetEntityBundle(entityId)

  const { data: boundSchema } = useGetSchemaBinding(entityId, {
    enabled: isInExperimentalMode,
  })

  return entityBundle ? (
    <>
      {isEmpty(entityBundle.annotations?.annotations) ? (
        <div className="placeholder">
          This {entityTypeToFriendlyName(entityBundle.entityType!)} has no
          annotations.
        </div>
      ) : (
        <table className="AnnotationsTable">
          <tbody>
            {Object.keys(entityBundle.annotations!.annotations).map(
              (key: string) => {
                return (
                  <tr key={key} className="AnnotationsTable__Row">
                    <td className="AnnotationsTable__Row__Key">{key}</td>
                    <td className="AnnotationsTable__Row__Value">
                      {entityBundle.annotations?.annotations[key].value
                        ? entityBundle.annotations?.annotations[key].value
                            .map((v: string | number) => v?.toString())
                            .join(', ')
                        : null}
                    </td>
                  </tr>
                )
              },
            )}
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
      )}
    </>
  ) : null
}

