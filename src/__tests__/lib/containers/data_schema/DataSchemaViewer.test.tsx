import * as React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'hooks-for-redux'
import DataSchemaViewer from 'lib/containers/data_schema/DataSchemaViewer'
import DataProvider from 'lib/containers/data_schema/DataProvider'

describe('DataSchemaViewer ', () => {
  let title: string = `test viewer`

  it('renders correctly', () => {
    // DataSchemaViewer needs the redux store.
    const component = shallow(
      <Provider>
        <DataProvider url={``} />
        <DataSchemaViewer title={title} />
      </Provider>,
    )
    expect(component).toBeDefined()

    // Needs a passed title.
    component.setProps({
      title: undefined,
    })
    expect(component).toBeUndefined
  })
})
