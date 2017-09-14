import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron.js';

class Contact extends Component {
    render() {
        return (
            <Jumbotron heading={"Contact"} isHomePage={false} p= {"Please contact us."} />
        );
    }
}

export default Contact;