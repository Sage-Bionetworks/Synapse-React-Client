import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Collapse } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import { HelpPopover } from './HelpPopover'
import { useQueryVisualizationContext } from './QueryVisualizationWrapper'
import {
  QUERY_FILTERS_COLLAPSED_CSS,
  QUERY_FILTERS_EXPANDED_CSS,
} from './QueryWrapper'
import { useQueryContext } from './QueryWrapper'

library.add(faSearch)

export type SqlEditorProps = {
  helpMessage?: string
  helpUrl?: string
}

const helpMessageCopy =
  'The data within tables and views can be retrieved by using a SQL-like query language either from the web interface or from the programmatic clients.'
const helpLink =
  'https://help.synapse.org/docs/Searching-Tables-and-Views.2009596168.html#SearchingTablesandViews-UsingAdvancedSearchQueries'

export const SqlEditor: React.FunctionComponent<SqlEditorProps> = ({
  helpMessage = helpMessageCopy,
  helpUrl = helpLink,
}: SqlEditorProps) => {
  const { executeQueryRequest, getLastQueryRequest } = useQueryContext()
  const {
    topLevelControlsState: { showSqlEditor, showFacetFilter },
  } = useQueryVisualizationContext()

  const [sql, setSql] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (showSqlEditor) {
      const defaultSql = getLastQueryRequest().query.sql

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
      className={`QueryWrapperSqlEditorInput ${
        showFacetFilter
          ? QUERY_FILTERS_EXPANDED_CSS
          : QUERY_FILTERS_COLLAPSED_CSS
      }`}
    >
      <Collapse in={showSqlEditor} timeout={{ enter: 300, exit: 300 }}>
        <div className="QueryWrapperSqlEditorInput__helppopoverwrapper">
          <form
            className="QueryWrapperSqlEditorInput__searchbar"
            onSubmit={search}
          >
            <FontAwesomeIcon
              className="QueryWrapperSqlEditorInput__searchbar__searchicon"
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
          <div className="QueryWrapperSqlEditorInput__helppopover">
            <HelpPopover
              markdownText={helpMessage}
              helpUrl={helpUrl}
              placement="right"
            />
          </div>
        </div>
      </Collapse>
    </div>
  )
}

export default SqlEditor
