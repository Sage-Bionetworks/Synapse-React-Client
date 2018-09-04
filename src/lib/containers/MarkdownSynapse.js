import React from "react";

import * as SynapseClient from '../utils/SynapseClient'


import Reference from './widgets/Reference'
import Bookmarks from './widgets/Bookmarks'

import PropTypes from 'prop-types'

import "../style/Portal.css"
import SynapseImage from "./widgets/SynapseImage";

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
        this.renderSynapseReference = this.renderSynapseReference.bind(this)
        
        this.getErrorView = this.getErrorView.bind(this)
        this.createMarkup = this.createMarkup.bind(this)
        this.addBookmarks = this.addBookmarks.bind(this)
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
            "br"],
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
            window.katex.render(element.textContent, element, {throwOnError: false, delimiters: 
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
        let groups = this.createMarkup(this.state.text).__html.split(/(<span data-widgetparams.*?span>)/)
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
    
    processWidgetMappings(rawWidgetString, referenceCountContainer, index) {
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
        return this.renderWidget(widgetType, widgetparamsMapped, referenceCountContainer, index);
    } 
    
    processWidgetOrDomElement (widgetsToBe) {
        let referenceCountContainer = {
            referenceCount : 1
        }

        let widgets = []
        let text_prior = ""

        let i = 0
        console.log('widgets to be ', widgetsToBe)
        while (i < widgetsToBe.length) {
            let text = widgetsToBe[i]
            if (text.indexOf("data-widget-type=\"reference\"") !== -1) {
                console.log('text is ', text)
                console.log('text prior is ', text_prior)
                let withoutReferenceSpan =  text_prior.substring(0,text_prior.indexOf("<span id=\"wikiReference"))
                // we want the last html tag prior to the <span id="wikiReference#"></span>
                // which is of the form </.*?>
                // everything before that can stay as it was
                /*
                    let text_prior.indexOf("<span id="wikiReference)

                */
                // find the last html element, grab the index of --
                // need to find the remaining text and also identify what type of 
                // element it is

                // text looks like this 
                // (<beforeElement (e.g. <h1> hello </h1> <p> more random text lorem ipsum </p>)) <LastTag (e.g. <p> or <div> )> lorem ipsum> <span id="wikiReference#">
                // we have to capture beforeElement and then the lastElement
                // lastElement has to have its text captured prior to the span containing the wikiReference
                // we let lastElement be its own thing and then past that we squash the last seen element and then whatever follows.
                // edge cases
                // last element could have more html elements (although its the end of a sentence so this is unlikely) most commoonly another reference would
                // follow

                let children = []
                let beforeElement = <span dangerouslySetInnerHTML={{__html: withoutReferenceSpan.substring(0, withoutReferenceSpan.lastIndexOf("<"))}}></span>
                children.push(this.processWidgetMappings(text, referenceCountContainer, i))
                let LastTag = withoutReferenceSpan.substring(withoutReferenceSpan.lastIndexOf("<") + 1, withoutReferenceSpan.lastIndexOf(">"))
                console.log('withoutReferenceSpan is  ', withoutReferenceSpan)
                console.log('the text after the ending p tag is ', withoutReferenceSpan.substring(withoutReferenceSpan.lastIndexOf(">") + 1))
                console.log('the text after-After the ending p tag is ', widgetsToBe[i+1])
                console.log('the last tag is ', LastTag)
                
                let squash = null
                // afterwards there will be text of the form hello loreum ipsum .... and depending on the context it will either be 
                // another reference OR it will end with the LastTag as it should.
                let next = 1

                let lastClosingTag = `</${LastTag}>`
                console.log('last closing tag ', lastClosingTag)
                
                let isClosingTagFound = widgetsToBe[i+next].indexOf(lastClosingTag) !== -1

                let isReferenceBeforeTag = isClosingTagFound && widgetsToBe[i+next].indexOf("<span id=\"wikiReference") < widgetsToBe[i+next].indexOf(lastClosingTag)
                let isReferenceAfterTag = isClosingTagFound && widgetsToBe[i+next].indexOf("<span id=\"wikiReference") > widgetsToBe[i+next].indexOf(lastClosingTag)
                let isBetweenTags = widgetsToBe[i + next].match("<.*?>")

                while (widgetsToBe[i + next] && (isReferenceBeforeTag | isReferenceAfterTag | isBetweenTags)) {
                    console.log("next is ", widgetsToBe[i + next])
                    console.log('ref before tag ', isReferenceBeforeTag)
                    console.log('ref after tag ', isReferenceAfterTag)
                    console.log('text isBetweenTags ', isBetweenTags)

                    if (isReferenceBeforeTag) {
                        console.log('processing a widget reference')
                        children.push(this.processWidgetMappings(widgetsToBe[i+next+1], referenceCountContainer, i))
                        next+=2
                    } else if (isReferenceAfterTag) {
                        break // default case
                    } else if (isBetweenTags) {
                        console.log('processing regular text')
                        next+=1
                        children.push(widgetsToBe[i+next])
                    } 

                    if (widgetsToBe[i+next]) {
                        isClosingTagFound = widgetsToBe[i+next].indexOf(lastClosingTag) !== -1
                        isReferenceBeforeTag = isClosingTagFound && widgetsToBe[i+next].indexOf("<span id=\"wikiReference") < widgetsToBe[i+next].indexOf(lastClosingTag)
                        isReferenceAfterTag = isClosingTagFound && widgetsToBe[i+next].indexOf("<span id=\"wikiReference") > widgetsToBe[i+next].indexOf(lastClosingTag)
                        isBetweenTags = widgetsToBe[i + next].match("<.*?>")
                    }
                }

                squash = <LastTag> {withoutReferenceSpan.substring(withoutReferenceSpan.lastIndexOf(">") + 1)} {children.map(element => {return element})} {widgetsToBe[i+next].substring(0,widgetsToBe[i+next].indexOf(lastClosingTag))}</LastTag>
                widgetsToBe[i+next] = widgetsToBe[i+next].substring(widgetsToBe[i+next].indexOf("<"))  // cut off the remaining text
                widgets.pop()
                widgets.push(beforeElement)
                widgets.push(squash)
                i = next + 1
            } else {
                text_prior = widgetsToBe[i]
                if (text.indexOf("<span data-widgetparams") !== -1) {
                    widgets.push(this.processWidgetMappings(text, referenceCountContainer, i))
                } else {
                    widgets.push(<span key={i} dangerouslySetInnerHTML={{__html: text}}></span>)
                }
            }
            i+=1
        }
        return widgets
    }
    
    renderWidget (widgetType, widgetparamsMapped, referenceCountContainer, index) {
        switch (widgetType) {
            case "buttonlink":
                return this.renderSynapseButton(widgetparamsMapped, index)
            case "image":
                return this.renderSynapseImage(widgetparamsMapped, index);
            case "plot":
                return this.renderSynapsePlot(widgetparamsMapped, index);
            case "reference":
                return this.renderSynapseReference(referenceCountContainer, index);
            default:
                return
        }
    }
    
    renderSynapseButton(widgetparamsMapped, index) {
        return <a key={index} href={widgetparamsMapped.url} className="btn btn-lg btn-info" role="button">{widgetparamsMapped.text}</a>
    }
    
    renderSynapsePlot(widgetparamsMapped, index) {
        return <SynapsePlot key={index} token={this.props.token} ownerId={this.props.ownerId} wikiId={this.props.wikiId} widgetparamsMapped={widgetparamsMapped} />;
    }
    
    renderSynapseImage(widgetparamsMapped, index) {
        if (!this.state.fileHandles) {
            // ensure files are loaded
            return
        }
        
        if (widgetparamsMapped.fileName) {
            return <SynapseImage key={index} token={this.props.token} fileName={widgetparamsMapped.fileName} wikiId={this.props.wikiId} fileResults={this.state.fileHandles.list} />;
        }
        else if (widgetparamsMapped.synapseId) {
            // elements with synapseIds have to have their resources loaded first, their not located
            // with the file attachnent list
            return <SynapseImage key={index} token={this.props.token} synapseId={widgetparamsMapped.synapseId} />;
        }
    }
    
    renderSynapseReference(referenceCountContainer, index) {
        let count = referenceCountContainer.referenceCount;
        let reference = <Reference key={index} footnoteId={referenceCountContainer.referenceCount} onClick={event => {
            event.preventDefault();
            // find and go to the bookmark at the right section of the page
            let goTo = this.footnoteRef.current.querySelector(`a#bookmark${count - 1}`);
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
        } } />;
        referenceCountContainer.referenceCount++;
        return reference
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

    render() {
        return (
            <React.Fragment>
                {this.getErrorView()}
                <span ref={this.markupRef}>
                    {this.processWidgets()}
                </span>
                <div ref={this.footnoteRef}>
                    {this.addBookmarks()}
                </div>
            </React.Fragment>
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