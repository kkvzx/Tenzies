import styled from "styled-components";
import "../GlobalStyling.css";

export const HeroWrapper = styled.div`
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const DiceContainer = styled.div`
  width: 251px;
  height: 89px;
  margin: 25px;
  display: grid;
  grid-template: auto auto/ repeat(5, 1fr);
  justify-items: center;
  row-gap: 19px;
`;

export const ButtonContainer = styled.div`
  width: 250px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  position: relative;
`;
export const SmallDiceContainer = styled.div`
  position: absolute;
  align-items: center;
  min-height: 36px;
  top: 0;
  right: 0;
  display: flex;
  width: 69px;
  justify-content: left;
`;
export const HeroP = styled.p`
  font-size: 0.9rem;
  margin: 7px;
  display: inline;
`;
export const SmallDice = styled.div`
  margin: 5px;
  color: var(--add-color);
`;
