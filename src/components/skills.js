import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

class Skills extends Component {
  render() {
    return (
      <Grid>
        <Cell col={2}>
          <div style={{ display: "flex" }}>{this.props.skill}</div>
        </Cell>
        <Cell col={10}>
          <ProgressBar
            col={9}
            style={{ margin: "auto", width: "80%" }}
            progress={this.props.progress}
          />
        </Cell>
      </Grid>
    );
  }
}

export default Skills;
