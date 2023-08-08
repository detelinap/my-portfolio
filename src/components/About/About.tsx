import React from "react";
import profilePicture from "../../assets/profile-pic.jpg";
import styles from "./About.module.css";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useTranslation} from "react-i18next";

function About() {

  const {t} = useTranslation('common');

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutLeft}>
            <img
              src={profilePicture}
              alt="Profile"
              className={`${styles.profilePicture} profilePicture`}
            />
          </div>
          <div className={styles.aboutRight}>
            <h2>{
            //About me
            t('about.title')}</h2>
            <p>
            {t('about.description')}
            </p>
            <div className={styles.techStack}>
              <h3>
                {t('about.techStack')}
                </h3>
              <div className={styles.stackText}>
                <FontAwesomeIcon icon={faCode} />
                <p>
                  React | Angular | TypeScript | JavaScript | HTML | CSS |
                  Cypress | Jest | Java
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
