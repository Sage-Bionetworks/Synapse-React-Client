import * as React from 'react'
import { shallow } from 'enzyme'
import GraphNetworkLine from 'lib/containers/data-dictionary/GraphNetworkLine'
import { VIEW_TYPES } from 'lib/containers/data-dictionary/constants'

describe('GraphNetworkLine ', () => {
  let link = {
    viewType: VIEW_TYPES.REQUIRES_COMPONENT,
  }

  it('renders correctly', () => {
    // EntityDetailViewer needs the redux store.
    const component = shallow(<GraphNetworkLine link={link} />)
    expect(component).toBeDefined()
  })
})
