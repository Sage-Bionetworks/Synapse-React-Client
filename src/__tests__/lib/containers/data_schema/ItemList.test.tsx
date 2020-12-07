import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'hooks-for-redux'
import ItemList, { TEST_IDS } from 'lib/containers/data_schema/ItemList'

test(`ItemList renders`, async () => {
  render(
    <Provider>
      <ItemList list={[`bing`, `bong`, `binger`]} parent={undefined} />
    </Provider>,
  )

  expect(screen.getByTestId(TEST_IDS.list)).toBeInTheDocument()
})
