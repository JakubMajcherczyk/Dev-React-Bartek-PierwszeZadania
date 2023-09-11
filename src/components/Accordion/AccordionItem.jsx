import { useState } from "react";
import styles from "./Accordion.module.scss";

function AccordionItem({ title, content, isOpen, onOpen }) {
  return (
    <div className={styles.accordionItem} onClick={onOpen}>
      <h3>{title}</h3>
      {isOpen && <p>{content}</p>}
    </div>
  );
}

export default AccordionItem;
