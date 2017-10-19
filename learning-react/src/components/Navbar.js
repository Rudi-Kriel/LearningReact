// @flow
import React, { Component } from "react";
import NavbarItem from './NavbarItem.js';
import { Row, Col, Nav } from "reactstrap";

type Props = {
    title: string,
    routes: Array <Object>
};

type State = {
    title: string,
    routes: Array <Object>
};

class NavicationBar extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            title: props.title,
            routes: props.routes
        };
    }

    createRoutes = () => {
        return this.state.routes.map((item, index) => {
            return <NavbarItem key={index} to={item.to} text={item.text} />
        });
    }

    render() {
        return (
            <Row>
                <Col sm="4">
                    <h3 className="text-muted">{this.state.title}</h3>
                </Col>
                <Col sm="8">
                    <Nav>
                        {this.createRoutes()}
                    </Nav>
                </Col>
            </Row>
        );
    }
}

export default NavicationBar;
