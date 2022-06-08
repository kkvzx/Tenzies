import React from "react";

interface darkModeSwitchProps {
  toggle: () => void;
  darkMode: boolean;
}

export const DarkModeSwitch = (props: darkModeSwitchProps) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={props.darkMode} onChange={props.toggle} />
      <span className="slider round"></span>
    </label>
  );
};
