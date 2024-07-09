import type { NextPage } from "next";
import styles from "../styles/Page.module.css";

const AboutPage: NextPage = () => {
  return (
    <>
      <main id="about-page" className={styles.contentPage}>
        <h1 id="education" className={styles.subtitle}>
          Education
        </h1>
        <ul className={styles.description}>
          <li>MEng Computing @ Imperial College London (2020-2024)</li>
        </ul>

        <h1 id="work-experience" className={styles.subtitle}>
          Work Experience
        </h1>
        <ul className={styles.description}>
          <li>Software engineer intern @ JPMorgan Chase & Co. (2022)</li>
          <li>Undergraduate teaching assistant @ Imperial College London (2021-2023)</li>
          <li>Software engineer intern @ Jump Trading Group (2023)</li>
        </ul>
      </main>
    </>
  );
};

export default AboutPage;
