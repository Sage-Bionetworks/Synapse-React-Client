var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';

var CHAR_COUNT_CUTOFF = 100;

var ShoreMore = function (_React$Component) {
    _inherits(ShoreMore, _React$Component);

    function ShoreMore(props) {
        _classCallCheck(this, ShoreMore);

        var _this = _possibleConstructorReturn(this, (ShoreMore.__proto__ || Object.getPrototypeOf(ShoreMore)).call(this, props));

        _this.state = {
            showMore: false
        };
        _this.toggleShowMore = _this.toggleShowMore.bind(_this);
        return _this;
    }

    _createClass(ShoreMore, [{
        key: "toggleShowMore",
        value: function toggleShowMore(event) {
            event.preventDefault();
            var showMore = this.state.showMore;

            showMore = !showMore;
            this.props.onClick({
                showMore: showMore
            });
            this.setState({
                showMore: showMore
            });
        }
    }, {
        key: "render",
        value: function render() {
            // CHAR_COUNT_CUTOFF if show more is false and if its reasonably long enough
            var _props = this.props,
                summary = _props.summary,
                showMore = _props.showMore;

            var showButton = false;
            if (summary && summary.length >= CHAR_COUNT_CUTOFF && showMore) {
                summary = summary.split(".");
                summary = summary.slice(0, summary.length / 2); // remove text after last sentence
                summary = summary.join(".") + "."; // add back period to the end
                showButton = true;
            }
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "p",
                    null,
                    summary,
                    !this.state.showMore && showButton && React.createElement(
                        "a",
                        { className: "SRC-primary-text-color", onClick: this.toggleShowMore },
                        " Show More "
                    )
                )
            );
        }
    }]);

    return ShoreMore;
}(React.Component);

export default ShoreMore;