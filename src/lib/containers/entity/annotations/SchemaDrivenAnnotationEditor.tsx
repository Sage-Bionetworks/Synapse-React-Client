import Form, { AjvError, Field, Widget } from '@rjsf/core'
import { JSONSchema7 } from 'json-schema'
import React, { useEffect, useReducer } from 'react'
import {
  Alert,
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  Modal,
  Row,
} from 'react-bootstrap'
import { useErrorHandler } from 'react-error-boundary'
import {
  ArrayFieldTemplateProps,
  FieldProps,
  FieldTemplateProps,
  ObjectFieldTemplateProps,
  WidgetProps,
} from 'react-jsonschema-form'
import {
  useGetJson,
  useUpdateViaJson,
} from '../../../utils/hooks/SynapseAPI/useEntity'
import testSchema from '../../testschema.json'
import {
  useGetSchema,
  useGetSchemaBinding,
} from '../../../utils/hooks/SynapseAPI/useSchema'
import { CalendarWithIconFormGroup } from '../../evaluation_queues/CalendarWithIconFormGroup'
import moment, { Moment } from 'moment'
import { SynapseClientError } from '../../../utils/SynapseClient'
import { useListState } from '../../../utils/hooks/useListState'
import {
  ADDITIONAL_PROPERTY_FLAG,
  getUiOptions,
  getWidget,
} from 'react-jsonschema-form/lib/utils'
import { Add, AddBoxRounded, Close } from '@material-ui/icons'
import { SchemaFieldProps } from 'react-jsonschema-form/lib/components/fields/SchemaField'
import { useState } from 'react'
import { cloneDeep } from 'lodash'

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
  const [entityJson, setEntityJson] = React.useState<
    Record<string, unknown> | undefined
  >(undefined)
  const [formData, setFormData] = React.useState<
    Record<string, unknown> | undefined
  >(undefined)
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
      onError: error => {
        setError(error)
        setShowError(true)
      },
    },
  )

  // if additional properties is false, don't add it. if not specified, add it

  return validationSchema ? (
    <div className="bootstrap-4-backport">
      <Form
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
          ...validationSchema,
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
        onError={() => {
          setShowConfirmation(true)
        }}
        fields={{
          AdditionalPropertiesSchemaField: AdditionalPropertiesSchemaField,
        }}
        widgets={{ DateTimeWidget: CustomDateTimeWidget }}
      ></Form>
      <AreYouSure
        show={showConfirmation}
        onSave={() => {
          mutation.mutate()
          setShowConfirmation(false)
        }}
        onCancel={() => {
          setShowConfirmation(false)
        }}
      />
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
  ) : null
}

const AreYouSure: React.FC = ({ show, onCancel, onSave }) => {
  return (
    <Modal animation={false} show={show}>
      <Modal.Header closeButton>
        <Modal.Title>Update Annotations</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>The following errors exist with the annotations you entered:</div>
        <div>~~Errors~~</div>
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

const AdditionalPropertyWidget: Widget = (props: WidgetProps) => {
  const { value, schema, uiSchema, registry } = props
  const { widgets } = registry
  const Widget = getWidget(schema, getUiOptions(uiSchema), widgets)

  const list = Array.isArray(value) ? value : [value ?? '']

  return <Widget {...props} value={list} />
}

const CustomDateTimeWidget: Widget = (props: WidgetProps) => {
  return (
    <CalendarWithIconFormGroup
      disabled={props.disabled}
      value={moment(props.value)}
      setterCallback={(newValue: Moment) => {
        props.onChange(newValue.toISOString())
      }}
    ></CalendarWithIconFormGroup>
  )
}

const CustomArrayFieldTemplate = (props: ArrayFieldTemplateProps) => {
  return (
    <FormGroup className={props.className}>
      <FormLabel>{props.title}</FormLabel>
      {props.items &&
        props.items.map((element, index) => (
          <div
            style={{ display: 'flex' }}
            key={element.key}
            className={element.className}
          >
            <div style={{ width: '100%' }}>{element.children}</div>
            <Button
              style={{ margin: '0px 2px 1rem' }}
              onClick={element.onDropIndexClick(element.index)}
            >
              <Close />
            </Button>
            {props.canAdd && index === props.items.length - 1 && (
              <Button
                style={{ margin: '0px 2px 1rem' }}
                onClick={props.onAddClick}
                type="button"
              >
                <Add />
              </Button>
            )}
          </div>
        ))}
    </FormGroup>
  )
}

const CustomAdditionalPropertiesFieldTemplate = (
  props: FieldTemplateProps & {
    onKeyChange: Function
    onDropPropertyClick: Function
  },
) => {
  // props.formData = Array.isArray(props.formData) ? formData : [formData]
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
    onDropPropertyClick,
    readonly,
    schema,
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
            <FormLabel required={required} id={`${id}-key`}>
              {keyLabel}
            </FormLabel>
            <FormControl
              type="text"
              defaultValue={label}
              required={required}
              id={`${id}-key`}
              onBlur={event => {
                event.preventDefault()
                onKeyChange(event.target.value)
              }}
            />
          </FormGroup>
        </div>
        {displayLabel && (
          <FormLabel required={required} id={id}>
            {label}
          </FormLabel>
        )}
        {displayLabel && description ? description : null}
        {children}
        {errors}
        {help}
      </div>
    </div>
  )
}

const AdditionalPropertiesSchemaField = (props: SchemaFieldProps) => {
  const [propertyType, setPropertyType] = useState('string')
  const [widget, setWidget] = useState<
    'TextWidget' | 'UpDownWidget' | 'DateTimeWidget' | 'CheckboxWidget'
  >('TextWidget')
  const {
    id,
    formData,
    onChange,
    registry,
    schema,
    name,
    onDropPropertyClick,
  } = props
  const {
    list,
    handleListChange,
    handleListRemove,
    appendToList,
    setList,
  } = useListState(Array.isArray(formData) ? formData : [formData])

  useEffect(() => {
    switch (propertyType) {
      case 'integer':
      case 'float':
        setWidget('UpDownWidget')
        break
      case 'date-time':
        setWidget('DateTimeWidget')
        break
      case 'checkbox':
        setWidget('CheckboxWidget')
        break
      case 'string':
      default:
        setWidget('TextWidget')
        break
    }
  }, [propertyType])

  useEffect(() => {
    if (list.length === 0) {
      console.log(onDropPropertyClick)
      onDropPropertyClick(name)({ preventDefault: () => {} })
    }
  }, [list])

  const Widget = getWidget(schema, widget, registry.widgets)

  const items = list.map((item, index) => {
    return {
      children: (
        <Widget
          id={'abcdef'}
          schema={schema}
          registry={registry}
          value={item}
          onChange={handleListChange(index)}
        />
      ),
      // <FormControl
      //   type={formType}
      //   key={index}
      //   value={item}
      //   onChange={event => handleListChange(index)(event.target.value)}
      // ></FormControl>

      onDropIndexClick: () => {
        return handleListRemove(index)
      },
    }
  })

  return (
    <>
      <FormGroup className="col-xs-3">
        <FormLabel required={true} id={`${id}-type`}>
          Type
        </FormLabel>
        <FormControl
          as="select"
          value={propertyType.type}
          required={true}
          id={`${id}-type`}
          onChange={e => {
            setPropertyType(e.target.value)
          }}
        >
          <option value="string">String</option>
          <option value="integer">Integer</option>
          <option value="float">Float</option>
          <option value="date-time">Datetime</option>
          <option value="checkbox">Boolean</option>
        </FormControl>
      </FormGroup>
      <CustomArrayFieldTemplate
        className="col-xs-6"
        onAddClick={() => appendToList(null)}
        canAdd={true} // TODO: Max number of values supported?
        title={name}
        items={items}
      />
    </>
  )
}

// const CustomObjectFieldTemplate = (props: ObjectFieldTemplateProps) => {
//   const { TitleField, DescriptionField } = props
//   return (
//     <fieldset id={props.idSchema.$id}>
//       {(props.uiSchema['ui:title'] || props.title) && (
//         <TitleField
//           id={`${props.idSchema.$id}__title`}
//           title={props.title || props.uiSchema['ui:title']}
//           required={props.required}
//           formContext={props.formContext}
//         />
//       )}
//       {props.description && (
//         <DescriptionField
//           id={`${props.idSchema.$id}__description`}
//           description={props.description}
//           formContext={props.formContext}
//         />
//       )}
//       {props.properties.map(prop => prop.content)}
//       {canExpand(props.schema, props.uiSchema, props.formData) && (
//         <Button
//           className="object-property-expand"
//           onClick={props.onAddClick(props.schema)}
//           disabled={props.disabled || props.readonly}
//         >
//           +
//         </Button>
//       )}
//     </fieldset>
//   )
// }

// export function canExpand(schema, uiSchema, formData) {
//   if (!schema.additionalProperties) {
//     return false
//   }
//   const { expandable } = getUiOptions(uiSchema)
//   if (expandable === false) {
//     return expandable
//   }
//   // if ui:options.expandable was not explicitly set to false, we can add
//   // another property if we have not exceeded maxProperties yet
//   if (schema.maxProperties !== undefined) {
//     return Object.keys(formData).length < schema.maxProperties
//   }
//   return true
// }

// export function getUiOptions(uiSchema) {
//   // get all passed options from ui:widget, ui:options, and ui:<optionName>
//   return Object.keys(uiSchema)
//     .filter(key => key.indexOf('ui:') === 0)
//     .reduce((options, key) => {
//       const value = uiSchema[key]

//       if (key === 'ui:widget' && isObject(value)) {
//         console.warn(
//           'Setting options via ui:widget object is deprecated, use ui:options instead',
//         )
//         return {
//           ...options,
//           ...(value.options || {}),
//           widget: value.component,
//         }
//       }
//       if (key === 'ui:options' && isObject(value)) {
//         return { ...options, ...value }
//       }
//       return { ...options, [key.substring(3)]: value }
//     }, {})
// }
