import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import AccessRequirementList from './AccessRequirementList'
import { rest } from 'msw'
import { MOCK_REPO_ORIGIN } from '../../utils/functions/getEndpoint'
import {
  ACCESS_APPROVAL,
  ACCESS_REQUIREMENT_DATA_ACCESS_REQUEST_FOR_UPDATE,
  ACCESS_REQUIREMENT_RESEARCH_PROJECT_FOR_UPDATE,
  ACCESS_REQUIREMENT_STATUS,
  DATA_ACCESS_REQUEST,
  DATA_ACCESS_REQUEST_SUBMISSION,
  ENTITY_ACCESS_REQUIREMENTS,
  FILE_HANDLE_BATCH,
  RESEARCH_PROJECT,
} from '../../utils/APIConstants'
import {
  mockManagedACTAccessRequirement,
  mockSelfSignAccessRequirement,
} from '../../../mocks/mockAccessRequirements'
import mockFileEntity from '../../../mocks/entity/mockFileEntity'
import { getHandlers } from '../../../mocks/msw/handlers'
import {
  SynapseContextConsumer,
  SynapseContextProvider,
} from '../../utils/SynapseContext'
import {
  AccessApproval,
  AccessRequirement,
  AccessRequirementStatus,
  ApprovalState,
  BatchFileResult,
  PaginatedResults,
  RequestInterface,
  SubmissionState,
} from '../../utils/synapseTypes'
import { MOCK_USER_ID } from '../../../mocks/user/mock_user_profile'
import { ResearchProject } from '../../utils/synapseTypes/ResearchProject'
import { mockFileHandle } from '../../../mocks/mock_file_handle'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Governance/AccessRequirementList',
  component: AccessRequirementList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    isAuthenticated: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
  },
} as ComponentMeta<typeof AccessRequirementList>

const Template: ComponentStory<typeof AccessRequirementList> = args => (
  <SynapseContextConsumer>
    {context => (
      <SynapseContextProvider
        synapseContext={{
          ...context,
          accessToken: args.isAuthenticated
            ? context.accessToken || 'fake token'
            : undefined,
        }}
      >
        <p>
          First, use the StackChanger component to switch to the Mocked Data
          stack
        </p>

        <AccessRequirementList {...args} />
      </SynapseContextProvider>
    )}
  </SynapseContextConsumer>
)

type AccessRequirementAndStatus = {
  accessRequirement: AccessRequirement
  status: AccessRequirementStatus
}

function getAccessRequirementHandlers(
  accessRequirements: AccessRequirementAndStatus[],
) {
  return [
    rest.get(
      `${MOCK_REPO_ORIGIN}${ENTITY_ACCESS_REQUIREMENTS(':entityId')}`,

      async (req, res, ctx) => {
        let status = 200
        let response: PaginatedResults<AccessRequirement> = {
          results: accessRequirements.map(ar => ar.accessRequirement),
          totalNumberOfResults: accessRequirements.length,
        }
        return res(ctx.status(status), ctx.json(response))
      },
    ),
    rest.get(
      `${MOCK_REPO_ORIGIN}${ACCESS_REQUIREMENT_STATUS(':id')}`,

      async (req, res, ctx) => {
        const matchingArAndStatus = accessRequirements.find(
          accessRequirements =>
            req.params.id ===
            accessRequirements.accessRequirement.id.toString(),
        )
        const response = matchingArAndStatus?.status
        const status = response ? 200 : 404
        return res(ctx.status(status), ctx.json(response))
      },
    ),
  ]
}

export const NoRequirements = Template.bind({})

NoRequirements.parameters = {
  msw: {
    handlers: [
      ...getHandlers(MOCK_REPO_ORIGIN),
      ...getAccessRequirementHandlers([]),
    ],
  },
}

NoRequirements.args = {
  entityId: mockFileEntity.id,
  renderAsModal: true,
}

export const HasMetRequirements = Template.bind({})

HasMetRequirements.parameters = {
  msw: {
    handlers: [
      ...getHandlers(MOCK_REPO_ORIGIN),
      ...getAccessRequirementHandlers([
        {
          accessRequirement: mockManagedACTAccessRequirement,
          status: {
            accessRequirementId: mockManagedACTAccessRequirement.id.toString(),
            concreteType:
              'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
            isApproved: true,
            expiredOn: '2040-06-01T00:00:00.000Z',
            currentSubmissionStatus: SubmissionState.APPROVED,
          },
        },
      ]),
    ],
  },
}

HasMetRequirements.args = {
  entityId: mockFileEntity.id,
  renderAsModal: true,
}

export const HasUnmetRequirements = Template.bind({})

HasUnmetRequirements.parameters = {
  msw: {
    handlers: [
      ...getHandlers(MOCK_REPO_ORIGIN),
      ...getAccessRequirementHandlers([
        {
          accessRequirement: mockManagedACTAccessRequirement,
          status: {
            accessRequirementId: mockManagedACTAccessRequirement.id.toString(),
            concreteType:
              'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
            isApproved: false,
          },
        },
        {
          accessRequirement: mockSelfSignAccessRequirement,
          status: {
            accessRequirementId: mockSelfSignAccessRequirement.id.toString(),
            concreteType:
              'org.sagebionetworks.repo.model.SelfSignAccessRequirement',
            isApproved: false,
          },
        },
      ]),
      rest.post(
        `${MOCK_REPO_ORIGIN}${ACCESS_APPROVAL}`,
        async (req, res, ctx) => {
          const response: AccessApproval = {
            submitterId: MOCK_USER_ID.toString(),
            accessorId: MOCK_USER_ID.toString(),
            state: ApprovalState.APPROVED,
          }
          return res(ctx.status(201), ctx.json(response))
        },
      ),

      rest.post(
        `${MOCK_REPO_ORIGIN}${RESEARCH_PROJECT}`,
        async (req, res, ctx) => {
          return res(ctx.status(201), ctx.json({}))
        },
      ),
      rest.get(
        `${MOCK_REPO_ORIGIN}${ACCESS_REQUIREMENT_RESEARCH_PROJECT_FOR_UPDATE(
          ':id',
        )}`,
        async (req, res, ctx) => {
          const response: ResearchProject = {
            id: '1981321',
            accessRequirementId: req.params.id.toString(),
            institution: 'Black Mesa Research Facility',
            projectLead: 'Gordon Freeman',
            intendedDataUseStatement:
              'We plan to use this data to investigate the properties of antimatter. Our findings will be published in' +
              ' a peer-reviewed journal, and derivative data will be shared on Synapse.',
          }
          return res(ctx.status(200), ctx.json(response))
        },
      ),
      rest.get(
        `${MOCK_REPO_ORIGIN}${ACCESS_REQUIREMENT_DATA_ACCESS_REQUEST_FOR_UPDATE(
          ':id',
        )}`,
        async (req, res, ctx) => {
          const response: RequestInterface = {
            accessRequirementId: req.params.id,
            concreteType: 'org.sagebionetworks.repo.model.dataaccess.Request',
          }
          return res(ctx.status(200), ctx.json(response))
        },
      ),
      rest.post(
        `${MOCK_REPO_ORIGIN}${DATA_ACCESS_REQUEST}`,
        async (req, res, ctx) => {
          return res(
            ctx.status(201),
            ctx.json({
              id: '61561981',
              etag: '0000',
            }),
          )
        },
      ),
      rest.post(
        `${MOCK_REPO_ORIGIN}${DATA_ACCESS_REQUEST_SUBMISSION(':id')}`,
        async (req, res, ctx) => {
          return res(ctx.status(201), ctx.json({}))
        },
      ),
      rest.post(
        `${MOCK_REPO_ORIGIN}${FILE_HANDLE_BATCH}`,
        async (req, res, ctx) => {
          const response: BatchFileResult = {
            requestedFiles: [
              {
                fileHandleId: mockFileHandle.id,
                fileHandle: mockFileHandle,
              },
            ],
          }
          return res(ctx.status(201), ctx.json(response))
        },
      ),
    ],
  },
}

HasUnmetRequirements.args = {
  entityId: mockFileEntity.id,
  renderAsModal: true,
}
