import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { ElementWithTooltip } from '../../widgets/ElementWithTooltip'
import { SelectColumn } from '../../../utils/synapseTypes/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { unCamelCase } from '../../../utils/functions/unCamelCase'

type ColumnSelectionProps = {
  headers?: SelectColumn[]
  isColumnSelected: string[]
  /* 
      The dropdown state is held in SynapseTable because the EllipsisDropdown has
      an option to open the dropdown, 'show columns'
    */
  show?: boolean
  onChange?: () => void
  toggleColumnSelection: (name: string) => void
  darkTheme?: boolean
  facetAliases?: {}
}

type MetadataEvent = {
  source: "select" | "click" | "rootClose" | "keydown";
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
    facetAliases
  } = props

  const [show, setShow] = useState(false)
  const onDropdownClick = (_show: boolean, _event: React.SyntheticEvent<Dropdown, Event>, metadata: MetadataEvent) => {
    if (metadata.source === "rootClose") {
      setShow(false)
    } else {
      setShow(true)
    }
  }
  return (
    <Dropdown
      as="span"
      onToggle={(show: boolean, event: React.SyntheticEvent<Dropdown, Event>, metadata: MetadataEvent) =>
        onDropdownClick(show, event, metadata)
      }
      show={show}
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
