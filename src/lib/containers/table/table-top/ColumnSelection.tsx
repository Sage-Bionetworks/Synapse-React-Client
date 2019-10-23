import * as React from 'react'
import { Dropdown } from 'react-bootstrap'
import { SelectColumn } from '../../../utils/jsonResponses/Table/SelectColumn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ColumnsSvg from '../../../assets/icons/columns.svg'
import ReactTooltip from 'react-tooltip'
import { TOOLTIP_DELAY_SHOW } from '../SynapseTable'

type ColumnSelectionProps = {
  headers: SelectColumn[]
  isColumnSelected: boolean[]
  visibleColumnCount?: number
  toggleColumnSelection: Function
}

const tooltipColumnSelectionId = 'addAndRemoveColumns'

type ColumnSelectionState = {
  show: boolean
}

export class ColumnSelection extends React.Component<
  ColumnSelectionProps,
  ColumnSelectionState
> {
  constructor(props: ColumnSelectionProps) {
    super(props)
    this.state = {
      show: false,
    }
  }

  // Any click event for the Dropdown will close the dropdown (assuming its open), so we have
  // to handle the onToggle event and manually manage the dropdown open state. If metadata
  // is defined the event occuring is inside the dropdown which we then want to keep open, otherwise
  // we close it.
  onToggle = (
    _show: boolean,
    _event: React.SyntheticEvent<Dropdown<'div'>, Event>,
    metadata: any,
  ) => {
    if (metadata.source) {
      this.setState({
        show: true,
      })
    } else {
      this.setState({
        show: false,
      })
    }
  }

  render() {
    const {
      headers,
      isColumnSelected,
      visibleColumnCount = Infinity,
      toggleColumnSelection,
    } = this.props
    const { show } = this.state
    return (
      <Dropdown onToggle={this.onToggle} show={show}>
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
            const iconStyle: any = { width: '11px', marginRight: '10px' }
            if (!isCurrentColumnSelected) {
              iconStyle.visibility = 'hidden'
            }
            const maybeShowPrimaryColor = isCurrentColumnSelected
              ? 'SRC-primary-text-color'
              : ''
            return (
              <Dropdown.Item
                onSelect={() => toggleColumnSelection(index)()}
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
}
