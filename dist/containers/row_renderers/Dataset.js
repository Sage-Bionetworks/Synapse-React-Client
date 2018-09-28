var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import * as Utils from './utils';

var DATASET_SCHEMA = {
    id: 0,
    datasetName: 1,
    diseaseFocus: 2,
    tumorType: 3,
    summary: 4,
    fundingAgency: 5,
    fileCount: 6
};

var Dataset = function (_React$Component) {
    _inherits(Dataset, _React$Component);

    function Dataset(props) {
        _classCallCheck(this, Dataset);

        var _this = _possibleConstructorReturn(this, (Dataset.__proto__ || Object.getPrototypeOf(Dataset)).call(this, props));

        _this.state = {
            showMe: false
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(Dataset, [{
        key: 'handleChange',
        value: function handleChange(updatedState) {
            this.setState(updatedState);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                data = _props.data,
                icon = _props.icon;

            var datasetName = data[DATASET_SCHEMA.datasetName];
            var summary = data[DATASET_SCHEMA.summary];
            var tumorType = data[DATASET_SCHEMA.tumorType];
            var diseaseFocus = data[DATASET_SCHEMA.diseaseFocus];

            return React.createElement(
                Utils.CardBorder,
                null,
                React.createElement(
                    Utils.Section,
                    null,
                    React.createElement(Utils.CardIcon, { icon: icon }),
                    React.createElement(
                        Utils.Summary,
                        null,
                        React.createElement(Utils.SummaryHeader, {
                            name: 'DATASET',
                            title: datasetName
                        }),
                        React.createElement(Utils.ShowMe, { onClick: this.handleChange, summary: summary }),
                        React.createElement(Utils.ChipContainer, {
                            chips: [{ type: "gray", text: tumorType }, { type: "blue", text: diseaseFocus }]
                        })
                    ),
                    this.state.showMe && React.createElement(Utils.Footer, null)
                )
            );
        }
    }]);

    return Dataset;
}(React.Component);

export default Dataset;