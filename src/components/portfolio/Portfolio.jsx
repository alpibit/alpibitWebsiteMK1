import React from "react";
import { config } from "../../config";
import styles from "./Portfolio.module.css";
import weatherApp from "../../images/weatherapp.png";
import makeupWeb from "../../images/makeupweb.png";
import garageWeb from "../../images/garageweb.png";

const Portfolio = () => {
  return (
    <section className={styles.wrap} id="portfolio">
      <h1 className={styles.header}>Latest Work</h1>
      <div className={styles.portfolioWrap}>
        <div className={styles.project}>
          <a target="_blank" href={config.WEATHERAPP} className={styles.link}>
            <img src={weatherApp} className={styles.weatherApp} alt="" />
            <p className={styles.description}>Weather App <br />(ReactJS and Redux)</p>
          </a>
        </div>
        <div className={styles.project}>
          <a target="_blank" href={config.MAKEUPWEB} className={styles.link}>
            <img src={makeupWeb} className={styles.makeupWeb} alt="" />
            <p className={styles.description}>Beauty Salon Website<br/>(HTML5 and CSS3)</p>
          </a>
        </div>
        <div className={styles.project}>
          <a target="_blank" href={config.GARAGEWEB} className={styles.link}>
            <img src={garageWeb} className={styles.garageWeb} alt="" />
            <p className={styles.description}>Local Garage Website<br/>(HTML5 and CSS3)</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
