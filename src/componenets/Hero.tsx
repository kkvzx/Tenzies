import React from "react";
import Data from "./Data";
import diceData from "./Data";
import { DiceElements } from "./SingleDice";

export const Hero = () => {
  const [dicesFromData, setDicesFromData] = React.useState(diceData);
  const [btnText, setBtnText] = React.useState("Run");

  // Function that generates number from 1 to 6
  const getRandom = () => {
    return Math.floor(Math.random() * 6 + 1);
  };

  // Generating random number in every single of the boxes expect green ones
  const randomBoxNumber = () => {
    setDicesFromData((prevState) => {
      return prevState.map((obj) => {
        return obj.color === false ? { ...obj, value: getRandom() } : obj;
      });
    });
  };

  // Zmapowanie elementu przy pomocy map - to co zostanie zwrócone z map to pojedyncze obiekty, które zsumują się do tablicy wobec czego tylko w elemencie map muszę wrócić zedytowany obiekt.
  // Mapa zwraca zedytowany obiekt i po zmapowaniu wszystkich wraca mi to do SET STATE jako tablica. 7:10
  // Funcion changes color of the selected box
  const colorToggle = (id: number): void => {
    setDicesFromData((prevState) => {
      return prevState.map((square) => {
        return square.id === id ? { ...square, color: !square.color } : square;
      });
    });
  };

  /* Generating html objects from file */
  const diceElements = dicesFromData.map((singleDice) => (
    <DiceElements
      key={singleDice.id}
      id={singleDice.id}
      colorToggle={colorToggle}
      value={singleDice.value}
      color={singleDice.color}
    />
  ));

  // boolean function that checks if the game is finieshed and according to this function button changes

  const check = () => {
    let endGame: boolean = false;
    for (let i = 0; i < dicesFromData.length; i++) {
      if (
        dicesFromData[0].value === dicesFromData[i].value &&
        dicesFromData[i].color === true
      ) {
        endGame = true;
      } else {
        return (endGame = false);
      }
    }
    return endGame;
  };

  // Reset of the game when game ended
  const reset = () => {
    setDicesFromData(diceData);
  };

  console.log(check());
  return (
    <div className="heroWrapper">
      <div className="diceContainer">{diceElements}</div>
      {check() ? (
        <button className="rollBtn" onClick={reset}>
          Start again?
        </button>
      ) : (
        <button className="rollBtn" onClick={randomBoxNumber}>
          Run
        </button>
      )}
    </div>
  );
};
