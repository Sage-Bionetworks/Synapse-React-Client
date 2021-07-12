import { Widget, WidgetProps } from '@rjsf/core'
import moment, { Moment } from 'moment'
import React from 'react'
import { CalendarWithIconFormGroup } from '../../evaluation_queues/CalendarWithIconFormGroup'

export const CustomDateTimeWidget: Widget = ({
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
