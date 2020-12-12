import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'hooks-for-redux'
import DataSchemaViewer from 'lib/containers/data_schema/DataSchemaViewer'
import DataProvider from 'lib/containers/data_schema/DataProvider'
import { TEST_IDS as ViewTypeTestIds } from 'lib/containers/data_schema/ViewTypeChooser'

const title: string = `test viewer`

test('DataSchemaViewer renders correctly', async () => {
  // DataSchemaViewer needs the redux store.
  const { rerender } = render(
    <Provider>
      <DataProvider url={``} />
      <DataSchemaViewer title={title} />
    </Provider>,
  )

  // Let the data populate in the store and re-render the component.
  await sleep(500)

  expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(title)

  // Needs a passed title.
  rerender(
    <Provider>
      <DataProvider url={``} />
      <DataSchemaViewer title={``} />
    </Provider>,
  )

  expect(screen.queryByText(title)).not.toBeInTheDocument()

  const viewType = screen.getByTestId(ViewTypeTestIds.select)
  expect(viewType).toBeInTheDocument()

  fireEvent.change(viewType, { target: { value: 'parentIds' } })

  await waitFor(() => screen.getByText('Ontology Class'))

  const nodes = screen.getByText('Ontology Class')
  expect(nodes).toBeInTheDocument()
})

function sleep(ms: number): Promise<NodeJS.Timeout> {
  return new Promise(resolve => setTimeout(resolve, ms))
}
