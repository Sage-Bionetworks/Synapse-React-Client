import * as React from 'react'
import { mount } from 'enzyme'
import { mockData }   from '../../../mocks'
import QueryWrapperMenu, { QueryWrapperMenuProps, ACCORDION_GROUP_CSS, ACCORDION_GROUP_ACTIVE_CSS, MENU_DROPDOWN_CSS } from '../../../lib/containers/QueryWrapperMenu'
import QueryWrapper from '../../../lib/containers/QueryWrapper'
import StackedBarChart from '../../../lib/containers/StackedBarChart'
import { Facets } from '../../../lib/containers/Facets'
import CardContainer from '../../../lib/containers/CardContainer'
import SynapseTable from '../../../lib/containers/SynapseTable'
import { SynapseConstants } from '../../../lib/'

const createShallowComponent = (props: QueryWrapperMenuProps) => {
  const wrapper = mount(
    <QueryWrapperMenu
      {...props}
    />
  )
  const instance = wrapper.instance() as QueryWrapperMenu
  return { wrapper, instance }
}

describe('it renders with basic functionality', () => {
  const SynapseClient = require('../../../lib/utils/SynapseClient')
  SynapseClient.getQueryTableResults = jest.fn(() => Promise.resolve(mockData))
  const sql: string = 'SELECT * FROM syn5604373'
  const facet : string = 'name'
  const synapseId : string = 'syn5604373'
  const token: string = ''
  const name = 'Studies'
  const props: QueryWrapperMenuProps = {
    token,
    name,
    menuConfig: [{ sql, facet }],
    rgbIndex: 3,
    stackedBarChartConfiguration: {
      loadingScreen: <div/>
    }
  }

  it('renders without crashing', () => {
    const wrapper = createShallowComponent(props)
    expect(wrapper).toBeDefined()
  })

  it('renders a bar chart, table, and facets', async () => {
    const propsWithTitle: QueryWrapperMenuProps = {
      token,
      name,
      rgbIndex: 3,
      tableConfiguration: {
        synapseId,
        title: 'title'
      },
      stackedBarChartConfiguration: {
        loadingScreen: <div/>
      },
      menuConfig: [{ sql, facet }]
    }
    const { wrapper } = await createShallowComponent(propsWithTitle)
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
      cardConfiguration: {
        type: SynapseConstants.STUDY
      },
      menuConfig: [{ sql, facet }]
    }
    const { wrapper } = await createShallowComponent(propsWithTitle)
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
        type: SynapseConstants.STUDY
      },
      stackedBarChartConfiguration: {
        loadingScreen: <div/>
      },
    }
    const { wrapper } = await createShallowComponent(propsWithType)

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
  const props: QueryWrapperMenuProps = {
    accordionConfig: [
      {
        name: 'Computational',
        menuConfig: [{ sql, facet: 'a' }, { sql, facet: 'b' }, { sql, facet: 'c' }],
        stackedBarChartConfiguration: {
          loadingScreen: <div/>
        }
      },
      {
        name: 'Experimental',
        menuConfig: [{ sql, facet: 'd' }, { sql, facet: 'e' }],
        stackedBarChartConfiguration: {
          loadingScreen: <div/>
        }
      } 
    ],
    rgbIndex: 3,
  }

  it('renders without crashing', () => {
    const wrapper = createShallowComponent(props)
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
    const { wrapper } = await createShallowComponent(props)
    // check there are two accordion groups
    expect(wrapper.find(ACCORDION_GROUP_CSS_SELECTOR)).toHaveLength(2)
    // only one accordion should be selected
    expect(wrapper.find(ACCORDION_GROUP_ACTIVE_CSS_SELECTOR)).toHaveLength(1)
    // check first option under the first group index is selected
    expect(wrapper.find(ACCORDION_GROUP_ACTIVE_CSS_SELECTOR).childAt(1).find('.SRC-pointed-triangle-right')).toHaveLength(1)
  })

  it('makes selections and maintains state ', async () => {
    const { wrapper } = await createShallowComponent(props)
    const childOne = 0
    const childTwo = 1
    // Click the first accordion key's third menu-item
    await wrapper.find(ACCORDION_GROUP_MENU_SELECTOR).childAt(2).simulate('click')
    // click the second accordion key open
    await wrapper.find(ACCORDION_GROUP_CSS_SELECTOR).at(childTwo).simulate('click')
    // check the first accordion key's menu is closed && second accordion key's menu is active with first child selected
    expect(wrapper.find(MENU_DROPDOWN_CSS_SELECTOR).childAt(childOne).hasClass(ACCORDION_GROUP_ACTIVE_CSS)).toBeFalsy()
    expect(wrapper.find(MENU_DROPDOWN_CSS_SELECTOR).childAt(childTwo).hasClass(ACCORDION_GROUP_ACTIVE_CSS)).toBeTruthy()
    expect(wrapper.find(ACCORDION_GROUP_MENU_SELECTOR).childAt(0).hasClass('SRC-pointed-triangle-right')).toBeTruthy()
    // click the first top accordion key back open again and see the third item is still clicked
    await wrapper.find(ACCORDION_GROUP_CSS_SELECTOR).at(childOne).simulate('click')
    // verify second item is still selected from first click
    expect(wrapper.find(MENU_DROPDOWN_CSS_SELECTOR).childAt(childOne).hasClass(ACCORDION_GROUP_ACTIVE_CSS)).toBeTruthy()
    expect(wrapper.find(MENU_DROPDOWN_CSS_SELECTOR).childAt(childTwo).hasClass(ACCORDION_GROUP_ACTIVE_CSS)).toBeFalsy()
    expect(wrapper.find(ACCORDION_GROUP_MENU_SELECTOR).childAt(2).hasClass('SRC-pointed-triangle-right')).toBeTruthy()
  })

})
