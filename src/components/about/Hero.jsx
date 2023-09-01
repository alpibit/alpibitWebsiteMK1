import React, { useState } from "react";
import styles from "./Hero.module.css";
import profilePhoto from "../../images/main.png";

const Hero = () => {
  const [mainMessage, setMainMessage] = useState("Hello.");
  const changeMainMessage = () => {
    setMainMessage("I'm Aleksandrs Pirags.");
  };
  let timer = setInterval(changeMainMessage, 2500);

  return (
    <section className={styles.heroWrap} id="hero">
      <img src={profilePhoto} className={styles.heroPhoto} alt="" />
      <h1 className={styles.heroHeader}>{mainMessage}</h1>
      <p className={styles.heroText}>
        Behind the Pixels,
      </p>
      <p className={styles.heroTextL2}>
        Where Web Wonders Take Shape.
      </p>
    </section>
  );
};

export default Hero;
