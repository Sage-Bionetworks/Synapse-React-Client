import * as React from 'react'
import { SynapseClient, SynapseConstants } from '../utils'
import { FileHandleResults, WikiPage } from '../utils/synapseTypes/'
import UserCard from './UserCard'
import Bookmarks from './widgets/Bookmarks'
import SynapseImage from './widgets/SynapseImage'
import SynapsePlot from './widgets/SynapsePlot'
import SynapseVideo from './widgets/SynapseVideo'
import { ObjectType } from '../utils/synapseTypes/WikiPageKey'
import { ErrorBanner } from './ErrorBanner'
import { SynapseClientError } from '../utils/SynapseClient'
import { Button } from 'react-bootstrap'

const TOC_CLASS = {
  1: 'toc-indent1',
  2: 'toc-indent2',
  3: 'toc-indent3',
  4: 'toc-indent4',
  5: 'toc-indent5',
  6: 'toc-indent6',
}

declare var katex: any

declare var markdownitSynapse: any
declare var markdownit: any
declare var markdownitSub: any
declare var markdownitSup: any
declare var markdownitCentertext: any
declare var markdownitSynapseHeading: any
declare var markdownitSynapseTable: any
declare var markdownitStrikethroughAlt: any
declare var markdownitContainer: any
declare var markdownitEmphasisAlt: any
declare var markdownitInlineComments: any
declare var markdownitBr: any
declare var sanitizeHtml: any

declare var markdownitMath: any

export type MarkdownSynapseProps = {
  token?: string
  ownerId?: string
  wikiId?: string
  markdown?: string
  renderInline?: boolean
  objectType?: ObjectType
}
const md = markdownit({ html: true })

type MarkdownSynapseState = {
  md: any
  data: Partial<WikiPage>
  fileHandles?: FileHandleResults
  error: SynapseClientError | undefined
  isLoading: boolean
}
/**
 * Basic Markdown functionality for Synapse, supporting Images/Plots/References/Bookmarks/buttonlinks
 *
 * @class Markdown
 * @extends {React.Component}
 */
export default class MarkdownSynapse extends React.Component<
  MarkdownSynapseProps,
  MarkdownSynapseState
> {
  public markupRef: React.RefObject<HTMLInputElement>

  /**
   * Creates an instance of Markdown.
   * @param {*} props
   */
  constructor(props: MarkdownSynapseProps) {
    super(props)
    // markdownitSynapse wraps around markdownit object and uses its own dependencies
    markdownitSynapse.init_markdown_it(
      md,
      markdownitSub,
      markdownitSup,
      markdownitCentertext,
      markdownitSynapseHeading,
      markdownitSynapseTable,
      markdownitStrikethroughAlt,
      markdownitContainer,
      markdownitEmphasisAlt,
      markdownitInlineComments,
      markdownitBr,
    )

    const mathSuffix = ''
    // Update the internal markdownit object with the wrapped synapse object
    md.use(markdownitSynapse, mathSuffix, 'https://synapse.org').use(
      markdownitMath,
      mathSuffix,
    )
    const data: any = {}
    if (this.props.markdown) {
      data.markdown = this.props.markdown
    }
    this.state = {
      md,
      error: undefined,
      fileHandles: undefined,
      data,
      isLoading: true,
    }
    this.markupRef = React.createRef()
    this.handleLinkClicks = this.handleLinkClicks.bind(this)
    // handle widgets and math markdown
    this.renderMarkdown = this.renderMarkdown.bind(this)
    this.recursiveRender = this.recursiveRender.bind(this)
    this.processMath = this.processMath.bind(this)
    // handle init calls to get wiki related items
    this.getWikiAttachments = this.getWikiAttachments.bind(this)
    this.getWikiPageMarkdown = this.getWikiPageMarkdown.bind(this)
    // handle rendering widgets
    this.renderWidget = this.renderWidget.bind(this)
    this.renderSynapseButton = this.renderSynapseButton.bind(this)
    this.renderSynapseImage = this.renderSynapseImage.bind(this)
    this.renderVideo = this.renderVideo.bind(this)
    this.renderSynapsePlot = this.renderSynapsePlot.bind(this)
    this.renderSynapseTOC = this.renderSynapseTOC.bind(this)
    this.createHTML = this.createHTML.bind(this)
    this.addBookmarks = this.addBookmarks.bind(this)
    this.addIdsToReferenceWidgets = this.addIdsToReferenceWidgets.bind(this)
    this.addIdsToTocWidgets = this.addIdsToTocWidgets.bind(this)
  }

  public componentWillUnmount() {
    // @ts-ignore TODO: find better documentation on typescript/react event params
    this.markupRef.current &&
      // @ts-ignore TODO: find better documentation on typescript/react event params
      this.markupRef.current.removeEventListener('click', this.handleLinkClicks)
  }

  // Manually handle clicks to anchor tags where the scrollto isn't handled by page hash
  public handleLinkClicks(event: React.MouseEvent<HTMLElement>) {
    const genericElement = event.target as HTMLElement
    if (genericElement.tagName === 'A' || genericElement.tagName === 'BUTTON') {
      const anchor = event.target as HTMLAnchorElement
      if (anchor.id.substring(0, 3) === 'ref') {
        event.preventDefault()
        // its a reference, so we scroll to the appropriate bookmark
        const referenceNumber = Number(event.currentTarget.id.substring(3)) // e.g. ref2 => '2'
        const goTo = this.markupRef.current!.querySelector(
          `#bookmark${referenceNumber}`,
        )
        try {
          goTo!.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
          })
        } catch (e) {
          console.log('error on scroll', e)
        }
      } else if (
        event.currentTarget.id !== null &&
        anchor.getAttribute('data-anchor')
      ) {
        event.preventDefault()
        // handle table of contents widget
        const idOfContent = anchor.getAttribute('data-anchor')
        const goTo = this.markupRef.current!.querySelector(`#${idOfContent}`)
        try {
          goTo!.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
          })
        } catch (e) {
          console.log('error on scroll', e)
        }
      }
    }
  }

  /**
   * Given input text, generate markdown object to be passed onto inner html of some container.
   * @param {String} markdown The text being written in plain markdown
   * @returns {Object} Dictionary to be passed into dangerouslySetInnerHTML with markdown text
   */
  public createHTML(markdown?: string) {
    if (!markdown) {
      return { __html: '' }
    }
    // Note - renderInline parses out any block level elements contained in the markdown
    const initText = this.props.renderInline
      ? this.state.md.renderInline(markdown)
      : this.state.md.render(markdown)
    const cleanText = sanitizeHtml(initText, {
      allowedAttributes: {
        a: ['href', 'target'],
        button: ['class'],
        div: ['class'], // PORTALS-1450: including 'style' in the allow-list will cause string values to come through, which crashes the app when used (because it uses jsx).
        h1: ['toc'],
        h2: ['toc'],
        h3: ['toc'],
        h4: ['toc'],
        h5: ['toc'],
        h6: ['toc'],
        li: ['class'],
        ol: ['class'],
        span: ['*'],
        table: ['class'],
        th: ['colspan'],
        thead: ['class'],
        ul: ['class'],
        img: ['src', 'alt'],
      },
      allowedTags: [
        'span',
        'code',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'p',
        'b',
        'i',
        'em',
        'strong',
        'a',
        'id',
        'table',
        'tr',
        'td',
        'tbody',
        'th',
        'thead',
        'button',
        'div',
        'img',
        'image',
        'ol',
        'ul',
        'li',
        'svg',
        'g',
        'br',
        'hr',
        'summary',
        'details',
        'strong',
      ],
    })
    return { __html: cleanText }
  }

  /**
   * Find all math identified elements of the form [id^=\"mathjax-\"]
   * (e.g. <dom element id="mathjax-10"> text </dom element>)
   * and transform them to their math markedown equivalents
   */
  public processMath() {
    if (!this.markupRef.current) {
      return
    }
    // use regex to grab all elements
    const mathExpressions = this.markupRef.current.querySelectorAll<HTMLElement>(
      '[id^="mathjax-"]',
    )
    // go through all obtained elements and transform them with katex
    mathExpressions.forEach(element => {
      element.textContent &&
        katex.render(element.textContent, element, {
          // @ts-ignore
          output: 'html',
          throwOnError: false,
        })
    })
  }
  /**
   * Process all the corresponding bookmark tags of the references made throughout the page
   *
   * @memberof MarkdownSynapse
   */
  public addBookmarks() {
    markdownitSynapse.resetFootnotes()
    this.createHTML(this.state.data.markdown)
    const footnotesHtml = this.createHTML(markdownitSynapse.footnotes()).__html
    if (footnotesHtml.length > 0) {
      return <Bookmarks footnotes={footnotesHtml} />
    }
    return
  }

  /**
   * Get wiki page markdown and file attachment handles
   */
  public async getWikiPageMarkdown() {
    const { ownerId, wikiId, token, objectType } = this.props
    if (!ownerId && !wikiId) {
      return
    }
    try {
      const wikiPage = await SynapseClient.getEntityWiki(
        token,
        ownerId,
        wikiId,
        objectType,
      )
      try {
        const fileHandles = await this.getWikiAttachments(
          wikiId ? wikiId : wikiPage.id,
        )
        this.setState({
          data: wikiPage,
          fileHandles,
          error: undefined,
        })
      } catch (fileHandlesErr) {
        console.error('fileHandlesErr = ', fileHandlesErr)
      }
    } catch (err) {
      console.error('Error on wiki markdown load\n', err)
      this.setState({
        error: err,
      })
    }
  }
  public async getWikiAttachments(wikiId: string) {
    const { token, ownerId, objectType } = this.props
    if (!ownerId) {
      console.error(
        'Cannot get wiki attachments without ownerId on Markdown Component',
      )
      return undefined
    }
    return await SynapseClient.getWikiAttachmentsFromEntity(
      token,
      ownerId,
      wikiId,
      objectType,
    )
      .then(data => {
        return data
      })
      .catch(err => {
        console.error('Error on wiki attachment load ', err)
        return undefined
      })
  }

  public addIdsToReferenceWidgets(text: string) {
    const referenceRegex = /<span id="wikiReference.*?<span data-widgetparams.*?span>/g
    let referenceCount = 1

    return text.replace(referenceRegex, () => {
      // replace all reference tags with id's of the form id="ref<number>"" that we can read onClick
      const current = referenceCount
      referenceCount += 1
      return `<a href="" id="ref${current}">[${current}]</a>`
    })
  }

  public addIdsToTocWidgets(text: string) {
    const tocId = 'SRC-header-'
    let tocIdCount = 1
    const TOC_HEADER_REGEX = /<h[1-6] toc="true">.*<\/h[1-6]>/gm

    return text.replace(TOC_HEADER_REGEX, (match: string) => {
      // replace with id of the form id="toc" so we can read them with onclick events
      const curTocId = tocIdCount
      tocIdCount += 1
      const matchWithId = `${match.substring(
        0,
        3,
      )} id="${tocId}${curTocId}"${match.substring(3)}`
      return matchWithId
    })
  }

  /**
   * The 'main' method of this class that process all the markdown and transforms it to the appropriate
   * Synapse widgets.
   *
   * @returns JSX of the markdown into widgets
   * @memberof MarkdownSynapse
   */
  public renderMarkdown() {
    // create initial markup
    let markup = this.createHTML(this.state.data.markdown).__html
    // process reference widgets
    markup = this.addIdsToReferenceWidgets(markup)
    // process table of contents widgets
    markup = this.addIdsToTocWidgets(markup)
    if (markup.length > 0) {
      const domParser = new DOMParser()
      const document = domParser.parseFromString(markup, 'text/html')
      return <>{this.recursiveRender(document.body, markup)}</>
    }
    return
  }

  /**
   * recursiveRender will render react tree from HTML tree
   *
   * @param {Node} element This will be either a text Node or an HTMLElement
   * @param {string} markdown The original markdown, its kept as a special case for the table of contents widget
   * @returns {*}
   * @memberof MarkdownSynapse
   */
  public recursiveRender(element: Node, markdown: string): any {
    /*
      Recursively render the html tree created from the markdown, there are a few cases:
      1. element is Node and is text in which case it is simply rendered
      2. element is an HTMLElement and is: a self closing tag, has no children (e.g. <br>), or its a synapse widget and is 
      rendered accordingly
      3. element is an HTMLElement and has children so we loop through its childNodes, recurively render those, and then render its own tag
      as the parent of those child nodes. Note - childNodes was specifically chosen over .children because text Nodes
      would not come through .children
    */
    if (element.nodeType === Node.TEXT_NODE) {
      // case 1.
      return <> {element.textContent} </>
    } else if (
      element.nodeType === Node.ELEMENT_NODE &&
      element instanceof HTMLElement
    ) {
      const tagName =
        element.tagName.toLowerCase() === 'body'
          ? 'span'
          : element.tagName.toLowerCase()
      const widgetParams = element.getAttribute('data-widgetparams')
      if (widgetParams) {
        // case 2
        // process widget
        return this.processHTMLWidgetMapping(widgetParams, markdown)
      }
      // manually add on props, depending on what comes through the markdown their could
      // be unforseen issues with attributes being misnamed according to what react will respect
      // e.g. class instead of className
      const attributes = element.attributes
      const props = {}
      for (let i = 0; i < attributes.length; i++) {
        let name = ''
        let value = ''
        const attribute = attributes.item(i)
        if (attribute) {
          name = attribute.name
          value = attribute.value
        }
        if (name && value) {
          props[name] = value
        }
      }
      if (element.childNodes.length === 0) {
        // case 2
        // e.g. self closing tag like <br/> or <img>
        return React.createElement(tagName, props)
      }
      // case 3
      // recursively render children
      const children = Array.from(element.childNodes).map((el, index) => {
        return (
          <React.Fragment key={index}>
            {this.recursiveRender(el, markdown)}
          </React.Fragment>
        )
      })
      // Render tagName as parent element of the children below
      return React.createElement(tagName, props, <>{children}</>)
    }
  }

  /**
   *  When the markdown string is transfered over the network certain characters get transformed,
   * this does a simple transformation back to the original user's string.
   *
   * @param {string} xml
   * @returns
   * @memberof MarkdownSynapse
   */
  public decodeXml(xml: string) {
    const escapedOneToXmlSpecialMap = {
      '&amp;': '&',
      '&gt;': '>',
      '&lt;': '<',
      '&quot;': '"',
    }
    return xml.replace(/(&quot;|&lt;|&gt;|&amp;)/g, (str, item) => {
      return escapedOneToXmlSpecialMap[item]
    })
  }

  /**
   * Given widgetMap renders it in a React component (or originalMarkup in special cases.)
   *
   * @param {string} widgetMatch The synapse widget to be rendered
   * @param {string} originalMarkup The original markup text, this is a special case for widgets that
   * are html specific.
   * @returns JSX of the widget to render
   * @memberof MarkdownSynapse
   */
  public processHTMLWidgetMapping(
    widgetParams: string,
    originalMarkup: string,
  ) {
    // General workflow -
    //   1. Capture widget parameters
    //   2. Transform any widget xml parameters to standard text
    //   3. Split those parameters into a map
    //   4. Render that widget based on its parameters

    // steps 1,2
    const decodedWidgetParams = this.decodeXml(widgetParams)

    // decodedWidgetParams look like {<widget>?param1=xxx&param2=yyy}
    const questionIndex = decodedWidgetParams.indexOf('?')
    if (questionIndex === -1) {
      // e.g. toc is passed, there are no params
      return this.renderWidget(decodedWidgetParams, {}, originalMarkup)
    }
    const widgetType = decodedWidgetParams.substring(0, questionIndex)
    const widgetparamsMapped = {}
    // map out params and their values
    decodedWidgetParams
      .substring(questionIndex + 1)
      .split('&')
      .forEach(keyPair => {
        let [key, value] = keyPair.split('=')
        value = decodeURIComponent(value)
        widgetparamsMapped[key] = value
      })
    return this.renderWidget(widgetType, widgetparamsMapped, originalMarkup)
  }

  /**
   *  Given widgetType renders the apppropriate widget
   *
   * @param {string} widgetType The type of synapse widget. (e.g. 'image', 'plot')
   * @param {*} widgetparamsMapped The parameters for this widget
   * @param {string} originalMarkup The original markup.
   * @returns
   * @memberof MarkdownSynapse
   */
  public renderWidget(
    widgetType: string,
    widgetparamsMapped: any,
    originalMarkup: string,
  ) {
    // we make keys out of the widget params
    const key = JSON.stringify(widgetparamsMapped)
    widgetparamsMapped.reactKey = key

    switch (widgetType) {
      case 'buttonlink':
        return this.renderSynapseButton(widgetparamsMapped)
      case 'image':
        return this.renderSynapseImage(widgetparamsMapped)
      case 'plot':
        return this.renderSynapsePlot(widgetparamsMapped)
      case 'toc':
        return this.renderSynapseTOC(originalMarkup)
      case 'badge':
        return this.renderUserBadge(widgetparamsMapped)
      case 'video':
      case 'vimeo':
      case 'youtube':
        return this.renderVideo(widgetparamsMapped)
      default:
        return
    }
  }

  public renderSynapseButton(widgetparamsMapped: any) {
    let buttonClasses = 'pill-xl '
    const { align = '', highlight = '' } = widgetparamsMapped
    const alignLowerCase = align.toLowerCase()
    if (alignLowerCase === 'left') {
      buttonClasses += 'floatLeft '
    }
    if (alignLowerCase === 'right') {
      buttonClasses += 'floatright '
    }
    const buttonVariant =
      highlight === 'true' ? 'primary' : 'light-primary-base'
    if (alignLowerCase === 'center') {
      return (
        <div
          className="bootstrap-4-backport"
          key={widgetparamsMapped.reactKey}
          style={{ textAlign: 'center' }}
        >
          <Button
            href={widgetparamsMapped.url}
            className={buttonClasses}
            variant={buttonVariant}
          >
            {widgetparamsMapped.text}
          </Button>
        </div>
      )
    }
    return (
      <div className="bootstrap-4-backport">
        <Button
          href={widgetparamsMapped.url}
          className={buttonClasses}
          variant={buttonVariant}
        >
          {widgetparamsMapped.text}
        </Button>
      </div>
    )
  }
  public renderSynapsePlot(widgetparamsMapped: any) {
    return (
      <SynapsePlot
        key={widgetparamsMapped.reactKey}
        token={this.props.token}
        ownerId={this.props.ownerId}
        wikiId={this.props.wikiId || this.state.data.id}
        widgetparamsMapped={widgetparamsMapped}
      />
    )
  }

  public renderVideo(widgetparamsMapped: any) {
    const { token } = this.props

    return <SynapseVideo token={token} params={widgetparamsMapped} />
  }

  public renderSynapseImage(widgetparamsMapped: any) {
    const { reactKey } = widgetparamsMapped
    if (widgetparamsMapped.fileName) {
      if (!this.state.fileHandles) {
        // ensure files are loaded
        return
      }
      // if file name is attached then the fileHandle ID is located
      // in this wiki's file attachment list
      return (
        <SynapseImage
          params={widgetparamsMapped}
          key={reactKey}
          token={this.props.token}
          fileName={widgetparamsMapped.fileName}
          wikiId={this.props.wikiId || this.state.data.id}
          fileResults={this.state.fileHandles.list}
        />
      )
    }
    if (widgetparamsMapped.synapseId) {
      // otherwise this image's fileHandle ID is not located
      // in the file attachment list and will be loaded first
      return (
        <SynapseImage
          params={widgetparamsMapped}
          key={reactKey}
          token={this.props.token}
          synapseId={widgetparamsMapped.synapseId}
        />
      )
    }
    return
  }
  public renderSynapseTOC(originalMarkup: string) {
    const elements: any[] = []
    const TOC_HEADER_REGEX_WITH_ID = /<h([1-6]) id="(.*)" .*toc="true">(.*)<\/h[1-6]>/gm
    let text = ''
    originalMarkup.replace(TOC_HEADER_REGEX_WITH_ID, (p1, p2, p3, p4) => {
      text += p4
      elements.push(
        <div key={p4}>
          <a className={`link ${TOC_CLASS[Number(p2)]}`} data-anchor={p3}>
            {p4}
          </a>
        </div>,
      )
      return ''
    })
    return <div key={text}>{elements}</div>
  }

  public renderUserBadge(widgetparamsMapped: any) {
    return (
      <UserCard
        key={JSON.stringify(widgetparamsMapped)}
        size={SynapseConstants.SMALL_USER_CARD}
        alias={widgetparamsMapped.alias}
      />
    )
  }

  public async componentDidMount() {
    if (this.state.data.markdown) {
      this.setState({ isLoading: false })
      return
    }
    // we use this.markupRef.current && because in testing environment refs aren't defined
    // @ts-ignore
    this.markupRef.current &&
      // @ts-ignore
      this.markupRef.current!.addEventListener('click', this.handleLinkClicks)
    // unpack and set default value if not specified
    // get wiki attachments
    await this.getWikiPageMarkdown()
    this.processMath()
    this.setState({ isLoading: false })
  }

  // on component update find and re-render the math/widget items accordingly
  public async componentDidUpdate(prevProps: MarkdownSynapseProps) {
    let shouldUpdate = this.props.token !== prevProps.token
    shouldUpdate = shouldUpdate || this.props.ownerId !== prevProps.ownerId
    shouldUpdate = shouldUpdate || this.props.wikiId !== prevProps.wikiId

    // we have to carefully update the component so it doesn't encounter an infinite loop
    if (shouldUpdate) {
      await this.getWikiPageMarkdown()
    }
    this.processMath()
  }

  public render() {
    const { renderInline, token } = this.props
    const { isLoading, error } = this.state

    if (error) {
      return <ErrorBanner token={token} error={error} />
    }
    const bookmarks = this.addBookmarks()
    const content = (
      <>
        {isLoading && <span className="spinner" />}
        {this.renderMarkdown()}
        {bookmarks && <div>{this.addBookmarks()}</div>}
      </>
    )
    if (renderInline) {
      return (
        <span className="markdown markdown-inline" ref={this.markupRef}>
          {content}
        </span>
      )
    }
    return (
      <div className="markdown" ref={this.markupRef}>
        {content}
      </div>
    )
  }
}
