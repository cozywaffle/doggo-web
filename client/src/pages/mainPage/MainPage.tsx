import { FC } from "react";
import style from "./mainPage.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { actions } from "../../redux/slices/category/category.slice";

const liElements: string[] = ["Home", "Popular", "Following", "Me"];

const MainPage: FC = () => {
  const currentCategory = useSelector(
    (state: RootState) => state.category.category,
  );

  const dispatch = useDispatch();

  return (
    <section className={style.wrapper}>
      <div className={style.side_panel}>
        <ul>
          {liElements.map((li, index) => (
            <li
              key={index + index}
              className={li === currentCategory ? style.active : ""}
              onClick={() => dispatch(actions.changeCategory(li))}>
              {li}
            </li>
          ))}
        </ul>
      </div>

      <div className={style.posts}>POSTS</div>
    </section>
  );
};

export default MainPage;
