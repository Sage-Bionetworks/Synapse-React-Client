import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'hooks-for-redux'
import DataProvider from 'lib/containers/data_schema/DataProvider'
import EntitySearch from 'lib/containers/data_schema/EntitySearch'

function setup() {
  const utils = render(
    <Provider>
      <DataProvider url={``} />
      <EntitySearch />
    </Provider>,
  )
  const input = screen.getByPlaceholderText(`Search for entity`)
  const button = utils.container.querySelector(
    `button[aria-label="Search for entity"]`,
  )
  return {
    button,
    input,
    ...utils,
  }
}

test(`EntitySearch renders`, () => {
  const { button, input } = setup()

  expect(button).toBeInTheDocument()
  expect(button).toBeDisabled()
  expect(input).toBeInTheDocument()
})
