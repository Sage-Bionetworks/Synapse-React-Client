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
  utc: boolean
  isValidDate?: (currentDate: any) => boolean
}

export const CalendarWithIconInputGroup: React.FunctionComponent<CalendarWithIconInputGroupProps> = ({
  value,
  setterCallback,
  label,
  disabled = false,
  utc,
  isValidDate,
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
          utc={utc}
          // using 24-hour time format
          timeFormat={'HH:mm'}
          onChange={setterCallback}
          inputProps={{ disabled: disabled }}
          isValidDate={isValidDate}
        />
      </InputGroup>
    </Form.Group>
  )
}
