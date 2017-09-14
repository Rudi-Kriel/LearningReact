import React, { Component } from 'react';
import JumbotronContainer from './components/JumbotronContainer/JumbotronContainer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import SubHeading from './components/Sections/SubHeading.jsx';
import Paragraph from './components/Sections/Paragraph.jsx';
import './App.css';

class App extends Component {
render() {
    return (
            <div className="container">
                <div className="header clearfix">
                    <Navbar />
                    <h3 className="text-muted">Project name</h3>
                </div>
                <JumbotronContainer />
                <div className="row marketing">
                    <div className="col-lg-6">
                        <SubHeading subHeading={'The first subheading'} />
                        <Paragraph paragraph={'Great paragraph.'} />
                        <SubHeading subHeading={'The second subheading'} />
                        <Paragraph paragraph={'Great paragraph again.'} />
                        <SubHeading subHeading={'The third subheading'} />
                        <Paragraph paragraph={'The third paragraph for testing purposes.'} />
                    </div>
                    <div className="col-lg-6">
                        <SubHeading subHeading={'The fourth subheading'} />
                        <Paragraph paragraph={'This paragraph is a bit longer than the rest and should span over two lines.'} />
                        <SubHeading subHeading={'The fifth subheading'} />
                        <Paragraph paragraph={'Great paragraph fort the third time.'} />
                        <SubHeading subHeading={'The sixth subheading'} />
                        <Paragraph paragraph={'This paragraph had great success.'} />
                    </div>
                </div>
                <footer className="footer">
                    <Paragraph paragraph={'Company 2017'} />
                </footer>
            </div>
        );
    }
}

export default App;
