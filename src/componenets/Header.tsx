import React from "react";

interface headerProps {
  toggle: () => void;
  darkMode: boolean;
}
// Text content
export const Header = (props: headerProps) => {
  return (
    <div className="headerWrapper">
      <label className="switch">
        <input
          type="checkbox"
          checked={props.darkMode}
          onChange={props.toggle}
        />
        <span className="slider round"></span>
      </label>
      <h1>Tenzies</h1>
      <p>Roll until all dice are the same. Click</p>
      <p> each die to freeze it at its current value </p>
      <p>between rolls</p>
    </div>
  );
};
