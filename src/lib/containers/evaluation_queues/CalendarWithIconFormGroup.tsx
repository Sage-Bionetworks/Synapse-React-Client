import React from 'react'
import { Moment } from 'moment-timezone'
import moment from 'moment-timezone'
import { Form, InputGroup } from 'react-bootstrap'
import { ReactComponent as CalendarClockIcon } from '../../assets/icons/calendar-clock.svg'
import Datetime from 'react-datetime'
import 'react-datetime/css/react-datetime.css'

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
      {label && <label>{label}</label>}
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>
            <CalendarClockIcon />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <Datetime
          value={value}
          utc={utc}
          // using 24-hour time format
          timeFormat={'HH:mm z'}
          displayTimeZone={moment.tz.guess()}
          onChange={setterCallback}
          inputProps={{
            disabled: disabled,
            className: 'form-control calendar-date-time-input rounded-right',
            // Chrome for some reason decides to autofill this input box with email address, so we must disable autofill
            // this is a hacky, but consistent way to disable autofill because Chrome does not respect the spec :(
            // https://bugs.chromium.org/p/chromium/issues/detail?id=914451
            autoComplete: 'new-password',
          }}
          isValidDate={isValidDate}
        />
      </InputGroup>
    </Form.Group>
  )
}
