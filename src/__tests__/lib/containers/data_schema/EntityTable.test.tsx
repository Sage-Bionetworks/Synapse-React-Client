import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'hooks-for-redux'
import DataProvider from 'lib/containers/data_schema/DataProvider'
import EntityTable from 'lib/containers/data_schema/EntityTable'

const idList = ['schema:Text']

function setup(idList: string[]) {
  // EntityDetailViewer needs the redux store.
  return render(
    <Provider>
      <DataProvider url={``} />
      <EntityTable list={idList} />
    </Provider>,
  )
}

test('EntityTable renders correctly', async () => {
  const { container } = setup(idList)
  // Let the data populate in the store and re-render the component.
  await sleep(500)
  const table = container.querySelector('table')

  expect(table).toBeDefined()
})

test('EntityTable does not render', async () => {
  const { container } = setup([])
  await sleep(500)
  const table = container.querySelector('table')
  expect(table).toBeNull()
})

function sleep(ms: number): Promise<NodeJS.Timeout> {
  return new Promise(resolve => setTimeout(resolve, ms))
}
