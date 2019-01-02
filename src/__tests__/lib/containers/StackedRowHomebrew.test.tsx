import * as React from 'react'
import { shallow } from 'enzyme'
import StackedRowHomebrew from '../../../lib/containers/StackedRowHomebrew'
import { mockData, mockRequest } from '../../../mocks'

describe('it renders a chart without crashing', () => {
  it('renders a chart', async () => {
    const tree = await shallow(
      <StackedRowHomebrew
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
