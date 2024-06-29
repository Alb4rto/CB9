import styles from "./navbar.module.scss";

const NavBar = () => {
  const menuList = ["Posts", "Follower", "Follow"];
  return (
    <nav className={styles.navbarContainer}>
      <ul className={styles.menuList}>
        {menuList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
