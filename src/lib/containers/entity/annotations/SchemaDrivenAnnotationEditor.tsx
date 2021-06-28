// -@ts-nocheck
import Form, { AjvError, Field } from '@rjsf/core'
import { JSONSchema7 } from 'json-schema'
import React from 'react'
import {
  Alert,
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  Modal,
} from 'react-bootstrap'
import { useErrorHandler } from 'react-error-boundary'
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
import { AdditionalPropertiesSchemaField } from './AdditionalPropertiesSchemaField'
import { CustomArrayFieldTemplate } from './CustomArrayFieldTemplate'
import { CustomDateTimeWidget } from './CustomDateTimeWidget'

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
function getStandardEntityFields(
  json: Record<string, unknown>,
): Record<string, unknown> {
  return Object.keys(json)
    .filter(key => entityFields.includes(key))
    .reduce((obj, key) => {
      obj[key] = json[key]
      return obj
    }, {})
}
function removeStandardEntityFields(
  json: Record<string, unknown>,
): Record<string, unknown> {
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
  const [entityJson, setEntityJson] = React.useState<
    Record<string, unknown> | undefined
  >(undefined)
  const [formData, setFormData] = React.useState<any>(undefined)
  const [showSuccess, setShowSuccess] = React.useState(false)
  const [etag, setEtag] = React.useState('')
  const [showConfirmation, setShowConfirmation] = React.useState(false)
  const [showError, setShowError] = React.useState(false)
  const [error, setError] = React.useState<SynapseClientError | undefined>(
    undefined,
  )

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
  const { data: schema } = useGetSchemaBinding(entityId, { retry: false })
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
      onError: error => {
        setError(error)
        setShowError(true)
      },
    },
  )

  // if additional properties is false, don't add it. if not specified, add it

  return (
    <div className="bootstrap-4-backport">
      <Form
        className="AnnotationEditor"
        liveValidate
        // ObjectFieldTemplate={CustomObjectFieldTemplate}
        ArrayFieldTemplate={CustomArrayFieldTemplate}
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
        schema={{
          ...(validationSchema ?? {}),
          additionalProperties: true,
        }}
        uiSchema={{
          additionalProperties: {
            'ui:field': AdditionalPropertiesSchemaField,
            'ui:FieldTemplate': CustomAdditionalPropertiesFieldTemplate,
            // 'ui:widget': AdditionalPropertyWidget,
          },
        }}
        formData={formData}
        onChange={e => {
          setShowError(false)
          setShowSuccess(false)
          setFormData(e.formData)
        }}
        onSubmit={() => {
          mutation.mutate()
        }}
        onError={e => {
          setError(e)
          setShowConfirmation(true)
        }}
        fields={{
          AdditionalPropertiesSchemaField: AdditionalPropertiesSchemaField,
        }}
        widgets={{ DateTimeWidget: CustomDateTimeWidget }}
      ></Form>
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
          errors={error}
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
        show={showError}
        variant={'danger'}
        transition={false}
      >
        Annotations could not be updated: {error?.reason}
      </Alert>
    </div>
  )
}

type ConfirmationModalProps = {
  show: boolean
  onCancel: () => void
  onSave: () => void
  errors: AjvError[]
}
const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  show,
  onCancel,
  onSave,
  errors,
}: ConfirmationModalProps) => {
  return (
    <Modal animation={false} show={show}>
      <Modal.Header closeButton>
        <Modal.Title>Update Annotations</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>The following errors exist with the annotations you entered:</div>
        <div>
          <ul>
            {errors.map((e: AjvError) => (
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

const CustomArrayField: Field = ({
  schema,
  uiSchema,
  idSchema,
  formData,
  errorSchema,
  onChange,
  onBlur,
  registry,
  formContext,
  autofocus,
  disabled,
  readonly,
  required,
  name,
  ...rest
}: FieldProps) => {
  const {
    list,
    handleListChange,
    handleListRemove,
    appendToList,
  } = useListState(Array.isArray(formData) ? formData : [formData ?? ''])

  const type = schema.items?.type ?? 'string'

  let formType = 'text'

  if (!Array.isArray(type)) {
    switch (type) {
      case 'number':
      case 'integer':
        formType = 'number'
        break
      case 'boolean':
        formType = 'checkbox'
        break
    }
  }

  return (
    <FormGroup>
      <FormLabel>{name}</FormLabel>
      {list.map((item, index) => {
        return (
          <div key={index} style={{ display: 'flex', margin: '5px 0px' }}>
            <FormControl
              required={required}
              onBlur={onBlur}
              readOnly={readonly}
              disabled={disabled}
              value={item}
              type={formType}
              onChange={e => {
                handleListChange(index)(e.target.value)
                onChange(list)
              }}
            ></FormControl>
            <Button
              onClick={() => {
                handleListRemove(index)()
                onChange(list)
              }}
            >
              -
            </Button>
            <Button
              onClick={() => {
                appendToList('')
                onChange(list)
              }}
            >
              +
            </Button>
          </div>
        )
      })}
    </FormGroup>
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
