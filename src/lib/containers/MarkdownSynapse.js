import React from "react";
import ReactDOM from 'react-dom'

import * as SynapseClient from '../utils/SynapseClient'
import SynapsePlot from './widgets/SynapsePlot'
import Reference from './widgets/Reference'
import Bookmarks from './widgets/Bookmarks'

import PropTypes from 'prop-types'

import "../style/Portal.css"
import SynapseImage from "./widgets/SynapseImage";

/**
 * Import requirements for markdown
 */
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
        
        let md = require('markdown-it')({html: true})
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
            md: md,
            text: '',
            fileHandles: null,
            newOwnerId: "",
            newWikiId: "",
            isLoggedIn: this.props.token !== "",
            errorMessage: ""
        }

        this.footnoteRef = React.createRef()
        this.markupRef = React.createRef()
        this.buttonRef = React.createRef()
        
        // handle widgets and math markdown
        this.processWidgets = this.processWidgets.bind(this)
        this.processWidgetMappings = this.processWidgetMappings.bind(this)
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


        this.processTextWidgets = this.processTextWidgets.bind(this)
        this.processTextWidgetMappings = this.processTextWidgetMappings.bind(this)
        this.processWidgetOrDomElement = this.processWidgetOrDomElement.bind(this)
        this.renderTextSynapseImage = this.renderTextSynapseImage.bind(this)
        this.renderTextSynapseReference = this.renderTextSynapseReference.bind(this)
        this.renderTextWidget = this.renderTextWidget.bind(this)
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

    processWidgetMappings(widgets) {
        let referenceCountContainer = {
            referenceCount : 1
        }
        for (let element of widgets) {
            let widgetstring = element.dataset.widgetparams;
            let questionIndex = widgetstring.indexOf("?"); // type?
            let widgetType = widgetstring.substring(0, questionIndex); // type
            let widgetparamsMapped = {};
            // map out params and their values
            widgetstring.substring(questionIndex + 1).split("&").forEach((keyPair) => {
                let key, value;
                [key, value] = keyPair.split("=");
                // console.log(`splitting the widget string with key = ${key} and value = ${value}`)
                value = decodeURIComponent(value);
                // console.log(`decoded version has key = ${key} and value = ${value}`)
                widgetparamsMapped[key] = value;
            });
            this.renderWidget(widgetType, widgetparamsMapped, element, referenceCountContainer);
        };
    }

    componentWillUnmount() {
        let widgets = this.markupRef.current.querySelectorAll("span[data-widgetparams]")
        console.log(`unmounting ${widgets.length} widgets`)
        widgets.forEach(
            element => {
                console.log(ReactDOM.unmountComponentAtNode(element))
            }
        )

        let footnotes_html = this.createMarkup(markdownitSynapse.footnotes()).__html
        if (footnotes_html.length > 0) {
            console.log('getting rid of footenotes')
            console.log(ReactDOM.unmountComponentAtNode(this.footnoteRef.current))
        }
    }

    /**
     * Given a widget grab its required resources to push onto the growing list of elements
     *
     * @param {*} widgetType    type of widget, e.g. "buttonlink"
     * @param {*} widgetparamsMapped    parameter dictionary for the given widget
     * @param {*} element   reference to the actual DOM element this widget corresponds to
     * @param {*} fileHandleAssociationList  stack of of requests to be made to batch synapse request
     * @param {*} elementList   stack of elements to be processed
     */
    renderWidget(widgetType, widgetparamsMapped, element, referenceCountContainer) {
        if (widgetType === "buttonlink" && element && element.parentElement) {  // check parent element
            this.renderSynapseButton(widgetparamsMapped, element);
        } else if (widgetType === "image" && this.state.fileHandles) {
            this.renderSynapseImage(widgetparamsMapped, element);
        } else if (widgetType === "plot") {
            this.renderSynapsePlot(widgetparamsMapped, element);
        } else if (widgetType === "reference") {
            this.renderSynapseReference(referenceCountContainer, element);
        }
    }

    renderSynapseButton(widgetparamsMapped, element) {
        let button = "<a href=\"" + widgetparamsMapped.url + "\"class=\"btn btn-lg btn-info\" role=\"button\" >" + widgetparamsMapped.text + "</a>";
        element.outerHTML = button;
    }

    renderSynapsePlot(widgetparamsMapped, element) {
        let plotWidget = <SynapsePlot token={this.props.token} ownerId={this.props.ownerId} wikiId={this.props.wikiId} widgetparamsMapped={widgetparamsMapped} />;
        ReactDOM.render(plotWidget, element);
    }

    renderSynapseImage(widgetparamsMapped, element) {
        if (widgetparamsMapped.fileName) {
            let img = <SynapseImage token={this.props.token} fileName={widgetparamsMapped.fileName} wikiId={this.props.wikiId} isAttachedToEntity={false} fileResults={this.state.fileHandles.list} />;
            ReactDOM.render(img, element);
        }
        else if (widgetparamsMapped.synapseId) {
            // elements with synapseIds have to have their resources loaded first, their not located
            // with the file attachnent list
            let img = <SynapseImage token={this.props.token} synapseId={widgetparamsMapped.synapseId} isAttachedToEntity={true} />;
            ReactDOM.render(img, element);
        }
    }

    renderSynapseReference(referenceCountContainer, element) {
        let count = referenceCountContainer.referenceCount;
        let reference = <Reference footnoteId={referenceCountContainer.referenceCount} onClick={event => {
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
        ReactDOM.render(reference, element);
        referenceCountContainer.referenceCount++;
    }

    /**
     * Process all the corresponding bookmark tags of the references made throughout the page
     *
     * @memberof MarkdownSynapse
     */
    addBookmarks() {
        let footnotes_html = this.createMarkup(markdownitSynapse.footnotes()).__html
        if (footnotes_html.length > 0) {
            let bookmarks = <Bookmarks
                                footnotes={footnotes_html}>
                            </Bookmarks>
            ReactDOM.render(bookmarks, this.footnoteRef.current)
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

    componentDidMount() {
        if (this.props.markdown) {
            this.setState({
                text: this.props.markdown
            })
        }

        if (this.props.hasSynapseResources) {
            // get wiki attachments
            this.getWikiAttachments();
            // sample API call to retrieve Synapse wiki page
            // endpoint = https://repo-prod.prod.sagebase.org/repo/v1/entity/"{ownerId}"/wiki/"{wikiId}"        
            this.getWikiPageMarkdown();
        }

        if (this.props.updateLoadState && this.state.text) {
            this.props.updateLoadState({isLoading: false})
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

    processTextWidgets() {
        let groups = this.createMarkup(this.state.text).__html.split(/(<span data-widgetparams.*span>)/)
        return this.processWidgetOrDomElement(groups)
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

    processTextWidgetMappings(rawWidgetString, referenceCountContainer, index) {
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
        return this.renderTextWidget(widgetType, widgetparamsMapped, referenceCountContainer, index);
    } 

    processWidgetOrDomElement (widgetsToBe) {
        let referenceCountContainer = {
            referenceCount : 1
        }
        return widgetsToBe.map(
            (text, index) => {
                if (text.indexOf("<span data-widgetparams") !== -1) {
                    let resp = this.processTextWidgetMappings(text, referenceCountContainer, index)
                    return resp
                } else {
                    return <div key={index} dangerouslySetInnerHTML={{__html: text}}></div>
                }
            }
        )
    }

    renderTextWidget (widgetType, widgetparamsMapped, referenceCountContainer, index) {
        if (widgetType === "buttonlink") {  // check parent element
            return <button key={index}> i'm a btn </button>
        } else if (widgetType === "image" && this.state.fileHandles) {
            return this.renderTextSynapseImage(widgetparamsMapped, index);
        } else if (widgetType === "plot") {
            return this.renderTextSynapsePlot(widgetparamsMapped, index);
        } else if (widgetType === "reference") {
            return this.renderTextSynapseReference(referenceCountContainer, index);
        }
    }
    renderTextSynapsePlot(widgetparamsMapped, index) {
        let plotWidget = <SynapsePlot key={index} token={this.props.token} ownerId={this.props.ownerId} wikiId={this.props.wikiId} widgetparamsMapped={widgetparamsMapped} />;
        return plotWidget
    }

    renderTextSynapseImage(widgetparamsMapped, index) {
        if (widgetparamsMapped.fileName) {
            let img = <SynapseImage key={index} token={this.props.token} fileName={widgetparamsMapped.fileName} wikiId={this.props.wikiId} isAttachedToEntity={false} fileResults={this.state.fileHandles.list} />;
            return img
        }
        else if (widgetparamsMapped.synapseId) {
            // elements with synapseIds have to have their resources loaded first, their not located
            // with the file attachnent list
            let img = <SynapseImage key={index} token={this.props.token} synapseId={widgetparamsMapped.synapseId} isAttachedToEntity={true} />;
            return img
        }
    }

    renderTextSynapseReference(referenceCountContainer, index) {
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


    render() {
        return (
            <React.Fragment>
                {this.getErrorView()}
                <div ref={this.markupRef}>
                    {this.processTextWidgets()}
                </div>
                <div ref={this.footnoteRef}></div>
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