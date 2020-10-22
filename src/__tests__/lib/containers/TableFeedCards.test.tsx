import * as React from 'react'
import TableFeedCards, { TableFeedCardsProps } from '../../../lib/containers/TableFeedCards'
import { QueryResultBundle } from 'lib/utils/synapseTypes/'
import syn23519444Json from '../../../mocks/syn23519444.json'
import { act } from 'react-dom/test-utils'
import { render, fireEvent } from '@testing-library/react'

const SynapseClient = require('../../../lib/utils/SynapseClient')
const data = syn23519444Json as QueryResultBundle
const token: string = '123444'

function createTestProps(
  overrides?: Partial<TableFeedCardsProps>,
): TableFeedCardsProps {
  return {
    tableEntityId: '',
    token: token,
    ...overrides,
  }
}

let container: HTMLElement
let props: TableFeedCardsProps

function init(overrides?: Partial<TableFeedCardsProps>) {
  props = createTestProps(overrides)
  container = render(<TableFeedCards tableEntityId='syn23519444' token={token} />).container
}

describe('basic tests', () => {
  beforeEach(() => {
    SynapseClient.getQueryTableResults = jest.fn(() =>
      Promise.resolve(data),
    )
  })

  it('displays news cards from a Synapse Table', async () => {
    await act(
      async () =>
        await init({
        }),
    )
    expect(container.querySelector('.FeedItem')).toBeDefined()
    expect(container.querySelectorAll('.FeedItem')).toHaveLength(3)

    // verify and click the View More button
    expect(container.querySelector('.FeedViewAllNewsButtonContainer>button')).toBeDefined()
    const viewMoreButton = container.querySelector<HTMLInputElement>('.FeedViewAllNewsButtonContainer>button')
    fireEvent.click(viewMoreButton!)
    // after clicking more we should now be showing all items (4)
    expect(container.querySelectorAll('.FeedItem')).toHaveLength(4)
  })
})
