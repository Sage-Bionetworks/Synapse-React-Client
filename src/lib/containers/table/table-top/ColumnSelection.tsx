import * as React from 'react'
import { Dropdown } from 'react-bootstrap'
import { SelectColumn } from '../../../utils/synapseTypes/Table/SelectColumn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ColumnsSvg from '../../../assets/icons/columns.svg'
import ReactTooltip from 'react-tooltip'
import { TOOLTIP_DELAY_SHOW } from '../SynapseTableConstants'

type ColumnSelectionProps = {
  headers: SelectColumn[]
  isColumnSelected: boolean[]
  visibleColumnCount?: number
  show: boolean
  onToggle: (
    _show: boolean,
    _event: React.SyntheticEvent<any, Event>,
    metadata: any,
  ) => void
  toggleColumnSelection: (
    index: number,
  ) => (_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void
}

const tooltipColumnSelectionId = 'addAndRemoveColumns'

export const ColumnSelection: React.FunctionComponent<ColumnSelectionProps> = (
  props: ColumnSelectionProps,
) => {
  const {
    headers,
    isColumnSelected,
    visibleColumnCount = Infinity,
    show,
    onToggle,
    toggleColumnSelection,
  } = props
  return (
    <Dropdown
      onToggle={(show: boolean, event: any, metadata: any) =>
        onToggle(show, event, metadata)
      }
      show={show}
    >
      <Dropdown.Toggle
        data-for={tooltipColumnSelectionId}
        id={tooltipColumnSelectionId}
        data-tip="Add / Remove Columns"
        variant="light"
      >
        <img alt="columns selection" src={ColumnsSvg} />
      </Dropdown.Toggle>
      {/* There's a known issue if the number of dropdown items is very large, ~30+, the dropdown
          will unexpectedly render with the list going upwards instead of downwards.
        */}
      <Dropdown.Menu
        className="SRC-primary-color-hover-dropdown"
        alignRight={true}
      >
        {headers.map((header, index) => {
          let isCurrentColumnSelected: boolean | undefined =
            isColumnSelected[index]
          if (isCurrentColumnSelected === undefined) {
            isCurrentColumnSelected = index < visibleColumnCount
          }
          const iconStyle: React.CSSProperties = {
            width: '11px',
            marginRight: '10px',
          }
          if (!isCurrentColumnSelected) {
            iconStyle.visibility = 'hidden'
          }
          const maybeShowPrimaryColor = isCurrentColumnSelected
            ? 'SRC-primary-text-color'
            : ''
          return (
            <Dropdown.Item
              // @ts-ignore
              onClick={toggleColumnSelection(index)}
              key={header.name}
            >
              <FontAwesomeIcon
                style={iconStyle}
                className={maybeShowPrimaryColor}
                icon="check"
              />
              {header.name}
            </Dropdown.Item>
          )
        })}
      </Dropdown.Menu>
      <ReactTooltip
        delayShow={TOOLTIP_DELAY_SHOW}
        place="top"
        type="dark"
        effect="solid"
        id={tooltipColumnSelectionId}
      />
    </Dropdown>
  )
}
