import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import profilePhoto from "../../images/main.png";

const Hero = () => {
  const [mainMessage, setMainMessage] = useState("Hello.");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMainMessage("I'm Aleksandrs Pirags.");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.heroWrap} id="hero">
      <div className={styles.backgroundElements}>
        <div className={styles.circle}></div>
        <div className={styles.square}></div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.photoContainer}>
          <img src={profilePhoto} className={styles.heroPhoto} alt="Aleksandrs Pirags" />
          <div className={styles.photoOverlay}></div>
        </div>

        <div className={styles.textContainer}>
          <h1 className={styles.heroHeader}>{mainMessage}</h1>
          <p className={styles.heroText}>
            Behind the Pixels,
          </p>
          <p className={styles.heroTextL2}>
            Where Web Wonders Take Shape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;