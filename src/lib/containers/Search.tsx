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
import { insertConditionsFromSearchParams } from '../utils/modules/sqlFunctions'
import TotalQueryResults from './TotalQueryResults'
import getColorPallette from './ColorGradient'
import { SEARCH_CLASS_CSS } from './QueryWrapperMenu'

library.add(faCaretDown)
library.add(faCaretUp)
library.add(faSearch)
library.add(faTimes)

type SearchState = {
  dropdownIndex: number
  isSearchableDropdownOpen: boolean
  searchText: string
  submittedSearchText: string
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
  constructor(props: InternalSearchProps) {
    super(props)
    this.state = {
      dropdownIndex: 0,
      isSearchableDropdownOpen: false,
      searchText: '',
      submittedSearchText: '',
    }
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
      isSearchableDropdownOpen: value,
    })
  }

  public setDropdownIndex = (index: number) => (_: React.SyntheticEvent) => {
    this.setState({
      dropdownIndex: index,
      isSearchableDropdownOpen: false,
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
    const { colorPalette } = getColorPallette(rgbIndex!, 1)
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
        facetAliases[searchItem.columnName] || searchItem.columnName
      const frontText = isQueryWrapperMenuChild ? `.${SEARCH_CLASS_CSS} ` : ''
      const querySelector =
        frontText + `[data-search-handle="${searchItemView}"]`
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
    let { sql } = lastQueryRequestDeepCopy.query
    const searchParams = {
      [searchItem.columnName]: Search.addEscapeCharacters(searchText),
    }
    const newSql = insertConditionsFromSearchParams(searchParams, sql)
    lastQueryRequestDeepCopy.query.sql = newSql
    this.setState({
      submittedSearchText: searchText,
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
      data,
      isLoading,
      facet,
      unitDescription = '',
      facetAliases = {},
    } = this.props
    const {
      isSearchableDropdownOpen,
      dropdownIndex,
      searchText,
      submittedSearchText,
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
    const ulStyle: React.CSSProperties = {
      width: 'inherit',
      left: -10,
      paddingBottom: 0,
      paddingTop: 0,
    }
    const liStyle: React.CSSProperties = {
      paddingLeft: '10px',
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
    }
    const totalQueryResultsStyle: React.CSSProperties = {
      margin: '20px 0px',
    }
    const curFacetDisplayText =
      facetAliases[searchableItem.columnName] || searchableItem.columnName
    let usedUnitDescription = unitDescription
    if (submittedSearchText !== '') {
      usedUnitDescription = `${unitDescription} containing "${submittedSearchText}" in ${curFacetDisplayText}`
    }
    return (
      <div>
        <p>
          Search within <strong> {curFacetDisplayText} </strong> using keywords
        </p>
        <div style={containerStyle}>
          {isSearchableDropdownOpen && (
            <button
              onClick={this.toggleDropdown(false)}
              className={'SRC-menu-wall'}
            />
          )}
          <div className="SRC-centerContent SRC-fullWidth">
            <div
              style={{
                ...fieldStyle,
                flex: 1,
                paddingLeft: 10,
                borderRight: '1px solid #DCDCDC',
              }}
            >
              <div
                id="search-dropdown"
                className="SRC-inherit-height SRC-fullWidth"
              >
                <div className="SRC-centerContent SRC-inherit-height">
                  <button
                    style={dropdownBtnStyle}
                    className="SRC-inlineFlex SRC-fullWidth"
                    onClick={this.toggleDropdown(!isSearchableDropdownOpen)}
                  >
                    {curFacetDisplayText}
                    <FontAwesomeIcon
                      style={caretIconStyle}
                      icon={
                        isSearchableDropdownOpen ? 'caret-up' : 'caret-down'
                      }
                    />
                  </button>
                </div>
                <div
                  className={
                    'dropdown ' + (isSearchableDropdownOpen ? 'open' : '')
                  }
                >
                  <ul
                    aria-labelledby="search-dropdown"
                    style={ulStyle}
                    className="SRC-search-dropdown dropdown-menu SRC-forceLeftDropdown dropdown-menu-left"
                  >
                    {searchable.map((el, index) => {
                      const displayName =
                        facetAliases[el.columnName] || el.columnName
                      return (
                        <li
                          style={liStyle}
                          onClick={this.setDropdownIndex(index)}
                          key={displayName}
                          className="SRC-hand-cursor SRC-primary-background-color-hover"
                        >
                          {displayName}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
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
                onChange={this.handleChange}
                value={searchText}
                type="text"
                className="SRC-fullWidth"
              />
              {searchText.length > 0 && (
                <button style={cancelIconStyle} onClick={this.clearSearchText}>
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
          data={data}
          facet={facet!}
          frontText={'Displaying'}
          unitDescription={usedUnitDescription}
        />
      </div>
    )
  }
}

export default Search
