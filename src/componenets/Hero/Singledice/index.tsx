import React from "react";
import { Dice } from "./SingleDiceElements";

interface MyProps {
  id: number;
  color: boolean;
  value: number;
  colorToggle: (id: number) => void;
}

/* Generating 10 html objects from file */
export const SingleDice = (props: MyProps) => {
  return (
    <Dice color={props.color} onClick={() => props.colorToggle(props.id)}>
      {props.value}
    </Dice>
  );
};
