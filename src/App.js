import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";
import CharacterCard from "./components/CharacterCard"

class App extends Component {
  // Setting this.state.characters to the images json array
  state = {
    characters
  };

  render() {
    return (
      <Wrapper>
        <Title>Clicky Game </Title> 
        <Title>SCORE: 0 Hi-Score:0 </Title> 
        {this.state.characters.map(character => (
          <CharacterCard
          image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}
export default App;
