import React from 'react'
import { shallow } from 'enzyme'
import DataSchema from 'lib/containers/data_schema'

const title: string = `test viewer`
const url: string = `https://raw.githubusercontent.com/Sage-Bionetworks/schematic/main/data/schema_org_schemas/example.jsonld`

test('DataSchema renders correctly', () => {
  // No passed URL
  const component = shallow(<DataSchema title={title} url={``} />)
  expect(component).toBeDefined()

  // Pass a URL
  component.setProps({ url })
  expect(component).toBeDefined()

  // Needs a passed title.
  component.setProps({ title: undefined })
  expect(component).toBeDefined()
})
