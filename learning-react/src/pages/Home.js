// @flow
import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron.js';
import SubHeading from '../components/SubHeading.js';

const subHeadings = [
    {
        heading: "The fist sub heading",
        text:
            "The very first paragraph!"
    },
    {
        heading: "The second sub heading",
        text:
            "The second paragraph."
    },
    {
        heading: "The third sub heading",
        text:
            "The third paragraph."
    },
    {
        heading: "The fourth sub heading",
        text:
            "Donec id elit non mi porta gravida at eget."
    },
    {
        heading: "The fifth sub heading",
        text: "Cras mattis consectetur purus sit amet fermentum."
    },
    {
        heading: "The sixth sub heading",
        text: "Maecenas sed diam eget risus varius blandit."
    }
];

class Home extends Component {
    getSubHeadings() {
        return subHeadings.map((item, index) => {
            return (
                <SubHeading key={index} heading={item.heading} text={item.text} />
            );
        });
    }

    render() {
        return (
            <div>
                <Jumbotron heading={"Jumbotron great success!"} isHomePage={true} text={"This must be the greatest component to hit all of the world! Hello everyone I am going to make React great again. Starting with Jumbotron."}/>
                <div className="row marketing">
                    {this.getSubHeadings()}
                </div>
                <footer className="footer">
                    <p>COMPRSA 2017</p>
                </footer>
            </div>
        );
    }
}

export default Home;