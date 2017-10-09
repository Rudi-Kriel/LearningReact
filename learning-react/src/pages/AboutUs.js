import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron.js';
import SubHeading from '../components/SubHeading.js';

class AboutUs extends Component {
    render() {
        return (
            <div>
                <Jumbotron heading={"About"} isHomePage={false} text={"What do you want to know about this project?"} />
                <div className="row marketing">
                    <div className="col-lg-6">
                        <SubHeading heading={"Company"} text={"Reacting"} />
                    </div>
                    <div className="col-lg-6">
                        <SubHeading heading={"Details"} text={"This is details"} />
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;