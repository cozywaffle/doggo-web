import React from "react";
import styles from "./SidePanel.module.scss";

const SidePanel: React.FC = () => {
  return (
    <div className={styles.sidepanel}>
      <ul>
        <li>Home</li>
        <li>Popular</li>
        <li>For you</li>
        <li>New</li>
      </ul>
    </div>
  );
};

export default SidePanel;
