import React from "react";
import DisplayThemeF from "./DisplayThemeF";
import { ThemeProvider } from "./ThemeContext";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <DisplayThemeF />
    </ThemeProvider>
  );
}

export default App;
