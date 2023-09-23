import React from "react";
import styles from "./Skills.module.css";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faGithub,
  faPhp,
  faWordpress,
  faShopify,
  faCodepen,
  // laravel icon import
  faLaravel
} from "@fortawesome/free-brands-svg-icons";
import JQueryIcon from "../svg/jqueryIcon";
import WooIcon from "../svg/wooIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = () => {
  return (
    <section className={styles.wrap} id="skills">
      <h1 className={styles.header}>Digital Toolbox</h1>
      <div className={styles.skillWrap}>
        <div className={styles.skills}>
          <FontAwesomeIcon icon={faHtml5} size="2x" />
          <h1>HTML5</h1>
        </div>
        <div className={styles.skills}>
          <FontAwesomeIcon icon={faCss3} size="2x" />
          <h1>CSS/SASS</h1>
        </div>
        <div className={styles.skills}>
          <FontAwesomeIcon icon={faJs} size="2x" />
          <h1>JavaScript</h1>
        </div>
        <div className={styles.skills}>
          <JQueryIcon />
          <h1>jQuery</h1>
        </div>
        <div className={styles.skills}>
          <FontAwesomeIcon icon={faReact} size="2x" />
          <h1>ReactJS</h1>
        </div>
        <div className={styles.skills}>
          <FontAwesomeIcon icon={faGithub} size="2x" />
          <h1>Git&GitHub</h1>
        </div>
        <div className={styles.skills}>
          <FontAwesomeIcon icon={faPhp} size="2x" />
          <h1>PHP</h1>
        </div>
        <div className={styles.skills}>
          <FontAwesomeIcon icon={faWordpress} size="2x" />
          <h1>WordPress</h1>
        </div>
        <div className={styles.skills}>
          <WooIcon />
          <h1>WooCommerce</h1>
        </div>
        <div className={styles.skills}>
          <FontAwesomeIcon icon={faShopify} size="2x" />
          <h1>Shopify</h1>
        </div>
        <div className={styles.skills}>
          <FontAwesomeIcon icon={faLaravel} size="2x" />
          <h1>Laravel</h1>
        </div>
        <div className={styles.skills}>
          <FontAwesomeIcon icon={faCodepen} size="2x" />
          <h1>API Integration</h1>
        </div>

      </div>
    </section>
  );
};

export default Skills;
