import * as React from 'react'
import { shallow } from 'enzyme'
import DataSchema from 'lib/containers/data_schema'

describe('DataSchema ', () => {
  let title: string = `test viewer`
  let url: string = ``

  it('renders correctly', () => {
    // No passed URL
    const component = shallow(<DataSchema title={title} url={url} />)
    expect(component).toBeDefined()

    // Pass a URL
    component.setProps({
      url: `https://raw.githubusercontent.com/Sage-Bionetworks/schematic/main/data/schema_org_schemas/example.jsonld`,
    })
    expect(component).toBeDefined()

    // Needs a passed title.
    component.setProps({
      title: undefined,
    })
    expect(component).toBeUndefined
  })
})
