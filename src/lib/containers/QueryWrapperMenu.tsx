import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { SynapseConstants } from '../utils/'
import { getColorPallette } from './ColorGradient'
import { Facets } from './Facets'
import QueryWrapper from './QueryWrapper'
import StackedBarChart from './StackedBarChart'
import SynapseTable from './SynapseTable'
import CardContainer from './CardContainer'

library.add(faAngleLeft)
library.add(faAngleRight)

type MenuState = {
  menuIndex: number
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
  token: string
  type?: string
  rgbIndex: number
  loadingScreen?: JSX.Element
}

type Info = {
  isSelected: boolean
  originalColor: string
}

export default class QueryWrapperMenu extends React.Component<QueryWrapperMenuProps, MenuState> {

  public static propTypes = {
    facetName: PropTypes.string,
    menuConfig: PropTypes.arrayOf(PropTypes.any),
    rgbIndex: PropTypes.number,
    token: PropTypes.string
  }

  constructor(props: QueryWrapperMenuProps) {
    super(props)
    this.state = {
      menuIndex: 0
    }
    this.handleHoverLogic = this.handleHoverLogic.bind(this)
    this.switchFacet = this.switchFacet.bind(this)
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
  public switchFacet = (menuIndex: number) => (_: React.MouseEvent<HTMLDivElement>) => {
    this.setState({ menuIndex })
  }

  public render() {
    const menuDropdown = this.renderFacetMenu()
    const queryWrapper = this.renderQueryChildren()

    return (
      <div className="container-fluid">
          <div className="col-xs-2 SRC-menuLayout SRC-paddingTopNoMargin">
              {menuDropdown}
          </div>
          <div className="col-xs-10">
              {queryWrapper}
          </div>
      </div>
    )
  }

  private renderQueryChildren() {
    const { menuConfig, token, rgbIndex, loadingScreen, type = '' } = this.props
    return menuConfig.map((config: MenuConfig, index: number) => {
      const isSelected: boolean = (this.state.menuIndex === index)
      const {
        facetName,
        facetAliases,
        unitDescription = '',
        sql,
        synapseId,
        visibleColumnCount = 0,
        title = ''
      } = config
      let className = ''
      if (!isSelected) {
        className = 'SRC-hidden'
      }
      const showCards = type !== ''
      const showTable = title !== ''
      return (
        <span key={facetName} className={className}>
          <QueryWrapper
            showMenu={true}
            initQueryRequest={{
              concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
              partMask: SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
                SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
                SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
              query: {
                sql,
                isConsistent: false,
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
          className={`SRC-hoverWhiteText SRC-menu SRC-hand-cursor SRC-menu-hover SRC-hoverBox SRC-text-chart ${selectedStyling}`}
          onClick={this.switchFacet(index)}
          style={style}
        >
          {facetDisplayValue}
        </div>
      )
    })
  }
}
