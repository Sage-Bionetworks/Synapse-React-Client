import * as React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'hooks-for-redux'
import DataDictionaryViewer from 'lib/containers/data-dictionary/DataDictionaryViewer'
import DataProvider from 'lib/containers/data-dictionary/DataProvider'

describe('DataDictionaryViewer ', () => {
  let title: string = `test viewer`

  it('renders correctly', () => {
    // DataDictionaryViewer needs the redux store.
    const component = shallow(
      <Provider>
        <DataProvider url={``} />
        <DataDictionaryViewer title={title} />
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
