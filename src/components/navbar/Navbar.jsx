import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.wrap}>
      <nav className={styles.navWrap}>
        <ul>
          <li className={styles.listElement} onClick={() => scrollToSection('hero')}>Home</li>
          <li className={styles.listElement} onClick={() => scrollToSection('skills')}>Skills</li>
          <li className={styles.listElement} onClick={() => scrollToSection('portfolio')}>Portfolio</li>
          <li className={styles.listElement} onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;