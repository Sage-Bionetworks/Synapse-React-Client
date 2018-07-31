var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";

/**
 * Import requirements for markdown
 */
var markdownitSynapse = require('markdown-it-synapse');
var markdownSubAlt = require('markdown-it-sub-alt');
var markdownCenterText = require('markdown-it-center-text');
var markdownSynapseHeading = require('markdown-it-synapse-heading');
var markdownSynapseTable = require('markdown-it-synapse-table');
var markdownStrikethrough = require('markdown-it-strikethrough-alt');
var markdownContainer = require('markdown-it-container');
var markdownEmpahsisAlt = require('markdown-it-emphasis-alt');
var markdownInlineComments = require('markdown-it-inline-comments');
var markdownBr = require('markdown-it-br');
var sanitizeHtml = require('sanitize-html');
var synapseMath = require('markdown-it-synapse-math');

/**
 * Basic vanilla Markdownit functionality with latex support, synapse image support, plotly support
 *
 * @class Markdown
 * @extends {React.Component}
 */

var Markdown = function (_React$Component) {
    _inherits(Markdown, _React$Component);

    /**
     * Creates an instance of Markdown.
     * @param {*} props
     */
    function Markdown(props) {
        _classCallCheck(this, Markdown);

        // Store markdown object and text to be rendered by said object
        var _this = _possibleConstructorReturn(this, (Markdown.__proto__ || Object.getPrototypeOf(Markdown)).call(this, props));

        _this.state = {
            md: require('markdown-it')({ html: true }),
            text: '##LaTeX Rendering:\n Pythagorean theorem is  $$a^2 + b^2 = c^2$$\n##Demo of rendering Wiki\n\n',
            fileHandles: null,
            fileResults: null,
            ownerId: "syn14568473",
            wikiId: "582406",
            newOwnerId: "",
            newWikiId: "",
            calledReset: false,
            isLoggedIn: _this.props.token !== ""
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.processMath = _this.processMath.bind(_this);
        _this.createMarkup = _this.createMarkup.bind(_this);
        _this.processWidgets = _this.processWidgets.bind(_this);
        _this.matchToHandle = _this.matchToHandle.bind(_this);
        _this.getWikiAttachments = _this.getWikiAttachments.bind(_this);
        _this.getWikiPageMarkdown = _this.getWikiPageMarkdown.bind(_this);
        _this.matchElementToResource = _this.matchElementToResource.bind(_this);
        _this.prepareWidget = _this.prepareWidget.bind(_this);
        _this.getErrorView = _this.getErrorView.bind(_this);
        _this.resetComponentState = _this.resetComponentState.bind(_this);
        _this.compareById = function (fileName, key) {
            return function (element) {
                return element[key] === fileName;
            };
        };
        return _this;
    }

    /**
     * Given input text, generate markdown object to be passed onto inner html of some container.
     * @param {String} text The text being written in plain markdown
     * @returns {Object} Dictionary to be passed into dangerouslySetInnerHTML with markdown text
     */


    _createClass(Markdown, [{
        key: 'createMarkup',
        value: function createMarkup(text) {
            var initText = this.state.md.render(text);
            var cleanText = sanitizeHtml(initText, {
                allowedTags: ['span', 'code', 'h1', 'h2', 'h3', 'p', 'b', 'i', 'em', 'strong', 'a', 'id', 'table', 'tr', 'td', 'tbody', "button", "div", "image", "ol", "ul", "li", "svg", "g"],
                allowedAttributes: {
                    'a': ['href'],
                    'span': ['*'],
                    'button': ['class'],
                    'div': ['class'],
                    "ul": ["class"],
                    "ol": ["class"],
                    "li": ["class"]
                }
            });
            return { __html: cleanText };
        }

        /**
         * Find all math identified elements of the form [id^=\"mathjax-\"]
         * (e.g. <dom element id="mathjax-10"> text </dom element>)
         * and transform them to their math markedown equivalents
         */

    }, {
        key: 'processMath',
        value: function processMath() {
            // use regex to grab all elements
            var mathExpressions = document.querySelectorAll("[id^=\"mathjax-\"]");
            // go through all obtained elements and transform them with katex
            mathExpressions.forEach(function (element) {
                window.katex.render(element.textContent, element, { throwOnError: false, delimiters: [{ left: "$$", right: "$$", display: true }, { left: "\\(", right: "\\)", display: false }, { left: "\\[", right: "\\]", display: true }]
                });
            });
        }

        /**
         * Get widgets on screen and transform into their defined compents
         */

    }, {
        key: 'processWidgets',
        value: function processWidgets() {
            var _this2 = this;

            var widgets = document.querySelectorAll("span[widgetparams]");
            // go through all obtained elements and transform them with katex

            // build up request 
            var elementList = [];
            var fileHandleAssociationList = [];
            widgets.forEach(function (element) {
                var widgetstring = element.getAttribute("widgetparams");
                var questionIndex = widgetstring.indexOf("?"); // type?
                var widgetType = widgetstring.substring(0, questionIndex); // type
                var widgetparamsMapped = {};
                // map out params and their values
                widgetstring.substring(questionIndex + 1).split("&").forEach(function (keyPair) {
                    var key = void 0,
                        value = void 0;

                    var _keyPair$split = keyPair.split("=");

                    var _keyPair$split2 = _slicedToArray(_keyPair$split, 2);

                    key = _keyPair$split2[0];
                    value = _keyPair$split2[1];

                    value = decodeURIComponent(value);
                    widgetparamsMapped[key] = value;
                });
                _this2.prepareWidget(widgetType, widgetparamsMapped, element, fileHandleAssociationList, elementList);
            });

            // Process all the files found on the page
            // if this is the first run load the file results, otherwise
            // use the already retrieved files
            if (fileHandleAssociationList.length > 0 && this.state.fileResults === null) {
                var request = {
                    requestedFiles: fileHandleAssociationList,
                    includePreSignedURLs: true,
                    includeFileHandles: false,
                    includePreviewPreSignedURLs: false
                };
                this.props.getFileURLs(request, this.props.token).then(function (data) {
                    _this2.setState({
                        fileResults: data.requestedFiles
                    });
                    _this2.matchElementToResource(elementList);
                }).catch(function (err) {
                    console.log('Error on url grab ', err);
                });
            } else {
                this.matchElementToResource(elementList);
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

    }, {
        key: 'prepareWidget',
        value: function prepareWidget(widgetType, widgetparamsMapped, element, fileHandleAssociationList, elementList) {
            if (widgetType === "buttonlink") {
                var button = "<a href=\"" + widgetparamsMapped.url + "\"class=\"btn btn-lg btn-info\" role=\"button\" >" + widgetparamsMapped.text + "</a>";
                element.outerHTML = button;
            } else if (widgetType === "image" && this.state.fileHandles) {
                var fileName = decodeURIComponent(widgetparamsMapped.fileName);
                var match = this.matchToHandle(this.compareById(fileName, "fileName"), this.state.fileHandles.list);
                if (match.length > 0) {
                    fileHandleAssociationList.push({
                        fileHandleId: match[0].id,
                        associateObjectId: this.state.wikiId,
                        associateObjectType: "WikiAttachment"
                    });
                    elementList.push({ element: element, id: match[0].id, widgetType: widgetType, widgetparamsMapped: widgetparamsMapped });
                }
            } else if (widgetType === "plot") {
                elementList.push({ element: element, widgetType: widgetType, widgetparamsMapped: widgetparamsMapped });
            }
        }

        /**
         * match all widgets on the page to their corresponding resource
         *
         * @param {*} elementList dictionary of 
         * @memberof Markdown
         */

    }, {
        key: 'matchElementToResource',
        value: function matchElementToResource(elementList) {
            var _this3 = this;

            elementList.forEach(function (elementBundle) {
                var match = _this3.matchToHandle(_this3.compareById(elementBundle.id, "fileHandleId"), _this3.state.fileResults);
                var renderedHTML = "";
                if (elementBundle.widgetType === "image") {
                    renderedHTML = "<image class=\"img-fluid\" src=" + match[0].preSignedURL + "></image>";
                    elementBundle.element.outerHTML = renderedHTML;
                } else if (elementBundle.widgetType === "plot") {
                    var widgetparamsMapped = elementBundle.widgetparamsMapped;
                    var raw_plot_data = {};

                    if (!_this3.state.queryData) {
                        // grab all the data, hasn't been loaded uet
                        var queryRequest = {
                            // TODO: verify these parameters
                            concreteType: "org.sagebionetworks.repo.model.table.QueryBundleRequest",
                            entityId: _this3.state.ownerId,
                            partsMask: 13,
                            query: {
                                isConsistent: false,
                                limit: 150,
                                offset: 0,
                                sql: widgetparamsMapped.query
                            }
                        };
                        _this3.props.getQueryTableResults(queryRequest, _this3.props.token).then(function (data) {
                            // match id to data retrieved
                            var title = widgetparamsMapped.title;
                            var queryData = Object.assign({}, _this3.state.queryData); // shallow copy
                            queryData[title] = data; // place property
                            _this3.setState({
                                queryData: queryData
                            });
                            raw_plot_data = data;
                        });
                    } else {
                        // data already exists, don't regenerate
                        raw_plot_data = _this3.state.queryData[widgetparamsMapped.title];
                    }

                    // grab all the parameters passed into the widget
                    var title = widgetparamsMapped.title;
                    var xtitle = widgetparamsMapped.xtitle;
                    var ytitle = widgetparamsMapped.ytitle;
                    var type = widgetparamsMapped.type;
                    var xaxisType = widgetparamsMapped.xaxistype;
                    var isHorizontal = widgetparamsMapped.horizontal.toLowerCase();
                    var showLegend = widgetparamsMapped.showlegend;

                    var layout = {
                        title: title,
                        xaxis: {
                            title: xtitle,
                            xaxistype: xaxisType.toLowerCase()

                        },
                        yaxis: {
                            title: ytitle
                        },
                        showlegend: showLegend
                    };

                    var config = {
                        displayModeBar: false
                    };

                    if (!raw_plot_data.queryResult) {
                        // results haven't loaded yet
                        return;
                    }

                    // init plot_data
                    var plot_data = [];
                    var orientation = isHorizontal ? "v" : "h";
                    var headers = raw_plot_data.queryResult.queryResults.headers;
                    for (var i = 0; i < headers.length - 1; i++) {
                        // make an entry for each set of data points
                        plot_data[i] = {};
                        plot_data[i] = {};
                        plot_data[i].x = [];
                        plot_data[i].y = [];
                        plot_data[i].name = headers[i + 1].name;
                        plot_data[i].type = type.toLowerCase();
                        plot_data[i].orientation = orientation;
                    }

                    // grab all the data
                    for (var _i = 0; _i < raw_plot_data.queryResult.queryResults.rows.length; _i++) {
                        var row = raw_plot_data.queryResult.queryResults.rows[_i];
                        for (var j = 1; j < row.values.length; j++) {
                            // create pairs of data
                            var row_values = row.values;
                            plot_data[j - 1].x.push(row_values[0]);
                            plot_data[j - 1].y.push(row_values[j]);
                        }
                    }
                    elementBundle.element.innerHTML = ""; // clear formatting
                    // TODO: Configure class property for display and position
                    window.Plotly.react(elementBundle.element, plot_data, layout, config);
                    window.Plotly.restyle(elementBundle.element, { display: "inline-block", position: "relative", autosize: true });
                }
            });
        }

        /**
         * Attach markdown to wiki attachments
         */

    }, {
        key: 'matchToHandle',
        value: function matchToHandle(comparator, objectList) {
            if (objectList) {
                // make sure the files have loaded
                var filtered = objectList.filter(comparator);
                return filtered;
            }
        }

        /**
         * Updates internal state with the event that was triggered
         *
         * @param {*} event Form update
         */

    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            var target = event.target;
            var name = target.name;
            var value = target.value;
            this.setState(_defineProperty({}, name, value));
        }
        /**
         * Call Synapse REST API to get AMP-AD wiki portal markdown as demo of API call
         */

    }, {
        key: 'getWikiPageMarkdown',
        value: function getWikiPageMarkdown() {
            var _this4 = this;

            this.props.markdownEndpoint(this.props.token, this.state.ownerId, this.state.wikiId).then(function (data) {
                // on success grab text and append to the default text
                var initText = _this4.state.text;
                _this4.setState({
                    text: initText + data.markdown
                });
            }).catch(function (err) {
                console.log('Error on wiki markdown load\n', err);
            });
        }

        /**
         * Call Synapse REST API to get AMP-AD wiki portal attachments
         */

    }, {
        key: 'getWikiAttachments',
        value: function getWikiAttachments() {
            var _this5 = this;

            this.props.wikiAttachmentsEndpointFromEntity(this.props.token, this.state.ownerId, this.state.wikiId).then(function (data) {
                _this5.setState({ fileHandles: data });
                _this5.processWidgets(data);
                _this5.setState({
                    errorMessage: ""
                });
            }).catch(function (err) {
                _this5.setState({
                    errorMessage: err.reason
                });
                console.log("Error on wiki attachment load ", err);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            // markdownitSynapse wraps around md object and uses its own dependencies
            markdownitSynapse.init_markdown_it(this.state.md, markdownSubAlt, markdownEmpahsisAlt, markdownCenterText, markdownSynapseHeading, markdownSynapseTable, markdownStrikethrough, markdownContainer, markdownEmpahsisAlt, markdownInlineComments, markdownBr);

            var mathSuffix = '';
            // Update the internal md object with the wrapped synapse object
            this.setState({
                md: this.state.md.use(markdownitSynapse, mathSuffix).use(synapseMath, mathSuffix)
            });

            // get wiki attachments
            this.getWikiAttachments();

            // sample API call to retrieve Synapse wiki page
            // endpoint = https://repo-prod.prod.sagebase.org/repo/v1/entity/"{ownerId}"/wiki/"{wikiId}"        
            this.getWikiPageMarkdown();

            // process all math identified markdown items
            this.processMath();
        }

        // on component update find and re-render the math/widget items accordingly

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            // we have to carefully update the component so it doesn't encounter an infinite loop
            /* two scenarios in which theres an update:
                1. Submit was used to request another wiki page be rendered
                2. User logged in and has different priveledges to see or not see a certain wiki page
            */
            if (this.state.calledReset) {
                this.setState({ calledReset: false });
                this.getWikiAttachments();
                this.getWikiPageMarkdown();
            }
            if (this.props.token !== "" && !this.state.isLoggedIn) {
                this.setState({ isLoggedIn: true });
                this.getWikiAttachments();
                this.getWikiPageMarkdown();
            }
            this.processMath();
            this.processWidgets();
        }

        // If theres an error loading the wiki page show an informative message
        // likely a priveledge issue -- (e.g. not signed-in)
        /**
         * If theres an error loading the wiki page show an informative message
         * likely a priveledge issue -- (e.g. not signed-in)
         * 
         * @returns view that presents error message on error, otherwise null
         */

    }, {
        key: 'getErrorView',
        value: function getErrorView() {
            if (this.state.errorMessage) {
                return React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'p',
                        { className: 'text-danger' },
                        ' Error: ',
                        this.state.errorMessage,
                        ' '
                    )
                );
            }
        }

        /**
         *  Reset the components state to initial
         *
         * @param {*} event click event from submit button
         * @memberof Markdown
         */

    }, {
        key: 'resetComponentState',
        value: function resetComponentState(event) {
            event.preventDefault();

            this.setState({
                ownerId: this.state.newOwnerId,
                wikiId: this.state.newWikiId,
                newOwnerId: "",
                newWikiId: "",
                fileHandles: null,
                fileResults: null,
                text: "",
                calledReset: true
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'container border mt-5 pt-3' },
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement('p', { className: 'p-2 text-center', dangerouslySetInnerHTML: this.createMarkup('# Markdown it demo!') })
                ),
                React.createElement(
                    'div',
                    { className: 'row mb-3' },
                    React.createElement(
                        'form',
                        { onSubmit: this.resetComponentState },
                        React.createElement(
                            'div',
                            { className: 'form-group ml-2 form-inline' },
                            React.createElement(
                                'label',
                                null,
                                ' Enter wiki ownerId'
                            ),
                            React.createElement('input', { name: 'newOwnerId', onChange: this.handleChange, placeholder: this.state.ownerId, type: 'text', value: this.state.newOwnerId, className: 'ml-2 form-control' })
                        ),
                        React.createElement(
                            'div',
                            { className: 'form-group ml-2 form-inline' },
                            React.createElement(
                                'label',
                                null,
                                ' Enter synapse wikiId'
                            ),
                            React.createElement('input', { name: 'newWikiId', onChange: this.handleChange, placeholder: this.state.wikiId, type: 'text', value: this.state.newWikiId, className: 'ml-2 form-control' })
                        ),
                        React.createElement(
                            'button',
                            { onSubmit: this.resetComponentState, type: 'submit', className: 'btn ml-3 btn-large btn-primary' },
                            'Get new wiki'
                        )
                    )
                ),
                this.getErrorView(),
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'textarea',
                        { rows: 5, name: 'text', value: this.state.text, onChange: this.handleChange, className: 'col-6 border' },
                        ' '
                    ),
                    React.createElement('div', { className: 'col-6 challenge__description', ref: 1, dangerouslySetInnerHTML: this.createMarkup(this.state.text) })
                )
            );
        }
    }]);

    return Markdown;
}(React.Component);

export default Markdown;