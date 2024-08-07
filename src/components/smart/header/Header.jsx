import { NavLink } from "react-router-dom";
import Container from "../../ui/container/Container";
import logo_icon from "../../../assets/icons/header-logo.png";
import auth_icon from "../../../assets/icons/auth-icon.png";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img src={logo_icon} alt="Logo" />
            <h1>Travellers</h1>
          </div>
          <nav className={styles.navigation_menu}>
            <ul>
              <li>
                <NavLink>Bloggers</NavLink>
              </li>
              <li>
                <NavLink>My places</NavLink>
              </li>
              <li>
                <NavLink>Add place</NavLink>
              </li>
            </ul>
            <NavLink>
              <img src={auth_icon} alt="Auth" />
            </NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;
