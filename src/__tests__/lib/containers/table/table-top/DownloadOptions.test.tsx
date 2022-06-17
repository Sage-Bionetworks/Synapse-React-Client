import React from 'react'
import { render, screen } from '@testing-library/react'
import { DownloadOptions } from '../../../../../lib/containers/table/table-top'
import {
  DownloadOptionsProps,
  DOWNLOAD_FILES_MENU_TEXT,
} from '../../../../../lib/containers/table/table-top/DownloadOptions'
import { createWrapper } from '../../../../../lib/testutils/TestingLibraryUtils'
import {
  QueryContextProvider,
  QueryContextType,
} from '../../../../../lib/containers/QueryWrapper'
import {
  mockDatasetEntity,
  mockFileViewEntity,
  mockTableEntity,
  MOCK_DATASET_ENTITY_ID,
  MOCK_TABLE_ENTITY_ID,
} from '../../../../../mocks/entity/mockEntity'
import { SignalCellularConnectedNoInternet0Bar } from '@material-ui/icons'
import userEvent from '@testing-library/user-event'

function renderComponent(
  props: DownloadOptionsProps,
  queryContext: Partial<QueryContextType>,
) {
  return render(
    <QueryContextProvider queryContext={queryContext}>
      <DownloadOptions {...props} />
    </QueryContextProvider>,
    { wrapper: createWrapper() },
  )
}

describe('Download Options tests', () => {
  const props: DownloadOptionsProps = {
    onDownloadFiles: jest.fn(),
  }

  const queryContext: Partial<QueryContextType> = {
    entity: mockTableEntity,
    getLastQueryRequest: () => ({}),
  }

  it('Shows correct options for a TableEntity', async () => {
    renderComponent(props, queryContext)

    const downloadOptionsButton = await screen.findByRole('button', {
      name: 'Download Options',
    })

    userEvent.click(downloadOptionsButton)

    await screen.findByRole('button', { name: 'Export Table' })
    const programmaticOptionsMenuItem = await screen.findByRole('button', {
      name: 'Programmatic Options',
    })

    // Download files should not be visible for tables
    expect(
      screen.queryByRole('button', { name: DOWNLOAD_FILES_MENU_TEXT }),
    ).not.toBeInTheDocument()

    // Verify that programmatic download isn't disabled
    expect(programmaticOptionsMenuItem.classList.contains('disabled')).toBe(
      false,
    )
  })

  it('Shows correct options for a File View', async () => {
    const fileViewQueryContext = {
      ...queryContext,
      entity: mockFileViewEntity,
    }
    renderComponent(props, fileViewQueryContext)

    const downloadOptionsButton = await screen.findByRole('button', {
      name: 'Download Options',
    })

    userEvent.click(downloadOptionsButton)

    await screen.findByRole('button', { name: 'Export Table' })
    const downloadFilesMenuItem = await screen.findByRole('button', {
      name: DOWNLOAD_FILES_MENU_TEXT,
    })
    const programmaticOptionsMenuItem = await screen.findByRole('button', {
      name: 'Programmatic Options',
    })

    // Verify that programmatic download and download files are not disabled
    expect(downloadFilesMenuItem.classList.contains('disabled')).toBe(false)
    expect(programmaticOptionsMenuItem.classList.contains('disabled')).toBe(
      false,
    )
  })

  it('Shows correct options for a Project View', async () => {
    renderComponent(props, queryContext)

    const downloadOptionsButton = await screen.findByRole('button', {
      name: 'Download Options',
    })

    userEvent.click(downloadOptionsButton)

    await screen.findByRole('button', { name: 'Export Table' })
    const programmaticOptionsMenuItem = await screen.findByRole('button', {
      name: 'Programmatic Options',
    })

    // Download files should not be visible for project views
    expect(
      screen.queryByRole('button', { name: DOWNLOAD_FILES_MENU_TEXT }),
    ).not.toBeInTheDocument()

    // Verify that programmatic download isn't disabled
    expect(programmaticOptionsMenuItem.classList.contains('disabled')).toBe(
      false,
    )
  })

  it('Shows correct options for a stable version of a dataset', async () => {
    const isStableVersion = true
    const fileViewQueryContext = {
      ...queryContext,
      entity: {
        ...mockDatasetEntity,
        isLatestVersion: !isStableVersion,
      },
    }

    renderComponent(props, fileViewQueryContext)

    const downloadOptionsButton = await screen.findByRole('button', {
      name: 'Download Options',
    })

    userEvent.click(downloadOptionsButton)

    await screen.findByRole('button', { name: 'Export Table' })
    const downloadFilesMenuItem = await screen.findByRole('button', {
      name: DOWNLOAD_FILES_MENU_TEXT,
    })
    const programmaticOptionsMenuItem = await screen.findByRole('button', {
      name: 'Programmatic Options',
    })

    // Verify that programmatic download and download files are not disabled
    expect(downloadFilesMenuItem.classList.contains('disabled')).toBe(false)
    expect(programmaticOptionsMenuItem.classList.contains('disabled')).toBe(
      false,
    )
  })

  it('Shows correct options for a draft Dataset', async () => {
    const isStableVersion = false
    const fileViewQueryContext = {
      ...queryContext,
      entity: {
        ...mockDatasetEntity,
        isLatestVersion: !isStableVersion,
      },
    }

    renderComponent(props, fileViewQueryContext)

    const downloadOptionsButton = await screen.findByRole('button', {
      name: 'Download Options',
    })

    userEvent.click(downloadOptionsButton)

    await screen.findByRole('button', { name: 'Export Table' })
    const downloadFilesMenuItem = await screen.findByRole('button', {
      name: DOWNLOAD_FILES_MENU_TEXT,
    })
    const programmaticOptionsMenuItem = await screen.findByRole('button', {
      name: 'Programmatic Options',
    })

    // Verify that programmatic download and download files are disabled
    expect(downloadFilesMenuItem.classList.contains('disabled')).toBe(true)
    expect(programmaticOptionsMenuItem.classList.contains('disabled')).toBe(
      true,
    )
  })
})
