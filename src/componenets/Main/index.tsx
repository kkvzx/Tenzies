import React from "react";
import { Header } from "../Header/index";
import { Hero } from "../Hero/index";
import { Summary } from "../Summary/index";
import { diceGen } from "../Hero/Data";
import { MainWrapper, GameContainer, SummaryContainer } from "./MainElements";

const Main = () => {
  const [isItTheEnd, setIsItTheEnd] = React.useState(false);
  const [dicesFromData, setDicesFromData] = React.useState(diceGen);
  const [count, setCount] = React.useState(0);
  const [theBestScore, setTheBestScore] = React.useState<number>(
    Number(localStorage.getItem("bestScore"))
  );

  // Game ended
  const isItTheEndToggle = (rightValue: boolean) => {
    checkTheBestScore();

    setIsItTheEnd(rightValue);
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
    console.log(theBestScore);
    console.log(count);
    if (theBestScore > count) {
      localStorage.setItem("bestScore", JSON.stringify(count));
      setTheBestScore(Number(localStorage.getItem("bestScore")));
      console.log("Jestem w środku");
    }
  };

  return (
    <MainWrapper>
      {!isItTheEnd ? (
        <GameContainer>
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
        </GameContainer>
      ) : (
        <SummaryContainer>
          <Summary
            isItTheEndToggle={isItTheEndToggle}
            isItTheEnd={isItTheEnd}
            mainReset={reset}
            count={count}
            theBestScore={theBestScore}
          />
        </SummaryContainer>
      )}
    </MainWrapper>
  );
};

export default Main;
