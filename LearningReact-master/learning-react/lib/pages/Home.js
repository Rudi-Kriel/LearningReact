"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Jumbo = require("../components/Jumbo");

var _Jumbo2 = _interopRequireDefault(_Jumbo);

var _BodyItem = require("../components/BodyItem");

var _BodyItem2 = _interopRequireDefault(_BodyItem);

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bodyItems = [{
  heading: "Subheading",
  subText: "Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum."
}, {
  heading: "Subheading",
  subText: "Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum."
}, {
  heading: "Subheading",
  subText: "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum."
}, {
  heading: "Subheading",
  subText: "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum."
}, {
  heading: "Subheading",
  subText: "Maecenas sed diam eget risus varius blandit sit amet non magna."
}, {
  heading: "Subheading",
  subText: "Maecenas sed diam eget risus varius blandit sit amet non magna."
}];

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "getBodyItems",
    value: function getBodyItems() {
      return bodyItems.map(function (item, index) {
        return _react2.default.createElement(_BodyItem2.default, { key: index, heading: item.heading, subText: item.subText });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _reactstrap.Col,
        null,
        _react2.default.createElement(_Jumbo2.default, {
          title: "Jumbotron heading",
          subText: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
          buttonText: "Sign up today"
        }),
        _react2.default.createElement(
          _reactstrap.Row,
          null,
          this.getBodyItems()
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;