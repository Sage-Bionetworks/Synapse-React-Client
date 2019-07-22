import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleLeft)
library.add(faAngleRight)
library.add(faMinus)
library.add(faPlus)

type MenuState = {
  activeMenuIndex: number
  visibleAccordionIndex: number | undefined
  lastAccordionIndexWithSelection: number,
  hasClickedMenuItemOnce: boolean
}

export type MenuConfig = {
  sql: string
  facetName: string
  facetDisplayValue?: string
  facetAliases?: {}
}

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
    
    const { searchParams } = this.props
    const indexFromURLOrDefaultZero = (searchParams && Number(searchParams.menuIndex)) || 0
    const activeMenuIndex = indexFromURLOrDefaultZero
    this.state = {
      activeMenuIndex,
      visibleAccordionIndex: undefined,
      lastAccordionIndexWithSelection: 0,
      hasClickedMenuItemOnce: false
    }
    this.handleHoverLogic = this.handleHoverLogic.bind(this)
    this.switchFacet = this.switchFacet.bind(this)
  }

  componentDidUpdate(prevProps: QueryWrapperMenuProps, _prevState: MenuState) {
    /*
      Update the row count or the menu index if the props changed by looking at whether the sql or the rgbIndex
      changed
    */
    const { rgbIndex } = this.props
    if (rgbIndex !== prevProps.rgbIndex) {
      this.setState({
        visibleAccordionIndex: undefined,
        lastAccordionIndexWithSelection: 0,
        activeMenuIndex: 0,
        
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
    if (!info.isSelected && event.currentTarget.tagName === 'DIV') {
      event.currentTarget.style.backgroundColor = info.originalColor
      if (info.hoverWhiteTextClass) {
        event.currentTarget.classList.add(info.hoverWhiteTextClass)
      } else {
        event.currentTarget.classList.remove('SRC-hoverWhiteText')
      }
    }
  }

  /**
   * Handle user clicking menu item, event isn't used so we denote it as an _
   *
   * @memberof Menu
   */
  public switchFacet = (menuIndexIn: number, accordionIndexIn: number) => (_: React.SyntheticEvent<HTMLDivElement>) => {
    const { activeMenuIndex, lastAccordionIndexWithSelection } = this.state
    // there's an odd bug where clicking a menu item twice will select the first tab,
    // this is a fix for that, but this shouldn't be necessary
    const isClickingCurrentSelection = lastAccordionIndexWithSelection === accordionIndexIn && activeMenuIndex === menuIndexIn
    if (!isClickingCurrentSelection) {
      this.setState({ activeMenuIndex: menuIndexIn, lastAccordionIndexWithSelection: accordionIndexIn })
    }
    if (!this.state.hasClickedMenuItemOnce) {
      this.setState({
        hasClickedMenuItemOnce: true
      })
    }
  }

  /**
   * Handle user clicking menu item, event isn't used so we denote it as an _
   *
   * @memberof Menu
   */
  public toggleSelectionLevel = (accordionIndexIn: number) => (_: React.SyntheticEvent<HTMLDivElement>) => {
    const { visibleAccordionIndex } = this.state
    if (visibleAccordionIndex === accordionIndexIn) {
      this.setState({
        // all are closed in this case
        visibleAccordionIndex: undefined
      })
    } else {
      this.setState({
        visibleAccordionIndex: accordionIndexIn
      })
    }
  }

  public render() {
    const { stackedBarChartConfiguration, name, menuConfig, accordionConfig } = this.props
    const { lastAccordionIndexWithSelection, activeMenuIndex } = this.state
    let sql = ''
    if (accordionConfig) { 
      sql = accordionConfig[lastAccordionIndexWithSelection].menuConfig[activeMenuIndex].sql
    } else if (menuConfig) {
      sql = menuConfig[activeMenuIndex].sql
    }
    const menuDropdown = this.renderMenuDropdown()
    const queryWrapper = this.renderQueryChildren()
    const showBarChart = stackedBarChartConfiguration !== undefined
    return (
      <React.Fragment>
        {
          !accordionConfig && name
          &&
          <h3 id="exploreCount" className="SRC-boldText">
            <QueryCount token={this.props.token} name={name} sql={sql} />
          </h3>
        }
        <div className="break">
          <hr/>
        </div>
        <div className={`col-xs-2 SRC-menuLayout ${showBarChart ? 'SRC-menuPadding' : 'SRC-menuPaddingLess'}`}>
          {menuDropdown}
        </div>
        <div className="col-xs-10">
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
    
    const { activeMenuIndex } = this.state

    let facetValue = ''
    let menuIndexFromProps = ''
    if (searchParams) {
      ({ facetValue = '', menuIndex: menuIndexFromProps } = searchParams)
    }
    const showBarChart = stackedBarChartConfiguration !== undefined
    return menuConfig.map((config: MenuConfig, index: number) => {
      const isSelected: boolean = activeMenuIndex === index
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
      lastAccordionIndexWithSelection,
    } = this.state
    if (accordionConfig) {
      return accordionConfig.map(
        (el, index) => {
          return (
            <div className={lastAccordionIndexWithSelection === index ? '' : 'SRC-hidden'}>
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
    const { visibleAccordionIndex, lastAccordionIndexWithSelection, hasClickedMenuItemOnce } = this.state
    const { rgbIndex } = this.props
    const { colorPalette } = getColorPallette(rgbIndex, 5)
    const lightColor = '#F5F5F5'
    if (accordionConfig) {
      return accordionConfig.map(
        (el, index) => {
          const doExpand = visibleAccordionIndex === index
          const isLastActiveSelection = (lastAccordionIndexWithSelection === index) && hasClickedMenuItemOnce
          const isActive = doExpand || isLastActiveSelection
          const primaryColor = colorPalette[0]
          let style: React.CSSProperties = {
            background: isActive ? primaryColor : lightColor,
            color: doExpand ? 'white' : '',
          }
          let indicatorClasses = isActive ? 'SRC-whiteText ' : ''
          if (doExpand) {
            indicatorClasses += 'SRC-pointed-triangle-down'
            style.borderTopColor = primaryColor
          } else if (isLastActiveSelection) {
            indicatorClasses += 'SRC-pointed-triangle-right'
            style.borderLeftColor = primaryColor
          }
          const hoverEnter: Info = {
            isSelected: isActive,
            originalColor: primaryColor,
            hoverWhiteTextClass: 'SRC-hoverWhiteText'
          }
          const hoverLeave: Info = {
            isSelected: isActive,
            originalColor: lightColor
          }
          return (
            <React.Fragment>
              <div 
                style={style}
                role="button"
                onMouseEnter={this.handleHoverLogic(hoverEnter)}
                onMouseLeave={this.handleHoverLogic(hoverLeave)}
                className={`SRC-accordion-key SRC-gap SRC-hand-cursor SRC-menu-button-base ${indicatorClasses}`}
                onClick={this.toggleSelectionLevel(index)}
              >
                {el.name}
                <span className="menu-icon">
                  <FontAwesomeIcon className={isActive ? '' : 'SRC-accordion-not-selected'} size={'xs'} color={isActive ? 'white': 'black'} icon={doExpand ? 'minus' : 'plus'} />
                </span>
              </div>
              <TransitionGroup>
                {
                  visibleAccordionIndex === index
                  &&
                  <CSSTransition
                    key={JSON.stringify(el)}
                    classNames="SRC-accordion-menu"
                    timeout={{ enter: 2000, exit: 1000 }}
                  >
                    <div className="SRC-accordion-menu">
                      {this.renderFacetMenu(el.menuConfig, index)}
                    </div>
                  </CSSTransition>
                }
              </TransitionGroup>
            </React.Fragment>
          )
        }
      )
    }
    return this.renderFacetMenu(menuConfig!, 0)
  }

  private renderFacetMenu(menuConfig: MenuConfig [], curLevel: number) {
    const { rgbIndex, accordionConfig } = this.props
    const { colorPalette } = getColorPallette(rgbIndex, 5)
    let originalColor = colorPalette[0]
    let defaultColor = '#F5F5F5'
    if (accordionConfig) {
      originalColor = colorPalette[2]
      defaultColor = colorPalette[4]
    }
    return menuConfig.map((config: MenuConfig, index: number) => {
      const { facetName, facetAliases = {} } = config
      const isSelected: boolean = this.state.activeMenuIndex === index && curLevel == this.state.lastAccordionIndexWithSelection
      const style: any = {}
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
      const infoEnter: Info = { isSelected, originalColor, hoverWhiteTextClass: 'SRC-hoverWhiteText' }
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
