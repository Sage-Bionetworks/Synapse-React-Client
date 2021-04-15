import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'hooks-for-redux'
import { SECONDARY_ENTITY } from 'lib/containers/data_schema/constants'
import DataProvider from 'lib/containers/data_schema/DataProvider'
import IdLink, { TEST_IDS } from 'lib/containers/data_schema/IdLink'

test(`IdLink renders with no data from the store`, async () => {
  render(
    <Provider>
      <IdLink id={SECONDARY_ENTITY} isParent={false} />
    </Provider>,
  )

  expect(screen.getByTestId(TEST_IDS.noLink)).toHaveTextContent(
    SECONDARY_ENTITY,
  )
})

test(`IdLink renders with data from the store`, async () => {
  render(
    <Provider>
      <DataProvider url={``} />
      <IdLink id={SECONDARY_ENTITY} isParent={false} />
    </Provider>,
  )

  // Let the data populate in the store and re-render the component.
  await sleep(500)

  expect(screen.getByTestId(TEST_IDS.link)).toHaveAttribute(
    `title`,
    `View details of ${SECONDARY_ENTITY}`,
  )
})

function sleep(ms: number): Promise<NodeJS.Timeout> {
  return new Promise(resolve => setTimeout(resolve, ms))
}
