import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { ElementWithTooltip } from '../../widgets/ElementWithTooltip'
import { SelectColumn } from '../../../utils/synapseTypes/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { unCamelCase } from '../../../utils/functions/unCamelCase'
import { useState } from 'react'

type ColumnSelectionProps = {
  headers?: SelectColumn[]
  isColumnSelected: string[]
  /* 
      The dropdown state is held in SynapseTable because the EllipsisDropdown has
      an option to open the dropdown, 'show columns'
    */
  show?: boolean
  onChange?: Function
  toggleColumnSelection: (name: string) => void
  darkTheme?: boolean
  facetAliases?: {}
}

const tooltipColumnSelectionId = 'addAndRemoveColumns'

export const ColumnSelection: React.FunctionComponent<ColumnSelectionProps> = (
  props: ColumnSelectionProps,
) => {
  const {
    headers,
    isColumnSelected,
    toggleColumnSelection,
    darkTheme,
    facetAliases,
    show: showFromProps,
    onChange,
  } = props

  let [show, setShow] = useState(false)

  let [usedShow, usedSetShow] =
    showFromProps !== undefined ? [showFromProps, onChange!] : [show, setShow]

  const onDropdownClick = (_show: boolean, _event: any, metadata: any) => {
    // Any click event for the Dropdown will close the dropdown (assuming its open), so we have
    // to handle the onToggle event and manually manage the dropdown open state. If metadata
    // is defined the event occuring is inside the dropdown which we then want to keep open, otherwise
    // we close it.
    if (metadata.source) {
      usedSetShow(true)
    } else {
      usedSetShow(false)
    }
  }
  return (
    <Dropdown
      as="span"
      onToggle={(show: boolean, event: any, metadata: any) =>
        onDropdownClick(show, event, metadata)
      }
      show={usedShow}
      drop="down"
    >
      <ElementWithTooltip
        idForToolTip={tooltipColumnSelectionId}
        tooltipText={'Add / Remove Table Columns'}
        icon={darkTheme ? "columnsdark": "columns"}
        darkTheme={darkTheme}
      ></ElementWithTooltip>

      {/* There's a known issue if the number of dropdown items is very large, ~30+, the dropdown
          will unexpectedly render with the list going upwards instead of downwards.
        */}
      <Dropdown.Menu
        className="SRC-primary-color-hover-dropdown"
        alignRight={true}
      >
        {headers?.map(header => {
          const { name } = header
          const isCurrentColumnSelected = isColumnSelected.includes(name)
          const iconStyle: React.CSSProperties = {
            width: '11px',
            marginRight: '10px',
            visibility: isCurrentColumnSelected ? undefined : 'hidden',
          }
          const maybeShowPrimaryColor = isCurrentColumnSelected
            ? 'SRC-primary-text-color'
            : ''
          return (
            <Dropdown.Item
              // @ts-ignore
              onClick={() => toggleColumnSelection(name)}
              key={name}
            >
              <FontAwesomeIcon
                style={iconStyle}
                className={maybeShowPrimaryColor}
                icon="check"
              />
              {unCamelCase(name, facetAliases)}
            </Dropdown.Item>
          )
        })}
      </Dropdown.Menu>
    </Dropdown>
  )
}
