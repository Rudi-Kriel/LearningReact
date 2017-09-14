import React, { Component } from 'react';
import Anchor from '../Buttons/Anchor.jsx';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul className="nav nav-pills float-right">
                    <li className="nav-item">
                        <Anchor className={'nav-link active'} href={'#'} text={'Home'} />
                    </li>
                    <li className="nav-item">
                        <Anchor className={'nav-link'} href={'#'} text={'About'} />
                    </li>
                    <li className="nav-item">
                        <Anchor className={'nav-link'} href={'#'} text={'Contact'} />
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;