import {
  ADDITIONAL_PROPERTY_FLAG,
  ArrayFieldTemplateItemType,
} from '@rjsf/utils'
import React, { useEffect, useState } from 'react'
import { FormGroup } from 'react-bootstrap'
import { getTemplate, getUiOptions, ArrayFieldTemplateProps } from '@rjsf/utils'
import { Collapse } from '@material-ui/core'
import { HelpOutline } from '@material-ui/icons'

/** The `ArrayFieldTemplate` component is the template used to render all items in an array.
 *
 * @param props - The `ArrayFieldTemplateItemType` props for the component
 */
export function ArrayFieldTemplate<T = any, F = any>(
  props: ArrayFieldTemplateProps<T, F>,
) {
  const { idSchema, uiSchema, items, registry, schema } = props
  const uiOptions = getUiOptions<T, F>(uiSchema)
  const ArrayFieldTitleTemplate = getTemplate<'ArrayFieldTitleTemplate', T, F>(
    'ArrayFieldTitleTemplate',
    registry,
    uiOptions,
  )

  const ArrayFieldDescriptionTemplate = getTemplate<
    'ArrayFieldDescriptionTemplate',
    T,
    F
  >('ArrayFieldDescriptionTemplate', registry, uiOptions)
  const ArrayFieldItemTemplate = getTemplate<'ArrayFieldItemTemplate', T, F>(
    'ArrayFieldItemTemplate',
    registry,
    uiOptions,
  )

  // Button templates are not overridden in the uiSchema
  const {
    ButtonTemplates: { AddButton, RemoveButton },
  } = registry.templates

  const isAdditionalProperty = !!props.schema[ADDITIONAL_PROPERTY_FLAG]

  const [showDetails, setShowDetails] = useState(false)
  /**
   * If we have an array of 0 items, go ahead and add one.
   */
  useEffect(() => {
    if (props.items.length === 0) {
      props.onAddClick()
    }
  }, [props])

  return (
    <FormGroup id={idSchema.$id} className={props.className}>
      <div className="LabelContainer">
        <ArrayFieldTitleTemplate {...props} />
        {!isAdditionalProperty && (
          <button
            aria-label="More Info"
            aria-expanded={showDetails}
            onClick={e => {
              e.preventDefault()
              setShowDetails(show => !show)
            }}
          >
            <HelpOutline className="HelpButton SRC-primary-text-color" />
          </button>
        )}
      </div>

      {items && (
        <>
          {items.map(
            ({ key, index, ...itemProps }: ArrayFieldTemplateItemType) => (
              <div
                className={`array-item ${
                  itemProps.hasToolbar ? 'hasToolbar' : ''
                }`}
                key={key}
              >
                <ArrayFieldItemTemplate
                  key={key}
                  index={index}
                  {...itemProps}
                />
                {(isAdditionalProperty || props.items.length > 1) && (
                  <RemoveButton
                    aria-label={`Remove ${props.title}[${index}]`}
                    disabled={props.disabled}
                    onClick={itemProps.onDropIndexClick(index)}
                  />
                )}
                {props.canAdd && index === props.items.length - 1 && (
                  <AddButton
                    aria-label={`Add new ${props.title}`}
                    onClick={props.onAddClick}
                    type="button"
                    disabled={props.disabled}
                  />
                )}
              </div>
            ),
          )}
        </>
      )}
      <Collapse className="field-description" in={showDetails}>
        <ArrayFieldDescriptionTemplate
          idSchema={idSchema}
          schema={schema}
          description={(uiOptions.description || schema.description) ?? ''}
          uiSchema={uiSchema}
          registry={registry}
        />
      </Collapse>
    </FormGroup>
  )
}

export default ArrayFieldTemplate
