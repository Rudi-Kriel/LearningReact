"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require("reactstrap");

var _ToolbarItem = require("./ToolbarItem");

var _ToolbarItem2 = _interopRequireDefault(_ToolbarItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toolbar = function (_Component) {
  _inherits(Toolbar, _Component);

  function Toolbar(props) {
    _classCallCheck(this, Toolbar);

    var _this = _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this, props));

    _this.state = {
      title: props.title,
      links: props.links
    };
    return _this;
  }

  _createClass(Toolbar, [{
    key: "getLinks",
    value: function getLinks() {
      return this.state.links.map(function (link, index) {
        return _react2.default.createElement(_ToolbarItem2.default, { key: index, to: link.to, text: link.text });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _reactstrap.Col,
        null,
        _react2.default.createElement(
          _reactstrap.Row,
          null,
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: "4" },
            _react2.default.createElement(
              "h3",
              { className: "text-muted" },
              this.state.title
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: "8" },
            _react2.default.createElement(
              _reactstrap.Nav,
              { style: styles.nav, pills: true },
              this.getLinks()
            )
          )
        )
      );
    }
  }]);

  return Toolbar;
}(_react.Component);

var styles = {
  nav: {
    float: "right"
  }
};

exports.default = Toolbar;