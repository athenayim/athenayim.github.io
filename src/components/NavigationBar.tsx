import { Stack } from "@mantine/core";
import NavigationButton from "./NavigationButton";

const NavigationBar = () => {
  return (
    <Stack style={{padding: "2rem 2rem 0 2rem"}}>
      <NavigationButton linkTo={"landing-page"}>Home</NavigationButton>
      <NavigationButton linkTo={"about-page"}>About Me</NavigationButton>
    </Stack>
  );
};

export default NavigationBar;
