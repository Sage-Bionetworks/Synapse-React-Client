import { isEmpty } from 'lodash-es'
import React from 'react'
import { entityTypeToFriendlyName } from '../../../utils/functions/EntityTypeUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../utils/functions/getEndpoint'
import { useGetSchemaBinding } from '../../../utils/hooks/SynapseAPI/useSchema'
import { useSynapseContext } from '../../../utils/SynapseContext'
import { EntityBundle } from '../../../utils/synapseTypes'

export type AnnotationsSummaryProps = {
  entityBundle: EntityBundle
}

export const AnnotationsSummaryBody: React.FC<AnnotationsSummaryProps> = ({
  entityBundle,
}) => {
  /**
   * Currently, schema/validation features are only shown in experimental mode.
   */
  const { isInExperimentalMode } = useSynapseContext()

  const entityId = entityBundle.entity!.id!

  const {
    data: boundSchema,
    // error: boundSchemaError,
    // isLoading: isLoadingSchema,
  } = useGetSchemaBinding(entityId, { enabled: isInExperimentalMode })
  //   const {
  //     data: validationResults,
  //     error: validationResultsError,
  //     isLoading: isLoadingValidationResults,
  //   } = useGetValidationResults(entityId, { enabled: isInExperimentalMode })

  //   const { data: schema } = useGetSchema(
  //     boundSchema?.jsonSchemaVersionInfo.$id,
  //     {
  //       enabled: !!boundSchema,
  //     },
  //   )

  return (
    <>
      {isEmpty(entityBundle.annotations!.annotations) ? (
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
                      {entityBundle.annotations?.annotations[key].value}
                    </td>
                  </tr>
                )
              },
            )}
            {boundSchema && (
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
            )}
          </tbody>
        </table>
      )}
      {/* {validationResults && !validationResults.isValid && (
        <Alert
          dismissible={false}
          show={true}
          variant={'danger'}
          transition={false}
        >
          <h4>Schema Validation Errors</h4>
          {validationResults.allValidationMessages.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </Alert>
      )} */}
    </>
  )
}

/**
 * Links to annotations editor
 */
// export const AnnotationsSummaryFooter: React.FC<AnnotationsSummaryProps> = ({
//   entityBundle,
//   onClose,
// }) => {
//   /**
//    * Currently, schema/validation features are only shown in experimental mode.
//    */
//   const { isInExperimentalMode } = useSynapseContext()
//   const [showEditor, setShowEditor] = useState(false)

//   const entityId = entityBundle.entity!.id!
//   const hasEditAccess = entityBundle.permissions!.canEdit

//   const {
//     data: boundSchema,
//     error: boundSchemaError,
//     isLoading: isLoadingSchema,
//   } = useGetSchemaBinding(entityId, { enabled: isInExperimentalMode })
//   const {
//     data: validationResults,
//     error: validationResultsError,
//     isLoading: isLoadingValidationResults,
//   } = useGetValidationResults(entityId, {
//     enabled: !!boundSchema && isInExperimentalMode,
//   })

//   const { data: schema } = useGetSchema(
//     boundSchema?.jsonSchemaVersionInfo.$id,
//     {
//       enabled: !!boundSchema,
//       onSuccess: data => console.log('Retrieved schema:', data),
//     },
//   )
//   return (
//     <>
//       {hasEditAccess && schema && (
//         <>
//           <SchemaDrivenAnnotationEditorModal
//             entityId={entityId}
//             schema={schema}
//             show={showEditor}
//             onHide={() => setShowEditor(false)}
//           />
//           <Button
//             onClick={() => {
//               setShowEditor(true)
//             }}
//             variant="primary"
//           >
//             Edit
//           </Button>
//         </>
//       )}
//     </>
//   )
// }
