import React from "react";
import ReactDOM from 'react-dom'
import Plot from 'react-plotly.js'

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

/*  
Basic vanilla Markdownit functionality with latex support
*/
class Markdown extends React.Component {

    /**
     * Creates an instance of Markdown.
     * @param {*} props
     */
    constructor (props) {
        super(props)
        // Store markdown object and text to be rendered by said object
        this.state = {
            md: require('markdown-it')({html: true}),
            text: '##LaTeX Rendering:\n Pythagorean theorem is  $$a^2 + b^2 = c^2$$\n##Demo of rendering Wiki\n\n',
            fileHandles: null,
            fileResults: null,
            ownerId: "syn14568473",
            wikiId: "582406",
            newOwnerId: "",
            newWikiId: "",
            calledReset: false,
            isLoggedIn: this.props.token !== ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.processMath = this.processMath.bind(this)
        this.createMarkup = this.createMarkup.bind(this)
        this.processWidgets = this.processWidgets.bind(this)
        this.matchToHandle = this.matchToHandle.bind(this)
        this.getWikiAttachments = this.getWikiAttachments.bind(this)
        this.getWikiPageMarkdown = this.getWikiPageMarkdown.bind(this)
        this.matchElementToResource = this.matchElementToResource.bind(this)
        this.handleWidget = this.handleWidget.bind(this)
        this.getErrorView = this.getErrorView.bind(this)
        this.resetComponentState = this.resetComponentState.bind(this)
        this.compareById = function(fileName, key) {
            return function(element) {
                return element[key] === fileName
            }
        }
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
                allowedTags: [ 'span', 'code', 'h1', 'h2','h3', 'p', 'b', 'i', 'em', 'strong', 'a' ,'id',
            'table', 'tr', 'td', 'tbody', "button", "div", "image", "ol", "ul", "li", "svg", "g"],
                allowedAttributes: {
                    'a': [ 'href' ],
                    'span': ['*'],
                    'button': ['class'],
                    'div': ['class'],
                    "ul": ["class"],
                    "ol": ["class"],
                    "li": ["class"]
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
        let mathExpressions = document.querySelectorAll("[id^=\"mathjax-\"]")
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
     * Get widgets on screen and transform into their defined compents
     */
    processWidgets() {
        let widgets = document.querySelectorAll("span[widgetparams]")
        // go through all obtained elements and transform them with katex
        
        // build up request 
        let elementList = []
        let fileHandlAssociationList = []
        widgets.forEach(element => {
            let widgetstring = element.getAttribute("widgetparams")
            let questionIndex = widgetstring.indexOf("?") // type?
            let widgetType = widgetstring.substring(0,questionIndex) // type
            let widgetparamsMapped = {}
            // map out params and their values
            widgetstring.substring(questionIndex + 1).split("&").forEach( 
                (keyPair) => {
                    let key, value;
                    [key,value] = keyPair.split("=")
                    value = decodeURIComponent(value)
                    widgetparamsMapped[key] = value
                }
            )
            this.handleWidget(widgetType, widgetparamsMapped, element, fileHandlAssociationList, elementList);
        });    

        // Process all the files found on the page
        // if this is the first run load the file results, otherwise
        // use the already retrieved files
        if (fileHandlAssociationList.length > 0 && this.state.fileResults === null) {
            let request = {
                requestedFiles: fileHandlAssociationList,
                includePreSignedURLs: true,
                includeFileHandles: false,
                includePreviewPreSignedURLs: false
            }
            this.props.getFileURLs(request, this.props.token).then(
                data=> {
                    this.setState({
                        fileResults: data.requestedFiles
                    })
                    this.matchElementToResource(elementList);
                }
            )
            .catch(err =>{
                console.log('Error on url grab ', err)
            })
        } else {
            this.matchElementToResource(elementList);
        }

    }

    handleWidget(widgetType, widgetparamsMapped, element, fileHandlAssociationList, elementList) {
        if (widgetType === "buttonlink") {
            let button = "<a href=\"" + widgetparamsMapped.url + "\"class=\"btn btn-lg btn-info\" role=\"button\" >" + widgetparamsMapped.text + "</a>";
            element.outerHTML = button;
        } else if (widgetType === "image" && this.state.fileHandles) {
            let fileName = decodeURIComponent(widgetparamsMapped.fileName);
            let match = this.matchToHandle(this.compareById(fileName, "fileName"), this.state.fileHandles.list);
            if (match.length > 0) {
                fileHandlAssociationList.push({
                    fileHandleId: match[0].id,
                    associateObjectId: this.state.wikiId,
                    associateObjectType: "WikiAttachment"
                });
                elementList.push({element:element, id: match[0].id, widgetType: widgetType, widgetparamsMapped: widgetparamsMapped});
            }
        } else if (widgetType === "plot") {
            elementList.push({element:element, widgetType: widgetType, widgetparamsMapped: widgetparamsMapped});
        }
    }

    matchElementToResource(elementList) {
        elementList.forEach(elementBundle => {
            let match = this.matchToHandle(this.compareById(elementBundle.id, "fileHandleId"), this.state.fileResults);
            let renderedHTML = ""
            if (elementBundle.widgetType === "image") {
                renderedHTML = "<image class=\"img-fluid\" src=" + match[0].preSignedURL + "></image>";
            } else if (elementBundle.widgetType === "plot") {
                let widgetparamsMapped = elementBundle.widgetparamsMapped 
                let raw_plot_data = {}

                if (!this.state.queryData) {
                    let queryRequest = {
                        concreteType: "org.sagebionetworks.repo.model.table.QueryBundleRequest",
                        entityId: this.state.ownerId,
                        partsMask: 13,
                        query: {
                            isConsistent: false,
                            limit: 150,
                            offset: 0,
                            sql: widgetparamsMapped.query
                        }
                    }
                    this.props.getQueryTableResults(queryRequest, this.props.token).then(data => {
                        // match id to data retrieved
                        let title = widgetparamsMapped.title
                        let queryData = {...this.state.queryData} // shallow copy
                        queryData[title] = data // place property
                        this.setState({
                            queryData
                        })
                        raw_plot_data = data
                    })
                } else {
                    // data exists already, don't regenerate
                    raw_plot_data = this.state.queryData[widgetparamsMapped.title]

                }
                
                let title = widgetparamsMapped.title
                let xtitle = widgetparamsMapped.xtitle
                let ytitle = widgetparamsMapped.ytitle
                let type = widgetparamsMapped.type
                let xaxisType = widgetparamsMapped.xaxistype
                let isHorizontal = widgetparamsMapped.horizontal.toLowerCase()
                let showLegend = widgetparamsMapped.showlegend

                let layout = {
                    title: title,
                    xaxis: {
                        title: xtitle,
                        xaxistype: xaxisType.toLowerCase(),

                    },
                    yaxis: {
                        title: ytitle
                    }
                }

                let config = {
                    displayModeBar: false
                }

                if (!raw_plot_data.queryResult) {
                    // results haven't loaded yet
                    return
                }

                let plot_data = []
                let orientation = isHorizontal ? "v" : "h"
                let headers = raw_plot_data.queryResult.queryResults.headers
                for (let i = 0; i < headers.length - 1; i++) {
                    // make an entry for each set of data points
                    plot_data[i] = {}
                    plot_data[i] = {}
                    plot_data[i].x = []
                    plot_data[i].y = []
                    plot_data[i].name = headers[i+1].name
                    plot_data[i].type = type.toLowerCase()
                    plot_data[i].orientation = orientation
                }

                for (let i = 0; i < raw_plot_data.queryResult.queryResults.rows.length; i++) {
                    let row = raw_plot_data.queryResult.queryResults.rows[i]
                    for (let j = 1; j < row.values.length; j++) {
                        // create pairs of data
                        let row_values = row.values
                        plot_data[j-1].x.push(row_values[0])
                        plot_data[j-1].y.push(row_values[j])

                    }
                }
                
                window.Plotly.newPlot(elementBundle.element, plot_data, layout, config);
            }
        });
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
        this.props.markdownEndpoint(this.props.token, this.state.ownerId, this.state.wikiId)
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

    /**
     * Call Synapse REST API to get AMP-AD wiki portal attachments
     */
    getWikiAttachments() {
        this.props.wikiAttachmentsEndpointFromEntity(this.props.token, this.state.ownerId, this.state.wikiId)
            .then(data => {
                this.setState({ fileHandles: data });
                this.processWidgets(data);
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


        // get wiki attachments
        this.getWikiAttachments();
        
        // sample API call to retrieve Synapse wiki page
        // endpoint = https://repo-prod.prod.sagebase.org/repo/v1/entity/"{ownerId}"/wiki/"{wikiId}"        
        this.getWikiPageMarkdown();

        // process all math identified markdown items
        this.processMath()
    }

    // on component update find and re-render the math/widget items accordingly
    componentDidUpdate () {
        if (this.state.calledReset) {
            this.setState({calledReset: false})
            this.getWikiAttachments()
            this.getWikiPageMarkdown()
        }
        if (this.props.token !== "" && !this.state.isLoggedIn) {
            this.setState({isLoggedIn: true})
            this.getWikiAttachments()
            this.getWikiPageMarkdown()
        }
        this.processMath()
        this.processWidgets()
    }

    getErrorView() {
        if (this.state.errorMessage) {
            return ( 
            <div className="row">
                <p className="text-danger"> Error: {this.state.errorMessage} </p>
            </div>)
        }
    }

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
        return (
            <div className="container border mt-5 pt-3">
                <div className="row">
                    <p className="p-2 text-center" dangerouslySetInnerHTML={this.createMarkup('# Markdown it demo!')}/>
                </div>
                <div className="row mb-3">
                    <form onSubmit={this.resetComponentState}>
                        <div className="form-group ml-2 form-inline">
                            <label> Enter wiki ownerId</label>
                            <input name="newOwnerId" onChange={this.handleChange}  placeholder={this.state.ownerId} type="text" value={this.state.newOwnerId} className="ml-2 form-control"/>
                        </div>
                        <div className="form-group ml-2 form-inline">
                            <label> Enter synapse wikiId</label>
                            <input name="newWikiId" onChange={this.handleChange} placeholder={this.state.wikiId} type="text" value={this.state.newWikiId} className="ml-2 form-control"/>
                        </div>
                        <button onSubmit={this.resetComponentState} type="submit" className="btn ml-3 btn-large btn-primary">Get new wiki</button>
                    </form>
                </div>
               {this.getErrorView()}
                <div className="row">
                    <textarea rows={5} name="text" value={this.state.text} onChange={this.handleChange} className="col-6 border"> </textarea>
                    <div className="col-6 challenge__description" ref={1} dangerouslySetInnerHTML={this.createMarkup(this.state.text)} />
                </div>
            </div>
        )
    }

}

export default Markdown;