import { FC } from "react";
import style from "./login.module.scss";

const Login: FC = () => {
  const penis = true;

  return (
    <div className={style.wrapper}>
      <section className={style.login}>
        <form>
          {penis && (
            <label>
              Username:
              <input type="text" placeholder="Username" />
            </label>
          )}
          <label>
            Login:
            <input type="text" placeholder="Login" />
          </label>
          <label>
            Password:
            <input type="password" placeholder="Password" />
          </label>
          <button type="submit">{penis ? "Sign up" : "Sign in"}</button>
        </form>
      </section>
    </div>
  );
};

export default Login;
