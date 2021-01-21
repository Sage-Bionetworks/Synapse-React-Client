import * as React from 'react'
import { shallow } from 'enzyme'
import MarkdownSynapse, {
  MarkdownSynapseProps,
} from '../../../lib/containers/MarkdownSynapse'
import Bookmarks from '../../../lib/containers/widgets/Bookmarks'
import SynapseImage from '../../../lib/containers/widgets/SynapseImage'
import SynapseVideo from '../../../lib/containers/widgets/SynapseVideo'
import SynapsePlot from '../../../lib/containers/widgets/SynapsePlot'
import { delay } from '../../../lib/utils/SynapseClient'
import { _TIME_DELAY } from '../../../lib/utils/SynapseConstants'

// shallow doesn't await all nested promises resolve inside component...

const createShallowComponent = async (props: MarkdownSynapseProps) => {
  const wrapper = await shallow<MarkdownSynapse>(
    <MarkdownSynapse
      ownerId="mock_owner_id"
      wikiId="mock_wiki_id"
      {...props}
    />,
  )
  await delay(_TIME_DELAY)
  const instance = wrapper.instance()
  return { wrapper, instance }
}

describe('it performs all functionality', () => {
  const SynapseClient = require('../../../lib/utils/SynapseClient')
  const mockGetWikiAttachments = jest.fn().mockResolvedValue([''])
  SynapseClient.getWikiAttachmentsFromEntity = jest.fn(mockGetWikiAttachments)
  beforeEach(() => {
    mockGetWikiAttachments.mockClear()
  })

  describe('renders with basic functionality ', () => {
    // test basic rendering capabilities
    //  - initial render
    //  - componentDidMount
    //  - componentDidUpdate
    const spyOnMath = jest.spyOn(MarkdownSynapse.prototype, 'processMath')
    beforeEach(() => {
      spyOnMath.mockReset()
      mockGetWikiAttachments.mockClear()
    })

    it('renders without crashing', async () => {
      const markdownPlaceholder = 'loremipsum....'
      const props = { markdown: markdownPlaceholder }
      const { wrapper } = await createShallowComponent(props)
      expect(wrapper).toBeDefined()
    })

    it('mounts correctly with markdown already loaded', async () => {
      const val = 'loremipsum....'
      const markdownPlaceholder = `# ${val}`
      const props: MarkdownSynapseProps = {
        markdown: markdownPlaceholder,
      }
      const { wrapper } = await createShallowComponent(props)
      expect(wrapper.state().data.markdown).toEqual(markdownPlaceholder)
      expect(wrapper.html().indexOf('h1')).toBeGreaterThan(-1)
      expect(wrapper.html().indexOf(val)).toBeGreaterThan(-1)
    })

    it('mounts correctly with markdown NOT already loaded', async () => {
      const props = {
        wikiId: 'xxx', // placeholder
        ownerId: 'xxx', // placeholder
      }

      const markdownPlaceholder = '## text'
      const mockGetEntityWiki = jest
        .fn()
        .mockResolvedValue({ markdown: markdownPlaceholder })
      // we only care to mock these functions and ensure they're called
      // Full functionality will get tested in the specific widget tests
      SynapseClient.getEntityWiki = mockGetEntityWiki
      // mount the component
      const { wrapper } = await createShallowComponent(props)
      // verify functions were called
      expect(wrapper.state().data.markdown).toEqual(markdownPlaceholder)
      expect(mockGetEntityWiki).toHaveBeenCalledTimes(1)
      expect(mockGetWikiAttachments).toHaveBeenCalledTimes(1)
    })

    it('renders correctly inline', async () => {
      const markdownPlaceholder = `[linkname](synapse.org)`
      const props: MarkdownSynapseProps = {
        markdown: markdownPlaceholder,
        renderInline: true,
      }
      const { wrapper } = await createShallowComponent(props)
      expect(wrapper.state().data.markdown).toEqual(markdownPlaceholder)
      expect(wrapper.html().includes('<p>')).toBeFalsy()
      expect(wrapper.html().includes('<a href=')).toBeTruthy()
    })

    it('runs componentDidUpdate correctly ', async () => {
      const props = {
        wikiId: 'xxx', // placeholder
        ownerId: 'xxx', // placeholder
      }

      const mockGetEntityWiki = jest
        .fn()
        .mockResolvedValue({ markdown: 'text' })
      SynapseClient.getEntityWiki = mockGetEntityWiki
      const { wrapper } = await createShallowComponent(props)
      await wrapper.setProps({
        token: '123',
      })
      // await again for componentDidUpdate to run
      await delay(_TIME_DELAY)
      // Note- verifying these API calls were made ensures that
      // getWikiAttachments and getWikiPageMarkdown were called
      expect(mockGetEntityWiki).toHaveBeenCalledTimes(2)
      expect(mockGetWikiAttachments).toHaveBeenCalledTimes(2)
    })
  })

  describe('it renders a video widget', () => {
    it('renders a video widget given a synapseID', async () => {
      const mockGetEntityWiki = jest.fn().mockResolvedValue({
        // markdown: '${youtube?videoId=Bey4XXJAqS8}',
        markdown: '${video?mp4SynapseId=syn21714374}',
      })
      SynapseClient.getEntityWiki = mockGetEntityWiki
      const props: MarkdownSynapseProps = {
        ownerId: '_',
        token: '_',
      }

      const { wrapper } = await createShallowComponent(props)
      expect(wrapper.find(SynapseVideo)).toHaveLength(1)
    })

    it('do not render a video widget without token', async () => {
      const mockGetEntityWiki = jest.fn().mockResolvedValue({
        markdown: '${video?mp4SynapseId=syn21714374}',
      })
      SynapseClient.getEntityWiki = mockGetEntityWiki
      const props: MarkdownSynapseProps = {
        ownerId: '_',
        token: undefined,
      }
      const { wrapper } = await createShallowComponent(props)
      expect(wrapper.find(SynapseVideo).html()).toMatch(
        '<div><p>You will need to<button class="SRC-SIGN-IN-CLASS sign-in-btn default',
      )
    })

    it('renders a video widget with a given height and width', async () => {
      const height = 300
      const width = 400
      const givenMarkdown = '${youtube?videoId=Bey4XXJAqS8&height='
        .concat(`${height}`)
        .concat('&width=')
        .concat(`${width}`)
        .concat('}')

      const mockGetEntityWiki = jest.fn().mockResolvedValue({
        markdown: givenMarkdown,
      })
      SynapseClient.getEntityWiki = mockGetEntityWiki
      const props: MarkdownSynapseProps = {
        ownerId: '_',
        token: '_',
      }

      const { wrapper } = await createShallowComponent(props)

      expect(wrapper.find(SynapseVideo).html()).toMatch(
        `<div><div><iframe title="video frame" width="${width}" height="${height}"></iframe></div></div>`,
      )
    })
  })

  describe('it renders an image widget', () => {
    const mockGetEntity = jest.fn().mockResolvedValue({})
    const mockGetFiles = jest.fn().mockResolvedValue({})
    SynapseClient.getEntity = mockGetEntity
    SynapseClient.getFiles = mockGetFiles

    it('renders an image from a synapseId ', async () => {
      const mockGetEntityWiki = jest.fn().mockResolvedValue({
        markdown: '${image?synapseId=syn7809125&align=None&responsive=true}',
      })
      SynapseClient.getEntityWiki = mockGetEntityWiki
      const props: MarkdownSynapseProps = {
        ownerId: '_',
        wikiId: '_',
      }
      const { wrapper } = await createShallowComponent(props)
      expect(wrapper.find(SynapseImage)).toHaveLength(1)
    })

    it('renders an image from a file handleId ', async () => {
      const mockGetEntityWiki = jest.fn().mockResolvedValue({
        markdown:
          '${image?fileName=joy%2Esvg&align=None&scale=100&responsive=true&altText=}',
      })
      SynapseClient.getEntityWiki = mockGetEntityWiki
      const spyOnRenderImage = jest.spyOn(
        MarkdownSynapse.prototype,
        'renderSynapseImage',
      )
      const props: MarkdownSynapseProps = {
        ownerId: '_',
        wikiId: '_',
      }
      const { wrapper } = await createShallowComponent(props)
      expect(wrapper.find(SynapseImage)).toHaveLength(1)
      expect(spyOnRenderImage).toHaveBeenCalled()
    })
  })

  describe('it renders a plot widget', () => {
    it('renders the SynapsePlot component', async () => {
      SynapseClient.getEntityWiki = jest.fn(() =>
        Promise.resolve({
          markdown:
            '${plot?query=select "Age"%2C "Insol" from syn9872596&title=&type=BAR&barmode=GROUP&horizontal=false&showlegend=true}',
        }),
      )
      const spyOnRenderPlot = jest.spyOn(
        MarkdownSynapse.prototype,
        'renderSynapsePlot',
      )
      const { wrapper } = await createShallowComponent({})
      expect(wrapper.find(SynapsePlot)).toHaveLength(1)
      expect(spyOnRenderPlot).toHaveBeenCalled()
    })
  })

  describe('it renders a synapse reference', () => {
    it('renders a synapse reference', async () => {
      // note- a reference is the anchor tag inside the text that links to the bookmark down below,
      // its an inline link
      SynapseClient.getEntityWiki = jest.fn(() =>
        Promise.resolve({ markdown: '${reference?params}' }),
      )
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
      SynapseClient.getEntityWiki = jest.fn(() =>
        Promise.resolve({ markdown: '${reference?text=google.com}' }),
      )
      const { wrapper } = await createShallowComponent({})
      expect(wrapper.find(Bookmarks)).toHaveLength(1)
      expect(wrapper.render().find('button#bookmark0')).toHaveLength(1)
    })
  })

  describe('it renders markdown correctly ', () => {
    it('works with header and a link ', async () => {
      const { wrapper } = await createShallowComponent({
        markdown: '# header [text](https://synapse.org)',
      })
      const expectedValue = `<div class="markdown"><span><h1 id="SRC-header-1" toc="true"> header  <a href="https://synapse.org" target="_blank"> text </a></h1> 
 </span></div>`
      expect(wrapper.html()).toEqual(expectedValue)
    })
    it('works with a br statement and loose text', async () => {
      const { wrapper } = await createShallowComponent({
        markdown: 'some more free \n# header\nloose text',
      })
      const expectedValue = `<div class="markdown"><span><p> some more free </p> \n <h1 id="SRC-header-1" toc="true"> header </h1> \n <p> loose text </p> \n </span></div>`
      expect(wrapper.html()).toEqual(expectedValue)
    })
    it('works with two inline widgets', async () => {
      const { wrapper } = await createShallowComponent({
        markdown:
          '${buttonlink?text=sometext&url=#/Help/How%20It%20Works&highlight=true}${buttonlink?text=APPLY&url=#/Apply&highlight=true} ',
      })
      const expectedValue = `<div class="markdown"><span><p><span class="bootstrap-4-backport"><a href="#/Help/How It Works" class="pill-xl  btn btn-primary">sometext</a></span><span class="bootstrap-4-backport"><a href="#/Apply" class="pill-xl  btn btn-primary">APPLY</a></span></p> \n </span></div>`
      expect(wrapper.html()).toEqual(expectedValue)
    })
  })
})
