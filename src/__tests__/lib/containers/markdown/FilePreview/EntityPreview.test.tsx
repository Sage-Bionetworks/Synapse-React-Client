import { render, screen, within } from '@testing-library/react'
import React from 'react'
import * as FileEntityPreviewModule from '../../../../../lib/containers/FilePreview/FileEntityPreview'
import { createWrapper } from '../../../../../lib/testutils/TestingLibraryUtils'
import mockFileEntityData from '../../../../../mocks/entity/mockFileEntity'
import { server } from '../../../../../mocks/msw/server'
import mockDatasetData from '../../../../../mocks/entity/mockDataset'
import { SynapseContextType } from '../../../../../lib/utils/SynapseContext'
import { MOCK_CONTEXT_VALUE } from '../../../../../mocks/MockSynapseContext'
import EntityPreview, {
  EntityPreviewProps,
} from '../../../../../lib/containers/FilePreview/EntityPreview'

jest.spyOn(FileEntityPreviewModule, 'default').mockImplementation(() => {
  return <div data-testid="FileEntityPreview"></div>
})

const defaultWrapperProps: SynapseContextType = {
  ...MOCK_CONTEXT_VALUE,
  // Component is always wrapped in an error boundary
  withErrorBoundary: true,
}

function renderComponent(
  props: EntityPreviewProps,
  wrapperProps: SynapseContextType = defaultWrapperProps,
) {
  return render(<EntityPreview {...props} />, {
    wrapper: createWrapper(wrapperProps),
  })
}

describe('EntityPreview tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Passes a file entity bundle to the FileEntityPreview component', async () => {
    renderComponent({
      entityId: mockFileEntityData.id,
    })

    await screen.findByTestId('FileEntityPreview')

    expect(FileEntityPreviewModule.default).toHaveBeenCalledWith(
      expect.objectContaining({
        bundle: expect.anything(),
      }),
      expect.anything(),
    )
  })

  it('Throws an error if the entity is not a FileEntity', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {})
    renderComponent({
      entityId: mockDatasetData.id,
    })
    const errorBoundary = await screen.findByRole('alert')
    await within(errorBoundary).findByText(
      /syn\d+ is not a File and cannot be previewed/,
    )
  })
})
