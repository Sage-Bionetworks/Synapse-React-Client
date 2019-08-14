import * as React from 'react'
import { QueryWrapperChildProps } from './QueryWrapper'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faCaretDown,
  faSearch
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { insertWhereClauseFromSearchParams } from '../utils/modules/sqlFunctions'

library.add(faCaretDown)
library.add(faSearch)

type SearchState = {
  searchableIndex: number
  isSearchableDropdownOpen: boolean
  searchText: string
}
export type Searchable = {
  key: string
  alias: string
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
      searchText: ''
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

     document.querySelectorAll('.highlight').forEach(
        (el) => {
          const castAsSpan = el as HTMLSpanElement
          if (castAsSpan.innerText) {
            castAsSpan.outerHTML = castAsSpan.innerText
          }
        }
      )
      document.querySelectorAll('.SRC-cardMetadata tr').forEach(
        el => {
          const labelElement = el.children[0] as HTMLTableDataCellElement
          if (labelElement.innerText.toLowerCase() === searchItem.key) {
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
   const lastQueryRequestDeepCopy = this.props.getInitQueryRequest!()
   let { sql } = lastQueryRequestDeepCopy.query
   const searchParams = {
    [searchItem.key]: searchText
   }
   const newSql = insertWhereClauseFromSearchParams(searchParams, sql)
   lastQueryRequestDeepCopy.query.sql = newSql
   this.props.executeQueryRequest!(lastQueryRequestDeepCopy).then(
     _ => {
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
    const { searchable } = this.props
    const { isSearchableDropdownOpen, searchableIndex } = this.state
    const searchableItem = searchable[searchableIndex]
    const containerStyle: React.CSSProperties = {
      background: '#F9F9F9',
      border: '1px solid #C4C4C4',
      borderRadius: '3px',
      height: '80px',
      display: 'flex',
      alignItems: 'center',
      padding: '0px 10px'
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
    return (
      <div style={containerStyle}>
        {isSearchableDropdownOpen && <button onClick={this.setSearchableDropdown(false)} className={'SRC-menu-wall'} />}
        <div>
          Search in
          <div style={dropdownStyle} className="SRC-inlineBlock">
            <button onClick={this.setSearchableDropdown(!isSearchableDropdownOpen)}>
              { searchableItem.alias ? searchableItem.alias: searchableItem.key }
              <FontAwesomeIcon style={iconStyle} icon={'caret-down'} />
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
          <form style={dropdownStyle} className="SRC-inlineBlock" onSubmit={this.search}>
            <div>
              <input 
                placeholder={`e.g. "${searchableItem.hintText}"`} 
                style={{border: 'none'}}
                onChange={this.handleChange}
                value={this.state.searchText}
                type="text"
              />
              <FontAwesomeIcon style={{alignSelf: 'end'}} icon={'search'} />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Search