import * as PropTypes from 'prop-types'
import * as React from 'react'
import { FileHandleResults } from '../utils/jsonResponses/FileHandleResults'
import { WikiPage } from '../utils/jsonResponses/WikiPage'
import { SynapseClient } from '../utils/'
import Bookmarks from './widgets/Bookmarks'
import SynapseImage from './widgets/SynapseImage'
import SynapsePlot from './widgets/SynapsePlot'
import {
  uuidv4
} from '../utils/modules'
// import UserBadge from './UserBadge'
const TOC_CLASS = {
  1: 'toc-indent1',
  2: 'toc-indent2',
  3: 'toc-indent3',
  4: 'toc-indent4',
  5: 'toc-indent5',
  6: 'toc-indent6'
}
const TOC_HEADER_REGEX = /<h[1-6] toc="true">.*<\/h[1-6]>/gm
const TOC_HEADER_REGEX_WITH_ID = /<h([1-6]) id="(.*)" .*toc="true">(.*)<\/h[1-6]>/gm
type MarkdownSynapseProps = {
  errorMessageView?: JSX.Element;
  token?: string;
  ownerId?: string;
  wikiId?: string;
  markdown?: string;
  hasSynapseResources?: boolean;
  updateLoadState?: any;
}
const md = markdownit({ html: true })

type MarkdownSynapseState = {
  md: any;
  text: string;
  fileHandles?: FileHandleResults;
  newOwnerId: string;
  newWikiId: string;
  isLoggedIn: boolean;
  errorMessage: string;
}
/**
 * Basic vanilla Markdownit functionality with latex support, synapse image support, plotly support
 *
 * @class Markdown
 * @extends {React.Component}
 */
class MarkdownSynapse extends React.Component<
  MarkdownSynapseProps,
  MarkdownSynapseState
> {
  public static propTypes = {
    errorMessageView: PropTypes.element,
    hasSynapseResources: PropTypes.bool,
    markdown: PropTypes.string,
    ownerId: PropTypes.string,
    token: PropTypes.string,
    updateLoadState: PropTypes.func,
    wikiId: PropTypes.string
  }

  private markupRef: React.RefObject<HTMLInputElement>

  /**
   * Creates an instance of Markdown.
   * @param {*} props
   */
  constructor(props: MarkdownSynapseProps) {
    super(props)
    // markdownitSynapse wraps around markdownit object and uses its own dependencies
    markdownitSynapse.init_markdown_it(md,
                                       markdownitSub,
                                       markdownitSup,
                                       markdownitCentertext,
                                       markdownitSynapseHeading,
                                       markdownitSynapseTable,
                                       markdownitStrikethroughAlt,
                                       markdownitContainer,
                                       markdownitEmphasisAlt,
                                       markdownitInlineComments,
                                       markdownitBr
    )

    const mathSuffix = ''
    // Update the internal markdownit object with the wrapped synapse object
    md.use(markdownitSynapse, mathSuffix).use(markdownitMath, mathSuffix)
    this.state = {
      md,
      errorMessage: '',
      fileHandles: undefined,
      isLoggedIn: this.props.token !== '',
      newOwnerId: '',
      newWikiId: '',
      text: ''
    }
    this.markupRef = React.createRef()
    this.handleLinkClicks = this.handleLinkClicks.bind(this)
    // handle widgets and math markdown
    this.processWidgets = this.processWidgets.bind(this)
    this.processWidgetOrDomElement = this.processWidgetOrDomElement.bind(this)
    this.processMath = this.processMath.bind(this)
    // handle init calls to get wiki related items
    this.getWikiAttachments = this.getWikiAttachments.bind(this)
    this.getWikiPageMarkdown = this.getWikiPageMarkdown.bind(this)
    // handle rendering widgets
    this.renderWidget = this.renderWidget.bind(this)
    this.renderSynapseButton = this.renderSynapseButton.bind(this)
    this.renderSynapseImage = this.renderSynapseImage.bind(this)
    this.renderSynapsePlot = this.renderSynapsePlot.bind(this)
    this.renderSynapseTOC = this.renderSynapseTOC.bind(this)
    this.getErrorView = this.getErrorView.bind(this)
    this.createMarkup = this.createMarkup.bind(this)
    this.addBookmarks = this.addBookmarks.bind(this)
  }

  public componentDidCatch(err: any, info: any) {
    console.log('error ', err)
    console.log('info ', info)
  }

  public componentWillUnmount() {
    // @ts-ignore TODO: give justification for ignoring this line
    this.markupRef.current!.removeEventListener('click', this.handleLinkClicks)
  }

  // manually handle clicks to anchor tags
  public handleLinkClicks(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault()

    // because this listener acts on the whole page (which is desired)
    // we have to cast the event to an anchor because that's what were interested in
    // responding to
    const anchor = event.target as HTMLAnchorElement
    if (anchor.tagName === 'A') {
      if (anchor.getAttribute('data-anchor') === null && anchor.id === '') {
        window.open(anchor.href, '_blank')
      } else if (anchor.id.substring(0, 3) === 'ref') {
        const referenceNumber = Number(event.currentTarget.id.substring(3)) // e.g. ref2 => '2'
        const goTo = this.markupRef.current!.querySelector(
          `#bookmark${referenceNumber}`
        )
        try {
          goTo!.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
          })
        } catch (e) {
          console.log('error on scroll', e)
        }
      } else if (event.currentTarget.id !== null) {
        const idOfContent = anchor.getAttribute('data-anchor')
        const goTo = this.markupRef.current!.querySelector(`#${idOfContent}`)
        try {
          goTo!.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
          })
        } catch (e) {
          console.log('error on scroll', e)
        }
      }
    }
  }

  /**
   * Given input text, generate markdown object to be passed onto inner html of some container.
   * @param {String} text The text being written in plain markdown
   * @returns {Object} Dictionary to be passed into dangerouslySetInnerHTML with markdown text
   */
  public createMarkup(text: string) {
    const initText = this.state.md.render(text)
    const cleanText = sanitizeHtml(initText, {
      allowedAttributes: {
        a: ['href'],
        button: ['class'],
        div: ['class', 'style'],
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
        th: ['class'],
        thead: ['class'],
        ul: ['class']
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
        'image',
        'ol',
        'ul',
        'li',
        'svg',
        'g',
        'br',
        'hr',
        'summary',
        'details'
      ]
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
    const mathExpressions = this.markupRef.current.querySelectorAll(
      '[id^="mathjax-"]'
    )
    // go through all obtained elements and transform them with katex
    mathExpressions.forEach((element: any) => {
      katex.render(element.textContent, element, {
        // @ts-ignore: The docs for katex report conflicting information
        // about the typescript docs for katex usage
        delimiters: [
          {
            display: true,
            left: '$$',
            right: '$$'
          },
          {
            display: false,
            left: '\\(',
            right: '\\)'
          },
          {
            display: true,
            left: '\\[',
            right: '\\]'
          }
        ],
        throwOnError: false
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
    this.createMarkup(this.state.text)
    const footnotesHtml = this.createMarkup(markdownitSynapse.footnotes())
      .__html
    if (footnotesHtml.length > 0) {
      const bookmarks = <Bookmarks footnotes={footnotesHtml} />
      return bookmarks
    }
    // ts doesn't like functions without explicit return statements
    return
  }

  /**
   * Call Synapse REST API to get AMP-AD wiki portal markdown as demo of API call
   */
  public getWikiPageMarkdown() {
    if (!this.state.text) {
      SynapseClient.getEntityWiki(
        this.props.token,
        this.props.ownerId,
        this.props.wikiId
      )
        .then((data: WikiPage) => {
          // on success grab text and append to the default text
          const initText = this.state.text
          this.setState({
            text: initText + data.markdown
          })
          if (this.props.updateLoadState) {
            this.props.updateLoadState({ isLoading: false })
          }
        })
        .catch((err) => {
          console.log('Error on wiki markdown load\n', err)
        })
    }
    // else the wiki page was retrieved accordingly or it was passed down
    // as a prop
  }
  public getWikiAttachments() {
    // bang operator on ownerId and wikiId b/c this will only get called if we had found out above
    // that this was specified
    SynapseClient.getWikiAttachmentsFromEntity(
      this.props.token,
      this.props.ownerId!,
      this.props.wikiId!
    )
      .then((data) => {
        this.setState({ fileHandles: data, errorMessage: '' })
      })
      .catch((err) => {
        this.setState({
          errorMessage: err.reason
        })
        console.log('Error on wiki attachment load ', err)
      })
  }
  /**
   * If theres an error loading the wiki page show an informative message
   * likely a priveledge issue -- (e.g. not signed-in)
   *
   * @returns view that presents error message on error, otherwise null
   */
  public getErrorView() {
    if (this.state.errorMessage && this.props.errorMessageView) {
      const errorViewWithProps = React.cloneElement(this.props.errorMessageView, {
        message: this.state.errorMessage
      })
      return (
        <React.Fragment>
          {errorViewWithProps}
        </React.Fragment>
      )
    }
    return
  }
  public processWidgets() {
    // (<span data-widgetparams.*?span>) captures widgets
    let count = 1
    let markup = this.createMarkup(this.state.text).__html.replace(
      /<span id="wikiReference.*?<span data-widgetparams.*?span>/g,
      () => {
        // replace all reference tags with id's that we can later target
        const current = count
        count += 1
        return `<a href="" id="ref${current}">[${current}]</a>`
      }
    )
    const tocId = 'SRC-header-'
    let tocIdCount = 1
    markup = markup.replace(TOC_HEADER_REGEX, (match: string) => {
      // replace with id so we can target them alter with click events
      const curTocId = tocIdCount
      tocIdCount += 1
      const matchWithId = `${match.substring(
        0,
        3
      )} id="${tocId}${curTocId}"${match.substring(3)}`
      return matchWithId
    })
    const groups = markup.split(/(<span data-widgetparams.*?span>)/)
    if (groups.length > 0) {
      return this.processWidgetOrDomElement(groups, markup)
    }
    return
  }
  public decodeXml(xml: string) {
    const escapedOneToXmlSpecialMap = {
      '&amp;': '&',
      '&gt;': '>',
      '&lt;': '<',
      '&quot;': '"'
    }
    return xml.replace(/(&quot;|&lt;|&gt;|&amp;)/g, (str, item) => {
      return escapedOneToXmlSpecialMap[item]
    })
  }
  public processWidgetMappings(
    rawWidgetString: string,
    originalMarkup: string
  ) {
    const widgetstringRegExp = rawWidgetString.match(
      /data-widgetparams=("(.*?)")/
    )
    const widgetstring = this.decodeXml(widgetstringRegExp![2])
    const questionIndex = widgetstring.indexOf('?')
    if (questionIndex === -1) {
      // e.g. toc is passed, there are no params
      return this.renderWidget(widgetstring, {}, originalMarkup)
    }
    const widgetType = widgetstring.substring(0, questionIndex)
    const widgetparamsMapped = {}
    // map out params and their values
    widgetstring
      .substring(questionIndex + 1)
      .split('&')
      .forEach((keyPair) => {
        let [key, value] = keyPair.split('=')
        value = decodeURIComponent(value)
        widgetparamsMapped[key] = value
      })
    return this.renderWidget(widgetType, widgetparamsMapped, originalMarkup)
  }
  public processWidgetOrDomElement(
    widgetsToBe: string[],
    originalMarkup: string
  ) {
    const widgets = []
    for (const text of widgetsToBe) {
      if (text.indexOf('<span data-widgetparams') !== -1) {
        widgets.push(this.processWidgetMappings(text, originalMarkup))
      } else {
        widgets.push(
          <span key={uuidv4()} dangerouslySetInnerHTML={{ __html: text }} />
        )
      }
    }
    return widgets
  }
  public renderWidget(
    widgetType: string,
    widgetparamsMapped: any,
    originalMarkup: string
  ) {
    switch (widgetType) {
      case 'buttonlink':
        return this.renderSynapseButton(widgetparamsMapped)
      case 'image':
        return this.renderSynapseImage(widgetparamsMapped)
      case 'plot':
        return this.renderSynapsePlot(widgetparamsMapped)
      case 'toc':
        return this.renderSynapseTOC(originalMarkup)
      // TODO: Finish user badge
      // case 'badge':
      //   return this.renderUserBadge(widgetparamsMapped)
      default:
        return
    }
  }

  public renderSynapseButton(widgetparamsMapped: any) {
    return (
      <a
        key={uuidv4()}
        href={widgetparamsMapped.url}
        className="btn btn-lg btn-info"
        role="button"
      >
        {widgetparamsMapped.text}
      </a>
    )
  }
  public renderSynapsePlot(widgetparamsMapped: any) {
    return (
      <SynapsePlot
        key={uuidv4()}
        token={this.props.token}
        ownerId={this.props.ownerId}
        wikiId={this.props.wikiId}
        widgetparamsMapped={widgetparamsMapped}
      />
    )
  }

  public renderSynapseImage(widgetparamsMapped: any) {
    if (!this.state.fileHandles) {
      // ensure files are loaded
      return
    }
    if (widgetparamsMapped.fileName) {
      return (
        <SynapseImage
          params={widgetparamsMapped}
          key={uuidv4()}
          token={this.props.token}
          fileName={widgetparamsMapped.fileName}
          wikiId={this.props.wikiId}
          fileResults={this.state.fileHandles.list}
        />
      )
    }
    if (widgetparamsMapped.synapseId) {
      // elements with synapseIds have to have their resources loaded first, their not located
      // with the file attachnent list
      return (
        <SynapseImage
          params={widgetparamsMapped}
          key={uuidv4()}
          token={this.props.token}
          synapseId={widgetparamsMapped.synapseId}
        />
      )
    }
    return
  }
  public renderSynapseTOC(originalMarkup: string) {
    // for TOC
    const elements: any[] = []
    originalMarkup.replace(TOC_HEADER_REGEX_WITH_ID, (p1, p2, p3, p4) => {
      elements.push(
        <div key={uuidv4()}>
          <a className={`link ${TOC_CLASS[Number(p2)]}`} data-anchor={p3}>
            {' '}
            {p4}{' '}
          </a>
        </div>
      )
      return ''
    })
    return <div key={uuidv4()}>{elements}</div>
  }

  public renderUserBadge(widgetparamsMapped: any) {
    // TODO: Finish UserBadge
    // return <UserBadge alias={widgetparamsMapped.alias} type={'USER_NAME'}/>
  }

  public componentDidMount() {
    if (this.props.markdown) {
      this.setState({
        text: this.props.markdown
      })
    }
    // @ts-ignore
    this.markupRef.current!.addEventListener('click', this.handleLinkClicks)
    // unpack and set default value if not specified
    const { hasSynapseResources = true } = this.props
    if (hasSynapseResources) {
      // get wiki attachments
      this.getWikiAttachments()
      this.getWikiPageMarkdown()
    }
    this.processMath()
  }

  // on component update find and re-render the math/widget items accordingly
  public componentDidUpdate() {
    // we have to carefully update the component so it doesn't encounter an infinite loop
    if (this.props.token !== '' && !this.state.isLoggedIn) {
      // this is true when user just logged
      this.setState({ isLoggedIn: true })
      // only if they didn't supply markdown should this happen
      if (this.props.hasSynapseResources) {
        this.getWikiAttachments()
        this.getWikiPageMarkdown()
      }
    }
    this.processMath()
  }

  public render() {
    return (
      <div className="markdown" ref={this.markupRef}>
        {this.getErrorView()}
        <span>{this.processWidgets()}</span>
        <div>{this.addBookmarks()}</div>
      </div>
    )
  }
}
export default MarkdownSynapse
