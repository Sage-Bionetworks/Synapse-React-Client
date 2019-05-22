import * as React from 'react'
import { shallow } from 'enzyme'
import Login from '../../../lib/containers/Login'

describe('test ', () => {
  it('renders correctly', () => {
    const tree = shallow(
      <Login
        icon={true}
        token={'1'}
        theme={'dark'}
      />)
    expect(tree).toBeDefined()
  })
})
