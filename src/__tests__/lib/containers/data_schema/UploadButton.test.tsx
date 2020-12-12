import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'hooks-for-redux'
import UploadButton, { TEST_IDS } from 'lib/containers/data_schema/UploadButton'

function setup() {
  const utils = render(
    <Provider>
      <UploadButton />
    </Provider>,
  )
  const button = screen.getByTestId(TEST_IDS.button)
  return { button, ...utils }
}

test(`UploadButton renders`, () => {
  const { button } = setup()

  expect(button).toBeInTheDocument()
})

test(`Clicking UploadButton opens the upload modal`, () => {
  const { button } = setup()

  fireEvent.click(button)

  expect(screen.getByTestId(TEST_IDS.modal)).toBeInTheDocument()
})
