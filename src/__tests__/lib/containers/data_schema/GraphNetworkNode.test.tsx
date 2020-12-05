import * as React from 'react'
import { shallow } from 'enzyme'
import GraphNetworkNode from 'lib/containers/data_schema/GraphNetworkNode'
import { VIEW_TYPES } from 'lib/containers/data_schema/constants'

const onNodeClick = jest.fn()
const node = {
  id: 'schema:Text',
  type: ['schema:DataType', 'rdfs:Class'],
  description: 'Data type: Text.',
  label: 'Text',
  parentIds: [],
  attribute: ``,
  nodeColor: `red`,
  numOfDependents: 3,
  onNodeClick,
  required: false,
  requiredDependencies: [],
  validationRules: [],
  validValues: [],
  domainIncludes: [],
  requiresComponent: [],
  source: ``,
  viewType: VIEW_TYPES.REQUIRES_COMPONENT,
}

test('GraphNetworkNode renders correctly', () => {
  // EntityDetailViewer needs the redux store.
  const component = shallow(<GraphNetworkNode node={node} />)
  expect(component).toBeDefined()

  // Click the close button.
  const circle = component.find(`circle`)
  circle.simulate(`click`)
  expect(onNodeClick).toHaveBeenCalled()
})
