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

var Jumbo = function (_Component) {
  _inherits(Jumbo, _Component);

  function Jumbo(props) {
    _classCallCheck(this, Jumbo);

    var _this = _possibleConstructorReturn(this, (Jumbo.__proto__ || Object.getPrototypeOf(Jumbo)).call(this, props));

    _this.state = {
      title: props.title,
      subText: props.subText,
      buttonText: props.buttonText
    };
    return _this;
  }

  _createClass(Jumbo, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _reactstrap.Jumbotron,
        { style: styles.jumbotron },
        _react2.default.createElement(
          "h1",
          null,
          this.state.title
        ),
        _react2.default.createElement(
          "p",
          null,
          this.state.subText
        ),
        _react2.default.createElement(
          _reactstrap.Button,
          { color: "success" },
          this.state.buttonText
        )
      );
    }
  }]);

  return Jumbo;
}(_react.Component);

var styles = {
  jumbotron: {
    textAlign: "center"
  }
};

exports.default = Jumbo;