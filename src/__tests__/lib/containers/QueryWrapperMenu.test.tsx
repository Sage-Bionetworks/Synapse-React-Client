import * as React from 'react'
import { shallow, mount } from 'enzyme'
import { mockData }   from '../../../mocks/'
import QueryWrapperMenu, { QueryWrapperMenuProps } from '../../../lib/containers/QueryWrapperMenu'
import QueryWrapper from '../../../lib/containers/QueryWrapper'
import StackedBarChart from '../../../lib/containers/StackedBarChart'
import { Facets } from '../../../lib/containers/Facets'
import CardContainer from '../../../lib/containers/CardContainer'
import SynapseTable from '../../../lib/containers/SynapseTable'
import { SynapseConstants } from '../../../lib/'

const createShallowComponent = (props: QueryWrapperMenuProps) => {
  const wrapper = shallow(
    <QueryWrapperMenu
      {...props}
    />
  )
  return wrapper
}

const createMountedComponent = async (props: QueryWrapperMenuProps) => {
  const wrapper = await mount(
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
  const props = {
    token,
    menuConfig: [{ sql, facetName, synapseId }],
    rgbIndex: 3
  }

  it('renders without crashing', () => {
    const wrapper = createShallowComponent(props)
    expect(wrapper).toBeDefined()
  })

  it('renders a bar chart, table, and facets', async () => {
    const propsWithTitle = {
      token,
      rgbIndex: 3,
      menuConfig: [{ sql, facetName, synapseId, title: 'title' }]
    }
    const { wrapper } = await createMountedComponent(propsWithTitle)
    expect(wrapper).toBeDefined()
    expect(wrapper.find(QueryWrapper)).toHaveLength(1)
    expect(wrapper.find(StackedBarChart)).toHaveLength(1)
    expect(wrapper.find(Facets)).toHaveLength(1)
    expect(wrapper.find(SynapseTable)).toHaveLength(1)
  })

  it('renders a bar chart, cards, and facets', async () => {
    const propsWithType = {
      ...props,
      type: SynapseConstants.STUDY
    }
    const { wrapper } = await createMountedComponent(propsWithType)

    expect(wrapper).toBeDefined()
    expect(wrapper.find(QueryWrapper)).toHaveLength(1)
    expect(wrapper.find(StackedBarChart)).toHaveLength(1)
    expect(wrapper.find(CardContainer)).toHaveLength(1)
    expect(wrapper.find(Facets)).toHaveLength(1)
  })
})
