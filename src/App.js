import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// Components
import Home from "./components/functional/Home";
import Countries from "./components/stateful/Countries";
import GameScreen from "./components/stateful/GameScreen";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>  
          <Route path="/" exact component={Home}/>
          <Route path="/countries" exact component={Countries}/>
          <Route path="/countries/:country" exact component={GameScreen}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
