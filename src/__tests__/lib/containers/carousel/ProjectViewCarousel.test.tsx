import { mount } from 'enzyme'
import Carousel from '../../../../lib/containers/Carousel'
import { ProjectViewCard } from '../../../../lib/containers/home_page/project_view_carousel/ProjectViewCard'
import ProjectViewCarousel, {
  ProjectViewCarouselProps,
} from '../../../../lib/containers/home_page/project_view_carousel/ProjectViewCarousel'
import { resolveAllPending } from '../../../../lib/testutils/EnzymeHelpers'
import React from 'react'
import { mockQueryResult } from '../../../../mocks/query/mockProjectViewQueryResults'
import SizeMe from 'react-sizeme'
import { SynapseTestContext } from '../../../../mocks/MockSynapseContext'
SizeMe.noPlaceholders = true

const SynapseClient = require('../../../../lib/utils/SynapseClient')
SynapseClient.getQueryTableResults = jest
  .fn()
  .mockResolvedValue(mockQueryResult)

const PRESIGNED_URL = 'https://some-url-that-resolves.toSomeImage/image.jpeg'

SynapseClient.getWikiPageKeyForEntity = jest
  .fn()
  .mockResolvedValue({ wikiPageId: 12345 })
SynapseClient.getPresignedUrlForWikiAttachment = jest
  .fn()
  .mockResolvedValue(PRESIGNED_URL)

describe('basic functionality', () => {
  const props: ProjectViewCarouselProps = {
    entityId: 'syn123',
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('retrieves project data and images and inserts cards into carousel', async () => {
    const wrapper = mount(<ProjectViewCarousel {...props} />, {
      wrappingComponent: SynapseTestContext,
    })
    await resolveAllPending(wrapper)

    expect(SynapseClient.getQueryTableResults).toHaveBeenCalledTimes(1)

    // There are 5 results, but only 4 have an image specified
    expect(SynapseClient.getWikiPageKeyForEntity).toHaveBeenCalledTimes(4)
    expect(
      SynapseClient.getPresignedUrlForWikiAttachment,
    ).toHaveBeenCalledTimes(4)

    await resolveAllPending(wrapper)

    expect(wrapper.find(Carousel).length).toEqual(1)
    expect(wrapper.find(ProjectViewCard).length).toBeGreaterThan(0)

    // Check that the currently selected card (card 0) contains an image element with the correct src
    expect(
      wrapper.find('.SRC-Carousel__SelectedCard img').at(0).prop('src'),
    ).toEqual(PRESIGNED_URL)
  })
})
