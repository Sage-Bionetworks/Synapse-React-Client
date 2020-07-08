import * as React from 'react'
import { useState, useEffect } from 'react'
export type CheckboxProps = {
  label: string
  id: string
  checked?: boolean
  className?: string
  onChange: Function
  isSelectAll?: boolean
}

export const Checkbox: React.FunctionComponent<CheckboxProps> = (
  props: CheckboxProps,
) => {
  const { checked: propsChecked = false, isSelectAll = false } = props
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
      return
    } else {
      setChecked(event.target.checked)
    }
  }

  const className = props.className ? `checkbox ${props.className}` : `checkbox`

  return (
    <div className={className}>
      <label>
        <span>
          <input
            type="checkbox"
            checked={checked}
            id={props.id}
            onChange={handleCheckboxChange}
          />
          <span>{props.label}</span>
        </span>
      </label>
    </div>
  )
}
