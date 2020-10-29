import React from 'react'
import { Moment } from 'moment'
import { Form, InputGroup } from 'react-bootstrap'
import calendarDateIcon from '../../assets/icons/calendar-date.svg'
import Datetime from 'react-datetime'

export type CalendarWithIconFormGroupProps = {
  value: string | Moment
  setterCallback: (value: string | Moment) => void
  label?: string
  disabled?: boolean
  utc: boolean
  isValidDate?: (currentDate: any) => boolean
}

export const CalendarWithIconFormGroup: React.FunctionComponent<CalendarWithIconFormGroupProps> = ({
  value,
  setterCallback,
  label,
  disabled = false,
  utc,
  isValidDate,
}) => {
  return (
    <Form.Group className="calendar-with-icon-form-group">
      {/*TODO: color synapse gray??*/}
      {label && <label>{label}</label>}
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>
            <img
              height="14px"
              src={calendarDateIcon}
              alt="calendar-date-icon"
            />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <Datetime
          value={value}
          utc={utc}
          // using 24-hour time format
          timeFormat={'HH:mm [UTC]Z'}
          onChange={setterCallback}
          inputProps={{
            disabled: disabled,
            className: 'form-control',
            style: { borderBottomLeftRadius: 0, borderTopLeftRadius: 0 },
          }}
          isValidDate={isValidDate}
        />
      </InputGroup>
    </Form.Group>
  )
}
