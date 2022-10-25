import {
  FieldProps,
  getWidget,
  ArrayFieldTemplateItemType,
  getTemplate,
  getUiOptions,
} from '@rjsf/utils'
import { isEqual } from 'lodash-es'
import React, { useEffect, useState } from 'react'
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import FullWidthAlert from '../../../FullWidthAlert'
import { convertToArray } from '../AnnotationEditorUtils'

// Matches ####-##-##T##:##:##.###Z, e.g. 1970-01-01T12:00:000Z
const ISO_TIMESTAMP_REGEX = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/

// Types that correspond to the different input fields that the annotation editor supports
export enum PropertyType {
  STRING = 'String',
  INTEGER = 'Integer',
  FLOAT = 'Float',
  BOOLEAN = 'Boolean',
  DATETIME = 'Datetime',
}

// Selection of react-jsonschema-form Widget types that we can use for the supported property fields
export enum AdditionalPropertyWidget {
  TextWidget = 'TextWidget',
  DateTimeWidget = 'DateTimeWidget',
  CheckboxWidget = 'CheckboxWidget',
}

export function guessPropertyType(list: Array<any>): PropertyType {
  if (list.length === 0) {
    // The field was just added, so default to string
    return PropertyType.STRING
  } else if (
    list.every(
      item => typeof item === 'number' || item === 'NaN', // "NaN" is technically a float value
    )
  ) {
    if (list.every(item => Number.isInteger(item))) {
      return PropertyType.INTEGER
    } else {
      return PropertyType.FLOAT
    }
  } else if (list.every(item => typeof item === 'boolean')) {
    return PropertyType.BOOLEAN
  } else if (
    list.every(item => typeof item === 'string') &&
    list.every((item: string) => !!ISO_TIMESTAMP_REGEX.exec(item))
  ) {
    return PropertyType.DATETIME
  }
  // otherwise, default type is 'string'
  return PropertyType.STRING
}

export function transformDataFromPropertyType(
  list: Array<any>,
  propertyType: PropertyType,
) {
  switch (propertyType) {
    case PropertyType.INTEGER:
      return list.map(item =>
        Number.isNaN(Number(item)) ? undefined : Math.floor(Number(item)),
      )

    case PropertyType.FLOAT:
      return list.map(item => {
        const asFloat = parseFloat(item as string)
        if (Number.isNaN(asFloat)) {
          return 'NaN'
        } else if (Number.isInteger(asFloat)) {
          return asFloat.toFixed(1)
        } else {
          return asFloat
        }
      })
    case PropertyType.DATETIME:
      return list.map(item => {
        if (typeof item === 'string' && ISO_TIMESTAMP_REGEX.exec(item)) {
          return item
        } else {
          return undefined
        }
      })
    case PropertyType.BOOLEAN:
      return list.map(item => !!item)
    case PropertyType.STRING:
    default:
      return list.map(item => String(item))
  }
}

export function getWidgetFromPropertyType(
  propertyType: PropertyType,
): AdditionalPropertyWidget {
  switch (propertyType) {
    case PropertyType.DATETIME:
      return AdditionalPropertyWidget.DateTimeWidget
    case PropertyType.BOOLEAN:
      return AdditionalPropertyWidget.CheckboxWidget
    case PropertyType.STRING:
    case PropertyType.INTEGER:
    case PropertyType.FLOAT:
    default:
      return AdditionalPropertyWidget.TextWidget
  }
}

/**
 * react-jsonschema-form SchemaField override for "additionalProperties" only.
 * Modifies the data to provide full compatibility with Synapse annotations features.
 *
 * This component provides these enhancements to the SchemaField:
 * - Supports selecting a type, and changing the input widget appropriately
 * - Identifying the type on mount
 * - Treat all field values as arrays
 * - When the last array value is removed, remove the entire key from the form.
 * @param props
 * @returns
 */
export function AdditionalPropertiesSchemaField<T = any, F = any>(
  props: FieldProps<T, F> & {
    onDropPropertyClick: (key: string) => (event: any) => void
  },
) {
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
  const uiOptions = getUiOptions<T, F>(uiSchema)

  const list = Array.isArray(formData) ? formData : convertToArray(formData)
  // The type determines which widget we show.
  const [propertyType, setPropertyType] = useState(guessPropertyType(list))

  // If the property type is updated, store it in a new variable where we'll show a warning if data may be lost on coersion
  const [nextPropertyType, setNextPropertyType] = useState(propertyType)

  const [widget, setWidget] = useState<AdditionalPropertyWidget>(
    AdditionalPropertyWidget.TextWidget,
  )

  /**
   * This effect is invoked whenever the user attempts to change the datatype of a custom annotation.
   */
  useEffect(() => {
    function onNextPropertyTypeUpdate() {
      const dataIsEmpty =
        list.length === 0 || list.every(item => item == null || item == '')
      const coercedList = transformDataFromPropertyType(list, nextPropertyType)
      // if the data is empty or identical after conversion, then just update the property type
      if (dataIsEmpty || nextPropertyType !== propertyType) {
        if (isEqual(list, coercedList)) {
          setPropertyType(nextPropertyType)
        }
      }
    }

    onNextPropertyTypeUpdate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextPropertyType])

  /**
   * This effect is invoked whenever the propertyType changes.
   */
  useEffect(() => {
    function coerceDataAndUpdateWidget() {
      const coercedList = transformDataFromPropertyType(
        list,
        nextPropertyType,
      ) as unknown as T

      // Data conversion is non-destructive or has been confirmed by the user
      setPropertyType(nextPropertyType)
      // When the selected type changes, switch to the appropriate widget for accepting input
      setWidget(getWidgetFromPropertyType(nextPropertyType))
      // Coerce the data to match the new type
      onChange(coercedList)
    }

    coerceDataAndUpdateWidget()
    // Don't add other properties to dependency array because we don't want to automatically coerce input
    // i.e. Only coerce data when the type changes, which should only be on mount or when the user explicitly chooses a new type.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propertyType])

  const ArrayFieldTemplate = getTemplate<'ArrayFieldTemplate', T, F>(
    'ArrayFieldTemplate',
    registry,
    uiOptions,
  )

  const Widget = getWidget(
    schema,
    AdditionalPropertyWidget[widget],
    registry.widgets,
  )

  const items: ArrayFieldTemplateItemType<T, F>[] = list.map(
    (item: unknown, index: number) => {
      return {
        registry: registry,
        children: (
          <Widget
            id={`${name}-${index}`}
            aria-label={`${name}-${index}`}
            schema={schema}
            value={item}
            onChange={(value: any) => {
              const newList = [...list]
              newList[index] = value
              onChange(newList as unknown as T)
            }}
            uiSchema={uiSchema}
            required={props.required}
            disabled={props.disabled}
            readonly={props.readonly}
            autofocus={props.autofocus}
            placeholder={props.placeholder ?? ''}
            formContext={props.formContext}
            onFocus={props.onFocus}
            options={{}}
            onBlur={(id: string, value: any) => {
              onChange(
                transformDataFromPropertyType(
                  list,
                  propertyType,
                ) as unknown as T,
              )
              props.onBlur(id, value)
            }}
            label={props.title ?? ''}
            multiple={true}
            registry={registry}
          />
        ),
        onDropIndexClick: (index: number) => (event?: any) => {
          if (list.length === 1) {
            // If this is the only item, then remove the property from the field
            return onDropPropertyClick(name)(event)
          } else {
            // Otherwise, remove the item from the list
            const newList = [...list]
            newList.splice(index, 1)
            return onChange(newList as unknown as T)
          }
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
    },
  )

  return (
    <>
      <FormGroup className="col-xs-3">
        <FormLabel htmlFor={`${id}-type`}>Type</FormLabel>
        <FormControl
          as="select"
          role="listbox"
          disabled={props.disabled}
          readOnly={props.readonly}
          value={propertyType}
          required={true}
          id={`${id}-type`}
          onChange={e => {
            setNextPropertyType(e.target.value as PropertyType)
          }}
        >
          {Object.keys(PropertyType).map(type => (
            <option key={type} value={PropertyType[type] as string}>
              {PropertyType[type]}
            </option>
          ))}
        </FormControl>
      </FormGroup>
      <ArrayFieldTemplate
        className="col-xs-6"
        onAddClick={() => {
          onChange([...list, null] as unknown as T)
        }}
        canAdd={true}
        title={name}
        schema={schema}
        registry={registry}
        items={items}
        disabled={props.disabled}
        idSchema={props.idSchema}
        readonly={props.readonly}
        required={props.required}
        uiSchema={props.uiSchema}
        formContext={props.formContext}
        formData={props.formData}
      />
      {propertyType !== nextPropertyType && (
        <FullWidthAlert
          variant="warning"
          title="Data may be lost when converting types"
          description={`Are you sure you want to convert ${name} from ${propertyType} to ${nextPropertyType}? Current values may be lost on conversion.`}
          primaryButtonConfig={{
            text: 'Convert',
            onClick: () => {
              setPropertyType(nextPropertyType)
            },
          }}
          secondaryButtonConfig={{
            text: 'Cancel',
            onClick: () => {
              setNextPropertyType(propertyType)
            },
          }}
          isGlobal={false}
        />
      )}
    </>
  )
}
