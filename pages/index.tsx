import type { NextPage } from "next";
import LandingPage from "./LandingPage";
import AboutPage from "./AboutPage";
import styles from "../styles/Page.module.css";
import Head from "next/head";
import NavigationBar from "../components/NavigationBar";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Athena Yim</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" type="image/png" href="/images/favicon-16x16.png" sizes="16x16"/>
        <link rel="icon" type="image/png" href="/images/favicon-32x32.png" sizes="32x32"/>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" sizes="any" />
      </Head>
      <NavigationBar />
      <LandingPage />
      <AboutPage />
    </div>
  );
};

export default Home;
