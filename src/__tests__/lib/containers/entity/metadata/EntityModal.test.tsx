import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {
  EntityModal,
  EntityModalProps,
  EntityModalTabs
} from '../../../../../lib/containers/entity/metadata/EntityModal'
import {
  createWrapperWithInjected
} from '../../../../../lib/testutils/TestingLibraryUtils'
import { ENTITY_BUNDLE_V2 } from '../../../../../lib/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint
} from '../../../../../lib/utils/functions/getEndpoint'
import { SynapseContextType } from '../../../../../lib/utils/SynapseContext'
import {
  mockFileEntityBundle,
  MOCK_FILE_ENTITY_ID
} from '../../../../../mocks/entity/mockEntity'
import { rest, server } from '../../../../../mocks/msw/server'

const defaultProps: EntityModalProps = {
  show: true,
  onClose: jest.fn(),
  entityId: MOCK_FILE_ENTITY_ID,
}

const mockAnnotationEditor = jest.fn(() => <>Mock Annotation Editor</>)
const mockAnnotationTable = jest.fn(() => <>Mock Annotation Table</>)
const mockMetadataTable = jest.fn(() => <>Mock Metadata Table</>)

function renderComponent(
  propOverrides?: Partial<EntityModalProps>,
  wrapperProps?: SynapseContextType,
) {
  render(<EntityModal {...defaultProps} {...propOverrides} />, {
    wrapper: createWrapperWithInjected(
      {
        SchemaDrivenAnnotationEditor: mockAnnotationEditor,
        AnnotationsTable: mockAnnotationTable,
        MetadataTable: mockMetadataTable,
      },
      wrapperProps,
    ),
  })
}

describe('EntityModal tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Initially shows metadata table', async () => {
    renderComponent()
    await screen.findByText('Mock Metadata Table')
  })

  it('Shows annotations when the tab is switched', async () => {
    renderComponent()
    const annotationsTab = (await screen.findAllByRole('tab')).filter(
      tab => tab.innerHTML === 'ANNOTATIONS',
    )[0]
    userEvent.click(annotationsTab)

    await screen.findByText('Mock Annotation Table')
  })

  it('Shows the edit button when the user has edit permissions', async () => {
    server.use(
      rest.post(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_BUNDLE_V2(
          ':entityId',
        )}`,
        async (req, res, ctx) => {
          const response = mockFileEntityBundle
          mockFileEntityBundle.permissions = { canEdit: true }
          return res(ctx.status(200), ctx.json(response))
        },
      ),
    )

    renderComponent({ initialTab: EntityModalTabs.ANNOTATIONS })
    await screen.findByRole('button', { name: 'Edit' })
  })

  it('Does not show the edit button when the user does not have edit permissions', async () => {
    server.use(
      rest.post(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_BUNDLE_V2(
          ':entityId',
        )}`,
        async (req, res, ctx) => {
          const response = mockFileEntityBundle
          mockFileEntityBundle.permissions = { canEdit: false }
          return res(ctx.status(200), ctx.json(response))
        },
      ),
    )

    renderComponent({ initialTab: EntityModalTabs.ANNOTATIONS })
    expect(
      screen.queryByRole('button', { name: 'Edit' }),
    ).not.toBeInTheDocument()
  })

  it('Opens the annotation editor when edit is clicked', async () => {
    server.use(
      rest.post(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_BUNDLE_V2(
          ':entityId',
        )}`,
        async (req, res, ctx) => {
          const response = mockFileEntityBundle
          mockFileEntityBundle.permissions = { canEdit: true }
          return res(ctx.status(200), ctx.json(response))
        },
      ),
    )

    renderComponent({ initialTab: EntityModalTabs.ANNOTATIONS })

    const editButton = await screen.findByRole('button', { name: 'Edit' })
    userEvent.click(editButton)

    // Text that appears in the editor component if there's a schema
    await screen.findByText('Mock Annotation Editor', { exact: false })
  })
})
