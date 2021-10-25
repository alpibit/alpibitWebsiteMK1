import React from "react";
import styles from "./Skills.module.css";
import {
  faHtml5,
  faCss3,
  faSass,
  faJs,
  faReact,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = () => {
  return (
    <section className={styles.wrap} id="skills">
      <div className={styles.skillWrap}>
        <div className={styles.skills}>
          <FontAwesomeIcon icon={faHtml5} size="2x" />
          <h1>HTML5</h1>
        </div>
        <div className={styles.skills}>
          <FontAwesomeIcon icon={faCss3} size="2x" />
          <h1>CSS3</h1>
        </div>
        <div className={styles.skills}>
          <FontAwesomeIcon icon={faSass} size="2x"/>
          <h1>SASS</h1>
        </div>
        <div className={styles.skills}>
          <FontAwesomeIcon icon={faJs} size="2x" />
          <h1>JavaScript</h1>
        </div>
        <div className={styles.skills}>
          <FontAwesomeIcon icon={faReact} size="2x" />
          <h1>ReactJS</h1>
        </div>
        <div className={styles.skills}>
          <FontAwesomeIcon icon={faGithub} size="2x" />
          <h1>Git&GitHub</h1>
        </div>
      </div>
    </section>
  );
};

export default Skills;
