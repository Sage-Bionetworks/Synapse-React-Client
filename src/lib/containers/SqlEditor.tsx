import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Collapse } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import {
  QUERY_FILTERS_COLLAPSED_CSS,
  QUERY_FILTERS_EXPANDED_CSS,
} from './QueryWrapper'
import { useQueryWrapperContext } from './QueryWrapper'

library.add(faSearch)

export function SqlEditor() {
  const {
    executeQueryRequest,
    getLastQueryRequest,
    topLevelControlsState: { showSqlEditor, showFacetFilter },
  } = useQueryWrapperContext()
  const [sql, setSql] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (showSqlEditor) {
      const defaultSql = getLastQueryRequest
        ? getLastQueryRequest().query.sql
        : ''
      setSql(defaultSql)
      inputRef.current?.focus()
    }
  }, [showSqlEditor, getLastQueryRequest])

  const search = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    const lastQueryRequestDeepClone = getLastQueryRequest()
    lastQueryRequestDeepClone.query.sql = sql
    lastQueryRequestDeepClone.query.offset = 0
    lastQueryRequestDeepClone.query.additionalFilters = []
    lastQueryRequestDeepClone.query.selectedFacets = []
    executeQueryRequest(lastQueryRequestDeepClone)
  }

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    inputRef.current?.setCustomValidity('')
    setSql(event.currentTarget.value)
  }

  return (
    <div
      className={`QueryWrapperTextInput ${
        showFacetFilter
          ? QUERY_FILTERS_EXPANDED_CSS
          : QUERY_FILTERS_COLLAPSED_CSS
      }`}
    >
      <Collapse in={showSqlEditor} timeout={{ enter: 300, exit: 300 }}>
        <form className="QueryWrapperTextInput__searchbar" onSubmit={search}>
          <FontAwesomeIcon
            className="QueryWrapperTextInput__searchbar__searchicon"
            size={'sm'}
            icon={'search'}
          />
          <input
            ref={inputRef}
            onChange={handleChange}
            placeholder="Enter Query"
            value={sql}
            type="text"
          />
        </form>
      </Collapse>
    </div>
  )
}

export default SqlEditor
