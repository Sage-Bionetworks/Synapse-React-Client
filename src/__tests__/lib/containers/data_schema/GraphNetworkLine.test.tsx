import React from 'react'
import { shallow } from 'enzyme'
import GraphNetworkLine from 'lib/containers/data_schema/GraphNetworkLine'
import { VIEW_TYPES } from 'lib/containers/data_schema/constants'

describe('GraphNetworkLine ', () => {
  const link = {
    source: `hiddenRoot`,
    linkColor: `blue`,
    target: `childId`,
    viewType: VIEW_TYPES.REQUIRES_COMPONENT,
  }

  it('renders correctly', () => {
    // EntityDetailViewer needs the redux store.
    const component = shallow(<GraphNetworkLine link={link} />)
    expect(component).toBeDefined()
  })
})
