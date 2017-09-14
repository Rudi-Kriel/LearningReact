import React, { Component } from 'react';
import Paragraph from '../Sections/Paragraph.jsx';
import Anchor from '../Buttons/Anchor.jsx';

class JumbotronContainer extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-3">Jumbotron heading</h1>
                <Paragraph className={'lead'} paragraph={'Nice day for fishing!'} />
                <Paragraph className={'lead'} paragraph={
                    <Anchor className={'btn btn-lg btn-success'} href={'#'} role={'button'} text={'Sign up today'} />
                } />
            </div>
        );
    }
}

export default JumbotronContainer;