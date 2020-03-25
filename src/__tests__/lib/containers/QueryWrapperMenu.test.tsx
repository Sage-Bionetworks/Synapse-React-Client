import * as React from 'react'
import { mount } from 'enzyme'
import { mockData } from '../../../mocks'
import QueryWrapperMenu, {
  QueryWrapperMenuProps,
  ACCORDION_GROUP_CSS,
  ACCORDION_GROUP_ACTIVE_CSS,
  MENU_DROPDOWN_CSS,
  MenuConfig,
} from '../../../lib/containers/QueryWrapperMenu'
import QueryWrapper from '../../../lib/containers/QueryWrapper'
import StackedBarChart, {
  StackedBarChartProps,
} from '../../../lib/containers/StackedBarChart'
import { Facets } from '../../../lib/containers/Facets'
import CardContainer from '../../../lib/containers/CardContainer'
import SynapseTable, {
  SynapseTableProps,
} from '../../../lib/containers/table/SynapseTable'
import { SynapseConstants } from '../../../lib/'
import { GenericCardSchema } from 'lib/containers/GenericCard'
import Search from 'lib/containers/Search'
import * as _ from 'lodash'

const createMountedComponent = (props: QueryWrapperMenuProps) => {
  const wrapper = mount<QueryWrapperMenu>(<QueryWrapperMenu {...props} />)
  const instance = wrapper.instance()
  return { wrapper, instance }
}

describe('it renders with basic functionality', () => {
  const SynapseClient = require('../../../lib/utils/SynapseClient')
  SynapseClient.getQueryTableResults = jest.fn(() => Promise.resolve(mockData))
  const sql: string = 'SELECT * FROM syn5604373'
  const facet: string = 'name'
  const synapseId: string = 'syn5604373'
  const token: string = ''
  const name = 'Studies'
  const props: QueryWrapperMenuProps = {
    token,
    name,
    entityId: synapseId,
    menuConfig: [{ sql, facet }],
    rgbIndex: 3,
    stackedBarChartConfiguration: {
      loadingScreen: <div />,
    },
  }

  it('renders without crashing', () => {
    const wrapper = createMountedComponent(props)
    expect(wrapper).toBeDefined()
  })

  it('renders a bar chart, table, and facets', async () => {
    const propsWithTitle: QueryWrapperMenuProps = {
      token,
      name,
      rgbIndex: 3,
      entityId: synapseId,
      tableConfiguration: {
        title: 'title',
      },
      stackedBarChartConfiguration: {
        loadingScreen: <div />,
      },
      menuConfig: [{ sql, facet }],
    }
    const { wrapper } = await createMountedComponent(propsWithTitle)
    expect(wrapper).toBeDefined()
    expect(wrapper.find(QueryWrapper)).toHaveLength(1)
    expect(wrapper.find(StackedBarChart)).toHaveLength(1)
    expect(wrapper.find(Facets)).toHaveLength(1)
    expect(wrapper.find(SynapseTable)).toHaveLength(1)
  })

  it('renders cards and no bar chart', async () => {
    const propsWithTitle: QueryWrapperMenuProps = {
      token,
      name,
      rgbIndex: 3,
      entityId: synapseId,
      cardConfiguration: {
        type: SynapseConstants.STUDY,
      },
      menuConfig: [{ sql, facet }],
    }
    const { wrapper } = await createMountedComponent(propsWithTitle)
    expect(wrapper).toBeDefined()
    expect(wrapper.find(QueryWrapper)).toHaveLength(1)
    expect(wrapper.find(StackedBarChart)).toHaveLength(0)
    expect(wrapper.find(Facets)).toHaveLength(1)
    expect(wrapper.find(CardContainer)).toHaveLength(1)
  })

  it('renders a bar chart, cards, and facets', async () => {
    const propsWithType: QueryWrapperMenuProps = {
      ...props,
      cardConfiguration: {
        type: SynapseConstants.STUDY,
      },
      stackedBarChartConfiguration: {
        loadingScreen: <div />,
      },
    }
    const { wrapper } = await createMountedComponent(propsWithType)

    expect(wrapper).toBeDefined()
    expect(wrapper.find(QueryWrapper)).toHaveLength(1)
    expect(wrapper.find(StackedBarChart)).toHaveLength(1)
    expect(wrapper.find(CardContainer)).toHaveLength(1)
    expect(wrapper.find(Facets)).toHaveLength(1)
  })

  it('renders a bar chart, cards, and facets', async () => {
    const propsWithType: QueryWrapperMenuProps = {
      ...props,
      cardConfiguration: {
        type: SynapseConstants.STUDY,
      },
      stackedBarChartConfiguration: {
        loadingScreen: <div />,
      },
    }
    const { wrapper } = await createMountedComponent(propsWithType)

    expect(wrapper).toBeDefined()
    expect(wrapper.find(QueryWrapper)).toHaveLength(1)
    expect(wrapper.find(StackedBarChart)).toHaveLength(1)
    expect(wrapper.find(CardContainer)).toHaveLength(1)
    expect(wrapper.find(Facets)).toHaveLength(1)
  })
})

describe('it renders an accordion config', () => {
  const SynapseClient = require('../../../lib/utils/SynapseClient')
  SynapseClient.getQueryTableResults = jest.fn(() => Promise.resolve(mockData))
  const sql: string = 'SELECT * FROM syn5604373'
  const genericCardSchema: GenericCardSchema = {
    type: 'PROGRAM',
    title: 'title',
    subTitle: 'subtitle',
    description: 'description',
    icon: 'icon',
    link: 'link',
    secondaryLabels: ['labelOne', 'labelTwo'],
  }
  const props: QueryWrapperMenuProps = {
    entityId: 'syn5604373',
    accordionConfig: [
      {
        name: 'Computational',
        menuConfig: [
          { sql, facet: 'a' },
          { sql, facet: 'b' },
          { sql, facet: 'c' },
        ],
        cardConfiguration: {
          type: SynapseConstants.GENERIC_CARD,
          genericCardSchema,
        },
      },
      {
        name: 'Experimental',
        menuConfig: [
          { sql, facet: 'd' },
          { sql, facet: 'e' },
        ],
        cardConfiguration: {
          type: SynapseConstants.GENERIC_CARD,
          genericCardSchema,
        },
      },
    ],
    rgbIndex: 3,
  }

  it('renders without crashing', () => {
    const wrapper = createMountedComponent(props)
    expect(wrapper).toBeDefined()
  })

  // selects the top level menu
  const MENU_DROPDOWN_CSS_SELECTOR = `.${MENU_DROPDOWN_CSS}`
  // selects an accordion group within the overall menu
  const ACCORDION_GROUP_CSS_SELECTOR = `.${ACCORDION_GROUP_CSS}`
  // selects an accordion group that is currently active
  const ACCORDION_GROUP_ACTIVE_CSS_SELECTOR = `.${ACCORDION_GROUP_ACTIVE_CSS}`
  // selects the accordion group's menu
  const ACCORDION_GROUP_MENU_SELECTOR = `.${ACCORDION_GROUP_ACTIVE_CSS} .SRC-accordion-menu`

  it('renders with the first accordion dropdown already opened', async () => {
    const { wrapper } = await createMountedComponent(props)
    // check there are two accordion groups
    expect(wrapper.find(ACCORDION_GROUP_CSS_SELECTOR)).toHaveLength(2)
    // only one accordion should be selected
    expect(wrapper.find(ACCORDION_GROUP_ACTIVE_CSS_SELECTOR)).toHaveLength(1)
    // check first option under the first group index is selected
    expect(
      wrapper
        .find(ACCORDION_GROUP_ACTIVE_CSS_SELECTOR)
        .childAt(1)
        .find('.SRC-pointed-triangle-right'),
    ).toHaveLength(1)
  })

  it('makes selections and maintains state ', async () => {
    const { wrapper } = await createMountedComponent(props)
    const childOne = 0
    const childTwo = 1
    // Click the first accordion key's third menu-item
    await wrapper
      .find(ACCORDION_GROUP_MENU_SELECTOR)
      .childAt(2)
      .simulate('click')
    // click the second accordion key open
    await wrapper
      .find(ACCORDION_GROUP_CSS_SELECTOR)
      .at(childTwo)
      .simulate('click')
    // check the first accordion key's menu is closed && second accordion key's menu is active with first child selected
    expect(
      wrapper
        .find(MENU_DROPDOWN_CSS_SELECTOR)
        .childAt(childOne)
        .hasClass(ACCORDION_GROUP_ACTIVE_CSS),
    ).toBeFalsy()
    expect(
      wrapper
        .find(MENU_DROPDOWN_CSS_SELECTOR)
        .childAt(childTwo)
        .hasClass(ACCORDION_GROUP_ACTIVE_CSS),
    ).toBeTruthy()
    expect(
      wrapper
        .find(ACCORDION_GROUP_MENU_SELECTOR)
        .childAt(0)
        .hasClass('SRC-pointed-triangle-right'),
    ).toBeTruthy()
    // click the first top accordion key back open again and see the third item is still clicked
    await wrapper
      .find(ACCORDION_GROUP_CSS_SELECTOR)
      .at(childOne)
      .simulate('click')
    // verify second item is still selected from first click
    expect(
      wrapper
        .find(MENU_DROPDOWN_CSS_SELECTOR)
        .childAt(childOne)
        .hasClass(ACCORDION_GROUP_ACTIVE_CSS),
    ).toBeTruthy()
    expect(
      wrapper
        .find(MENU_DROPDOWN_CSS_SELECTOR)
        .childAt(childTwo)
        .hasClass(ACCORDION_GROUP_ACTIVE_CSS),
    ).toBeFalsy()
    expect(
      wrapper
        .find(ACCORDION_GROUP_MENU_SELECTOR)
        .childAt(2)
        .hasClass('SRC-pointed-triangle-right'),
    ).toBeTruthy()
  })

  describe('deeplinking function', () => {
    const searchParams = {
      facetValue: 'something',
      facet: 'e',
    }
    const menuConfig = _.cloneDeep<MenuConfig[]>(
      props.accordionConfig![1].menuConfig,
    )
    const wrapperProps = {
      ...props,
      searchParams,
      accordionConfig: undefined,
      menuConfig,
    }

    it('sets the right facet from the search params', async () => {
      const { instance } = await createMountedComponent(wrapperProps)

      expect(instance.state.activeMenuIndices).toEqual([1])
      expect(instance.props.menuConfig![1].facet).toBe('e')
    })

    it('updates url search string on facet selection', async () => {
      const { instance, wrapper } = await createMountedComponent(wrapperProps)
      await wrapper
        .find('.SRC-hand-cursor')
        .at(0)
        .simulate('click')
      expect(instance.props.menuConfig![0].facet).toBe('d')
      expect(window.location.search).toBe('?menuIndex=0&facet=d')
    })
  })

  it('passes down the correct unitDescription correctly', async () => {
    const { wrapper } = await createMountedComponent(props)
    const queryWrapper = wrapper.find(QueryWrapper).at(0)
    expect(queryWrapper.props().unitDescription).toEqual(
      'Computational Tools by A',
    )
  })
})

describe('it renders with search correctly configured ', () => {
  const SynapseClient = require('../../../lib/utils/SynapseClient')
  SynapseClient.getQueryTableResults = jest.fn(() => Promise.resolve(mockData))
  const sql: string = 'SELECT * FROM syn5604373'
  const genericCardSchema: GenericCardSchema = {
    type: 'PROGRAM',
    title: 'title',
    subTitle: 'subtitle',
    description: 'description',
    icon: 'icon',
    link: 'link',
    secondaryLabels: ['labelOne', 'labelTwo'],
  }
  const props: QueryWrapperMenuProps = {
    entityId: 'syn5604373',
    accordionConfig: [
      {
        name: 'Computational',
        menuConfig: [
          { sql, facet: 'a' },
          { sql, facet: 'b' },
          { sql, facet: 'c' },
        ],
        cardConfiguration: {
          type: SynapseConstants.GENERIC_CARD,
          genericCardSchema,
        },
        searchConfiguration: {
          searchable: [
            {
              columnName: 'a',
              hintText: 'hint',
            },
          ],
        },
      },
      {
        name: 'Experimental',
        menuConfig: [
          { sql, facet: 'd' },
          { sql, facet: 'e' },
        ],
        cardConfiguration: {
          type: SynapseConstants.GENERIC_CARD,
          genericCardSchema,
        },
        searchConfiguration: {
          searchable: [
            {
              columnName: 'd',
              hintText: 'hint',
            },
          ],
        },
      },
    ],
    rgbIndex: 3,
  }

  it('renders correctly and passes down the right unitDescription', async () => {
    const { wrapper } = await createMountedComponent(props)
    const queryWrapperWithSearch = wrapper.find(QueryWrapper).at(2)
    expect(queryWrapperWithSearch.props().unitDescription).toEqual(
      'Computational Tools',
    )
    // Search only makes sense with an unfaceted view, so there's additional logic to make sure only
    // in the case of search that facets are excluded in QueryWrapperMenu
    expect(queryWrapperWithSearch.find(Facets)).toHaveLength(0)
    expect(queryWrapperWithSearch.find(Search)).toHaveLength(1)
    expect(queryWrapperWithSearch.find(CardContainer)).toHaveLength(1)
  })
})

describe('Passing down props works correctly ', () => {
  describe('unit description is calculated correctly', () => {
    const getUnitDescription = QueryWrapperMenu.prototype.getUnitDescription
    it('works with accordiong that is not on a search tab ', () => {
      const aliasedFacet = 'MOCK_VALUE'
      const name = 'Computational'
      const unitDescription = getUnitDescription(
        '',
        aliasedFacet,
        false,
        true,
        name,
      )
      expect(unitDescription).toEqual(`${name} Tools by ${aliasedFacet}`)
    })
    it('works with accordion that is on a search tab', () => {
      const aliasedFacet = 'MOCK_VALUE'
      const name = 'Computational'
      const unitDescription = getUnitDescription(
        '',
        aliasedFacet,
        true,
        true,
        name,
      )
      expect(unitDescription).toEqual(`${name} Tools`)
    })
    it('works with only unit description', () => {
      const unitDescriptionValue = 'MOCKED_VALUE'
      const unitDescription = getUnitDescription(
        unitDescriptionValue,
        '',
        false,
        false,
        '',
      )
      expect(unitDescription).toEqual(unitDescriptionValue)
    })
  })

  describe('part mask is calculated correctly', () => {
    const getPartMask = QueryWrapperMenu.prototype.getPartMask
    const partMaskBase =
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
      SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS
    it('works with facet passed in', () => {
      const facet = 'MOCK_VALUE'
      const partMask = getPartMask(facet, false)
      const expectedPartMask =
        partMaskBase | SynapseConstants.BUNDLE_MASK_QUERY_FACETS
      expect(partMask).toEqual(expectedPartMask)
    })
    it('works without facet passed in', () => {
      const partMask = getPartMask('', false)
      const expectedPartMask =
        partMaskBase | SynapseConstants.BUNDLE_MASK_QUERY_COUNT
      expect(partMask).toEqual(expectedPartMask)
    })
    it('works with groupBy passedIn', () => {
      const partMask = getPartMask('', true)
      const expectedPartMask =
        partMaskBase | SynapseConstants.BUNDLE_MASK_QUERY_COUNT
      expect(partMask).toEqual(expectedPartMask)
    })
  })
  describe('selected facets is calculated correctly', () => {
    const getSelectedFacets = QueryWrapperMenu.prototype.getSelectedFacets
    it('it returns selected facets when passed a facet and facet value', () => {
      const facetValue = 'MOCK_FACET_VALUE'
      const facet = 'MOCK_FACET'
      const selectedFacets = getSelectedFacets(true, facet, facetValue)
      expect(selectedFacets).toHaveLength(1)
      expect(selectedFacets[0].facetValues[0]).toEqual(facetValue)
      expect(selectedFacets[0].columnName).toEqual(facet)
    })
    it('it returns an empty array without a facet value', () => {
      const facet = 'MOCK_FACET'
      const selectedFacets = getSelectedFacets(true, facet, undefined)
      expect(selectedFacets).toHaveLength(0)
    })
  })
  describe('table loading screen is calculated correctly', () => {
    const getTableLoadingScreen =
      QueryWrapperMenu.prototype.getTableLoadingScreen
    it('returns a loading screen ', () => {
      const hasGroupByInSql = true
      const loadingScreen = <div></div>
      const stackedBarChartConfiguration = {
        loadingScreen,
      } as StackedBarChartProps
      const tableConfiguration = {} as SynapseTableProps
      const tableLoadingScreen = getTableLoadingScreen(
        hasGroupByInSql,
        stackedBarChartConfiguration,
        tableConfiguration,
      )
      expect(tableLoadingScreen).toEqual(loadingScreen)
    })
    it('returns empty ', () => {
      const tableLoadingScreen = getTableLoadingScreen(
        false,
        undefined,
        undefined,
      )
      expect(tableLoadingScreen).toEqual(<></>)
    })
  })
})
