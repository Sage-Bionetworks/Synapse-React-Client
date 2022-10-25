import { Widget, WidgetProps } from '@rjsf/utils'
import moment, { Moment } from 'moment'
import React from 'react'
import { CalendarWithIconFormGroup } from '../../../evaluation_queues/CalendarWithIconFormGroup'

/**
 * DateTime picker widget compatible with react-jsonschema-form and Synapse Datetime annotations.
 */
export const DateTimeWidget: Widget = ({
  disabled,
  value,
  onChange,
}: WidgetProps) => {
  return (
    <CalendarWithIconFormGroup
      disabled={disabled}
      value={value ? moment(value) : ''}
      setterCallback={(newValue: string | Moment) => {
        if (newValue == null || typeof newValue === 'string') {
          onChange(newValue)
        } else {
          onChange(newValue.toISOString())
        }
      }}
    ></CalendarWithIconFormGroup>
  )
}
