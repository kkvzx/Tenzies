import React from "react";
import "./App.css";
import { Header } from "./componenets/Header";
import { Hero } from "./componenets/Hero";

function App() {
  return (
    <div className="mainContainer">
      <Header />
      <Hero />
    </div>
  );
}

export default App;

// TODO
// Add Darkmode
// Track the number of rolls
// Track the time it took to win
// Save your best time to localStorage

// NEXT PROJECT - QUIZZICAL TRIVIA
// 11:45
