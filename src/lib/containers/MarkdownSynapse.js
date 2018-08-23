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
        // Store markdown object and text to be rendered by said object
        // async data goes inside of state, in this way and setState calls will
        // update those positions on the page where async requirements are needed
        this.state = {
            md: require('markdown-it')({html: true}),
            text: '',
            fileHandles: null,
            newOwnerId: "",
            newWikiId: "",
            calledReset: false,
            isLoggedIn: this.props.token !== "",
            errorMessage: "",
            queryData: {},
            fileResults: null,
            hasBookmarks: false,
            bookmarksFirstSeen: false,
            hasProcessedReferences: false,
            referenceView: []
        }

        this.footnoteRef = React.createRef()
        this.markupRef = React.createRef()
        
        // handle widgets and math markdown
        this.processWidgets = this.processWidgets.bind(this)
        this.processMath = this.processMath.bind(this)
        // handle init calls to get wiki related items
        this.getWikiAttachments = this.getWikiAttachments.bind(this)
        this.getWikiPageMarkdown = this.getWikiPageMarkdown.bind(this)
        
        // handle pre/post processing of widgets
        this.prepareWidget = this.prepareWidget.bind(this)
        this.processWidgetMappings = this.processWidgetMappings.bind(this)
        this.matchElementToResource = this.matchElementToResource.bind(this)
        this.matchToHandle = this.matchToHandle.bind(this)
        this.compareById = function(fileName, key) {
            return function(element) {
                return element[key] === fileName
            }
        }
        
        // state related functions
        this.getErrorView = this.getErrorView.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.createMarkup = this.createMarkup.bind(this)

        // handling each of the synapse widgets
        this.handleImageWidget = this.handleImageWidget.bind(this)
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

    async processWidgetMappings(widgets, fileHandleAssociationList, elementList) {
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
                value = decodeURIComponent(value);
                widgetparamsMapped[key] = value;
            });
            await this.prepareWidget(widgetType, widgetparamsMapped, element, referenceCountContainer);
        };
    }

    /**
     * Get widgets on screen and transform into their defined compents
     */
    async processWidgets() {

        let widgets = this.markupRef.current.querySelectorAll("span[data-widgetparams]")
        // go through all obtained elements and transform them with katex
        
        // build up request 
        let elementList = []
        let fileHandleAssociationList = []

        // must gather resources for all widgets before making batch file call, wait till done
        await this.processWidgetMappings(widgets, fileHandleAssociationList, elementList)

        // Process all the files found on the page
        // if this is the first run load the file results, otherwise
        // use the already retrieved files
        if (fileHandleAssociationList.length > 0 && this.state.fileResults === null) {
            // include length check to make sure all resources are loaded
            let request = {
                requestedFiles: fileHandleAssociationList,
                includePreSignedURLs: true,
                includeFileHandles: false,
                includePreviewPreSignedURLs: false
            }
            SynapseClient.getFiles(request, this.props.token).then(
                data=> {
                    this.setState(
                        {fileResults: data.requestedFiles}
                    )
                    // TODO: consider opitmizations in the future
                    markdownitSynapse.resetFootnotes()
                    this.matchElementToResource(elementList);
                    this.addBookmarks()
                }
            )
            .catch(err =>{
                console.log('Error on url grab ', err)
            })
        } else {
            markdownitSynapse.resetFootnotes()
            this.matchElementToResource(elementList);
            this.addBookmarks()
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
    async prepareWidget(widgetType, widgetparamsMapped, element, referenceCountContainer) {
        if (widgetType === "buttonlink" && element && element.parentElement) {  // check parent element
            let button = "<a href=\"" + widgetparamsMapped.url + "\"class=\"btn btn-lg btn-info\" role=\"button\" >" + widgetparamsMapped.text + "</a>";
            element.outerHTML = button;
        } else if (widgetType === "image" && this.state.fileHandles) {
            if (widgetparamsMapped.fileName) {
                let img = <SynapseImage
                                token={this.props.token}
                                fileName={widgetparamsMapped.fileName}
                                wikiId={this.props.wikiId}
                                isAttachedToEntity={false}
                                fileResults={this.state.fileHandles.list}
                            />
                ReactDOM.render(img, element)
            } else if (widgetparamsMapped.synapseId) {
                // elements with synapseIds have to have their resources loaded first, their not located
                // with the file attachnent list
                let img = <SynapseImage
                                token={this.props.token}
                                synapseId={widgetparamsMapped.synapseId}
                                isAttachedToEntity={true}
                            />
                ReactDOM.render(img, element)
            }
        } else if (widgetType === "plot") {
            let plotWidget = <SynapsePlot 
                                token={this.props.token}
                                ownerId={this.props.ownerId}
                                wikiId={this.props.wikiId}
                                widgetparamsMapped={widgetparamsMapped} />
            ReactDOM.render(plotWidget, element)
        } else if (widgetType === "reference") {
            this.addSynapseReference(referenceCountContainer, element);
        }
    }

    addSynapseReference(referenceCountContainer, element) {
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
     * match all widgets on the page to their corresponding resource
     *
     * @param {*} elementList dictionary of 
     * @memberof Markdown
     */
    matchElementToResource(elementList) {
        let referenceCount = 1
        let savedReferences = this.state.savedReferences || []

        if (elementList.length > 0) {
            elementList.forEach((elementBundle) => {
                if (elementBundle.widgetType === "image") {
                    // match corresponds to filehandle that this current element needs to be connected to
                    let match = this.matchToHandle(this.compareById(elementBundle.id, "fileHandleId"), this.state.fileResults);
                    this.handleImageWidget(match, elementBundle);
                }
            });
            if (referenceCount > 0 && !this.state.hasProcessedReferences) {
                this.setState({hasProcessedReferences: true, savedReferences: savedReferences, hasBookmarks: true})    
            }
        }
    }

    handleImageWidget(match, elementBundle) {
        if (elementBundle.element.parentElement) {
            let renderedHTML = `<image class="img-fluid" src=${match[0].preSignedURL}></image>`;
            elementBundle.element.outerHTML = renderedHTML;
        }
    }         

    /**
     * Process all the corresponding bookmark tags of the references made throughout the page
     *
     * @memberof MarkdownSynapse
     */
    addBookmarks() {
       if (this.state.hasBookmarks) {
            // if (this.footnoteRef.current) {
            //     ReactDOM.unmountComponentAtNode(this.footnoteRef.current)
            // }
            let footnotes_html = this.createMarkup(markdownitSynapse.footnotes()).__html
            let bookmarks = <Bookmarks
                                footnotes={footnotes_html}>
                            </Bookmarks>
            ReactDOM.render(bookmarks, this.footnoteRef.current)
        }
    }

    /**
     * Attach markdown to wiki attachments
     */
    matchToHandle(comparator, objectList) {
        if (objectList) {
            // make sure the files have loaded
            let filtered =  objectList.filter(comparator)
            return filtered
        }
    }

    /**
     * Updates internal state with the event that was triggered
     *
     * @param {*} event Form update
     */
    handleChange(event) {
        const target = event.target
        const name = target.name
        const value = target.value
        this.setState(
            { [name]: value }
        );
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
              
    /**
     * Call Synapse REST API to get AMP-AD wiki portal attachments
     */
    getWikiAttachments() {

        SynapseClient.getWikiAttachmentsFromEntity(this.props.token, this.props.ownerId, this.props.wikiId)
            .then(data => {
                this.setState({ fileHandles: data });
                this.processWidgets();
                this.setState({
                    errorMessage: ""
                })
            }).catch(err => { 
                this.setState({
                    errorMessage: err.reason
                })
                console.log("Error on wiki attachment load ", err)
            })
    }

    componentDidMount() {

        // markdownitSynapse wraps around md object and uses its own dependencies
        markdownitSynapse.init_markdown_it(
            this.state.md, markdownSubAlt, markdownEmpahsisAlt,
            markdownCenterText, markdownSynapseHeading, markdownSynapseTable,
            markdownStrikethrough, markdownContainer, markdownEmpahsisAlt,
            markdownInlineComments, markdownBr
        )

        const mathSuffix = ''
        // Update the internal md object with the wrapped synapse object
        this.setState({
            md: this.state.md.use(markdownitSynapse, mathSuffix).use(synapseMath, mathSuffix)
        })

        // TODO: if supplying only markdown then there can't be any widgets
        // that require an owner/synapse id -- supplying markdown may not be 
        // an option

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
        // process all math identified markdown items
        this.processMath()

        if (this.props.updateLoadState && this.state.text) {
            this.props.updateLoadState({isLoading: false})
        }
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
        this.processWidgets()
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

    /**
     *  Reset the components state to initial
     *
     * @param {*} event click event from submit button
     * @memberof Markdown
     */
    resetComponentState(event) {
        event.preventDefault()
        
        this.setState({
            ownerId: this.state.newOwnerId,
            wikiId: this.state.newWikiId,
            newOwnerId: "",
            newWikiId: "",
            fileHandles: null,
            fileResults: null,
            text: "",
            calledReset: true
        })
    }

    render() {
        const visibility = {
            visibility: this.state.hasBookmarks ? "visible" : "hidden"
        }

        return (
            <React.Fragment>
                {this.getErrorView()}
                <div ref={this.markupRef} dangerouslySetInnerHTML={this.createMarkup(this.state.text)}/>
                <hr style={visibility}  />
                <div ref={this.footnoteRef} style={visibility}></div>
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