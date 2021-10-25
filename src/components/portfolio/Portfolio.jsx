import React from "react";
import styles from "./Portfolio.module.css";
import weatherApp from "../../images/weatherapp.png";
import makeupWeb from "../../images/makeupweb.png";
import garageWeb from "../../images/garageweb.png";

const Portfolio = () => {
  return (
    <section className={styles.wrap} id="portfolio">
      <div className={styles.portfolioWrap}>
        <div className={styles.project}>
          <img src={weatherApp} className={styles.weatherApp} alt="" />
          <p>ReactJS and Redux</p>
        </div>
        <div className={styles.project}>
          <img src={makeupWeb} className={styles.makeupWeb} alt="" />
          <p>HTML5 and CSS3</p>
        </div>
        <div className={styles.project}>
          <img src={garageWeb} className={styles.garageWeb} alt="" />
          <p>HTML5 and CSS3</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
