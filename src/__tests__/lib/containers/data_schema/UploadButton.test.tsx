import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'hooks-for-redux'
import UploadButton, { TEST_IDS } from 'lib/containers/data_schema/UploadButton'

const schemaUrl = `https://raw.githubusercontent.com/Sage-Bionetworks/schematic/main/data/schema_org_schemas/example.jsonld`
const invalidUrl = `http:www.example.com/main.html`

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

test(`UploadButton takes a valid URL`, async () => {
  const { button } = setup()

  fireEvent.click(button)

  const modal = screen.getByTestId(TEST_IDS.modal)
  expect(modal).toBeInTheDocument()

  const submitButton = await waitFor(() => screen.findByText(`Submit`))
  expect(submitButton).toBeInTheDocument()
  expect(submitButton).toBeDisabled()

  const urlInput = screen.getByTestId(TEST_IDS.urlInput)
  expect(urlInput).toBeInTheDocument()

  fireEvent.change(urlInput, { target: { value: schemaUrl } })

  expect(submitButton).not.toBeDisabled()

  fireEvent.click(submitButton)
  expect(modal).not.toBeInTheDocument()
})

test(`UploadButton refuses an invalid URL`, async () => {
  const { button } = setup()

  fireEvent.click(button)

  const modal = screen.getByTestId(TEST_IDS.modal)
  expect(modal).toBeInTheDocument()

  const submitButton = await waitFor(() => screen.findByText(`Submit`))
  expect(submitButton).toBeInTheDocument()
  expect(submitButton).toBeDisabled()

  const urlInput = screen.getByTestId(TEST_IDS.urlInput)
  expect(urlInput).toBeInTheDocument()

  fireEvent.change(urlInput, { target: { value: invalidUrl } })

  expect(submitButton).toBeDisabled()

  fireEvent.click(submitButton)
  expect(modal).toBeInTheDocument()
})
