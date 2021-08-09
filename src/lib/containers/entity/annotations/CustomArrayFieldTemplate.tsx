import { Add, Close } from '@material-ui/icons'
import { ArrayFieldTemplateProps } from '@sage-bionetworks/rjsf-core'
import React from 'react'
import { Button, FormGroup, FormLabel } from 'react-bootstrap'

/**
 * Custom field template for array properties in a react-jsonschema-form component.
 * Used just to apply custom styling.
 */
export function CustomArrayFieldTemplate<T>(props: ArrayFieldTemplateProps<T>) {
  const { DescriptionField } = props
  return (
    <FormGroup className={props.className}>
      <FormLabel>
        {props.title}
        {props.required && <span className="required">*</span>}
      </FormLabel>
      {props.schema.description && (
        <DescriptionField
          id={`${props.idSchema.$id}__description`}
          description={props.schema.description}
        />
      )}
      {props.items && (
        <>
          {props.items.map((element, index) => (
            <div key={element.key} className="array-item">
              {element.children}
              <Button
                aria-label={`Remove ${props.title}-${index}`}
                variant="transparent-primary-500"
                className="RemoveButton"
                onClick={element.onDropIndexClick(element.index)}
              >
                <Close />
              </Button>
              {props.canAdd && index === props.items.length - 1 && (
                <Button
                  aria-label={`Add new ${props.title}`}
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
                onClick={props.onAddClick}
                type="button"
              >
                Add Item <Add />
              </Button>
            </div>
          )}
        </>
      )}
    </FormGroup>
  )
}
