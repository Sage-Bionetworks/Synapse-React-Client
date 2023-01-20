import React from 'react'
import { formatDate } from '../../../utils/functions/DateFormatter'
import dayjs from 'dayjs'
import { render, screen } from '@testing-library/react'
import {
  CreatedByModifiedBy,
  CreatedByModifiedByProps,
} from './CreatedByModifiedBy'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import { server } from '../../../../mocks/msw/server'
import mockFileEntity from '../../../../mocks/entity/mockFileEntity'
import {
  mockUserProfileData,
  mockUserProfileData2,
} from '../../../../mocks/user/mock_user_profile'
import { mockTableEntity } from '../../../../mocks/entity/mockTableEntity'
import { getHandlersForTableQuery } from '../../../../mocks/msw/handlers/tableQueryHandlers'
import { mockDatasetEntity } from '../../../../mocks/entity/mockDataset'

function renderComponent(props: CreatedByModifiedByProps) {
  return render(<CreatedByModifiedBy {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('CreatedByModifiedBy tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Shows created on/by, modified on/by for a file', async () => {
    renderComponent({ entityId: mockFileEntity.id })

    // Created by
    await screen.findByText('File created by', { exact: false })
    await screen.findByText(`@${mockUserProfileData.userName}`, {
      exact: false,
    })
    await screen.findByText(
      `on ${formatDate(dayjs(mockFileEntity.entity.createdOn))}`,
      { exact: false },
    )
    expect(
      screen.queryByLabelText('This is the user who created this File', {
        exact: false,
      }),
    ).not.toBeInTheDocument()

    // Modified by
    await screen.findByText('File last modified by', { exact: false })
    await screen.findByText(`@${mockUserProfileData2.userName}`, {
      exact: false,
    })
    await screen.findByText(
      `on ${formatDate(dayjs(mockFileEntity.entity.modifiedOn))}`,
      { exact: false },
    )
    // Should not have an info tooltip (only for tables)
    expect(
      screen.queryByLabelText('This is when the configuration', {
        exact: false,
      }),
    ).not.toBeInTheDocument()

    // Should not have a "last rebuilt on" section (only for tables)
    expect(
      screen.queryByText(`last rebuilt on`, { exact: false }),
    ).not.toBeInTheDocument()
  })
  it('Shows created on/by, modified on/by, last updated for a table', async () => {
    const lastUpdatedOn = '2023-01-01T00:00:00.000Z'
    server.use(
      ...getHandlersForTableQuery({
        concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
        entityId: mockTableEntity.id,
        lastUpdatedOn: lastUpdatedOn,
      }),
    )

    renderComponent({ entityId: mockTableEntity.id! })

    // Created by
    await screen.findByText('Table created by', { exact: false })
    await screen.findByText(`@${mockUserProfileData.userName}`, {
      exact: false,
    })
    await screen.findByText(
      `on ${formatDate(dayjs(mockTableEntity.createdOn))}`,
      { exact: false },
    )
    expect(
      screen.queryByLabelText('This is the user who created this Table', {
        exact: false,
      }),
    ).not.toBeInTheDocument()

    // Modified by
    await screen.findByText('Configuration last modified by', { exact: false })
    await screen.findByText(`@${mockUserProfileData2.userName}`, {
      exact: false,
    })
    await screen.findByText(
      `on ${formatDate(dayjs(mockTableEntity.modifiedOn))}`,
      { exact: false },
    )
    await screen.findByLabelText(
      'This is when the configuration of this Table was last changed',
      { exact: false },
    )

    // Last updated/rebuilt
    await screen.findByText(`Table last rebuilt on`, { exact: false })
    await screen.findByText(`${formatDate(dayjs(lastUpdatedOn))}`, {
      exact: false,
    })
    await screen.findByLabelText(
      'When data changes, the Table is rebuilt to reflect those changes',
      { exact: false },
    )
  })
  it('Shows additional created by help for a dataset', async () => {
    const lastUpdatedOn = '2023-01-01T00:00:00.000Z'
    server.use(
      ...getHandlersForTableQuery({
        concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
        entityId: mockDatasetEntity.id,
        lastUpdatedOn: lastUpdatedOn,
      }),
    )

    renderComponent({ entityId: mockDatasetEntity.id! })

    // Created by
    await screen.findByText('Dataset created by', { exact: false })
    await screen.findByText(`@${mockUserProfileData.userName}`, {
      exact: false,
    })
    await screen.findByText(
      `on ${formatDate(dayjs(mockDatasetEntity.createdOn))}`,
      { exact: false },
    )
    // Show an additional info tip for datasets to clarify that the creator did not necessarily create the referenced files.
    await screen.findByLabelText('This is the user who created this Dataset', {
      exact: false,
    })

    // Modified by
    await screen.findByText('Configuration last modified by', { exact: false })
    await screen.findByText(`@${mockUserProfileData2.userName}`, {
      exact: false,
    })
    await screen.findByText(
      `on ${formatDate(dayjs(mockDatasetEntity.modifiedOn))}`,
      { exact: false },
    )
    await screen.findByLabelText(
      'This is when the configuration of this Dataset was last changed',
      { exact: false },
    )

    // Last updated/rebuilt
    await screen.findByText(`Dataset last rebuilt on`, { exact: false })
    await screen.findByText(`${formatDate(dayjs(lastUpdatedOn))}`, {
      exact: false,
    })
    await screen.findByLabelText(
      'When data changes, the Dataset is rebuilt to reflect those changes',
      { exact: false },
    )
  })
})
