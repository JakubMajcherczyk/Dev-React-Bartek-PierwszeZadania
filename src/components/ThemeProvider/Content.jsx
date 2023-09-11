import { useContext } from "react";
import styles from "./Theme.module.scss";
import { ThemeContext } from "./ThemeProvider";

//komponent, który wyświetli treść w zależności od motywu
function Content() {
  //Hook do pobrania kontekstu motywu i wartości stanu motywu
  const { theme } = useContext(ThemeContext);

  // zwracamy dwie klasy content i light/dark
  return (
    <div className={` ${styles.content} ${theme}`}>
      <h1>Przełącznik motywów</h1>
      <p>Zmieniono motyw.</p>
    </div>
  );
}

export default Content;
