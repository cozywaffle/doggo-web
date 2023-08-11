import React from "react";
import style from "./app.module.scss";

export const App: React.FC = () => {
  return (
    <div className={style.container}>
      <h1 className={style.text}>
        There will be a <span>front-end</span> part!
      </h1>
    </div>
  );
};
