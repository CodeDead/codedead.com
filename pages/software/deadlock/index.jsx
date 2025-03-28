import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  IconBrandGithub,
  IconBrandWindows,
  IconDeviceDesktop,
  IconDownload,
  IconHeart,
  IconInfoCircle,
  IconLockHeart,
  IconLockOpen2,
  IconMath,
  IconQuote,
} from '@tabler/icons-react';
import { Carousel } from '@mantine/carousel';
import {
  Badge,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Image,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import FeatureCard from '../../../components/FeatureCard';
import FloatingDownloadButton from '../../../components/FloatingDownloadButton';
import { MainContext } from '../../../contexts/MainContextProvider';
import { setPageIndex } from '../../../reducers/MainReducer/Actions';
import classes from '../../../public/title.module.css';

const DeadLock = () => {
  const theme = useMantineTheme();
  const [, d] = useContext(MainContext);

  /**
   * Scroll to the downloads section
   */
  const scrollToDownloads = () => {
    document.getElementById('downloads').scrollIntoView();
  };

  useEffect(() => {
    d(setPageIndex(7));
  }, []);

  return (
    <>
      <Head>
        <title>DeadLock | CodeDead</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="DeadLock can be used to unlock files and folders that are locked by the system or other applications."
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Container size="xl">
        <Title className={classes.title} ta="center">
          <Text
            inherit
            variant="gradient"
            component="span"
            gradient={{ from: 'pink', to: 'yellow' }}
            alt="DeadLock"
          >
            DeadLock
          </Text>
        </Title>
        <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="md">
          DeadLock can be used to unlock files and folders that are locked by the system or other
          applications
        </Text>

        <Container mt={50} size="xl">
          <Card shadow="sm" padding="lg" radius="md" mt={20} withBorder>
            <Carousel withIndicators slideSize={{ base: '100%' }} slideGap={{ base: 0 }} loop>
              <Carousel.Slide>
                <Image radius="md" fit="contain" src="/deadlock/deadlock.webp" />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image radius="md" fit="contain" src="/deadlock/settings.webp" />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image radius="md" fit="contain" src="/deadlock/about.webp" />
              </Carousel.Slide>
            </Carousel>
          </Card>

          <Group mt={20}>
            <Badge variant="filled" size="lg" leftSection={<IconInfoCircle size={12} />}>
              Info
            </Badge>
          </Group>

          <Card shadow="sm" padding="lg" radius="md" mt={20} withBorder>
            <Text size="md">
              DeadLock can be used to unlock files and folders that are locked by the system or
              other applications. This can be useful if you want to delete or move a file that is in
              use.
            </Text>

            <Text size="md" mt={10}>
              You don’t have to open the GUI to unlock files or folders. You can jump straight into
              PowerShell or CMD to pass along arguments to DeadLock!
            </Text>
          </Card>

          <Group mt={20}>
            <Badge variant="filled" size="lg" leftSection={<IconInfoCircle size={12} />}>
              Highlights
            </Badge>
          </Group>

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={20}>
            <FeatureCard
              title="Unlocking"
              description="Unlock files and folders, take full ownership over them and remove, move or copy them, free of charge!"
              icon={<IconLockOpen2 size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Preferences"
              description="Want a different theme or would you like to disable automatic updates? Want to enable Windows Explorer integration? It’s all possible thanks to our many settings!"
              icon={<IconMath size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Made for Windows"
              description="Because no other operating system is so bad at letting users remove files and folders, DeadLock is made and designed specifically for Windows. DeadLock is designed to be as lightweight as possible while still being powerful."
              icon={<IconDeviceDesktop size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Open source"
              description="Being open source means that DeadLock is free to use and can be modified to suit your needs. The source code is available on GitHub."
              icon={<IconBrandGithub size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Private"
              description="DeadLock does not collect any data from its users. The application is designed to be as transparent as possible. No ads, no trackers, no nonsense."
              icon={<IconLockHeart size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Made with love"
              description="DeadLock is a project made with love by the CodeDead team and open-source contributors. We hope you enjoy using it as much as we enjoyed making it."
              icon={<IconHeart size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
          </SimpleGrid>

          <Group mt={20}>
            <Badge
              variant="filled"
              size="lg"
              leftSection={<IconDownload size={12} />}
              id="downloads"
            >
              Downloads
            </Badge>
          </Group>

          <Grid mt={20}>
            <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
              <Button
                component="a"
                href="https://github.com/CodeDead/DeadLock/releases/download/1.4/dl_setup.exe"
                target="_blank"
                rel="noreferrer noopener"
                fullWidth
                leftSection={<IconBrandWindows size={20} />}
                size="md"
              >
                Installer
              </Button>
            </Grid.Col>
          </Grid>

          <Group mt={20}>
            <Badge variant="filled" size="lg" leftSection={<IconQuote size={12} />}>
              What others say
            </Badge>
          </Group>

          <Card shadow="sm" padding="lg" radius="md" mt={20} withBorder>
            <Text fw={500} size="lg">
              Scans your items on VirusTotal
            </Text>
            <Text size="md" mt={10}>
              "Aside from the functions mentioned above, this application also allows you to perform
              scans on your files with the online VirusTotal service. To sum it up, DeadLock is a
              lightweight application that enables you to unlock files that are restricted by
              certain processes on your computer in a convenient, effortless manner. It comes with a
              minimalistic, yet efficient user interface and despite its high overall accessibility,
              it also features extensive help documentation."
            </Text>
            <Text size="md" mt={10}>
              -{' '}
              <a
                href="https://www.softpedia.com/get/System/File-Management/DeadLock-CodeDead.shtml"
                target="_blank"
                rel="noreferrer noopener"
              >
                Vlad Constantinescu, Softpedia
              </a>
            </Text>
          </Card>

          <Group mt={20}>
            <Badge variant="filled" size="lg" leftSection={<IconQuote size={12} />}>
              Extra
            </Badge>
          </Group>

          <Grid mt={20}>
            <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
              <Button component={Link} href="/software/deadlock/requirements" fullWidth size="md">
                Requirements
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
              <Button
                component="a"
                href="/Software/DeadLock/help.pdf"
                target="_blank"
                rel="noreferrer noopener"
                fullWidth
                size="md"
              >
                Help documentation
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
              <Button
                component="a"
                href="/Software/DeadLock/gpl.pdf"
                target="_blank"
                rel="noreferrer noopener"
                fullWidth
                size="md"
              >
                License
              </Button>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
              <Button
                component="a"
                href="https://github.com/CodeDead/DeadLock"
                target="_blank"
                rel="noreferrer noopener"
                fullWidth
                size="md"
              >
                Source code
              </Button>
            </Grid.Col>
          </Grid>
          <FloatingDownloadButton onClick={scrollToDownloads} />
        </Container>
      </Container>
    </>
  );
};

export default DeadLock;
