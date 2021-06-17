import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {
  EntityModal,
  EntityModalProps,
} from '../../../../../lib/containers/entity/metadata/EntityModal'
import { createWrapper } from '../../../../../lib/testutils/TestingLibraryUtils'
import { SynapseContextType } from '../../../../../lib/utils/SynapseContext'
import {
  mockFileEntity,
  mockFileEntityBundle,
  MOCK_FILE_ENTITY_ID,
} from '../../../../../mocks/entity/mockEntity'
import { server } from '../../../../../mocks/msw/server'

const defaultProps: EntityModalProps = {
  show: true,
  onClose: jest.fn(),
  entityId: MOCK_FILE_ENTITY_ID,
}

function renderComponent(wrapperProps?: SynapseContextType) {
  render(<EntityModal {...defaultProps} />, {
    wrapper: createWrapper(wrapperProps),
  })
}

describe('EntityModal tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Shows metadata like the syn ID', async () => {
    renderComponent()
    await screen.findByText(mockFileEntity.id!)
    // tests for specific data are in MetadataTable.test.tsx
  })

  it('Shows annotations when the tab is switched', async () => {
    renderComponent()
    const annotationsTab = (await screen.findAllByRole('tab')).filter(
      tab => tab.innerHTML === 'ANNOTATIONS',
    )[0]
    userEvent.click(annotationsTab)

    await screen.findByText(
      Object.keys(mockFileEntityBundle.annotations!.annotations)[0],
    )
    // tests for specific data are in AnnotationsTable.test.tsx
  })
})
