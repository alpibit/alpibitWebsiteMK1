import React, { useState } from "react";
import styles from "./Contact.module.css";
import { config } from "../../config.js";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  const [message, setMessage] = useState(""); // To display messages to the user

  const formHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      const response = await fetch("/runners/sendmail.php", {
        method: "POST",
        body: formData,
      });

      const result = await response.text();

      setMessage(result); // Display the result message from the server
    } catch (error) {
      setMessage("Error occurred while submitting the form. Please try again.");
    }
  };

  return (
    <section className={styles.wrap} id="contact">
      <div className={styles.contactDetails}>
        <p className={styles.contactUnit}>
          <a href={`mailto:${config.EMAIL}`} className={styles.contactLink}>
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
        {message && <p>{message}</p>}
      </div>
    </section>
  );
};

export default Contact;