import { FC } from "react";
import style from "./mainPage.module.scss";
import SideBar from "../../components/sidebar/SideBar";
import Posts from "../../components/posts/Posts";

const MainPage: FC = () => {
  return (
    <section className={style.wrapper}>
      <SideBar />
      <Posts />
    </section>
  );
};

export default MainPage;
