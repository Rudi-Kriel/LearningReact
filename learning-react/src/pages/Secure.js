import React, { Component } from "react";

class Secure extends Component {
    constructor(props) {
      super(props);
      this.state = {
        logOut: props.logOut,
        isLoggedIn: props.isLoggedIn,
        authResponse: props.authResponse
      };
    }

    componentWillReceiveProps(nextProps) {
      this.setState({
        isLoggedIn: nextProps.isLoggedIn,
        logOut: nextProps.logOut,
        authResponse: nextProps.authResponse
      });
    }

    render() {
      return (
        <div>
          <div>The securist page</div>
          <p>
            <input type="button" color="info" value="logout" onClick={() => this.state.logOut()} />
          </p>
          <hr />
          <pre>{JSON.stringify(this.state.authResponse, null, 2)}</pre>
        </div>
      );
    }
  }
  
  export default Secure;