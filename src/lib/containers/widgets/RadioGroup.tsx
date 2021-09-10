import React, { useState } from 'react'
import { uniqueId as _uniqueId } from 'lodash-es'

export type RadioGroupProps = {
  options: { label: string; value: string }[]
  id: string
  className?: string
  value?: string
  onChange: (value: string) => void
}

export const RadioGroup: React.FunctionComponent<RadioGroupProps> = (
  props: RadioGroupProps,
) => {
  const className = props.className
    ? `radiogroup ${props.className}`
    : `radiogroup`

  return (
    <div className={className}>
      {props.options.map(option => (
        <RadioOption
          groupId={props.id}
          key={option.value}
          label={option.label}
          value={option.value}
          currentValue={props.value}
          onChange={props.onChange}
        />
      ))}
    </div>
  )
}

type RadioOptionProps = {
  groupId: string
  label: string
  value: string
  currentValue?: string
  onChange: (value: string) => void
}

const RadioOption: React.FunctionComponent<RadioOptionProps> = (
  props: RadioOptionProps,
) => {
  const [uniqueId] = useState(_uniqueId('src-radio-'))
  return (
    <div onClick={() => props.onChange(props.value)}>
      <input
        id={uniqueId}
        type="radio"
        checked={props.currentValue === props.value}
        value={props.value}
      />
      <label htmlFor={uniqueId}>{props.label}</label>
    </div>
  )
}
