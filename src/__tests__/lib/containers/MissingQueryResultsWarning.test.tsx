import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import MissingQueryResultsWarning from '../../../lib/containers/MissingQueryResultsWarning'
import { createWrapper } from '../../../lib/testutils/TestingLibraryUtils'
import { EntityRef, Table } from '../../../lib/utils/synapseTypes'
import mockDatasetEntityData from '../../../mocks/entity/mockDataset'
import { getHandlersForTableQuery } from '../../../mocks/msw/handlers/tableQueryHandlers'
import { server } from '../../../mocks/msw/server'

const mockDatasetEntity = mockDatasetEntityData.entity

function renderComponent<T extends Table>(entity: T) {
  render(<MissingQueryResultsWarning entity={entity} />, {
    wrapper: createWrapper(),
  })
}

const allDatasetItems: EntityRef[] = [
  { entityId: 'syn123', versionNumber: 5 },
  { entityId: 'syn456', versionNumber: 1 },
  { entityId: 'syn789', versionNumber: 2 },
]

describe('MissingQueryResultsWarning tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('shows no warning when total results is equal to total visible results', () => {
    const numberOfVisibleResults = allDatasetItems.length
    server.use(
      ...getHandlersForTableQuery({
        concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
        queryCount: numberOfVisibleResults,
      }),
    )

    renderComponent({ ...mockDatasetEntity, items: allDatasetItems })

    expect(screen.queryByText('Unavailable')).not.toBeInTheDocument()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
  it('shows warning when total results is greater than total visible results on the current version', async () => {
    const numberOfVisibleResults = allDatasetItems.length - 1
    server.use(
      ...getHandlersForTableQuery({
        concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
        queryCount: numberOfVisibleResults,
      }),
    )

    renderComponent({
      ...mockDatasetEntity,
      isLatestVersion: true,
      items: allDatasetItems,
    })

    await screen.findByText('1 Unavailable')
    const helpButton = await screen.findByRole('button')

    userEvent.click(helpButton)
    await screen.findByText(
      'Files may be unavailable because you do not have permission to see them, they have been deleted, or the Dataset has been misconfigured.',
    )
  })
  it('shows warning when total results is greater than total visible results on a snapshot', async () => {
    const numberOfVisibleResults = allDatasetItems.length - 2
    server.use(
      ...getHandlersForTableQuery({
        concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
        queryCount: numberOfVisibleResults,
      }),
    )

    renderComponent({
      ...mockDatasetEntity,
      isLatestVersion: false,
      items: allDatasetItems,
    })

    await screen.findByText('2 Unavailable')
    const helpButton = await screen.findByRole('button')

    userEvent.click(helpButton)
    // Help text does not indicate that files were deleted, because the deleted file would have been captured in the snapshot
    await screen.findByText(
      'Files may be unavailable because you do not have permission to see them or the Dataset was misconfigured.',
    )
  })
})
