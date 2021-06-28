import { Close, Add } from '@material-ui/icons'
import { ArrayFieldTemplateProps } from '@rjsf/core'
import React from 'react'
import { Button, FormGroup, FormLabel } from 'react-bootstrap'
import { ADDITIONAL_PROPERTY_FLAG } from 'react-jsonschema-form/lib/utils'

export function CustomArrayFieldTemplate<T>(props: ArrayFieldTemplateProps<T>) {
  console.log(props)
  return (
    <FormGroup className={props.className}>
      <FormLabel>{props.title}</FormLabel>
      {props.items && (
        <>
          {props.items.map((element, index) => (
            <div
              style={{ display: 'flex' }}
              key={element.key}
              className={element.className}
            >
              <div style={{ width: '100%' }}>{element.children}</div>
              {(props.schema[ADDITIONAL_PROPERTY_FLAG] || index !== 0) && (
                <Button
                  variant="transparent-primary-500"
                  className="RemoveButton"
                  onClick={() => {
                    element.onDropIndexClick(element.index)()
                  }}
                >
                  <Close />
                </Button>
              )}
              {props.canAdd && index === props.items.length - 1 && (
                <Button
                  variant="primary-500"
                  className="AddButton"
                  onClick={props.onAddClick}
                  type="button"
                >
                  <Add />
                </Button>
              )}
            </div>
          ))}
          {props.items.length === 0 && (
            <div style={{ display: 'flex' }}>
              <Button
                variant="primary-500"
                className="AddButton"
                onClick={props.onAddClick}
                type="button"
              >
                <Add />
              </Button>
            </div>
          )}
        </>
      )}
    </FormGroup>
  )
}
