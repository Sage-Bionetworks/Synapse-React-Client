// @ts-nocheck
import { FieldProps, utils as rjsfUtils } from '@rjsf/core'
import React, { useEffect, useState } from 'react'
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import { useListState } from '../../../utils/hooks/useListState'
import { CustomArrayFieldTemplate } from './CustomArrayFieldTemplate'

// Matches ####-##-##T##:##:##.###Z
const ISO_TIMESTAMP_REGEX = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/

/**
 * react-jsonschema-form SchemaField override for "additionalProperties" only
 * to provide full compatibility with Synapse annotations features.
 * @param props
 * @returns
 */
export function AdditionalPropertiesSchemaField<T>(props: FieldProps<T>) {
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
  } = props
  const {
    list,
    handleListChange,
    handleListRemove,
    appendToList,
    setList,
  } = useListState(Array.isArray(formData) ? formData : [formData])

  useEffect(() => {
    // After coercing values to a list, we want to propagate the changes
    // If we don't do this, the form may re-order if a user changes a value

    // TODO: Figure out why this doesnt work without a delay
    setTimeout(() => {
      onChange(list)
    }, 500)
  }, [])

  useEffect(() => {
    // When we first mount, determine the type of existing fields
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
  }, [])

  useEffect(() => {
    // When the selected type changes, switch to the appropriate widget for accepting input
    switch (propertyType) {
      case 'integer':
      case 'float':
        setList(list.map(item => Number(item)))
        setWidget('UpDownWidget')
        break
      case 'date-time':
        setList(
          list.map(item => {
            if (typeof item === 'string' && ISO_TIMESTAMP_REGEX.exec(item)) {
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
    // Don't add other properties to dependency array because we don't want to automatically coerce input
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propertyType])

  useEffect(() => {
    if (list.length === 0) {
      console.log(onDropPropertyClick)
      onDropPropertyClick(name)({
        preventDefault: () => {
          //noop
        },
      })
    }
  }, [list])

  const Widget = rjsfUtils.getWidget(schema, widget, registry.widgets)

  const items = list.map((item, index) => {
    return {
      children: (
        <Widget
          id={'abcdef'}
          schema={schema}
          registry={registry}
          value={item}
          onChange={value => {
            handleListChange(index)(value)
            onChange(list)
          }}
        />
      ),
      onDropIndexClick: () => {
        return handleListRemove(index)
      },
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
      />
    </>
  )
}
