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
    characters
   

  };

  shuffleCharacter = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const characters = this.state.characters.filter(character => character.id !== id);
    
    // Set this.state.friends equal to the new friends array
    this.setState({ characters });
  };

  render() {
    return (
      <Wrapper>
        <Title>Clicky Game </Title> 
        <Title>  <Score>Score:0</Score><HighScore>Hi-Score:0 </HighScore></Title> 
        {this.state.characters.map(character => (
          <CharacterCard
          shuffleCharacter = {this.shuffleCharacter}
          key = {character.id}
          id = {character.id}
          image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}
export default App;
