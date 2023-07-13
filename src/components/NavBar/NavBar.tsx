import React, { useState } from "react";
import { Link } from "react-scroll";
import styles from "./NavBar.module.css";

function NavBar() {
  const [activeSection, setActiveSection] = useState("about");

  const handleSetActive = (section: string) => {
    setActiveSection(section);
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles["navbar-menu"]}>
        <li className={`${styles["navbar-item"]} ${activeSection === "about" ? styles.active : ""}`}>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => handleSetActive("about")}
          >
            About
          </Link>
        </li>
        <li className={`${styles["navbar-item"]} ${activeSection === "projects" ? styles.active : ""}`}>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => handleSetActive("projects")}
          >
            Projects
          </Link>
        </li>
        <li className={`${styles["navbar-item"]} ${activeSection === "contact" ? styles.active : ""}`}>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => handleSetActive("contact")}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
