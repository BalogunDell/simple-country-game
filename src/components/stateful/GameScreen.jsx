import React from "react";

class GameScreen extends React.PureComponent {
  constructor(props) {
    super(props); 
  
  }
  render(){
    console.log(this.props);
    return(
      <div>
        Welcome to game screen
      </div>
    );
  }
}

export default GameScreen;