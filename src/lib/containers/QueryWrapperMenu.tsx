import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import * as React from 'react'
import { SynapseConstants, SynapseClient } from '../utils/'
import { getColorPallette } from './ColorGradient'
import { Facets } from './Facets'
import QueryWrapper, { LazyLoad } from './QueryWrapper'
import StackedBarChart from './StackedBarChart'
import SynapseTable from './SynapseTable'
import CardContainer from './CardContainer'
import { QueryBundleRequest } from '../utils/jsonResponses/Table/QueryBundleRequest'

library.add(faAngleLeft)
library.add(faAngleRight)

type MenuState = {
  menuIndex: number
  [index: string]: number | string
}

export type MenuConfig = {
  sql: string
  facetName: string
  facetDisplayValue?: string
  title?: string
  visibleColumnCount?: number
  unitDescription?: string
  synapseId: string
  facetAliases?: {}
}

export type QueryWrapperMenuProps = {
  menuConfig: MenuConfig []
  isConsistent?: boolean
  token?: string
  type?: string
  rgbIndex: number
  loadingScreen?: JSX.Element
}

type Info = {
  isSelected: boolean
  originalColor: string
}

export default class QueryWrapperMenu extends React.Component<QueryWrapperMenuProps, MenuState> {

  constructor(props: QueryWrapperMenuProps) {
    super(props)
    this.state = {
      menuIndex: 0,
    }
    this.handleHoverLogic = this.handleHoverLogic.bind(this)
    this.switchFacet = this.switchFacet.bind(this)
    this.calculateRowCount = this.calculateRowCount.bind(this)
  }

  componentDidMount() {
    this.calculateRowCount()
  }

  calculateRowCount() {
    const { menuConfig } = this.props
    const { sql } = menuConfig[0]  // grab the first one and calculate the count from that
    if (this.state[sql]) {
      return
    }
    const request: QueryBundleRequest = {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      query: {
        sql,
      },
      partMask: SynapseConstants.BUNDLE_MASK_QUERY_COUNT
    }
    SynapseClient.getQueryTableResults(request).then(
      (data) => {
        this.setState({ [sql]: data.queryCount! })
      }
    )
  }

  componentDidUpdate(prevProps: QueryWrapperMenuProps, _prevState: MenuState) {
    /*
      Update the row count or the menu index if the props changed by looking at whether the sql or the rgbIndex
      changed
    */
    const { menuConfig, rgbIndex } = this.props
    const hasPropsChanged = prevProps.menuConfig[0].sql !== menuConfig[0].sql || prevProps.rgbIndex !== rgbIndex
    if (hasPropsChanged) {
      this.setState({
        menuIndex: 0,
      })
      this.calculateRowCount()
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
  public switchFacet = (menuIndex: number) => (_: React.SyntheticEvent<HTMLDivElement>) => {
    // there's an odd bug where clicking a menu item twice will select the first tab,
    // this is a fix for that, but this shouldn't be necessary
    if (this.state.menuIndex !== menuIndex) {
      this.setState({ menuIndex })
    }
  }

  public render() {
    const menuDropdown = this.renderFacetMenu()
    const queryWrapper = this.renderQueryChildren()
    const name = window.location.hash.substring(10) || ''
    const { menuConfig } = this.props
    const { sql } = menuConfig[0]  // grab the first one and calculate the count from that
    const queryCount = this.state[sql] || ''
    return (
      <React.Fragment>
        <h3 id="exploreCount" className="SRC-boldText">
            {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString#Using_toLocaleString */}
            {name} ({queryCount && queryCount.toLocaleString()})
          </h3>
          <div className="break">
            <hr/>
          </div>
        <div className="col-xs-2 SRC-menuLayout SRC-paddingTopNoMargin">
          {menuDropdown}
        </div>
        <div className="col-xs-10">
          {queryWrapper}
        </div>
      </React.Fragment>
    )
  }

  private renderQueryChildren() {
    const { menuConfig, token, rgbIndex, loadingScreen, isConsistent = false, type = '' } = this.props
    return menuConfig.map((config: MenuConfig, index: number) => {
      const isSelected: boolean = (this.state.menuIndex === index)
      const {
        facetName,
        facetAliases,
        unitDescription = '',
        sql,
        synapseId,
        visibleColumnCount = Infinity,
        title = ''
      } = config
      let className = ''
      if (!isSelected) {
        className = 'SRC-hidden'
      }
      const showCards = type !== ''
      const showTable = title !== ''
      const lazyLoad: LazyLoad = {
        load: isSelected
      }
      return (
        <span key={facetName} className={className}>
          <QueryWrapper
            lazyLoad={lazyLoad}
            showMenu={true}
            initQueryRequest={{
              concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
              partMask: SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
                SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
                SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
              query: {
                sql,
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
            <StackedBarChart
              synapseId={synapseId}
              unitDescription={unitDescription}
              loadingScreen={loadingScreen}
            />
            <Facets />
            {showTable ?
              <SynapseTable
                title={title}
                synapseId={synapseId}
                visibleColumnCount={visibleColumnCount}
              />
              :
              <span/>
            }
            {showCards ? <CardContainer type={type}/> : <span/>}
          </QueryWrapper>
        </span>
      )
    }
    )
  }

  private renderFacetMenu() {
    const { menuConfig, rgbIndex } = this.props
    const { colorPalette } = getColorPallette(rgbIndex, 1)
    const originalColor = colorPalette[0]

    return menuConfig.map((config: MenuConfig, index: number) => {
      const { facetName, facetAliases = {} } = config
      const isSelected: boolean = (index === this.state.menuIndex)
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
        selectedStyling = 'SRC-blackText SRC-light-background'
      }
      const infoEnter: Info = { isSelected, originalColor }
      const infoLeave: Info = { isSelected, originalColor: '#F5F5F5' }
      const facetDisplayValue: string = facetAliases[facetName] || facetName
      return (
        <div
          onMouseEnter={this.handleHoverLogic(infoEnter)}
          onMouseLeave={this.handleHoverLogic(infoLeave)}
          key={config.facetName}
          className={`SRC-no-outline SRC-hoverWhiteText SRC-menu SRC-hand-cursor SRC-menu-hover SRC-hoverBox SRC-text-chart ${selectedStyling}`}
          onClick={this.switchFacet(index)}
          onKeyPress={this.switchFacet(index)}
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
