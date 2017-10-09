"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _UserProfile = require("../../components/UserProfile");

var _UserProfile2 = _interopRequireDefault(_UserProfile);

var _enzyme = require("enzyme");

var _reactTestRenderer = require("react-test-renderer");

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test("UserProfileTest Snapshot", function () {
  var component = _reactTestRenderer2.default.create(_react2.default.createElement(_UserProfile2.default, { username: "riaan-pretorius" }));
  var test = component.toJSON();
  expect(test).toMatchSnapshot();
});

test("UserProfile Test", function () {
  var component = (0, _enzyme.mount)(_react2.default.createElement(_UserProfile2.default, { username: "riaan-pretorius" }));
  setTimeout(function () {
    expect(component.find(".card").exists()).toBeTruthy();

    var header = component.find("h4");
    expect(header.exists()).toBeTruthy();
    expect(header.text()).toBe("Username:riaan-pretorius");

    var p = component.find("h6");
    expect(p.exists()).toBeTruthy();
    expect(p.text()).toContain("Name:");

    var button = component.find("img");
    expect(button.exists()).toBeTruthy();
  }, 2000);
});