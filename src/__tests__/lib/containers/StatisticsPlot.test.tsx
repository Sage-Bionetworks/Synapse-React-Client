import { render, waitFor } from '@testing-library/react'
import React from 'react'
import { SynapseClient } from '../../../lib'
import StatisticsPlot, {
  StatisticsPlotProps,
} from '../../../lib/containers/StatisticsPlot'
import { createWrapper } from '../../../lib/testutils/TestingLibraryUtils'
import {
  MonthlyFilesStatistics,
  ProjectFilesStatisticsRequest,
  ProjectFilesStatisticsResponse,
} from '../../../lib/utils/synapseTypes/'

const projectFilesStatsRequest: ProjectFilesStatisticsRequest = {
  concreteType:
    'org.sagebionetworks.repo.model.statistics.ProjectFilesStatisticsRequest',
  objectId: 'syn12345',
  fileUploads: true,
  fileDownloads: true,
}
const fileDownloads: MonthlyFilesStatistics = {
  lastUpdatedOn: '2019-10-01T00:15:12.541Z',
  months: [
    {
      rangeStart: '2018-10-01T00:00:00.000Z',
      rangeEnd: '2018-11-01T00:00:00.000Z',
      filesCount: 10,
      usersCount: 0,
    },
    {
      rangeStart: '2018-11-01T00:00:00.000Z',
      rangeEnd: '2018-12-01T00:00:00.000Z',
      filesCount: 20,
      usersCount: 0,
    },
    {
      rangeStart: '2019-01-01T00:00:00.000Z',
      rangeEnd: '2019-01-01T00:00:00.000Z',
      filesCount: 30,
      usersCount: 0,
    },
  ],
}
const fileUploads: MonthlyFilesStatistics = {
  lastUpdatedOn: '2019-10-01T00:15:12.541Z',
  months: [
    {
      rangeStart: '2018-10-01T00:00:00.000Z',
      rangeEnd: '2018-11-01T00:00:00.000Z',
      filesCount: 1,
      usersCount: 0,
    },
    {
      rangeStart: '2018-11-01T00:00:00.000Z',
      rangeEnd: '2018-12-01T00:00:00.000Z',
      filesCount: 2,
      usersCount: 0,
    },
    {
      rangeStart: '2019-01-01T00:00:00.000Z',
      rangeEnd: '2019-01-01T00:00:00.000Z',
      filesCount: 3,
      usersCount: 0,
    },
  ],
}

const projectFilesStatsResponse: ProjectFilesStatisticsResponse = {
  objectId: 'syn12345',
  concreteType:
    'org.sagebionetworks.repo.model.statistics.ProjectFilesStatisticsResponse',
  fileDownloads,
  fileUploads,
}

const renderComponent = (props: StatisticsPlotProps) => {
  return render(<StatisticsPlot {...props} />, { wrapper: createWrapper() })
}

const mockGetProjectStatistics = jest.spyOn(
  SynapseClient,
  'getProjectStatistics',
)

describe('StatisticsPlot', () => {
  const props: StatisticsPlotProps = {
    request: projectFilesStatsRequest,
  }

  beforeEach(() => {
    mockGetProjectStatistics.mockResolvedValue(projectFilesStatsResponse)
  })

  test('displays plot', async () => {
    const { container } = renderComponent(props)

    await waitFor(() =>
      expect(container.querySelector('.plot-container.plotly')).not.toBeNull(),
    )
  })

  test('not shown when statistics unavailable', () => {
    const emptyProjectFilesStatsResponse: ProjectFilesStatisticsResponse = {
      objectId: 'syn12345',
      concreteType:
        'org.sagebionetworks.repo.model.statistics.ProjectFilesStatisticsResponse',
      fileDownloads: {
        lastUpdatedOn: '2019-10-01T00:15:12.541Z',
        months: [],
      },
      fileUploads: {
        lastUpdatedOn: '2019-10-01T00:15:12.541Z',
        months: [],
      },
    }
    mockGetProjectStatistics.mockResolvedValue(emptyProjectFilesStatsResponse)
    const { container } = renderComponent(props)
    expect(container.querySelector('.plot-container.plotly')).toBeNull()
  })
})
