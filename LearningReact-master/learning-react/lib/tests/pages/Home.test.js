'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Home = require('../../pages/Home');

var _Home2 = _interopRequireDefault(_Home);

var _enzyme = require('enzyme');

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('ContactUs Test Snapshot', function () {
  var component = _reactTestRenderer2.default.create(_react2.default.createElement(_Home2.default, null));
  var test = component.toJSON();
  expect(test).toMatchSnapshot();
});

test('ContactUs Test', function () {
  var page = (0, _enzyme.mount)(_react2.default.createElement(_Home2.default, null));

  expect(page.find('.jumbotron').exists()).toBeTruthy();

  var header = page.find('h1');
  expect(header.exists()).toBeTruthy();
  expect(header.text()).toBe("Jumbotron heading");

  var button = page.find('button');
  expect(button.exists()).toBeTruthy();
  expect(button.text()).toBe("Sign up today");
});