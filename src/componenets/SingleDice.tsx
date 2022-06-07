import React from "react";

interface MyProps {
  id: number;
  color: boolean;
  value: number;
  colorToggle: (id: number) => void;
}

/* Generating 10 html objects from file */
export const DiceElements = (props: MyProps) => {
  const styles = {
    backgroundColor: props.color ? "#b29d5d" : "#202224",
    color: props.color ? "#202224" : "white",
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
