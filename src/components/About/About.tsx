import React from "react";
import profilePicture from "../../assets/profile-pic.jpg";
import styles from "./About.module.css";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutLeft}>
            <img
              src={profilePicture}
              alt="Profile"
              className={styles.profilePicture}
            />
          </div>
          <div className={styles.aboutRight}>
            <h2>About Me</h2>
            <p>
              If I had to describe myself in a sentence, it would be “I create”.
              <br />
              My strong suits include being adaptable, as well as learning both
              new skills and programming languages quickly. I also have a
              practical proficiency in Angular, Java, CSS, HTML, JavaScript,
              TypeScript, Git/GitHub. I'm still eagerly looking to expand my
              knowledge in any other programming languages, frameworks, or
              principles I can incorporate into what I use every day in my work.
            </p>
            <div className={styles.techStack}>
              <h3>Tech Stack</h3>
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
