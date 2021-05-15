import { EvaluationRound } from '../../../../lib/utils/synapseTypes'
import { SynapseClient } from '../../../../lib/utils'
import JestMockPromise from 'jest-mock-promise'
import { mount } from 'enzyme'
import { EvaluationRoundEditorList } from '../../../../lib/containers/evaluation_queues/EvaluationRoundEditorList'
import React from 'react'
import { ErrorBanner } from '../../../../lib/containers/ErrorBanner'

describe('test EvaluationRoundEditorList', () => {
  const fakeAccessToken = 'asdfasdfasdf'
  const evaluationId = '123123123'
  const nextPageToken = 'firstPage'

  let evaluationRoundsList: EvaluationRound[]
  let mockGetEvaulationsList: jest.Mock

  beforeEach(() => {
    evaluationRoundsList = [
      {
        id: '4',
        etag: '7250762f-287f-4d35-a1ed-3d373940c28e',
        evaluationId: evaluationId,
        roundStart: '2020-10-23T01:14:00.000Z',
        roundEnd: '2020-10-31T07:00:00.000Z',
        limits: [
          { limitType: 'TOTAL', maximumSubmissions: 999 },
          { limitType: 'DAILY', maximumSubmissions: 123 },
          { limitType: 'MONTHLY', maximumSubmissions: 456 },
        ],
      },
      {
        id: '1',
        etag: '563b5276-8aa0-4d97-a7c5-f1661c8dd47f',
        evaluationId: evaluationId,
        roundStart: '2020-10-31T07:00:00.000Z',
        roundEnd: '2020-11-18T08:00:00.000Z',
        limits: [],
      },
      {
        id: '5',
        etag: 'b6fa2bf8-e181-44df-9baa-8902fc29aa1c',
        evaluationId: evaluationId,
        roundStart: '2020-11-24T08:00:00.000Z',
        roundEnd: '2020-12-17T08:00:00.000Z',
        limits: [
          { limitType: 'DAILY', maximumSubmissions: 123213 },
          { limitType: 'WEEKLY', maximumSubmissions: 3123 },
        ],
      },
    ]

    mockGetEvaulationsList = jest.fn()
    const spyFetchEvaluationList = jest.spyOn(
      SynapseClient,
      'getEvaluationRoundsList',
    )
    spyFetchEvaluationList.mockImplementation(mockGetEvaulationsList)
    mockGetEvaulationsList
      .mockReturnValueOnce(
        new JestMockPromise(resolve => {
          resolve({
            page: evaluationRoundsList.slice(0, 2),
            nextPageToken: nextPageToken,
          })
        }),
      )
      //no next page token on the second page since it is done
      .mockReturnValueOnce(
        new JestMockPromise(resolve => {
          resolve({ page: evaluationRoundsList.slice(2) })
        }),
      )
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('error fetching page', () => {
    mockGetEvaulationsList.mockReset()
    const error = new TypeError('you got a new error!')
    mockGetEvaulationsList.mockReturnValue(
      new JestMockPromise((resolve, reject) => {
        reject(error)
      }),
    )

    const wrapper = mount(
      <EvaluationRoundEditorList
        accessToken={fakeAccessToken}
        evaluationId={evaluationId}
        utc={true}
      />,
    )

    expect(wrapper.find('.evaluation-round-editor').exists()).toBe(false)
    expect(wrapper.find(ErrorBanner).exists()).toBe(true)
  })

  it('fetched pages', () => {
    const wrapper = mount(
      <EvaluationRoundEditorList
        accessToken={fakeAccessToken}
        evaluationId={evaluationId}
        utc={true}
      />,
    )

    expect(mockGetEvaulationsList).toBeCalledWith(
      evaluationId,
      { nextPageToken: undefined },
      fakeAccessToken,
    )
    expect(mockGetEvaulationsList).toBeCalledWith(
      evaluationId,
      { nextPageToken: nextPageToken },
      fakeAccessToken,
    )

    expect(wrapper.find('.evaluation-round-editor')).toHaveLength(3)
    expect(wrapper.find(ErrorBanner).exists()).toBe(false)
  })

  it('add round button', () => {
    const wrapper = mount(
      <EvaluationRoundEditorList
        accessToken={fakeAccessToken}
        evaluationId={evaluationId}
        utc={true}
      />,
    )

    expect(wrapper.find('.evaluation-round-editor')).toHaveLength(3)
    expect(wrapper.find(ErrorBanner).exists()).toBe(false)

    wrapper.find('button.add-round-button').simulate('click')

    expect(wrapper.find('.evaluation-round-editor')).toHaveLength(4)
    expect(wrapper.find(ErrorBanner).exists()).toBe(false)
  })
})
