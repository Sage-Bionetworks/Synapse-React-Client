import { Widget, WidgetProps } from '@sage-bionetworks/rjsf-core'
import { utils } from '@sage-bionetworks/rjsf-core'
import React from 'react'
import Creatable from 'react-select/creatable'
import {
  components,
  ControlProps,
  OptionTypeBase,
  GroupTypeBase,
} from 'react-select'
import { JSONSchema7 } from 'json-schema'

const guessType = utils.guessType
const asNumber = utils.asNumber

const Control = ({
  children,
  ...rest
}: ControlProps<OptionTypeBase, boolean, GroupTypeBase<OptionTypeBase>>) => {
  return (
    <components.Control {...rest} className="form-control">
      {children}
    </components.Control>
  )
}

/**
 *  Converts a string value to the correct type using the schema. Copied from @rjsf/core's SelectWidget, with some added type guards
 */
function processValue(schema: JSONSchema7, value: any) {
  // "enum" is a reserved word, so only "type" and "items" can be destructured
  const { type, items } = schema
  if (value === '') {
    return undefined
  } else if (
    type === 'array' &&
    items &&
    !Array.isArray(items) &&
    items !== true &&
    typeof items.type === 'string' &&
    ['number', 'integer'].includes(items.type)
  ) {
    return value.map(asNumber)
  } else if (type === 'boolean') {
    return value === 'true'
  } else if (type === 'number') {
    return asNumber(value)
  }

  // If type is undefined, but an enum is present, try and infer the type from
  // the enum values
  if (schema.enum) {
    if (schema.enum.every(x => guessType(x) === 'number')) {
      return asNumber(value)
    } else if (schema.enum.every(x => guessType(x) === 'boolean')) {
      return value === 'true'
    }
  }

  return value
}

function getValue(
  event: React.FocusEvent<HTMLSelectElement>,
  multiple: boolean,
) {
  if (multiple) {
    return [].slice
      .call(event.target.options)
      .filter(o => o.selected)
      .map(o => o.value)
  } else {
    return event.target.value
  }
}

function findValueOption(
  value: string | null | undefined,
  options: { value: string; label: string }[],
) {
  if (typeof value === 'undefined') {
    return ''
  }

  const correspondingOption = options.filter(option => option.value === value)
  if (correspondingOption.length > 0) {
    return correspondingOption[0]
  } else {
    return { value: value, label: value }
  }
}

/**
 * Select widget compatible with react-jsonschema-form enumerations
 */
export const CustomSelectWidget: Widget = (props: WidgetProps) => {
  const {
    schema,
    id,
    options,
    value,
    required,
    disabled,
    readonly,
    multiple,
    autofocus,
    onChange,
    onBlur,
    onFocus,
    placeholder,
  } = props
  const { enumOptions, enumDisabled } = options
  const emptyValue = multiple ? [] : ''
  return (
    <Creatable
      className="react-select-container"
      id={id}
      multiple={multiple}
      value={findValueOption(value, enumOptions)}
      required={required}
      disabled={disabled || readonly}
      autoFocus={autofocus}
      onBlur={
        onBlur &&
        (event => {
          const newValue = getValue(event, multiple)
          onBlur(id, processValue(schema, newValue))
        })
      }
      options={enumOptions as { label: string; value: string }[]}
      onFocus={
        onFocus &&
        (event => {
          const newValue = getValue(event, multiple)
          onFocus(id, processValue(schema, newValue))
        })
      }
      onChange={option => onChange(option?.value)}
      isClearable={true}
      components={{ Control }}
      formatCreateLabel={currentInput =>
        `Set to custom value "${currentInput}"`
      }
      styles={{
        control: provided => ({
          ...provided,
          border: 'unset',
          borderColor: 'unset',
          boxShadow: 'unset',
          '&:hover': {},
        }),
        valueContainer: provided => ({ ...provided, padding: '0px' }),
      }}
    />
  )
}
