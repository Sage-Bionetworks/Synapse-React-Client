import * as React from 'react'
import { shallow } from 'enzyme'
import MarkdownSynapse, { MarkdownSynapseProps } from '../../../lib/containers/MarkdownSynapse'
import Bookmarks from '../../../lib/containers/widgets/Bookmarks'
import SynapseImage from '../../../lib/containers/widgets/SynapseImage'
import SynapsePlot from '../../../lib/containers/widgets/SynapsePlot'

const createShallowComponent = async (props: MarkdownSynapseProps, disableLifecycleMethods: boolean = false) => {
  const wrapper = await shallow(
    <MarkdownSynapse
      {...props}
    />,
    { disableLifecycleMethods }
  )
  const instance = wrapper.instance() as MarkdownSynapse
  return { wrapper, instance }
}

describe('it performs all functionality', () => {
  const SynapseClient = require('../../../lib/utils/SynapseClient')
  SynapseClient.getWikiAttachmentsFromEntity = jest.fn(() => Promise.resolve(['']))

  describe('renders with basic functionality ', () => {
    // test basic rendering capabilities
    //  - initial render
    //  - componentDidMount
    //  - componentDidUpdate
    const spyOnMath = jest.spyOn(MarkdownSynapse.prototype, 'processMath')
    beforeEach(() => {
      spyOnMath.mockReset()
    })

    it('renders without crashing', async () => {
      const props = { hasSynapseResources: false }
      const { wrapper } = await createShallowComponent(props, true)
      expect(wrapper).toBeDefined()
    })

    it('mounts correctly with markdown already loaded', async () => {
      const markdownPlaceholder = 'loremipsum....'
      const props = {
        markdown: markdownPlaceholder,
        hasSynapseResources: false
      }
      const { wrapper } = await createShallowComponent(props)

      expect(wrapper.state('text')).toEqual(markdownPlaceholder)
      expect(spyOnMath).toHaveBeenCalled()

    })

    it('mounts correctly with markdown NOT already loaded', async () => {
      const props = {
        wikiId: 'xxx', // placeholder
        ownerId: 'xxx' // placeholder
      }

      const markdownPlaceholder = 'text'

      // we only care to mock these functions and ensure they're called
      // Full functionality will get tested in the specific widget tests
      SynapseClient.getEntityWiki = jest.fn(() => { return Promise.resolve({ markdown: markdownPlaceholder }) })

      const spyOnWikiAttachmentsFromEntity = jest.spyOn(MarkdownSynapse.prototype, 'getWikiAttachments')
      const spyOnEntityWiki = jest.spyOn(MarkdownSynapse.prototype, 'getWikiPageMarkdown')

      // mount the component
      const { wrapper } = await createShallowComponent(props)

      // verify functions were called
      expect(wrapper.state('text')).toEqual(markdownPlaceholder)
      expect(spyOnWikiAttachmentsFromEntity).toHaveBeenCalledTimes(1)
      expect(spyOnEntityWiki).toHaveBeenCalledTimes(1)
    })

    it('runs componentDidUpdate correctly ', async () => {
      const props = {
        wikiId: 'xxx', // placeholder
        ownerId: 'xxx' // placeholder
      }

      // we only care to mock these functions and ensure they're called
      // Full functionality will get tested in the specific widget calls
      SynapseClient.getEntityWiki = jest.fn(() => Promise.resolve({ markdown: 'text' }))
      const { wrapper } = await createShallowComponent(props)

      // reset functions to test they were called inside of componentDidUpdate, from setProps
      SynapseClient.getEntityWiki = jest.fn(() => Promise.resolve({ markdown: 'text' }))
      SynapseClient.getWikiAttachmentsFromEntity = jest.fn(() => Promise.resolve(['']))

      await wrapper.setProps({
        token: '123'
      })

      // Note- verifying these API calls were made ensures that
      // getWikiAttachments and getWikiPageMarkdown were called
      expect(SynapseClient.getEntityWiki).toHaveBeenCalledTimes(1)
      expect(SynapseClient.getWikiAttachmentsFromEntity).toHaveBeenCalledTimes(1)
    })
  })

  describe('it renders an image widget', () => {
    it('renders an image from a synapseId ', async () => {
      SynapseClient.getEntityWiki = jest.fn(() =>
        Promise.resolve({
          markdown: '${image?synapseId=syn7809125&align=None&responsive=true}'
        })
      )
      const spyOnRenderImage = jest.spyOn(MarkdownSynapse.prototype, 'renderSynapseImage')
      const { wrapper } = await createShallowComponent({})
      expect(wrapper.find(SynapseImage)).toHaveLength(1)
      expect(spyOnRenderImage).toHaveBeenCalled()
    })

    it('renders an image from a file handleId ', async () => {
      SynapseClient.getEntityWiki = jest.fn(() =>
        Promise.resolve({
          markdown: '${image?fileName=joy%2Esvg&align=None&scale=100&responsive=true&altText=}'
        })
      )
      const spyOnRenderImage = jest.spyOn(MarkdownSynapse.prototype, 'renderSynapseImage')
      const { wrapper } = await createShallowComponent({})
      expect(wrapper.find(SynapseImage)).toHaveLength(1)
      expect(spyOnRenderImage).toHaveBeenCalled()
    })
  })

  describe('it renders a plot widget', () => {
    it('renders the SynapsePlot component', async () => {
      SynapseClient.getEntityWiki = jest.fn(() =>
        Promise.resolve({
          // tslint:disable-next-line:max-line-length
          markdown: '${plot?query=select "Age"%2C "Insol" from syn9872596&title=&type=BAR&barmode=GROUP&horizontal=false&showlegend=true}'
        })
      )
      const spyOnRenderPlot = jest.spyOn(MarkdownSynapse.prototype, 'renderSynapsePlot')
      const { wrapper } = await createShallowComponent({})
      expect(wrapper.find(SynapsePlot)).toHaveLength(1)
      expect(spyOnRenderPlot).toHaveBeenCalled()
    })
  })

  describe('it renders a synapse reference', () => {
    it('renders a synapse reference', async () => {
      // note- a reference is the anchor tag inside the text that links to the bookmark down below,
      // its an inline link
      SynapseClient.getEntityWiki = jest.fn(() => Promise.resolve({ markdown: '${reference?params}' }))
      const { wrapper } = await createShallowComponent({})
      // its unclear why its necessary to use .render() here, see https://github.com/airbnb/enzyme/issues/1233#issuecomment-406605838
      // the only alternative is to perform equality on .html() which is undesirable
      expect(wrapper.render().find('a#ref1')).toHaveLength(1)
    })
  })

  describe('it renders a bookmark', () => {
    it('renders a bookmark', async () => {
      // note - a bookmark is a corresponding citation for an inline reference, it provides a URL for
      // the reference.
      SynapseClient.getEntityWiki = jest.fn(() => Promise.resolve({ markdown: '${reference?text=google.com}' }))
      const { wrapper } = await createShallowComponent({})
      expect(wrapper.find(Bookmarks)).toHaveLength(1)
      expect(wrapper.render().find('a#bookmark0')).toHaveLength(1)
    })
  })

})
