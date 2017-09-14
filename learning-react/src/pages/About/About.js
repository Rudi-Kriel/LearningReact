import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron.js';
import SubHeading from '../../components/SubHeading/SubHeading.js';

class About extends Component {
    render() {
        return (
            <div>
                <Jumbotron heading={"About"} isHomePage={false} p={"What do you want to know about this project?"} />
                <div className="row marketing">
                    <div className="col-lg-6">
                        <SubHeading heading={"Company"} p= {"Reacting"} />
                    </div>
                    <div className="col-lg-6">
                        <SubHeading heading={"Details"} p= {"This is details"} />
                    </div>
                </div>
            </div>
        );
    }
}

export default About;