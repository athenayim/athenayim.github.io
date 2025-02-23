import { Button, Stack } from "@mantine/core";
import Link from "next/link";

const NavigationButton = (props: {
  linkTo: string;
  children: React.ReactNode;
}) => {
  const { linkTo, children } = props;

  return (
    <Link href={`#${linkTo}`} passHref scroll={true}>
      <Button variant="subtle" color="pink" radius="md">
        {children}
      </Button>
    </Link>
  );
};

export const NavigationBar = () => {
  return (
    <Stack align="flex-end" pt="sm" pr="sm">
      <NavigationButton linkTo={"landing-page"}>Home</NavigationButton>
      <NavigationButton linkTo={"about-page"}>About Me</NavigationButton>
    </Stack>
  );
};
