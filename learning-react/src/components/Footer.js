import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Footer extends Component {
    render() {
        return (
            <Row>
                <Col>
                    <footer className="footer">
                        <p>COMPRSA 2017</p>
                    </footer>
                </Col>
            </Row>
        );
    }
}

export default Footer;