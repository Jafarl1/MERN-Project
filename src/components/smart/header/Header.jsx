import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import Container from "../../ui/container/Container";
import logo_icon from "../../../assets/icons/header-logo.png";
import auth_icon from "../../../assets/icons/auth-icon.png";
import styles from "./header.module.css";

function Header() {
  const [signPopup, setSignPopup] = useState(false);
  const { loggedUser, setLoggedUser } = useAuth();

  const handleSignOut = () => {
    closePopup();
    setLoggedUser(null);
  };

  const toggleSignPopup = (event) => {
    event.stopPropagation();
    setSignPopup((prev) => !prev);
  };

  const closePopup = () => setSignPopup(false);

  window.onclick = closePopup;

  return (
    <header className={styles.header}>
      <Container style={{ minHeight: 0, height: "100%" }}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img src={logo_icon} alt="Logo" />
            <h1>Travellers</h1>
          </div>
          <nav className={styles.navigation_menu}>
            <ul>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/">Bloggers</NavLink>
              </li>
              {loggedUser && (
                <>
                  <li>
                    <NavLink to="/:id/places">My places</NavLink>
                  </li>
                  <li>
                    <NavLink to="/addplace">Add place</NavLink>
                  </li>
                </>
              )}
              <li onClick={toggleSignPopup}>
                <img src={auth_icon} alt="Auth" />
              </li>
            </ul>
            {signPopup && (
              <div className={styles.signPopup}>
                {loggedUser ? (
                  <>
                    <NavLink to="/account" onClick={closePopup}>
                      Account
                    </NavLink>
                    <NavLink to="/" onClick={handleSignOut}>
                      Sign out
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink to="/signin" onClick={closePopup}>
                      Sign In
                    </NavLink>
                    <NavLink to="/signup" onClick={closePopup}>
                      Sign Up
                    </NavLink>
                  </>
                )}
              </div>
            )}
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;
