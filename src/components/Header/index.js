import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={styles.headerInner}>
      <NavLink to="/" className={styles.brand} onClick={closeMenu}>
        Peggy Chen
      </NavLink>
      <button className={styles.menuButton} onClick={toggleMenu} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="primary-navigation">
        {menuOpen ? "Close Menu" : "Open Menu"}
      </button>
      <nav id="primary-navigation" className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <NavLink exact to="/" activeClassName={styles.selected} onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/work" activeClassName={styles.selected} onClick={closeMenu}>
          Recent Work
        </NavLink>
        <NavLink to="/about" activeClassName={styles.selected} onClick={closeMenu}>
          About
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;


