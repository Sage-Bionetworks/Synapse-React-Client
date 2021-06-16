import React from 'react'
import { render, screen } from '@testing-library/react'
import {
  AnnotationsTable,
  AnnotationsTableProps,
} from '../../../../../lib/containers/entity/metadata/AnnotationsTable'
import { SynapseContextType } from '../../../../../lib/utils/SynapseContext'
import {
  mockFileEntityBundle,
  MOCK_FILE_ENTITY_ID,
} from '../../../../../mocks/entity/mockEntity'
import { MOCK_CONTEXT_VALUE } from '../../../../../mocks/MockSynapseContext'
import { rest, server } from '../../../../../mocks/msw/server'
import { mockSchemaBinding } from '../../../../../mocks/mockSchema'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../../../lib/utils/functions/getEndpoint'
import { createWrapper } from '../../../../../lib/testutils/TestingLibraryUtils'
import { ENTITY_BUNDLE_V2 } from '../../../../../lib/utils/APIConstants'

const defaultProps: AnnotationsTableProps = {
  entityId: MOCK_FILE_ENTITY_ID,
}

function renderComponent(wrapperProps?: SynapseContextType) {
  render(<AnnotationsTable {...defaultProps} />, {
    wrapper: createWrapper(wrapperProps),
  })
}

describe('AnnotationsTable tests', () => {
  // Handle the msw lifecycle:
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Renders the annotations on an entity', async () => {
    renderComponent()
    await screen.findByText('myStringKey')
    for (const key of Object.keys(
      mockFileEntityBundle.annotations!.annotations,
    )) {
      expect(() => screen.getByText(key)).not.toThrowError()
      screen.getByText(
        mockFileEntityBundle.annotations!.annotations[key].value.join(', '),
      )
    }
  })

  it('Displays the validation schema if there is one (in experimental mode)', async () => {
    renderComponent({
      ...MOCK_CONTEXT_VALUE,
      isInExperimentalMode: true,
    })

    await screen.findByText('Validation Schema')
    await screen.findByText(mockSchemaBinding.jsonSchemaVersionInfo.schemaName)
  })

  it('Displays a placeholder when annotations is undefined', async () => {
    server.use(
      rest.post(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_BUNDLE_V2(
          ':entityId',
        )}`,

        async (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({ ...mockFileEntityBundle, annotations: undefined }),
          )
        },
      ),
    )
    renderComponent()
    await screen.findByText('This File has no annotations.')
  })

  it('Displays a placeholder when annotations is empty', async () => {
    server.use(
      rest.post(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_BUNDLE_V2(
          ':entityId',
        )}`,

        async (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              ...mockFileEntityBundle,
              annotations: { id: 'myId', etag: 'etag', annotations: {} },
            }),
          )
        },
      ),
    )
    renderComponent()
    await screen.findByText('This File has no annotations.')
  })
})
