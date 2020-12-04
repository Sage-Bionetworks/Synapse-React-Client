import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'hooks-for-redux'
import DataSchemaViewer from 'lib/containers/data_schema/DataSchemaViewer'
import DataProvider from 'lib/containers/data_schema/DataProvider'

const title: string = `test viewer`

test('DataSchemaViewer renders correctly', () => {
  // DataSchemaViewer needs the redux store.
  const { rerender } = render(
    <Provider>
      <DataProvider url={``} />
      <DataSchemaViewer title={title} />
    </Provider>,
  )
  expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(title)

  // Needs a passed title.
  rerender(
    <Provider>
      <DataProvider url={``} />
      <DataSchemaViewer title={``} />
    </Provider>,
  )
  expect(screen.queryByText(title)).not.toBeInTheDocument()
})
