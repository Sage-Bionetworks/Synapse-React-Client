import React from 'react'
import { ArrayFieldTemplateItemType } from '@rjsf/utils'

/** The `ArrayFieldItemTemplate` component is the template used to render an items of an array.
 *
 * @param props - The `ArrayFieldTemplateItemType` props for the component
 */
export default function ArrayFieldItemTemplate<T, F>(
  props: ArrayFieldTemplateItemType<T, F>,
) {
  const {
    children,
    disabled,
    hasToolbar,
    hasMoveDown,
    hasMoveUp,
    index,
    onReorderClick,
    readonly,
    registry,
    uiSchema,
  } = props
  const { MoveDownButton, MoveUpButton } = registry.templates.ButtonTemplates

  return (
    <>
      {children}
      {hasToolbar && (
        <>
          {(hasMoveUp || hasMoveDown) && (
            <MoveUpButton
              disabled={disabled || readonly || !hasMoveUp}
              onClick={onReorderClick(index, index - 1)}
              uiSchema={uiSchema}
            />
          )}
          {(hasMoveUp || hasMoveDown) && (
            <MoveDownButton
              disabled={disabled || readonly || !hasMoveDown}
              onClick={onReorderClick(index, index + 1)}
              uiSchema={uiSchema}
            />
          )}
        </>
      )}
    </>
  )
}
