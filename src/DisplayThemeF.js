import React from "react";
import { useTheme, useToggle } from "./ThemeProvider";

export default function DisplayThemeF() {
  const darkTheme = useTheme();
  const toggleTheme = useToggle();

  const themeStyle = {
    color: darkTheme ? "#000" : "#CCC",
    backgroundColor: darkTheme ? "#CCC" : "#000",
    margin: "2rem",
    padding: "2rem",
  };
  return (
    <>
      <button onClick={toggleTheme}>Toggle The Theme</button>
      <div style={themeStyle}>Theme</div>
    </>
  );
}
