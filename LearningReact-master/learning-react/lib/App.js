"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Home = require("./pages/Home");

var _Home2 = _interopRequireDefault(_Home);

var _GitHubViewer = require("./pages/GitHubViewer");

var _GitHubViewer2 = _interopRequireDefault(_GitHubViewer);

var _AboutUs = require("./pages/AboutUs");

var _AboutUs2 = _interopRequireDefault(_AboutUs);

var _ContactUs = require("./pages/ContactUs");

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _Toolbar = require("./components/Toolbar");

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Secure = require("./pages/Secure");

var _Secure2 = _interopRequireDefault(_Secure);

var _SignIn = require("./pages/SignIn");

var _SignIn2 = _interopRequireDefault(_SignIn);

var _reactstrap = require("reactstrap");

var _reactRouterDom = require("react-router-dom");

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

require("./css/bootstrap.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var links = [{ to: "/", text: "Home" }, { to: "/githubviewer", text: "GitHub Viewer" }, { to: "/about", text: "About" }, { to: "/contact", text: "Contact" }, { to: "/sign-in", text: "Sign In" }, { to: "/secure", text: "Secure" }];

var initialState = {
  isSignedIn: false,
  authResponse: {}
};

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.signIn = function () {
      debugger;
      var clientId = localStorage.Test;
      _axios2.default.get("https://api.github.com/?access_token=" + clientId).then(function (response) {
        if (response.status === 200) _this.setState({
          isSignedIn: true,
          authResponse: response
        });
      }).catch(function () {
        console.log("Promise Rejected");
      });

      //this.context.router.history.push("/secure");
    };

    _this.signOut = function () {
      _this.setState({ isSignedIn: false });
    };

    _this.state = initialState;
    return _this;
  }

  _createClass(App, [{
    key: "isSignedIn",
    value: function isSignedIn() {
      return this.state.isSignedIn;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactstrap.Container,
        { style: styles.container },
        _react2.default.createElement(
          _reactstrap.Row,
          null,
          _react2.default.createElement(
            _reactstrap.Col,
            null,
            _react2.default.createElement(
              _reactRouterDom.BrowserRouter,
              null,
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(_Toolbar2.default, { title: "Project name", links: links }),
                _react2.default.createElement("hr", null),
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/", component: _Home2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: "/githubviewer", component: _GitHubViewer2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: "/about", component: _AboutUs2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: "/contact", component: _ContactUs2.default }),
                _react2.default.createElement(_reactRouterDom.Route, {
                  path: "/sign-in",
                  render: function render(props) {
                    return _react2.default.createElement(_SignIn2.default, {
                      signIn: _this2.signIn,
                      isSignedIn: _this2.state.isSignedIn
                    });
                  }
                }),
                _react2.default.createElement(_reactRouterDom.Route, {
                  path: "/secure",
                  render: function render(props) {
                    return _this2.state.isSignedIn === true ? _react2.default.createElement(_Secure2.default, _extends({}, props, {
                      signOut: _this2.signOut,
                      authResponse: _this2.state.authResponse
                    })) : _react2.default.createElement(_reactRouterDom.Redirect, { to: { pathname: "/sign-in" } });
                  }
                })
              )
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var styles = {
  container: {
    paddingTop: 20
  }
};

exports.default = App;