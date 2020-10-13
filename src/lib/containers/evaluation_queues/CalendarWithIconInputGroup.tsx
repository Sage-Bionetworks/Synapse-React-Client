import React from 'react'
import { Moment } from 'moment'
import { Form, InputGroup } from 'react-bootstrap'
import calendarDateIcon from '../../assets/icons/calendar-date.svg'
import Datetime from 'react-datetime'

export type CalendarWithIconInputGroupProps = {
  value: string | Moment
  setterCallback: (value: string | Moment) => void
  label?: string
  disabled?: boolean
}

export const CalendarWithIconInputGroup: React.FunctionComponent<CalendarWithIconInputGroupProps> = ({
  value,
  setterCallback,
  label,
  disabled = false,
}) => {
  return (
    <Form.Group>
      {/*TODO: color synapse gray??*/}
      {label && <label style={{ fontWeight: 'normal' }}>{label}</label>}
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>
            <img src={calendarDateIcon} alt="calendar-date-icon" />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <Datetime
          value={value}
          utc={true}
          timeFormat={'HH:mm:ss'}
          onChange={setterCallback}
          inputProps={{ disabled: disabled }}
        />
      </InputGroup>
    </Form.Group>
  )
}
