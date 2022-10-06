import { Button } from "@mantine/core";
import styles from "../styles/NavigationBar.module.scss";

const NavigationBar = () => {
  return (
    <div className={styles.navbar}>
      <Button>About Me</Button>
      <Button>Work Experience</Button>
      <Button>CV</Button>
    </div>
  );
};

export default NavigationBar;
