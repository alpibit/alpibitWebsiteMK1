import React from "react";
import { config } from "../../config";
import styles from "./Portfolio.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Portfolio = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className={styles.wrap} id="portfolio">
      <h1 className={styles.header}>Web Chronicles</h1>
      <p className={styles.text}>Every project tells a story</p>
      <p className={styles.text}>While I may not have written every chapter, I've played my part in enhancing these narratives.</p>
      <p className={styles.text}>Here are some tales where my skills have taken shape.</p>
      <div className={styles.portfolioWrap}>
        <Slider {...settings} dotsClass={`${styles.slickDots} slick-dots`}>
          <div className={styles.project}>
            <div className={styles.projectWrap}>
              <div className={styles.projectTop}>
                <h3 className={styles.projectHeader}>Avalanche Adventure</h3>
                <p className={styles.description}>Wordpress, WooCommerce</p>
              </div>
              <div className={styles.projectBottom}>
                <p className={styles.description}>For Avalanche Adventure, I edited and added pages, enhancing their platform. I also introduced some e-commerce features using WooCommerce.</p>
              </div>
            </div>
          </div>
          <div className={styles.project}>
            <div className={styles.projectWrap}>
              <div className={styles.projectTop}>
                <h3 className={styles.projectHeader}>TruDomes</h3>
                <p className={styles.description}>Wordpress, WooCommerce</p>
              </div>
              <div className={styles.projectBottom}>
                <p className={styles.description}>For TruDomes, I assisted in enhancing digital features, working on pages and incorporating various site functionalities.</p>
              </div>
            </div>
          </div>
          <div className={styles.project}>
            <div className={styles.projectWrap}>
              <div className={styles.projectTop}>
                <h3 className={styles.projectHeader}>Clintons Cards</h3>
                <p className={styles.description}>Shopify</p>
              </div>
              <div className={styles.projectBottom}>
                <p className={styles.description}>For Clintons, I was deeply involved in page building, site maintenance, and also participated in stress testing their systems ahead of holiday sales.</p>
              </div>
            </div>
          </div>
          <div className={styles.project}>
            <div className={styles.projectWrap}>
              <div className={styles.projectTop}>
                <h3 className={styles.projectHeader}>EPM</h3>
                <p className={styles.description}>Wordpress</p>
              </div>
              <div className={styles.projectBottom}>
                <p className={styles.description}>For EPM, I participated in developing pages, introducing new components, and enhancing backend functionalities.</p>
              </div>
            </div>
          </div>
          <div className={styles.project}>
            <div className={styles.projectWrap}>
              <div className={styles.projectTop}>
                <h3 className={styles.projectHeader}>Maybelline</h3>
                <p className={styles.description}>HTML/CSS/JS, PHP</p>
              </div>
              <div className={styles.projectBottom}>
                <p className={styles.description}>For Maybelline, I contributed to a web project centered around a campaign.</p>
              </div>
            </div>
          </div>
          <div className={styles.project}>
            <div className={styles.projectWrap}>
              <div className={styles.projectTop}>
                <h3 className={styles.projectHeader}>Red Bee Media</h3>
                <p className={styles.description}>Wordpress, Vue</p>
              </div>
              <div className={styles.projectBottom}>
                <p className={styles.description}>For Red Bee Media, I was involved in server management tasks, backend optimizations, and the development of a digital component.</p>
              </div>
            </div>
          </div>
          <div className={styles.project}>
            <div className={styles.projectWrap}>
              <div className={styles.projectTop}>
                <h3 className={styles.projectHeader}>Takeda</h3>
                <p className={styles.description}>HTML/CSS/JS, PHP</p>
              </div>
              <div className={styles.projectBottom}>
                <p className={styles.description}>For Takeda, I was involved in the creation of a custom digital solution used in exhibition settings.</p>
              </div>
            </div>
          </div>
          <div className={styles.project}>
            <div className={styles.projectWrap}>
              <div className={styles.projectTop}>
                <h3 className={styles.projectHeader}>Verum Labs</h3>
                <p className={styles.description}>Shopify</p>
              </div>
              <div className={styles.projectBottom}>
                <p className={styles.description}>For Verum Labs, I contributed to a Shopify project, focusing on constructing pages and adding specific site sections</p>
              </div>
            </div>
          </div>
          <div className={styles.project}>
            <div className={styles.projectWrap}>
              <div className={styles.projectTop}>
                <h3 className={styles.projectHeader}>Tradeskills4U</h3>
                <p className={styles.description}>Wordpress, WooCommerce</p>
              </div>
              <div className={styles.projectBottom}>
                <p className={styles.description}>For Tradeskills4U, I participated in backend tasks, primarily centered around API integrations for their e-commerce operations.</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>

    </section>
  );
};

export default Portfolio;
