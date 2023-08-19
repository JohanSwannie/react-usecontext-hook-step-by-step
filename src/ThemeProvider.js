import React, { useState, useContext } from "react";

const ThemeContext = React.createContext();
const ToggleContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useToggle() {
  return useContext(ToggleContext);
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ToggleContext.Provider value={toggleTheme}>
        {children}
      </ToggleContext.Provider>
    </ThemeContext.Provider>
  );
}
