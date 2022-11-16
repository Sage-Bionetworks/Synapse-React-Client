import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SubmissionPage from './SubmissionPage'
import { mswDecorator } from 'msw-storybook-addon'
import { rest } from 'msw'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../utils/functions/getEndpoint'
import {
  ACCESS_REQUIREMENT_BY_ID,
  ACCESS_REQUIREMENT_WIKI_PAGE_KEY,
  DATA_ACCESS_SUBMISSION_BY_ID,
} from '../../utils/APIConstants'
import { mockSubmissions } from '../../../mocks/dataaccess/MockSubmission'
import { mockManagedACTAccessRequirement } from '../../../mocks/mockAccessRequirements'
import { handlers } from '../../../mocks/msw/handlers'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Synapse/Governance/SubmissionPage',
  component: SubmissionPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [mswDecorator],
} as ComponentMeta<typeof SubmissionPage>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SubmissionPage> = args => (
  <SubmissionPage {...args} />
)

export const Demo = Template.bind({})

Demo.parameters = {
  msw: {
    handlers: [
      ...handlers,
      // Return submission based on ID
      rest.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${DATA_ACCESS_SUBMISSION_BY_ID(':id')}`,

        async (req, res, ctx) => {
          const submission = mockSubmissions.find(
            submission => req.params.id === submission.id,
          )
          return res(ctx.status(200), ctx.json(submission))
        },
      ),

      // Return a mocked access requirement
      rest.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ACCESS_REQUIREMENT_BY_ID(':id')}`,

        async (req, res, ctx) => {
          return res(ctx.status(200), ctx.json(mockManagedACTAccessRequirement))
        },
      ),
      rest.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ACCESS_REQUIREMENT_WIKI_PAGE_KEY(':id')}`,

        async (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              wikiPageId: 123,
              ownerObjectId: mockManagedACTAccessRequirement.id,
              ownerObjectType: 'ACCESS_REQUIREMENT',
            }),
          )
        },
      ),
    ],
  },
}
Demo.args = {
  submissionId: 1,
}
