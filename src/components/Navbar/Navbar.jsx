import { useState } from 'react';
import styles from './navbar.module.css';

import { getImageURL } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className={styles.navbar}>
        <a className={styles.title} href="/">Portfolio</a>
        <div className={styles.menu}>
          <img 
            className={styles.menuBtn} 
            src={
              menuOpen 
                ? getImageURL("nav/closeIcon.png")
                : getImageURL("nav/menuIcon.png")
            } 
            alt="hamburguer img"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
            <li>
              <a href="#about">About me</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Let&apos;s talk!</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
