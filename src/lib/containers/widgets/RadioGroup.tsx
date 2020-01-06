import * as React from 'react'

export type RadioGroupProps = {
  options: { label: string; value: string }[]
  id: string
  className?: string
  value?: string
  onChange: Function
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
        <div className="radio" key={option.value}>
          {props.value == option.value}
          <label>
            <span>
              <input
                type="radio"
                checked={props.value === option.value}
                value={option.value}
                onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                  props.onChange(target.value, target.checked)
                }
              />
              <span>{option.label}</span>
            </span>
          </label>
        </div>
      ))}
    </div>
  )
}
