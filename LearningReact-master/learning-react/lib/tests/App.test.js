'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _App = require('../App');

var _App2 = _interopRequireDefault(_App);

var _enzyme = require('enzyme');

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('App Test Snapshot', function () {
  var component = _reactTestRenderer2.default.create(_react2.default.createElement(_App2.default, null));
  var test = component.toJSON();
  expect(test).toMatchSnapshot();
});

test('App Test', function () {
  var app = (0, _enzyme.mount)(_react2.default.createElement(_App2.default, null));

  expect(app.find('.container').exists()).toBeTruthy();
  expect(app.find('.row').exists()).toBeTruthy();
  expect(app.find('.col').exists()).toBeTruthy();
});