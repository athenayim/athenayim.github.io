import { Button } from "@mantine/core";
import Link from "next/link";

const NavigationButton = (props: {
  linkTo: string;
  children: React.ReactNode;
}) => {
  const { linkTo, children } = props;

  return (
    <Link href={`#${linkTo}`} passHref scroll={true}>
      <Button variant="subtle" color="pink" size="lg" radius="md">
        {children}
      </Button>
    </Link>
  );
};

export default NavigationButton;
