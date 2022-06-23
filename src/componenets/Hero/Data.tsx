import React from "react";

// generating random number from 1 to 6
export const getRandom = () => {
  return Math.ceil(Math.random() * 6);
};
// Generating array of 10 objects
export const diceGen = () => {
  const newDice = [];
  for (let i = 0; i < 10; i++) {
    newDice.push({
      id: i + 1,
      color: false,
      value: getRandom(),
    });
  }
  return newDice;
};
