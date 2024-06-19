import styles from "./navbar.module.css";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const menuList = ["HOME", "MOVIE", "ABOUT"];
  return (
    <nav className={styles.navbarContainer}>
      <Logo />
      <ul className={styles.menuList}>
        {menuList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
