import * as React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faSearch)
library.add(faArrowRight)

type SearchDemoState = {
  searchText: string
  isFocusedOnSearchBar: boolean
}

export default class SearchDemo extends React.Component<{}, SearchDemoState> {

  constructor(props: any) {
    super(props)
    this.state = {
      searchText: '',
      isFocusedOnSearchBar: false
    }
    this.updateSearchText = this.updateSearchText.bind(this)
    this.setSearchFocus = this.setSearchFocus.bind(this)
    this.setSearchUnfocus = this.setSearchUnfocus.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  updateSearchText(event: React.FormEvent<HTMLInputElement>) {
    const value = event.currentTarget.value
    this.setState({
      searchText: value
    })
  }

  setSearchFocus() {
    this.setState(
      {
        isFocusedOnSearchBar: true
      }
    )
  }

  setSearchUnfocus () {
    this.setState(
      {
        isFocusedOnSearchBar: false
      }
    )
  }

  handleSearch () {
    // TODO: Implement search
  }

  render() {
    return (
      <div>
        <label htmlFor="searchBar">
          <input
            id="searchBar"
            type="text"
            onChange={this.updateSearchText}
            onFocus={this.setSearchFocus}
            onBlur={this.setSearchUnfocus}
            onKeyPress={this.handleSearch}
          />
          {
            !this.state.searchText
            &&
            !this.state.isFocusedOnSearchBar
            &&
            <FontAwesomeIcon className="SRC-searchBar" icon={'search'} />
          }
          {<span className="SRC-hand-cursor" onClick={this.handleSearch} >
              <FontAwesomeIcon className="SRC-arrowRight" icon={'arrow-right'} />
            </span>}
        </label>
      </div>
    )
  }

}
