import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCaretDown,
  faCaretUp,
  faSearch,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Collapse } from '@material-ui/core'
import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { unCamelCase } from '../utils/functions/unCamelCase'
import { ColumnModel, ColumnType } from '../utils/synapseTypes'
import {
  ColumnMultiValueFunction,
  ColumnMultiValueFunctionQueryFilter,
  ColumnSingleValueFilterOperator,
  ColumnSingleValueQueryFilter,
  isColumnMultiValueFunctionQueryFilter,
  isColumnSingleValueQueryFilter,
  QueryFilter,
} from '../utils/synapseTypes/Table/QueryFilter'
import { QueryVisualizationContextType } from './QueryVisualizationWrapper'
import {
  LockedFacet,
  QUERY_FILTERS_COLLAPSED_CSS,
  QUERY_FILTERS_EXPANDED_CSS,
} from './QueryWrapper'
import { QueryContextType } from './QueryWrapper'

library.add(faCaretDown)
library.add(faCaretUp)
library.add(faSearch)
library.add(faTimes)

type SearchState = {
  show: boolean
  /* 
    When the component is revealed in queryplotnav we want to focus on the input field and reveal the dropdown
    there is an issue where the method handleClickOutsideForm will override the state from componentDidUpdate
    so we track when componentDidUpdate just fired so that `show` is not overriden on the click event which
    triggers componentDidUpdate 
  */
  didUpdateRanLast: boolean
  searchText: string
  columnName: string
}

export type SearchableColumnsV2 = string[]

export type SearchV2Props = {
  queryContext: QueryContextType
  queryVisualizationContext: QueryVisualizationContextType
  isQueryWrapperMenuChild?: boolean
  defaultColumn?: string
  searchable?: SearchableColumnsV2
  lockedFacet?: LockedFacet
}

type InternalSearchProps = SearchV2Props

class Search extends React.Component<InternalSearchProps, SearchState> {
  public searchFormRef: React.RefObject<HTMLFormElement>
  public radioFormRef: React.RefObject<HTMLFormElement>

  constructor(props: InternalSearchProps) {
    super(props)
    this.state = {
      show: false,
      didUpdateRanLast: false,
      searchText: '',
      columnName: this.props.defaultColumn ?? '',
    }
    this.searchFormRef = React.createRef()
    this.radioFormRef = React.createRef()
  }

  componentDidMount() {
    // @ts-ignore
    document.addEventListener('click', this.handleClickOutsideForm)
  }

  componentDidUpdate(prevProps: InternalSearchProps) {
    if (
      !prevProps.queryVisualizationContext?.topLevelControlsState
        .showSearchBar &&
      this.props.queryVisualizationContext?.topLevelControlsState.showSearchBar
    ) {
      this.setState({
        show: true,
        didUpdateRanLast: true,
      })
      this.searchFormRef?.current?.querySelector('input')?.focus()
    }
  }

  componentWillUnmount() {
    // @ts-ignore
    document.removeEventListener('click', this.handleClickOutsideForm)
  }

  handleClickOutsideForm = (event: React.SyntheticEvent) => {
    if (
      // @ts-ignore
      !this.searchFormRef.current?.contains(event?.target) &&
      // @ts-ignore
      !this.radioFormRef.current?.contains(event?.target)
    ) {
      if (this.state.didUpdateRanLast) {
        this.setState({
          didUpdateRanLast: false,
        })
      } else {
        this.setState({
          show: false,
        })
      }
    }
  }

  public search = (event: React.SyntheticEvent<HTMLFormElement>) => {
    // form completion by default causes the page to reload, so we prevent that
    event.preventDefault()
    const { searchText } = this.state
    let { columnName } = this.state
    const { searchable, lockedFacet } = this.props
    if (columnName === '') {
      if (searchable) {
        // If searchable column names are defined in the config, grab the first one (that is not locked)
        columnName = searchable.filter(
          colName => colName !== lockedFacet?.facet,
        )[0]
      } else {
        // Otherwise, get the first column model that can be searched.
        // And for study details page: if lockedFacet is defined, remove it from the search
        const searchableColumnModels =
          this.props.queryContext?.data?.columnModels
            ?.filter(el => el.name !== lockedFacet?.facet)
            .filter(el => this.isSupportedColumn(el))
        columnName = searchableColumnModels?.[0].name ?? ''
      }
    }
    this.setState({
      show: false,
    })
    const { executeQueryRequest, getLastQueryRequest } =
      this.props.queryContext!

    const lastQueryRequestDeepClone = getLastQueryRequest()

    const { additionalFilters = [] } = lastQueryRequestDeepClone.query

    const indexOfColumn = additionalFilters.findIndex((el: QueryFilter) => {
      if (
        isColumnSingleValueQueryFilter(el) ||
        (isColumnMultiValueFunctionQueryFilter(el) &&
          el.columnName === columnName)
      ) {
        return true
      }
      return false
    })
    if (indexOfColumn === -1) {
      // get the column model to figure out what kind of filter we should apply.
      const columnModel: ColumnModel | undefined =
        this.props.queryContext?.data?.columnModels?.filter(
          el => el.name === columnName,
        )[0]
      if (columnModel?.columnType.endsWith('_LIST')) {
        const columnMultiValueQueryFilter: ColumnMultiValueFunctionQueryFilter =
          {
            columnName,
            function: ColumnMultiValueFunction.HAS_LIKE,
            values: [`%${searchText}%`],
            concreteType:
              'org.sagebionetworks.repo.model.table.ColumnMultiValueFunctionQueryFilter',
          }
        additionalFilters.push(columnMultiValueQueryFilter)
      } else {
        const columnSingleValueQueryFilter: ColumnSingleValueQueryFilter = {
          columnName,
          operator: ColumnSingleValueFilterOperator.LIKE,
          values: [`%${searchText}%`],
          concreteType:
            'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
        }
        additionalFilters.push(columnSingleValueQueryFilter)
      }
    } else {
      ;(
        additionalFilters[indexOfColumn] as
          | ColumnSingleValueQueryFilter
          | ColumnMultiValueFunctionQueryFilter
      ).values.push(`%${searchText}%`)
    }
    lastQueryRequestDeepClone.query.additionalFilters = additionalFilters
    executeQueryRequest!(lastQueryRequestDeepClone)
  }

  public handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      searchText: event.currentTarget.value,
    })
  }

  public isSupportedColumn = (columnModel?: ColumnModel) => {
    switch (columnModel?.columnType) {
      case ColumnType.FILEHANDLEID:
      case ColumnType.ENTITYID:
      case ColumnType.DATE:
      case ColumnType.DATE_LIST:
      case ColumnType.USERID:
        return false
      default:
        return true
    }
  }

  public isSupportedColumnAndInProps = (columnModel?: ColumnModel) => {
    if (this.isSupportedColumn(columnModel)) {
      // return true if the searchable array contains this column name
      const { searchable } = this.props
      return searchable?.some(e => e === columnModel?.name)
    }
    return false
  }

  render() {
    const {
      searchable,
      lockedFacet,
      queryContext: { data },
      queryVisualizationContext: { topLevelControlsState, facetAliases },
    } = this.props
    const { searchText, show, columnName } = this.state
    let searchColumns: string[] = []

    // searchable specifies the order of the columns to search
    if (searchable) {
      searchColumns = searchable
        .map(el => data?.columnModels?.find(model => model.name === el))
        .filter(this.isSupportedColumnAndInProps)
        .map(el => el!.name)
    } else if (data?.columnModels) {
      searchColumns = data.columnModels
        ?.filter(this.isSupportedColumn)
        .map(el => el.name)
    }

    // For study details page: if lockedFacet is defined, remove it from the radio dropdown
    if (searchColumns.length && lockedFacet?.facet) {
      searchColumns = searchColumns.filter(el => el !== lockedFacet?.facet)
    }
    const showFacetFilter = topLevelControlsState?.showFacetFilter
    return (
      <div
        className={`QueryWrapperSearchInput ${
          showFacetFilter
            ? QUERY_FILTERS_EXPANDED_CSS
            : QUERY_FILTERS_COLLAPSED_CSS
        }`}
      >
        <Collapse in={topLevelControlsState?.showSearchBar}>
          <form
            className="QueryWrapperSearchInput__searchbar"
            onSubmit={this.search}
            onClick={() => {
              this.setState({ show: true })
            }}
            ref={this.searchFormRef}
          >
            <FontAwesomeIcon
              className="QueryWrapperSearchInput__searchbar__searchicon"
              size={'sm'}
              icon={'search'}
            />
            <input
              onChange={this.handleChange}
              onClick={() => {
                this.setState({
                  show: true,
                })
              }}
              placeholder="Enter Search Terms"
              value={searchText}
              type="text"
            />
            {this.state.searchText.length > 0 && (
              <button
                className="QueryWrapperSearchInput__searchbar__clearbutton"
                type="button"
                onClick={() => {
                  this.setState({
                    searchText: '',
                  })
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
        <div className="QueryWrapperSearchInput__dropdown_pos">
          <CSSTransition
            in={show}
            classNames="QueryWrapperSearchInput__animate_dropdown"
            timeout={{ enter: 0, exit: 300 }}
          >
            <form
              ref={this.radioFormRef}
              className="QueryWrapperSearchInput__column-select QueryWrapperSearchInput__animate_height"
            >
              <p className="deemphasized">
                <i> Search In Field: </i>
              </p>
              {searchColumns.map((name, index) => {
                const displayName = unCamelCase(name, facetAliases)
                const isSelected =
                  (columnName === '' && index === 0) || columnName === name
                return (
                  <div className="radio" key={`search-field-${name}-${index}`}>
                    <label>
                      <span>
                        <input
                          id={name}
                          type="radio"
                          value={name}
                          checked={isSelected}
                          onClick={() => {
                            this.searchFormRef?.current
                              ?.querySelector('input')
                              ?.focus()
                            this.setState({
                              columnName: name,
                            })
                          }}
                        />
                        <span>{displayName}</span>
                      </span>
                    </label>
                  </div>
                )
              })}
            </form>
          </CSSTransition>
        </div>
      </div>
    )
  }
}

export default Search
