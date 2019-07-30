import * as React from 'react'
import { FileHandleResults } from '../utils/jsonResponses/FileHandleResults'
import { SynapseClient, SynapseConstants } from '../utils/'
import Bookmarks from './widgets/Bookmarks'
import SynapseImage from './widgets/SynapseImage'
import SynapsePlot from './widgets/SynapsePlot'
import UserCard from './UserCard'
const TOC_CLASS = {
  1: 'toc-indent1',
  2: 'toc-indent2',
  3: 'toc-indent3',
  4: 'toc-indent4',
  5: 'toc-indent5',
  6: 'toc-indent6'
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
  errorMessageView?: React.FunctionComponent;
  token?: string;
  ownerId?: string;
  wikiId?: string;
  markdown?: string;
}
const md = markdownit({ html: true })

type MarkdownSynapseState = {
  md: any;
  text: string;
  fileHandles?: FileHandleResults;
  errorMessage: string;
}
/**
 * Basic Markdown functionality for Synapse, supporting Images/Plots/References/Bookmarks/buttonlinks
 *
 * @class Markdown
 * @extends {React.Component}
 */
export default class MarkdownSynapse extends React.Component<MarkdownSynapseProps, MarkdownSynapseState> {
  public markupRef: React.RefObject<HTMLInputElement>

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
      text: '',
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
    this.addIdsToReferenceWidgets = this.addIdsToReferenceWidgets.bind(this)
    this.addIdsToTocWidgets = this.addIdsToTocWidgets.bind(this)
  }

  public componentWillUnmount() {
    // @ts-ignore TODO: find better documentation on typescript/react event params
    this.markupRef.current!.removeEventListener('click', this.handleLinkClicks)
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
      } else if (event.currentTarget.id !== null && anchor.getAttribute('data-anchor')) {
        event.preventDefault()
        // handle table of contents widget
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
        a: ['href', 'target'],
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
    // go through all obtained elements and transform them with katex
    var mathExpressions = [].slice.call(document.querySelectorAll('[id^="mathjax-"]'));
    for (let index = 0; index < mathExpressions.length; index++) {
      const element: any = mathExpressions[index];
      katex.render(element.textContent, element, {
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
    }
  }
  /**
   * Process all the corresponding bookmark tags of the references made throughout the page
   *
   * @memberof MarkdownSynapse
   */
  public addBookmarks() {
    markdownitSynapse.resetFootnotes()
    this.createMarkup(this.state.text)
    const footnotesHtml = this.createMarkup(markdownitSynapse.footnotes()).__html
    if (footnotesHtml.length > 0) {
      return (<Bookmarks footnotes={footnotesHtml} />)
    }
    // ts doesn't like functions without explicit return statements
    return
  }

  /**
   * Call Synapse REST API to get AMP-AD wiki portal markdown as demo of API call
   */
  public getWikiPageMarkdown(override: boolean = false) {
    if (this.state.text.length === 0 || override) {
      SynapseClient.getEntityWiki(
        this.props.token,
        this.props.ownerId,
        this.props.wikiId
        )
        .then((data) => {
          // on success grab text and append to the default text
          this.setState({
            text: data.markdown
          })
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
      const ErrorView = this.props.errorMessageView as React.FC
      return (
        <ErrorView>
          {this.state.errorMessage}
        </ErrorView>
      )
    }
    return
  }

  public addIdsToReferenceWidgets(text: string) {
    const referenceRegex = /<span id="wikiReference.*?<span data-widgetparams.*?span>/g
    let referenceCount = 1

    return text.replace(
      referenceRegex,
      () => {
        // replace all reference tags with id's of the form id="ref<number>"" that we can read onClick
        const current = referenceCount
        referenceCount += 1
        return `<a href="" id="ref${current}">[${current}]</a>`
      }
    )
  }

  public addIdsToTocWidgets(text: string) {
    const tocId = 'SRC-header-'
    let tocIdCount = 1
    const TOC_HEADER_REGEX = /<h[1-6] toc="true">.*<\/h[1-6]>/gm

    return text.replace(TOC_HEADER_REGEX, (match: string) => {
      // replace with id of the form id="toc" so we can read them with onclick events
      const curTocId = tocIdCount
      tocIdCount += 1
      const matchWithId = `${match.substring(0, 3)} id="${tocId}${curTocId}"${match.substring(3)}`
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
  public processWidgets() {
    // create initial markup
    let markup = this.createMarkup(this.state.text).__html
    // process reference widgets
    markup = this.addIdsToReferenceWidgets(markup)
    // process table of contents widgets
    markup = this.addIdsToTocWidgets(markup)

    // capture and process all other widgets
    // (<span data-widgetparams.*?span>) captures widgets
    const widgetRegex = /(<span data-widgetparams.*?span>)/
    // widgets is an array of either plain text/html or specific synapse markdown
    const widgets = markup.split(widgetRegex)
    if (markup.length > 0 && widgets.length > 0) {
      return this.processWidgetOrDomElement(widgets, markup)
    }
    return
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
      '&quot;': '"'
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
  public processWidgetMappings(widgetMatch: string, originalMarkup: string) {
    // General workflow -
    //   1. Capture widget parameters
    //   2. Transform any widget xml parameters to standard text
    //   3. Split those parameters into a map
    //   4. Render that widget based on its parameters

    // steps 1,2
    const widgetParamsRegex = /data-widgetparams=("(.*?)")/
    const widgetParamsMatchWithXML = widgetMatch.match(widgetParamsRegex)
    const widgetParamsString = this.decodeXml(widgetParamsMatchWithXML![2])

    // widgetParamsString look like {<widget>?param1=xxx&param2=yyy}
    const questionIndex = widgetParamsString.indexOf('?')
    if (questionIndex === -1) {
      // e.g. toc is passed, there are no params
      return this.renderWidget(widgetParamsString, {}, originalMarkup)
    }
    const widgetType = widgetParamsString.substring(0, questionIndex)
    const widgetparamsMapped = {}
    // map out params and their values
    widgetParamsString
      .substring(questionIndex + 1)
      .split('&')
      .forEach((keyPair) => {
        let [key, value] = keyPair.split('=')
        value = decodeURIComponent(value)
        widgetparamsMapped[key] = value
      })
    return this.renderWidget(widgetType, widgetparamsMapped, originalMarkup)
  }

  /**
   * Takes in widgetsToBe and parse it out to its respective html element
   *
   * @param {string[]} widgetsToBe This is an array of either synapse widgets, e.g. {plot?=...} or plain html
   * that is not going to be process further.
   * @param {string} originalMarkup This is the original markup that's maintained only because the table of contents
   * widget renderer relies on it.
   * @returns
   * @memberof MarkdownSynapse
   */
  public processWidgetOrDomElement(widgetsToBe: string[], originalMarkup: string) {
    const widgets = []
    let index = 0
    for (const text of widgetsToBe) {
      // test if widget is present
      if (text.indexOf('<span data-widgetparams') !== -1) {
        // process widget
        widgets.push(this.processWidgetMappings(text, originalMarkup))
      } else {
        // Else its plain html/text.
        // Note-- this line below introduces an issue which is that there can be no inline synapse
        // widgets as react only allows you to set 'innerHTML' (as opposed to outerHTML), this creates a span
        // between two inline widgets
        const key = index.toString() + text
        widgets.push(
          <span key={key} dangerouslySetInnerHTML={{ __html: text }} />
        )
        index += 1
      }
    }
    return widgets
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
    originalMarkup: string
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
      default:
        return
    }
  }

  public renderSynapseButton(widgetparamsMapped: any) {
    return (
      <a
        key={widgetparamsMapped.reactKey}
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
        key={widgetparamsMapped.reactKey}
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
    const { reactKey } = widgetparamsMapped
    if (widgetparamsMapped.fileName) {
      // if file name is attached then the fileHandle ID is located
      // in this wiki's file attachment list
      return (
        <SynapseImage
          params={widgetparamsMapped}
          key={reactKey}
          token={this.props.token}
          fileName={widgetparamsMapped.fileName}
          wikiId={this.props.wikiId}
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
            {' '}{p4}{' '}
          </a>
        </div>
      )
      return ''
    })
    return (<div key={text}>{elements}</div>)
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

  public componentDidMount() {
    if (this.props.markdown) {
      this.setState({
        text: this.props.markdown
      })
      return
    }
    // we use this.markupRef.current && because in testing environment refs aren't defined
    // @ts-ignore
    this.markupRef.current && this.markupRef.current!.addEventListener('click', this.handleLinkClicks)
    // unpack and set default value if not specified
    // get wiki attachments
    this.getWikiAttachments()
    this.getWikiPageMarkdown()
    this.processMath()
  }

  // on component update find and re-render the math/widget items accordingly
  public componentDidUpdate(prevProps: MarkdownSynapseProps) {
    let shouldUpdate = this.props.token !== prevProps.token
    shouldUpdate = shouldUpdate || (this.props.ownerId !== prevProps.ownerId)
    shouldUpdate = shouldUpdate || (this.props.wikiId !== prevProps.wikiId)

    // we have to carefully update the component so it doesn't encounter an infinite loop
    if (shouldUpdate) {
      this.getWikiAttachments()
      this.getWikiPageMarkdown(true)
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
