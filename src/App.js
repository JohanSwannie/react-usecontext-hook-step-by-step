import React from "react";
import DisplayThemeF from "./DisplayThemeF";
import { ThemeProvider } from "./ThemeProvider";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <DisplayThemeF />
    </ThemeProvider>
  );
}

export default App;
