'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ToolbarItem = require('../../components/ToolbarItem');

var _ToolbarItem2 = _interopRequireDefault(_ToolbarItem);

var _enzyme = require('enzyme');

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('ToolbarItem Test Snapshot', function () {
  var component = _reactTestRenderer2.default.create(_react2.default.createElement(
    _reactRouterDom.MemoryRouter,
    null,
    _react2.default.createElement(_ToolbarItem2.default, { to: '/', text: 'Testing' })
  ));
  var test = component.toJSON();
  expect(test).toMatchSnapshot();
});

test('ToolbarItem Test', function () {
  var component = (0, _enzyme.mount)(_react2.default.createElement(
    _reactRouterDom.MemoryRouter,
    null,
    _react2.default.createElement(_ToolbarItem2.default, { to: '/', text: 'Testing' })
  ));

  var a = component.find('a');
  expect(a.exists()).toBeTruthy();
  expect(a.text()).toBe("Testing");
  expect(a.prop('href')).toBe("/");
});