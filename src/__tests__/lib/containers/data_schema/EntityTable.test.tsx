import * as React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'hooks-for-redux'
import DataProvider from 'lib/containers/data_schema/DataProvider'
import EntityTable from 'lib/containers/data_schema/EntityTable'

describe('EntityTable ', () => {
  let idList = ['schema:Text']

  it('renders correctly', () => {
    // EntityDetailViewer needs the redux store.
    const component = shallow(
      <Provider>
        <DataProvider url={``} />
        <EntityTable list={idList} />
      </Provider>,
    )
    expect(component).toBeDefined()

    // Empty list of ids
    component.setProps({
      list: [],
    })
    expect(component).toBeDefined()

    // No list of ids
    component.setProps({
      list: undefined,
    })
    expect(component).toBeDefined()
  })
})
