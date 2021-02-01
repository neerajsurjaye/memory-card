import React, { useState } from "react";
import './App.css';
import Window from "./components/Window";

function App() {

  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);

  // setMaxScore(3);

  return (
    <div className="App">
      <div className="Header" >Memory Card</div>
      <div className="ScoreBoard">Score = {score} MaxScore = {maxScore}</div>
      <Window score={{ score: score, setScore: setScore, maxScore: maxScore, setMaxScore: setMaxScore }} />
    </div>
  );
}

export default App;
