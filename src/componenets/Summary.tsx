import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

interface summaryProps {
  isItTheEndToggle: (rightValue: boolean) => void;
  isItTheEnd: boolean;
  mainReset: () => void;
  count: number;
}

export const Summary = (props: summaryProps) => {
  return (
    <div className="summaryWrapper">
      <h2>Summary</h2>
      <div className="scoreboard">
        <div className="casual">
          <FontAwesomeIcon icon={faDice} className="faDice firstDice" />
          <p className="firstDice">{props.count}</p>
        </div>
        <div className="bestOf">
          <FontAwesomeIcon icon={faDice} className="faDice bestOfDice" />
          <p className="bestOfDice">
            {window.localStorage.getItem("bestScore")}
          </p>
          <FontAwesomeIcon icon={faTrophy} className="trophy" />
        </div>
      </div>
      <button className="rollBtn" onClick={props.mainReset}>
        Start again?
      </button>
    </div>
  );
};
