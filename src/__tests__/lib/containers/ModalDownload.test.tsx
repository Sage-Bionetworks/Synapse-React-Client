import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import ModalDownload, {
  ModalDownloadProps,
} from '../../../lib/containers/ModalDownload'
import {
  csvOption,
  tsvOption,
  writeHeaderOption,
} from '../../../lib/containers/ModalDownload.FormSchema'
import { createWrapper } from '../../../lib/testutils/TestingLibraryUtils'
import { SynapseClient } from '../../../lib/utils'
import { MOCK_CONTEXT_VALUE } from '../../../mocks/MockSynapseContext'

const renderComponent = (props: ModalDownloadProps) => {
  return render(<ModalDownload {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('it performs the expected functionality', () => {
  const mockClose = jest.fn()
  const mockGetDownloadFromTableRequest = jest
    .spyOn(SynapseClient, 'getDownloadFromTableRequest')
    .mockResolvedValue({
      resultFileHandleId: 'hello',
    })
  const mockGetFile = jest
    .spyOn(SynapseClient, 'getFileHandleByIdURL')
    .mockResolvedValue('testurl')
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

  test('generates a csv file', async () => {
    renderComponent(props)
    // step 1 - select csv option
    const csvOptionElement = screen.getByLabelText(csvOption)
    userEvent.click(csvOptionElement)

    userEvent.click(screen.getByRole('button', { name: 'Next' }))

    // step 2 - verify UI has download button showing
    const downloadButton = await screen.findByRole('button', {
      name: 'Download',
    })
    expect(mockGetDownloadFromTableRequest).toHaveBeenCalledWith(
      expect.objectContaining({
        csvTableDescriptor: { separator: ',' },
        writeHeader: true,
        includeRowIdAndRowVersion: true,
      }),
      MOCK_CONTEXT_VALUE.accessToken,
    )

    userEvent.click(downloadButton)
    await waitFor(() => expect(mockGetFile).toHaveBeenCalled())
    await waitFor(() => expect(mockClose).toHaveBeenCalled())
  })

  test('generates a tsv file without header', async () => {
    renderComponent(props)

    // step 1 - select tsv option
    const tsvOptionElement = screen.getByLabelText(tsvOption)
    userEvent.click(tsvOptionElement)

    // step 2 - de-select write header option
    const writeHeaderOptionElement =
      screen.getByLabelText<HTMLInputElement>(writeHeaderOption)
    expect(writeHeaderOptionElement.checked).toBe(true)
    userEvent.click(writeHeaderOptionElement)
    expect(writeHeaderOptionElement.checked).toBe(false)
    userEvent.click(screen.getByRole('button', { name: 'Next' }))

    // step 3 - verify UI has download button showing
    const downloadButton = await screen.findByRole('button', {
      name: 'Download',
    })
    expect(mockGetDownloadFromTableRequest).toHaveBeenCalledWith(
      expect.objectContaining({
        csvTableDescriptor: { separator: '\t' },
        writeHeader: false,
        includeRowIdAndRowVersion: true,
      }),
      MOCK_CONTEXT_VALUE.accessToken,
    )
    userEvent.click(downloadButton)
    await waitFor(() => expect(mockGetFile).toHaveBeenCalled())
    await waitFor(() => expect(mockClose).toHaveBeenCalled())
  })
})
