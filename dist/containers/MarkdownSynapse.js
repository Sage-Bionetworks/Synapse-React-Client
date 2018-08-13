import _regeneratorRuntime from 'babel-runtime/regenerator';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";
import * as SynapseConstants from '../utils/SynapseConstants';
import * as SynapseClient from '../utils/SynapseClient';

import PropTypes from 'prop-types';

import "../style/Portal.css";

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

var MarkdownSynapse = function (_React$Component) {
    _inherits(MarkdownSynapse, _React$Component);

    /**
     * Creates an instance of Markdown.
     * @param {*} props
     */
    function MarkdownSynapse(props) {
        _classCallCheck(this, MarkdownSynapse);

        // Store markdown object and text to be rendered by said object
        // async data goes inside of state, in this way and setState calls will
        // update those positions on the page where async requirements are needed
        var _this = _possibleConstructorReturn(this, (MarkdownSynapse.__proto__ || Object.getPrototypeOf(MarkdownSynapse)).call(this, props));

        _this.state = {
            md: require('markdown-it')({ html: true }),
            text: '',
            fileHandles: null,
            newOwnerId: "",
            newWikiId: "",
            calledReset: false,
            isLoggedIn: _this.props.token !== "",
            errorMessage: "",
            queryData: {}

            // Put synchronous data in their own variables
        };_this.fileResults = null;
        _this.hasBookmarks = false;
        _this.bookmarksFirstSceen = false;
        _this.hasProcessedReferences = false;
        _this.referenceView = [];
        _this.footnoteRef = React.createRef();
        _this.markupRef = React.createRef();

        // handle widgets and math markdown
        _this.processWidgets = _this.processWidgets.bind(_this);
        _this.processMath = _this.processMath.bind(_this);
        // handle init calls to get wiki related items
        _this.getWikiAttachments = _this.getWikiAttachments.bind(_this);
        _this.getWikiPageMarkdown = _this.getWikiPageMarkdown.bind(_this);

        // handle pre/post processing of widgets
        _this.prepareWidget = _this.prepareWidget.bind(_this);
        _this.processWidgetMappings = _this.processWidgetMappings.bind(_this);
        _this.matchElementToResource = _this.matchElementToResource.bind(_this);
        _this.matchToHandle = _this.matchToHandle.bind(_this);
        _this.compareById = function (fileName, key) {
            return function (element) {
                return element[key] === fileName;
            };
        };

        // state related functions
        _this.getErrorView = _this.getErrorView.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        _this.createMarkup = _this.createMarkup.bind(_this);

        // handling each of the synapse widgets
        _this.handleImageWidget = _this.handleImageWidget.bind(_this);
        _this.handlePlotlyWidget = _this.handlePlotlyWidget.bind(_this);
        _this.handleReferenceWidget = _this.handleReferenceWidget.bind(_this);
        _this.addBookmarks = _this.addBookmarks.bind(_this);
        return _this;
    }

    /**
     * Given input text, generate markdown object to be passed onto inner html of some container.
     * @param {String} text The text being written in plain markdown
     * @returns {Object} Dictionary to be passed into dangerouslySetInnerHTML with markdown text
     */


    _createClass(MarkdownSynapse, [{
        key: 'createMarkup',
        value: function createMarkup(text) {
            var initText = this.state.md.render(text);
            var cleanText = sanitizeHtml(initText, {
                allowedTags: ['span', 'code', 'h1', 'h2', 'h3', 'h4', 'h5', 'p', 'b', 'i', 'em', 'strong', 'a', 'id', 'table', 'tr', 'td', 'tbody', 'th', 'thead', "button", "div", "image", "ol", "ul", "li", "svg", "g", "br"],
                allowedAttributes: {
                    'a': ['href'],
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
            var mathExpressions = this.markupRef.current.querySelectorAll("[id^=\"mathjax-\"]");
            // go through all obtained elements and transform them with katex
            mathExpressions.forEach(function (element) {
                window.katex.render(element.textContent, element, { throwOnError: false, delimiters: [{ left: "$$", right: "$$", display: true }, { left: "\\(", right: "\\)", display: false }, { left: "\\[", right: "\\]", display: true }]
                });
            });
        }
    }, {
        key: 'processWidgetMappings',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(widgets, fileHandleAssociationList, elementList) {
                var _this2 = this;

                var _loop, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, element;

                return _regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _loop = /*#__PURE__*/_regeneratorRuntime.mark(function _callee(element) {
                                    var widgetstring, questionIndex, widgetType, widgetparamsMapped;
                                    return _regeneratorRuntime.wrap(function _callee$(_context) {
                                        while (1) {
                                            switch (_context.prev = _context.next) {
                                                case 0:
                                                    widgetstring = element.getAttribute("widgetparams");
                                                    questionIndex = widgetstring.indexOf("?"); // type?

                                                    widgetType = widgetstring.substring(0, questionIndex); // type

                                                    widgetparamsMapped = {};
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
                                                    _context.next = 7;
                                                    return _this2.prepareWidget(widgetType, widgetparamsMapped, element, fileHandleAssociationList, elementList);

                                                case 7:
                                                case 'end':
                                                    return _context.stop();
                                            }
                                        }
                                    }, _callee, _this2);
                                });
                                _iteratorNormalCompletion = true;
                                _didIteratorError = false;
                                _iteratorError = undefined;
                                _context2.prev = 4;
                                _iterator = widgets[Symbol.iterator]();

                            case 6:
                                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                    _context2.next = 12;
                                    break;
                                }

                                element = _step.value;
                                return _context2.delegateYield(_loop(element), 't0', 9);

                            case 9:
                                _iteratorNormalCompletion = true;
                                _context2.next = 6;
                                break;

                            case 12:
                                _context2.next = 18;
                                break;

                            case 14:
                                _context2.prev = 14;
                                _context2.t1 = _context2['catch'](4);
                                _didIteratorError = true;
                                _iteratorError = _context2.t1;

                            case 18:
                                _context2.prev = 18;
                                _context2.prev = 19;

                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return();
                                }

                            case 21:
                                _context2.prev = 21;

                                if (!_didIteratorError) {
                                    _context2.next = 24;
                                    break;
                                }

                                throw _iteratorError;

                            case 24:
                                return _context2.finish(21);

                            case 25:
                                return _context2.finish(18);

                            case 26:
                                ;

                            case 27:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[4, 14, 18, 26], [19,, 21, 25]]);
            }));

            function processWidgetMappings(_x, _x2, _x3) {
                return _ref.apply(this, arguments);
            }

            return processWidgetMappings;
        }()

        /**
         * Get widgets on screen and transform into their defined compents
         */

    }, {
        key: 'processWidgets',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
                var _this3 = this;

                var widgets, elementList, fileHandleAssociationList, request;
                return _regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                widgets = document.querySelectorAll("span[widgetparams]");
                                // go through all obtained elements and transform them with katex

                                // build up request 

                                elementList = [];
                                fileHandleAssociationList = [];

                                // must gather resources for all widgets before making batch file call, wait till done

                                _context3.next = 5;
                                return this.processWidgetMappings(widgets, fileHandleAssociationList, elementList);

                            case 5:

                                // Process all the files found on the page
                                // if this is the first run load the file results, otherwise
                                // use the already retrieved files
                                if (fileHandleAssociationList.length > 0 && this.fileResults === null) {
                                    // include length check to make sure all resources are loaded
                                    request = {
                                        requestedFiles: fileHandleAssociationList,
                                        includePreSignedURLs: true,
                                        includeFileHandles: false,
                                        includePreviewPreSignedURLs: false
                                    };

                                    SynapseClient.getFiles(request, this.props.token).then(function (data) {
                                        _this3.fileResults = data.requestedFiles;
                                        // TODO: consider opitmizations in the future
                                        markdownitSynapse.resetFootnoteId();
                                        _this3.matchElementToResource(elementList);
                                        _this3.addBookmarks();
                                    }).catch(function (err) {
                                        console.log('Error on url grab ', err);
                                    });
                                } else {
                                    this.matchElementToResource(elementList);
                                    this.addBookmarks();
                                }

                            case 6:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function processWidgets() {
                return _ref2.apply(this, arguments);
            }

            return processWidgets;
        }()

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
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(widgetType, widgetparamsMapped, element, fileHandleAssociationList, elementList) {
                var button, fileName, match, synapseId;
                return _regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                if (!(widgetType === "buttonlink" && element && element.parentElement)) {
                                    _context4.next = 5;
                                    break;
                                }

                                // check parent element
                                button = "<a href=\"" + widgetparamsMapped.url + "\"class=\"btn btn-lg btn-info\" role=\"button\" >" + widgetparamsMapped.text + "</a>";

                                element.outerHTML = button;
                                _context4.next = 22;
                                break;

                            case 5:
                                if (!(widgetType === "image" && this.state.fileHandles)) {
                                    _context4.next = 21;
                                    break;
                                }

                                fileName = null;
                                match = null;

                                if (!widgetparamsMapped.fileName) {
                                    _context4.next = 15;
                                    break;
                                }

                                fileName = widgetparamsMapped.fileName;
                                match = this.matchToHandle(this.compareById(fileName, "fileName"), this.state.fileHandles.list);
                                fileHandleAssociationList.push({
                                    fileHandleId: match[0].id,
                                    associateObjectId: this.props.wikiId,
                                    associateObjectType: "WikiAttachment"
                                });
                                elementList.push({ element: element, id: match[0].id, widgetType: widgetType, widgetparamsMapped: widgetparamsMapped });
                                _context4.next = 19;
                                break;

                            case 15:
                                if (!widgetparamsMapped.synapseId) {
                                    _context4.next = 19;
                                    break;
                                }

                                // elements with synapseIds have to have their resources loaded first, their not located
                                // with the file attachnent list
                                synapseId = widgetparamsMapped.synapseId;
                                _context4.next = 19;
                                return SynapseClient.getEntity(this.props.token, synapseId).then(function (data) {
                                    fileHandleAssociationList.push({
                                        fileHandleId: data.dataFileHandleId,
                                        associateObjectId: synapseId,
                                        associateObjectType: "FileEntity"
                                    });
                                    elementList.push({ element: element, id: data.dataFileHandleId, widgetType: widgetType, widgetparamsMapped: widgetparamsMapped });
                                }).catch(function (err) {
                                    console.log("Error on synapse entity image load ", err);
                                });

                            case 19:
                                _context4.next = 22;
                                break;

                            case 21:
                                if (widgetType === "plot") {
                                    elementList.push({ element: element, widgetType: widgetType, widgetparamsMapped: widgetparamsMapped });
                                } else if (widgetType === "reference") {
                                    elementList.push({ element: element, widgetType: widgetType, widgetparamsMapped: widgetparamsMapped });
                                }

                            case 22:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function prepareWidget(_x4, _x5, _x6, _x7, _x8) {
                return _ref3.apply(this, arguments);
            }

            return prepareWidget;
        }()

        /**
         * match all widgets on the page to their corresponding resource
         *
         * @param {*} elementList dictionary of 
         * @memberof Markdown
         */

    }, {
        key: 'matchElementToResource',
        value: function matchElementToResource(elementList) {
            var _this4 = this;

            var referenceCount = 0;
            elementList.forEach(function (elementBundle) {
                if (elementBundle.widgetType === "image") {
                    // match corresponds to filehandle that this current element needs to be connected to
                    var match = _this4.matchToHandle(_this4.compareById(elementBundle.id, "fileHandleId"), _this4.fileResults);
                    _this4.handleImageWidget(match, elementBundle);
                } else if (elementBundle.widgetType === "plot") {
                    _this4.handlePlotlyWidget(elementBundle);
                } else if (elementBundle.widgetType === "reference") {
                    _this4.handleReferenceWidget(elementBundle, referenceCount++);
                }
            });
            this.hasProcessedReferences = elementList.length > 0 ? true : false;
        }
    }, {
        key: 'handleImageWidget',
        value: function handleImageWidget(match, elementBundle) {
            var renderedHTML = '<image class="img-fluid" src=' + match[0].preSignedURL + '></image>';
            elementBundle.element.outerHTML = renderedHTML;
        }
    }, {
        key: 'handlePlotlyWidget',
        value: function handlePlotlyWidget(elementBundle) {
            var widgetparamsMapped = elementBundle.widgetparamsMapped;
            var raw_plot_data = null;
            if (!this.state.queryData || !this.state.queryData[widgetparamsMapped.query]) {
                // grab all the data, hasn't been loaded yet
                raw_plot_data = this.getPlotlyData(widgetparamsMapped);
            } else {
                // data already exists, don't regenerate
                raw_plot_data = this.state.queryData[widgetparamsMapped.query];
            }
            if (!raw_plot_data) {
                return;
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
                showlegend: showLegend
            };
            if (xtitle) {
                layout.xaxis = {
                    title: xtitle
                };
            }
            if (xaxisType) {
                layout.xaxis = Object.assign({}, layout.xaxis, {
                    xaxistype: xaxisType.toLowerCase()
                });
            }
            if (ytitle) {
                layout.yaxis = {
                    title: ytitle
                };
            }
            var config = {
                displayModeBar: false
            };
            if (!raw_plot_data.queryResult) {
                // results haven't loaded yet
                return null;
            }
            // init plot_data
            var plot_data = [];
            var orientation = isHorizontal ? "v" : "h";
            var headers = raw_plot_data.queryResult.queryResults.headers;
            for (var i = 0; i < headers.length - 1; i++) {
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
            for (var _i = 0; _i < raw_plot_data.queryResult.queryResults.rows.length; _i++) {
                var row = raw_plot_data.queryResult.queryResults.rows[_i];
                for (var j = 1; j < row.values.length; j++) {
                    // create pairs of data
                    var row_values = row.values;
                    plot_data[j - 1].x.push(row_values[0]);
                    plot_data[j - 1].y.push(row_values[j]);
                }
            }
            // error with clearing html - "" is not a function 
            // wrapping in try/catch prevents the error, although it doesn't catch it.
            try {
                elementBundle.element.innerHTML = ""; // clear formatting (e.g. <Synapse Widget></SynapseWidget>)
            } catch (e) {
                console.log('element bundle error ', e);
            }
            // responsive plot
            // https://plot.ly/javascript/responsive-fluid-layout/#responsive--fluid-layout
            (function () {
                var d3 = window.Plotly.d3;
                var WIDTH_IN_PERCENT_OF_PARENT = 100,
                    HEIGHT_IN_PERCENT_OF_PARENT = 75;
                var gd3 = d3.select(elementBundle.element).append('div').style({
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

        /**
         * Handles ?{reference} synapse widgets
         *
         * @param {*} elementBundle
         * @param {*} index
         * @memberof MarkdownSynapse
         */

    }, {
        key: 'handleReferenceWidget',
        value: function handleReferenceWidget(elementBundle, index) {
            var renderedHTML = "";

            // due to re-renering, we save the result of this method, on initial calculate the html, otherwise we just 
            // it
            if (!this.hasProcessedReferences) {
                renderedHTML = '<span> <span><div class="ReferenceWidget"><a href="#" class="margin-left-5">[' + elementBundle.widgetparamsMapped.footnoteId + ']</a></div></span></span>';
                this.referenceView.push(renderedHTML);
            } else {
                renderedHTML = this.referenceView[index];
            }

            // attach an anchor tag with an event listener to jump to the appropriate bookmark at the bottom of the page
            // note- can't save the dom element as in addBookmarks() the even listener seems to break this option
            renderedHTML = document.createRange().createContextualFragment(renderedHTML);
            renderedHTML.querySelector("a").addEventListener("click", function (event) {
                event.preventDefault();
                // find and go to the bookmark at the bottom of the page
                var goTo = document.getElementById('bookmark' + index);
                goTo.scrollIntoView();
            });

            elementBundle.element.innerText = ""; // clear the <Synapse widget> text
            elementBundle.element.appendChild(renderedHTML);
            this.hasBookmarks = true;
        }

        /**
         * Process all the corresponding bookmark tags of the references made throughout the page
         *
         * @memberof MarkdownSynapse
         */

    }, {
        key: 'addBookmarks',
        value: function addBookmarks() {
            /* we have to check that:
                1) there are bookmarks on the page
                2) we haven't already processed bookmarks on a previous render of the page
            */
            if (this.hasBookmarks && !this.bookmarksFirstSceen) {
                var footnotes_html = this.createMarkup(markdownitSynapse.footnotes()).__html;
                var node = this.footnoteRef.current; // corresponds to <p> tag in render below
                // remove the <p> tag -- we have a ref to one in render, so this has to be removed
                footnotes_html = footnotes_html.substring(3, footnotes_html.length - 5);
                // find all links in the footnotes_html-- each of which contains a "text=[\d]"
                var linkOccurences = footnotes_html.match(/text=\[.\]/g).map(function (element) {
                    // grab only the [\d] pieces of the text
                    return element.substring(element.indexOf("["), element.indexOf("]") + 1);
                });

                // Go through each of the [1] and format to the appropriate view
                var linkFormatted = linkOccurences.map(function (element, index) {
                    // here bookmark is used so that the references can target this anchor tag 
                    return '<span><div class="BookmarkWidget"><a id=' + ("bookmark" + index) + '>' + element + '</a></div></span>';
                });

                // now all of the links are prepared to be inserted back into the original string
                // all link occurences have a single location in the original string-- we go through and then 
                // match of the link occurences to the spot it belongs into the html
                var i = 0;
                var matches = footnotes_html.replace(/(<span widgetparams=.*>)(&lt;Synapse widget&gt;)(<\/span>)/gm,
                // replace using a function where p1,p2,p3 correspond to the matched groups from above
                // specifically removing the Synapse widget text and then putting instead of the anchor tag with the link
                // formatted text from above
                function (match, p1, p2, p3, string) {
                    return [p1, linkFormatted[i++], p3].join("");
                });

                // create the dom element for this view and append to the ref
                var bookmarkFragment = document.createRange().createContextualFragment(matches);
                node.appendChild(bookmarkFragment);
                // save the result of the operation from above
                this.bookmarksFirstSceen = true;
                this.bookmarkFragment = bookmarkFragment;
            } else if (this.hasBookmarks) {
                // we've already computed the bookmarks, we can instead used the saved fragment
                this.footnoteRef.current.appendChild(this.bookmarkFragment);
            }
        }

        /**
         * Get data for plotly
         *
         * @param {*} widgetparamsMapped
         * @returns data corresponding to plotly widget
         * @memberof Markdown
         */

    }, {
        key: 'getPlotlyData',
        value: function getPlotlyData(widgetparamsMapped) {
            var _this5 = this;

            var raw_plot_data = {};
            var maxPageSize = 150;

            // step 1: get init query with maxRowsPerPage calculated
            var queryRequest = {
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
            SynapseClient.getQueryTableResults(queryRequest, this.props.token).then(function (initData) {
                var queryCount = initData.queryResult.queryResults.rows.length;
                var totalQueryResults = queryCount;

                raw_plot_data = initData;

                // Get the subsequent data, note- although the function calls itself, it runs
                // iteratively due to the await
                var getData = function () {
                    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5() {
                        var queryRequestWithMaxPageSize, queryData, query;
                        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
                            while (1) {
                                switch (_context5.prev = _context5.next) {
                                    case 0:
                                        if (!(queryCount === maxPageSize)) {
                                            _context5.next = 7;
                                            break;
                                        }

                                        maxPageSize = initData.maxRowsPerPage;
                                        queryRequestWithMaxPageSize = {
                                            concreteType: "org.sagebionetworks.repo.model.table.QueryBundleRequest",
                                            entityId: _this5.props.ownerId,
                                            partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
                                            query: {
                                                isConsistent: false,
                                                limit: maxPageSize,
                                                offset: totalQueryResults,
                                                sql: widgetparamsMapped.query
                                            }
                                        };
                                        _context5.next = 5;
                                        return SynapseClient.getQueryTableResults(queryRequestWithMaxPageSize, _this5.props.token).then(function (post_data) {
                                            queryCount += post_data.queryResult.queryResults.rows.length;
                                            if (queryCount > 0) {
                                                var _raw_plot_data$queryR;

                                                totalQueryResults += queryCount;
                                                (_raw_plot_data$queryR = raw_plot_data.queryResult.queryResults.rows).push.apply(_raw_plot_data$queryR, _toConsumableArray(post_data.queryResult.queryResults.rows));
                                            }
                                            return getData();
                                        }).catch(function (err) {
                                            console.log("Error on getting table results ", err);
                                        });

                                    case 5:
                                        _context5.next = 12;
                                        break;

                                    case 7:
                                        // set data to this plots sql in the query data
                                        queryData = Object.assign({}, _this5.state.queryData); // shallow copy

                                        query = widgetparamsMapped.query;

                                        queryData[query] = raw_plot_data;
                                        _this5.setState({
                                            queryData: queryData
                                        });
                                        return _context5.abrupt('return', raw_plot_data);

                                    case 12:
                                    case 'end':
                                        return _context5.stop();
                                }
                            }
                        }, _callee5, _this5);
                    }));

                    return function getData() {
                        return _ref4.apply(this, arguments);
                    };
                }();
                return getData();
            });
            // when data hasn't loaded yet
            return null;
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
            var _this6 = this;

            SynapseClient.getEntityWiki(this.props.token, this.props.ownerId, this.props.wikiId).then(function (data) {
                // on success grab text and append to the default text
                var initText = _this6.state.text;
                _this6.setState({
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
            var _this7 = this;

            SynapseClient.getWikiAttachmentsFromEntity(this.props.token, this.props.ownerId, this.props.wikiId).then(function (data) {
                _this7.setState({ fileHandles: data });
                _this7.processWidgets(data);
                _this7.setState({
                    errorMessage: ""
                });
            }).catch(function (err) {
                _this7.setState({
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

            // TODO: if supplying only markdown then there can't be any widgets
            // that require an owner/synapse id -- supplying markdown may not be 
            // an option

            if (this.props.markdown) {
                this.setState({
                    text: this.props.markdown
                });
            } else {
                // get wiki attachments
                this.getWikiAttachments();
                // sample API call to retrieve Synapse wiki page
                // endpoint = https://repo-prod.prod.sagebase.org/repo/v1/entity/"{ownerId}"/wiki/"{wikiId}"        
                this.getWikiPageMarkdown();
            }
            // process all math identified markdown items
            this.processMath();
        }

        // on component update find and re-render the math/widget items accordingly

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            // we have to carefully update the component so it doesn't encounter an infinite loop
            if (this.props.token !== "" && !this.state.isLoggedIn) {
                // this is true when user just logged
                this.setState({ isLoggedIn: true });
                // only if they didn't supply markdown should this happen
                if (!this.props.markdown) {
                    this.getWikiAttachments();
                    this.getWikiPageMarkdown();
                }
            }
            this.processMath();
            this.processWidgets();
        }

        /**
         * If theres an error loading the wiki page show an informative message
         * likely a priveledge issue -- (e.g. not signed-in)
         * 
         * @returns view that presents error message on error, otherwise null
         */

    }, {
        key: 'getErrorView',
        value: function getErrorView() {
            if (this.state.errorMessage && this.props.errorMessageView) {
                return React.createElement(
                    React.Fragment,
                    null,
                    React.cloneElement(this.props.errorMessageView, { message: this.state.errorMessage })
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

            var visibility = {
                visibility: this.hasBookmarks ? "visible" : "hidden"
            };

            return React.createElement(
                React.Fragment,
                null,
                this.getErrorView(),
                React.createElement('div', { ref: this.markupRef, dangerouslySetInnerHTML: this.createMarkup(this.state.text) }),
                React.createElement('hr', { style: visibility }),
                React.createElement('p', { ref: this.footnoteRef, style: visibility })
            );
        }
    }]);

    return MarkdownSynapse;
}(React.Component);

var requiredPropsCheck = function requiredPropsCheck(props, propName, componentName) {
    if (!props.ownerId && !props.wikiId && !props.markdown) {
        return new Error('Either ownerId and wikiId OR markdown is required by \'' + componentName + '\' component.');
    } else if (props.ownerId && props.wikiId && props.markdown) {
        return new Error('Either ownerId and wikiId OR markdown can be specified by \'' + componentName + '\' component.');
    }
};

// Validate props passed to the component
MarkdownSynapse.propTypes = {
    // optional
    errorMessageView: PropTypes.element,

    // required props
    token: PropTypes.string.isRequired,

    // either owner id and wiki required
    ownerId: requiredPropsCheck,
    wikiId: requiredPropsCheck,
    // OR
    markdown: requiredPropsCheck
};

export default MarkdownSynapse;