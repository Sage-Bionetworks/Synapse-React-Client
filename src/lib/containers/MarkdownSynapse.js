import React from "react";

import * as SynapseClient from '../utils/SynapseClient'
import Bookmarks from './widgets/Bookmarks'
import PropTypes from 'prop-types'
import SynapseImage from "./widgets/SynapseImage";
import katex from 'katex'

const uuidv4 = require('uuid/v4');

// Only because in the test enviornment there is an issue with importing
// react-plot which in turn imports mapboxgl which in turn defines a function
// that causes an error
let SynapsePlot
if (process.env.NODE_ENV !== "test") {
    import('./widgets/SynapsePlot').then(
        data => {
            SynapsePlot = data.default
        }
    )
}
let md = require('markdown-it')({html: true})
let markdownitSynapse = require('markdown-it-synapse')
let markdownSubAlt = require('markdown-it-sub-alt');
let markdownCenterText = require('markdown-it-center-text')
let markdownSynapseHeading = require('markdown-it-synapse-heading')
let markdownSynapseTable = require('markdown-it-synapse-table')
let markdownStrikethrough = require('markdown-it-strikethrough-alt')
let markdownContainer = require('markdown-it-container')
let markdownEmpahsisAlt = require('markdown-it-emphasis-alt')
let markdownInlineComments = require('markdown-it-inline-comments')
let markdownBr = require('markdown-it-br')
let sanitizeHtml = require('sanitize-html');
let synapseMath = require('markdown-it-synapse-math')

/**
 * Basic vanilla Markdownit functionality with latex support, synapse image support, plotly support
 *
 * @class Markdown
 * @extends {React.Component}
 */
class MarkdownSynapse extends React.Component {

    /**
     * Creates an instance of Markdown.
     * @param {*} props
     */
    constructor (props) {
        super(props)
        
        // markdownitSynapse wraps around md object and uses its own dependencies
        markdownitSynapse.init_markdown_it(
            md, markdownSubAlt, markdownEmpahsisAlt,
            markdownCenterText, markdownSynapseHeading, markdownSynapseTable,
            markdownStrikethrough, markdownContainer, markdownEmpahsisAlt,
            markdownInlineComments, markdownBr
        )

        const mathSuffix = ''
        // Update the internal md object with the wrapped synapse object
        md.use(markdownitSynapse, mathSuffix).use(synapseMath, mathSuffix)

        this.state = {
            md,
            text: '',
            fileHandles: null,
            newOwnerId: "",
            newWikiId: "",
            isLoggedIn: this.props.token !== "",
            errorMessage: ""
        }

        this.footnoteRef = React.createRef()
        this.markupRef = React.createRef()
        
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
        
        this.getErrorView = this.getErrorView.bind(this)
        this.createMarkup = this.createMarkup.bind(this)
        this.addBookmarks = this.addBookmarks.bind(this)
        this.handleMarkupClick = this.handleMarkupClick.bind(this)
    }

    /**
     * Given input text, generate markdown object to be passed onto inner html of some container.
     * @param {String} text The text being written in plain markdown
     * @returns {Object} Dictionary to be passed into dangerouslySetInnerHTML with markdown text
     */
    createMarkup(text) {
        let initText = this.state.md.render(text) 
        let cleanText = sanitizeHtml(initText, 
            {   
                allowedTags: [ 'span', 'code', 'h1', 'h2','h3', 'h4', 'h5', 'p', 'b', 'i', 'em', 'strong', 'a' ,'id',
            'table', 'tr', 'td', 'tbody', 'th', 'thead', "button", "div", "image", "ol", "ul", "li", "svg", "g",
            "br", "hr"],
                allowedAttributes: {
                    'a': [ 'href' ],
                    'span': ['*'],
                    'button': ['class'],
                    'div': ['class', 'style'],
                    "ul": ["class"],
                    "ol": ["class"],
                    "li": ["class"],
                    'table': ["class"],
                    'th': ['class'],
                    'thead': ['class']
                }
            }
        )
        return {__html: cleanText}
    }

    /**
     * Find all math identified elements of the form [id^=\"mathjax-\"]
     * (e.g. <dom element id="mathjax-10"> text </dom element>)
     * and transform them to their math markedown equivalents
     */
    processMath() {
        if (!this.markupRef.current) {
            return
        }
        // use regex to grab all elements
        let mathExpressions = this.markupRef.current.querySelectorAll("[id^=\"mathjax-\"]")
        // go through all obtained elements and transform them with katex
        mathExpressions.forEach(element => {
            katex.render(element.textContent, element, {throwOnError: false, delimiters: 
                [
                    {left: "$$", right: "$$", display: true},
                    {left: "\\(", right: "\\)", display: false},
                    {left: "\\[", right: "\\]", display: true}
                ]
            })
        });
    }

    /**
     * Process all the corresponding bookmark tags of the references made throughout the page
     *
     * @memberof MarkdownSynapse
     */
    addBookmarks() {

        markdownitSynapse.resetFootnotes()
        this.createMarkup(this.state.text)
        let footnotes_html = this.createMarkup(markdownitSynapse.footnotes()).__html

        if (footnotes_html.length > 0) {
            let bookmarks = <Bookmarks
                                footnotes={footnotes_html}>
                            </Bookmarks>
            return bookmarks
        }
    }
    
    /**
     * Call Synapse REST API to get AMP-AD wiki portal markdown as demo of API call
     */
    getWikiPageMarkdown() {
        if (!this.state.text) {
            SynapseClient.getEntityWiki(this.props.token, this.props.ownerId, this.props.wikiId)
                .then(data => {
                    // on success grab text and append to the default text
                    let initText = this.state.text;
                    this.setState({
                        text: initText + data.markdown
                    });
                    if (this.props.updateLoadState) {
                        this.props.updateLoadState({isLoading: false})
                    }
                }).catch(err => { 
                    console.log('Error on wiki markdown load\n', err);
                })
        }
        // else the wiki page was retrieved accordingly or it was passed down
        // as a prop
    }
              
    getWikiAttachments() {
        SynapseClient.getWikiAttachmentsFromEntity(this.props.token, this.props.ownerId, this.props.wikiId)
            .then(data => {
                this.setState({ fileHandles: data, errorMessage: "" });
            }).catch(err => { 
                this.setState({
                    errorMessage: err.reason
                })
                console.log("Error on wiki attachment load ", err)
            })
    }

    
    /**
     * If theres an error loading the wiki page show an informative message
     * likely a priveledge issue -- (e.g. not signed-in)
     * 
     * @returns view that presents error message on error, otherwise null
     */
    getErrorView() {
        if (this.state.errorMessage && this.props.errorMessageView) {
            return ( 
                <React.Fragment>
                    {React.cloneElement(this.props.errorMessageView, { message: this.state.errorMessage })}
                </React.Fragment>)
        }   
    }
    
    processWidgets() {
        // (<span data-widgetparams.*?span>) captures widgets
        let count = 1
        let markup = this.createMarkup(this.state.text).__html.replace(/<span id="wikiReference.*?<span data-widgetparams.*?span>/g, 
            () => {
                let current = count++
                return `<a href="" id="ref${current}">[${current}]</a>`
            }
        )
        let groups = markup.split(/(<span data-widgetparams.*?span>)/)
        if (groups.length > 0) {
            return this.processWidgetOrDomElement(groups)
        }
    }
    
    decodeXml(string) {
        let escaped_one_to_xml_special_map = {
            '&amp;': '&',
            '&quot;': '"',
            '&lt;': '<',
            '&gt;': '>'
        };
        
        return string.replace(/(&quot;|&lt;|&gt;|&amp;)/g,
        function(str, item) {
            return escaped_one_to_xml_special_map[item];
        });
    }
    
    processWidgetMappings(rawWidgetString, index) {
        let widgetstring = rawWidgetString.match(/data-widgetparams=("(.*?)")/)
        widgetstring = this.decodeXml(widgetstring[2])
        let questionIndex = widgetstring.indexOf("?")
        let widgetType = widgetstring.substring(0, questionIndex);
        let widgetparamsMapped = {};
        // map out params and their values
        widgetstring.substring(questionIndex + 1).split("&").forEach((keyPair) => {
            let key, value;
            [key, value] = keyPair.split("=");
            value = decodeURIComponent(value);
            widgetparamsMapped[key] = value;
        });
        return this.renderWidget(widgetType, widgetparamsMapped, index);
    } 
    
    processWidgetOrDomElement (widgetsToBe) {
        let widgets = []
        for(let i = 0; i < widgetsToBe.length;i++) {
            let text = widgetsToBe[i]
            if (text.indexOf("<span data-widgetparams") !== -1) {
                widgets.push(this.processWidgetMappings(text, i))
            } else {
                widgets.push(<span key={uuidv4()} dangerouslySetInnerHTML={{__html: text}}></span>)
            }
        }
        return widgets
    }
    
    renderWidget (widgetType, widgetparamsMapped) {
        switch (widgetType) {
            case "buttonlink":
                return this.renderSynapseButton(widgetparamsMapped)
            case "image":
                return this.renderSynapseImage(widgetparamsMapped);
            case "plot":
                return this.renderSynapsePlot(widgetparamsMapped);
            default:
                return
        }
    }
    
    renderSynapseButton(widgetparamsMapped) {
        return <a key={uuidv4()} href={widgetparamsMapped.url} className="btn btn-lg btn-info" role="button">{widgetparamsMapped.text}</a>
    }
    
    renderSynapsePlot(widgetparamsMapped) {
        return <SynapsePlot key={uuidv4()} token={this.props.token} ownerId={this.props.ownerId} wikiId={this.props.wikiId} widgetparamsMapped={widgetparamsMapped} />;
    }
    
    renderSynapseImage(widgetparamsMapped) {
        if (!this.state.fileHandles) {
            // ensure files are loaded
            return
        }
        
        if (widgetparamsMapped.fileName) {
            return <SynapseImage key={uuidv4()} token={this.props.token} fileName={widgetparamsMapped.fileName} wikiId={this.props.wikiId} fileResults={this.state.fileHandles.list} />;
        }
        else if (widgetparamsMapped.synapseId) {
            // elements with synapseIds have to have their resources loaded first, their not located
            // with the file attachnent list
            return <SynapseImage key={uuidv4()} token={this.props.token} synapseId={widgetparamsMapped.synapseId} />;
        }
    }
    
    componentDidMount() {
        if (this.props.markdown) {
            this.setState({
                text: this.props.markdown
            })
        }

        if (this.props.hasSynapseResources) {
            // get wiki attachments
            this.getWikiAttachments();
            this.getWikiPageMarkdown();
        }

        this.processMath()
    }

    // on component update find and re-render the math/widget items accordingly
    componentDidUpdate () {
        // we have to carefully update the component so it doesn't encounter an infinite loop
        if (this.props.token !== "" && !this.state.isLoggedIn) {
            // this is true when user just logged
            this.setState({isLoggedIn: true})
            // only if they didn't supply markdown should this happen
            if (this.props.hasSynapseResources) {
                this.getWikiAttachments()
                this.getWikiPageMarkdown()
            }
        }
        this.processMath()
    }

    handleMarkupClick(event) {
        event.preventDefault();
        if (event.target.tagName.toLowerCase() === 'a' && event.target.id.substring(0,3) === "ref") {  // check they clicked on anchor tag
            let referenceNumber = Number(event.target.id.substring(3)) // e.g. ref2 => '2'
            let goTo = this.footnoteRef.current.querySelector(`a#bookmark${referenceNumber - 1}`);
            try {
                goTo.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'center'
                });
            }
            catch (e) {
                console.log('error on scroll', e);
            }
        }
    }

    render() {
        return (
            <div>
                {this.getErrorView()}
                <span ref={this.markupRef} onClick={this.handleMarkupClick}>
                    {this.processWidgets()}
                </span>
                <div ref={this.footnoteRef}>
                    {this.addBookmarks()}
                </div>
            </div>
        )
    }
}

// Validate props passed to the component
MarkdownSynapse.propTypes = {
    // optional
    errorMessageView: PropTypes.element,

    // required props
    token : PropTypes.string.isRequired,

    ownerId: PropTypes.string,
    wikiId: PropTypes.string,

    markdown: PropTypes.string,
    hasSynapseResources: PropTypes.bool

}

MarkdownSynapse.defaultProps = {
    hasSynapseResources: true
}

export default MarkdownSynapse;