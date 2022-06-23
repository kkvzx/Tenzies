import styled from "styled-components";
import "../GlobalStyling.css";

export const SummaryWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 40px;
  overflow: hidden;
  box-sizing: border-box;
`;

export const SummaryHeader = styled.h2``;
export const Scoreboard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Casual = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 15px;
  position: relative;
`;
export const FirstDiceP = styled.p`
  color: var(--add-color);
  margin: 10px;
  font-size: 1.3rem;
`;

export const BestOfDiceP = styled.p`
  color: var(--text-color);
  font-weight: 700;
  margin: 10px;
  font-size: 1.3rem;
`;
export const RollButton = styled.button`
  width: 110px;
  min-height: 36px;
  border-radius: 4px;
  border: none;
  background: var(--add-color);
  color: var(--text-color);
  font-weight: 700;
  font-family: "Inter", sans-serif;
  letter-spacing: 1px;
  cursor: pointer;
`;
export const Trophy = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1.2rem;
  color: var(--text-color);
`;
export const BestOfDice = styled.div<{ color: string }>`
  color: ${({ color }) => color};
  font-weight: 700;
  margin: 10px;
  font-size: 2.5rem;
`;
