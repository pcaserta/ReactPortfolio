import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";
import CharacterCard from "./components/CharacterCard";
import Score from "./components/Score";
import HighScore from "./components/HighScore";

class App extends Component {
  // Setting this.state.characters to the images json array

  state = {
    characters,
    Score: 0
  };

  characterSelected = selected => {
    console.log(selected)
    

      
      
  }
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game </Title>
        <Title>
          
          <Score>Score:{this.state.Score}</Score>
          <HighScore>Hi-Score:0 </HighScore>
        </Title>
        {this.state.characters.map(character => (
          <CharacterCard
            characterSelected={this.characterSelected}
            key={character.id}
            selected={character.selected}
            id={character.id}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}
export default App;
