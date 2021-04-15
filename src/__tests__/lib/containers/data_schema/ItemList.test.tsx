import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'hooks-for-redux'
import ItemList, { TEST_IDS } from 'lib/containers/data_schema/ItemList'

function setup(list?: string[], parentId?: string) {
  return render(
    <Provider>
      <ItemList list={list} parent={parentId} />
    </Provider>,
  )
}

test(`ItemList renders`, () => {
  setup([`bing`, `bong`, `binger`])

  expect(screen.getByTestId(TEST_IDS.list)).toBeInTheDocument()
})

test(`ItemList doesn't render with empty list`, () => {
  const { queryByTestId } = setup([])

  expect(queryByTestId(TEST_IDS.list)).toBeNull()
})

test(`ItemList doesn't render with undefined empty`, () => {
  const { queryByTestId } = setup()

  expect(queryByTestId(TEST_IDS.list)).toBeNull()
})
