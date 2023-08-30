import React from "react";
import paw from "./img/paw.svg";
import styles from "./NavBar.module.scss";

const NavBar: React.FC = () => {
  const isAuth = true;

  return (
    <div className="container">
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <h1>SHIBA</h1>
          <img src={paw} alt="Paw logo" />
        </div>

        <div className={styles.nav__buttons}>
          {isAuth && <button className={styles.add}>Add Post</button>}

          <div className={styles.login}>
            {isAuth ? (
              <>
                <button>Profile</button>
                <button className={styles.logout}>Log out</button>
              </>
            ) : (
              <>
                <button>Log in</button>
                <button>Sign in</button>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
