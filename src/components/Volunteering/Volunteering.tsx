import React from "react";
import styles from "./Volunteering.module.css";

const Volunteering = () => {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <h2>Volunteering experience in Alcobendas, Spain</h2>
        <p>
          I was volunteering in a program organized by the Erasmus Solidarity Corpus in a youth house in Alcobendas, near Madrid from November 2022 to the end of July 2023. Every week I organized an informal English language course for young people, assisted teachers at a local university, and facilitated feminist discussions. In addition, my daily routine included helping children with homework and tests, a course for adults to learn English, fun lessons at a local school, and working at a refugee center. My everyday life was colorful, I enriched myself and learned many new things about the world around me. I had three other volunteers with me, from France, Belgium, and Latvia, and thanks to them, I learned collaboration, cultural norms, and language skills. Additionally, I created content to promote the organization's activities and implemented many of my ideas in the context of my daily work. Along with everything I learned through my work duties, I immersed myself day after day in the rich Spanish culture and learned two new languages - Spanish and French.
        </p>
        <a href="https://www.imaginalcobendas.org/2022/11/bienvenida-a-jovenes-de-voluntariado-europeo/"> Link to news article in hosting organisation's website</a>
        <br />
        <a href="https://www.imaginalcobendas.org/2023/07/jovenes-podcasters/"> Link to podcast episode</a>
      </div>
    </section>
  );
};

export default Volunteering;
