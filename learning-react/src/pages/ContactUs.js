import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron.js';

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "",
            sendCopy: false
        };
    }

    handleSubmit = (event) => {
        alert("Message was sent to " + this.state.name);
        event.preventDefault();
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <Jumbotron heading={"Contact"} isHomePage={false} text={"Please contact us."} />

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input ref="name" type="text" className="form-control" id="name" name="name" aria-describedby="firstName" placeholder="Enter name" onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input ref="email" type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleInputChange} />
                        <small id="emailHelp" className="form-text text-muted">Please use a real email address so that we can get back to you.</small>
                    </div>
                    <div className="form-group">
                        <label>Subject</label>
                        <input ref="subject" type="text" className="form-control" id="subject" name="subject" aria-describedby="subject" placeholder="Enter subject" onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea ref="message" cols="40" rows="5" className="form-control" id="message" name="message" aria-describedby="message" placeholder="Enter message" onChange={this.handleInputChange} />
                    </div>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" name="sendCopy" checked={this.state.sendCopy} onChange={this.handleInputChange} />
                            Send me a copied email
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default ContactUs;