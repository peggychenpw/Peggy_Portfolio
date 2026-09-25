import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import styles from "./Header.module.scss";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const history = useHistory();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  // 平滑滑動到指定區塊
  const scrollToSection = (id) => {
    closeMenu();
    if (history.location.pathname !== "/") {
      history.push("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        <NavLink
          to="#recent-work-section"
          activeClassName={styles.selected}
          className={styles.navLink}
          onClick={e => {
            e.preventDefault();
            scrollToSection("recent-work-section");
          }}
        >
          Recent Works
        </NavLink>
        <NavLink
          to="#about-section"
          activeClassName={styles.selected}
          className={styles.navLink}
          onClick={e => {
            e.preventDefault();
            scrollToSection("about-section");
          }}
        >
          About
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;


