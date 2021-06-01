import * as React from 'react'
import { mount } from 'enzyme'
import MarkdownSynapse, {
  MarkdownSynapseProps,
} from '../../../lib/containers/MarkdownSynapse'
import Bookmarks from '../../../lib/containers/widgets/Bookmarks'
import SynapseImage from '../../../lib/containers/widgets/SynapseImage'
import SynapseVideo from '../../../lib/containers/widgets/SynapseVideo'
import { delay } from '../../../lib/utils/SynapseClient'
import { _TIME_DELAY } from '../../../lib/utils/SynapseConstants'
import { SynapseTestContext } from '../../../mocks/MockSynapseContext'
import {
  SynapseContextProvider,
  SynapseContextType,
} from '../../../lib/utils/SynapseContext'
import { render, screen } from '@testing-library/react'

jest.mock('../../../lib/containers/widgets/SynapsePlot', () => {
  return {
    __esModule: true,
    default: function MockSynapsePlot() {
      return <div role="figure"></div>
    },
  }
})

jest.mock('../../../lib/containers/widgets/SynapseImage', () => {
  return {
    __esModule: true,
    default: function MockSynapseImage() {
      return <div role="img"></div>
    },
  }
})

// shallow doesn't await all nested promises resolve inside component...

const createMountedComponent = async (props: MarkdownSynapseProps) => {
  const wrapper = mount<MarkdownSynapse>(
    <MarkdownSynapse
      ownerId="mock_owner_id"
      wikiId="mock_wiki_id"
      {...props}
    />,
    {
      wrappingComponent: SynapseTestContext,
    },
  )
  await delay(_TIME_DELAY)
  const instance = wrapper.instance()
  return { wrapper, instance }
}

const renderComponent = async (
  props: MarkdownSynapseProps,
  synapseContext?: SynapseContextType,
) => {
  const componentUnderTest = (
    <MarkdownSynapse ownerId="mock_owner_id" wikiId="mock_wiki_id" {...props} />
  )

  const withContext = synapseContext ? (
    <SynapseContextProvider synapseContext={synapseContext}>
      {componentUnderTest}
    </SynapseContextProvider>
  ) : (
    <SynapseTestContext>{componentUnderTest}</SynapseTestContext>
  )

  render(withContext)
  await delay(_TIME_DELAY)
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
      const { wrapper } = await createMountedComponent(props)
      expect(wrapper).toBeDefined()
    })

    it('mounts correctly with markdown already loaded', async () => {
      const val = 'loremipsum....'
      const markdownPlaceholder = `# ${val}`
      const props: MarkdownSynapseProps = {
        markdown: markdownPlaceholder,
      }
      await renderComponent(props)

      expect(() => screen.getByRole('heading')).not.toThrow()
      expect(() => screen.getByText(val)).not.toThrow()
    })

    it('mounts correctly with markdown NOT already loaded', async () => {
      const props = {
        wikiId: 'xxx', // placeholder
        ownerId: 'xxx', // placeholder
      }

      const text = 'text'
      const markdownPlaceholder = `## ${text}`
      const mockGetEntityWiki = jest
        .fn()
        .mockResolvedValue({ markdown: markdownPlaceholder })
      // we only care to mock these functions and ensure they're called
      // Full functionality will get tested in the specific widget tests
      SynapseClient.getEntityWiki = mockGetEntityWiki
      // mount the component
      await renderComponent(props)
      // verify functions were called
      expect(() => screen.getByRole('heading')).not.toThrow()
      expect(() => screen.getByText(text)).not.toThrow()
      expect(mockGetEntityWiki).toHaveBeenCalledTimes(1)
      expect(mockGetWikiAttachments).toHaveBeenCalledTimes(1)
    })

    it('renders correctly inline', async () => {
      const markdownPlaceholder = `[linkname](synapse.org)`
      const props: MarkdownSynapseProps = {
        markdown: markdownPlaceholder,
        renderInline: true,
      }
      await renderComponent(props)
      screen.getByRole('link')
    })

    it('runs componentDidUpdate on context change ', async () => {
      const props = {
        wikiId: 'xxx', // placeholder
        ownerId: 'xxx', // placeholder
      }

      const mockGetEntityWiki = jest
        .fn()
        .mockResolvedValue({ markdown: 'text' })
      SynapseClient.getEntityWiki = mockGetEntityWiki
      await renderComponent(props)
      await renderComponent(props, { accessToken: 'new-token' })
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
      }

      await renderComponent(props)
      screen.getByTitle('video frame')
    })

    it('do not render a video widget without token', async () => {
      const mockGetEntityWiki = jest.fn().mockResolvedValue({
        markdown: '${video?mp4SynapseId=syn21714374}',
      })
      SynapseClient.getEntityWiki = mockGetEntityWiki
      const props: MarkdownSynapseProps = {
        ownerId: '_',
      }
      await renderComponent(props, { accessToken: undefined })
      expect(() => screen.getByTitle('video frame')).toThrowError()
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
      }

      await renderComponent(props)
      expect(screen.getByTitle('video frame').getAttribute('width')).toBe(
        `${width}`,
      )
      expect(screen.getByTitle('video frame').getAttribute('height')).toBe(
        `${height}`,
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
      await renderComponent(props)
      screen.getByRole('img')
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
      await renderComponent(props)
      screen.getByRole('img')
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
      const props: MarkdownSynapseProps = {
        ownerId: '_',
        wikiId: '_',
      }
      await renderComponent(props)
      screen.getByRole('figure')
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
      const { wrapper } = await createMountedComponent({})
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
      const props: MarkdownSynapseProps = {
        ownerId: '_',
        wikiId: '_',
      }

      await renderComponent(props)
      screen.getByRole('button')
    })
  })

  describe('it renders markdown correctly ', () => {
    it('works with header and a link ', async () => {
      const { wrapper } = await createMountedComponent({
        markdown: '# header [text](https://synapse.org)',
      })
      const expectedValue = `<div class="markdown"><span><h1 id="SRC-header-1" toc="true"> header  <a href="https://synapse.org" target="_blank"> text </a></h1> 
 </span></div>`
      expect(wrapper.html()).toEqual(expectedValue)
    })
    it('works with a br statement and loose text', async () => {
      const { wrapper } = await createMountedComponent({
        markdown: 'some more free \n# header\nloose text',
      })
      const expectedValue = `<div class="markdown"><span><p> some more free </p> \n <h1 id="SRC-header-1" toc="true"> header </h1> \n <p> loose text </p> \n </span></div>`
      expect(wrapper.html()).toEqual(expectedValue)
    })
    it('works with two inline widgets', async () => {
      const { wrapper } = await createMountedComponent({
        markdown:
          '${buttonlink?text=sometext&url=#/Help/How%20It%20Works&highlight=true}${buttonlink?text=APPLY&url=#/Apply&highlight=true} ',
      })
      const expectedValue = `<div class="markdown"><span><p><span class="bootstrap-4-backport"><a href="#/Help/How It Works" class="pill-xl  btn btn-secondary">sometext</a></span><span class="bootstrap-4-backport"><a href="#/Apply" class="pill-xl  btn btn-secondary">APPLY</a></span></p> \n </span></div>`
      expect(wrapper.html()).toEqual(expectedValue)
    })
  })
})
