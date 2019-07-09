import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";
import CharacterCard from "./components/CharacterCard";
import Score from "./components/Score";
import HighScore from "./components/HighScore";
import Holder from "./components/Holder";

class App extends Component {
  // Setting this.state.characters to the images json array
  

  state = {
    characters,
    Score:0,
    Holder
    
    
   

  };

 


characterSelected = id => {
  // const characters = this.state.characters.filter(character => character.id);
  
  
this.setState({Score: this.state.Score +1})
}



  
  


  
  







  

  render() {
    return (
      <Wrapper>
        <Title>Clicky Game </Title> 
        <Title>  <Score>Score:{this.state.Score}</Score><HighScore>Hi-Score:0 </HighScore></Title> 
        {this.state.characters.map(character => (
          <CharacterCard
          characterSelected = {this.characterSelected}
          key = {character.id}
          selected = {character.selected}
          id = {character.id}
          
          image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}
export default App;
