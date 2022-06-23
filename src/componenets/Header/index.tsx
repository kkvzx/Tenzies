import React from "react";
import { HeaderWrapper, HeaderHeading, HeaderP } from "./HeaderElements";

// Text content
export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderHeading>Tenzies</HeaderHeading>
      <HeaderP>Roll until all dice are the same. Click</HeaderP>
      <HeaderP>each die to freeze it at its current value</HeaderP>
      <HeaderP>between rolls</HeaderP>
    </HeaderWrapper>
  );
};
