import React, { Component } from 'react';
import axios from "axios";
import NavicationBar from './components/Navbar.js';
import Form from './pages/Form.js';
import AboutUs from './pages/AboutUs.js';
import ContactUs from './pages/ContactUs.js';
import SignIn from './pages/SignIn.js';
import Secure from './pages/Secure.js';
import Home from './pages/Home.js';
import GitHubViewer from './pages/GitHubViewer.js';
import reducers from './reducers/index'
import { createBrowserHistory } from 'history'
import { Route, Switch, Redirect } from 'react-router'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { ConnectedRouter, connectRouter, routerMiddleware } from 'connected-react-router'
import { Container, Row, Col } from 'reactstrap';
import "./css/bootstrap.css";

const history = createBrowserHistory()
const middleware = routerMiddleware(history)
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    connectRouter(history)(reducers),
    composeEnhancer(
        applyMiddleware(middleware)
    )
)

const routes = [
    { 'to': '/', 'text': 'Home'},
    { 'to': "/githubviewer", text: "GitHub Viewer" },
    { 'to': '/form', 'text': 'Form'},
    { 'to': '/about', 'text': 'About'},
    { 'to': '/contact', 'text': 'Contact'},
    { 'to': '/signIn', 'text': 'Login'},
    { 'to': '/secure', 'text': 'Secure'}
];

const initialState = {
    isLoggedIn: false,
    authResponse: {}
};

class App extends Component {
    constructor() {
        super();
        this.state = initialState;
    }

    logIn = () => {
        const clientId = localStorage.Test;

        axios
          .get("https://api.github.com/?access_token=" + clientId)
          .then(response => {
            if (response.status === 200)
              this.setState({
                isLoggedIn: true,
                authResponse: response
              });
          })
          .catch(function() {
            console.log("Promise Rejected");
          });
    };

    logOut = () => {
        this.setState({ isLoggedIn: false });
    };

    isLoggedIn() {
        return this.state.isLoggedIn;
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Provider store={store}>
                            <ConnectedRouter history={history}>
                                <div>
                                    <NavicationBar title={"Learning React"} routes={routes} />
                                    <hr />
                                    <Switch>
                                        <Route exact path="/" component={Home} />
                                        <Route path="/githubviewer" component={GitHubViewer} />
                                        <Route path="/form" component={Form} />
                                        <Route path="/about" component={AboutUs} />
                                        <Route path="/contact" component={ContactUs} />
                                        <Route
                                            path="/signIn"
                                            render={props => (
                                                <SignIn
                                                    logIn={this.logIn}
                                                    isLoggedIn={this.state.isLoggedIn} 
                                                />
                                            )}
                                        />
                                        <Route
                                            path="/secure"
                                            render={props =>
                                                this.state.isLoggedIn === true ?
                                                <Secure
                                                    {...props}
                                                    logOut={this.logOut}
                                                    authResponse={this.state.authResponse}/>:
                                                <Redirect to={{ pathname: "/signIn" }} />
                                            }
                                        />
                                    </Switch>
                                </div>
                            </ConnectedRouter>
                        </Provider>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
