import React from "react";
import { config } from "../../config";
import styles from "./Portfolio.module.css";
import { ArrowUpRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProjectCard = ({ project }) => (
  <div className={`${styles.projectWrap} group`}>
    <div className={styles.projectTop}>
      <h3 className={styles.projectHeader}>{project.title}</h3>
      <p className={styles.description}>{project.tech}</p>
    </div>
    <div className={styles.projectBottom}>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.projectArrow}>
        <ArrowUpRight
          size={20}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>
    </div>
  </div>
);

const Portfolio = () => {
  const projects = [
    {
      title: "Avalanche Adventure",
      tech: "Wordpress, WooCommerce",
      description: "For Avalanche Adventure, I edited and added pages, enhancing their platform. I also introduced some e-commerce features using WooCommerce."
    },
    {
      title: "TruDomes",
      tech: "Wordpress, WooCommerce",
      description: "For TruDomes, I assisted in enhancing digital features, working on pages and incorporating various site functionalities."
    },
    {
      title: "Clintons Cards",
      tech: "Shopify",
      description: "For Clintons, I was deeply involved in page building, site maintenance, and also participated in stress testing their systems ahead of holiday sales."
    },
    {
      title: "EPM",
      tech: "Wordpress",
      description: "For EPM, I participated in developing pages, introducing new components, and enhancing backend functionalities."
    },
    {
      title: "Maybelline",
      tech: "HTML/CSS/JS, PHP",
      description: "For Maybelline, I contributed to a web project centered around a campaign."
    },
    {
      title: "Red Bee Media",
      tech: "Wordpress, Vue",
      description: "For Red Bee Media, I was involved in server management tasks, backend optimizations, and the development of a digital component."
    },
    {
      title: "Takeda",
      tech: "HTML/CSS/JS, PHP",
      description: "For Takeda, I was involved in the creation of a custom digital solution used in exhibition settings."
    },
    {
      title: "Verum Labs",
      tech: "Shopify",
      description: "For Verum Labs, I contributed to a Shopify project, focusing on constructing pages and adding specific site sections"
    },
    {
      title: "Tradeskills4U",
      tech: "Wordpress, WooCommerce",
      description: "For Tradeskills4U, I participated in backend tasks, primarily centered around API integrations for their e-commerce operations."
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
          adaptiveHeight: true
        }
      }
    ]
  };

  return (
    <section className={styles.wrap} id="portfolio">
      <h1 className={styles.header}>Web Chronicles</h1>
      <p className={styles.text}>Every project tells a story</p>
      <p className={styles.text}>
        While I may not have written every chapter, I've played my part in enhancing these narratives.
      </p>
      <p className={styles.text}>Here are some tales where my skills have taken shape.</p>
      <div className={styles.portfolioWrap}>
        <Slider {...settings} dotsClass={`${styles.slickDots} slick-dots`}>
          {projects.map((project, index) => (
            <div key={index} className={styles.project}>
              <ProjectCard project={project} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Portfolio;