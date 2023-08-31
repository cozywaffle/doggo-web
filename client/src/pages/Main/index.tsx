import React from "react";
import styles from "./main.module.scss";
import Post from "../../components/Post";

const Main: React.FC = () => {
  return (
    <main className={styles.main}>
      <Post />
    </main>
  );
};

export default Main;
