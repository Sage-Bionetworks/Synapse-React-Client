var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import * as Utils from './utils';
import { FUNDER } from '../../utils/SynapseConstants';

var Funder = function (_React$Component) {
    _inherits(Funder, _React$Component);

    function Funder(props) {
        _classCallCheck(this, Funder);

        var _this = _possibleConstructorReturn(this, (Funder.__proto__ || Object.getPrototypeOf(Funder)).call(this, props));

        _this.handleLinkClick = function (link) {
            return function (event) {
                event.preventDefault();
                window.open(link, "_blank");
            };
        };

        _this.handleLinkClick = _this.handleLinkClick.bind(_this);
        return _this;
    }

    _createClass(Funder, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                data = _props.data,
                schema = _props.schema;

            var organizationName = data[schema.organizationName];
            var summary = data[schema.summary];
            var website = data[schema.website];
            // const logoLink = data[schema.logo] TODO: do something with this

            return React.createElement(
                Utils.CardBorder,
                null,
                React.createElement(
                    Utils.Section,
                    null,
                    React.createElement(Utils.CardIcon, { type: FUNDER }),
                    React.createElement(
                        Utils.Summary,
                        null,
                        React.createElement(Utils.SummaryHeader, {
                            name: "FUNDER",
                            title: organizationName
                        }),
                        React.createElement(
                            'div',
                            null,
                            React.createElement(
                                'a',
                                { className: "SRC-primary-text-color", href: website },
                                website
                            )
                        ),
                        React.createElement(
                            'p',
                            null,
                            summary
                        )
                    )
                ),
                React.createElement(
                    Utils.Section,
                    null,
                    React.createElement('div', { className: 'col-xs-2' }),
                    React.createElement(
                        'div',
                        { className: '' },
                        React.createElement(Utils.SynButton, {
                            link: website,
                            text: "VIEW RESEARCH",
                            onClick: this.handleLinkClick
                        })
                    )
                )
            );
        }
    }]);

    return Funder;
}(React.Component);

export default Funder;