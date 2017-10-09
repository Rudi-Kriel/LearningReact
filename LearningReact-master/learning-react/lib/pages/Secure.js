"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Secure = function (_Component) {
  _inherits(Secure, _Component);

  function Secure(props) {
    _classCallCheck(this, Secure);

    var _this = _possibleConstructorReturn(this, (Secure.__proto__ || Object.getPrototypeOf(Secure)).call(this, props));

    _this.state = {
      signOut: props.signOut,
      isSignedIn: props.isSignedIn,
      authResponse: props.authResponse
    };
    return _this;
  }

  _createClass(Secure, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        isSignedIn: nextProps.isSignedIn,
        signOut: nextProps.signOut,
        authResponse: nextProps.authResponse
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          null,
          "Secure PAGE"
        ),
        _react2.default.createElement(
          "p",
          null,
          _react2.default.createElement(
            _reactstrap.Button,
            { color: "info", onClick: function onClick() {
                return _this2.state.signOut();
              } },
            "Sign Out"
          )
        ),
        _react2.default.createElement("hr", null),
        _react2.default.createElement(
          "pre",
          null,
          JSON.stringify(this.state.authResponse, null, 2)
        )
      );
    }
  }]);

  return Secure;
}(_react.Component);

exports.default = Secure;