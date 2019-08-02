import { CSSTransition, TransitionGroup } from 'react-transition-group'
import * as React from 'react'
import { SynapseConstants } from '../utils/'
import { getColorPallette } from './ColorGradient'
import { Facets } from './Facets'
import QueryCount from './QueryCount'
import QueryWrapper from './QueryWrapper'
import StackedBarChart from './StackedBarChart'
import SynapseTable, { SynapseTableProps } from './SynapseTable'
import CardContainer from './CardContainer'
import { CommonCardProps } from './CardContainerLogic'
import { StackedBarChartProps } from './StackedBarChart'
import { KeyValue } from '../utils/modules/sqlFunctions'
import { FacetColumnValuesRequest } from '../utils/jsonResponses/Table/FacetColumnRequest'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus)

type MenuState = {
  activeMenuIndices: number []
  accordionGroupIndex: number,
}

export type MenuConfig = {
  sql: string
  facetName: string
  facetDisplayValue?: string
  facetAliases?: {}
}

// utility for testing
export const GROUP_INDEX_CSS = 'SRC-accordion-key'
export const GROUP_INDEX_SELECTED_CSS = 'SRC-IS-ACTIVE'

interface MenuSearchParams extends KeyValue {
  menuIndex: string
  facetValue: string
}

type CommonMenuProps = {
  tableConfiguration?: SynapseTableProps
  cardConfiguration?: CommonCardProps
  stackedBarChartConfiguration?: StackedBarChartProps
  showBarChart?: boolean
  unitDescription?: string
}

type AccordionConfig = {
  menuConfig: MenuConfig []
  name: string
} & CommonMenuProps

export type QueryWrapperMenuProps = {
  menuConfig?: MenuConfig []
  accordionConfig?: AccordionConfig []
  isConsistent?: boolean
  token?: string
  rgbIndex: number
  searchParams?: MenuSearchParams
  name?: string
} & CommonMenuProps

type Info = {
  isSelected: boolean
  originalColor: string
  hoverWhiteTextClass?: string
}

export default class QueryWrapperMenu extends React.Component<QueryWrapperMenuProps, MenuState> {

  constructor(props: QueryWrapperMenuProps) {
    super(props)
    // See note about initializing props from state here
    //  - https://stackoverflow.com/questions/40063468/react-component-initialize-state-from-props/47341539#47341539
    
    const { searchParams, accordionConfig } = this.props
    let activeMenuIndices = []
    const indexFromURLOrDefaultZero = (searchParams && Number(searchParams.menuIndex)) || 0
    if (accordionConfig) {
      activeMenuIndices = new Array(accordionConfig.length).fill(0)
    } else {
      activeMenuIndices = [indexFromURLOrDefaultZero]
    }
    this.state = {
      activeMenuIndices,
      accordionGroupIndex: 0
    }
    this.handleHoverLogic = this.handleHoverLogic.bind(this)
    this.switchFacet = this.switchFacet.bind(this)
  }

  componentDidUpdate(prevProps: QueryWrapperMenuProps, _prevState: MenuState) {
    /*
      Update the row count or the menu index if the props changed by looking at whether the sql or the rgbIndex
      changed
    */
    let { activeMenuIndices } = this.state
    const { rgbIndex, accordionConfig } = this.props
    if (rgbIndex !== prevProps.rgbIndex) {
      activeMenuIndices = accordionConfig ? new Array(accordionConfig.length).fill(0): [0] 
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
  public handleHoverLogic = (info: Info) => (event: React.MouseEvent<HTMLDivElement>) => {
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
  public switchFacet = (menuIndexIn: number, accordionIndexIn: number) => (_: React.SyntheticEvent<HTMLDivElement>) => {
    const { activeMenuIndices, accordionGroupIndex } = this.state
    // there's an odd bug where clicking a menu item twice will select the first tab,
    // this is a fix for that, but this shouldn't be necessary
    const isClickingCurrentSelection = accordionGroupIndex === accordionIndexIn && activeMenuIndices[accordionIndexIn] === menuIndexIn
    activeMenuIndices[accordionIndexIn] = menuIndexIn
    if (!isClickingCurrentSelection) {
      this.setState({ activeMenuIndices, accordionGroupIndex: accordionIndexIn })
    }
  }

  /**
   * Handle user clicking menu item, event isn't used so we denote it as an _
   *
   * @memberof Menu
   */
  public toggleGroupAccordionIndex = (accordionGroupIndexIn: number) => (_event: React.SyntheticEvent<HTMLDivElement>) => {
    const { accordionGroupIndex } = this.state
    if (accordionGroupIndex === accordionGroupIndexIn) {
      return
    } else {
      this.setState({
        accordionGroupIndex: accordionGroupIndexIn
      })
    }
  }

  public render() {
    const { stackedBarChartConfiguration, name, menuConfig } = this.props
    const { activeMenuIndices } = this.state
    let sql = ''
    if (menuConfig) {
      sql = menuConfig[activeMenuIndices[0]].sql
    }
    const menuDropdown = this.renderMenuDropdown()
    const queryWrapper = this.renderQueryChildren()
    const showBarChart = stackedBarChartConfiguration !== undefined
    return (
      <React.Fragment>
        {
          name && sql
          &&
          <h3 id="exploreCount" className="SRC-boldText">
            <QueryCount token={this.props.token} name={name} sql={sql} />
          </h3>
        }
        <div className="break">
          <hr/>
        </div>
        <div className={`col-xs-12 col-sm-3 col-lg-2 SRC-menuLayout ${showBarChart ? 'SRC-menuPadding' : 'SRC-menuPaddingLess'}`}>
          {menuDropdown}
        </div>
        <div className="col-xs-12 col-sm-9 col-lg-10">
          {queryWrapper}
        </div>
      </React.Fragment>
    )
  }

  private renderMenuConfig(menuConfig: MenuConfig [], queryConfig: CommonMenuProps)  {
    const {
      token,
      rgbIndex = 0,
      isConsistent = false,
      searchParams,
    } = this.props
    
    const {
      cardConfiguration,
      tableConfiguration,
      stackedBarChartConfiguration,
      unitDescription = '',
    } = queryConfig
    
    const { activeMenuIndices, accordionGroupIndex } = this.state

    let facetValue = ''
    let menuIndexFromProps = ''
    if (searchParams) {
      ({ facetValue = '', menuIndex: menuIndexFromProps } = searchParams)
    }
    const showBarChart = stackedBarChartConfiguration !== undefined
    return menuConfig.map((config: MenuConfig, index: number) => {
      const isSelected: boolean = activeMenuIndices[accordionGroupIndex] === index
      const {
        facetName,
        facetAliases,
        sql,
      } = config
      let className = ''
      if (!isSelected) {
        className = 'SRC-hidden'
      }
      let selectedFacets: FacetColumnValuesRequest [] = []
      if (Number(menuIndexFromProps) === index && facetName && facetValue) {
        selectedFacets = [
          {
            concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
            facetValues: [facetValue],
            columnName: facetName
          }
        ]
      }
      const loadNow = isSelected
      return (
        <span key={facetName} className={className}>
          <QueryWrapper
            showBarChart={showBarChart}
            loadNow={loadNow}
            showMenu={true}
            initQueryRequest={{
              concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
              partMask: SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
                SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
                SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
                SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
              query: {
                sql,
                selectedFacets,
                isConsistent,
                limit: 25,
                offset: 0
              }
            }}
            unitDescription={unitDescription}
            facetName={facetName}
            token={token}
            rgbIndex={rgbIndex}
            facetAliases={facetAliases}
          >
            {stackedBarChartConfiguration ? <StackedBarChart {...stackedBarChartConfiguration} /> : <React.Fragment/>}
            <Facets />
            {/*
                Using a conditional render fails here because QueryWrapper can't clone an undefined element
                which will happen if either configuration is undefined.
            */}
            {tableConfiguration ? <SynapseTable {...tableConfiguration}/> : <React.Fragment/>}
            {cardConfiguration ? <CardContainer {...cardConfiguration}/> : <React.Fragment/>}
          </QueryWrapper>
        </span>
      )
    }
    )
  }

  private renderQueryChildren() {
    const {
      accordionConfig,
      menuConfig,
    } = this.props
    const {
      accordionGroupIndex,
    } = this.state
    if (accordionConfig) {
      return accordionConfig.map(
        (el, index) => {
          return (
            <div className={accordionGroupIndex === index ? '' : 'SRC-hidden'}>
              {this.renderMenuConfig(el.menuConfig, el)}
            </div>
          )
        }
      )
    } else {
      return this.renderMenuConfig(menuConfig!, this.props)
    }
  }

  private renderMenuDropdown() {
    const { accordionConfig, menuConfig } = this.props
    // accordionGroupIndex ??
    const { accordionGroupIndex } = this.state
    const { rgbIndex } = this.props
    const { colorPalette } = getColorPallette(rgbIndex, 5)
    const lightColor = '#F5F5F5'
    if (accordionConfig) {
      return accordionConfig.map(
        (el, index) => {
          const isActive = accordionGroupIndex === index
          const primaryColor = colorPalette[0]
          let style: React.CSSProperties = {
            background: isActive ? primaryColor : lightColor,
            color: isActive ? 'white' : '',
          }
          let indicatorClasses = isActive ? 'SRC-whiteText SRC-pointed-triangle-down' : ' SRC-hand-cursor '
          if (isActive) {
            style.borderTopColor = primaryColor
          }
          const hoverEnter: Info = {
            isSelected: isActive,
            originalColor: primaryColor,
          }
          const hoverLeave: Info = {
            isSelected: isActive,
            originalColor: lightColor
          }
          return (
            <div className={isActive ? GROUP_INDEX_SELECTED_CSS : ''}>
              <div 
                style={style}
                role={isActive ? "": "role"}
                onMouseEnter={this.handleHoverLogic(hoverEnter)}
                onMouseLeave={this.handleHoverLogic(hoverLeave)}
                className={`${GROUP_INDEX_CSS} SRC-gap SRC-menu-button-base ${indicatorClasses}`}
                onClick={!isActive ? this.toggleGroupAccordionIndex(index) : undefined }
              >
                {el.name}
                <span className="menu-icon">
                  {
                    !isActive
                    &&
                    <FontAwesomeIcon size={'xs'} color={'black'} icon={'plus'} />
                  }
                </span>
              </div>
              <TransitionGroup component={null}>
                {
                  isActive
                  &&
                  <CSSTransition
                    key={JSON.stringify(el)}
                    classNames="SRC-accordion-menu"
                    timeout={{ enter: 1000, exit: 500 }}
                  >
                    <div className={"SRC-accordion-menu "}>
                      {this.renderFacetMenu(el.menuConfig, index)}
                    </div>
                  </CSSTransition>
                }
              </TransitionGroup>
            </div>
          )
        }
      )
    }
    return this.renderFacetMenu(menuConfig!, 0)
  }

  private renderFacetMenu(menuConfig: MenuConfig [], curLevel: number) {
    const { rgbIndex, accordionConfig } = this.props
    const { activeMenuIndices, accordionGroupIndex } = this.state
    const { colorPalette } = getColorPallette(rgbIndex, 5)
    let originalColor = colorPalette[0]
    let defaultColor = '#F5F5F5'
    if (accordionConfig) {
      originalColor = colorPalette[2]
      defaultColor = colorPalette[4]
    }
    return menuConfig.map((config: MenuConfig, index: number) => {
      const { facetName, facetAliases = {} } = config
      const isSelected: boolean = activeMenuIndices[accordionGroupIndex] === index && curLevel === accordionGroupIndex
      const style: React.CSSProperties = {}
      let selectedStyling: string = ''
      if (isSelected) {
        // we have to programatically set the style since the color is chosen from a color
        // wheel
        style.background = originalColor
        // below has to be set so the pseudo element created will inherit its color
        // appropriately
        style.borderLeftColor = originalColor
        selectedStyling = 'SRC-pointed-triangle-right SRC-whiteText'
      } else {
        // change background to class
        selectedStyling = 'SRC-blackText'
        style.background = defaultColor
      }
      const infoEnter: Info = { isSelected, originalColor }
      const infoLeave: Info = { isSelected, originalColor: defaultColor }
      const facetDisplayValue: string = facetAliases[facetName] || facetName
      return (
        <div
          onMouseEnter={this.handleHoverLogic(infoEnter)}
          onMouseLeave={this.handleHoverLogic(infoLeave)}
          key={config.facetName}
          className={`SRC-hand-cursor SRC-menu-button-base ${selectedStyling} ${accordionConfig ? 'SRC-gap': ''}`}
          onClick={this.switchFacet(index, curLevel)}
          onKeyPress={this.switchFacet(index, curLevel)}
          role="button"
          tabIndex={0}
          style={style}
        >
          {facetDisplayValue}
        </div>
      )
    })
  }

}
