var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';

/**
 * Class that demos obtatining a user's Team list
 */

var UserTeam = function (_React$Component) {
    _inherits(UserTeam, _React$Component);

    function UserTeam() {
        _classCallCheck(this, UserTeam);

        var _this = _possibleConstructorReturn(this, (UserTeam.__proto__ || Object.getPrototypeOf(UserTeam)).call(this));

        _this.state = {
            team: [],
            errorMessage: ''
        };
        _this.getUserTeams = _this.getUserTeams.bind(_this);
        return _this;
    }

    _createClass(UserTeam, [{
        key: 'getUserTeams',
        value: function getUserTeams() {
            var _this2 = this;

            this.props.getUserTeamEndpoint(this.props.token, this.props.ownerId).then(function (data) {
                _this2.setState({
                    team: data.results,
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

            var listTeam = null;

            if (this.props.token === "" || this.props.ownerId === "") {
                listTeam = React.createElement(
                    'p',
                    null,
                    ' ',
                    React.createElement(
                        'a',
                        { href: '#top' },
                        ' Sign in '
                    ),
                    ' ',
                    React.createElement(
                        'strong',
                        null,
                        ' and '
                    ),
                    ' get userProfile then click the button to get user teams. '
                );
            } else {
                listTeam = this.state.team.map(function (fav) {
                    return React.createElement(
                        'li',
                        { key: fav.id },
                        ' ',
                        fav.name,
                        ' '
                    );
                });
            }

            var buttonIsOn = this.props.token === "" || this.props.ownerId === "";

            return React.createElement(
                'div',
                { className: 'container syn-border syn-border-spacing' },
                React.createElement(
                    'h3',
                    null,
                    ' Demo of getting user teams'
                ),
                React.createElement(
                    'button',
                    { disabled: buttonIsOn ? true : false, className: "mb-1 btn btn-primary", onClick: this.getUserTeams },
                    ' All '
                ),
                listTeam,
                this.state.errorMessage
            );
        }
    }]);

    return UserTeam;
}(React.Component);

export default UserTeam;