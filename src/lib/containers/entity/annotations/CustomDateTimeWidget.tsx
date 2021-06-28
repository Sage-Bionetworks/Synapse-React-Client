import { Widget, WidgetProps } from '@rjsf/core'
import moment, { Moment } from 'moment'
import React from 'react'
import { CalendarWithIconFormGroup } from '../../evaluation_queues/CalendarWithIconFormGroup'

export const CustomDateTimeWidget: Widget = (props: WidgetProps) => {
  return (
    <CalendarWithIconFormGroup
      disabled={props.disabled}
      value={props.value ? moment(props.value) : ''}
      setterCallback={(newValue: string | Moment) => {
        if (newValue == null || typeof newValue === 'string') {
          props.onChange(newValue)
        } else {
          props.onChange(newValue.toISOString())
        }
      }}
    ></CalendarWithIconFormGroup>
  )
}
