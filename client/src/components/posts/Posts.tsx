import { FC } from "react";
import image from "./post-malone-new-album.png";
import style from "./posts.module.scss";

const Posts: FC = () => {
  return (
    <div className={style.posts}>
      <ul>
        <li className={style.post}>
          <img src={image} alt="image" />
          <h1>title</h1>
          <p>description</p>
          <p>comments</p>
        </li>
        <li className={style.post}>
          <img src={image} alt="image" />
          <h1>title</h1>
          <p>description</p>
          <p>comments</p>
        </li>
        <li className={style.post}>
          <img src={image} alt="image" />
          <h1>title</h1>
          <p>description</p>
          <p>comments</p>
        </li>
      </ul>
    </div>
  );
};

export default Posts;
