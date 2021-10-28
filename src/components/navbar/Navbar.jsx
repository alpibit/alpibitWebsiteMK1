import React from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.wrap}>
      <nav className={styles.navWrap}>
        <ul>
          <Link activeClass="active" to="hero" spy={true} smooth={true}>
            <li className={styles.listElement}>Home</li>
          </Link>

          <Link to="skills" spy={true} smooth={true}>
            <li className={styles.listElement}>Skills</li>
          </Link>

          <Link to="portfolio" spy={true} smooth={true}>
            <li className={styles.listElement}>Portfolio</li>
          </Link>

          <Link to="contact" spy={true} smooth={true}>
            <li className={styles.listElement}>Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
