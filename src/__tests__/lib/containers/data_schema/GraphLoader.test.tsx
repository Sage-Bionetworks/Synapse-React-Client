import React from 'react'
import { render, screen } from '@testing-library/react'
import GraphLoader from 'lib/containers/data_schema/GraphLoader'
import { VIEW_TYPES } from 'lib/containers/data_schema/constants'

const onNodeClick = jest.fn()
const nodes = [
  {
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
  },
  {
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
  },
]

const singleNode = nodes[0]

test('GraphLoader loads and displays numer of nodes', async () => {
  render(<GraphLoader nodes={nodes} />)

  expect(screen.getByAltText('Sage Bionetworks logo')).toBeDefined()
  expect(screen.getByText(`Generating 1 nodes, please wait...`)).toBeDefined()
})

test('GraphLoader loads and displays text', async () => {
  render(<GraphLoader nodes={[singleNode]} />)

  expect(screen.getByAltText('Sage Bionetworks logo')).toBeDefined()
  expect(screen.getByText(`Generating chart, please wait...`)).toBeDefined()
})
