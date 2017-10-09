"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require("reactstrap");

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserProfile = function (_Component) {
  _inherits(UserProfile, _Component);

  function UserProfile(props) {
    _classCallCheck(this, UserProfile);

    var _this = _possibleConstructorReturn(this, (UserProfile.__proto__ || Object.getPrototypeOf(UserProfile)).call(this, props));

    _this.getUser = function (username) {
      if (_this.state.username !== username) {
        _this.setState({ loading: true });
        _axios2.default.get("https://api.github.com/users/" + username).then(function (response) {
          _this.setState({
            username: username,
            user: response.data,
            loading: false
          });
        }).catch(function () {
          console.log("Promise Rejected");
        });
      }
    };

    _this.state = {
      loading: false,
      username: props.username,
      user: null
    };
    //this.getUser(props.username);
    return _this;
  }

  _createClass(UserProfile, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getUser(this.state.username);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      this.getUser(newProps.username);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _reactstrap.Col,
        null,
        this.state.loading || !this.state.user ? "Loading..." : _react2.default.createElement(
          _reactstrap.Col,
          null,
          _react2.default.createElement(
            _reactstrap.Card,
            null,
            _react2.default.createElement(
              _reactstrap.CardBlock,
              null,
              _react2.default.createElement(
                _reactstrap.CardTitle,
                null,
                _react2.default.createElement(
                  "strong",
                  null,
                  "Username:"
                ),
                this.state.user.login
              ),
              _react2.default.createElement(
                _reactstrap.CardSubtitle,
                null,
                _react2.default.createElement(
                  "strong",
                  null,
                  "Name:"
                ),
                this.state.user.name
              )
            ),
            _react2.default.createElement("img", {
              src: this.state.user.avatar_url,
              alt: "Generic placeholder",
              style: styles.profileImage
            })
          )
        )
      );
    }
  }]);

  return UserProfile;
}(_react.Component);

var styles = {
  profileImage: {
    borderStyle: "outset"
  }
};

exports.default = UserProfile;