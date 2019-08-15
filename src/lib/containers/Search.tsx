import * as React from 'react'
import { QueryWrapperChildProps } from './QueryWrapper'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faCaretDown,
  faSearch
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { insertWhereClauseFromSearchParams } from '../utils/modules/sqlFunctions'
import { TotalQueryResults } from './TotalQueryResults';

library.add(faCaretDown)
library.add(faSearch)

type SearchState = {
  searchableIndex: number
  isSearchableDropdownOpen: boolean
  searchText: string
  submittedSearchText: string
}
export type Searchable = {
  key: string
  alias?: string
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
          if (labelElement.innerText.toLowerCase() === searchItem.key) {
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
    [searchItem.key]: searchText
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
    const { searchable, data, isLoading, facet, unitDescription = '' } = this.props
    const { isSearchableDropdownOpen, searchableIndex, searchText, submittedSearchText } = this.state
    const searchableItem = searchable[searchableIndex]
    const containerStyle: React.CSSProperties = {
      background: '#F9F9F9',
      border: '1px solid #C4C4C4',
      borderRadius: '3px',
      height: '80px',
      display: 'flex',
      alignItems: 'center',
      padding: '0px 10px',
    }
    const dropdownStyle: React.CSSProperties = {
      background: '#FFFFFF',
      border: '1px solid #C4C4C4',
      boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
      borderRadius:' 3px',
      margin: '0px 10px',
      height: '51px',
      display: 'inline-flex',
      alignItems: 'center',
      padding: '10px'
    }
    const ulStyle: React.CSSProperties = {
      left: '-108px',
      top: '27px',
      width: 'inherit',
      border: '1px solid #C4C4C4',
      boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
    }
    const liStyle: React.CSSProperties = {
      paddingLeft: '10px'
    }
    const iconStyle: React.CSSProperties = {
      marginLeft: '10px'
    }
    const searchIconStyle: React.CSSProperties = {
      color: '#EEEEEE',
      margin: 'auto 0'
    }
    const inputStyle: React.CSSProperties = {
      border: 'none',
      marginRight: 5
    }
    const totalQueryResultsStyle: React.CSSProperties = {
      margin: '20px 0px'
    }
    let usedUnitDescription = unitDescription
    if (submittedSearchText !== '') {
      usedUnitDescription = `${unitDescription} containing "${submittedSearchText}" in ${searchableItem.alias ? searchableItem.alias: searchableItem.key}`
    }
    return (
      <div>
        <div style={containerStyle}>
          {isSearchableDropdownOpen && <button onClick={this.setSearchableDropdown(false)} className={'SRC-menu-wall'} />}
          <div className="SRC-centerContent SRC-fullWidth">
            Search in
            <div style={{...dropdownStyle, flex: 1}}  className="SRC-inlineBlock">
              <button className="SRC-inlineFlex SRC-fullWidth" onClick={this.setSearchableDropdown(!isSearchableDropdownOpen)}>
                <span>
                  { searchableItem.alias ? searchableItem.alias: searchableItem.key }
                </span>
                <span>
                  <FontAwesomeIcon style={iconStyle} icon={'caret-down'} />
                </span>
              </button>
              <div className={'dropdown ' + (isSearchableDropdownOpen? 'open' : '')}>
                <ul style={ulStyle} className="dropdown-menu">
                  {
                    searchable.map(
                      (el, index) => {
                        const displayName = el.alias ? el.alias: el.key
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
            <form style={{...dropdownStyle, flex: 3}}  className="SRC-inlineFlex" onSubmit={this.search}>
              <div className="SRC-gap" style={{width: '100%'}}>
                <input 
                  placeholder={`e.g. "${searchableItem.hintText}"`} 
                  style={inputStyle}
                  onChange={this.handleChange}
                  value={searchText}
                  type="text"
                  className="SRC-fullWidth"
                />
                <FontAwesomeIcon size={'sm'} style={searchIconStyle} icon={'search'} />
              </div>
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