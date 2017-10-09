// @flow
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

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

    createRoute = (key, route, text) => (
        <li key={key} className="nav-item">
            <NavLink className="nav-link" to={route}>
                {text}
            </NavLink>
        </li>
    );

    createRoutes = () =>
        this.state.routes.map((item, index) => {
            return this.createRoute(index, item.to, item.text);
    });

    render() {
        return (
            <div className="header clearfix">
                <nav>
                    <ul className="nav nav-pills float-right">{this.createRoutes()}</ul>
                </nav>
                <h3 className="text-muted">{this.state.title}</h3>
            </div>
        );
    }
}



export default NavicationBar;
