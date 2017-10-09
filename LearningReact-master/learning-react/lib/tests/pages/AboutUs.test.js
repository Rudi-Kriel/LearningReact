'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AboutUs = require('../../Pages/AboutUs');

var _AboutUs2 = _interopRequireDefault(_AboutUs);

var _enzyme = require('enzyme');

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('AboutUs Test Snapshot', function () {
  var component = _reactTestRenderer2.default.create(_react2.default.createElement(_AboutUs2.default, null));
  var test = component.toJSON();
  expect(test).toMatchSnapshot();
});

test('AboutUs Test', function () {
  var page = (0, _enzyme.mount)(_react2.default.createElement(_AboutUs2.default, null));

  var header = page.find('h1');
  expect(header.exists()).toBeTruthy();
  expect(header.text()).toBe("About Us");

  var p = page.find('p');
  expect(p.exists()).toBeTruthy();
  expect(p.text()).toBe("We got nothing");
});