import * as React from 'react'
import { QueryWrapperChildProps } from './QueryWrapper'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faCaretDown,
  faCaretUp,
  faSearch
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { insertWhereClauseFromSearchParams } from '../utils/modules/sqlFunctions'
import { TotalQueryResults } from './TotalQueryResults'

library.add(faCaretDown)
library.add(faCaretUp)
library.add(faSearch)

type SearchState = {
  searchableIndex: number
  isSearchableDropdownOpen: boolean
  searchText: string
  submittedSearchText: string
}
export type Searchable = {
  columnName: string
  hintText: string
} []

export type SearchProps = {
  searchable: Searchable
}

type InternalSearchProps = QueryWrapperChildProps & SearchProps

class Search extends React.Component<InternalSearchProps, SearchState> {

  constructor(props: InternalSearchProps) {
    super(props)
    this.state = {
      searchableIndex: 0,
      isSearchableDropdownOpen: false,
      searchText: '',
      submittedSearchText: ''
    }
  }

  componentDidUpdate(prevProps: InternalSearchProps) {
    if (this.props.isLoading !== prevProps.isLoading) {
      setTimeout(this.highlightText, 1000)
    }
  }

  public setSearchableDropdown = (value: boolean) => (_: React.SyntheticEvent) => {
    this.setState({
      isSearchableDropdownOpen: value
    })
  }

  public setSearchableIndex = (index: number) => (_: React.SyntheticEvent) => {
    this.setState({
      searchableIndex: index,
      searchText: ''
    })
  }

  public highlightText = () => {
    console.log('highlight text getting called')
     const { searchText, searchableIndex } = this.state
     if (searchText === '') {
       return
     }
     const { searchable } = this.props
     const searchItem = searchable[searchableIndex]

     //  First we cleanup the styling applied last
     document.querySelectorAll<HTMLTableCellElement>('.SRC-cardMetadata td.SRC-boldText').forEach(
        (el) => {
          el.classList.remove('SRC-boldText')
        }
      )
     document.querySelectorAll('.highlight').forEach(
        (el) => {
          const castAsSpan = el as HTMLSpanElement
          if (castAsSpan.innerText) {
            castAsSpan.outerHTML = castAsSpan.innerText
          }
        }
      )
      // Target elements and apply styles
      document.querySelectorAll('.SRC-cardMetadata tr').forEach(
        el => {
          const labelElement = el.children[0] as HTMLTableDataCellElement
          if (labelElement.innerText.toLowerCase() === searchItem.columnName) {
            labelElement.classList.add('SRC-boldText')
            const textElement = el.children[1] as HTMLTableDataCellElement
            if (textElement) {
              const hasSearchText = textElement.innerText.toLowerCase().indexOf(searchText) !== 0
              if (hasSearchText) {
                const regex = new RegExp(searchText, "gi")
                textElement.innerHTML = textElement.innerHTML.replace(regex, `<span class="highlight">${searchText}</span>`)
              }
            }
          }
        }
      )
  }

  public search = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { searchText, searchableIndex } = this.state
    const { searchable } = this.props
    const searchItem = searchable[searchableIndex]
    // Always grabs initQueryRequest so that it doesn't build a chain of 
    // clauses
    const lastQueryRequestDeepCopy = this.props.getInitQueryRequest!()
    let { sql } = lastQueryRequestDeepCopy.query
    const searchParams = {
      [searchItem.columnName]: searchText
    }
    const newSql = insertWhereClauseFromSearchParams(searchParams, sql)
    lastQueryRequestDeepCopy.query.sql = newSql
    this.props.executeQueryRequest!(lastQueryRequestDeepCopy).then(
      _ => {
        this.setState({
          submittedSearchText: searchText
        })
        this.highlightText()
      }
    )
  }

  public handleChange = (event: React.FormEvent<HTMLInputElement>) => {
   this.setState({
     searchText: event.currentTarget.value
   }) 
  }

  render() {
    const { searchable, data, isLoading, facet, unitDescription = '', facetAliases = {} } = this.props
    const { isSearchableDropdownOpen, searchableIndex, searchText, submittedSearchText } = this.state
    const searchableItem = searchable[searchableIndex]
    const containerStyle: React.CSSProperties = {
      background: '#F9F9F9',
      border: '1px solid #C4C4C4',
      borderRadius: '3px',
      height: '80px',
      display: 'flex',
      marginTop: 29,
      alignItems: 'center',
      padding: '0px 10px',
    }
    const dropdownStyle: React.CSSProperties = {
      background: '#FFFFFF',
      boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
      borderRadius:' 3px',
      margin: '0px 10px',
      height: '51px',
      display: 'inline-flex',
      alignItems: 'center',
    }
    const ulStyle: React.CSSProperties = {
      width: 'inherit',
      border: '1px solid #C4C4C4',
      boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
    }
    const liStyle: React.CSSProperties = {
      paddingLeft: '10px'
    }
    const caretIconStyle: React.CSSProperties = {
      fontSize: '16px',
    }
    const searchIconStyle: React.CSSProperties = {
      color: '#EEEEEE',
      position:'absolute',
      right: 50,
      fontSize: 16
    }
    const inputStyle: React.CSSProperties = {
      border: 'none',
      paddingLeft: 10,
      height: 50
    }
    const dropdownBtnStyle: React.CSSProperties = { 
      justifyContent: 'space-between'
    }
    const totalQueryResultsStyle: React.CSSProperties = {
      margin: '20px 0px'
    }
    const curFacetDisplayText = facetAliases[searchableItem.columnName] || searchableItem.columnName
    let usedUnitDescription = unitDescription
    if (submittedSearchText !== '') {
      usedUnitDescription = `${unitDescription} containing "${submittedSearchText}" in ${curFacetDisplayText}`
    }
    return (
      <div>
        <div style={containerStyle}>
          {isSearchableDropdownOpen && <button onClick={this.setSearchableDropdown(false)} className={'SRC-menu-wall'} />}
          <div className="SRC-centerContent SRC-fullWidth">
            Search in
            <div style={{...dropdownStyle, flex: 1}}  className="SRC-inlineBlock">
              <button style={dropdownBtnStyle} className="SRC-inlineFlex SRC-fullWidth" onClick={this.setSearchableDropdown(!isSearchableDropdownOpen)}>
                { curFacetDisplayText }
                <FontAwesomeIcon style={caretIconStyle} icon={isSearchableDropdownOpen ? 'caret-up' : 'caret-down'} />
              </button>
              <div className={'dropdown ' + (isSearchableDropdownOpen? 'open' : '')}>
                <ul aria-labelledby="search-dropdown" style={ulStyle} className="SRC-search-dropdown  dropdown-menu">
                  {
                    searchable.map(
                      (el, index) => {
                        const displayName = facetAliases[el.columnName] || el.columnName
                        return (
                          <li 
                            style={liStyle}
                            onClick={this.setSearchableIndex(index)}
                            key={displayName}
                            className="SRC-hand-cursor SRC-primary-background-color-hover"
                          >
                            {displayName }
                          </li>
                        )
                      }
                    )
                  }
                </ul>
              </div>
            </div>
            <form style={{...dropdownStyle, flex: 3, display: 'inline-flex', alignItems: 'center'}} onSubmit={this.search}>
              <input
                placeholder={`e.g. "${searchableItem.hintText}"`} 
                style={inputStyle}
                onChange={this.handleChange}
                value={searchText}
                type="text"
                className="SRC-fullWidth"
              />
              <FontAwesomeIcon size={'sm'} style={searchIconStyle} icon={'search'} />
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