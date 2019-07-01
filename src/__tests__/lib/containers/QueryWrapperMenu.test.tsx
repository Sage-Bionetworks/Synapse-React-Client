import * as React from 'react'
import { shallow } from 'enzyme'
import { mockData }   from '../../../mocks'
import QueryWrapperMenu, { QueryWrapperMenuProps } from '../../../lib/containers/QueryWrapperMenu'
import QueryWrapper from '../../../lib/containers/QueryWrapper'
import StackedBarChart from '../../../lib/containers/StackedBarChart'
import { Facets } from '../../../lib/containers/Facets'
import CardContainer from '../../../lib/containers/CardContainer'
import SynapseTable from '../../../lib/containers/SynapseTable'
import { SynapseConstants } from '../../../lib/'

const createShallowComponent = (props: QueryWrapperMenuProps, disableLifecycleMethods: boolean = false) => {
  const wrapper = shallow(
    <QueryWrapperMenu
      {...props}
    />,
    { disableLifecycleMethods }
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
    rgbIndex: 3
  }

  it('renders without crashing', () => {
    const wrapper = createShallowComponent(props, true)
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
      showBarChart: false,
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
      }
    }
    const { wrapper } = await createShallowComponent(propsWithType)

    expect(wrapper).toBeDefined()
    expect(wrapper.find(QueryWrapper)).toHaveLength(1)
    expect(wrapper.find(StackedBarChart)).toHaveLength(1)
    expect(wrapper.find(CardContainer)).toHaveLength(1)
    expect(wrapper.find(Facets)).toHaveLength(1)
  })
})
