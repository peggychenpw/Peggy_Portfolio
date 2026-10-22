import React, { useEffect, useRef, useState } from "react";
import styles from "./Header.module.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef(null);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
        buttonRef.current && buttonRef.current.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <div className={styles.headerInner}>
      <a href="#top" className={styles.brand} onClick={closeMenu} aria-label="Pingwei Chen, home">Pingwei Chen</a>
      <button ref={buttonRef} className={styles.menuButton} type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="primary-navigation">
        <span>{menuOpen ? "Close" : "Menu"}</span><span aria-hidden="true" className={styles.menuGlyph}>{menuOpen ? "×" : "＋"}</span>
      </button>
      <nav id="primary-navigation" aria-label="Main navigation" className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
    </div>
  );
};

export default Header;
