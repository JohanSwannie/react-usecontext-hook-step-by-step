import React from "react";
import { useTheme, useToggle } from "./ThemeContext";

export default function DisplayThemeF() {
  const darkTheme = useTheme();
  const toggleTheme = useToggle();

  const themeStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "20rem",
    color: darkTheme ? "#000" : "#CCC",
    backgroundColor: darkTheme ? "#CCC" : "#000",
    margin: "auto",
    padding: "2rem",
  };
  return (
    <>
      <button onClick={toggleTheme}>Toggle The Theme</button>
      <div className="theme" style={themeStyle}>
        Theme
      </div>
    </>
  );
}
