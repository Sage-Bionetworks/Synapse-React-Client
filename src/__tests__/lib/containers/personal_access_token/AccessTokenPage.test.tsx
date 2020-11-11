import { act } from '@testing-library/react'
import { mount } from 'enzyme'
import { AccessTokenPage } from 'lib/containers/personal_access_token/AccessTokenPage'
import { CreateAccessTokenModal } from 'lib/containers/personal_access_token/CreateAccessTokenModal'
import * as React from 'react'
import { resolveAllPending } from 'lib/testutils/EnzymeHelpers'
import { AccessTokenRecordList } from 'lib/utils/synapseTypes/AccessToken/AccessTokenRecord'
import { AccessTokenCard } from 'lib/containers/personal_access_token/AccessTokenCard'

const SynapseClient = require('../../../../lib/utils/SynapseClient')

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
    title: 'A title',
    body: 'A body',
    token: 'abc123',
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('shows the create token modal when the button is clicked and hides when onClose is called', async () => {
    const wrapper = mount(<AccessTokenPage {...props} />)
    await resolveAllPending(wrapper)

    expect(wrapper.find(CreateAccessTokenModal).length).toEqual(0)

    // Click 'Create new token' button
    await act(async () => {
      await wrapper
        .find('.SRC-accessTokenPageCreateButtonContainer button')
        .simulate('click')
    })
    await resolveAllPending(wrapper)

    expect(wrapper.find(CreateAccessTokenModal).length).toEqual(1)

    // close the modal using the prop
    await act(async () => {
      await wrapper.find(CreateAccessTokenModal).prop('onClose')()
    })
    await resolveAllPending(wrapper)

    expect(wrapper.find(CreateAccessTokenModal).length).toEqual(0)
  })

  it('automatically loads the first page of results', async () => {
    SynapseClient.getPersonalAccessTokenRecords = jest
      .fn()
      .mockResolvedValueOnce(mockResultsFirstPage)

    const wrapper = mount(<AccessTokenPage {...props} />)
    await resolveAllPending(wrapper)

    expect(wrapper.find(AccessTokenCard).length).toEqual(
      mockResultsFirstPage.results.length,
    )

    expect(SynapseClient.getPersonalAccessTokenRecords).toHaveBeenCalledTimes(1)
  })

  it('rerenders the list when onCreate is called', async () => {
    // We can verify the rerender by checking if the API is called twice
    SynapseClient.getPersonalAccessTokenRecords = jest
      .fn()
      .mockResolvedValueOnce(mockResultsFirstPage)
      .mockResolvedValueOnce(mockResultsSecondPage)

    const wrapper = mount(<AccessTokenPage {...props} />)
    await resolveAllPending(wrapper)

    // Click the button to render the modal
    await act(async () => {
      await wrapper
        .find('.SRC-accessTokenPageCreateButtonContainer button')
        .simulate('click')
    })
    await resolveAllPending(wrapper)

    await act(async () => {
      await wrapper.find(CreateAccessTokenModal).prop('onCreate')()
    })

    expect(SynapseClient.getPersonalAccessTokenRecords).toHaveBeenCalledTimes(2)
  })

  it('rerenders the list when onDelete is called', async () => {
    // We can verify the rerender by checking if the API is called twice
    SynapseClient.getPersonalAccessTokenRecords = jest
      .fn()
      .mockResolvedValueOnce(mockResultsFirstPage)
      .mockResolvedValueOnce(mockResultsSecondPage)

    const wrapper = mount(<AccessTokenPage {...props} />)
    await resolveAllPending(wrapper)

    // Trigger onDelete on a card.
    await act(async () => {
      await wrapper.find(AccessTokenCard).prop('onDelete')()
    })

    expect(SynapseClient.getPersonalAccessTokenRecords).toHaveBeenCalledTimes(2)
  })

  it('loads a second page and shows the load more button only when there is a next page token', async () => {
    SynapseClient.getPersonalAccessTokenRecords = jest
      .fn()
      .mockResolvedValueOnce(mockResultsFirstPage)
      .mockResolvedValueOnce(mockResultsSecondPage)

    const wrapper = mount(<AccessTokenPage {...props} />)
    await resolveAllPending(wrapper)

    // Verify that we have a 'Load More' button
    expect(
      wrapper.find('button.SRC-loadMoreAccessTokensButton').length,
    ).toEqual(1)

    // Click the button
    await act(async () => {
      wrapper.find('button.SRC-loadMoreAccessTokensButton').simulate('click')
      await resolveAllPending(wrapper)
    })

    expect(wrapper.find(AccessTokenCard).length).toEqual(
      mockResultsFirstPage.results.length +
        mockResultsSecondPage.results.length,
    )

    // No NPT on page two, so there should no longer be a load button
    expect(
      wrapper.find('button.SRC-loadMoreAccessTokensButton').length,
    ).toEqual(0)
    expect(SynapseClient.getPersonalAccessTokenRecords).toHaveBeenCalledTimes(2)
  })

  it('displays an error if one occurs', async () => {
    SynapseClient.getPersonalAccessTokenRecords = jest
      .fn()
      .mockRejectedValueOnce({ error: 'Unknown error occurred' })

    const wrapper = mount(<AccessTokenPage {...props} />)
    await resolveAllPending(wrapper)

    expect(wrapper.find('Error').length).toEqual(1)
  })
})
