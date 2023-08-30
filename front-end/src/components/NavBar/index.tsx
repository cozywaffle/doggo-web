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
          {isAuth && (
            <button className={styles.add}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="25"
                viewBox="0 -960 960 960"
                width="27"
                fill="green">
                <path d="M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z" />
              </svg>
            </button>
          )}

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
