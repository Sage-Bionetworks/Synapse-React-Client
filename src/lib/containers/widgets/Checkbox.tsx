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
  disabled?: boolean
}

export const Checkbox: React.FunctionComponent<CheckboxProps> = (
  props: CheckboxProps,
) => {
  const {
    checked: propsChecked = false,
    isSelectAll = false,
    disabled = false,
  } = props
  const [checked, setChecked] = useState<boolean>(propsChecked)

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
  if (props.className) {
    className += ` ${props.className}`
  }

  return (
    <div className={className} onClick={props.onClick}>
      <input
        type="checkbox"
        checked={checked}
        id={props.id}
        onChange={handleCheckboxChange}
        disabled={disabled}
      />
      <label htmlFor={props.id}>{props.label}</label>
      {props.children ?? <></>}
    </div>
  )
}
