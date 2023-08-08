import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "./Contacts.module.css";
import { useTranslation } from "react-i18next";

function Contact() {
  const emailAddress = "palova.detelina@gmail.com";
  const {t} = useTranslation('common');

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <h2>
        {t('contacts.title')}</h2>
        <div className={styles.socialLinks}>
          <a href={`mailto:${emailAddress}`} className={styles.socialLink}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/detelina-palova/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
          </a>
          <a
            href="https://github.com/detelinap"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          </a>
          <a
            href="https://medium.com/@palova-detelina"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FontAwesomeIcon icon={faMedium} className={styles.icon} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
