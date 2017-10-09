'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BodyItem = require('../../components/BodyItem');

var _BodyItem2 = _interopRequireDefault(_BodyItem);

var _enzyme = require('enzyme');

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('BodyItem Test Snapshot', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(_BodyItem2.default, { heading: 'Testing', subText: 'Testing SubText' }));
    var test = component.toJSON();
    expect(test).toMatchSnapshot();
    //expect(test.props.heading).toBe("Testing");
    //expect(test.props.subText).toBe("Testing SubText");
});

test('BodyItem Test', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_BodyItem2.default, { heading: 'Testing', subText: 'Testing SubText' }));
    expect(component.find('.col').exists()).toBeTruthy();

    var header = component.find('h4');
    expect(header.exists()).toBeTruthy();
    expect(header.text()).toBe("Testing");

    var p = component.find('p');
    expect(p.exists()).toBeTruthy();
    expect(p.text()).toBe("Testing SubText");
});