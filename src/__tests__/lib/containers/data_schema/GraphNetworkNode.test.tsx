import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import GraphNetworkNode from 'lib/containers/data_schema/GraphNetworkNode'
import { VIEW_TYPES } from 'lib/containers/data_schema/constants'
import { GraphNodeData } from 'lib/containers/data_schema/types/IDataSchemaTypes'

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

const hiddenNode = { ...node, id: 'hiddenRoot', type: [] }
const hexagonNode = { ...node, type: ['rdf:Property'] }
const circleNode = { ...node, type: [] }
const nodeHasAttribute = { ...node, attribute: 'Test Attribute' }

function setup(node: GraphNodeData, nodeRadius: number) {
  return render(
    <svg>
      <GraphNetworkNode node={node} nodeRadius={nodeRadius} />
    </svg>,
  )
}

test('GraphNetworkNode renders rectangle correctly', () => {
  const { container } = setup(node, 30)
  const rect = container.querySelector('rect')
  expect(rect).toBeDefined()
})

test('GraphNetworkNode fires onNodeClick correctly', () => {
  const { container } = setup(node, 30)
  const rect = container.querySelector('rect')

  // Click the node label.
  fireEvent.click(rect as Element)
  expect(onNodeClick).toHaveBeenCalled()
})

test('GraphNetworkNode renders a circle with 0 radius', () => {
  const { container } = setup(hiddenNode, 30)
  const circle = container.querySelector('circle')

  expect(circle).toBeInTheDocument()
  expect(circle?.getAttribute('r')).toEqual('0')
})

test('GraphNetworkNode onNodeClick is undefined on hiddenRoot', () => {
  const { container } = setup(hiddenNode, 30)
  const g = container.querySelector('g')

  // Click the node label.
  expect(g?.getAttribute('onclick')).toBeNull()
})

test('GraphNetworkNode renders a circle with assigned radius', () => {
  const { container } = setup(circleNode, 30)
  const circle = container.querySelector('circle')

  expect(circle).toBeInTheDocument()
  expect(circle?.getAttribute('r')).toEqual('30')
})

test('GraphNetworkNode renders a hexagon', () => {
  const { container } = setup(hexagonNode, 30)
  const polygon = container.querySelector('polygon')

  expect(polygon).toBeInTheDocument()
})

test('GraphNetworkNode displays node label when attribute is empty', () => {
  const { container } = setup(circleNode, 30)
  const label = container.querySelector('.text-entity')

  expect(label).toBeInTheDocument()
  expect(label).toHaveTextContent(circleNode.label)
})

test('GraphNetworkNode displays node attribute over label', () => {
  const { container } = setup(nodeHasAttribute, 30)
  const label = container.querySelector('.text-entity')

  expect(label).toBeInTheDocument()
  expect(label).toHaveTextContent(nodeHasAttribute.attribute)
})
