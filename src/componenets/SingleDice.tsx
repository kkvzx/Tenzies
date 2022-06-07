import React from "react";
import data from "./Data";

interface MyProps {
  key: number;
  id: number;
  color: boolean;
  value: number;
  colorToggle: (id: number) => void;
}

/* Generating 10 html objects from file */
export const DiceElements = (props: MyProps) => {
  const styles = {
    backgroundColor: props.color ? "green" : "white",
  };
  return (
    <div
      className="dice"
      style={styles}
      onClick={() => props.colorToggle(props.id)}
    >
      {props.value}
    </div>
  );
};
