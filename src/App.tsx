import React from "react";
import "./App.css";
import { Header } from "./componenets/Header";
import { Hero } from "./componenets/Hero";
import { Summary } from "./componenets/Summary";
import { diceGen } from "./componenets/Data";
import { DarkModeSwitch } from "./componenets/DarkModeSwitch";

function App() {
  const [darkMode, setDarkMode] = React.useState(true);
  const [isItTheEnd, setIsItTheEnd] = React.useState(false);
  const [dicesFromData, setDicesFromData] = React.useState(diceGen);
  const [count, setCount] = React.useState(0);

  // dark mode
  const darkModeToggle = () => {
    setDarkMode((prevState) => !prevState);
  };
  // Game ended
  const isItTheEndToggle = (rightValue: boolean) => {
    setIsItTheEnd(rightValue);
    checkTheBestScore();
  };
  // Resets the game by rerender values and opening hero.tsx
  const reset = () => {
    setDicesFromData(diceGen);
    setCount(0);
    setIsItTheEnd(false);
  };
  // roll counting
  const counter = () => {
    setCount(count + 1);
  };

  // check for the best score (the lowest)
  const checkTheBestScore = () => {
    const theBestScore = Number(localStorage.getItem("bestScore"));
    if (theBestScore !== null && theBestScore > count) {
      localStorage.setItem("bestScore", JSON.stringify(count));
    }
  };

  // Styles
  const darkModeStyles = {
    backgroundColor: darkMode ? "var(--add-color)" : "var(--bck-color)",
  };
  const gameContainerStyle = {
    display: isItTheEnd ? "none" : "flex",
  };
  const summaryContainerStyle = {
    display: isItTheEnd ? "flex" : "none",
  };

  return (
    <div className="wrapper" style={darkModeStyles}>
      {/* Game div */}
      <div className="gameContainer" style={gameContainerStyle}>
        <DarkModeSwitch toggle={darkModeToggle} darkMode={darkMode} />
        <Header />
        <Hero
          isItTheEndToggle={isItTheEndToggle}
          isItTheEnd={isItTheEnd}
          mainReset={reset}
          dicesFromData={dicesFromData}
          setDicesFromData={setDicesFromData}
          count={count}
          counter={counter}
        />
      </div>
      {/* Summary div */}
      <div className="summaryContainer" style={summaryContainerStyle}>
        <DarkModeSwitch toggle={darkModeToggle} darkMode={darkMode} />
        <Summary
          isItTheEndToggle={isItTheEndToggle}
          isItTheEnd={isItTheEnd}
          mainReset={reset}
          count={count}
        />
      </div>
    </div>
  );
}

export default App;

// TODO
// Track the number of rolls
// Na karcie summary zrobić szkic tego jak ma wyglądać - spróbować to zrobić w figmie
// karta summary ma zawierać liczbę odświeżeń danego podejścia, czas i najlepszy dotyczczasowy wynik
// Track the time it took to win
// Save your best time to localStorage

// NEXT PROJECT - QUIZZICAL TRIVIA
// 11:45
