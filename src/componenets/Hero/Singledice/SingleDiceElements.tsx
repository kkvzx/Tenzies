import styled from "styled-components";
import "../../GlobalStyling.css";

export const Dice = styled.div<{ color: any }>`
  width: 35.84px;
  height: 36.84px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Inter", sans-serif;
  font-weight: 700;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  ${({ color }) => {
    if (color) {
      return { background: "#b29d5d", color: "#202224" };
    } else {
      return { background: "#202224", color: "white" };
    }
  }}
`;
