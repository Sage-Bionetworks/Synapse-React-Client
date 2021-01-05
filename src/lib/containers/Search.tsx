import * as React from 'react'
import { QueryWrapperChildProps } from './QueryWrapper'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCaretDown,
  faCaretUp,
  faSearch,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { insertConditionsFromSearchParams } from '../utils/functions/sqlFunctions'
import TotalQueryResults from './TotalQueryResults'
import getColorPalette from './ColorGradient'
import { Dropdown } from 'react-bootstrap'
import { unCamelCase } from '../utils/functions/unCamelCase'

export const SEARCH_CLASS_CSS = 'SRC-search-component'

library.add(faCaretDown)
library.add(faCaretUp)
library.add(faSearch)
library.add(faTimes)

type SearchState = {
  dropdownIndex: number
  show: boolean
  searchText: string
  submittedSearchText: string
  lastSearchedFacet: string
}
export type Searchable = {
  columnName: string
  hintText: string
}[]

export type SearchProps = {
  searchable: Searchable
  isQueryWrapperMenuChild?: boolean
}

type InternalSearchProps = QueryWrapperChildProps & SearchProps

class Search extends React.Component<InternalSearchProps, SearchState> {
  public inputRef: React.RefObject<HTMLInputElement>

  constructor(props: InternalSearchProps) {
    super(props)
    this.state = {
      dropdownIndex: 0,
      show: false,
      searchText: '',
      submittedSearchText: '',
      lastSearchedFacet: '',
    }
    this.inputRef = React.createRef()
  }

  componentDidUpdate(prevProps: InternalSearchProps) {
    if (this.props.isLoading === false && prevProps.isLoading === true) {
      // highlighting will sometimes outpace the render method for react, adding the slight delay
      // mitigates this
      setTimeout(this.highlightText, 100)
    }
  }

  public toggleDropdown = (value: boolean) => (_: React.SyntheticEvent) => {
    this.setState({
      show: value,
    })
  }

  public setDropdownIndex = (index: number) => (_: React.SyntheticEvent) => {
    this.inputRef.current && this.inputRef.current.focus()
    this.setState({
      dropdownIndex: index,
      show: false,
    })
  }

  public highlightText = () => {
    const { submittedSearchText, dropdownIndex } = this.state
    const {
      searchable,
      rgbIndex,
      facetAliases = {},
      isQueryWrapperMenuChild = true,
    } = this.props
    const { colorPalette } = getColorPalette(rgbIndex!, 1)
    const originalColor = colorPalette[0]
    const searchItem = searchable[dropdownIndex]

    const highlightedSpans = document.querySelectorAll<HTMLSpanElement>(
      '.highlight',
    )
    highlightedSpans.forEach(span => {
      span.outerHTML = span.innerText
    })
    if (submittedSearchText) {
      const searchItemView =
        facetAliases[searchItem.columnName] ||
        unCamelCase(searchItem.columnName)
      const frontText = isQueryWrapperMenuChild ? `.${SEARCH_CLASS_CSS} ` : ''
      const querySelector = `${frontText}[data-search-handle="${searchItemView}"]`
      const trs = document.querySelectorAll<HTMLElement>(querySelector)
      // Target elements and apply styles
      trs.forEach(textElement => {
        if (textElement.innerHTML !== null) {
          const regex = new RegExp(submittedSearchText, 'gi')
          const match = textElement.innerText.match(regex)
          if (match) {
            // innerHTML contains only text
            textElement.innerHTML = textElement.innerHTML.replace(
              regex,
              match => {
                return `<span style="background: ${originalColor}; color: white;" class="highlight">${match}</span>`
              },
            )
          }
        }
      })
    }
  }

  public static addEscapeCharacters = (searchText: string) => {
    // We have to escape the following characters
    // ' % \
    let escapedSearchText = searchText
    // escape ' by adding additional '
    escapedSearchText = escapedSearchText.split("'").join("''")
    // escape % by adding \
    // eslint-disable-next-line no-useless-escape
    escapedSearchText = escapedSearchText.split('%').join('%')
    // escape \ by adding \
    escapedSearchText = escapedSearchText.split('\\').join('\\\\')
    return escapedSearchText
  }

  public clearSearchText = () => {
    this.setState({
      searchText: '',
    })
  }

  public search = (event: React.SyntheticEvent<HTMLFormElement>) => {
    // form completion by default causes the page to reload, so we prevent that
    event.preventDefault()
    const { searchText, dropdownIndex } = this.state

    const { searchable } = this.props
    const searchItem = searchable[dropdownIndex]
    // Always grabs initQueryRequest so that it doesn't build a chain of
    // LIKE clauses
    const lastQueryRequestDeepCopy = this.props.getInitQueryRequest!()
    const { sql } = lastQueryRequestDeepCopy.query
    const searchParams = {
      [searchItem.columnName]: Search.addEscapeCharacters(searchText),
    }
    const newSql = insertConditionsFromSearchParams(searchParams, sql)
    lastQueryRequestDeepCopy.query.sql = newSql
    lastQueryRequestDeepCopy.query.offset = 0
    this.setState({
      submittedSearchText: searchText,
      lastSearchedFacet: searchItem.columnName,
    })
    this.props.executeQueryRequest!(lastQueryRequestDeepCopy)
  }

  public handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      searchText: event.currentTarget.value,
    })
  }

  render() {
    const {
      searchable,
      isLoading,
      getLastQueryRequest,
      unitDescription = '',
      facetAliases = {},
    } = this.props
    const {
      show,
      dropdownIndex,
      searchText,
      submittedSearchText,
      lastSearchedFacet,
    } = this.state
    const searchableItem = searchable[dropdownIndex]
    const containerStyle: React.CSSProperties = {
      border: '1px solid #DCDCDC',
      display: 'flex',
      marginTop: 10,
      alignItems: 'center',
    }
    const fieldStyle: React.CSSProperties = {
      background: '#F9F9F9',
      height: '51px',
      display: 'inline-flex',
      alignItems: 'center',
    }
    const caretIconStyle: React.CSSProperties = {
      fontSize: '16px',
      marginRight: 8,
    }
    const searchIconStyle: React.CSSProperties = {
      color: '#C4C4C4',
      position: 'absolute',
      left: 10,
      fontSize: 16,
    }
    const cancelIconStyle: React.CSSProperties = {
      width: 30,
      height: 30,
      position: 'absolute',
      right: 10,
    }
    const inputStyle: React.CSSProperties = {
      border: 1,
      paddingLeft: 40,
      height: 49,
    }
    const dropdownBtnStyle: React.CSSProperties = {
      justifyContent: 'space-between',
      margin: 0,
      paddingLeft: 10,
    }
    const totalQueryResultsStyle: React.CSSProperties = {
      margin: '20px 0px',
    }
    const curFacetDisplayText =
      facetAliases[searchableItem.columnName] ||
      unCamelCase(searchableItem.columnName)
    const lastSearchedFacetDisplayText =
      facetAliases[lastSearchedFacet] || unCamelCase(lastSearchedFacet)
    const usedUnitDescription = submittedSearchText
      ? `${unitDescription} containing "${submittedSearchText}" in ${lastSearchedFacetDisplayText}`
      : unitDescription
    return (
      <div>
        <p>
          Search within <strong> {curFacetDisplayText} </strong> using keywords
        </p>
        <div style={containerStyle}>
          <div className="SRC-centerContent SRC-fullWidth">
            <div
              style={{
                ...fieldStyle,
                flex: 1,
                borderRight: '1px solid #DCDCDC',
              }}
            >
              <Dropdown
                show={show}
                onToggle={() => this.setState({ show: !show })}
                className="SRC-inherit-height SRC-fullWidth"
              >
                <Dropdown.Toggle
                  style={dropdownBtnStyle}
                  className="SRC-primary-color-hover-dropdown SRC-inlineFlex SRC-inherit-height SRC-fullWidth"
                  variant="light"
                  id="search-toggle"
                >
                  {curFacetDisplayText}
                  <FontAwesomeIcon
                    style={caretIconStyle}
                    icon={show ? 'caret-up' : 'caret-down'}
                    color={show ? 'white' : undefined}
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {searchable.map((el, index) => {
                    const displayName =
                      facetAliases[el.columnName] || unCamelCase(el.columnName)
                    return (
                      <Dropdown.Item
                        // @ts-ignore
                        onSelect={this.setDropdownIndex(index)}
                        key={displayName}
                        className="SRC-hand-cursor SRC-primary-background-color-hover"
                      >
                        {displayName}
                      </Dropdown.Item>
                    )
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <form
              style={{
                ...fieldStyle,
                flex: 3,
                alignItems: 'center',
                position: 'relative',
              }}
              onSubmit={this.search}
            >
              <FontAwesomeIcon
                size={'sm'}
                style={searchIconStyle}
                icon={'search'}
              />
              <input
                placeholder={`e.g. "${searchableItem.hintText}"`}
                style={inputStyle}
                ref={this.inputRef}
                onChange={this.handleChange}
                value={searchText}
                type="text"
                className="SRC-fullWidth"
              />
              {searchText.length > 0 && (
                <button
                  type="reset"
                  className="SRC-button-focus-primary-color SRC-centerContentInline"
                  style={cancelIconStyle}
                  onClick={this.clearSearchText}
                  tabIndex={0}
                >
                  <FontAwesomeIcon
                    size={'sm'}
                    color={'#C4C4C4'}
                    style={{ fontSize: 16 }}
                    icon={'times'}
                  />
                </button>
              )}
            </form>
          </div>
        </div>
        <TotalQueryResults
          style={totalQueryResultsStyle}
          isLoading={isLoading!}
          frontText={'Displaying'}
          token={this.props.token}
          lastQueryRequest={getLastQueryRequest!()}
          unitDescription={usedUnitDescription}
        />
      </div>
    )
  }
}

export default Search
