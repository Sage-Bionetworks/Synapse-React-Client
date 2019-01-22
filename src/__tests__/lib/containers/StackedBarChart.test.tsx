import * as React from 'react'
import { shallow } from 'enzyme'
import StackedBarChart from '../../../lib/containers/StackedBarChart'
import { mockData, mockRequest } from '../../../mocks'

describe('it renders a chart without crashing', () => {
  it('renders a chart', async () => {
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
})
