var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';

var Bookmarks = function (_React$Component) {
    _inherits(Bookmarks, _React$Component);

    function Bookmarks() {
        _classCallCheck(this, Bookmarks);

        var _this = _possibleConstructorReturn(this, (Bookmarks.__proto__ || Object.getPrototypeOf(Bookmarks)).call(this));

        _this.bookmarkRef = React.createRef();
        _this.transformProps = _this.transformProps.bind(_this);
        _this.state = {};
        return _this;
    }

    _createClass(Bookmarks, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.transformProps();
        }
    }, {
        key: 'transformProps',
        value: function transformProps() {
            // find all links in the footnotes_html-- each of which contains a "text=[\d]"
            var copyFootnotes = String(this.props.footnotes);
            var linkOccurences = copyFootnotes.match(/text=\[.\]/g);
            if (!linkOccurences) {
                return;
            }

            var linksFormatted = linkOccurences.map(function (element, index) {
                // grab only the [\d] pieces of the text
                return element.substring(element.indexOf("["), element.indexOf("]") + 1);
            }).map(function (element, index) {
                // here bookmark is used so that the references can target this anchor tag 
                return '<span><span class="BookmarkWidget"><a id="' + ("bookmark" + index) + '">' + element + '</a></span></span>';
            });

            // now all of the links are prepared to be inserted back into the original string
            // all link occurences have a single location in the original string-- we go through and then 
            // match of the link occurences to the spot it belongs into the html
            var i = 0;
            var matches = copyFootnotes.replace(/(<span data-widgetparams=.*>)(&lt;Synapse widget&gt;)(<\/span>)/g,
            // replace using a function where p1,p2,p3 correspond to the matched groups from above
            // specifically removing the Synapse widget text and then putting instead of the anchor tag with the link
            // formatted text from above
            function (match, p1, p2, p3, string) {
                var text = [p1, linksFormatted[i], p3].join("");
                i++;
                return text;
            });
            // create the dom element for this view and append to the ref
            var bookmarkFragment = document.createRange().createContextualFragment(matches);
            this.bookmarkRef.current.appendChild(bookmarkFragment);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement('hr', null),
                React.createElement('div', { ref: this.bookmarkRef })
            );
        }
    }]);

    return Bookmarks;
}(React.Component);

Bookmarks.propTypes = {
    footnotes: PropTypes.string
};

export default Bookmarks;