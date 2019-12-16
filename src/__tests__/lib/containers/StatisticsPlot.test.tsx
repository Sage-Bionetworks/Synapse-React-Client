import * as React from 'react'
import { shallow } from 'enzyme'
import StatisticsPlot, {
  StatisticsPlotProps,
} from '../../../lib/containers/StatisticsPlot'
import {
  ProjectFilesStatisticsRequest,
  ProjectFilesStatisticsResponse,
  MonthlyFilesStatistics,
} from 'lib/utils/synapseTypes/Statistics'
const SynapseClient = require('../../../lib/utils/SynapseClient')

const token: string = '123444'
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

const createShallowComponent = async (
  props: StatisticsPlotProps,
  disableLifecycleMethods: boolean = false,
) => {
  const wrapper = await shallow<StatisticsPlot>(<StatisticsPlot {...props} />, {
    disableLifecycleMethods,
  })

  const instance = wrapper.instance()
  return { wrapper, instance }
}

describe('basic tests', () => {
  const props: StatisticsPlotProps = {
    token,
    request: projectFilesStatsRequest,
  }

  beforeEach(() => {
    SynapseClient.getProjectStatistics = jest.fn(() =>
      Promise.resolve(projectFilesStatsResponse),
    )
  })

  it('displays plot', async () => {
    const { wrapper, instance } = await createShallowComponent(props)
    await instance.componentDidMount()
    expect(wrapper).toBeDefined()
    expect(wrapper.find(StatisticsPlot)).toBeDefined()
  })

  it('not shown when statistics unavailable', async () => {
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
    SynapseClient.getProjectStatistics = jest.fn(() =>
      Promise.resolve(emptyProjectFilesStatsResponse),
    )
    const { wrapper, instance } = await createShallowComponent(props)
    await instance.componentDidMount()
    expect(wrapper).toBeDefined()
    expect(wrapper.find(StatisticsPlot)).toHaveLength(0)
  })
})
