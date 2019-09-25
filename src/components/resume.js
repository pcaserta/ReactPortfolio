import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>Left Side</Cell>
          <Cell col={8}>Right Side Side</Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
