import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'hooks-for-redux'
import EntitySearch from 'lib/containers/data_schema/EntitySearch'

test(`EntitySearch renders`, () => {
  render(
    <Provider>
      <EntitySearch />
    </Provider>,
  )

  expect(screen.getByRole('button')).toHaveAttribute('disabled')
})

test(`EntitySearch has a text input`, () => {
  render(
    <Provider>
      <EntitySearch />
    </Provider>,
  )

  const input = screen.getByRole('combobox')
  expect(input).toBeInTheDocument()
})
