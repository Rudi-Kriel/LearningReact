import React, { Component } from 'react';

class Jumbotron extends Component {
    render() {
        const isHomePage = this.props.isHomePage;
        const heading = this.props.heading;
        const paragraph = this.props.p;
        let button = null;

        if (isHomePage) {
            button = <p className="lead">
                        <a className="btn btn-lg btn-success" href="/" role="button">Sign up today</a>
                    </p>;
        }

        return (
            <div className="jumbotron">
                <h1 className="display-3">{heading}</h1>
                <p className="lead">{paragraph}</p>
                {button}
            </div>
        );
    }
}

export default Jumbotron;