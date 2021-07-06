import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import {
  EntityBadgeIcons,
  EntityBadgeIconsProps,
} from '../../../lib/containers/EntityBadgeIcons'
import { createWrapper } from '../../../lib/testutils/TestingLibraryUtils'
import { SynapseContextType } from '../../../lib/utils/SynapseContext'
import {
  mockFileEntityBundle,
  MOCK_FILE_ENTITY_ID,
} from '../../../mocks/entity/mockEntity'
import { rest, server } from '../../../mocks/msw/server'
import userEvent from '@testing-library/user-event'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../lib/utils/functions/getEndpoint'
import {
  ENTITY_BUNDLE_V2,
  ENTITY_ID,
  ENTITY_SCHEMA_VALIDATION,
} from '../../../lib/utils/APIConstants'
import {
  ANONYMOUS_PRINCIPAL_ID,
  AUTHENTICATED_PRINCIPAL_ID,
} from '../../../lib/utils/SynapseConstants'
import { EntityType } from '../../../lib/utils/synapseTypes'
import { mockSchemaValidationResults } from '../../../mocks/mockSchema'

const defaultProps: EntityBadgeIconsProps = {
  entityId: MOCK_FILE_ENTITY_ID,
  onUnlink: jest.fn(),
  onUnlinkError: jest.fn(),
  canOpenModal: true,
}

function renderComponent(wrapperProps?: SynapseContextType) {
  render(<EntityBadgeIcons {...defaultProps} />, {
    wrapper: createWrapper(wrapperProps),
  })
}

describe('EntityBadgeIcons tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Renders annotations in a table', async () => {
    renderComponent()
    const icon = await screen.findByTestId('annotations-icon')
    userEvent.hover(icon)
    for (const annotation of Object.entries(
      mockFileEntityBundle.annotations!.annotations,
    )) {
      await screen.findByText(annotation[0])
      await screen.findByText(annotation[1].value.join(', '))
    }
  })
  it('Shows the public icon when anonymous is in the ACL', async () => {
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
              benefactorAcl: {
                ...mockFileEntityBundle.benefactorAcl,
                resourceAccess: [
                  {
                    principalId: AUTHENTICATED_PRINCIPAL_ID, // !
                    accessType: ['READ'],
                  },
                  {
                    principalId: ANONYMOUS_PRINCIPAL_ID, // !
                    accessType: ['READ'],
                  },
                ],
              },
            }),
          )
        },
      ),
    )

    renderComponent()
    await screen.findByTestId('is-public-icon')
  })
  it('Shows the private icon when anonymous is not in the ACL', async () => {
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
              benefactorAcl: {
                ...mockFileEntityBundle.benefactorAcl,
                resourceAccess: [],
              },
            }),
          )
        },
      ),
    )

    renderComponent()
    await screen.findByTestId('is-private-icon')
  })

  it('Shows the local sharing settings icon when the ACL is attached to itself', async () => {
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
              benefactorAcl: {
                ...mockFileEntityBundle.benefactorAcl,
                id: MOCK_FILE_ENTITY_ID, // !
              },
            }),
          )
        },
      ),
    )

    renderComponent()
    await screen.findByTestId('sharing-settings-icon')
  })

  it('Shows the wiki icon', async () => {
    renderComponent()
    await screen.findByTestId('wiki-icon')
  })

  it('Shows the discussion thread icon', async () => {
    renderComponent()
    await screen.findByTestId('discussion-icon')
  })

  describe('Unlink', () => {
    it('Does not show the icon on non-links', () => {
      server.use(
        rest.post(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}${ENTITY_BUNDLE_V2(':entityId')}`,

          async (req, res, ctx) => {
            return res(
              ctx.status(200),
              ctx.json({
                ...mockFileEntityBundle,
                entityType: EntityType.FILE,
                permissions: {
                  canDelete: true,
                },
              }),
            )
          },
        ),
      )
      renderComponent()
      expect(screen.queryByTestId('unlink-icon')).toBeNull()
    })

    it('Does not show the icon if no permission to delete', () => {
      server.use(
        rest.post(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}${ENTITY_BUNDLE_V2(':entityId')}`,

          async (req, res, ctx) => {
            return res(
              ctx.status(200),
              ctx.json({
                ...mockFileEntityBundle,
                entityType: EntityType.LINK,
                permissions: {
                  canDelete: false,
                },
              }),
            )
          },
        ),
      )
      renderComponent()
      expect(screen.queryByTestId('unlink-icon')).toBeNull()
    })

    it('Shows the unlink icon', async () => {
      server.use(
        rest.post(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}${ENTITY_BUNDLE_V2(':entityId')}`,

          async (req, res, ctx) => {
            return res(
              ctx.status(200),
              ctx.json({
                ...mockFileEntityBundle,
                entityType: EntityType.LINK,
                permissions: {
                  canDelete: true,
                },
              }),
            )
          },
        ),
      )
      renderComponent()
      await screen.findByTestId('unlink-icon')
    })
    it('Calls the success callback on success', async () => {
      server.use(
        rest.post(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}${ENTITY_BUNDLE_V2(':entityId')}`,

          async (req, res, ctx) => {
            return res(
              ctx.status(200),
              ctx.json({
                ...mockFileEntityBundle,
                entityType: EntityType.LINK,
                permissions: {
                  canDelete: true,
                },
              }),
            )
          },
        ),
      )

      server.use(
        rest.delete(
          `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_ID(
            ':entityId',
          )}`,

          async (req, res, ctx) => {
            return res(ctx.status(200))
          },
        ),
      )
      renderComponent()
      const unlinkButton = await screen.findByTestId('unlink-icon')

      userEvent.click(unlinkButton)

      await waitFor(() =>
        expect(defaultProps.onUnlink).toBeCalledWith(MOCK_FILE_ENTITY_ID),
      )
    })
    it('Calls the error callback on fail', async () => {
      server.use(
        rest.post(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}${ENTITY_BUNDLE_V2(':entityId')}`,

          async (req, res, ctx) => {
            return res(
              ctx.status(200),
              ctx.json({
                ...mockFileEntityBundle,
                entityType: EntityType.LINK,
                permissions: {
                  canDelete: true,
                },
              }),
            )
          },
        ),
      )

      server.use(
        rest.delete(
          `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_ID(
            ':entityId',
          )}`,

          async (req, res, ctx) => {
            return res(ctx.status(403))
          },
        ),
      )

      renderComponent()
      const unlinkButton = await screen.findByTestId('unlink-icon')

      userEvent.click(unlinkButton)

      await waitFor(() => expect(defaultProps.onUnlinkError).toBeCalled())
    })
  })

  describe('displays schema validity', () => {
    it('Displays that the annotations are valid w.r.t the schema', async () => {
      server.use(
        rest.get(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}${ENTITY_SCHEMA_VALIDATION(':entityId')}`,

          async (req, res, ctx) => {
            return res(ctx.status(200), ctx.json(mockSchemaValidationResults))
          },
        ),
      )

      renderComponent({ isInExperimentalMode: true, utcTime: true })
      const icon = await screen.findByTestId('annotations-icon')
      userEvent.hover(icon)
      await screen.findByText('Valid Annotations')
    })
  })

  it('Displays that the annotations are invalid w.r.t the schema', async () => {
    server.use(
      rest.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ENTITY_SCHEMA_VALIDATION(':entityId')}`,

        async (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              ...mockSchemaValidationResults,
              isValid: false, // !
            }),
          )
        },
      ),
    )

    renderComponent({ isInExperimentalMode: true, utcTime: true })
    const icon = await screen.findByTestId('annotations-icon')
    userEvent.hover(icon)
    await screen.findByText('Invalid Annotations')
  })

  it('Missing annotations with schema', async () => {
    server.use(
      // The entity must have no annotations
      rest.post(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_BUNDLE_V2(
          ':entityId',
        )}`,

        async (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              ...mockFileEntityBundle,
              annotations: {
                annotations: {}, // !
              },
            }),
          )
        },
      ),
      // The entity's annotations are invalid
      rest.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ENTITY_SCHEMA_VALIDATION(':entityId')}`,

        async (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              ...mockSchemaValidationResults,
              isValid: false,
            }),
          )
        },
      ),
    )

    renderComponent({ isInExperimentalMode: true, utcTime: true })
    const icon = await screen.findByTestId('annotations-icon')
    userEvent.hover(icon)
    await screen.findByText('Missing Annotations')
  })
})
