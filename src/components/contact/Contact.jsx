import React, { useState } from "react";
import styles from "./Contact.module.css";
import { config } from "../../config.js";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Loader2 } from "lucide-react";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const formHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setStatus("loading");

    const formData = new FormData(event.target);

    try {
      const response = await fetch("/runners/sendmail.php", {
        method: "POST",
        body: formData,
      });

      const result = await response.text();
      setMessage(result);
      setStatus("success");
      event.target.reset();
    } catch (error) {
      setMessage("Error occurred while submitting the form. Please try again.");
      setStatus("error");
    }

    setIsLoading(false);
  };

  return (
    <section className={styles.wrap} id="contact">
      <div className={styles.contactDetails}>
        <a href={`mailto:${config.EMAIL}`} className={styles.contactLink}>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>alpibit@hotmail.com</span>
        </a>
        <a href={`tel:${config.PHONE}`} className={styles.contactLink}>
          <FontAwesomeIcon icon={faPhone} />
          <span>{config.PHONE}</span>
        </a>
        <a
          target="_blank"
          href={config.GITHUB}
          className={styles.contactLink}
        >
          <FontAwesomeIcon icon={faGithub} />
          <span>GitHub</span>
        </a>
      </div>

      <div className={styles.formWrapper}>
        <h1 className={styles.formTitle}>Get in Touch</h1>
        <form
          name="contactform"
          method="post"
          onSubmit={formHandler}
          className={styles.contactForm}
        >
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="name"
              placeholder=" "
              required
              className={styles.formInput}
            />
            <label className={styles.formLabel}>Your Name</label>
          </div>

          <div className={styles.inputGroup}>
            <input
              type="email"
              name="email"
              placeholder=" "
              required
              className={styles.formInput}
            />
            <label className={styles.formLabel}>Your Email</label>
          </div>

          <div className={styles.inputGroup}>
            <textarea
              name="message"
              placeholder=" "
              required
              className={`${styles.formInput} ${styles.formTextarea}`}
            ></textarea>
            <label className={styles.formLabel}>Message</label>
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className={styles.spinner} />
            ) : (
              "Send Message"
            )}
          </button>

          {message && (
            <div className={`${styles.messageBox} ${styles[status]}`}>
              {message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;