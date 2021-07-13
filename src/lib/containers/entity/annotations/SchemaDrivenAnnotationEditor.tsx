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

export type SchemaDrivenAnnotationEditorProps = {
  entityId: string
}

export type SchemaDrivenAnnotationEditorModalProps = {
  entityId: string
  show: boolean
  onHide: () => void
}

function getStandardEntityFields(json: EntityJson): EntityJson {
  return pick(json, entityJsonKeys) as EntityJson
}

function removeStandardEntityFields(json: EntityJson): Record<string, unknown> {
  return omit(json, entityJsonKeys)
}

export const SchemaDrivenAnnotationEditor: React.FunctionComponent<SchemaDrivenAnnotationEditorProps> = ({
  entityId,
}: SchemaDrivenAnnotationEditorProps) => {
  const formRef = useRef<Form<Record<string, unknown>>>(null)
  const [entityJson, setEntityJson] = React.useState<
    Record<string, unknown> | undefined
  >(undefined)
  const [formData, setFormData] = React.useState<
    Record<string, unknown> | undefined
  >(undefined)
  const [showSuccess, setShowSuccess] = React.useState(false)
  const [showConfirmation, setShowConfirmation] = React.useState(false)
  const [submissionError, setSubmissionError] = React.useState<
    SynapseClientError | undefined
  >(undefined)

  const [showSubmissionError, setShowSubmissionError] = React.useState(false)
  const [validationError, setValidationError] = React.useState<
    AjvError[] | undefined
  >(undefined)

  const ANNOTATION_EDITOR_TOOLTIP_ID = 'AnnotationEditorTooltip'

  const { refetch: refetchJson } = useGetJson(entityId, {
    onSuccess: json => {
      /**
       * To only show annotations in the form, we must remove non-annotation fields.
       * We will need to submit these values when we create the entity, so we set them aside
       * and will merge objects later.
       */
      setEntityJson(getStandardEntityFields(json))
      setFormData(removeStandardEntityFields(json))
    },
    enabled: !formData, // once we have data, don't refetch automatically.
  })

  const { data: schema, isLoading: isLoadingBinding } = useGetSchemaBinding(
    entityId,
  )

  const { data: validationSchema, isLoading: isLoadingSchema } = useGetSchema(
    schema?.jsonSchemaVersionInfo.$id ?? '',
    {
      enabled: !!schema,
    },
  )

  const isLoading = isLoadingBinding || isLoadingSchema

  const mutation = useUpdateViaJson(
    entityId,
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

  // if additional properties is false, don't add it. if not specified, add it

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
            liveValidate={true}
            // liveValidate={false}
            noHtml5Validate={true}
            FieldTemplate={CustomDefaultTemplate as unknown}
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
                  {errors.map((e: AjvError) => (
                    <li key={e.stack}>{`${e.property.substring(1)} ${
                      e.message
                    }`}</li>
                  ))}
                </ul>
              </Alert>
            )}
            schema={{
              ...(validationSchema ?? {}),
              additionalProperties: true,
            }}
            uiSchema={{
              'ui:DuplicateKeySuffixSeparator': '_',
              additionalProperties: {
                'ui:field': AdditionalPropertiesSchemaField,
                'ui:FieldTemplate': CustomAdditionalPropertiesFieldTemplate,
              },
            }}
            formData={formData}
            onChange={({ formData, errors }) => {
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
      <div style={{ display: 'flex' }}>
        <pre style={{ width: '50%' }}>
          <code>
            {JSON.stringify(
              {
                ...(validationSchema ?? {}),
                additionalProperties: true,
              },
              null,
              2,
            )}
          </code>
        </pre>
        <pre style={{ width: '50%' }}>
          <code>{JSON.stringify(formData, null, 2)}</code>
        </pre>
      </div>
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
            {(errors ?? []).map((e: AjvError) => (
              <li key={e.stack}>{`${e.property.substring(1)} ${e.message}`}</li>
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
