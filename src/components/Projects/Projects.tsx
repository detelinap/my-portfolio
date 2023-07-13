import React from "react";
import project1Image from "../../assets/rent-a-car.png";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

// import project2Image from "../assets/project2.png";
// import project3Image from "../assets/project3.png";
import styles from "./Projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <h2>Projects</h2>
        <div className={styles.project}>
          <div className={styles.projectImage}>
            <img src={project1Image} alt="Project 1" className={styles.image} />
          </div>
          <div className={styles.projectContent}>
            <h3>Rent a car</h3>
            <p>
              A rent a car website that allows the user to choose his vehicle
              and reserve it for a set period of time.
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
        {/* <div className={styles.project}>
          <div className={styles.projectImage}>
            <img src={project1Image} alt="Project 2" className={styles.image} />
          </div>
          <div className={styles.projectContent}>
            <h3>Project 2 Title</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
              odio et ante accumsan gravida id ac tortor. Proin scelerisque
              venenatis tortor, id commodo est efficitur vitae.
            </p>
            <div className={styles.projectLinks}>
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
        <div className={styles.project}>
          <div className={styles.projectImage}>
            <img src={project1Image} alt="Project 3" className={styles.image} />
          </div>
          <div className={styles.projectContent}>
            <h3>Project 3 Title</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
              odio et ante accumsan gravida id ac tortor. Proin scelerisque
              venenatis tortor, id commodo est efficitur vitae.
            </p>
            <div className={styles.projectLinks}>
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
        </div> */}
      </div>
    </section>
  );
}

export default Projects;
