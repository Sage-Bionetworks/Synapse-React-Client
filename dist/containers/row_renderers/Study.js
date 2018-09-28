var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Chip } from './utils/index';

var STUDY_SCHEMA = {
    projectName: 0,
    id: 1,
    projectFileviewId: 2,
    projectStatus: 3,
    dataStatus: 4,
    fundingAgency: 5,
    summary: 6,
    summarySource: 7,
    projectLeads: 8,
    institutions: 9,
    tumorType: 10,
    diseaseFocus: 11
};

var CUTOFF = 250;

var Study = function (_React$Component) {
    _inherits(Study, _React$Component);

    function Study(props) {
        _classCallCheck(this, Study);

        var _this = _possibleConstructorReturn(this, (Study.__proto__ || Object.getPrototypeOf(Study)).call(this, props));

        _this.state = {
            showMore: false
        };
        _this.toggleShowMore = _this.toggleShowMore.bind(_this);
        return _this;
    }

    _createClass(Study, [{
        key: 'toggleShowMore',
        value: function toggleShowMore(event) {
            event.preventDefault();
            this.setState({
                showMore: !this.state.showMore
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var data = this.props.data;

            var projectName = data[STUDY_SCHEMA.projectName];
            var projectLeads = data[STUDY_SCHEMA.projectLeads] && data[STUDY_SCHEMA.projectLeads].split(";").join(" / ");
            var summary = data[STUDY_SCHEMA.summary];

            var diseaseFocus = React.createElement(Chip, { type: 'gray', text: data[STUDY_SCHEMA.diseaseFocus] });
            var tumorType = React.createElement(Chip, { type: 'blue', text: data[STUDY_SCHEMA.tumorType] });

            var projectStatus = data[STUDY_SCHEMA.projectStatus];
            var fundingAgency = data[STUDY_SCHEMA.fundingAgency];
            var dataStatus = data[STUDY_SCHEMA.dataStatus];
            var institutions = data[STUDY_SCHEMA.institutions];
            return React.createElement(
                'div',
                { className: 'container SRC-syn-border SRC-noPaddingBottom  SRC-syn-border-spacing' },
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'div',
                        { className: 'col-xs-2' },
                        this.props.icon
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-xs-10' },
                        React.createElement(
                            'div',
                            null,
                            React.createElement(
                                'p',
                                null,
                                ' STUDY '
                            ),
                            React.createElement(
                                'div',
                                null,
                                React.createElement(
                                    'h5',
                                    null,
                                    React.createElement(
                                        'a',
                                        { className: 'SRC-magentaText', href: '' },
                                        projectName
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            null,
                            React.createElement(
                                'strong',
                                null,
                                React.createElement(
                                    'i',
                                    null,
                                    projectLeads
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            null,
                            React.createElement(
                                'p',
                                null,
                                summary,
                                !this.state.showMore && React.createElement(
                                    'a',
                                    { className: 'SRC-magentaText', onClick: this.toggleShowMore },
                                    ' Show More '
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'SRC-marginBottomTen' },
                            diseaseFocus,
                            ' ',
                            tumorType
                        )
                    )
                ),
                this.state.showMore && React.createElement(
                    'div',
                    { className: 'row SRC-grayBackground' },
                    React.createElement('div', { className: 'col-xs-2' }),
                    React.createElement(
                        'div',
                        { className: 'col-xs-10' },
                        React.createElement(
                            'div',
                            { className: 'row' },
                            React.createElement(
                                'div',
                                { className: 'col-xs-4' },
                                React.createElement(
                                    'table',
                                    { className: 'SRC-paddingRight' },
                                    React.createElement(
                                        'tbody',
                                        null,
                                        React.createElement(
                                            'tr',
                                            null,
                                            React.createElement(
                                                'td',
                                                null,
                                                'STATUS'
                                            ),
                                            React.createElement(
                                                'td',
                                                null,
                                                projectStatus
                                            )
                                        ),
                                        React.createElement(
                                            'tr',
                                            null,
                                            React.createElement(
                                                'td',
                                                null,
                                                'FUNDER'
                                            ),
                                            React.createElement(
                                                'td',
                                                null,
                                                fundingAgency
                                            )
                                        ),
                                        React.createElement(
                                            'tr',
                                            null,
                                            React.createElement(
                                                'td',
                                                null,
                                                'DATA'
                                            ),
                                            React.createElement(
                                                'td',
                                                null,
                                                dataStatus
                                            )
                                        ),
                                        React.createElement(
                                            'tr',
                                            null,
                                            React.createElement(
                                                'td',
                                                null,
                                                'PUBLICATIONS'
                                            ),
                                            React.createElement(
                                                'td',
                                                null,
                                                'NONE'
                                            )
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-xs-4' },
                                React.createElement(
                                    'table',
                                    { className: 'SRC-paddingRight' },
                                    React.createElement(
                                        'tbody',
                                        null,
                                        React.createElement(
                                            'tr',
                                            null,
                                            React.createElement(
                                                'td',
                                                null,
                                                'INVESTIGATORS'
                                            ),
                                            React.createElement(
                                                'td',
                                                null,
                                                projectLeads
                                            )
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-xs-4' },
                                React.createElement(
                                    'table',
                                    { className: 'SRC-paddingRight' },
                                    React.createElement(
                                        'tbody',
                                        null,
                                        React.createElement(
                                            'tr',
                                            null,
                                            React.createElement(
                                                'td',
                                                null,
                                                'INSTUTIONS'
                                            ),
                                            React.createElement(
                                                'td',
                                                null,
                                                institutions
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Study;
}(React.Component);

export default Study;