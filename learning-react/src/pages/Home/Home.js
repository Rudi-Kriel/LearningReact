import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron.js';
import SubHeading from '../../components/SubHeading/SubHeading.js';

class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron heading={"Jumbotron great success!"} isHomePage={true} p={" This must be the greatest component to hit all of the world! Hello everyone I am going to make React great again. Starting with Jumbotron."}/>
                <div className="row marketing">
                    <div className="col-lg-6">
                        <SubHeading heading={"The fist sub heading"} p={"The very first paragraph!"} />
                        <SubHeading heading={"The second sub heading"} p={"The second paragraph."} />
                        <SubHeading heading={"The third sub heading"} p={"The third paragraph."} />
                    </div>
                    <div className="col-lg-6">
                        <SubHeading heading={"The fourth sub heading"} p={"Donec id elit non mi porta gravida at eget."} />
                        <SubHeading heading={"The fifth sub heading"} p={"Cras mattis consectetur purus sit amet fermentum."} />
                        <SubHeading heading={"The sixth sub heading"} p={"Maecenas sed diam eget risus varius blandit."} />
                    </div>
                </div>
                <footer className="footer">
                    <p>COMPRSA 2017</p>
                </footer>
            </div>
        );
    }
}

export default Home;