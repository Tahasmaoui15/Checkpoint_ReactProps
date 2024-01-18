import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import React from "react";
import PlayersList from "./PlayersList";


function App() {
  return (
    <div className="App">
    <h1 style={{backgroundColor:"whiteSmoke"}}>Football Players</h1>
    <PlayersList />
  </div>
);
}

export default App;
