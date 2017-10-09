'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Jumbo = require('../../components/Jumbo');

var _Jumbo2 = _interopRequireDefault(_Jumbo);

var _enzyme = require('enzyme');

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('Jumbo Test Snapshot', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(_Jumbo2.default, { title: 'Jumbotron heading',
        subText: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
        buttonText: 'Sign up today' }));
    var test = component.toJSON();
    expect(test).toMatchSnapshot();
});

test('Jumbo Test', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_Jumbo2.default, { title: 'Jumbotron heading',
        subText: 'Cras justo odio.',
        buttonText: 'Sign up today' }));
    expect(component.find('.jumbotron').exists()).toBeTruthy();

    var header = component.find('h1');
    expect(header.exists()).toBeTruthy();
    expect(header.text()).toBe("Jumbotron heading");

    var p = component.find('p');
    expect(p.exists()).toBeTruthy();
    expect(p.text()).toBe("Cras justo odio.");

    var button = component.find('button');
    expect(button.exists()).toBeTruthy();
    expect(button.text()).toBe("Sign up today");
});