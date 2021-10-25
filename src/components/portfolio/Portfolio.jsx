import React from "react";
import { config } from "../../config";
import styles from "./Portfolio.module.css";
import weatherApp from "../../images/weatherapp.png";
import makeupWeb from "../../images/makeupweb.png";
import garageWeb from "../../images/garageweb.png";

const Portfolio = () => {
  return (
    <section className={styles.wrap} id="portfolio">
      <h1 className={styles.header}>Portfolio</h1>
      <div className={styles.portfolioWrap}>
        <div className={styles.project}>
          <a target="_blank" href={config.WEATHERAPP}>
            <img src={weatherApp} className={styles.weatherApp} alt="" />
          </a>
          <p>ReactJS and Redux</p>
        </div>
        <div className={styles.project}>
          <a target="_blank" href={config.MAKEUPWEB}>
            <img src={makeupWeb} className={styles.makeupWeb} alt="" />
          </a>
          <p>HTML5 and CSS3</p>
        </div>
        <div className={styles.project}>
          <a target="_blank" href={config.GARAGEWEB}>
            <img src={garageWeb} className={styles.garageWeb} alt="" />
          </a>
          <p>HTML5 and CSS3</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
