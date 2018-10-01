var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import * as Utils from './utils/index';
import { STUDY } from '../../utils/SynapseConstants';

var Study = function (_React$Component) {
    _inherits(Study, _React$Component);

    function Study(props) {
        _classCallCheck(this, Study);

        var _this = _possibleConstructorReturn(this, (Study.__proto__ || Object.getPrototypeOf(Study)).call(this, props));

        _this.state = {
            showMore: false,
            hasCreatedIndex: false
        };
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(Study, [{
        key: 'handleClick',
        value: function handleClick(event) {
            this.setState({
                showMore: !this.state.showMore
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                data = _props.data,
                schema = _props.schema;

            var projectName = data[schema.projectName];
            var projectLeads = data[schema.projectLeads] && data[schema.projectLeads].split(";").join(" / ");
            var summary = data[schema.summary];
            var diseaseFocus = data[schema.diseaseFocus];
            var tumorType = data[schema.tumorType];
            var projectStatus = data[schema.projectStatus];
            var fundingAgency = data[schema.fundingAgency];
            var dataStatus = data[schema.dataStatus];
            var institutions = data[schema.institutions];

            var rows = [["STATUS", projectStatus, "INVESTIGATORS", projectLeads, "INSTITUTIONS", institutions], ["FUNDER", fundingAgency], ["DATA", dataStatus], ["PUBLICATION", "NONE"]];

            return React.createElement(
                Utils.CardBorder,
                null,
                React.createElement(
                    Utils.Section,
                    null,
                    React.createElement(Utils.CardIcon, { type: STUDY }),
                    React.createElement(
                        Utils.Summary,
                        null,
                        React.createElement(Utils.SummaryHeader, {
                            name: 'STUDY',
                            title: projectName
                        }),
                        React.createElement(Utils.Authors, { authors: projectLeads }),
                        React.createElement(Utils.ShowMore, { onClick: this.handleClick, summary: summary }),
                        React.createElement(Utils.ChipContainer, {
                            chips: [{ type: "gray", text: tumorType }, { type: "blue", text: diseaseFocus }]
                        })
                    )
                ),
                this.state.showMore && React.createElement(Utils.CardFooter, { rows: rows })
            );
        }
    }]);

    return Study;
}(React.Component);

export default Study;