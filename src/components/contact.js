import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid classNmae="contact-grid">
          <Cell col={6}>Half Page</Cell>
          <Cell col={6}>Half Page</Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
