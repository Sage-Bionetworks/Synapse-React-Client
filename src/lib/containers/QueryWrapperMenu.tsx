import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
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
  selectionLevel: number
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
      menuIndexSelection = new Array(accordionConfig.length).fill(0)
    } else {
      // else there is no accordion and we just have a single level
      menuIndexSelection = [indexFromURLOrDefaultZero]
    }
    this.state = {
      menuIndexSelection,
      selectionLevel: 0
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
    // const hasPropsChanged = prevProps.rgbIndex !== rgbIndex
    if ((!accordionConfigPrev && accordionConfig)) {
      this.setState({
        selectionLevel: 0,
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
    }
  }

  /**
   * Handle user clicking menu item, event isn't used so we denote it as an _
   *
   * @memberof Menu
   */
  public switchFacet = (selectedIndex: number, level: number) => (_: React.SyntheticEvent<HTMLDivElement>) => {
    const { menuIndexSelection, selectionLevel } = this.state
    // there's an odd bug where clicking a menu item twice will select the first tab,
    // this is a fix for that, but this shouldn't be necessary
    if (this.state.menuIndexSelection[selectionLevel] !== selectedIndex) {
      menuIndexSelection[level] = selectedIndex
      this.setState({ menuIndexSelection })
    }
  }

  /**
   * Handle user clicking menu item, event isn't used so we denote it as an _
   *
   * @memberof Menu
   */
  public toggleSelectionLevel = (selectionLevel: number) => (_: React.SyntheticEvent<HTMLDivElement>) => {
    this.setState({
      selectionLevel
    })
  }

  public render() {
    const { stackedBarChartConfiguration, name, menuConfig, accordionConfig } = this.props
    let sql = ''
    const curIndexSelection = this.state.menuIndexSelection[this.state.selectionLevel]
    if (accordionConfig) { 
      sql = accordionConfig[this.state.selectionLevel].menuConfig[curIndexSelection].sql
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
    let facetValue = ''
    let menuIndexFromProps = ''
    if (searchParams) {
      ({ facetValue = '', menuIndex: menuIndexFromProps } = searchParams)
    }
    const showBarChart = stackedBarChartConfiguration !== undefined
    return menuConfig.map((config: MenuConfig, index: number) => {
      const selectedIndexOnLevel = this.state.menuIndexSelection[this.state.selectionLevel]
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
    if (accordionConfig) {
      return accordionConfig.map(
        (el) => {
          return this.renderMenuConfig(el.menuConfig, el)
        }
      )
    } else {
      return this.renderMenuConfig(menuConfig, this.props)
    }
  }

  private renderMenuDropdown() {
    const { accordionConfig, menuConfig } = this.props
    const { selectionLevel } = this.state
    const { rgbIndex } = this.props
    const { colorPalette } = getColorPallette(rgbIndex, 5)
    if (accordionConfig) {
      return accordionConfig.map(
        (el, index) => {
          const isSelected = selectionLevel === index
          // const color = isSelected ? colorPalette[0] : 'white'
          const style: React.CSSProperties = {
            background: isSelected ? colorPalette[0]: '#F9F9F9'
          }
          // const hoverEnter: Info = {
          //   isSelected,
          //   originalColor: color
          // }
          // const hoverLeave: Info = {
          //   isSelected,
          //   originalColor: color
          // }
          return (
            <div>
              <div 
                style={style}
                role="button"
                // onMouseEnter={this.handleHoverLogic(hoverEnter)}
                // onMouseLeave={this.handleHoverLogic(hoverLeave)}
                className={`SRC-hoverWhiteText SRC-hand-cursor SRC-menu-button-base ${isSelected ? 'SRC-whiteText': ''}`}
                onClick={this.toggleSelectionLevel(index)}
              >
                  {el.name}
                  <span className="menu-icon">
                    <FontAwesomeIcon size={'xs'} color={isSelected ? 'white': 'black'} icon={isSelected ? 'minus' : 'plus'} />
                  </span>
              </div>
              <div className={isSelected ? '' : 'SRC-hidden'}>
                {this.renderFacetMenu(el.menuConfig, index)}
              </div>
            </div>
          )
        }
      )
    }
    return this.renderFacetMenu(menuConfig, 0)
  }

  private renderFacetMenu(menuConfig: MenuConfig [], curLevel: number) {
    const { rgbIndex } = this.props
    const { colorPalette } = getColorPallette(rgbIndex, 5)
    const originalColor = colorPalette[0]
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
        selectedStyling = 'SRC-pointed SRC-whiteText'
      } else {
        // change background to class
        selectedStyling = 'SRC-blackText'
        style.background = colorPalette[4]
      }
      const infoEnter: Info = { isSelected, originalColor }
      const infoLeave: Info = { isSelected, originalColor: '#F5F5F5' }
      const facetDisplayValue: string = facetAliases[facetName] || facetName
      return (
        <div
          onMouseEnter={this.handleHoverLogic(infoEnter)}
          onMouseLeave={this.handleHoverLogic(infoLeave)}
          key={config.facetName}
          className={`SRC-hoverWhiteText SRC-hand-cursor SRC-menu-button-base ${selectedStyling}`}
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
