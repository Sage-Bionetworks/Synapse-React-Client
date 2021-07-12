import { FieldProps, utils as rjsfUtils } from '@rjsf/core'
import React, { useEffect, useState } from 'react'
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import { useListState } from '../../../utils/hooks/useListState'
import { CustomArrayFieldTemplate } from './CustomArrayFieldTemplate'

// Matches ####-##-##T##:##:##.###Z, e.g. 1970-01-01T12:00:000Z
const ISO_TIMESTAMP_REGEX = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/

/**
 * react-jsonschema-form SchemaField override for "additionalProperties" only
 * to provide full compatibility with Synapse annotations features.
 * @param props
 * @returns
 */
export function AdditionalPropertiesSchemaField<T>(
  props: FieldProps<T> & {
    onDropPropertyClick: (key: string) => (event: any) => void
  },
) {
  /**
   * This component provides these enhancements to the SchemaField:
   *
   * - Supports selecting a type, and changing the input widget appropriately
   * - Identifying the type on mount
   * - Treat all field values as arrays
   * - When the last array value is removed, remove the entire key from the form.
   */

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
    uiSchema,
  } = props

  const {
    list,
    handleListChange,
    handleListRemove,
    appendToList,
    setList,
  } = useListState(
    Array.isArray(formData)
      ? formData
      : // Coerce individual value to an array
        [formData],
  )

  useEffect(() => {
    // If we had to coerce to an array, we want to propagate the changes
    // If we don't do this, the form may re-order when a user changes a value
    // TODO: Figure out why we need a delay
    setTimeout(() => {
      onChange(list)
    }, 50)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    // When we first mount, use the existing data to determine the type
    if (list.every(item => typeof item === 'number')) {
      if (list.every(item => Number.isInteger(item))) {
        setPropertyType('integer')
      } else {
        setPropertyType('float')
      }
    } else if (list.every(item => typeof item === 'boolean')) {
      setPropertyType('checkbox')
    } else if (
      list.every(item => typeof item === 'string') &&
      list.every((item: string) => !!ISO_TIMESTAMP_REGEX.exec(item))
    ) {
      setPropertyType('date-time')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    console.log('changing type')
    // When the selected type changes, switch to the appropriate widget for accepting input
    switch (propertyType) {
      case 'integer':
      case 'float':
        setList(
          list.map(item =>
            Number.isNaN(Number(item)) ? undefined : Number(item),
          ),
        )
        setWidget('UpDownWidget')
        break
      case 'date-time':
        setList(
          list.map(item => {
            if (typeof item === 'string' && ISO_TIMESTAMP_REGEX.exec(item)) {
              // TODO: Maybe see if we can just turn the value into a moment instead of regexing
              return item
            } else {
              return undefined
            }
          }),
        )
        setWidget('DateTimeWidget')
        break
      case 'checkbox':
        setList(list.map(item => !!item))
        setWidget('CheckboxWidget')
        break
      case 'string':
      default:
        setList(list.map(item => String(item)))
        setWidget('TextWidget')
        break
    }

    onChange(list)

    // Don't add other properties to dependency array because we don't want to automatically coerce input
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propertyType])

  useEffect(() => {
    if (list.length === 0) {
      onDropPropertyClick(name)({
        preventDefault: () => {
          //noop
        },
      })
    }
  }, [list, name, onDropPropertyClick])

  useEffect(() => {
    onChange(list)
  }, [onChange, list])

  const Widget = rjsfUtils.getWidget(schema, widget, registry.widgets)

  const items = list.map((item: unknown, index: number) => {
    return {
      children: (
        <Widget
          id={`${name}-${index}`}
          schema={schema}
          value={item}
          onChange={value => {
            handleListChange(index)(value)
          }}
          uiSchema={uiSchema}
          required={props.required}
          disabled={props.disabled}
          readonly={props.readonly}
          autofocus={props.autofocus}
          placeholder={props.placeholder ?? ''}
          options={{}}
          formContext={props.formContext as T}
          onBlur={props.onBlur}
          label={props.title ?? ''}
          multiple={true}
          rawErrors={[]}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore - The Widget needs the registry prop even though it's not in the type signature
          registry={registry}
        />
      ),
      onDropIndexClick: () => {
        return handleListRemove(index)
      },
      className: props.className ?? '',
      disabled: props.disabled,
      hasMoveDown: false,
      hasMoveUp: false,
      hasRemove: false,
      hasToolbar: false,
      index: index,
      onAddIndexClick: () => {
        return () => {
          // no-op
        }
      },
      onReorderClick: () => {
        return () => {
          //no-op
        }
      },
      readonly: props.readonly,
      key: `${index}`,
    }
  })

  return (
    <>
      <FormGroup className="col-xs-3">
        <FormLabel id={`${id}-type`}>Type</FormLabel>
        <FormControl
          as="select"
          value={propertyType}
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
        canAdd={true}
        title={name}
        schema={schema}
        items={items}
        registry={registry}
        DescriptionField={() => null}
        TitleField={() => null}
        disabled={props.disabled}
        idSchema={props.idSchema}
        readonly={props.readonly}
        required={props.required}
        uiSchema={props.uiSchema}
        formContext={props.formContext as unknown}
        formData={props.formData}
      />
    </>
  )
}
