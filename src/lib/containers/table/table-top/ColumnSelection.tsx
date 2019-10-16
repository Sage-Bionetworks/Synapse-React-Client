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
        headers.slice(0,17).map(
          (header, index) => {
            let isCurrentColumnSelected: boolean | undefined = isColumnSelected[index]
            if (isColumnSelected === undefined) {
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