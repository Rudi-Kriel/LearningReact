import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavicationBar extends Component {
    render() {
        return (
            <div className="header clearfix">
                <nav>
                    <ul className="nav nav-pills float-right">
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/About">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                        </li>
                    </ul>
                </nav>
                <h3 className="text-muted">{this.props.title}</h3>
            </div>
        );
    }
}

export default NavicationBar;