import type { NextPage } from "next";
import LandingPage from "./LandingPage";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <LandingPage />
    </div>
  );
};

export default Home;
