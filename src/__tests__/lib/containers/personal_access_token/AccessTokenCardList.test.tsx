import { mount, ReactWrapper } from 'enzyme'
import * as React from 'react'
import { act } from 'react-dom/test-utils'
import {
  AccessTokenCardList,
  AccessTokenCardListProps,
} from 'lib/containers/personal_access_token/AccessTokenCardList'
import { AccessTokenCard } from 'lib/containers/personal_access_token/AccessTokenCard'
import { AccessTokenRecordList } from 'lib/utils/synapseTypes/AccessToken/AccessTokenRecord'

const SynapseClient = require('../../../../lib/utils/SynapseClient')

const createMountedComponent = (props: AccessTokenCardListProps) => {
  const wrapper = mount<React.FunctionComponent<AccessTokenCardListProps>>(
    <AccessTokenCardList {...props} />,
  )

  return { wrapper }
}

const resolveAllPending = async (
  wrapper: ReactWrapper<
    React.FunctionComponent<AccessTokenCardListProps>,
    any,
    React.Component<{}, {}, any>
  >,
) => {
  await act(
    async (): Promise<any> => {
      await Promise.resolve(wrapper)
      await new Promise(resolve => setImmediate(resolve))
      wrapper.update()
      return wrapper
    },
  )
}

const mockResultsFirstPage: AccessTokenRecordList = {
  results: [
    {
      id: '45',
      userId: '3350396',
      scopes: ['view', 'openid'],
      userInfoClaims: {
        is_certified: null,
        team: {
          values: ['273957'],
        },
        userid: null,
        email: null,
      },
      name: 'My active access token',
      createdOn: '2020-08-23T14:59:19.073Z',
      lastUsed: '2020-10-25T14:59:19.073Z',
      state: 'ACTIVE',
    },
  ],
  nextPageToken: 'npt',
}

const mockResultsSecondPage: AccessTokenRecordList = {
  results: [
    {
      id: '46',
      userId: '3350396',
      scopes: ['view', 'modify', 'download'],
      userInfoClaims: {
        is_certified: null,
        team: {
          values: ['273957'],
        },
        userid: null,
        email: null,
      },
      name: 'My expired access token',
      createdOn: '2020-03-23T14:59:19.073Z',
      lastUsed: '2020-04-23T14:59:19.073Z',
      state: 'EXPIRED',
    },
  ],
  nextPageToken: undefined,
}

describe('basic functionality', () => {
  const props = {
    token: 'abc123',
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('automatically loads the first page of results', async () => {
    SynapseClient.getPersonalAccessTokenRecords = jest
      .fn()
      .mockResolvedValueOnce(mockResultsFirstPage)

    const { wrapper } = createMountedComponent(props)
    await resolveAllPending(wrapper)

    expect(wrapper.find(AccessTokenCard).length).toEqual(
      mockResultsFirstPage.results.length,
    )

    expect(SynapseClient.getPersonalAccessTokenRecords).toHaveBeenCalledTimes(1)
  })

  it('loads a second page and shows the load more button only when there is a next page token', async () => {
    SynapseClient.getPersonalAccessTokenRecords = jest
      .fn()
      .mockResolvedValueOnce(mockResultsFirstPage)
      .mockResolvedValueOnce(mockResultsSecondPage)

    let { wrapper } = createMountedComponent(props)
    await resolveAllPending(wrapper)

    expect(wrapper.find('button').length).toEqual(2)
    // Click the 'load more' button
    wrapper.find('button').at(1).simulate('click')
    wrapper = wrapper.update()
    await resolveAllPending(wrapper)

    expect(wrapper.find(AccessTokenCard).length).toEqual(
      mockResultsFirstPage.results.length +
        mockResultsSecondPage.results.length,
    )

    expect(wrapper.find('button').length).toEqual(2) // just delete buttons for each card
    expect(SynapseClient.getPersonalAccessTokenRecords).toHaveBeenCalledTimes(2)
  })

  it('displays an error if one occurs', async () => {
    SynapseClient.getPersonalAccessTokenRecords = jest
      .fn()
      .mockRejectedValueOnce({ error: 'Unknown error occurred' })

    let { wrapper } = createMountedComponent(props)
    await resolveAllPending(wrapper)
    expect(wrapper.find('Error').length).toEqual(1)
  })
})
