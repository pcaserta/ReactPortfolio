import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

class Skills extends Component {
  render() {
    return (
      <Grid>
        <Cell col={3}>
          <div style={{ display: "flex", paddingRight: "50px" }}>
            {this.props.skill}
          </div>
        </Cell>
        <Cell col={9}>
          <ProgressBar
            col={9}
            style={{ margin: "auto", width: "100%" }}
            progress={this.props.progress}
          />
        </Cell>
      </Grid>
    );
  }
}

export default Skills;
