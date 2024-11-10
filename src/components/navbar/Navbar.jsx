import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`${styles.wrap} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.navWrap}>
        {/* Logo/Name */}
        <div className={styles.logo} onClick={() => scrollToSection('hero')}>
          <span className={styles.logoText}>AP</span>
        </div>

        {/* Desktop Menu */}
        <ul className={styles.desktopMenu}>
          <li className={styles.listElement} onClick={() => scrollToSection('hero')}>Home</li>
          <li className={styles.listElement} onClick={() => scrollToSection('skills')}>Skills</li>
          <li className={styles.listElement} onClick={() => scrollToSection('portfolio')}>Portfolio</li>
          <li className={styles.listElement} onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul>
          <li onClick={() => scrollToSection('hero')}>Home</li>
          <li onClick={() => scrollToSection('skills')}>Skills</li>
          <li onClick={() => scrollToSection('portfolio')}>Portfolio</li>
          <li onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;