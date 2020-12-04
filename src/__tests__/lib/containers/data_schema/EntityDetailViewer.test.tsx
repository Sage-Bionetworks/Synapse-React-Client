import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'hooks-for-redux'
import EntityDetailViewer, {
  TEST_IDS,
} from 'lib/containers/data_schema/EntityDetailViewer'

const entity = {
  id: 'schema:Text',
  type: ['schema:DataType', 'rdfs:Class'],
  description: 'Data type: Text.',
  label: 'Text',
  parentIds: [],
  attribute: ``,
  numOfDependents: 3,
  required: false,
  requiredDependencies: [],
  validationRules: [],
  validValues: [],
  domainIncludes: [],
  requiresComponent: [],
  source: ``,
}

test('EntityDetailViewer renders correctly', () => {
  // EntityDetailViewer needs the redux store.
  const onClose = jest.fn()
  const { rerender } = render(
    <Provider>
      <EntityDetailViewer entity={entity} onClose={onClose} open={true} />
    </Provider>,
  )
  expect(screen.getByTestId(TEST_IDS.root)).toBeDefined()

  // Click the close button.
  // const closeButton = component.find(IconButton).find(`button.button-close`)
  // closeButton.simulate(`click`)
  // expect(onClose).toHaveBeenCalled()

  // Open is false
  rerender(
    <Provider>
      <EntityDetailViewer entity={entity} onClose={onClose} open={false} />
    </Provider>,
  )
  expect(screen.queryByTestId(TEST_IDS.root)).not.toBeInTheDocument()

  // No passed entity
  rerender(
    <Provider>
      <EntityDetailViewer entity={undefined} onClose={onClose} open={true} />
    </Provider>,
  )
  expect(screen.queryByTestId(TEST_IDS.root)).not.toBeInTheDocument()
})
