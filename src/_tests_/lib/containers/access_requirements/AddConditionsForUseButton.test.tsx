import React from 'react'
import { EntityBundle } from '../../../../lib/utils/synapseTypes'
import AddConditionsForUseButton, {
  AddConditionsForUseButtonProps,
} from '../../../../lib/containers/access_requirements/AddConditionsForUseButton'
import { render, screen, waitFor } from '@testing-library/react'
import { createWrapper } from '../../../../lib/testutils/TestingLibraryUtils'
import { rest, server } from '../../../../mocks/msw/server'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../../lib/utils/functions/getEndpoint'
import {
  ENTITY_BUNDLE_V2,
  TEAM_ID_MEMBER_ID,
} from '../../../../lib/utils/APIConstants'
import { TeamMember } from '../../../../lib/utils/synapseTypes/TeamMember'
import mockFileEntity from '../../../../mocks/entity/mockFileEntity'
import userEvent from '@testing-library/user-event'
import { mockUnmetControlledDataRestrictionInformationACT } from '../../../../mocks/mock_has_access_data'

function renderComponent(props: AddConditionsForUseButtonProps) {
  return render(<AddConditionsForUseButton {...props} />, {
    wrapper: createWrapper(),
  })
}

const mockCallback = jest.fn()

// Adding this mock service worker handler will make the component recognize the caller as an ACT member
function useTeamMemberExists() {
  server.use(
    rest.get(
      `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${TEAM_ID_MEMBER_ID(
        ':id',
        ':userId',
      )}`,
      async (req, res, ctx) => {
        const result: TeamMember = {
          teamId: req.id,
          member: {
            ownerId: req.userId,
          },
          isAdmin: false,
        }
        return res(ctx.status(200), ctx.json(result))
      },
    ),
  )
}

function useTeamMemberNotFound() {
  server.use(
    rest.get(
      `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${TEAM_ID_MEMBER_ID(
        ':id',
        ':userId',
      )}`,
      async (req, res, ctx) => {
        return res(ctx.status(404), ctx.json({}))
      },
    ),
  )
}

describe('AddConditionsForUseButton', () => {
  beforeAll(() => {
    server.listen()
    useTeamMemberNotFound()
  })

  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Shows dialog on click', async () => {
    renderComponent({
      entityId: mockFileEntity.id,
      onACTMemberClick: mockCallback,
    })

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    const button = await screen.findByRole('button', {
      name: 'Add Conditions for Use',
    })
    await userEvent.click(button)

    await screen.findByRole('dialog')
    expect(mockCallback).not.toHaveBeenCalled()
  })

  it('Invoked callback on click if the user is an ACT member', async () => {
    useTeamMemberExists()

    renderComponent({
      entityId: mockFileEntity.id,
      onACTMemberClick: mockCallback,
    })

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    const button = await screen.findByRole('button', {
      name: 'Add Conditions for Use',
    })

    await userEvent.click(button)
    await waitFor(() => expect(mockCallback).toHaveBeenCalled())

    // No dialog should appear for ACT users
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('Button is not shown if there are restrictions', () => {
    server.use(
      rest.get(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_BUNDLE_V2(
          ':entity',
        )}`,
        async (req, res, ctx) => {
          const result: EntityBundle = {
            ...mockFileEntity.bundle,
            restrictionInformation:
              mockUnmetControlledDataRestrictionInformationACT,
          }
          return res(ctx.status(200), ctx.json(result))
        },
      ),
    )

    renderComponent({
      entityId: mockFileEntity.id,
      onACTMemberClick: mockCallback,
    })

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it("Button is not shown if the user doesn't have permission to impose restrictions", () => {
    server.use(
      rest.get(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_BUNDLE_V2(
          ':entity',
        )}`,
        async (req, res, ctx) => {
          const result: EntityBundle = {
            ...mockFileEntity.bundle,
            permissions: {
              ...mockFileEntity.bundle?.permissions,
              canChangePermissions: false,
            },
          }
          return res(ctx.status(200), ctx.json(result))
        },
      ),
    )

    renderComponent({
      entityId: mockFileEntity.id,
      onACTMemberClick: mockCallback,
    })

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
