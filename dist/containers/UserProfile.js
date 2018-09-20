var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';

/**
 * Class that demos obtatining a user's projects list
 */

var UserProfile = function (_React$Component) {
    _inherits(UserProfile, _React$Component);

    function UserProfile() {
        _classCallCheck(this, UserProfile);

        var _this = _possibleConstructorReturn(this, (UserProfile.__proto__ || Object.getPrototypeOf(UserProfile)).call(this));

        _this.state = {
            userName: ''
        };
        _this.getUserProfile = _this.getUserProfile.bind(_this);
        return _this;
    }

    _createClass(UserProfile, [{
        key: 'getUserProfile',
        value: function getUserProfile(event) {
            var _this2 = this;

            event.preventDefault();
            this.props.getUserProfileEndpoint(this.props.token).then(function (data) {
                _this2.props.onProfileChange({ ownerId: data.ownerId });
                _this2.setState({
                    userName: data.userName,
                    errorMessage: ""
                });
            }).catch(function (err) {
                _this2.setState({
                    hasLoginInFailed: true,
                    errorMessage: err.reason
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var welcomeBanner = null;
            if (this.state.userName !== '') {
                welcomeBanner = React.createElement(
                    'h2',
                    null,
                    ' WELCOME BACK, ',
                    this.state.userName,
                    ' '
                );
            } else {
                welcomeBanner = React.createElement(
                    'p',
                    null,
                    ' ',
                    React.createElement(
                        'a',
                        { href: '#top' },
                        ' Sign in '
                    ),
                    ' and click to get userProfile '
                );
            }

            return React.createElement(
                'div',
                { className: 'container syn-border syn-border-spacing' },
                React.createElement(
                    'h3',
                    null,
                    ' Demo of getting user profile '
                ),
                React.createElement(
                    'button',
                    { disabled: this.props.token === "" ? true : false, className: "btn mb-1 btn-primary", onClick: this.getUserProfile },
                    ' Get User Profile Information '
                ),
                welcomeBanner,
                this.state.errorMessage
            );
        }
    }]);

    return UserProfile;
}(React.Component);

export default UserProfile;