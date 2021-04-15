import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'hooks-for-redux'
import DataSchemaViewer from 'lib/containers/data_schema/DataSchemaViewer'
import DataProvider from 'lib/containers/data_schema/DataProvider'
import { TEST_IDS as ViewTypeTestIds } from 'lib/containers/data_schema/ViewTypeChooser'

const title: string = `test viewer`

function setup(url: string, title: string) {
  // DataSchemaViewer needs the redux store.
  render(
    <Provider>
      <DataProvider url={url} />
      <DataSchemaViewer title={title} />
    </Provider>,
  )
}

test('DataSchemaViewer renders correctly with a passed title', async () => {
  setup(``, title)

  const heading = await waitFor(() => screen.getByRole('heading', { level: 2 }))
  expect(heading).toHaveTextContent(title)
})

test('DataSchemaViewer renders with no passed title', async () => {
  // Needs a passed title.
  setup(``, ``)

  const heading = await waitFor(() => screen.queryByText(title))
  expect(heading).not.toBeInTheDocument()
})

test('DataSchemaViewer renders after view type is changed', async () => {
  setup(``, title)

  const viewType = await waitFor(() =>
    screen.getByTestId(ViewTypeTestIds.select),
  )

  expect(viewType).toBeInTheDocument()

  fireEvent.change(viewType, { target: { value: 'parentIds' } })

  await sleep(500)

  const nodes = await waitFor(() => screen.getByText('Ontology Class'))

  expect(nodes).toBeInTheDocument()
})

function sleep(ms: number): Promise<NodeJS.Timeout> {
  return new Promise(resolve => setTimeout(resolve, ms))
}
