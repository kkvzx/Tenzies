import styled from "styled-components";
import "../GlobalStyling.css";

export const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--bck-color);
`;
export const GameContainer = styled.div`
  max-width: 800px;
  min-width: 330px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--main-color);
  border-radius: 10px;
  position: relative;
`;
export const SummaryContainer = styled(GameContainer)``;
