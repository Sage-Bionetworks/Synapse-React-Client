import { render, screen, waitFor, within } from '@testing-library/react'
import React from 'react'
import FileHandleContentRenderer, {
  FileHandleContentRendererProps,
} from '../../../../../lib/containers/FilePreview/FileHandleContentRenderer'
import * as HtmlPreviewModule from '../../../../../lib/containers/FilePreview/HtmlPreview/HtmlPreview'
import { PreviewRendererType } from '../../../../../lib/containers/FilePreview/PreviewRendererType'
import { createWrapper } from '../../../../../lib/testutils/TestingLibraryUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../../../lib/utils/functions/getEndpoint'
import { MB } from '../../../../../lib/utils/SynapseConstants'
import {
  BatchFileResult,
  FileHandle,
  FileHandleAssociateType,
  FileHandleAssociation,
} from '../../../../../lib/utils/synapseTypes'
import mockFileEntityData from '../../../../../mocks/entity/mockFileEntity'
import { MOCK_FILE_HANDLE_ID } from '../../../../../mocks/mock_file_handle'
import { rest, server } from '../../../../../mocks/msw/server'

jest.spyOn(HtmlPreviewModule, 'default').mockImplementation(() => {
  return <div data-testid="HtmlPreview"></div>
})

function renderComponent(props: FileHandleContentRendererProps) {
  return render(<FileHandleContentRenderer {...props} />, {
    wrapper: createWrapper({
      // Need to wrap in an error boundary
      withErrorBoundary: true,
      isInExperimentalMode: false,
      utcTime: false,
      downloadCartPageUrl: '/#!DownloadCart:0',
    }),
  })
}

const PRESIGNED_URL = 'https://fake-presigned-url.not-real.gov/file'

describe('FileHandleContentRenderer tests', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    server.use(
      // Handler to return the presigned URL for the requested file
      rest.post(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/file/v1/fileHandle/batch`,
        (req, res, ctx) => {
          const result: BatchFileResult = {
            requestedFiles: [
              {
                fileHandleId: MOCK_FILE_HANDLE_ID,
                preSignedURL: PRESIGNED_URL,
              },
            ],
          }
          return res(ctx.status(200), ctx.json(result))
        },
      ),
      // Handler for the presigned URL to return the file contents
      rest.get(PRESIGNED_URL, (req, res, ctx) => {
        return res(ctx.status(200), ctx.text('file contents here'))
      }),
    )
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Will render HTML content', async () => {
    const fileHandle: FileHandle = {
      id: MOCK_FILE_HANDLE_ID,
      fileName: 'test.html',
      contentSize: 100,
      contentType: 'text/html',
      etag: '',
      createdBy: '',
      createdOn: '',
      concreteType: 'org.sagebionetworks.repo.model.file.S3FileHandle',
      storageLocationId: 0,
    }
    const fileHandleAssociation: FileHandleAssociation = {
      fileHandleId: fileHandle.id,
      associateObjectId: mockFileEntityData.id,
      associateObjectType: FileHandleAssociateType.FileEntity,
    }
    renderComponent({
      fileHandle,
      fileHandleAssociation,
      previewType: PreviewRendererType.HTML,
    })

    await screen.findByTestId('HtmlPreview')
  })
  it('Throws an error if the file content size is > 10MB', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {})
    const fileSize = 100 * MB
    const fileHandle: FileHandle = {
      id: MOCK_FILE_HANDLE_ID,
      fileName: 'test.html',
      contentSize: fileSize,
      contentType: 'text/html',
      etag: '',
      createdBy: '',
      createdOn: '',
      concreteType: 'org.sagebionetworks.repo.model.file.S3FileHandle',
      storageLocationId: 0,
    }
    const fileHandleAssociation: FileHandleAssociation = {
      fileHandleId: fileHandle.id,
      associateObjectId: mockFileEntityData.id,
      associateObjectType: FileHandleAssociateType.FileEntity,
    }

    renderComponent({
      fileHandle,
      fileHandleAssociation,
      previewType: PreviewRendererType.HTML,
    })
    const errorBoundary = await screen.findByRole('alert')
    await within(errorBoundary).findByText(
      /File size \(100.00 MB\) exceeds the maximum size that can be downloaded \(10.00 MB\)/,
    )
  })

  it('Renders nothing if the preview type is NONE', async () => {
    const fileHandle: FileHandle = {
      id: MOCK_FILE_HANDLE_ID,
      fileName: 'test.html',
      contentSize: 100,
      contentType: 'text/html',
      etag: '',
      createdBy: '',
      createdOn: '',
      concreteType: 'org.sagebionetworks.repo.model.file.S3FileHandle',
      storageLocationId: 0,
    }
    const fileHandleAssociation: FileHandleAssociation = {
      fileHandleId: fileHandle.id,
      associateObjectId: mockFileEntityData.id,
      associateObjectType: FileHandleAssociateType.FileEntity,
    }

    const { container } = renderComponent({
      fileHandle,
      fileHandleAssociation,
      previewType: PreviewRendererType.NONE, // !
    })

    await waitFor(() => {
      expect(container).toBeEmptyDOMElement()
    })
  })
  it('Renders nothing for unsupported render types', async () => {
    jest.spyOn(console, 'warn').mockImplementation(() => {})
    const fileHandle: FileHandle = {
      id: MOCK_FILE_HANDLE_ID,
      fileName: 'test.html',
      contentSize: 100,
      contentType: 'text/html',
      etag: '',
      createdBy: '',
      createdOn: '',
      concreteType: 'org.sagebionetworks.repo.model.file.S3FileHandle',
      storageLocationId: 0,
    }
    const fileHandleAssociation: FileHandleAssociation = {
      fileHandleId: fileHandle.id,
      associateObjectId: mockFileEntityData.id,
      associateObjectType: FileHandleAssociateType.FileEntity,
    }

    const { container } = renderComponent({
      fileHandle,
      fileHandleAssociation,
      previewType: PreviewRendererType.IMAGE, // !
    })

    await waitFor(() => {
      expect(container).toBeEmptyDOMElement()
    })

    expect(console.warn).toHaveBeenCalledWith(
      'Rendering a preview of type IMAGE is not supported in Portals',
    )
  })
})
