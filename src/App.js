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

//   shuffle = id => {
//     var ctr = arra1.length, temp, index;

// // While there are elements in the array
//     while (ctr > 0) {
// // Pick a random index
//         index = Math.floor(Math.random() * ctr);
// // Decrease ctr by 1
//         ctr--;
// // And swap the last element with it
//         temp = arra1[ctr];
//         arra1[ctr] = arra1[index];
//         arra1[index] = temp;
//     }
//     return arra1;
// }


characterSelected = id => {
  // const characters = this.state.characters.filter(character => character.id);
  const characters = this.state.characters.filter(character =>character.id)
  if(character.id !==id){
    this.setState({Score:this.state.Score +1})
    this.setState({characters})
  }
  this.setState({Score:0})
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
