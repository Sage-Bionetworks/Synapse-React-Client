import Form, { AjvError, ErrorListProps } from '@sage-bionetworks/rjsf-core'
import { isEmpty, omit, pick } from 'lodash-es'
import React, { useRef } from 'react'
import { Alert, Button, Modal } from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'
import AddToList from '../../../assets/icons/AddToList'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../utils/functions/getEndpoint'
import {
  useGetJson,
  useUpdateViaJson,
} from '../../../utils/hooks/SynapseAPI/useEntity'
import {
  useGetSchema,
  useGetSchemaBinding,
} from '../../../utils/hooks/SynapseAPI/useSchema'
import { SynapseClientError } from '../../../utils/SynapseClient'
import { EntityJson, entityJsonKeys } from '../../../utils/synapseTypes'
import { SynapseSpinner } from '../../LoadingScreen'
import { AdditionalPropertiesSchemaField } from './AdditionalPropertiesSchemaField'
import { CustomAdditionalPropertiesFieldTemplate } from './CustomAdditionalPropertiesFieldTemplate'
import { CustomArrayFieldTemplate } from './CustomArrayFieldTemplate'
import { CustomDateTimeWidget } from './CustomDateTimeWidget'
import { CustomDefaultTemplate } from './CustomDefaultTemplate'
import { CustomObjectFieldTemplate } from './CustomObjectFieldTemplate'
import { JSONSchema7 } from 'json-schema'

export type SchemaDrivenAnnotationEditorProps = {
  /** The entity whose annotations should be edited with the form */
  entityId?: string
  /** If no entity ID is supplied, the schema to use for the form */
  schemaId?: string
  liveValidate?: boolean
}

export type SchemaDrivenAnnotationEditorModalProps = {
  entityId: string
  show: boolean
  onHide: () => void
}

// patternProperties lets us define how to treat additionalProperties in a JSON schema by property name
// here we can ban properties that collide with entity properties by making their schema "not: {}"
const patternPropertiesBannedKeys = entityJsonKeys.reduce((current, item) => {
  current[`^${item}$`] = { not: {} }
  return current
}, {})

function getStandardEntityFields(json: EntityJson): EntityJson {
  return pick(json, entityJsonKeys) as EntityJson
}

function removeStandardEntityFields(json: EntityJson): Record<string, unknown> {
  return omit(json, entityJsonKeys)
}

/**
 * Renders a form for editing an entity's annotations. The component also supports supplying just a schema ID,
 * but work to support annotation flows without an entity (i.e. before creating entities) is not yet complete.
 */
export const SchemaDrivenAnnotationEditor: React.FunctionComponent<SchemaDrivenAnnotationEditorProps> = ({
  entityId,
  schemaId,
  liveValidate = false,
}: SchemaDrivenAnnotationEditorProps) => {
  const formRef = useRef<Form<Record<string, unknown>>>(null)

  // If fetching an entity, store the non-annotation fields in this object
  const [entityJson, setEntityJson] = React.useState<
    Record<string, unknown> | undefined
  >(undefined)

  // Annotation fields fetched and modified via the form
  const [formData, setFormData] = React.useState<
    Record<string, unknown> | undefined
  >(undefined)

  // Client-side validation errors
  const [validationError, setValidationError] = React.useState<
    AjvError[] | undefined
  >(undefined)

  // Errors from the backend response
  const [submissionError, setSubmissionError] = React.useState<
    SynapseClientError | undefined
  >(undefined)
  const [showSubmissionError, setShowSubmissionError] = React.useState(false)

  const [showConfirmation, setShowConfirmation] = React.useState(false)
  const [showSuccess, setShowSuccess] = React.useState(false)

  const ANNOTATION_EDITOR_TOOLTIP_ID = 'AnnotationEditorTooltip'

  const { refetch: refetchJson } = useGetJson(entityId!, {
    onSuccess: json => {
      /**
       * To only show annotations in the form, we must remove non-annotation fields.
       * We will need to submit these values when we create the entity, so we set them aside
       * and will merge objects later.
       */
      setEntityJson(getStandardEntityFields(json))
      setFormData(removeStandardEntityFields(json))
    },
    enabled: !entityId || !formData, // once we have data, don't refetch. it would overwrite the user's entries
  })

  const {
    data: schema,
    isLoading: isLoadingBinding,
  } = useGetSchemaBinding(entityId!, { enabled: !!entityId })

  const { data: validationSchema, isLoading: isLoadingSchema } = useGetSchema(
    schemaId ?? schema?.jsonSchemaVersionInfo.$id ?? '',
    {
      enabled: !!schemaId || !!schema,
      select: schema => {
        // Have to remove the ID because of a bug in RJSF
        // https://github.com/rjsf-team/react-jsonschema-form/issues/2471
        delete schema.$id
        return schema
      },
    },
  )

  const isLoading = isLoadingBinding || isLoadingSchema

  const mutation = useUpdateViaJson(
    entityId!,
    { ...formData, ...entityJson },
    {
      onSuccess: () => {
        setShowSuccess(true), refetchJson()
      },
      onError: error => {
        setSubmissionError(error)
        setShowSubmissionError(true)
      },
    },
  )

  return (
    <div className="bootstrap-4-backport">
      {isLoading ? (
        <SynapseSpinner />
      ) : (
        <>
          <ReactTooltip id={ANNOTATION_EDITOR_TOOLTIP_ID} />
          {entityJson && schema && (
            <Alert
              dismissible={false}
              show={true}
              variant="info"
              transition={false}
            >
              <b>{entityJson.name as string}</b> requires scientific annotations
              specified by <b>{schema.jsonSchemaVersionInfo.$id}</b>
              {'. '}
              <b>
                <a
                  href={`${getEndpoint(
                    BackendDestinationEnum.REPO_ENDPOINT,
                  )}/repo/v1/schema/type/registered/${
                    schema.jsonSchemaVersionInfo.$id
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View required schema
                </a>
              </b>
            </Alert>
          )}
          {entityJson && (!formData || isEmpty(formData)) && !schema && (
            <Alert
              dismissible={false}
              show={true}
              variant="info"
              transition={false}
            >
              <b>{entityJson.name as string}</b> has no annotations. Click the{' '}
              <AddToList /> button to annotate.
            </Alert>
          )}
          <Form
            className="AnnotationEditor"
            liveValidate={liveValidate}
            noHtml5Validate={true}
            ArrayFieldTemplate={CustomArrayFieldTemplate}
            ObjectFieldTemplate={CustomObjectFieldTemplate}
            ref={formRef}
            disabled={mutation.isLoading}
            ErrorList={({ errors }: ErrorListProps) => (
              <Alert
                className="ErrorList"
                dismissible={false}
                show={true}
                variant="danger"
                transition={false}
              >
                <b>Validation errors found:</b>
                <ul>
                  {errors.map((e: AjvError, index: number) => (
                    <li key={index}>{`${e.property.substring(1)} ${
                      e.message
                    }`}</li>
                  ))}
                </ul>
              </Alert>
            )}
            schema={
              {
                ...(validationSchema ?? {}),
                patternProperties: {
                  ...(validationSchema?.patternProperties ?? {}),
                  ...patternPropertiesBannedKeys,
                },
                additionalProperties:
                  validationSchema?.additionalProperties ?? true,
              } as JSONSchema7
            }
            uiSchema={{
              'ui:FieldTemplate': CustomDefaultTemplate,
              'ui:ArrayFieldTemplate': CustomArrayFieldTemplate,
              'ui:DuplicateKeySuffixSeparator': '_',
              additionalProperties: {
                'ui:field': AdditionalPropertiesSchemaField,
                'ui:FieldTemplate': CustomAdditionalPropertiesFieldTemplate,
              },
            }}
            formData={formData}
            onChange={({ formData, errors }) => {
              console.log('onchange gives errors', errors)
              setValidationError(errors)
              setShowSubmissionError(false)
              setShowSuccess(false)
              setFormData(formData)
            }}
            onSubmit={({ formData, errors }) => {
              setValidationError(errors)
              setShowSubmissionError(false)
              setShowSuccess(false)
              setFormData(formData)

              mutation.mutate()
            }}
            onError={(errors: AjvError[]) => {
              // invoked when submit is clicked and there are client-side validation errors
              setValidationError(errors)
              if (validationError) {
                setShowConfirmation(true)
              }
            }}
            widgets={{
              DateTimeWidget: CustomDateTimeWidget,
            }}
          >
            <hr />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row-reverse',
                gridRowStart: 4,
              }}
            >
              <Button
                disabled={!entityId}
                variant="primary-500"
                onClick={() => {
                  formRef.current!.submit()
                }}
              >
                Save
              </Button>
            </div>
          </Form>
          {showConfirmation && (
            <ConfirmationModal
              show={true}
              onSave={() => {
                mutation.mutate()
                setShowConfirmation(false)
              }}
              onCancel={() => {
                setShowConfirmation(false)
              }}
              errors={validationError}
            />
          )}
          <Alert
            dismissible={false}
            show={showSuccess}
            variant={'success'}
            transition={false}
          >
            Annotations successfully updated.
          </Alert>
          {submissionError && (
            <Alert
              dismissible={false}
              show={showSubmissionError}
              variant={'danger'}
              transition={false}
            >
              Annotations could not be updated: {submissionError.reason}
            </Alert>
          )}
        </>
      )}
    </div>
  )
}

type ConfirmationModalProps = {
  show: boolean
  onCancel: () => void
  onSave: () => void
  errors: AjvError[] | undefined
}
const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  show,
  onCancel,
  onSave,
  errors,
}: ConfirmationModalProps) => {
  return (
    <Modal animation={false} show={show} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Update Annotations</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>The following errors exist with the annotations you entered:</div>
        <div>
          <ul>
            {(errors ?? []).map((e: AjvError, index: number) => (
              <li key={index}>{`${e.property.substring(1)} ${e.message}`}</li>
            ))}
          </ul>
        </div>
        <div>Are you sure you want to save them?</div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="default" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="primary" onClick={onSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
