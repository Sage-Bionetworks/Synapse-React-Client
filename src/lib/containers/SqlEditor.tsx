import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Collapse } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import { FormControl, FormControlProps } from 'react-bootstrap'
import useDeepCompareEffect from 'use-deep-compare-effect'
import { getTransformSqlWithFacetsRequest } from '../utils/SynapseClient'
import { TransformSqlWithFacetsRequest } from '../utils/synapseTypes/Table/TransformSqlWithFacetsRequest'
import { useQueryVisualizationContext } from './QueryVisualizationWrapper'
import {
  QUERY_FILTERS_COLLAPSED_CSS,
  QUERY_FILTERS_EXPANDED_CSS,
} from './QueryWrapper'
import { useQueryContext } from './QueryWrapper'

library.add(faSearch)

export function SqlEditor() {
  const { executeQueryRequest, lastQueryRequest, data } = useQueryContext()
  const {
    topLevelControlsState: { showSqlEditor, showFacetFilter },
  } = useQueryVisualizationContext()

  const [sql, setSql] = useState('')

  const [disabled, setDisabled] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)

  useDeepCompareEffect(() => {
    if (showSqlEditor) {
      const defaultSql = lastQueryRequest.query.sql

      if (
        lastQueryRequest.query.additionalFilters &&
        lastQueryRequest.query.additionalFilters.length > 0
      ) {
        // https://docs.synapse.org/rest/POST/table/sql/transform.html doesn't currently support additionalFilters
        // TODO: User friendly
        setSql('SQL unsupported with current filters.')
        setDisabled(true)
      } else if (
        lastQueryRequest.query.selectedFacets &&
        lastQueryRequest.query.selectedFacets.length > 0
      ) {
        const transformSqlWithFacetsRequest: TransformSqlWithFacetsRequest = {
          concreteType:
            'org.sagebionetworks.repo.model.table.TransformSqlWithFacetsRequest',
          sqlToTransform: sql,
          selectedFacets: lastQueryRequest.query.selectedFacets,
          schema: data?.columnModels ?? [], // TODO
        }

        getTransformSqlWithFacetsRequest(transformSqlWithFacetsRequest)
          .then(res => {
            setSql(res.transformedSql)
          })
          .finally(() => {
            setDisabled(true)
          })
      } else {
        setSql(defaultSql)
        setDisabled(false)
        inputRef.current?.focus()
      }
    }
  }, [showSqlEditor, lastQueryRequest])

  const search = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    const lastQueryRequestDeepClone = lastQueryRequest
    lastQueryRequestDeepClone.query.sql = sql
    lastQueryRequestDeepClone.query.offset = 0
    lastQueryRequestDeepClone.query.additionalFilters = []
    lastQueryRequestDeepClone.query.selectedFacets = []
    executeQueryRequest(lastQueryRequestDeepClone)
  }

  const handleChange: FormControlProps['onChange'] = event => {
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
        <form
          className="QueryWrapperSqlEditorInput__searchbar"
          onSubmit={search}
        >
          <FontAwesomeIcon
            className="QueryWrapperSqlEditorInput__searchbar__searchicon"
            size={'sm'}
            icon={'search'}
          />
          <FormControl
            disabled={disabled}
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
