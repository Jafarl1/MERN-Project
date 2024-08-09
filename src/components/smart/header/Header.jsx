import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import Container from "../../ui/container/Container";
import logo_icon from "../../../assets/icons/header-logo.png";
import auth_icon from "../../../assets/icons/auth-icon.png";
import styles from "./header.module.css";

function Header() {
  const [signPopup, setSignPopup] = useState(false);
  const { loggedUser } = useAuth();
  const popupRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setSignPopup(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.header}>
      <Container style={{ height: "100%" }}>
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
                    <NavLink>Add place</NavLink>
                  </li>
                </>
              )}
              <li onClick={() => setSignPopup((prev) => !prev)}>
                <img src={auth_icon} alt="Auth" />
              </li>
            </ul>
            {signPopup && (
              <div ref={popupRef} className={styles.signPopup}>
                <NavLink to="/signin" onClick={() => setSignPopup(false)}>
                  Sign In
                </NavLink>
                <NavLink to="/signup" onClick={() => setSignPopup(false)}>
                  Sign Up
                </NavLink>
              </div>
            )}
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;
