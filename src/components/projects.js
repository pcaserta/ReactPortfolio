import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://i2.wp.com/www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo.jpg?resize=825%2C510&ssl=1) center / cover"
            }}
          >
            React Project #1
          </CardTitle>
          <CardText>
            This is my first react project brought to you by me. It is a
            full-stack function website.
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is Node.JS</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is JavaScript</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is MongoDB</h1>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Node.JS</Tab>
          <Tab>JavaScript</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>
        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;
