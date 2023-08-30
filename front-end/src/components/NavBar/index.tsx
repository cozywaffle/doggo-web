import shiba from "./img/shiba.png";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <h1>SHIBA</h1>
        <img src={shiba} alt="Shiba" />
      </div>

      <button className="add">
        <h2>Add Post</h2>
      </button>

      <ul className={styles.login}>
        <li>Log in</li>
        <li>Sign in</li>
      </ul>
    </nav>
  );
};

export default NavBar;
