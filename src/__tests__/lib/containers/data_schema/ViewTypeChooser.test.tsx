import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'hooks-for-redux'
import ViewTypeChooser, {
  TEST_IDS,
} from 'lib/containers/data_schema/ViewTypeChooser'

test(`ViewTypeChooser renders`, async () => {
  render(
    <Provider>
      <ViewTypeChooser />
    </Provider>,
  )

  const label = screen.getByTestId(TEST_IDS.label)
  expect(label).toBeInTheDocument()
  expect(label).toHaveTextContent(`View Type`)

  expect(screen.getByTestId(TEST_IDS.select)).toBeInTheDocument()
})
