import type { NextPage } from "next";
import styles from "../styles/Page.module.css";

const AboutPage: NextPage = () => {
  return (
    <>
      <main id="about-page" className={styles.main}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.description}>A description of me!</p>
        <h1 id="work-experience" className={styles.title}>
          Work Experience
        </h1>
        <p className={styles.description}>My work experience</p>
      </main>
    </>
  );
};

export default AboutPage;
