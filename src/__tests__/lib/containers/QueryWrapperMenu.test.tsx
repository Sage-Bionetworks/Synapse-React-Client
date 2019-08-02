import * as React from 'react'
import { mount } from 'enzyme'
import { mockData }   from '../../../mocks'
import QueryWrapperMenu, { QueryWrapperMenuProps, GROUP_INDEX_CSS, GROUP_INDEX_SELECTED_CSS } from '../../../lib/containers/QueryWrapperMenu'
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
  const facetName : string = 'name'
  const synapseId : string = 'syn5604373'
  const token: string = ''
  const name = 'Studies'
  const props: QueryWrapperMenuProps = {
    token,
    name,
    menuConfig: [{ sql, facetName }],
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
      menuConfig: [{ sql, facetName }]
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
      menuConfig: [{ sql, facetName }]
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
        menuConfig: [{ sql, facetName: 'a' }, { sql, facetName: 'b' }, { sql, facetName: 'c' }],
        stackedBarChartConfiguration: {
          loadingScreen: <div/>
        }
      },
      {
        name: 'Experimental',
        menuConfig: [{ sql, facetName: 'd' }, { sql, facetName: 'e' }],
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

  const accordionKeySelector = `.${GROUP_INDEX_CSS}`
  const activeGroupSelector = `.${GROUP_INDEX_SELECTED_CSS}`
  const menuDropdownSelector = '.SRC-menuLayout'
  const selectedMenuItem  = 'SRC-pointed-triangle-right'

  it('renders with the first top level key rendered initially', async () => {
    const { wrapper } = await createShallowComponent(props)
    expect(wrapper.find(accordionKeySelector)).toHaveLength(2)
    expect(wrapper.find(activeGroupSelector)).toHaveLength(1)
    // check first option under group index is selected
    expect(wrapper.find(activeGroupSelector).childAt(1).find('.SRC-pointed-triangle-right')).toHaveLength(1)
  })

  it('performs: select first accoridon key menu item one, selector 2nd accordion key, select third item, and then remebers the state of those ', async () => {
    const { wrapper } = await createShallowComponent(props)
    const childOne = 0
    const childTwo = 1
    // Click the first accordion key's third menu-item
    await wrapper.find(`${activeGroupSelector} .SRC-accordion-menu`).childAt(2).simulate('click')
    // click the second accordion key open           
    await wrapper.find(accordionKeySelector).at(childTwo).simulate('click')
    // check the first key is closed and second is open with its first child also open
    expect(wrapper.find(menuDropdownSelector).childAt(childOne).hasClass(GROUP_INDEX_SELECTED_CSS)).toBeFalsy()
    expect(wrapper.find(menuDropdownSelector).childAt(childTwo).hasClass(GROUP_INDEX_SELECTED_CSS)).toBeTruthy()
    expect(wrapper.find(`${activeGroupSelector} .SRC-accordion-menu`).childAt(0).hasClass(selectedMenuItem)).toBeTruthy()
    await wrapper.find(`${activeGroupSelector} .SRC-accordion-menu`).childAt(1).simulate('click')
    // click the first top accordion key
    await wrapper.find(accordionKeySelector).at(childOne).simulate('click')
    // verify second item is selected from first click
    expect(wrapper.find(menuDropdownSelector).childAt(childOne).hasClass(GROUP_INDEX_SELECTED_CSS)).toBeTruthy()
    expect(wrapper.find(menuDropdownSelector).childAt(childTwo).hasClass(GROUP_INDEX_SELECTED_CSS)).toBeFalsy()
    expect(wrapper.find(`${activeGroupSelector} .SRC-accordion-menu`).childAt(2).hasClass(selectedMenuItem)).toBeTruthy()
    // click the second top accordion key
    await wrapper.find(accordionKeySelector).at(childTwo).simulate('click')
    expect(wrapper.find(menuDropdownSelector).childAt(childOne).hasClass(GROUP_INDEX_SELECTED_CSS)).toBeFalsy()
    expect(wrapper.find(menuDropdownSelector).childAt(childTwo).hasClass(GROUP_INDEX_SELECTED_CSS)).toBeTruthy()
    expect(wrapper.find(`${activeGroupSelector} .SRC-accordion-menu`).childAt(1).hasClass(selectedMenuItem)).toBeTruthy()
  })

})
