import React, { useState } from "react";
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
  faLaravel
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import JQueryIcon from "../svg/jqueryIcon";
import WooIcon from "../svg/wooIcon";

const SkillCard = ({ icon, title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    if (window.innerWidth <= 800) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div className={styles.skills} onClick={handleClick}>
      <div className={`${styles.cardInner} ${isFlipped ? styles.flipped : ''}`}>
        <div className={styles.cardFront}>
          <div className={styles.icon}>
            {React.isValidElement(icon) ? icon : <FontAwesomeIcon icon={icon} size="2x" />}
          </div>
          <h1>{title}</h1>
        </div>
        <div className={styles.cardBack}>
          <div className={styles.icon}>
            {React.isValidElement(icon) ? icon : <FontAwesomeIcon icon={icon} size="2x" />}
          </div>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skills = [
    {
      icon: faHtml5,
      title: "HTML5",
      description: "Semantic markup"
    },
    {
      icon: faCss3,
      title: "CSS/SASS",
      description: "Modern styling"
    },
    {
      icon: faJs,
      title: "JavaScript",
      description: "ES6+ features"
    },
    {
      icon: <JQueryIcon />,
      title: "jQuery",
      description: "DOM manipulation"
    },
    {
      icon: faReact,
      title: "ReactJS",
      description: "Modern React"
    },
    {
      icon: faPhp,
      title: "PHP",
      description: "Backend dev"
    },
    {
      icon: faWordpress,
      title: "WordPress",
      description: "CMS development"
    },
    {
      icon: <WooIcon />,
      title: "WooCommerce",
      description: "E-commerce"
    },
    {
      icon: faShopify,
      title: "Shopify",
      description: "Store development"
    },
    {
      icon: faGithub,
      title: "Git&GitHub",
      description: "Version control"
    },
    {
      icon: faLaravel,
      title: "Laravel",
      description: "PHP framework"
    },
    {
      icon: faCodepen,
      title: "API Integration",
      description: "Data handling"
    }
  ];

  return (
    <section className={styles.wrap} id="skills">
      <h1 className={styles.header}>Digital Toolbox</h1>
      <div className={styles.skillWrap}>
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;