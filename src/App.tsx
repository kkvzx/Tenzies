import React from "react";
import "./App.css";
import { Header } from "./componenets/Header";
import { Hero } from "./componenets/Hero";
import { Summary } from "./componenets/Summary";

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const darkModeToggle = () => {
    setDarkMode((prevState) => !prevState);
  };

  const styles = {
    backgroundColor: darkMode ? "var(--add-color)" : "var(--bck-color)",
  };
  return (
    <div className="wrapper" style={styles}>
      <div className="gameContainer">
        <Header toggle={darkModeToggle} darkMode={darkMode} />
        <Hero />
      </div>
      <div className="summaryContainer">
        <Summary />
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
