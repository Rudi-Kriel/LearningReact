// @flow
import React, { Component } from 'react';

type Props = {
    heading: string,
    text: string,
    isHomePage: boolean
};

type State = {
    heading: string,
    text: string,
    isHomePage: boolean
};

class Jumbotron extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            heading: props.title,
            text: props.text,
            isHomePage: props.isHomePage
        };
    }

    render() {
        let button = null;

        if (this.state.isHomePage) {
            button = <p className="lead">
                <a className="btn btn-lg btn-success" href="/" role="button">Sign up today</a>
            </p>;
        }

        return (
            <div className="jumbotron">
                <h1 className="display-3">{this.state.heading}</h1>
                <p className="lead">{this.state.text}</p>
                {button}
            </div>
        );
    }
}

export default Jumbotron;