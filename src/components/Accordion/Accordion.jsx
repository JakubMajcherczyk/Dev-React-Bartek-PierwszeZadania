import { useState } from "react";
import AccordionItem from "./AccordionItem";
import styles from "./Accordion.module.scss";
import AccordionData from "./AccordionData.json";

function Accordion() {
  //stan dla aktualnie otwartego elementu
  const [openItem, setOpenItem] = useState(null);

  // funkcja do zmiany aktualnie otwartego elementu
  const handleOpenItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className={styles.accordion}>
      {AccordionData.accordionData.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          content={item.content}
          // przekazanie stanu otwarcia do elementu
          isOpen={openItem === item.id}
          // przekazanie funkcji do zmiany stanu otwarcia
          onOpen={() => handleOpenItem(item.id)}
        />
      ))}
    </div>
  );
}

export default Accordion;
