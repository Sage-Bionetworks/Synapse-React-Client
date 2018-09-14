var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import * as SynapseConstants from 'lib/utils/SynapseConstants';

var FacetsExperimental = function (_React$Component) {
    _inherits(FacetsExperimental, _React$Component);

    function FacetsExperimental(props) {
        _classCallCheck(this, FacetsExperimental);

        // this.recordSelections = this.recordSelections.bind(this)
        var _this = _possibleConstructorReturn(this, (FacetsExperimental.__proto__ || Object.getPrototypeOf(FacetsExperimental)).call(this, props));

        _this.handleClick = function (dict) {
            return function (event) {
                var boxes = _this.formRef.current.getElementsByTagName("input");

                var selection = [];
                for (var i = 0; i < boxes.length; i++) {
                    if (boxes[i].checked) {
                        selection.push(boxes[i].value);
                    }
                }

                var entry = {
                    columnName: dict.columnName,
                    concreteType: "org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",
                    facetValues: selection
                };

                var sql = _this.props.sql;


                var queryRequest = {
                    concreteType: "org.sagebionetworks.repo.model.table.QueryBundleRequest",
                    partMask: SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS | SynapseConstants.BUNDLE_MASK_QUERY_FACETS,
                    query: {
                        isConsistent: true,
                        sql: sql,
                        limit: 1,
                        selectedFacets: [entry]
                    }
                };

                _this.props.updateQueryRequest(queryRequest);
            };
        };

        _this.handleClick = _this.handleClick.bind(_this);
        _this.state = {
            originalFacets: []
        };
        _this.formRef = React.createRef();
        return _this;
    }

    _createClass(FacetsExperimental, [{
        key: 'showFacetFilter',
        value: function showFacetFilter() {
            var _this2 = this;

            if (this.props.isLoadingInitRequest) {
                return;
            }

            var structuredRender = [];

            this.props.originalFacets.facets.forEach(function (element) {
                if (element.facetType === "enumeration" && element.columnName === "createdBy") {
                    var children = [];
                    element.facetValues.forEach(function (facetValue) {
                        // let key = uuidv4()
                        children.push(React.createElement(
                            'div',
                            { key: facetValue.value },
                            React.createElement('input', { value: facetValue.value, onClick: _this2.handleClick({ columnName: element.columnName }), type: 'checkbox' }),
                            React.createElement(
                                'label',
                                null,
                                facetValue.value + (' (' + facetValue.count + ')')
                            )
                        ));
                    });
                    var name = React.createElement(
                        'strong',
                        null,
                        ' ',
                        element.columnName,
                        ' '
                    );
                    var group = React.createElement(
                        'div',
                        { key: element.columnName },
                        name,
                        children.map(function (child) {
                            return child;
                        })
                    );
                    structuredRender.push(group);
                }
            });

            return React.createElement(
                React.Fragment,
                null,
                structuredRender.map(function (element) {
                    return element;
                })
            );
        }

        // https://medium.freecodecamp.org/reactjs-pass-parameters-to-event-handlers-ca1f5c422b9

    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'container' },
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'div',
                        { className: 'col-xs-6' },
                        React.createElement(
                            'form',
                            null,
                            React.createElement(
                                'div',
                                { ref: this.formRef, className: 'form-group' },
                                this.showFacetFilter()
                            )
                        )
                    )
                )
            );
        }
    }]);

    return FacetsExperimental;
}(React.Component);

export default FacetsExperimental;


FacetsExperimental.propTypes = {
    makeQueryRequest: PropTypes.bool
};

FacetsExperimental.defaultProps = {
    makeQueryRequest: true
};