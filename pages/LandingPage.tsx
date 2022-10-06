import type { NextPage } from "next";
import styles from "../styles/Page.module.css";

const LandingPage: NextPage = () => {
  return (
    <>
      <main id="landing-page" className={styles.main}>
        <h1 className={styles.title}>Athena Yim</h1>

        <p className={styles.description}>
          <code className={styles.code}>
            Imperial College London Computing student and aspiring web
            developer.
          </code>
        </p>
      </main>
    </>
  );
};

export default LandingPage;
