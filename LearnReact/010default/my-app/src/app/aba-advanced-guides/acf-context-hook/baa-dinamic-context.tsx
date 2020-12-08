import { func } from "prop-types";
import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext({});

export const BaaDinamicContext = () => {
  const [theme, updateTheme] = useState({ color: "#00ff00" });

  return (
    <ThemeContext.Provider value={theme}>
      <fieldset>
        <button></button>
      </fieldset>
      <ThemedBox></ThemedBox>
    </ThemeContext.Provider>
  );
};

function ThemedBox() {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ border: "1px solid", ...theme }}>this is themed box</div>
  );
}
