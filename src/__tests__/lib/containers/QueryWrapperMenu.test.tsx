import * as React from 'react'
import { shallow } from 'enzyme'
import QueryWrapperMenu from '../../../lib/containers/QueryWrapperMenu'
import QueryWrapper from '../../../lib/containers/QueryWrapper'

describe('it renders without crashing', () => {
  it('renders', () => {
    const tree = shallow(
        <QueryWrapperMenu
            // tslint:disable-next-line
            menuConfig={[
            { sql: 'SELECT * FROM TEST', facetName: 'test', synapseId: '123' }
            ]}
            token={'1'}
            rgbIndex={3}
        />
    )
    expect(tree).toBeDefined()
    expect(tree.find(QueryWrapper)).toHaveLength(1)
  })
})
