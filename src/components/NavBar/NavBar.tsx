import React, { useState } from "react";
import { Link } from "react-scroll";
import styles from "./NavBar.module.css";
import { useTranslation } from "react-i18next";

function NavBar() {
  const [t, i18n] = useTranslation("common");
  const [activeSection, setActiveSection] = useState("about");

  const handleSetActive = (section: string) => {
    setActiveSection(section);
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles["navbar-menu"]}>
        <li
          className={`${styles["navbar-item"]} ${
            activeSection === "about" ? styles.active : ""
          }`}
        >
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
        <li
          className={`${styles["navbar-item"]} ${
            activeSection === "projects" ? styles.active : ""
          }`}
        >
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
        <li
          className={`${styles["navbar-item"]} ${
            activeSection === "contact" ? styles.active : ""
          }`}
        >
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
        <li className={styles["language-buttons"]}>
        <button onClick={() => i18n.changeLanguage("en")}>English</button>
          <button onClick={() => i18n.changeLanguage("de")}>Deutsh</button>
          <button onClick={() => i18n.changeLanguage("fr")}>Francais</button>
          <button onClick={() => i18n.changeLanguage("nl")}>Flemmish</button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
