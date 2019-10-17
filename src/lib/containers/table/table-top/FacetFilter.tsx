import * as React from 'react'
import { Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  FacetColumnResultValues,
  FacetColumnResultValueCount,
} from '../../../utils/jsonResponses/Table/FacetColumnResult'

type FacetFilterProps = {
  facetColumnResult: FacetColumnResultValues
  isAllFilterSelectedForFacet: boolean
}

type FacetFilterState = {
  show: boolean
}

export default class FacetFilter extends React.Component<
  FacetFilterProps,
  FacetFilterState
> {
  constructor(props: FacetFilterProps) {
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
    if (!this.state.show && metadata.source) {
      this.setState({
        show: true,
      })
    } else if (this.state.show && !metadata.source) {
      this.setState({
        show: false,
      })
    }
  }

  render = () => {
    const { facetColumnResult, isAllFilterSelectedForFacet } = this.props
    const { show } = this.state
    const color = show ? 'white' : ''
    return (
      <Dropdown show={show} onToggle={this.onToggle}>
        <Dropdown.Toggle
          className="SRC-primary-text-color SRC-primary-background-color-hover"
          id={facetColumnResult.columnName}
          variant={'light'}
        >
          <FontAwesomeIcon
            style={{ margin: 'auto' }}
            size={'1x'}
            icon="filter"
            color={color}
          />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>
            <li className="checkbox SRC-table-checkbox">
              <label
                className="dropdownList SRC-border-bottom-only SRC-overflowWrap SRC-base-font SRC-fullWidth"
                style={{ paddingBottom: 10 }}
              >
                <input
                  checked={isAllFilterSelectedForFacet}
                  className="SRC-facet-checkboxes"
                  type="checkbox"
                />
                <span> All </span>
              </label>
            </li>
          </Dropdown.Item>
          {facetColumnResult.facetValues.map(
            (facetColumnResultValueCount: FacetColumnResultValueCount) => {
              const { value: facetValue, count } = facetColumnResultValueCount
              let displayValue = facetValue
              if (
                displayValue === 'org.sagebionetworks.UNDEFINED_NULL_NOTSET'
              ) {
                displayValue = 'unannotated'
              }
              return (
                <Dropdown.Item key={facetValue}>
                  <li className="checkbox SRC-table-checkbox" key={facetValue}>
                    <label className="dropdownList SRC-overflowWrap SRC-base-font SRC-fullWidth">
                      <input
                        className="SRC-facet-checkboxes"
                        type="checkbox"
                        value={facetValue}
                      />
                      <span>
                        {displayValue}
                        <span style={{ color: '#DDDDDF', marginLeft: '3px' }}>
                          {' '}
                          ({count}){' '}
                        </span>
                      </span>
                    </label>
                  </li>
                </Dropdown.Item>
              )
            },
          )}
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}
