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

var _UserProfile = require("./UserProfile");

var _UserProfile2 = _interopRequireDefault(_UserProfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserSearch = function (_Component) {
  _inherits(UserSearch, _Component);

  function UserSearch(props) {
    _classCallCheck(this, UserSearch);

    var _this = _possibleConstructorReturn(this, (UserSearch.__proto__ || Object.getPrototypeOf(UserSearch)).call(this, props));

    _this.getUsers = function () {
      _axios2.default.get("https://api.github.com/search/users?q=" + _this.state.searchText).then(function (response) {
        _this.setState({ result: response.data.items });
      }).catch(function () {
        console.log("Promise Rejected");
      });
    };

    _this.getUserList = function () {
      return _this.state.result.map(function (item, index) {
        return _react2.default.createElement(
          _reactstrap.ListGroupItem,
          {
            key: index,
            action: true,
            active: _this.state.currentUser !== null ? _this.state.currentUser.id === item.id : false,
            onClick: function onClick() {
              _this.setState({
                currentUser: item
              });
            }
          },
          item.login
        );
      });
    };

    _this.state = {
      searchText: "",
      result: [],
      currentUser: null
    };
    return _this;
  }

  _createClass(UserSearch, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactstrap.Row,
        null,
        _react2.default.createElement(
          _reactstrap.Col,
          { sm: 4, style: styles.box },
          _react2.default.createElement(
            _reactstrap.Form,
            null,
            _react2.default.createElement(
              _reactstrap.InputGroup,
              { className: "userSearch" },
              _react2.default.createElement(_reactstrap.Input, {
                placeholder: "Search github user",
                onChange: function onChange(event) {
                  _this2.setState({ searchText: event.target.value });
                }
              }),
              _react2.default.createElement(
                _reactstrap.InputGroupButton,
                null,
                _react2.default.createElement(
                  _reactstrap.Button,
                  {
                    onClick: this.getUsers,
                    disabled: this.state.searchText.length === 0
                  },
                  "Search"
                )
              )
            )
          ),
          this.state.result.length > 0 ? _react2.default.createElement(
            _reactstrap.Col,
            { className: "userResults" },
            _react2.default.createElement(
              "h4",
              null,
              "Search results"
            ),
            _react2.default.createElement(
              _reactstrap.ListGroup,
              null,
              this.getUserList()
            )
          ) : ""
        ),
        _react2.default.createElement(
          _reactstrap.Col,
          { sm: 8 },
          this.state.currentUser ? _react2.default.createElement(_UserProfile2.default, { username: this.state.currentUser.login }) : ""
        )
      );
    }
  }]);

  return UserSearch;
}(_react.Component);

var styles = {
  box: {
    borderRight: "5px",
    borderRightStyle: "groove"
  }
};

exports.default = UserSearch;