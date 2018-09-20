var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";
import * as SynapseClient from "lib/utils/SynapseClient";
import GoogleIcon from 'assets/GoogleIcon';
import ButtonContent from 'assets/ButtonContent';

/**
 *  Demo of user session, show login screen and handling user login submission.
 * 
 *  To support Google SSO in your portal, you must add your domain to the Authorized Redirect URIs for Synapse authentication.
 *  This can be done by contacting synapseInfo@sagebionetworks.org to form a collaboration.  
 *  Synapse engineers must add your redirect URL in the Google API console found at https://console.cloud.google.com/ for this functionality to work.
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
        _this.onSignOut = _this.onSignOut.bind(_this);
        _this.onSignIn = _this.onSignIn.bind(_this);
        return _this;
    }

    /**
     * Updates internal state with the event that was triggered
     *
     * @param {*} event Form update
     */


    _createClass(Login, [{
        key: "handleChange",
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
        key: "handleLogin",
        value: function handleLogin(clickEvent) {
            var _this2 = this;

            clickEvent.preventDefault(); // avoid page refresh
            SynapseClient.login(this.state.username, this.state.password).then(function (data) {
                _this2.props.onTokenChange({ token: data.sessionToken });
                _this2.setState({
                    isSignedIn: true,
                    hasLoginInFailed: false,
                    errorMessage: ""
                });
            }).catch(function (err) {
                _this2.setState({
                    hasLoginInFailed: true,
                    errorMessage: err.reason,
                    isSignedIn: false
                });
            });
        }

        /**
         * Shows user session token if they've signed in
         *
         * @returns View displaying user session on login, otherwise null.
         */

    }, {
        key: "getTokenView",
        value: function getTokenView() {
            if (this.state.isSignedIn && this.props.token !== '' && !this.state.hasLoginInFailed) {
                return React.createElement(
                    "p",
                    null,
                    " Your session token is ",
                    this.props.token,
                    " "
                );
            }
        }

        /**
         * Shows user login failure view on login failure
         *
         * @returns view to be displayed on user sign in error.
         */

    }, {
        key: "getLoginFailureView",
        value: function getLoginFailureView() {
            if (this.state.hasLoginInFailed) {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "small",
                        { className: "form-text text-danger" },
                        "  ",
                        this.state.errorMessage,
                        " "
                    ),
                    React.createElement("div", { className: "invalid-feedback" })
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
        key: "getSignInStateView",
        value: function getSignInStateView() {
            var _this3 = this;

            if (!this.state.isSignedIn) {
                return React.createElement(
                    "p",
                    null,
                    " You are currently ",
                    React.createElement(
                        "strong",
                        null,
                        " ",
                        React.createElement(
                            "i",
                            null,
                            " not "
                        ),
                        " "
                    ),
                    " signed in to Synpase "
                );
            } else if (!this.state.dismissButtonClicked) {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "p",
                        null,
                        " You are currently ",
                        React.createElement(
                            "strong",
                            null,
                            " ",
                            React.createElement(
                                "i",
                                null,
                                " signed in "
                            ),
                            " "
                        ),
                        " to Synapse "
                    ),
                    React.createElement(
                        "div",
                        { className: "bg-success", role: "alert" },
                        "Synapse login successfull",
                        React.createElement(
                            "button",
                            { type: "button", className: "close", onClick: function onClick() {
                                    _this3.setState({ dissmissButtonClicked: true });
                                } },
                            React.createElement(
                                "span",
                                { "aria-hidden": "true" },
                                "\xD7"
                            )
                        )
                    )
                );
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this4 = this;

            var code = new URL(window.location.href);
            // in test environment the searchParams isn't defined
            if (code.searchParams && (code = code.searchParams.get("code"))) {
                SynapseClient.oAuthSessionRequest(this.props.authProvider, code, this.props.redirectURL + "?provider=" + this.props.authProvider).then(function (synToken) {
                    _this4.props.onTokenChange({ token: synToken.sessionToken });
                    _this4.setState({
                        isSignedIn: true,
                        hasLoginInFailed: false,
                        errorMessage: ""
                    });
                }).catch(function (err) {
                    console.log("error on auth request ", err);
                });
            }
        }
    }, {
        key: "onSignIn",
        value: function onSignIn(event) {
            event.preventDefault();
            SynapseClient.oAuthUrlRequest(this.props.authProvider, this.props.redirectURL + "?provider=" + this.props.authProvider).then(function (data) {
                var authUrl = data.authorizationUrl;
                window.location = authUrl; // ping the url
            }).catch(function (err) {
                console.log("error here", err);
            });
        }
    }, {
        key: "onSignOut",
        value: function onSignOut(event) {
            event.preventDefault();
            this.props.onTokenChange({ token: "" });
            this.setState({
                isSignedIn: false,
                hasLoginInFailed: false,
                errorMessage: ""
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                theme = _props.theme,
                icon = _props.icon,
                buttonText = _props.buttonText;


            var initialStyle = {
                backgroundColor: theme === 'dark' ? 'rgb(66, 133, 244)' : '#fff',
                display: 'inline-flex',
                alignItems: 'center',
                color: theme === 'dark' ? '#fff' : 'rgba(0, 0, 0, .54)',
                boxShadow: '0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)',
                padding: 0,
                borderRadius: 2,
                border: '1px solid transparent',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Lato, sans-serif'
            };

            return React.createElement(
                "div",
                { id: "loginPage", className: "container syn-border syn-border-spacing" },
                React.createElement(
                    "h3",
                    { className: "text-left" },
                    " Demo login with session token printed to screen"
                ),
                this.getSignInStateView(),
                this.getTokenView(),
                React.createElement(
                    "form",
                    { onSubmit: this.handleLogin },
                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement(
                            "label",
                            { className: "text-left", htmlFor: "exampleEmail" },
                            "Synapse Email/Username:"
                        ),
                        React.createElement("input", { autoComplete: "email", placeholder: "Enter email", className: "form-control", id: "exampleEmail", name: "username", type: "text", value: this.state.username, onChange: this.handleChange })
                    ),
                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement(
                            "label",
                            { htmlFor: "examplePassword" },
                            "Password:"
                        ),
                        React.createElement("input", { autoComplete: "password", placeholder: "Enter password", className: "form-control", id: "examplePassword", name: "password", type: "password", value: this.state.password, onChange: this.handleChange })
                    ),
                    this.getLoginFailureView(),
                    React.createElement(
                        "button",
                        { onSubmit: this.handleLogin, type: "submit", className: "btn btn-primary m-1" },
                        "Submit"
                    )
                ),
                React.createElement(
                    "form",
                    null,
                    !this.state.isSignedIn && React.createElement(
                        "button",
                        { onClick: this.onSignIn, style: initialStyle },
                        React.createElement(GoogleIcon, { key: 1, active: true }),
                        React.createElement(
                            ButtonContent,
                            { icon: icon, key: 2 },
                            buttonText
                        )
                    ),
                    this.state.isSignedIn && React.createElement(
                        "button",
                        { onClick: this.onSignOut, style: initialStyle },
                        React.createElement(
                            ButtonContent,
                            { icon: icon, key: 3 },
                            "Sign out"
                        )
                    )
                )
            );
        }
    }]);

    return Login;
}(React.Component);

export default Login;