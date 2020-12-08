import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import UploadButton, { TEST_IDS } from 'lib/containers/data_schema/UploadButton'

test(`UploadButton renders`, async () => {
  render(<UploadButton />)

  const button = screen.getByTestId(TEST_IDS.button)
  expect(button).toBeInTheDocument()

  fireEvent.click(button)
  expect(screen.getByTestId(TEST_IDS.modal)).toBeInTheDocument()
})
