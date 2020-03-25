import { CSSTransition, TransitionGroup } from 'react-transition-group'
import * as React from 'react'
import { SynapseConstants } from '../utils/'
import { getColorPallette } from './ColorGradient'
import { Facets } from './Facets'
import QueryCount from './QueryCount'
import QueryWrapper from './QueryWrapper'
import StackedBarChart from './StackedBarChart'
import SynapseTable, { SynapseTableProps } from './table/SynapseTable'
import { unCamelCase } from '../utils/functions/unCamelCase'
import CardContainer from './CardContainer'
import { CardConfiguration } from './CardContainerLogic'
import { StackedBarChartProps } from './StackedBarChart'
import {
  isGroupByInSql,
  insertConditionsFromSearchParams,
} from '../utils/functions/sqlFunctions'
import {
  FacetColumnValuesRequest,
  QueryBundleRequest,
} from '../utils/synapseTypes/'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import Search, { SearchProps } from './Search'
import * as DeepLinkingUtils from '../utils/functions/deepLinkingUtils'

library.add(faPlus)
library.add(faSearch)

type MenuState = {
  activeMenuIndices: number[]
  accordionGroupIndex: number
}

export type MenuConfig = {
  sql: string
  facet?: string
}

// represents the entirety of the menu
export const MENU_DROPDOWN_CSS = 'SRC-menuLayout'
// represent an accordiong 'group' within the menu
export const ACCORDION_GROUP_CSS = 'SRC-accordion-key'
// represents the single accordiong group which is active within the menu
export const ACCORDION_GROUP_ACTIVE_CSS = 'SRC-IS-ACTIVE'
// for search component querying on cardcontainer
export const SEARCH_CLASS_CSS = 'SRC-search-component'

interface MenuSearchParams {
  facetValue: string
  facet: string
  menuIndex?: string
}

type CommonMenuProps = {
  tableConfiguration?: SynapseTableProps
  cardConfiguration?: CardConfiguration
  stackedBarChartConfiguration?: StackedBarChartProps
  searchConfiguration?: SearchProps
  showBarChart?: boolean
  unitDescription?: string
}

type AccordionConfig = {
  searchConfiguration?: SearchProps
  menuConfig: MenuConfig[]
  name: string
} & CommonMenuProps

export type QueryWrapperMenuProps = {
  facetAliases?: {}
  menuConfig?: MenuConfig[]
  accordionConfig?: AccordionConfig[]
  isConsistent?: boolean
  token?: string
  entityId: string
  rgbIndex: number
  searchParams?: MenuSearchParams
  name?: string
  globalQueryCountSql?: string
  componentIndex?: number
} & CommonMenuProps

type Info = {
  isSelected: boolean
  originalColor: string
  hoverWhiteTextClass?: string
}

export default class QueryWrapperMenu extends React.Component<
  QueryWrapperMenuProps,
  MenuState
> {
  constructor(props: QueryWrapperMenuProps) {
    super(props)
    // See note about initializing props from state here
    //  - https://stackoverflow.com/questions/40063468/react-component-initialize-state-from-props/47341539#47341539
    const { searchParams, accordionConfig, menuConfig } = this.props
    let activeMenuIndices = []
    let accordionGroupIndex = searchParams?.menuIndex
      ? Number.parseInt(searchParams?.menuIndex) || 0
      : 0
    const facetIndexFromFacetSearchParam = menuConfig?.findIndex(
      el => el.facet && el.facet === searchParams?.facet,
    )
    const usedFacetIndex =
      facetIndexFromFacetSearchParam === -1 ? 0 : facetIndexFromFacetSearchParam
    const indexFromURLOrDefaultZero = usedFacetIndex || 0
    if (accordionConfig) {
      activeMenuIndices = new Array(accordionConfig.length).fill(0)
    } else {
      activeMenuIndices = [indexFromURLOrDefaultZero]
    }
    this.state = {
      activeMenuIndices,
      accordionGroupIndex,
    }
    this.handleHoverLogic = this.handleHoverLogic.bind(this)
    this.switchFacet = this.switchFacet.bind(this)
    this.getUnitDescription = this.getUnitDescription.bind(this)
    this.getPartMask = this.getPartMask.bind(this)
    this.getSelectedFacets = this.getSelectedFacets.bind(this)
    this.getSqlWithAdditionalClause = this.getSqlWithAdditionalClause.bind(this)
    this.getTableLoadingScreen = this.getTableLoadingScreen.bind(this)
  }

  componentDidUpdate(prevProps: QueryWrapperMenuProps, _prevState: MenuState) {
    /*
      Update the row count or the menu index if the props changed by looking at whether the sql or the rgbIndex
      changed
    */
    let { activeMenuIndices } = this.state
    const { rgbIndex, accordionConfig } = this.props
    if (rgbIndex !== prevProps.rgbIndex) {
      activeMenuIndices = accordionConfig
        ? new Array(accordionConfig.length).fill(0)
        : [0]
      this.setState({
        activeMenuIndices,
        accordionGroupIndex: 0,
      })
    }
  }

  /**
   * Handle the user hovering over a facet selection, it must be programatically
   * handled because the color used is dynamic
   *
   * @memberof Menu
   */
  public handleHoverLogic = (info: Info) => (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    // This prevents a bug where there is both light text and a light background,
    // otherwise SRC-hoverWhiteText would be placed on the group and item keys statically
    if (!event.currentTarget.classList.contains('SRC-hoverWhiteText')) {
      event.currentTarget.classList.add('SRC-hoverWhiteText')
    }
    if (!info.isSelected && event.currentTarget.tagName === 'DIV') {
      event.currentTarget.style.backgroundColor = info.originalColor
    }
  }

  /**
   * Handle user clicking menu item, event isn't used so we denote it as an _
   *
   * @memberof Menu
   */
  public switchFacet = (menuIndexIn: number, accordionIndexIn: number) => (
    _: React.SyntheticEvent<HTMLDivElement>,
  ) => {
    const { activeMenuIndices, accordionGroupIndex } = this.state
    // there's an odd bug where clicking a menu item twice will select the first tab,
    // this is a fix for that, but this shouldn't be necessary
    const isClickingCurrentSelection =
      accordionGroupIndex === accordionIndexIn &&
      activeMenuIndices[accordionIndexIn] === menuIndexIn
    if (!isClickingCurrentSelection) {
      activeMenuIndices[accordionIndexIn] = menuIndexIn
      this.setState({
        activeMenuIndices,
        accordionGroupIndex: accordionIndexIn,
      })
      const facetName = this.props.menuConfig?.[menuIndexIn].facet
      DeepLinkingUtils.updateUrlWithNewSearchParam(
        'menuIndex',
        undefined,
        accordionIndexIn.toString(),
      )
      if (facetName) {
        DeepLinkingUtils.updateUrlWithNewSearchParam('facet', undefined, facetName)
      }
    }
  }

  /**
   * Handle user clicking menu item, event isn't used so we denote it as an _
   *
   * @memberof Menu
   */
  public toggleGroupAccordionIndex = (accordionGroupIndexIn: number) => (
    _event: React.SyntheticEvent<HTMLDivElement>,
  ) => {
    const { accordionGroupIndex } = this.state
    if (accordionGroupIndex === accordionGroupIndexIn) {
      return
    } else {
      this.setState({
        accordionGroupIndex: accordionGroupIndexIn,
      })
    }
  }

  public render() {
    const {
      stackedBarChartConfiguration,
      name,
      menuConfig,
      token,
      globalQueryCountSql = '',
      entityId,
    } = this.props
    const { activeMenuIndices } = this.state

    let sql = ''
    if (menuConfig) {
      sql = menuConfig![activeMenuIndices[0]].sql
    }
    if (globalQueryCountSql) {
      // globalQueryCountSql takes precendence over menuconfig sql
      sql = globalQueryCountSql
    }
    const hasGroupByInSql = isGroupByInSql(sql)
    const menuDropdown = this.renderMenuDropdown()
    const queryWrapper = this.renderQueryChildren()
    const showBarChart = stackedBarChartConfiguration !== undefined
    return (
      <React.Fragment>
        {name && sql && !hasGroupByInSql && (
          <h3 id="exploreCount" className="SRC-boldText">
            <QueryCount
              entityId={entityId}
              token={token}
              name={name}
              sql={sql}
            />
          </h3>
        )}
        {hasGroupByInSql && (
          <h3 id="exploreCount" className="SRC-boldText">
            {name}
          </h3>
        )}
        <div className="break">
          <hr />
        </div>
        <div className="row" key="row">
          <div
            className={`col-xs-12 col-sm-3 col-lg-2 SRC-menuLayout ${
              showBarChart ? 'SRC-menuPadding' : 'SRC-menuPaddingLess'
            }`}
          >
            {menuDropdown}
          </div>
          <div className="col-xs-12 col-sm-9 col-lg-10" key="queryWrapper">
            {queryWrapper}
          </div>
        </div>
      </React.Fragment>
    )
  }

  private renderQueryChild(
    menuConfig: MenuConfig[],
    queryConfig: CommonMenuProps,
    groupIndex: number,
  ) {
    const {
      token,
      rgbIndex = 0,
      isConsistent = false,
      searchParams,
      accordionConfig = [],
      facetAliases = {},
      entityId,
    } = this.props
    const {
      cardConfiguration,
      tableConfiguration,
      stackedBarChartConfiguration,
      unitDescription = '',
      searchConfiguration,
    } = queryConfig
    const { activeMenuIndices, accordionGroupIndex } = this.state
    let facetValue = ''
    let facetValueFromSearchParams = ''
    if (searchParams) {
      ;({
        facetValue = '',
        facet: facetValueFromSearchParams = '',
      } = searchParams)
    }

    return menuConfig.map((config: MenuConfig, index: number) => {
      const isSelected: boolean =
        groupIndex === accordionGroupIndex &&
        activeMenuIndices[accordionGroupIndex] === index
      const { facet, sql } = config
      const name =
        accordionConfig[groupIndex] && accordionConfig[groupIndex].name
      const hasGroupByInSql = isGroupByInSql(sql)
      // only show search component if its the last item in the menu config
      const showSearch =
        index === menuConfig.length - 1 && searchConfiguration !== undefined
      const showBarChart =
        stackedBarChartConfiguration !== undefined &&
        !showSearch &&
        !hasGroupByInSql
      const aliasedFacet: string =
        facet && (facetAliases[facet] || unCamelCase(facet))

      // search class is only used for testing, no css is actually applied
      let searchClass = showSearch ? SEARCH_CLASS_CSS : ''
      if (!isSelected) {
        searchClass = 'SRC-hidden'
      }

      // Get props for query wrapper
      const usedUnitDescription = this.getUnitDescription(
        unitDescription,
        aliasedFacet,
        showSearch,
        accordionConfig.length > 0,
        name,
      )
      const isSelectedFromURL =
        config.facet !== undefined &&
        config.facet === facetValueFromSearchParams
      const selectedFacets = this.getSelectedFacets(
        isSelectedFromURL,
        facet,
        facetValue,
      )
      const partMask = this.getPartMask(facet, hasGroupByInSql)
      const tableLoadingScreen = this.getTableLoadingScreen(
        hasGroupByInSql,
        stackedBarChartConfiguration,
        tableConfiguration,
      )
      let initQueryRequest: QueryBundleRequest = {
        partMask,
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
        entityId,
        query: {
          sql,
          selectedFacets,
          isConsistent,
          limit: 25,
          offset: 0,
        },
      }

      const queryFromUrl = DeepLinkingUtils.getQueryRequestFromLink(
        'QueryWrapper',
        index,
      )

      return (
        <span key={(facet || 'nofacet') + index} className={searchClass}>
          <QueryWrapper
            componentIndex={index}
            showBarChart={showBarChart}
            loadNow={isSelected}
            initQueryRequest={queryFromUrl || initQueryRequest}
            unitDescription={usedUnitDescription}
            facet={facet}
            token={token}
            rgbIndex={rgbIndex}
            facetAliases={facetAliases}
          >
            {showBarChart ? (
              <StackedBarChart {...stackedBarChartConfiguration!} />
            ) : (
              <React.Fragment />
            )}
            {!showSearch ? <Facets /> : <React.Fragment />}
            {showSearch ? (
              <Search searchable={searchConfiguration!.searchable} />
            ) : (
              <React.Fragment />
            )}
            {/*
                Using a conditional render fails here because QueryWrapper can't clone an undefined element
                which will happen if either configuration is undefined.
            */}
            {tableConfiguration ? (
              <SynapseTable
                {...{
                  ...tableConfiguration,
                  loadingScreen: tableLoadingScreen,
                }}
              />
            ) : (
              <React.Fragment />
            )}
            {cardConfiguration ? (
              <CardContainer {...cardConfiguration} />
            ) : (
              <React.Fragment />
            )}
          </QueryWrapper>
        </span>
      )
    })
  }

  public getUnitDescription(
    unitDescription: string,
    aliasedFacet: string,
    showSearch: boolean,
    isAccordionConfigDefined: boolean,
    name: string,
  ) {
    if (isAccordionConfigDefined && !showSearch) {
      return `${name} Tools by ${aliasedFacet}`
    }
    if (isAccordionConfigDefined && showSearch) {
      // This is also a hardcoded setting to detect if search within a tools accordion is being shown
      return `${name} Tools`
    }
    return unitDescription
  }

  public getPartMask(facet: string | undefined, hasGroupByInSql: boolean) {
    let partMask =
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
      SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS
    if (facet) {
      partMask = partMask | SynapseConstants.BUNDLE_MASK_QUERY_FACETS
    } else {
      // Needed to calculate the total count for TotalQueryResults
      partMask = partMask | SynapseConstants.BUNDLE_MASK_QUERY_COUNT
    }
    // note: COLUMN_MODELS unnecessary for Synapse Table link for aggregate functions since we now rely on the sql parser to distinguish.
    return partMask
  }

  public getSelectedFacets(
    isSelected: boolean,
    facet: string | undefined,
    facetValue: string | undefined,
  ): FacetColumnValuesRequest[] {
    if (isSelected && facet && facetValue) {
      return [
        {
          concreteType:
            'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          facetValues: [facetValue],
          columnName: facet,
        },
      ]
    }
    return []
  }

  public getSqlWithAdditionalClause(
    isSelected: boolean,
    facet: string | undefined,
    facetValue: string | undefined,
    sql: string,
  ): string {
    if (isSelected && facet && facetValue && this.props.searchParams) {
      return insertConditionsFromSearchParams(
        { [facet]: facetValue },
        sql,
        'LIKE',
      )
    }
    return sql
  }

  public getTableLoadingScreen(
    hasGroupByInSql: boolean,
    stackedBarChartConfiguration: StackedBarChartProps | undefined,
    tableConfiguration: SynapseTableProps | undefined,
  ): JSX.Element {
    if (hasGroupByInSql && stackedBarChartConfiguration && tableConfiguration) {
      // Since the bar chart doesnt show when theres a a groupy statement we use the
      // loadingScreen from the chart configuration
      return stackedBarChartConfiguration.loadingScreen
    }
    return <></>
  }

  private renderQueryChildren() {
    const { accordionConfig, menuConfig } = this.props
    const { accordionGroupIndex } = this.state
    if (accordionConfig) {
      return accordionConfig.map((el, index) => {
        return (
          <div
            key={JSON.stringify(el) + index}
            className={accordionGroupIndex === index ? '' : 'SRC-hidden'}
          >
            {this.renderQueryChild(el.menuConfig, el, index)}
          </div>
        )
      })
    } else {
      return this.renderQueryChild(menuConfig!, this.props, 0)
    }
  }

  private renderMenuDropdown() {
    const { accordionConfig, menuConfig, searchConfiguration } = this.props
    const { accordionGroupIndex } = this.state
    const { rgbIndex } = this.props
    const { colorPalette } = getColorPallette(rgbIndex, 5)
    const lightColor = '#F5F5F5'
    if (accordionConfig) {
      return accordionConfig.map((el, index) => {
        const isActive = accordionGroupIndex === index
        const primaryColor = colorPalette[0]
        const style: React.CSSProperties = {
          background: isActive ? primaryColor : lightColor,
          color: isActive ? 'white' : '',
        }
        const indicatorClasses = isActive
          ? 'SRC-whiteText SRC-pointed-triangle-down'
          : ' SRC-hand-cursor '
        if (isActive) {
          style.borderTopColor = primaryColor
        }
        const hoverEnter: Info = {
          isSelected: isActive,
          originalColor: primaryColor,
        }
        const hoverLeave: Info = {
          isSelected: isActive,
          originalColor: lightColor,
        }
        const iconContainerStyle: React.CSSProperties = {
          marginLeft: 5,
        }
        const iconStyle: React.CSSProperties = {
          fontSize: '0.55em',
        }
        return (
          <div
            key={JSON.stringify(el)}
            className={isActive ? ACCORDION_GROUP_ACTIVE_CSS : ''}
          >
            <div
              style={style}
              role={isActive ? '' : 'button'}
              onMouseEnter={this.handleHoverLogic(hoverEnter)}
              onMouseLeave={this.handleHoverLogic(hoverLeave)}
              className={`${ACCORDION_GROUP_CSS} SRC-gap SRC-menu-button-base SRC-background-unset ${indicatorClasses}`}
              onClick={
                !isActive ? this.toggleGroupAccordionIndex(index) : undefined
              }
            >
              {el.name}
              <span style={iconContainerStyle}>
                {!isActive && (
                  <FontAwesomeIcon
                    style={iconStyle}
                    color={primaryColor}
                    icon={'plus'}
                  />
                )}
              </span>
            </div>
            <TransitionGroup component={null}>
              {isActive && (
                <CSSTransition
                  // The component doesn't run a transition on mount, we override this
                  // by setting appear to true because otherwise the triangle indicator wouldn't show
                  appear={true}
                  key={JSON.stringify(el)}
                  classNames="SRC-accordion-menu"
                  timeout={{ enter: 1000, exit: 500 }}
                >
                  <div className={'SRC-accordion-menu'}>
                    {this.renderFacetMenu(
                      el.menuConfig,
                      index,
                      el.searchConfiguration,
                    )}
                  </div>
                </CSSTransition>
              )}
            </TransitionGroup>
          </div>
        )
      })
    }
    return this.renderFacetMenu(menuConfig!, 0, searchConfiguration)
  }

  private renderFacetMenu(
    menuConfig: MenuConfig[],
    curLevel: number,
    searchConfiguration?: SearchProps,
  ) {
    const { rgbIndex, accordionConfig, facetAliases = {} } = this.props
    const { activeMenuIndices, accordionGroupIndex } = this.state
    const { colorPalette } = getColorPallette(rgbIndex, 5)
    let originalColor = colorPalette[0]
    let defaultColor = '#F5F5F5'
    if (accordionConfig) {
      originalColor = colorPalette[2]
      defaultColor = colorPalette[4]
    }
    return menuConfig.map((config: MenuConfig, index: number) => {
      const searchIconStyle: React.CSSProperties = {
        margin: 'auto 0',
        opacity: 0.4,
      }
      const { facet } = config
      const isSelected: boolean =
        activeMenuIndices[accordionGroupIndex] === index &&
        curLevel === accordionGroupIndex
      const style: React.CSSProperties = {}
      const isSearchConfig =
        index === menuConfig.length - 1 && searchConfiguration
      let selectedStyling: string = ''
      if (isSelected) {
        // we have to programatically set the style since the color is chosen from a color
        // wheel
        style.background = originalColor
        // below has to be set so the pseudo element created will inherit its color
        // appropriately
        style.borderLeftColor = originalColor
        selectedStyling = 'SRC-pointed-triangle-right SRC-whiteText'
        searchIconStyle.color = 'white'
      } else {
        // change background to class
        selectedStyling = 'SRC-blackText'
        style.background = defaultColor
      }
      const infoEnter: Info = { isSelected, originalColor }
      const infoLeave: Info = { isSelected, originalColor: defaultColor }
      const facetDisplayValue: string =
        (facet && facetAliases[facet]) || unCamelCase(facet)
      return (
        <div
          onMouseEnter={this.handleHoverLogic(infoEnter)}
          onMouseLeave={this.handleHoverLogic(infoLeave)}
          key={(config.facet || 'nofacet') + index}
          className={`SRC-hand-cursor SRC-background-unset ${selectedStyling} SRC-menu-button-base SRC-gap`}
          onClick={this.switchFacet(index, curLevel)}
          onKeyPress={this.switchFacet(index, curLevel)}
          role="button"
          tabIndex={0}
          style={style}
        >
          {isSearchConfig ? 'Search' : facetDisplayValue}
          {isSearchConfig && (
            <span>
              <FontAwesomeIcon
                className={selectedStyling}
                size={'sm'}
                style={searchIconStyle}
                icon="search"
              />
            </span>
          )}
        </div>
      )
    })
  }
}
