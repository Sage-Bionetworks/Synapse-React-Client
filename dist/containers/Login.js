var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";

/**
 *  Demo of user session, show login screen and handling user login submission.
 *
 * @class Login
 * @extends {React.Component}
 */

var Login = function (_React$Component) {
    _inherits(Login, _React$Component);

    /**
     * Creates a user session, maintaining credentials
     * @param {*} props
     * @memberof Login
     */
    function Login(props) {
        _classCallCheck(this, Login);

        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

        _this.state = {
            username: '',
            password: '',
            isSignedIn: false,
            hasLoginInFailed: false,
            errorMessage: '',
            dissmissButtonClicked: false
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleLogin = _this.handleLogin.bind(_this);
        _this.getTokenView = _this.getTokenView.bind(_this);
        _this.getLoginFailureView = _this.getLoginFailureView.bind(_this);
        _this.getSignInStateView = _this.getSignInStateView.bind(_this);
        return _this;
    }

    /**
     * Updates internal state with the event that was triggered
     *
     * @param {*} event Form update
     */


    _createClass(Login, [{
        key: 'handleChange',
        value: function handleChange(event) {
            var target = event.target;
            var name = target.name;
            var value = target.value;
            this.setState(_defineProperty({}, name, value));
        }

        /**
         * Handle user login on click
         *
         * @param {*} clickEvent Userclick event
         */

    }, {
        key: 'handleLogin',
        value: function handleLogin(clickEvent) {
            var _this2 = this;

            clickEvent.preventDefault(); // avoid page refresh
            this.props.loginEndpoint(this.state.username, this.state.password).then(function (data) {
                if (data.reason) {
                    // error in callback
                    throw new Error(data.reason);
                } else {
                    _this2.props.onTokenChange({ token: data.sessionToken });
                    _this2.setState({
                        isSignedIn: true,
                        hasLoginInFailed: false
                    });
                }
            }).catch(function (err) {
                _this2.setState({
                    hasLoginInFailed: true,
                    errorMessage: err.reason
                });
            });
        }

        /**
         * Shows user session token if they've signed in
         *
         * @returns View displaying user session on login, otherwise null.
         */

    }, {
        key: 'getTokenView',
        value: function getTokenView() {
            if (this.state.isSignedIn && this.props.token !== '' && !this.state.hasLoginInFailed) {
                return React.createElement(
                    'p',
                    null,
                    ' Your session token is ',
                    this.props.token,
                    ' '
                );
            }
        }

        /**
         * Shows user login failure view on login failure
         *
         * @returns view to be displayed on user sign in error.
         */

    }, {
        key: 'getLoginFailureView',
        value: function getLoginFailureView() {
            if (this.state.hasLoginInFailed) {
                return React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'small',
                        { className: 'form-text text-danger' },
                        '  ',
                        this.state.errorMessage,
                        ' '
                    ),
                    React.createElement('div', { className: 'invalid-feedback' })
                );
            }
        }

        /**
         * Show whether user is signed in or not, display banner on login success
         *
         * @returns View corresponding to whether the user is signed in, whether they've dismissed
         * sign in banner
         */

    }, {
        key: 'getSignInStateView',
        value: function getSignInStateView() {
            var _this3 = this;

            if (!this.state.isSignedIn) {
                return React.createElement(
                    'p',
                    null,
                    ' You are currently ',
                    React.createElement(
                        'strong',
                        null,
                        ' ',
                        React.createElement(
                            'i',
                            null,
                            ' not '
                        ),
                        ' '
                    ),
                    ' signed in to Synpase '
                );
            } else if (!this.state.dissmissButtonClicked) {
                return React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'p',
                        null,
                        ' You are currently ',
                        React.createElement(
                            'strong',
                            null,
                            ' ',
                            React.createElement(
                                'i',
                                null,
                                ' signed in '
                            ),
                            ' '
                        ),
                        ' to Synapse '
                    ),
                    React.createElement(
                        'div',
                        { className: 'alert alert-success alert-dismissible fade show', role: 'alert' },
                        'Synapse login successfull',
                        React.createElement(
                            'button',
                            { type: 'button', className: 'close', onClick: function onClick() {
                                    _this3.setState({ dissmissButtonClicked: true });
                                } },
                            React.createElement(
                                'span',
                                { 'aria-hidden': 'true' },
                                '\xD7'
                            )
                        )
                    )
                );
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: 'loginPage', className: 'container border' },
                React.createElement(
                    'h3',
                    { className: 'text-left' },
                    ' Demo login with session token printed to screen'
                ),
                this.getSignInStateView(),
                this.getTokenView(),
                React.createElement(
                    'form',
                    { autoComplete: 'on', onSubmit: this.handleLogin },
                    React.createElement(
                        'div',
                        { className: 'form-group' },
                        React.createElement(
                            'label',
                            { className: 'text-left', htmlFor: 'exampleEmail' },
                            'Synapse Email/Username:'
                        ),
                        React.createElement('input', { placeholder: 'Enter email', className: 'form-control', id: 'exampleEmail', name: 'username', type: 'email', value: this.state.username, onChange: this.handleChange })
                    ),
                    React.createElement(
                        'div',
                        { className: 'form-group' },
                        React.createElement(
                            'label',
                            { htmlFor: 'examplePassword' },
                            'Password:'
                        ),
                        React.createElement('input', { placeholder: 'Enter password', className: 'form-control', id: 'examplePassword', name: 'password', type: 'password', value: this.state.password, onChange: this.handleChange })
                    ),
                    this.getLoginFailureView(),
                    React.createElement(
                        'button',
                        { onSubmit: this.handleLogin, type: 'submit', className: 'btn btn-primary m-1' },
                        'Submit'
                    )
                )
            );
        }
    }]);

    return Login;
}(React.Component);

export default Login;