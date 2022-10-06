import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import NavigationBar from "../components/NavigationBar";

const LandingPage: NextPage = () => {
  return (
    <>
      <main className={styles.main}>
        <NavigationBar />
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
