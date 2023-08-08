import React from "react";
import project1Image from "../../assets/rent-a-car.png";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import styles from "./Projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

function Projects() {
  
  const {t} = useTranslation('common');
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <h2> {t("projects.title")}</h2>
        <div className={styles.project}>
          <div className={styles.projectImage}>
            <img src={project1Image} alt="Project 1" className={styles.image} />
          </div>
          <div className={styles.projectContent}>
            <h3>{t("projects.rentCar")}</h3>
            <p>{t("projects.rentCarDescription")}
            </p>
            <div className={styles.technologyStack}>
              <FontAwesomeIcon icon={faCode} />
              <p>React | TypeScript | Bootstrap</p>
            </div>
            <div className={styles.projectLinks}>
              <FontAwesomeIcon icon={faLink} />
              <a
                href="https://rent-a-car-n6pj.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo 
              </a>
              <a
                href="https://github.com/detelinap/Rent-a-car"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
