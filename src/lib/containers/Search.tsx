import * as React from 'react'
import { QueryWrapperChildProps } from './QueryWrapper'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { insertWhereClauseFromSearchParams } from 'lib/utils/modules/sqlFunctions';

library.add(faCaretDown)

type SearchState = {
  searchableIndex: number
  isSearchableDropdownOpen: boolean
  searchText: string
}
export type Searchable = {
  key: number
  alias: string
  hintText: string
} []

export type SearchProps = {
  searchable: Searchable
}

type InternalSearchProps = QueryWrapperChildProps & SearchProps

export default class Search extends React.Component<InternalSearchProps, SearchState> {

  constructor(props: InternalSearchProps) {
    super(props)
    this.state = {
      searchableIndex: 0,
      isSearchableDropdownOpen: false,
      searchText: ''
    }
  }

  public setSearchableDropdown = (value: boolean) => (_: React.SyntheticEvent) => {
    this.setState({
      isSearchableDropdownOpen: value
    })
  }

  public setSearchableIndex = (index: number) => (_: React.SyntheticEvent) => {
    this.setState({
      searchableIndex: index
    })
  }

  public search = () => {
   const { searchText, searchableIndex } = this.state
   const { searchable } = this.props
   const searchItem = searchable[searchableIndex]
   const lastQueryRequestDeepCopy = this.props.getLastQueryRequest!()
   let { sql } = lastQueryRequestDeepCopy.query
   const searchParams = {
    [searchItem.key]: searchText
   }
   const newSql = insertWhereClauseFromSearchParams(searchParams, sql)
   lastQueryRequestDeepCopy.query.sql = newSql
   this.props.executeQueryRequest!(lastQueryRequestDeepCopy)
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
    return (
      <div>
        {isSearchableDropdownOpen && <button onClick={this.setSearchableDropdown(false)} className={'SRC-menu-wall'} />}
        <div>
          <div>
            { searchableItem.alias ? searchableItem.alias: searchableItem.key }
            <button onClick={this.setSearchableDropdown(!isSearchableDropdownOpen)}>
              <FontAwesomeIcon icon={'caret-down'} />
            </button>
          </div>
          <div className={"dropdown-menu " + isSearchableDropdownOpen? 'open' : ''}>
            {
              searchable.map(
                (el, index) => {
                  const displayName = el.alias ? el.alias: el.key
                  return (
                    <li 
                      onClick={this.setSearchableIndex(index)}
                      key={displayName}
                    >
                      {displayName}
                    </li>
                  )
                }
              )
            }
          </div>
          <form onSubmit={this.search}>
            <input 
              placeholder={`e.g. ${searchableItem.hintText}`} 
              onChange={this.handleChange}
              value={this.state.searchText}
              type="text"
            />
          </form>
        </div>
      </div>
    )
  }

}