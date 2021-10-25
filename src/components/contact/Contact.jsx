import React from "react";
import styles from "./Contact.module.css";
import { config } from "../../config.js";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  const formHandler = () => {};

  return (
    <section className={styles.wrap} id="contact">
      <div className={styles.contactDetails}>
        <p className={styles.contactUnit}>
          <a href={config.EMAIL} className={styles.contactLink}>
            <FontAwesomeIcon icon={faEnvelope} /> alpibit@hotmail.com
          </a>
        </p>
        <p className={styles.contactUnit}>
          <a href={`tel:${config.PHONE}`} className={styles.contactLink}>
            <FontAwesomeIcon icon={faPhone} /> {config.PHONE}
          </a>
        </p>
        <p className={styles.contactUnit}>
          <a
            target="_blank"
            href={config.GITHUB}
            className={styles.contactLink}
          >
            <FontAwesomeIcon icon={faGithub} />
            GitHub
          </a>
        </p>
      </div>
      <div className={styles.contactFormWrap}>
        <form
          name="contactform"
          method="post"
          onSubmit={formHandler}
          action={`https://formsubmit.co/${config.EMAIL}`} 
          className={styles.contactForm}
        >
          <h1 className={styles.contactheader}>Contact form</h1>
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            className={styles.contactFormName}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email *"
            className={styles.contactFormEmail}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            className={styles.contactFormMessage}
          ></textarea>
          <input
            type="submit"
            value="Submit"
            className={styles.contactFormSubmit}
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
