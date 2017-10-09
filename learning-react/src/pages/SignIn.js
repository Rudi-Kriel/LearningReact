import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
    constructor(props) {
      super(props);
      this.state = {
        logIn: props.logIn,
        isLoggedIn: props.isLoggedIn
      };
    }
    
    componentWillReceiveProps(nextProps) {
      this.setState({
        isSignedIn: nextProps.isLoggedIn
      });
    }

    render() {
      return this.state.isLoggedIn ? 
        <Redirect to="/secure" /> : 
        <input type="button" color="info" value="Login" onClick={() => this.state.logIn()} />;
    }
}
  
  export default SignIn;