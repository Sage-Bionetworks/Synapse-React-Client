import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Collapse } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import { TextMatchesQueryFilter } from '../utils/synapseTypes/Table/QueryFilter'
import {
  QueryWrapperChildProps,
  QUERY_FILTERS_COLLAPSED_CSS,
  QUERY_FILTERS_EXPANDED_CSS,
  TopLevelControlsState,
} from './QueryWrapper'

library.add(faSearch)
library.add(faTimes)

// Define the minimum set of props needed for this component
export type FullTextSearchProps = Pick<
  QueryWrapperChildProps,
  'executeQueryRequest' | 'getLastQueryRequest'
> & {
  topLevelControlsState?: Pick<
    TopLevelControlsState,
    'showSearchBar' | 'showFacetFilter'
  >
}

// See PLFM-7011
const MIN_SEARCH_QUERY_LENGTH = 3

export function FullTextSearch(props: FullTextSearchProps) {
  const [searchText, setSearchText] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)
  const showSearchBar = props?.topLevelControlsState?.showSearchBar

  useEffect(() => {
    if (showSearchBar) {
      searchInputRef.current?.focus()
    }
  }, [showSearchBar])

  const search = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()

    // The HTML validation doesn't trim the string, so we add an extra check.
    // We don't auto-trim the form text ourselves because the user may still be focused on the input.
    if (searchText.trim().length < MIN_SEARCH_QUERY_LENGTH) {
      searchInputRef.current?.setCustomValidity(
        `Search term must have a minimum of ${MIN_SEARCH_QUERY_LENGTH} characters`,
      )
    } else {
      const { executeQueryRequest, getLastQueryRequest } = props

      const lastQueryRequestDeepClone = getLastQueryRequest!()

      const { additionalFilters = [] } = lastQueryRequestDeepClone.query

      const textMatchesQueryFilter: TextMatchesQueryFilter = {
        concreteType:
          'org.sagebionetworks.repo.model.table.TextMatchesQueryFilter',
        searchExpression: searchText,
      }
      // PORTALS-2093: does this additional filter already exist?
      const found = additionalFilters.find(filter =>
        filter.concreteType == textMatchesQueryFilter.concreteType &&
        (filter as TextMatchesQueryFilter).searchExpression == textMatchesQueryFilter.searchExpression
      )
      if (found) {
        return
      }
      additionalFilters.push(textMatchesQueryFilter)

      lastQueryRequestDeepClone.query.additionalFilters = additionalFilters
      executeQueryRequest!(lastQueryRequestDeepClone)
      // reset the search text after adding this filter
      setSearchText('')
    }
  }

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    searchInputRef.current?.setCustomValidity('')
    setSearchText(event.currentTarget.value)
  }

  const { topLevelControlsState } = props

  const showFacetFilter = topLevelControlsState?.showFacetFilter
  return (
    <div
      className={`QueryWrapperTextInput ${
        showFacetFilter
          ? QUERY_FILTERS_EXPANDED_CSS
          : QUERY_FILTERS_COLLAPSED_CSS
      }`}
    >
      <Collapse
        in={topLevelControlsState?.showSearchBar}
        timeout={{ enter: 300, exit: 300 }}
      >
        <form className="QueryWrapperTextInput__searchbar" onSubmit={search}>
          <FontAwesomeIcon
            className="QueryWrapperTextInput__searchbar__searchicon"
            size={'sm'}
            icon={'search'}
          />
          <input
            ref={searchInputRef}
            minLength={MIN_SEARCH_QUERY_LENGTH}
            onChange={handleChange}
            placeholder="Enter Search Terms"
            value={searchText}
            type="text"
          />
          {searchText.length > 0 && (
            <button
              className="QueryWrapperTextInput__searchbar__clearbutton"
              type="button"
              onClick={() => {
                setSearchText('')
              }}
            >
              <FontAwesomeIcon
                className="SRC-primary-text-color"
                icon="times"
              />
            </button>
          )}
        </form>
      </Collapse>
    </div>
  )
}

export default FullTextSearch
