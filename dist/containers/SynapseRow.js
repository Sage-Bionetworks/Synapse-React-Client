var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { STUDY, DATASET, FUNDER, PUBLICATION, TOOL } from '../utils/SynapseConstants';
import { Study, Tool, Publication, Dataset, Funder } from './row_renderers';
import PropTypes from 'prop-types';

// Instead of giving each of the Study/Tool/etc components the same
// props we make a simple container that does
var RowContainer = function RowContainer(_ref) {
    var children = _ref.children,
        data = _ref.data,
        rest = _objectWithoutProperties(_ref, ['children', 'data']);

    return data.queryResult.queryResults.rows.map(function (rowData) {
        return React.createElement(
            React.Fragment,
            { key: rowData.rowId },
            React.Children.map(children, function (child) {
                return React.cloneElement(child, Object.assign({ data: rowData.values }, rest));
            })
        );
    });
};

var SynapseRow = function (_React$Component) {
    _inherits(SynapseRow, _React$Component);

    function SynapseRow(props) {
        _classCallCheck(this, SynapseRow);

        var _this = _possibleConstructorReturn(this, (SynapseRow.__proto__ || Object.getPrototypeOf(SynapseRow)).call(this, props));

        _this.renderChild = _this.renderChild.bind(_this);
        return _this;
    }

    _createClass(SynapseRow, [{
        key: 'renderChild',
        value: function renderChild() {
            var type = this.props.type;

            switch (type) {
                case STUDY:
                    return React.createElement(Study, null);
                case DATASET:
                    return React.createElement(Dataset, null);
                case FUNDER:
                    return React.createElement(Funder, null);
                case PUBLICATION:
                    return React.createElement(Publication, null);
                case TOOL:
                    return React.createElement(Tool, null);
                default:
                    return; // this should never happen
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var data = this.props.data;


            if (data.length === 0) {
                return React.createElement(
                    'div',
                    null,
                    'loading'
                );
            }

            var schema = {};
            data.queryResult.queryResults.headers.forEach(function (element, index) {
                schema[element.name] = index;
            });

            return React.createElement(
                RowContainer,
                { data: data, schema: schema },
                this.renderChild()
            );
        }
    }]);

    return SynapseRow;
}(React.Component);

SynapseRow.propTypes = {
    type: PropTypes.string.isRequired
};

export default SynapseRow;