import React, { Component } from 'react';
import './App.css';
import NavicationBar from './components/Navbar/Navbar.js';
import About from './pages/About/About.js';
import Contact from './pages/Contact/Contact.js';
import Home from './pages/Home/Home.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
render() {
    return (
        <Router>
            <div className="container">
                <NavicationBar title={"Learning React"} />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
            </div>
        </Router>
        );
    }
}

export default App;
