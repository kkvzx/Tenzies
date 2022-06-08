import React from "react";

interface summaryProps {
  isItTheEndToggle: (rightValue: boolean) => void;
  isItTheEnd: boolean;
  mainReset: () => void;
}

export const Summary = (props: summaryProps) => {
  return (
    <div className="summaryWrapper">
      <h1>Summary</h1>
      <button className="rollBtn" onClick={props.mainReset}>
        Start again?
      </button>
    </div>
  );
};
