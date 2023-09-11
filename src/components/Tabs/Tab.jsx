import styles from "./Tabs.module.scss";

function Tab({ label, children, activeTab, onClick }) {
  // F-cja wywołuje f-cje zwrotną z propsów za każdym kliknięciem karty
  function handleClick() {
    onClick(label);
  }

  //Dodajemy css class="active", gdy zostanie ona wybrana
  let className = styles.tab;
  if (activeTab === label) {
    className += ` ${styles.active}`;
  }

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  );
}

export default Tab;
