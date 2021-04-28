import React, { useState } from 'react'
import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownButton,
  Table,
} from 'react-bootstrap'

/**
 * A simple component that displays all of our reusable button styles
 */
export const ButtonDemo: React.FunctionComponent = () => {
  const [buttonClass, setButtonClass] = useState('')
  const [buttonVariant, setButtonVariant] = useState('primary-base')
  const [buttonSize, setButtonSize] = useState<'sm' | 'lg' | undefined>(
    undefined,
  )

  const shapeClasses: string[] = ['', 'pill', 'pill-xl']
  const colorVariants: string[] = [
    'primary-base',
    'primary-active',
    'primary-300',
    'primary-500',
    'primary-700',
    'primary-900',
    'light-primary-base',
    'light-primary-active',
    'light-primary-300',
    'light-primary-500',
    'light-primary-700',
    'light-primary-900',
    'gray-primary-500',
    'secondary',
    'light-secondary',
    'default',
    'white',
    'light',
  ]
  return (
    <div className="bootstrap-4-backport">
      <h2>Custom Button</h2>
      <>
        <DropdownButton
          id="button-shape-select"
          title="Button Shape"
          as={ButtonGroup}
        >
          {shapeClasses.map(shape => {
            return (
              <Dropdown.Item key={shape} onClick={() => setButtonClass(shape)}>
                {shape === '' ? 'Default' : shape}
              </Dropdown.Item>
            )
          })}
        </DropdownButton>

        <DropdownButton
          id="button-variant-select"
          title="Button Color Variant"
          as={ButtonGroup}
        >
          {colorVariants.map(variant => {
            return (
              <Dropdown.Item
                key={variant}
                onClick={() => setButtonVariant(variant)}
              >
                {variant}
              </Dropdown.Item>
            )
          })}
        </DropdownButton>

        <DropdownButton
          id="button-size-select"
          title="Button Size"
          as={ButtonGroup}
        >
          <Dropdown.Item onClick={() => setButtonSize(undefined)}>
            Default
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setButtonSize('sm')}>
            Small
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setButtonSize('lg')}>
            Large
          </Dropdown.Item>
        </DropdownButton>
      </>

      <Button
        className={buttonClass}
        size={buttonSize}
        variant={buttonVariant}
        style={{ display: 'block', margin: '30px auto' }}
      >
        Custom Button
      </Button>
      <h2>Shapes and Sizes</h2>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Regular</th>
            <th>sm</th>
            <th>lg</th>
          </tr>
        </thead>
        <tbody>
          {shapeClasses.map(variant => {
            return (
              <tr key={variant}>
                <td>{variant === '' ? 'Default' : variant}</td>
                <td>
                  <Button className={variant}>Click Me</Button>
                </td>
                <td>
                  <Button className={variant} size="sm">
                    Click Me
                  </Button>
                </td>
                <td>
                  <Button className={variant} size="lg">
                    Click Me
                  </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      <h2>Colors</h2>
      <Table>
        <thead>
          <tr>
            <th>Color</th>
            <th>Button</th>
          </tr>
        </thead>
        <tbody>
          {colorVariants.map(color => {
            return (
              <tr key={color}>
                <td>{color}</td>
                <td>
                  <Button variant={color}>Click Me</Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}
