import React from 'react'

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
  label: string
  value: string
  currentValue?: string
  onChange: (value: string) => void
}

const RadioOption: React.FunctionComponent<RadioOptionProps> = (
  props: RadioOptionProps,
) => {
  return (
    <div onClick={() => props.onChange(props.value)}>
      <input
        id={props.label}
        type="radio"
        checked={props.currentValue === props.value}
        value={props.value}
      />
      <label htmlFor={props.label}>{props.label}</label>
    </div>
  )
}
