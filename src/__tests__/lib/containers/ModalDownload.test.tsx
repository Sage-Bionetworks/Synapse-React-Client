import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as React from 'react'
import ModalDownload, {
  ModalDownloadProps,
} from '../../../lib/containers/ModalDownload'
import {
  csvOption,
  tsvOption,
  writeHeaderOption,
} from '../../../lib/containers/ModalDownload.FormSchema'
import { createWrapper } from '../../../lib/testutils/TestingLibraryUtils'
import { MOCK_CONTEXT_VALUE } from '../../../mocks/MockSynapseContext'

const renderComponent = (props: ModalDownloadProps) => {
  return render(<ModalDownload {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('it performs the expected functionality', () => {
  const mockClose = jest.fn()
  const SynapseClient = require('../../../lib/utils/SynapseClient')
  const mockGetDownloadFromTableRequest = jest.fn(() =>
    Promise.resolve({
      resultFileHandleId: 'hello',
    }),
  )
  SynapseClient.getDownloadFromTableRequest = mockGetDownloadFromTableRequest
  SynapseClient.getFileHandleByIdURL = jest.fn().mockResolvedValue('testurl')
  const props: ModalDownloadProps = {
    queryBundleRequest: {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      entityId: 'syn',
      partMask: 1,
      query: {
        sql: 'syn',
      },
    },
    onClose: mockClose,
  }

  it('renders without crashing', () => {
    renderComponent(props)
    screen.getByRole('dialog')
  })

  it('generates a csv file', async () => {
    renderComponent(props)
    // step 1 - select csv option
    const csvInputElement = screen.getByRole('radio', { name: csvOption })
    userEvent.click(csvInputElement)
    userEvent.click(screen.getByRole('button', { name: 'Next' }))
    // step 2 - verify UI has download button showing
    const downloadButton = await screen.findByRole('button', {
      name: 'Download',
    })
    userEvent.click(downloadButton)
    expect(mockGetDownloadFromTableRequest).toHaveBeenCalledWith(
      expect.objectContaining({
        csvTableDescriptor: { separator: ',' },
        writeHeader: true,
        includeRowIdAndRowVersion: true,
      }),
      MOCK_CONTEXT_VALUE.accessToken,
    )
  })

  it('generates a tsv file without header', async () => {
    renderComponent(props)
    // step 1 - select tsv option
    const tsvInputElement = screen.getByRole('radio', { name: tsvOption })
    userEvent.click(tsvInputElement)
    // step 2 - de-select write header option
    const writerHeaderInputElement = screen.getByRole('checkbox', {
      name: writeHeaderOption,
    })
    userEvent.click(writerHeaderInputElement)
    userEvent.click(screen.getByRole('button', { name: 'Next' }))

    // step 3 - verify UI has download button showing
    const downloadButton = await screen.findByRole('button', {
      name: 'Download',
    })
    userEvent.click(downloadButton)
    expect(mockGetDownloadFromTableRequest).toHaveBeenCalledWith(
      expect.objectContaining({
        csvTableDescriptor: { separator: '\t' },
        writeHeader: false,
        includeRowIdAndRowVersion: true,
      }),
      MOCK_CONTEXT_VALUE.accessToken,
    )
  })
})
