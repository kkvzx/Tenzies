import React from "react";
import { getRandom } from "./Data";
import { SingleDice as DiceElements } from "./Singledice/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import {
  HeroWrapper,
  DiceContainer,
  ButtonContainer,
  SmallDiceContainer,
  HeroP,
  SmallDice,
} from "./HeroElements";
import { RollButton } from "../Summary/SummaryElements";

import { nanoid } from "nanoid";

interface HeroProps {
  isItTheEndToggle: (rightValue: boolean) => void;
  isItTheEnd: boolean;
  mainReset: () => void;
  dicesFromData: {
    id: number;
    color: boolean;
    value: number;
  }[];
  setDicesFromData: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        color: boolean;
        value: number;
      }[]
    >
  >;
  count: number;
  counter: () => void;
}

export const Hero = ({
  isItTheEndToggle,
  isItTheEnd,
  mainReset,
  dicesFromData,
  setDicesFromData,
  count,
  counter,
}: HeroProps) => {
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
    counter();
  };

  // useEffect that checks if the game is finieshed and according to this function button changes

  React.useEffect(() => {
    // checks colors
    const allColored = dicesFromData.every((obj) => obj.color);
    // checks values
    const firstValue = dicesFromData[0].value;
    const allSameValues = dicesFromData.every(
      (obj) => firstValue === obj.value
    );

    allColored && allSameValues && isItTheEndToggle(true);
  }, [dicesFromData]);

  return (
    <HeroWrapper>
      <DiceContainer>{diceElements}</DiceContainer>
      <ButtonContainer>
        {isItTheEnd ? (
          <RollButton onClick={mainReset}>Start again?</RollButton>
        ) : (
          <RollButton onClick={randomBoxNumber}>Run</RollButton>
        )}
        <SmallDiceContainer>
          <SmallDice>
            <FontAwesomeIcon icon={faDice} />
            <HeroP>{count}</HeroP>
          </SmallDice>
        </SmallDiceContainer>
      </ButtonContainer>
    </HeroWrapper>
  );
};
