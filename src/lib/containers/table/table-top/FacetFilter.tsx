import * as React from 'react'
import { Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  FacetColumnResultValues,
  FacetColumnResultValueCount,
} from '../../../utils/jsonResponses/Table/FacetColumnResult'
import { SELECT_ALL } from '../SynapseTable'
import { getIsValueSelected } from '../../../utils/modules/facetUtils'
import { FacetSelection } from '../../../containers/QueryWrapper'

type FacetFilterProps = {
  facetColumnResult: FacetColumnResultValues
  isAllFilterSelectedForFacet: boolean
  applyChanges: Function
  lastFacetSelection: FacetSelection
  isLoading: boolean
}

type FacetFilterState = {
  show: boolean
}

export default class FacetFilter extends React.Component<
  FacetFilterProps,
  FacetFilterState
> {
  public ref: React.Ref<HTMLSpanElement>

  constructor(props: FacetFilterProps) {
    super(props)
    this.state = {
      show: false,
    }
    this.ref = React.createRef()
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
    const {
      facetColumnResult,
      isAllFilterSelectedForFacet,
      applyChanges,
      isLoading,
      lastFacetSelection,
    } = this.props
    const { columnName } = facetColumnResult
    const { show } = this.state
    const color = show ? 'white' : ''
    const allRef: React.Ref<HTMLInputElement> = React.createRef()
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
          <Dropdown.Item
            onClick={() => {
              allRef.current!.click()
            }}
          >
            <li className="checkbox SRC-table-checkbox">
              <label
                className="dropdownList SRC-border-bottom-only SRC-overflowWrap SRC-base-font SRC-fullWidth"
                style={{ paddingBottom: 10 }}
              >
                <input
                  ref={allRef}
                  onClick={event =>
                    applyChanges({
                      ref: this.ref,
                      columnName,
                      selector: SELECT_ALL,
                    })(event)
                  }
                  checked={isAllFilterSelectedForFacet}
                  className="SRC-facet-checkboxes"
                  type="checkbox"
                />
                <span> All </span>
              </label>
            </li>
          </Dropdown.Item>
          <span ref={this.ref}>
            {facetColumnResult.facetValues.map(
              (facetColumnResultValueCount: FacetColumnResultValueCount) => {
                const { value: facetValue, count } = facetColumnResultValueCount
                let displayValue = facetValue
                if (
                  displayValue === 'org.sagebionetworks.UNDEFINED_NULL_NOTSET'
                ) {
                  displayValue = 'unannotated'
                }
                const isValueSelected = isAllFilterSelectedForFacet
                  ? false
                  : getIsValueSelected({
                      columnName,
                      isLoading,
                      lastFacetSelection,
                      curFacetSelection: facetColumnResultValueCount,
                    })
                const inputRef: React.Ref<HTMLInputElement> = React.createRef()
                return (
                  <Dropdown.Item
                    onClick={() => {
                      inputRef.current!.click()
                    }}
                    key={facetValue}
                  >
                    <li
                      className="checkbox SRC-table-checkbox"
                      key={facetValue}
                    >
                      <label className="dropdownList SRC-overflowWrap SRC-base-font SRC-fullWidth">
                        <input
                          ref={inputRef}
                          onChange={applyChanges({
                            ref: this.ref,
                            columnName,
                            facetValue,
                          })}
                          checked={isValueSelected}
                          className="SRC-facet-checkboxes"
                          type="checkbox"
                          value={facetValue}
                        />
                        <span>
                          {displayValue}
                          <span style={{ color: '#DDDDDF', marginLeft: '3px' }}>
                            ({count})
                          </span>
                        </span>
                      </label>
                    </li>
                  </Dropdown.Item>
                )
              },
            )}
          </span>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}
