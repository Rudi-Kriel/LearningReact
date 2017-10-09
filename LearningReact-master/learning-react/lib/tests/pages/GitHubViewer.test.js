"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _GitHubViewer = require("../../pages/GitHubViewer");

var _GitHubViewer2 = _interopRequireDefault(_GitHubViewer);

var _enzyme = require("enzyme");

var _reactTestRenderer = require("react-test-renderer");

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test("GitHubViewer Test Snapshot", function () {
  var component = _reactTestRenderer2.default.create(_react2.default.createElement(_GitHubViewer2.default, null));
  var test = component.toJSON();
  expect(test).toMatchSnapshot();
});

test("GitHubViewer Test", function () {
  var page = (0, _enzyme.mount)(_react2.default.createElement(_GitHubViewer2.default, null));

  expect(page.find(".userSearch").exists()).toBeTruthy();
  expect(page.find("input").exists()).toBeTruthy();
  expect(page.find("button").exists()).toBeTruthy();

  page.find("input").text("riaan-pretorius");
  page.find("button").simulate("click");

  // setTimeout(() => {
  //   expect(page.find(".userResults").exists()).toBeTruthy();
  //   expect(page.find("li").exists()).toBeTruthy();
  //   page.find("li").simulate("click");
  //   setTimeout(() => {
  //     expect(page.find(".userProfile").exists()).toBeTruthy();
  //   });
  // }, 2000);
});