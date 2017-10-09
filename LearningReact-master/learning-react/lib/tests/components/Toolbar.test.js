'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Toolbar = require('../../components/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _enzyme = require('enzyme');

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('Toolbar Test Snapshot', function () {
  var component = _reactTestRenderer2.default.create(_react2.default.createElement(
    _reactRouterDom.MemoryRouter,
    null,
    _react2.default.createElement(_Toolbar2.default, { title: 'Testing', links: [{ to: "#", text: "Testing" }] })
  ));
  var test = component.toJSON();
  expect(test).toMatchSnapshot();
});

test('Toolbar Test', function () {
  var component = (0, _enzyme.mount)(_react2.default.createElement(
    _reactRouterDom.MemoryRouter,
    null,
    _react2.default.createElement(_Toolbar2.default, { title: 'Testing', links: [{ to: "/", text: "Testing" }] })
  ));

  var header = component.find('h3');
  expect(header.exists()).toBeTruthy();
  expect(header.text()).toBe("Testing");

  var a = component.find('a');
  expect(a.exists()).toBeTruthy();
  expect(a.text()).toBe("Testing");
  expect(a.prop('href')).toBe("/");
});