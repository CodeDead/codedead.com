import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  IconBrandAndroid,
  IconBrandFinder,
  IconBrandGithub,
  IconBrandGooglePlay,
  IconBrandWindows,
  IconDeviceDesktop,
  IconDownload,
  IconGauge,
  IconHeart,
  IconInfoCircle,
  IconLockHeart,
  IconMath,
  IconQuote,
  IconTerminal2,
} from '@tabler/icons-react';
import { Carousel } from '@mantine/carousel';
import {
  Badge,
  Button,
  Card,
  Center,
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

const AdvancedPortChecker = () => {
  const theme = useMantineTheme();
  const [, d] = useContext(MainContext);

  /**
   * Scroll to the downloads section
   */
  const scrollToDownloads = () => {
    document.getElementById('downloads').scrollIntoView();
  };

  useEffect(() => {
    d(setPageIndex(4));
  }, []);

  return (
    <>
      <Head>
        <title>Advanced PortChecker | CodeDead</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="Advanced PortChecker is a free and open source port checker that allows you to scan your network for open ports."
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
            alt="Advanced PortChecker"
          >
            Advanced
          </Text>
          {' PortChecker'}
        </Title>
        <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="md">
          A free and open source port checker
        </Text>

        <Container mt={50} size="xl">
          <Card shadow="sm" padding="lg" radius="md" mt={20} withBorder>
            <Carousel withIndicators slideSize={{ base: '100%' }} slideGap={{ base: 0 }} loop>
              <Carousel.Slide>
                <Image
                  radius="md"
                  fit="contain"
                  src="/advanced-portchecker/ap.webp"
                  alt="Advanced PortChecker"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  radius="md"
                  fit="contain"
                  src="/advanced-portchecker/ap_general_settings.webp"
                  alt="Advanced PortChecker General Settings"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  radius="md"
                  fit="contain"
                  src="/advanced-portchecker/ap_about.webp"
                  alt="Advanced PortChecker About"
                />
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
              Advanced PortChecker is a free and open source port checker that allows you to scan
              your network for open ports. The app is available for Android, Linux, macOS and
              Windows, offering a similar look and feel on all platforms. Additionally, Advanced
              PortChecker can be compiled on other platforms manually.
            </Text>

            <Text size="md" mt={10}>
              Scanning TCP/IP ports has never been this easy. Watch how Advanced PortChecker scans
              for open ports in seconds!
            </Text>

            <Text size="md" mt={10}>
              Advanced PortChecker can export any and all data that it finds for you in a couple of
              different formats including: HTML, JSON, CSV and of course plain text.
            </Text>
          </Card>

          <Group mt={20}>
            <Badge variant="filled" size="lg" leftSection={<IconInfoCircle size={12} />}>
              Highlights
            </Badge>
          </Group>

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={20}>
            <FeatureCard
              title="Performance"
              description="Made with performance in mind, Advanced PortChecker is fast and efficient. Scanning your network for open ports has never been this easy."
              icon={<IconGauge size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Preferences"
              description="Want a different theme or would you like to disable automatic updates? It’s all possible, thanks to our intuitive and easy to use GUI."
              icon={<IconMath size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Cross-platform"
              description="Advanced PortChecker is available for Android, Linux, macOS and Windows, offering a similar look and feel on all platforms. Additionally, Advanced PortChecker can be compiled on other platforms manually."
              icon={<IconDeviceDesktop size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Open source"
              description="Being open source means that Advanced PortChecker is free to use and can be modified to suit your needs. The source code is available on GitHub."
              icon={<IconBrandGithub size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Private"
              description="Advanced PortChecker does not collect any data from its users. The application is designed to be as transparent as possible. No ads, no trackers, no nonsense."
              icon={<IconLockHeart size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Made with love"
              description="Advanced PortChecker is a project made with love by the CodeDead team and open-source contributors. We hope you enjoy using it as much as we enjoyed making it."
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
            <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
              <Center>
                <Text size="lg">Android</Text>
              </Center>
              <Button
                component="a"
                href="https://play.google.com/store/apps/details?id=com.codedead.advancedportchecker"
                target="_blank"
                rel="noreferrer noopener"
                fullWidth
                leftSection={<IconBrandGooglePlay size={20} />}
                size="md"
              >
                Google Play
              </Button>
              <Button
                component="a"
                href="https://f-droid.org/en/packages/com.codedead.advancedportchecker/"
                target="_blank"
                rel="noreferrer noopener"
                fullWidth
                leftSection={<IconBrandAndroid size={20} />}
                size="md"
                mt={10}
              >
                F-Droid
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
              <Center>
                <Text size="lg">Windows</Text>
              </Center>
              <Button
                component="a"
                href="https://github.com/CodeDead/Advanced-PortChecker/releases/download/v2.3.0/advanced-portchecker_2.3.0_x64_en-US.msi"
                target="_blank"
                rel="noreferrer noopener"
                leftSection={<IconBrandWindows size={20} />}
                fullWidth
                size="md"
              >
                Installer
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
              <Center>
                <Text size="lg">Linux</Text>
              </Center>
              <Button
                component="a"
                href="https://github.com/CodeDead/Advanced-PortChecker/releases/download/v2.3.0/advanced-portchecker_2.3.0_amd64.AppImage"
                target="_blank"
                rel="noreferrer noopener"
                leftSection={<IconTerminal2 size={20} />}
                fullWidth
                size="md"
              >
                AppImage
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
              <Center>
                <Text size="lg">macOS</Text>
              </Center>
              <Button
                component="a"
                href="https://github.com/CodeDead/Advanced-PortChecker/releases/download/v2.3.0/advanced-portchecker_2.3.0_aarch64.dmg"
                target="_blank"
                rel="noreferrer noopener"
                leftSection={<IconBrandFinder size={20} />}
                fullWidth
                size="md"
              >
                dmg
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
              Handy tool providing you with results in real time
            </Text>
            <Text size="md" mt={10}>
              "On an ending note, Advanced PortChecker is an easy-to-use program helping you
              effortlessly find open ports you can connect to. It can spot both TCP and UDP ports,
              letting you compile them in lists you can subsequently use, but its core advantage is
              that it helps you see the potential of your network in real time."
            </Text>
            <Text size="md" mt={10}>
              -{' '}
              <a
                href="https://www.softpedia.com/get/Network-Tools/IP-Tools/Advanced-PortChecker.shtml"
                target="_blank"
                rel="noreferrer noopener"
              >
                Anca Roman, Softpedia
              </a>
            </Text>
          </Card>

          <Group mt={20}>
            <Badge variant="filled" size="lg" leftSection={<IconQuote size={12} />}>
              Extra
            </Badge>
          </Group>

          <Grid mt={20}>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
              <Button
                component={Link}
                href="/software/advanced-portchecker/requirements"
                fullWidth
                size="md"
              >
                Requirements
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
              <Button
                component="a"
                href="/Software/Advanced PortChecker/gpl.pdf"
                target="_blank"
                rel="noreferrer noopener"
                fullWidth
                size="md"
              >
                License
              </Button>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
              <Button
                component="a"
                href="https://github.com/CodeDead/Advanced-PortChecker"
                target="_blank"
                rel="noreferrer noopener"
                fullWidth
                size="md"
              >
                Source code (Desktop)
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
              <Button
                component="a"
                href="https://github.com/CodeDead/Advanced-PortChecker-android"
                target="_blank"
                rel="noreferrer noopener"
                fullWidth
                size="md"
              >
                Source code (Android)
              </Button>
            </Grid.Col>
          </Grid>
          <FloatingDownloadButton onClick={scrollToDownloads} />
        </Container>
      </Container>
    </>
  );
};

export default AdvancedPortChecker;
