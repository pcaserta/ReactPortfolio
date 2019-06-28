import React, { Component } from "react";
import Wrapper from "./components/wrapper";
import Title from "./components/title";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Title> Clicky Game! Click an image to begin <strong>Score: 0 | Top Score: 0</strong></Title>
      </Wrapper>
    );
  }
}
export default App;
