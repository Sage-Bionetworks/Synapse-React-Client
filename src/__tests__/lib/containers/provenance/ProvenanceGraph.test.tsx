import { render, screen } from '@testing-library/react'
import React from 'react'
import ProvenanceGraph, {
  ProvenanceProps,
} from '../../../../lib/containers/provenance/ProvenanceGraph'
import { createWrapper } from '../../../../lib/testutils/TestingLibraryUtils'
import { ACTIVITY_FOR_ENTITY } from '../../../../lib/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../../lib/utils/functions/getEndpoint'
import { mockActivity } from '../../../../mocks/provenance/mockActivity'
import mockFileEntityData from '../../../../mocks/entity/mockFileEntity'
import { rest, server } from '../../../../mocks/msw/server'
import { SynapseApiResponse } from '../../../../mocks/msw/handlers'
import { Activity } from '../../../../lib/utils/synapseTypes/Provenance/Provenance'
import { MOCK_TABLE_ENTITY_ID } from '../../../../mocks/entity/mockEntity'

function renderComponent(props: ProvenanceProps) {
  return render(<ProvenanceGraph {...props} />, { wrapper: createWrapper() })
}

describe('ProvenanceGraph', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    server.use(
      rest.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ACTIVITY_FOR_ENTITY(
          mockFileEntityData.id,
          `${mockFileEntityData.entity.versionNumber}`,
        )}`,
        async (req, res, ctx) => {
          return res(ctx.status(200), ctx.json(mockActivity))
        },
      ),
      rest.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ACTIVITY_FOR_ENTITY(MOCK_TABLE_ENTITY_ID)}`,
        async (req, res, ctx) => {
          const response: SynapseApiResponse<Activity> = {
            reason: `Mock Service worker was not configured to return an Activity for ${MOCK_TABLE_ENTITY_ID}`,
          }
          return res(ctx.status(404), ctx.json(response))
        },
      ),
    )
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  test('Shows a basic provenance graph successfully', async () => {
    renderComponent({
      entityRefs: [
        {
          targetId: mockFileEntityData.id,
          targetVersionNumber: mockFileEntityData.entity.versionNumber,
        },
      ],
      containerHeight: '500px',
    })
    console.log(
      `${JSON.stringify({
        targetId: mockFileEntityData.id,
        targetVersionNumber: mockFileEntityData.entity.versionNumber,
      })}`,
    )
    const provenanceGraph = await screen.findByRole('graphics-doc')
    expect(provenanceGraph).toBeDefined()
    const fileEntityNode = await screen.findByText(mockFileEntityData.name)
    expect(fileEntityNode).toBeDefined() // found entity node
    const activityNode = await screen.findByText(mockActivity.name)
    expect(activityNode).toBeDefined() // found activity node
  })
})
