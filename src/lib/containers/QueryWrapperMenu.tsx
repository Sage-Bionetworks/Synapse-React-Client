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

  componentDidUpdate(_prevProps: QueryWrapperMenuProps, prevState: MenuState) {
    /*
       A component updates from either the props changing OR the state changing.
       The state here is a single item, menuIndex, if that hasn't changed then the props have.
       Portals currently use the QueryWrapperMenu such that the props changes on page navigation,
       in which case we want to reset the menuIndex back to the first facet item.
       A future alternative would be to hold the menuIndex value on a per page basis, but that would
       be more difficult.
    */
    const hasStateChanged = prevState.menuIndex !== this.state.menuIndex
    if (!hasStateChanged  && this.state.menuIndex !== 0) {
      // check this isn't an update from the state changing
      // and that we haven't already set the menuIndex back to zero
      this.setState({
        menuIndex: 0
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

    return (
      <React.Fragment>
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
