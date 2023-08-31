import React from "react";
import image from "./img/post-malone-new-album.png";
import styles from "./Post.module.scss";

const Post: React.FC = () => {
  return (
    <div className={styles.post}>
      <div className={styles.image}>
        <img src={image} alt="post malone" />
      </div>
      <div className={styles.content}>
        <h1>Some title</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus a,
          aliquam illo unde placeat est reprehenderit quisquam ipsam magnam
          magni ipsum illum dolores omnis modi dolorum repudiandae odit ut
          quidem?
        </h2>
        <div className={styles.post__comments}>
          <h3>Comments:</h3>
          <ul>
            <li>Pupuska</li>
            <li>Pupuska</li>
            <li>Pupuska</li>
            <li>Pupuska</li>
            <li>Pupuska</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Post;
