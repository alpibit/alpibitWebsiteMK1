import React from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.wrap}>
      <nav className={styles.navWrap}>
        <ul>
          <li className={styles.listElement}>
            <Link activeClass="active" to="hero" spy={true} smooth={true}>
              Home
            </Link>
          </li>
          <li className={styles.listElement}>
            <Link to="skills" spy={true} smooth={true}>
              Skills
            </Link>
          </li>
          <li className={styles.listElement}>
            <Link to="portfolio" spy={true} smooth={true}>
              Portfolio
            </Link>
          </li>
          <li className={styles.listElement}>
            <Link to="contact" spy={true} smooth={true}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
