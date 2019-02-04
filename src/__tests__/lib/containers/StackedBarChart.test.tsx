import * as React from 'react'
import { shallow, mount } from 'enzyme'
import StackedBarChart from '../../../lib/containers/StackedBarChart'
import { mockData, mockRequest } from '../../../mocks'

describe('it performs basic functionality', () => {
  it('renders without crashing', async () => {
    const tree = await shallow(
      <StackedBarChart
        data={mockData}
        // tslint:disable-next-line
        getLastQueryRequest={() => {return mockRequest}}
        loadingScreen={<div />}
        synapseId={''}
        unitDescription={''}
      />
    )
    expect(tree).toBeDefined()
  })

  it('renders using appropriate prop text substitutions', async () => {
    const tree = await mount(
      <StackedBarChart
        data={mockData}
        facetAliases={
        {
          name: 'Name'
        }
        }
        filter={'name'}
        isChecked={[]}
        // tslint:disable-next-line
        getLastQueryRequest={() => {return mockRequest}}
        loadingScreen={<div />}
        synapseId={''}
        unitDescription={'units'}
      />
    )
    expect(tree).toBeDefined()
    expect(tree.find('span.SRC-text-title.SRC-filter-display').text()).toEqual('Name')
    expect(tree.find('p.SRC-noMargin.SRC-padding-chart.SRC-text-chart').text()).toEqual('1 units')
  })
})
