import React from "react";
import "./App.css";
import { Header } from "./componenets/Header";
import { Hero } from "./componenets/Hero";
import { Summary } from "./componenets/Summary";
import { diceGen } from "./componenets/Data";

function App() {
  const [darkMode, setDarkMode] = React.useState(true);
  const [isItTheEnd, setIsItTheEnd] = React.useState(false);
  const [dicesFromData, setDicesFromData] = React.useState(diceGen);

  // dark mode
  const darkModeToggle = () => {
    setDarkMode((prevState) => !prevState);
  };
  // Game ended
  const isItTheEndToggle = (rightValue: boolean) => {
    setIsItTheEnd(rightValue);
  };
  const reset = () => {
    setDicesFromData(diceGen);
    setIsItTheEnd(false);
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

  console.log(isItTheEnd);

  return (
    <div className="wrapper" style={darkModeStyles}>
      <div className="gameContainer" style={gameContainerStyle}>
        <Header toggle={darkModeToggle} darkMode={darkMode} />
        <Hero
          isItTheEndToggle={isItTheEndToggle}
          isItTheEnd={isItTheEnd}
          mainReset={reset}
          dicesFromData={dicesFromData}
          setDicesFromData={setDicesFromData}
        />
      </div>
      <div className="summaryContainer" style={summaryContainerStyle}>
        <Summary
          isItTheEndToggle={isItTheEndToggle}
          isItTheEnd={isItTheEnd}
          mainReset={reset}
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
