import type { NextPage } from "next";
import Head from "next/head";
import {
  ActionIcon,
  AppShell,
  Burger,
  Center,
  Code,
  Container,
  Flex,
  Group,
  List,
  Stack,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavigationBar } from "../components/NavigationBar";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const Home: NextPage = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <Container>
      <Head>
        <title>Athena Yim</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="any" />
      </Head>
      <AppShell
        header={{ height: 60 }}
        aside={{
          width: 150,
          breakpoint: 0,
          collapsed: { desktop: !opened, mobile: !opened },
        }}
        withBorder={false}
      >
        <AppShell.Header>
          <Flex justify="flex-end" style={{ padding: "2rem" }}>
            <Burger opened={opened} onClick={toggle} size="sm" />
          </Flex>
        </AppShell.Header>
        <AppShell.Aside>
          <NavigationBar />
        </AppShell.Aside>
      </AppShell>

      <Center id="landing-page" mih="100vh">
        <Stack gap="md">
          <Title order={1}>Athena Yim</Title>

          <Code color="pink.1">
            Software engineer & MEng Computing graduate from Imperial College
            London.
          </Code>
          <Group gap="xs">
            <ActionIcon
              component="a"
              href="https://github.com/athenayim"
              target="_blank"
            >
              <IconBrandGithub style={{ width: "80%", height: "80%" }} />
            </ActionIcon>
            <ActionIcon
              component="a"
              href="https://www.linkedin.com/in/athena-yim/"
              target="_blank"
            >
              <IconBrandLinkedin style={{ width: "80%", height: "80%" }} />
            </ActionIcon>
          </Group>
        </Stack>
      </Center>

      <Center id="about-page" mih="100vh">
        <Stack gap="xl">
          <Stack gap="md" w="100%">
            <Title order={2} id="work-experience">
              💻 Experience
            </Title>
            <List>
              <List.Item>
                Software Engineer @ Jump Trading Group (2024-Present - London,
                UK)
              </List.Item>
              <List.Item>
                Software Engineer Internship @ Jump Trading Group (2023 -
                London, UK)
              </List.Item>
              <List.Item>
                Software Engineer Internship @ JPMorgan Chase & Co. (2022 -
                Glasgow, UK)
              </List.Item>
              <List.Item>
                Undergraduate Teaching Assistant @ Imperial College London
                (2021-2023 - London, UK)
              </List.Item>
            </List>
          </Stack>

          <Stack gap="md" w="100%">
            <Title order={2} id="education">
              🎓 Education
            </Title>
            <List>
              <List.Item>
                MEng Computing @ Imperial College London (2020-2024)
              </List.Item>
            </List>
          </Stack>
        </Stack>
      </Center>
    </Container>
  );
};

export default Home;
