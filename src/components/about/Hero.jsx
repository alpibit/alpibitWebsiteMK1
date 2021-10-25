import React from 'react';
import styles from "./Hero.module.css";
import profilePhoto from "../../images/main.png";

const About = () => {
  return (
    <section className={styles.heroWrap} id="hero">
      <img src={profilePhoto} className={styles.heroPhoto} alt=""/>
      <h1 className={styles.heroHeader}>Lorem, ipsum dolor.</h1>
      <p className={styles.heroText}>
        Lorem ipsum dolor sit amet consectetur.
      </p>
    </section>
  );
};

export default About;
