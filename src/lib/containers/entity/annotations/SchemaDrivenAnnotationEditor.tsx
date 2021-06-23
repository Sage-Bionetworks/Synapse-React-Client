import Form, { AjvError } from '@rjsf/core'
import { JSONSchema7 } from 'json-schema'
import React, { useEffect } from 'react'
import { Alert, Button, Modal } from 'react-bootstrap'
import { useErrorHandler } from 'react-error-boundary'
import { ErrorListProps } from 'react-jsonschema-form'
import { useQueryErrorResetBoundary } from 'react-query'
import {
  useGetJson,
  useUpdateViaJson,
} from '../../../utils/hooks/SynapseAPI/useEntity'
import { SynapseErrorBoundary } from '../../ErrorBanner'
import { toError } from '../../../utils/ErrorUtils'
import testSchema from '../../testschema.json'
import {
  useGetSchema,
  useGetSchemaBinding,
} from '../../../utils/hooks/SynapseAPI/useSchema'
import { AdditionalProperties } from './AdditionalProperties'
import {
  AnnotationsValue,
  AnnotationsValueType,
} from '../../../utils/synapseTypes'

export type SchemaDrivenAnnotationEditorProps = {
  entityId: string
  schema: JSONSchema7
}

export type SchemaDrivenAnnotationEditorModalProps = {
  entityId: string
  schema: JSONSchema7
  show: boolean
  onHide: () => void
}

const entityFields = [
  'name',
  'id',
  'etag',
  'createdOn',
  'modifiedOn',
  'createdBy',
  'modifiedBy',
  'parentId',
  'concreteType',
  'versionNumber',
  'versionLabel',
  'isLatestVersion',
  'dataFileHandleId',
]
function getStandardEntityFields(json: any): any {
  return Object.keys(json)
    .filter(key => entityFields.includes(key))
    .reduce((obj, key) => {
      obj[key] = json[key]
      return obj
    }, {})
}
function removeStandardEntityFields(json: any): any {
  return Object.keys(json)
    .filter(key => !entityFields.includes(key))
    .reduce((obj, key) => {
      obj[key] = json[key]
      return obj
    }, {})
}

export const SchemaDrivenAnnotationEditor: React.FunctionComponent<SchemaDrivenAnnotationEditorProps> = ({
  entityId,
}: SchemaDrivenAnnotationEditorProps) => {
  const handleError = useErrorHandler()
  const [entityJson, setEntityJson] = React.useState<any>(undefined)
  const [formData, setFormData] = React.useState<any>(undefined)
  const [showSuccess, setShowSuccess] = React.useState(false)
  const [etag, setEtag] = React.useState('')
  const [additionalAnnotations, setAdditionalAnnotations] = React.useState<{
    [key: string]: AnnotationsValue
  }>({})

  // TODO: Disallow keys that are in the standard entity JSON

  const { refetch: refetchJson } = useGetJson(entityId, {
    onSuccess: json => {
      setEntityJson(getStandardEntityFields(json))
      setEtag(json.etag)
      // maybe set the json aside and attach on submit rather than remove? see what API likes
      setFormData(removeStandardEntityFields(json))
    },
    enabled: !formData,
  })
  const { data: schema } = useGetSchemaBinding(entityId)
  const { data: validationSchema } = useGetSchema(
    schema?.jsonSchemaVersionInfo.$id,
    { enabled: !!schema },
  )

  const mutation = useUpdateViaJson(
    entityId,
    { ...formData, ...entityJson },
    {
      onSuccess: () => {
        setShowSuccess(true), refetchJson()
      },
      onError: error => handleError(toError(error)),
    },
  )

  // if additional properties is false, don't add it. if not specified, add it

  return validationSchema ? (
    <>
      <Form
        liveValidate
        // ErrorList={({ errors }: ErrorListProps) => (
        //   <Alert
        //     dismissible={false}
        //     show={true}
        //     variant={'danger'}
        //     transition={false}
        //   >
        //     Validation Errors:{' '}
        //     <ul>
        //       {errors.map((e: AjvError) => (
        //         <li key={e.stack}>{`${e.property} ${e.message}`}</li>
        //       ))}
        //     </ul>
        //   </Alert>
        // )}
        schema={{ ...validationSchema, additionalProperties: false }}
        formData={formData}
        onChange={e => {
          setShowSuccess(false)
          setFormData(e.formData)
        }}
        onSubmit={e => {
          // create custom annotations

          // re-fetch JSON
          // From the response, only update the formData's eTag and custom fields

          // 
          mutation.mutate()
        }}
        onError={handleError}
      ></Form>
      <AdditionalProperties
        annotations={additionalAnnotations}
        setAnnotations={setAdditionalAnnotations}
      ></AdditionalProperties>
      <Alert
        dismissible={false}
        show={showSuccess}
        variant={'success'}
        transition={false}
      >
        Annotations successfully updated
      </Alert>
      <Button
        onClick={() => {
          mutation.mutate()
        }}
        variant="primary-transparent"
      >
        Save
      </Button>
    </>
  ) : null
}

// export const SchemaDrivenAnnotationEditorModal: React.FunctionComponent<SchemaDrivenAnnotationEditorModalProps> = ({
//   entityId,
//   schema,
//   show,
//   onHide,
// }: SchemaDrivenAnnotationEditorModalProps) => {
//   const { reset } = useQueryErrorResetBoundary()

//   const { data: initialData, isLoading } = useGetJson(entityId)

//   return (
//     <Modal animation={false} show={show} onHide={onHide}>
//       <Modal.Header closeButton>
//         {/** TODO: get name or modal title */}
//         <Modal.Title>{entityId} Annotations</Modal.Title>
//       </Modal.Header>
//       <SynapseErrorBoundary onReset={reset}>
//         <SchemaDrivenAnnotationEditor
//           entityId={entityId}
//           schema={schema}
//           initialData={initialData}
//         />
//       </SynapseErrorBoundary>
//     </Modal>
//   )
// }
