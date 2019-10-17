import * as React from 'react'
import { Dropdown } from 'react-bootstrap'
import { SelectColumn } from 'lib/utils/jsonResponses/Table/SelectColumn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type ColumnSelectionProps = {
  headers: SelectColumn[]
  isColumnSelected: boolean []
  visibleColumnCount?: number
  toggleColumnSelection: Function
  show?: boolean
}

export const ColumnSelection: React.FunctionComponent<ColumnSelectionProps> = (props) => {
  const {
    headers,
    isColumnSelected,
    visibleColumnCount = Infinity,
    toggleColumnSelection
  } = props
  return (
    <Dropdown.Menu alignRight={true}>
      {
        headers.map(
          (header, index) => {
            let isCurrentColumnSelected: boolean | undefined = isColumnSelected[index]
            if (isCurrentColumnSelected === undefined) {
              isCurrentColumnSelected = (index < visibleColumnCount)
            }
            const iconStyle: any = { width: '11px', marginRight: '10px' }
            if (!isCurrentColumnSelected) {
              iconStyle.visibility = 'hidden'
            }
            const maybeShowPrimaryColor = isCurrentColumnSelected ? 'SRC-primary-text-color' : ''
            return (
              <Dropdown.Item 
                onClick={() => toggleColumnSelection(index)} 
                key={header.name}
                className="SRC-primary-background-color-hover"
              >
                <FontAwesomeIcon
                  style={iconStyle}
                  className={maybeShowPrimaryColor}
                  icon="check"
                />
                {header.name}
              </Dropdown.Item>
            )     
          } 
      )
    }
    </Dropdown.Menu>
  )
}