import React from 'react'
import { useState, useEffect } from 'react'
export type CheckboxProps = {
  label: string
  id: string
  checked?: boolean
  className?: string
  onChange: (newValue: boolean) => void
  isSelectAll?: boolean
  children?: React.ReactChild
  onClick?: (event: React.SyntheticEvent<HTMLDivElement>) => void
}

export const Checkbox: React.FunctionComponent<CheckboxProps> = (
  props: CheckboxProps,
) => {
  const { checked: propsChecked = false, isSelectAll = false } = props
  const [checked, setChecked] = useState<boolean>(propsChecked)
  const [focused, setFocused] = useState<boolean>(false)

  useEffect(() => {
    setChecked(propsChecked)
  }, [propsChecked])

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.checked)
    if (isSelectAll && event.target.checked === false) {
      /* 
         You can click the all checkbox from off -> on
         but clicking it off is a no-op
      */
      setChecked(true)
    } else {
      setChecked(event.target.checked)
    }
  }

  let className = 'checkbox'
  if (focused) {
    className += ' checkbox-focused'
  }
  if (props.className) {
    className += ` ${props.className}`
  }

  return (
    <div className={className} onClick={props.onClick}>
      <label>
        <span>
          <input
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            type="checkbox"
            checked={checked}
            id={props.id}
            onChange={handleCheckboxChange}
          />
          <span>{props.label}</span>
          {props.children ?? <></>}
        </span>
      </label>
    </div>
  )
}
