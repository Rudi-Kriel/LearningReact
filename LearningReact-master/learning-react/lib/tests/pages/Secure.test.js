"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Secure = require("../../pages/Secure");

var _Secure2 = _interopRequireDefault(_Secure);

var _enzyme = require("enzyme");

var _reactTestRenderer = require("react-test-renderer");

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test("Secure Test Snapshot", function () {
  var component = _reactTestRenderer2.default.create(_react2.default.createElement(_Secure2.default, null));
  var test = component.toJSON();
  expect(test).toMatchSnapshot();
});

test("Secure Test", function () {
  var page = (0, _enzyme.mount)(_react2.default.createElement(_Secure2.default, null));

  var signInButton = page.find("button");
  expect(signInButton.exists()).toBeTruthy();
  expect(signInButton.text()).toBe("Sign Out");
});