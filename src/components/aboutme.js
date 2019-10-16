import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class About extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="aboutme-grid">
          <Cell col={12}>
            <img
              src="images/betterPhoto.jpg"
              alt="avatar"
              className="avatar-img"
            />

            <p
              className="aboutMe-text"
              style={{ width: "50%", textAlign: "left" }}
            >
              I have been coding since I started my education at Longwood
              University. I started with VisualBasic, SQL, and self-taught
              Python. After entering the work force I realized that I wanted to
              learn more and further my skills in the programming world. I chose
              to take the web development path by signing up for the University
              of Richmond Coding Boot Camp where I excelled and learned how to
              build full-stack web applications.
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
