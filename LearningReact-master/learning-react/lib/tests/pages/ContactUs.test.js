'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ContactUs = require('../../pages/ContactUs');

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _enzyme = require('enzyme');

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('ContactUs Test Snapshot', function () {
  var component = _reactTestRenderer2.default.create(_react2.default.createElement(_ContactUs2.default, null));
  var test = component.toJSON();
  expect(test).toMatchSnapshot();
});

test('ContactUs Test', function () {
  var page = (0, _enzyme.mount)(_react2.default.createElement(_ContactUs2.default, null));

  var header = page.find('h1');
  expect(header.exists()).toBeTruthy();
  expect(header.text()).toBe("Contact Us");

  var p = page.find('p');
  expect(p.exists()).toBeTruthy();
  expect(p.text()).toBe("Please dont contact us.");
});