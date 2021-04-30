import React, { useState } from 'react'

export type RadioGroupProps = {
  options: { label: string; value: string }[]
  id: string
  className?: string
  value?: string
  onChange: (value: string, checked: boolean) => void
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
  onChange: (value: string, checked: boolean) => void
}

const RadioOption: React.FunctionComponent<RadioOptionProps> = (
  props: RadioOptionProps,
) => {
  const [focused, setFocused] = useState(false)
  return (
    <div className={`radio ${focused ? 'radio-focused' : ''}`}>
      <label>
        <span>
          <input
            type="radio"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            checked={props.currentValue === props.value}
            value={props.value}
            onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
              props.onChange(target.value, target.checked)
            }
          />
          <span>{props.label}</span>
        </span>
      </label>
    </div>
  )
}
