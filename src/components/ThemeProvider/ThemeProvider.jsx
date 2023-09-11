import { useState, createContext } from "react";
import styles from "./Theme.module.scss";

// Tworzymy kontekst motywu, który będzie przechowywał stan motywu i funkcję zmiany motywu
export const ThemeContext = createContext();

//Komponent, który otacza inne komponenty i zapewnia im kontekst motywu
function ThemeProvider({ children }) {
  // hook dla stanu motywu
  const [theme, setTheme] = useState("light");

  //zmiana stanu na kliknięcie
  function toggleTheme() {
    setTheme((prevTheme) =>
      prevTheme === styles.light ? styles.dark : styles.light
    );
  }

  //Zwracamy Provider (najbliższy dostawca) z kontekstem motywu i wartością stanu motywu i funkcji zmiany motywu
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
