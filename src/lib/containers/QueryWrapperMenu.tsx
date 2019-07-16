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
  // If accordionConfig is not specified then this array is of length 1 since there's only one level of 
  // indices, otherwise its of length accordionConfig.length
  menuIndexSelection: number[]
  accordionIndex: number | undefined
  lastAccordionIndex: number | undefined
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
}

type AccordionConfig = {
  menuConfig: MenuConfig []
  name: string
} & CommonMenuProps

export type QueryWrapperMenuProps = {
  menuConfig: MenuConfig []
  accordionConfig?: AccordionConfig []
  isConsistent?: boolean
  token?: string
  rgbIndex: number
  unitDescription?: string
  searchParams?: MenuSearchParams
  name: string
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
    const indexFromURLOrDefaultZero = (searchParams && Number(searchParams.menuIndex)) || 0
    let menuIndexSelection = []
    if (accordionConfig) {
      menuIndexSelection = new Array(accordionConfig.length).fill(0, 0, 1).fill(-1, 1, accordionConfig.length)
    } else {
      // else there is no accordion and we just have a single level
      menuIndexSelection = [indexFromURLOrDefaultZero]
    }
    this.state = {
      menuIndexSelection,
      accordionIndex: undefined,
      lastAccordionIndex: undefined
    }
    this.handleHoverLogic = this.handleHoverLogic.bind(this)
    this.switchFacet = this.switchFacet.bind(this)
  }

  componentDidUpdate(prevProps: QueryWrapperMenuProps, _prevState: MenuState) {
    /*
      Update the row count or the menu index if the props changed by looking at whether the sql or the rgbIndex
      changed
    */
    const { accordionConfig } = this.props
    const accordionConfigPrev = prevProps.accordionConfig
    if ((!accordionConfigPrev && accordionConfig)) {
      this.setState({
        accordionIndex: 0,
        menuIndexSelection: accordionConfig.map(_el => 0)
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
  public switchFacet = (accordionIndexIn: number, level: number) => (_: React.SyntheticEvent<HTMLDivElement>) => {
    const { menuIndexSelection, accordionIndex } = this.state
    // there's an odd bug where clicking a menu item twice will select the first tab,
    // this is a fix for that, but this shouldn't be necessary
    if (this.state.menuIndexSelection[accordionIndex!] !== accordionIndexIn) {
      const updatedSelection = menuIndexSelection.map(
        (_el, index) => index === level ? accordionIndexIn : -1
      )
      this.setState({ menuIndexSelection: updatedSelection })
    }
  }

  /**
   * Handle user clicking menu item, event isn't used so we denote it as an _
   *
   * @memberof Menu
   */
  public toggleSelectionLevel = (accordionIndexIn: number) => (_: React.SyntheticEvent<HTMLDivElement>) => {
    const { accordionIndex } = this.state
    if (accordionIndex === accordionIndexIn) {
      this.setState({
        accordionIndex: undefined,
        lastAccordionIndex: accordionIndex
      })
    } else {
      this.setState({
        accordionIndex: accordionIndexIn
      })
    }
  }

  public render() {
    const { stackedBarChartConfiguration, name, menuConfig, accordionConfig } = this.props
    const { accordionIndex = 0 } = this.state
    let sql = ''
    const curIndexSelection = this.state.menuIndexSelection[accordionIndex]
    if (accordionConfig) { 
      sql = accordionConfig[accordionIndex].menuConfig[curIndexSelection].sql
    } else if (accordionConfig) {
      sql = menuConfig[curIndexSelection].sql
    }
    const menuDropdown = this.renderMenuDropdown()
    const queryWrapper = this.renderQueryChildren()
    const showBarChart = stackedBarChartConfiguration !== undefined
    return (
      <React.Fragment>
        <h3 id="exploreCount" className="SRC-boldText">
          <QueryCount name={name} sql={sql} />
        </h3>
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
      unitDescription = '',
      searchParams,
    } = this.props

    const {
      cardConfiguration,
      tableConfiguration,
      stackedBarChartConfiguration,
    } = queryConfig
    
    const {
      accordionIndex = 0
    } = this.state

    let facetValue = ''
    let menuIndexFromProps = ''
    if (searchParams) {
      ({ facetValue = '', menuIndex: menuIndexFromProps } = searchParams)
    }
    const showBarChart = stackedBarChartConfiguration !== undefined
    return menuConfig.map((config: MenuConfig, index: number) => {
      const selectedIndexOnLevel = this.state.menuIndexSelection[accordionIndex]
      const isSelected: boolean = selectedIndexOnLevel === index
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
      lastAccordionIndex = 0,
      accordionIndex
    } = this.state
    if (accordionConfig) {
      return accordionConfig.map(
        (el, index) => {
          const levelToUse = accordionIndex === undefined ? lastAccordionIndex : accordionIndex
          return (
            <div className={levelToUse === index ? '' : 'SRC-hidden'}>
              {this.renderMenuConfig(el.menuConfig, el)}
            </div>
          )
        }
      )
    } else {
      return this.renderMenuConfig(menuConfig, this.props)
    }
  }

  private renderMenuDropdown() {
    const { accordionConfig, menuConfig } = this.props
    const { accordionIndex, lastAccordionIndex } = this.state
    const { rgbIndex } = this.props
    const { colorPalette } = getColorPallette(rgbIndex, 5)
    const lightColor = '#F5F5F5'
    const indexToUse = accordionIndex === undefined ? lastAccordionIndex : accordionIndex
    if (accordionConfig) {
      return accordionConfig.map(
        (el, index) => {
          const isSelected = indexToUse === index
          const primaryColor = colorPalette[0]
          const style: React.CSSProperties = {
            background: isSelected ? primaryColor : lightColor,
            color: isSelected ? 'white' : '',
            borderTopColor: isSelected ? primaryColor : ''
          }
          const hoverEnter: Info = {
            isSelected,
            originalColor: primaryColor,
            hoverWhiteTextClass: 'SRC-hoverWhiteText'
          }
          const hoverLeave: Info = {
            isSelected,
            originalColor: lightColor
          }
          return (
            <React.Fragment>
              <div 
                style={style}
                role="button"
                onMouseEnter={this.handleHoverLogic(hoverEnter)}
                onMouseLeave={this.handleHoverLogic(hoverLeave)}
                className={`SRC-accordion-key SRC-gap SRC-hand-cursor SRC-menu-button-base ${accordionIndex === index ? 'SRC-whiteText SRC-pointed-triangle-down': ''}`}
                onClick={this.toggleSelectionLevel(index)}
              >
                  {el.name}
                  <span className="menu-icon">
                    <FontAwesomeIcon className={isSelected ? '' : 'SRC-accordion-not-selected'} size={'xs'} color={isSelected ? 'white': 'black'} icon={isSelected ? 'minus' : 'plus'} />
                  </span>
              </div>
              <TransitionGroup>
                {
                  accordionIndex === index
                  &&
                  <CSSTransition
                    key={JSON.stringify(el)}
                    classNames="SRC-accordion-menu"
                    timeout={{ enter: 300, exit: 500 }}
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
    return this.renderFacetMenu(menuConfig, 0)
  }

  private renderFacetMenu(menuConfig: MenuConfig [], curLevel: number) {
    const { rgbIndex, accordionConfig } = this.props
    const { colorPalette } = getColorPallette(rgbIndex, 5)
    const originalColor = colorPalette[2]
    let defaultColor = '#F5F5F5'
    if (accordionConfig) {
      defaultColor = colorPalette[4]
    }
    return menuConfig.map((config: MenuConfig, index: number) => {
      const { facetName, facetAliases = {} } = config
      const selectedIndexOnLevel = this.state.menuIndexSelection[curLevel]
      const isSelected: boolean = selectedIndexOnLevel === index
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
      const infoEnter: Info = { isSelected, originalColor }
      const infoLeave: Info = { isSelected, originalColor: defaultColor }
      const facetDisplayValue: string = facetAliases[facetName] || facetName
      return (
        <div
          onMouseEnter={this.handleHoverLogic(infoEnter)}
          onMouseLeave={this.handleHoverLogic(infoLeave)}
          key={config.facetName}
          className={`SRC-gap SRC-hand-cursor SRC-menu-button-base ${selectedStyling}`}
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
