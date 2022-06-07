import React from "react";
import { diceGen, getRandom } from "./Data";
import { DiceElements } from "./SingleDice";
import { nanoid } from "nanoid";

export const Hero = () => {
  const [dicesFromData, setDicesFromData] = React.useState(diceGen);
  const [endGame, setEndGame] = React.useState(false);

  // NAZWA FUNKCJI---|-------LEGENDA FUNKCJI PO KOLEJI------------------------
  // colorToggle     |Zaznaczenie elementów (zmiana wartosci color na true/false)
  // diceElements    |generowanie 10 elementów.
  // randomBoxNumber |Wygenerowanie nowych wartości wewnątrz niezaznaczonych elementów
  // useEffect       |Sprawdzanie co zmiane {diceFromData} czy gra została ukończona
  // reset           |Zresetowanie gry
  // NAZWA FUNKCJI---|-------LEGENDA FUNKCJI PO KOLEJI------------------------

  // Zmapowanie elementu przy pomocy map - to co zostanie zwrócone z map to pojedyncze obiekty, które zsumują się do tablicy wobec czego tylko w elemencie map muszę wrócić zedytowany obiekt.
  // Mapa zwraca zedytowany obiekt i po zmapowaniu wszystkich wraca mi to do SET STATE jako tablica.
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
      key={nanoid()}
      id={singleDice.id}
      colorToggle={colorToggle}
      value={singleDice.value}
      color={singleDice.color}
    />
  ));

  // Generating random number in every single of the boxes expect green ones
  const randomBoxNumber = () => {
    setDicesFromData((prevState) => {
      return prevState.map((obj) => {
        return obj.color === false ? { ...obj, value: getRandom() } : obj;
      });
    });
  };

  // useEffect that checks if the game is finieshed and according to this function button changes

  React.useEffect(() => {
    // setEndGame((prevEndGame) => {
    //   for (let i = 0; i < dicesFromData.length; i++) {
    //     if (
    //       dicesFromData[0].value === dicesFromData[i].value &&
    //       dicesFromData[i].color === true
    //     ) {
    //       prevEndGame = true;
    //     } else {
    //       return (prevEndGame = false);
    //     }
    //   }
    //   return prevEndGame;
    // }

    // chhecks colors
    const allColored = dicesFromData.every((obj) => obj.color);
    // checks values
    const firstValue = dicesFromData[0].value;
    const allSameValues = dicesFromData.every(
      (obj) => firstValue === obj.value
    );

    allColored && allSameValues && setEndGame(true);
  }, [dicesFromData]);

  // Reset of the game when game ended
  const reset = () => {
    setDicesFromData(diceGen);
    setEndGame(false);
  };

  return (
    <div className="heroWrapper">
      <div className="diceContainer">{diceElements}</div>
      {endGame ? (
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
