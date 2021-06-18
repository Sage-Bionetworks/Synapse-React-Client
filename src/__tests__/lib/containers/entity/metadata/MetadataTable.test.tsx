import React from 'react'
import { render, screen } from '@testing-library/react'
import {
  MetadataTable,
  MetadataTableProps,
} from '../../../../../lib/containers/entity/metadata/MetadataTable'
import { createWrapper } from '../../../../../lib/testutils/TestingLibraryUtils'
import { SynapseContextType } from '../../../../../lib/utils/SynapseContext'
import {
  mockProjectEntityBundle,
  MOCK_FILE_ENTITY_ID,
  MOCK_PROJECT_ID,
} from '../../../../../mocks/entity/mockEntity'
import { server } from '../../../../../mocks/msw/server'
import { mockUserProfileData } from '../../../../../mocks/user/mock_user_profile'

const defaultProps: MetadataTableProps = {
  entityId: MOCK_PROJECT_ID,
}

function renderComponent(
  props?: MetadataTableProps,
  wrapperProps?: SynapseContextType,
) {
  render(<MetadataTable {...(props ?? defaultProps)} />, {
    wrapper: createWrapper(wrapperProps),
  })
}

describe('MetadataTable tests', () => {
  // Handle the msw lifecycle:
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Renders all rows for a project', async () => {
    renderComponent()
    await screen.findByText('Name')
    await screen.findByText(mockProjectEntityBundle.entity!.name)
    await screen.findByText('Type')
    await screen.findByText('Project')
    await screen.findByText('Synapse ID')
    await screen.findByText(mockProjectEntityBundle.entity!.id!)
    /* Not checking the values of dates, they are passed through a formatter. */
    await screen.findByText('Last Modified On')
    await screen.findByText('Created On')
    expect(
      (await screen.findAllByText(`@${mockUserProfileData.userName}`)).length,
    ).toBe(2)
  })

  it('Renders storage location for a file', async () => {
    renderComponent({ entityId: MOCK_FILE_ENTITY_ID })
    await screen.findByText('Storage')
    await screen.findByText('Synapse Storage')
  })
})
