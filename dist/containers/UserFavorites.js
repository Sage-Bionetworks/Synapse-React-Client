var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';

/**
 * Class that demos obtatining a user's favorites list
 */

var UserFavorites = function (_React$Component) {
    _inherits(UserFavorites, _React$Component);

    function UserFavorites() {
        _classCallCheck(this, UserFavorites);

        var _this = _possibleConstructorReturn(this, (UserFavorites.__proto__ || Object.getPrototypeOf(UserFavorites)).call(this));

        _this.state = {
            favorites: [],
            errorMessage: ''
        };
        _this.getFavorites = _this.getFavorites.bind(_this);
        return _this;
    }

    _createClass(UserFavorites, [{
        key: 'getFavorites',
        value: function getFavorites() {
            var _this2 = this;

            this.props.getUserFavoritesEndpoint(this.props.token).then(function (data) {
                _this2.setState({
                    favorites: data.results,
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
            var listFavorites = null;
            if (this.props.token === '') {
                listFavorites = React.createElement(
                    'p',
                    null,
                    ' ',
                    React.createElement(
                        'a',
                        { href: '#top' },
                        ' Sign in '
                    ),
                    ' and click the button to get favorites. '
                );
            } else {
                listFavorites = this.state.favorites.map(function (fav) {
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
                    ' Demo of getting user favorites'
                ),
                React.createElement(
                    'button',
                    { disabled: this.props.token === "" ? true : false, className: "btn mb-1 btn-primary", onClick: this.getFavorites },
                    ' Get favorites '
                ),
                listFavorites,
                this.state.errorMessage
            );
        }
    }]);

    return UserFavorites;
}(React.Component);

export default UserFavorites;