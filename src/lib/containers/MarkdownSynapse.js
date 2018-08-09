import React from "react";
import * as SynapseConstants from '../utils/SynapseConstants'
import * as SynapseClient from '../utils/SynapseClient'

import PropTypes from 'prop-types'

import "../style/Portal.css"

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
        this.state = {
            md: require('markdown-it')({html: true}),
            text: '',
            fileHandles: null,
            fileResults: null,
            newOwnerId: "",
            newWikiId: "",
            calledReset: false,
            isLoggedIn: this.props.token !== "",
            errorMessage: "",
            hasReferences: false
        }

        
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
        this.handlePlotlyWidget = this.handlePlotlyWidget.bind(this)
        this.handleReferenceWidget = this.handleReferenceWidget.bind(this)
        this.addFootnotes = this.addFootnotes.bind(this)
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
            'table', 'tr', 'td', 'tbody', 'th', 'thead', "button", "div", "image", "ol", "ul", "li", "svg", "g"],
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

    async processWidgetMappings(widgets, fileHandleAssociationList, elementList) {
        for (let element of widgets) {
            let widgetstring = element.getAttribute("widgetparams");
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
            await this.prepareWidget(widgetType, widgetparamsMapped, element, fileHandleAssociationList, elementList);
        };
    }

    /**
     * Get widgets on screen and transform into their defined compents
     */
    async processWidgets() {
        let widgets = document.querySelectorAll("span[widgetparams]")
        // go through all obtained elements and transform them with katex
        
        // build up request 
        let elementList = []
        let fileHandleAssociationList = []

        // must gather resources for all widgets before making batch file call, wait till done
        console.log('processing widget mappings')
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
                    this.setState({
                        fileResults: data.requestedFiles
                    })
                    // TODO: consider opitmizations in the future
                    this.matchElementToResource(elementList);
                    if (this.state.hasReferences) {
                        this.addFootnotes()
                    }
                }
            )
            .catch(err =>{
                console.log('Error on url grab ', err)
            })
        } else {
            this.matchElementToResource(elementList);
            if (this.state.hasReferences) {
                this.addFootnotes()
            }
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
    async prepareWidget(widgetType, widgetparamsMapped, element, fileHandleAssociationList, elementList) {
        if (widgetType === "buttonlink" && element) {
            let button = "<a href=\"" + widgetparamsMapped.url + "\"class=\"btn btn-lg btn-info\" role=\"button\" >" + widgetparamsMapped.text + "</a>";
            element.outerHTML = button;
        } else if (widgetType === "image" && this.state.fileHandles) {
            let fileName = null
            let match = null
            if (widgetparamsMapped.fileName) {
                fileName = widgetparamsMapped.fileName;
                match = this.matchToHandle(this.compareById(fileName, "fileName"), this.state.fileHandles.list);
                fileHandleAssociationList.push({
                    fileHandleId: match[0].id,
                    associateObjectId: this.props.wikiId,
                    associateObjectType: "WikiAttachment"
                });
                elementList.push({element:element, id: match[0].id, widgetType: widgetType, widgetparamsMapped: widgetparamsMapped});
            } else if (widgetparamsMapped.synapseId) {
                // elements with synapseIds have to have their resources loaded first, their not located
                // with the file attachnent list
                let synapseId = widgetparamsMapped.synapseId;
                await SynapseClient.getEntity(this.props.token, synapseId).then(data => {
                    fileHandleAssociationList.push({
                        fileHandleId: data.dataFileHandleId,
                        associateObjectId: synapseId,
                        associateObjectType: "FileEntity"
                    });
                    elementList.push({element:element, id: data.dataFileHandleId, widgetType: widgetType, widgetparamsMapped: widgetparamsMapped});
                }).catch(err => {
                    console.log("Error on synapse entity image load ", err)
                })
            }
        } else if (widgetType === "plot") {
            elementList.push({element:element, widgetType: widgetType, widgetparamsMapped: widgetparamsMapped});
        } else if (widgetType === "reference") {
            elementList.push({element:element, widgetType: widgetType, widgetparamsMapped: widgetparamsMapped});
        }
    }

    /**
     * match all widgets on the page to their corresponding resource
     *
     * @param {*} elementList dictionary of 
     * @memberof Markdown
     */
    matchElementToResource(elementList) {
        elementList.forEach(elementBundle => {
            if (elementBundle.widgetType === "image") {
                // match corresponds to filehandle that this current element needs to be connected to
                let match = this.matchToHandle(this.compareById(elementBundle.id, "fileHandleId"), this.state.fileResults);
                this.handleImageWidget(match, elementBundle);
            } else if (elementBundle.widgetType === "plot") {
                this.handlePlotlyWidget(elementBundle);
            } else if (elementBundle.widgetType === "reference") {
                this.handleReferenceWidget(elementBundle);
            }
        });
    }

    handleImageWidget(match, elementBundle) {
        let renderedHTML = `<image class="img-fluid" src=${match[0].preSignedURL}></image>`;
        elementBundle.element.outerHTML = renderedHTML;
    }

    handlePlotlyWidget(elementBundle) {
        let widgetparamsMapped = elementBundle.widgetparamsMapped;
        let raw_plot_data = null;
        if (!this.state.queryData || !this.state.queryData[widgetparamsMapped.query]) {
            // grab all the data, hasn't been loaded yet
            raw_plot_data = this.getPlotlyData(widgetparamsMapped);
        }
        else {
            // data already exists, don't regenerate
            raw_plot_data = this.state.queryData[widgetparamsMapped.query];
        }
        if (!raw_plot_data) {
            return
        }
        // grab all the parameters passed into the widget
        let title = widgetparamsMapped.title;
        let xtitle = widgetparamsMapped.xtitle;
        let ytitle = widgetparamsMapped.ytitle;
        let type = widgetparamsMapped.type;
        let xaxisType = widgetparamsMapped.xaxistype;
        let isHorizontal = widgetparamsMapped.horizontal.toLowerCase();
        let showLegend = widgetparamsMapped.showlegend;
        let layout = {
            title: title,
            showlegend: showLegend,
        };
        if (xtitle) {
            layout.xaxis = {
                title: xtitle
            };
        }
        if (xaxisType) {
            layout.xaxis = {
                ...layout.xaxis,
                xaxistype: xaxisType.toLowerCase()
            };
        }
        if (ytitle) {
            layout.yaxis = {
                title: ytitle
            };
        }
        let config = {
            displayModeBar: false
        };
        if (!raw_plot_data.queryResult) {
            // results haven't loaded yet
            return null
        }
        // init plot_data
        let plot_data = [];
        let orientation = isHorizontal ? "v" : "h";
        let headers = raw_plot_data.queryResult.queryResults.headers;
        for (let i = 0; i < headers.length - 1; i++) {
            // make an entry for each set of data points
            plot_data[i] = {
                x: [],
                y: [],
                name: headers[i + 1].name,
                type: type.toLowerCase(),
                orientation: orientation
            };
        }
        // grab all the data
        for (let i = 0; i < raw_plot_data.queryResult.queryResults.rows.length; i++) {
            let row = raw_plot_data.queryResult.queryResults.rows[i];
            for (let j = 1; j < row.values.length; j++) {
                // create pairs of data
                let row_values = row.values;
                plot_data[j - 1].x.push(row_values[0]);
                plot_data[j - 1].y.push(row_values[j]);
            }
        }
        // error with clearing html - "" is not a function 
        // wrapping in try/catch prevents the error, although it doesn't catch it.
        try {
            elementBundle.element.innerHTML = ""; // clear formatting (e.g. <Synapse Widget></SynapseWidget>)
        }
        catch (e) {
            console.log('element bundle error ', e);
        }
        // responsive plot
        // https://plot.ly/javascript/responsive-fluid-layout/#responsive--fluid-layout
        (function () {
            var d3 = window.Plotly.d3;
            var WIDTH_IN_PERCENT_OF_PARENT = 100, HEIGHT_IN_PERCENT_OF_PARENT = 75;
            var gd3 = d3.select(elementBundle.element)
                .append('div')
                .style({
                    width: WIDTH_IN_PERCENT_OF_PARENT + '%',
                    'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 5 + '%',
                    height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh',
                    'margin-top': (100 - HEIGHT_IN_PERCENT_OF_PARENT) / 5 + 'vh'
                });
            var gd = gd3.node();
            window.Plotly.plot(gd, plot_data, layout, config);
            window.onresize = function () {
                window.Plotly.Plots.resize(gd);
            };
        })();
    }

    handleReferenceWidget(elementBundle) {
        let renderedHTML = `<span> <span style=""><div class="ReferenceWidget"><a class="gwt-Anchor link margin-left-5">[${elementBundle.widgetparamsMapped.footnoteId}]</a></div></span></span>`
        elementBundle.element.outerHTML = renderedHTML
        if (!this.state.hasReferences) {
            this.setState({hasReferences: true})
        }
    }


    addFootnotes() {
            if (this.state.hasReferences) {
            console.log('adding footnotes to page')
            let footnotesDict = this.createMarkup(markdownitSynapse.footnotes())
            
            return (
                <React.Fragment>
                    <hr/>
                    <div dangerouslySetInnerHTML={footnotesDict}></div>
                </React.Fragment>
            )
        }
    }

    /**
     * Get data for plotly
     *
     * @param {*} widgetparamsMapped
     * @returns data corresponding to plotly widget
     * @memberof Markdown
     */
    getPlotlyData(widgetparamsMapped) {

        let raw_plot_data = {}
        let maxPageSize = 150

        // step 1: get init query with maxRowsPerPage calculated
        let queryRequest = {
            concreteType: "org.sagebionetworks.repo.model.table.QueryBundleRequest",
            entityId: this.props.ownerId,
            query: {
                isConsistent: false,
                limit: maxPageSize,
                partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS | SynapseConstants.BUNDLE_MASK_QUERY_FACETS, // 9,  // get query results and max rows per page
                offset: 0,
                sql: widgetparamsMapped.query
            }
        };

        // Have to make two "sets" of calls for query, the first one tells us the maximum size per page of data
        // we can get, the following uses that maximum and offsets to the appropriate location to get the data
        // afterwards, the process repeats
        SynapseClient.getQueryTableResults(queryRequest, this.props.token).then(initData => {
            let queryCount = initData.queryResult.queryResults.rows.length
            let totalQueryResults = queryCount
            
            raw_plot_data = initData;

            // Get the subsequent data, note- although the function calls itself, it runs
            // iteratively due to the await
            const getData = async () => {
                if (queryCount === maxPageSize) {
                    maxPageSize = initData.maxRowsPerPage
                    let queryRequestWithMaxPageSize = {
                        concreteType: "org.sagebionetworks.repo.model.table.QueryBundleRequest",
                        entityId: this.props.ownerId,
                        partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
                        query: {
                            isConsistent: false,
                            limit: maxPageSize,
                            offset: totalQueryResults,
                            sql: widgetparamsMapped.query
                        }
                    };
                    await SynapseClient.getQueryTableResults(queryRequestWithMaxPageSize, this.props.token)
                        .then(post_data => {
                            queryCount += post_data.queryResult.queryResults.rows.length
                            if (queryCount > 0) {
                                totalQueryResults += queryCount
                                raw_plot_data.queryResult.queryResults.rows.push(
                                    ...post_data.queryResult.queryResults.rows  // ... spread operator to push all elements on
                                )
                            }
                            return getData()
                        })
                        .catch(err => 
                            {
                                console.log("Error on getting table results ", err)
                            }
                        );
                } else {
                    // set data to this plots sql in the query data
                    let queryData = { ...this.state.queryData }; // shallow copy
                    let query = widgetparamsMapped.query
                    queryData[query] = raw_plot_data;
                    this.setState({
                        queryData
                    });
                    return raw_plot_data
                }
            }
            return getData()
        });
        // when data hasn't loaded yet
        return null
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

    /**
     * Call Synapse REST API to get AMP-AD wiki portal attachments
     */
    getWikiAttachments() {
        SynapseClient.getWikiAttachmentsFromEntity(this.props.token, this.props.ownerId, this.props.wikiId)
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
        // we have to carefully update the component so it doesn't encounter an infinite loop
        if (this.props.token !== "" && !this.state.isLoggedIn) {
            // this is true when user just logged
            this.setState({isLoggedIn: true})
            this.getWikiAttachments()
            this.getWikiPageMarkdown()
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
        return (
            <React.Fragment>
               {this.getErrorView()}
               <div dangerouslySetInnerHTML={this.createMarkup(this.state.text)} />
               {this.addFootnotes()}
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
    ownerId: PropTypes.string.isRequired,
    wikiId: PropTypes.string.isRequired
}

export default MarkdownSynapse;