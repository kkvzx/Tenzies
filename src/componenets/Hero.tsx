import React from "react";
import diceData from "./Data";

export const Hero = () => {
  const [dicesFromData, setDicesFromData] = React.useState(diceData);

  // Function that generates number from 1 to 6
  const getRandom = () => {
    return Math.floor(Math.random() * 6 + 1);
  };

  // Generating html objects from file

  // PRAWIE DZIAŁAŁO

  // Chce żeby po kliknięciu w guzik funkcja zmieniła mi numery w Boxach - czyli zmieniła wartość state w każdym z nich

  // const randomBoxNumber = () => {
  //   setDicesFromData((prevState): any => {
  //     return [
  //       ...prevState,
  //       prevState.map((item) => {
  //         item.value = getRandom();
  //       }),
  //     ];
  //   });
  // };

  const randomBoxNumber = () => {
    const newState = dicesFromData.map((obj) => {
      return {
        ...obj,
        value: getRandom(),
      };
    });
    setDicesFromData(newState);
  };

  console.log(dicesFromData);

  return (
    <div className="heroWrapper">
      <div className="diceContainer">
        {dicesFromData.map((singleDice) => (
          <div className="dice" key={singleDice.id}>
            {singleDice.value}
          </div>
        ))}
      </div>

      <button className="rollBtn" onClick={randomBoxNumber}>
        Roll
      </button>
    </div>
  );
};
