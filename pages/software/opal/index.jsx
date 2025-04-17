import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  IconBrandFinder,
  IconBrandGithub,
  IconBrandWindows,
  IconDeviceDesktop,
  IconDownload,
  IconHeart,
  IconHourglassEmpty,
  IconInfoCircle,
  IconLockHeart,
  IconMusic,
  IconQuote,
  IconTerminal2,
  IconZip,
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
  List,
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

const Opal = () => {
  const theme = useMantineTheme();
  const [, d] = useContext(MainContext);

  /**
   * Scroll to the downloads section
   */
  const scrollToDownloads = () => {
    document.getElementById('downloads').scrollIntoView();
  };

  useEffect(() => {
    d(setPageIndex(8));
  }, []);

  return (
    <>
      <Head>
        <title>Opal | CodeDead</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="Opal is a free and open-source music player that helps you relax and focus on your work."
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
            alt="Opal"
          >
            Opal
          </Text>
        </Title>
        <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="md">
          Opal is a free and open-source music player that helps you relax and focus on your work.
        </Text>

        <Container mt={50} size="xl">
          <Card shadow="sm" padding="lg" radius="md" mt={20} withBorder>
            <Carousel withIndicators slideSize={{ base: '100%' }} slideGap={{ base: 0 }} loop>
              <Carousel.Slide>
                <Image radius="md" fit="contain" src="/opal/Opal.webp" alt="Opal" />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  radius="md"
                  fit="contain"
                  src="/opal/opal_settings.webp"
                  alt="Opal settings"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image radius="md" fit="contain" src="/opal/opal_timer.webp" alt="Opal timer" />
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
              Select the sounds (30+ relaxing tracks are available) that you want to hear, turn them
              on and you can listen to and enjoy the music for as long as you want, without
              interruption. You can listen to the sound of:
            </Text>

            <List mt={20}>
              <List.Item>Rain</List.Item>
              <List.Item>Wind</List.Item>
              <List.Item>Thunder</List.Item>
              <List.Item>A river</List.Item>
              <List.Item>Fire</List.Item>
              <List.Item>Office background noises</List.Item>
              <List.Item>And much, much more!</List.Item>
            </List>
          </Card>

          <Group mt={20}>
            <Badge variant="filled" size="lg" leftSection={<IconInfoCircle size={12} />}>
              Highlights
            </Badge>
          </Group>

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={20}>
            <FeatureCard
              title="Freedom of choice"
              description="Create your very own playlist with the sounds you want to hear. You can choose from 30+ sounds that will help you relax and focus on your work."
              icon={<IconMusic size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Timer"
              description="You can enable a timer to turn off all music after a specified amount of time. An incredibly useful feature for when you are about to fall asleep."
              icon={<IconHourglassEmpty size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Cross-platform"
              description="Opal is available for Linux, Windows and macOS offering a similar look and feel on all platforms. Additionally, Opal can be compiled manually to run on other platforms."
              icon={<IconDeviceDesktop size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Open source"
              description="Being open source means that Opal is free to use and can be modified to suit your needs. The source code is available on GitHub."
              icon={<IconBrandGithub size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Private"
              description="Opal does not collect any data from its users. The application is designed to be as transparent as possible. No ads, no trackers, no nonsense."
              icon={<IconLockHeart size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Made with love"
              description="Opal is a project made with love by the CodeDead team and open-source contributors. We hope you enjoy using it as much as we enjoyed making it."
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
                <Text size="lg">Windows</Text>
              </Center>
              <Button
                component="a"
                href="https://github.com/CodeDead/opal/releases/download/v1.5.0/Opal-1.5.0.msi"
                target="_blank"
                rel="noreferrer noopener"
                leftSection={<IconBrandWindows size={20} />}
                fullWidth
                size="md"
              >
                Installer
              </Button>
              <Button
                component="a"
                href="https://github.com/CodeDead/opal/releases/download/v1.5.0/Opal-win-portable.zip"
                target="_blank"
                rel="noreferrer noopener"
                leftSection={<IconZip size={20} />}
                fullWidth
                mt={10}
                size="md"
              >
                Portable
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
              <Center>
                <Text size="lg">Linux</Text>
              </Center>
              <Button
                component="a"
                href="https://github.com/CodeDead/opal/releases/download/v1.5.0/Opal-x86_64-1.5.0.AppImage"
                target="_blank"
                rel="noreferrer noopener"
                leftSection={<IconTerminal2 size={20} />}
                fullWidth
                size="md"
              >
                AppImage
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
              <Center>
                <Text size="lg">macOS</Text>
              </Center>
              <Button
                component="a"
                href="https://github.com/CodeDead/opal/releases/download/v1.5.0/Opal-1.5.0.dmg"
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
              A simple app that includes different sound groupings to suit anyone, from office to
              fantasy
            </Text>
            <Text size="md" mt={10}>
              "Opal is a simple app that includes different sound groupings to suit anyone, from
              office to fantasy. All have volume controls so you can keep faint in the background or
              bring them forward. You can also set up a delay timer from the settings tab to remind
              you to take a break. You also have the option to combine multiple sounds at varying
              volumes to produce the perfect background noise."
            </Text>
            <Text size="md" mt={10}>
              -{' '}
              <a
                href="https://www.majorgeeks.com/files/details/opal.html"
                target="_blank"
                rel="noreferrer noopener"
              >
                MajorGeeks
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
              <Button component={Link} href="/software/opal/requirements" fullWidth size="md">
                Requirements
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
              <Button
                component="a"
                href="/Software/Opal/help.pdf"
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
                href="/Software/Opal/gpl.pdf"
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
                href="https://github.com/CodeDead/Opal"
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

export default Opal;
