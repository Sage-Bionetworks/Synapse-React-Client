var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";

import * as SynapseClient from '../utils/SynapseClient';
import SynapsePlot from './widgets/SynapsePlot';
import Reference from './widgets/Reference';
import Bookmarks from './widgets/Bookmarks';

import PropTypes from 'prop-types';

import "../style/Portal.css";
import SynapseImage from "./widgets/SynapseImage";

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

        var _this = _possibleConstructorReturn(this, (MarkdownSynapse.__proto__ || Object.getPrototypeOf(MarkdownSynapse)).call(this, props));

        var md = require('markdown-it')({ html: true });
        // markdownitSynapse wraps around md object and uses its own dependencies
        markdownitSynapse.init_markdown_it(md, markdownSubAlt, markdownEmpahsisAlt, markdownCenterText, markdownSynapseHeading, markdownSynapseTable, markdownStrikethrough, markdownContainer, markdownEmpahsisAlt, markdownInlineComments, markdownBr);

        var mathSuffix = '';
        // Update the internal md object with the wrapped synapse object
        md.use(markdownitSynapse, mathSuffix).use(synapseMath, mathSuffix);

        _this.state = {
            md: md,
            text: '',
            fileHandles: null,
            newOwnerId: "",
            newWikiId: "",
            isLoggedIn: _this.props.token !== "",
            errorMessage: ""
        };

        _this.footnoteRef = React.createRef();
        _this.markupRef = React.createRef();
        _this.buttonRef = React.createRef();

        // handle widgets and math markdown
        _this.processWidgets = _this.processWidgets.bind(_this);
        _this.processWidgetOrDomElement = _this.processWidgetOrDomElement.bind(_this);
        _this.processMath = _this.processMath.bind(_this);
        // handle init calls to get wiki related items
        _this.getWikiAttachments = _this.getWikiAttachments.bind(_this);
        _this.getWikiPageMarkdown = _this.getWikiPageMarkdown.bind(_this);

        // handle rendering widgets
        _this.renderWidget = _this.renderWidget.bind(_this);
        _this.renderSynapseButton = _this.renderSynapseButton.bind(_this);
        _this.renderSynapseImage = _this.renderSynapseImage.bind(_this);
        _this.renderSynapsePlot = _this.renderSynapsePlot.bind(_this);
        _this.renderSynapseReference = _this.renderSynapseReference.bind(_this);

        _this.getErrorView = _this.getErrorView.bind(_this);
        _this.createMarkup = _this.createMarkup.bind(_this);
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

        /**
         * Process all the corresponding bookmark tags of the references made throughout the page
         *
         * @memberof MarkdownSynapse
         */

    }, {
        key: 'addBookmarks',
        value: function addBookmarks() {
            var footnotes_html = this.createMarkup(markdownitSynapse.footnotes()).__html;
            if (footnotes_html.length > 0) {
                var bookmarks = React.createElement(Bookmarks, {
                    footnotes: footnotes_html });
                return bookmarks;
            }
        }

        /**
         * Call Synapse REST API to get AMP-AD wiki portal markdown as demo of API call
         */

    }, {
        key: 'getWikiPageMarkdown',
        value: function getWikiPageMarkdown() {
            var _this2 = this;

            if (!this.state.text) {
                SynapseClient.getEntityWiki(this.props.token, this.props.ownerId, this.props.wikiId).then(function (data) {
                    // on success grab text and append to the default text
                    var initText = _this2.state.text;
                    _this2.setState({
                        text: initText + data.markdown
                    });
                }).catch(function (err) {
                    console.log('Error on wiki markdown load\n', err);
                });
            }
            // else the wiki page was retrieved accordingly or it was passed down
            // as a prop
        }
    }, {
        key: 'getWikiAttachments',
        value: function getWikiAttachments() {
            var _this3 = this;

            SynapseClient.getWikiAttachmentsFromEntity(this.props.token, this.props.ownerId, this.props.wikiId).then(function (data) {
                _this3.setState({ fileHandles: data, errorMessage: "" });
            }).catch(function (err) {
                _this3.setState({
                    errorMessage: err.reason
                });
                console.log("Error on wiki attachment load ", err);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.markdown) {
                this.setState({
                    text: this.props.markdown
                });
            }

            if (this.props.hasSynapseResources) {
                // get wiki attachments
                this.getWikiAttachments();
                // sample API call to retrieve Synapse wiki page
                // endpoint = https://repo-prod.prod.sagebase.org/repo/v1/entity/"{ownerId}"/wiki/"{wikiId}"        
                this.getWikiPageMarkdown();
            }

            if (this.props.updateLoadState && this.state.text) {
                this.props.updateLoadState({ isLoading: false });
            }

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
                if (this.props.hasSynapseResources) {
                    this.getWikiAttachments();
                    this.getWikiPageMarkdown();
                }
            }
            this.processMath();
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
    }, {
        key: 'processWidgets',
        value: function processWidgets() {
            var groups = this.createMarkup(this.state.text).__html.split(/(<span data-widgetparams.*span>)/);
            return this.processWidgetOrDomElement(groups);
        }
    }, {
        key: 'decodeXml',
        value: function decodeXml(string) {
            var escaped_one_to_xml_special_map = {
                '&amp;': '&',
                '&quot;': '"',
                '&lt;': '<',
                '&gt;': '>'
            };

            return string.replace(/(&quot;|&lt;|&gt;|&amp;)/g, function (str, item) {
                return escaped_one_to_xml_special_map[item];
            });
        }
    }, {
        key: 'processWidgetMappings',
        value: function processWidgetMappings(rawWidgetString, referenceCountContainer, index) {
            var widgetstring = rawWidgetString.match(/data-widgetparams=("(.*?)")/);
            widgetstring = this.decodeXml(widgetstring[2]);
            var questionIndex = widgetstring.indexOf("?");
            var widgetType = widgetstring.substring(0, questionIndex);
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
            return this.renderWidget(widgetType, widgetparamsMapped, referenceCountContainer, index);
        }
    }, {
        key: 'processWidgetOrDomElement',
        value: function processWidgetOrDomElement(widgetsToBe) {
            var _this4 = this;

            var referenceCountContainer = {
                referenceCount: 1
            };
            return widgetsToBe.map(function (text, index) {
                if (text.indexOf("<span data-widgetparams") !== -1) {
                    var resp = _this4.processWidgetMappings(text, referenceCountContainer, index);
                    return resp;
                } else {
                    return React.createElement('div', { key: index, dangerouslySetInnerHTML: { __html: text } });
                }
            });
        }
    }, {
        key: 'renderWidget',
        value: function renderWidget(widgetType, widgetparamsMapped, referenceCountContainer, index) {
            switch (widgetType) {
                case "buttonlink":
                    return this.renderSynapseButton(widgetparamsMapped, index);
                case "image":
                    return this.renderSynapseImage(widgetparamsMapped, index);
                case "plot":
                    return this.renderSynapsePlot(widgetparamsMapped, index);
                case "reference":
                    return this.renderSynapseReference(referenceCountContainer, index);
                default:
                    return;
            }
        }
    }, {
        key: 'renderSynapseButton',
        value: function renderSynapseButton(widgetparamsMapped, index) {
            return React.createElement(
                'a',
                { key: index, href: widgetparamsMapped.url, className: 'btn btn-lg btn-info', role: 'button' },
                widgetparamsMapped.text
            );
        }
    }, {
        key: 'renderSynapsePlot',
        value: function renderSynapsePlot(widgetparamsMapped, index) {
            return React.createElement(SynapsePlot, { key: index, token: this.props.token, ownerId: this.props.ownerId, wikiId: this.props.wikiId, widgetparamsMapped: widgetparamsMapped });
        }
    }, {
        key: 'renderSynapseImage',
        value: function renderSynapseImage(widgetparamsMapped, index) {
            if (!this.state.fileHandles) {
                // ensure files are loaded
                return;
            }

            if (widgetparamsMapped.fileName) {
                return React.createElement(SynapseImage, { key: index, token: this.props.token, fileName: widgetparamsMapped.fileName, wikiId: this.props.wikiId, isAttachedToEntity: false, fileResults: this.state.fileHandles.list });
            } else if (widgetparamsMapped.synapseId) {
                // elements with synapseIds have to have their resources loaded first, their not located
                // with the file attachnent list
                return React.createElement(SynapseImage, { key: index, token: this.props.token, synapseId: widgetparamsMapped.synapseId, isAttachedToEntity: true });
            }
        }
    }, {
        key: 'renderSynapseReference',
        value: function renderSynapseReference(referenceCountContainer, index) {
            var _this5 = this;

            var count = referenceCountContainer.referenceCount;
            var reference = React.createElement(Reference, { key: index, footnoteId: referenceCountContainer.referenceCount, onClick: function onClick(event) {
                    event.preventDefault();
                    // find and go to the bookmark at the right section of the page
                    var goTo = _this5.footnoteRef.current.querySelector('a#bookmark' + (count - 1));
                    try {
                        goTo.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center',
                            inline: 'center'
                        });
                    } catch (e) {
                        console.log('error on scroll', e);
                    }
                } });
            referenceCountContainer.referenceCount++;
            return reference;
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                this.getErrorView(),
                React.createElement(
                    'div',
                    { ref: this.markupRef },
                    this.processWidgets()
                ),
                React.createElement(
                    'div',
                    { ref: this.footnoteRef },
                    this.addBookmarks()
                )
            );
        }
    }]);

    return MarkdownSynapse;
}(React.Component);

// Validate props passed to the component


MarkdownSynapse.propTypes = {
    // optional
    errorMessageView: PropTypes.element,

    // required props
    token: PropTypes.string.isRequired,

    ownerId: PropTypes.string,
    wikiId: PropTypes.string,

    markdown: PropTypes.string,
    hasSynapseResources: PropTypes.bool

};

MarkdownSynapse.defaultProps = {
    hasSynapseResources: true
};

export default MarkdownSynapse;