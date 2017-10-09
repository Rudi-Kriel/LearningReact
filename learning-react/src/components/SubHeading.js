// @flow
import React, { Component } from 'react';

type Props = {
    heading: string,
    text: string
};

type State = {
    heading: string,
    text: string
};

class SubHeading extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            heading: props.heading,
            text: props.text
        };
    }
    render() {
        return (
            <div className="col-lg-6">
                <h4>{this.state.heading}</h4>
                <p>
                    {this.state.text}
                </p>
            </div>
        )
    }
};

export default SubHeading;