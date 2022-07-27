import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import {
  FirstDiceP,
  Scoreboard,
  SummaryHeader,
  SummaryWrapper,
  Casual,
  BestOfDice,
  BestOfDiceP,
  Trophy,
  RollButton,
} from "./SummaryElements";

interface summaryProps {
  isItTheEndToggle: (rightValue: boolean) => void;
  isItTheEnd: boolean;
  mainReset: () => void;
  count: number;
  theBestScore: number;
}

export const Summary = (props: summaryProps) => {
  return (
    <SummaryWrapper>
      <SummaryHeader>Summary</SummaryHeader>
      <Scoreboard>
        <Casual>
          <BestOfDice color={"black"}>
            <FontAwesomeIcon icon={faDice} />
          </BestOfDice>
          <FirstDiceP>{props.count}</FirstDiceP>
        </Casual>
        <Casual>
          <BestOfDice color={"var(--text-color)"}>
            <FontAwesomeIcon icon={faDice} />
          </BestOfDice>
          <BestOfDiceP>{props.theBestScore}</BestOfDiceP>
          <Trophy>
            <FontAwesomeIcon icon={faTrophy} />
          </Trophy>
        </Casual>
      </Scoreboard>
      <RollButton onClick={props.mainReset}>Start again?</RollButton>
    </SummaryWrapper>
  );
};
