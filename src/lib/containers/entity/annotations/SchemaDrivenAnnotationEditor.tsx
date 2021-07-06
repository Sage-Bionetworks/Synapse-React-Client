// -@ts-nocheck
import Form, { AjvError, ErrorListProps, Field } from '@rjsf/core'
import { JSONSchema7 } from 'json-schema'
import { omit, pick } from 'lodash-es'
import React, { useRef } from 'react'
import {
  Alert,
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  Modal,
} from 'react-bootstrap'
import { FieldProps, FieldTemplateProps } from 'react-jsonschema-form'
import {
  useGetJson,
  useUpdateViaJson,
} from '../../../utils/hooks/SynapseAPI/useEntity'
import {
  useGetSchema,
  useGetSchemaBinding,
} from '../../../utils/hooks/SynapseAPI/useSchema'
import { useListState } from '../../../utils/hooks/useListState'
import { SynapseClientError } from '../../../utils/SynapseClient'
import { EntityJson, entityJsonKeys } from '../../../utils/synapseTypes'
import { SynapseSpinner } from '../../LoadingScreen'
import { AdditionalPropertiesSchemaField } from './AdditionalPropertiesSchemaField'
import { CustomArrayFieldTemplate } from './CustomArrayFieldTemplate'
import { CustomDateTimeWidget } from './CustomDateTimeWidget'
import { CustomFieldTemplate } from './CustomFieldTemplate'
import { CustomObjectFieldTemplate } from './CustomObjectFieldTemplate'

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

function getStandardEntityFields(json: EntityJson): EntityJson {
  return pick(json, entityJsonKeys) as EntityJson
}

function removeStandardEntityFields(json: EntityJson): Record<string, unknown> {
  return omit(json, entityJsonKeys)
}

export const SchemaDrivenAnnotationEditor: React.FunctionComponent<SchemaDrivenAnnotationEditorProps> = ({
  entityId,
}: SchemaDrivenAnnotationEditorProps) => {
  const formRef = useRef(null)
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
      select: schema => {
        // TODO: Why do we need to do this, issue with how the forked RJSF uses AJV
        delete schema.$id
        return schema
      },
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
          <Form
            className="AnnotationEditor"
            liveValidate={false}
            noHtml5Validate={true}
            // FieldTemplate={CustomFieldTemplate}
            ArrayFieldTemplate={CustomArrayFieldTemplate}
            ObjectFieldTemplate={CustomObjectFieldTemplate}
            ref={formRef}
            ErrorList={({ errors }: ErrorListProps) => (
              <Alert
                dismissible={false}
                show={true}
                variant={'danger'}
                transition={false}
              >
                Validation Errors:{' '}
                <ul>
                  {errors.map((e: AjvError) => (
                    <li key={e.stack}>{`${e.property} ${e.message}`}</li>
                  ))}
                </ul>
              </Alert>
            )}
            schema={{
              ...(validationSchema ?? {}),
              additionalProperties: true,
            }}
            uiSchema={{
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
              console.log(errors)
              setValidationError(errors)
              setShowSubmissionError(false)
              setShowSuccess(false)
              setFormData(formData)

              mutation.mutate()
            }}
            onError={(errors: AjvError[]) => {
              // invoked when submit is clicked when there are errors
              setValidationError(errors)
              setShowConfirmation(true)
            }}
            fields={
              {
                // AdditionalPropertiesSchemaField: AdditionalPropertiesSchemaField,
              }
            }
            widgets={{ DateTimeWidget: CustomDateTimeWidget }}
          >
            <Button
              variant="primary-500"
              onClick={() => {
                formRef.current.submit()
              }}
            >
              Save
            </Button>
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
            Annotations successfully updated
          </Alert>
          <Alert
            dismissible={false}
            show={showSubmissionError}
            variant={'danger'}
            transition={false}
          >
            Annotations could not be updated: {validationError?.reason}
          </Alert>
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
            {(errors ?? []).map((e: AjvError) => (
              <li key={e.stack}>{`${e.property} ${e.message}`}</li>
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

const CustomAdditionalPropertiesFieldTemplate = (
  props: FieldTemplateProps & {
    onKeyChange: (newKey: string) => void
  },
) => {
  const {
    id,
    label,
    children,
    errors,
    help,
    description,
    hidden,
    required,
    displayLabel,
    classNames,
    disabled,
    onKeyChange,
    readonly,
  } = props

  const keyLabel = `Key` // i18n ?
  if (hidden) {
    return <div className="hidden">{children}</div>
  }
  return (
    <div className={classNames}>
      <div className="row">
        <div className="col-xs-3">
          <FormGroup className="form-additional">
            <FormLabel id={`${id}-key`}>{keyLabel}</FormLabel>
            <FormControl
              type="text"
              disabled={disabled}
              readOnly={readonly}
              defaultValue={label}
              required={required}
              id={`${id}-key`}
              onBlur={(event: {
                preventDefault: () => void
                target: { value: string }
              }) => {
                event.preventDefault()
                onKeyChange(event.target.value)
              }}
            />
          </FormGroup>
        </div>
        {displayLabel && <FormLabel id={id}>{label}</FormLabel>}
        {displayLabel && description ? description : null}
        {children}
        {errors}
        {help}
      </div>
    </div>
  )
}
