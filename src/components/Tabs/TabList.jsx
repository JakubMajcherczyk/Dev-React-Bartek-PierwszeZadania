import { useState } from "react";
import styles from "./Tabs.module.scss";
import Tab from "./Tab";
import tabsData from "./tabsData.json";

function TabList() {
  // hook dla stanu wybranej karty
  const [activeTab, setActiveTab] = useState(tabsData[0]);

  //F-cja do zmiany stanu karty po kliknięciu
  function handleTabClick(label) {
    setActiveTab(label);
  }

  return (
    <div className={styles.tabList}>
      <div className={styles.tabs}>
        {tabsData.tabsData.map((tab) => (
          <Tab
            key={tab.label}
            label={tab.label}
            activeTab={activeTab}
            onClick={handleTabClick}
          >
            {tab.label}
          </Tab>
        ))}
      </div>
      <div className={styles.content}>
        {tabsData.tabsData.map((tab) => {
          //rederujemy tylko wybraną kartę
          if (tab.label === activeTab) {
            return <div key={tab.label}>{tab.content}</div>;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default TabList;
