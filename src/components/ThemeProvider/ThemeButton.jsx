import { useContext } from "react";
import styles from "./Theme.module.scss";
import { ThemeContext } from "./ThemeProvider";

//Przycisk do przełączania motywu
function ThemeButton() {
  //Hook do pobrania kontekstu motywu i wartości funkcji zmiany motywu
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button className={styles.themeButton} onClick={toggleTheme}>
      Zmień motyw
    </button>
  );
}
export default ThemeButton;
