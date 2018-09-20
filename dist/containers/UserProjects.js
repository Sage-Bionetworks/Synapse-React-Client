var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';

/**
 * Class that demos obtatining a user's projects list
 */

var UserProjects = function (_React$Component) {
    _inherits(UserProjects, _React$Component);

    function UserProjects() {
        _classCallCheck(this, UserProjects);

        var _this = _possibleConstructorReturn(this, (UserProjects.__proto__ || Object.getPrototypeOf(UserProjects)).call(this));

        _this.state = {
            projects: [],
            errorMessage: ''
        };
        _this.getProjects = _this.getProjects.bind(_this);
        return _this;
    }

    _createClass(UserProjects, [{
        key: 'getProjects',
        value: function getProjects(projectType) {
            var _this2 = this;

            this.props.getUserProjectsEndpoint(this.props.token, projectType).then(function (data) {
                _this2.setState({
                    projects: data.results,
                    errorMessage: ""
                });
            }).catch(function (err) {
                _this2.setState({
                    errorMessage: err.reason
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var listProjects = null;

            if (this.props.token === "") {
                listProjects = React.createElement(
                    'p',
                    null,
                    ' ',
                    React.createElement(
                        'a',
                        { href: '#top' },
                        ' Sign in '
                    ),
                    ' and click the button to get projects '
                );
            } else {
                listProjects = this.state.projects.map(function (fav) {
                    return React.createElement(
                        'li',
                        { key: fav.id },
                        ' ',
                        fav.name,
                        ' '
                    );
                });
            }

            return React.createElement(
                'div',
                { className: 'container syn-border syn-border-spacing' },
                React.createElement(
                    'h3',
                    null,
                    ' Demo of getting user projects'
                ),
                React.createElement(
                    'button',
                    { disabled: this.props.token === "" ? true : false, className: "btn mb-1 ml-1 mr-1 btn-primary", onClick: function onClick() {
                            return _this3.getProjects('MY_PROJECTS');
                        } },
                    ' All '
                ),
                React.createElement(
                    'button',
                    { disabled: this.props.token === "" ? true : false, className: "btn mb-1 ml-1 mr-1 btn-primary", onClick: function onClick() {
                            return _this3.getProjects('MY_CREATED_PROJECTS');
                        } },
                    ' Created By Me '
                ),
                React.createElement(
                    'button',
                    { disabled: this.props.token === "" ? true : false, className: "btn mb-1 ml-1 mr-1 btn-primary", onClick: function onClick() {
                            return _this3.getProjects('MY_PARTICIPATED_PROJECTS');
                        } },
                    ' Shared directly with me '
                ),
                listProjects,
                this.state.errorMessage
            );
        }
    }]);

    return UserProjects;
}(React.Component);

export default UserProjects;