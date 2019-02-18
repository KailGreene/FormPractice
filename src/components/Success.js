import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success!" />
          <h1>Thank you for Subscribing!</h1>
          <p>Look forward to future emails!</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
