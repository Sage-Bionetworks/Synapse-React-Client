import React, { useRef, useState } from 'react'
import IconSvg from '../IconSvg'
import useResizeObserver from '@react-hook/resize-observer'

export default function ExpandableTableDataCell(
  props: JSX.IntrinsicElements['td'],
) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isOverflowingWhenNotExpanded, setIsOverflowingWhenNotExpanded] =
    useState(false)
  const tdRef = useRef<HTMLTableDataCellElement | null>(null)

  /**
   * When the cell is resized, check if it is overflowing.
   */
  useResizeObserver(tdRef, ({ target }) => {
    // Don't check overflow if the cell has been expanded by the user!
    if (!isExpanded) {
      if (target) {
        /**
         * TODO: Not all content elements are <p> tags
         *
         * Doing this "right" would require a major SynapseTableCell refactor.
         * Should we forward a ref to the <p>? Should we not wrap content so the `td` gets the correct scrollWidth?
         *
         * Note that the CSS also assumes that the table cell content is always wrapped in a <p>
         */
        const contentElement = target.getElementsByTagName('p')[0]
        if (contentElement) {
          setIsOverflowingWhenNotExpanded(
            contentElement.scrollHeight > contentElement.clientHeight ||
              contentElement.scrollWidth > contentElement.clientWidth,
          )
        }
      }
    }
  })

  return (
    <td
      {...props}
      className={`ExpandableTableData ${
        props.className ? props.className : ''
      }`}
      aria-expanded={isExpanded}
      ref={tdRef}
    >
      {isOverflowingWhenNotExpanded && (
        <button
          className="ExpandableTableData__expandButton"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <IconSvg
            options={{
              color: '#aeb5bc', // gray-600
              icon: isExpanded ? 'minusBoxOutline' : 'addBoxOutline',
            }}
          ></IconSvg>
        </button>
      )}
      {props.children}
    </td>
  )
}
