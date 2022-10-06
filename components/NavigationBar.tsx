import styles from "../styles/NavigationBar.module.scss";
import NavigationButton from "./NavigationButton";

const NavigationBar = () => {
  return (
    <div className={styles.navbar}>
      <NavigationButton linkTo={"landing-page"}>Home</NavigationButton>
      <NavigationButton linkTo={"about-page"}>About Me</NavigationButton>
      <NavigationButton linkTo={"work-experience"}>
        Work Experience
      </NavigationButton>
    </div>
  );
};

export default NavigationBar;
