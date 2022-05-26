import { render, screen } from '@testing-library/react'
import * as React from 'react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import DirectDownload, {
  DirectFileDownloadProps,
} from '../../../lib/containers/DirectDownload'
import { createWrapper } from '../../../lib/testutils/TestingLibraryUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../lib/utils/functions/getEndpoint'
import {
  BatchFileResult,
  FileHandleAssociateType,
} from '../../../lib/utils/synapseTypes'
import { CloudProviderFileHandleConcreteTypeEnum } from '../../../lib/utils/synapseTypes/CloudProviderFileHandle'
import {
  mockFileEntity,
  MOCK_FILE_ENTITY_ID,
} from '../../../mocks/entity/mockEntity'
import { rest, server } from '../../../mocks/msw/server'
import { MOCK_USER_ID } from '../../../mocks/user/mock_user_profile'

describe('DirectDownload: basic functionality', () => {
  const props: DirectFileDownloadProps = {
    associatedObjectId: MOCK_FILE_ENTITY_ID,
    associatedObjectType: FileHandleAssociateType.FileEntity,
    entityVersionNumber: mockFileEntity.versionNumber?.toString(),
  }

  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  const batchFileResponse: BatchFileResult = {
    requestedFiles: [
      {
        fileHandleId: '69241673',
        fileHandle: {
          id: '69241673',
          etag: '13aa7228-c75f-4e73-aeb2-b5304b8f1e6c',
          createdBy: MOCK_USER_ID.toString(),
          createdOn: '2020-11-30T15:57:57.000Z',
          modifiedOn: '2020-11-30T15:57:57.000Z',
          concreteType: CloudProviderFileHandleConcreteTypeEnum.S3FileHandle,
          contentType: 'image/png',
          contentMd5: 'fa4b066053ce2d5d23ae3f3774925dfd',
          fileName: 'test-file-handle.png',
          storageLocationId: 1,
          contentSize: 464978,
          status: 'AVAILABLE',
          bucketName: 'proddata.sagebase.org',
          key: '3329874/daff448b-d801-4b7c-8fa4-9ca33f0ba9ff/test-file-handle.png',
          isPreview: false,
        },
        preSignedURL: 'https://s3.amazonaws.com/some-presigned-url',
      },
    ],
  }
  it('render direct download component without crashing', async () => {
    server.use(
      rest.post(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/file/v1/fileHandle/batch`,

        async (req, res, ctx) => {
          return res(ctx.status(200), ctx.json(batchFileResponse))
        },
      ),
    )

    render(<DirectDownload {...props} />, {
      wrapper: createWrapper(),
    })
    mockAllIsIntersecting(true)
    await screen.findByRole('img')
  })

  it('file handle fetch failure should display nothing', () => {
    server.use(
      rest.post(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/file/v1/fileHandle/batch`,

        async (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              requestedFiles: [
                {
                  fileHandleId: '29241673',
                  failureCode: 'UNAUTHORIZED',
                },
              ],
            }),
          )
        },
      ),
    )

    render(<DirectDownload {...props} />, {
      wrapper: createWrapper(),
    })
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })
})
