import React from "react";
import styles from "./Volunteering.module.css";
import { useTranslation } from "react-i18next";

const Volunteering = () => {
  const {t} = useTranslation('common');
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <h2>{t("volunteering.title")}</h2>
        <p>
        {t("volunteering.description")}
        </p>
        <a href="https://www.imaginalcobendas.org/2022/11/bienvenida-a-jovenes-de-voluntariado-europeo/">   {t("volunteering.article")}</a>
        <br />
        <a href="https://www.imaginalcobendas.org/2023/07/jovenes-podcasters/">  {t("volunteering.podcast")}</a>
      </div>
    </section>
  );
};

export default Volunteering;
