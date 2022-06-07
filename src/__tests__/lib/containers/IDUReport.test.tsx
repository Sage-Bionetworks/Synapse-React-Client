import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { useGetApprovedSubmissionInfoInfinite } from '../../../lib/utils/hooks/SynapseAPI/useGetApprovedSubmissionInfo'
import { SynapseTestContext } from '../../../mocks/MockSynapseContext'
import { SubmissionInfo } from '../../../lib/utils/synapseTypes/SubmissionInfo'
import IDUReport from '../../../lib/containers/IDUReport'

jest.mock(
  '../../../lib/utils/hooks/SynapseAPI/useGetApprovedSubmissionInfo',
  () => {
    return {
      useGetApprovedSubmissionInfoInfinite: jest.fn(),
    }
  },
)

const mockFetchNextPage = jest.fn()
const mockUseGetApprovedSubmissionInfoInfinite =
  useGetApprovedSubmissionInfoInfinite as jest.Mock

const page1: Partial<SubmissionInfo>[] = [
  {
    institution: 'Mars University',
    projectLead: 'Prof. Farnsworth',
    intendedDataUseStatement: 'My test requires an IDU',
    modifiedOn: '2021-09-15T00:01:45.223Z',
    submittedBy: '345424',
  },
]

const page2: Partial<SubmissionInfo>[] = [
  {
    institution: 'Mars University',
    projectLead: 'Wong',
    intendedDataUseStatement: 'My test requires another IDU',
    modifiedOn: '2021-09-15T00:01:47.223Z',
    submittedBy: '2',
  },
]
function renderComponent() {
  return render(
    <SynapseTestContext>
      <IDUReport accessRequirementId="2000" />
    </SynapseTestContext>,
  )
}

describe('IDUReport tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockUseGetApprovedSubmissionInfoInfinite.mockReturnValue({
      data: {
        pages: [
          {
            results: page1,
            nextPageToken: '50a0',
          },
          {
            results: page2,
            nextPageToken: null,
          },
        ],
        pageParams: [],
      },
      fetchNextPage: mockFetchNextPage,
      hasNextPage: false,
      isLoading: false,
      isSuccess: true,
    })
  })
  it('loads more when inView', async () => {
    renderComponent()

    const submissionInfo1 = await screen.findAllByText('Prof. Farnsworth')
    expect(submissionInfo1).toHaveLength(1)
    
    mockAllIsIntersecting(true)
    
    const submissionInfo2 = await screen.findAllByText('Wong')
    expect(submissionInfo2).toHaveLength(1)
  })
})
