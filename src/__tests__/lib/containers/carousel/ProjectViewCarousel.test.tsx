import { mount } from 'enzyme'
import CardCarousel from 'lib/containers/carousel/CardCarousel'
import { ProjectViewCard } from 'lib/containers/home_page/project_view_carousel/ProjectViewCard'
import ProjectViewCarousel from 'lib/containers/home_page/project_view_carousel/ProjectViewCarousel'
import { resolveAllPending } from 'lib/testutils/EnzymeHelpers'
import React from 'react'
import {
  mockQueryResult,
  mockFileHandleResult,
} from '../../../../mocks/mockProjectViewQueryResults'
import SizeMe from 'react-sizeme'
SizeMe.noPlaceholders = true

const SynapseClient = require('../../../../lib/utils/SynapseClient')
SynapseClient.getQueryTableResults = jest
  .fn()
  .mockResolvedValue(mockQueryResult)

SynapseClient.getFiles = jest.fn().mockResolvedValue(mockFileHandleResult)

describe('basic functionality', () => {
  const props = {
    entityId: 'syn123',
    token: 'abc123',
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('retrieves project data and images and inserts cards into carousel', async () => {
    const wrapper = mount(<ProjectViewCarousel {...props} />)
    await resolveAllPending(wrapper)

    expect(SynapseClient.getQueryTableResults).toHaveBeenCalledTimes(1)
    expect(SynapseClient.getFiles).toHaveBeenCalledTimes(1)
    await resolveAllPending(wrapper)

    expect(wrapper.find(CardCarousel).length).toEqual(1)
    expect(wrapper.find(ProjectViewCard).length).toBeGreaterThan(0)

    // Check that the currently selected card (card 0) contains an image element with the correct src
    expect(
      wrapper.find('.CardCarousel__SelectedCard img').at(0).prop('src'),
    ).toEqual(mockFileHandleResult.requestedFiles[0].preSignedURL)
  })
})
