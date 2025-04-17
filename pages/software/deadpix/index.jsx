import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  IconBrandGithub,
  IconBrandGooglePlay,
  IconBrandWindows,
  IconDeviceDesktop,
  IconDownload,
  IconHeart,
  IconInfoCircle,
  IconLockHeart,
  IconQuote,
  IconUserScreen,
  IconWand,
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

const DeadPix = () => {
  const theme = useMantineTheme();
  const [, d] = useContext(MainContext);

  /**
   * Scroll to the downloads section
   */
  const scrollToDownloads = () => {
    document.getElementById('downloads').scrollIntoView();
  };

  useEffect(() => {
    d(setPageIndex(10));
  }, []);

  return (
    <>
      <Head>
        <title>DeadPix | CodeDead</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="DeadPix can help you detect and fix dead pixels on your screen."
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
            alt="DeadPix"
          >
            DeadPix
          </Text>
        </Title>
        <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="md">
          DeadPix can help you detect and fix dead pixels on your screen.
        </Text>

        <Container mt={50} size="xl">
          <Card shadow="sm" padding="lg" radius="md" mt={20} withBorder>
            <Carousel withIndicators slideSize={{ base: '100%' }} slideGap={{ base: 0 }} loop>
              <Carousel.Slide>
                <Image radius="md" fit="contain" src="/deadpix/deadpix.webp" alt="DeadPix" />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  radius="md"
                  fit="contain"
                  src="/deadpix/settings.webp"
                  alt="DeadPix settings"
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
              DeadPix can fix dead or stuck pixels on your screen with just a couple of mouse
              clicks, free of charge!
            </Text>

            <Text size="md" mt={10}>
              DeadPix can fix stuck or dead pixels by rapidly cycling the color value of the pixel.
              Please note that this tool does not provide a 100% success rate.
            </Text>
          </Card>

          <Group mt={20}>
            <Badge variant="filled" size="lg" leftSection={<IconInfoCircle size={12} />}>
              Highlights
            </Badge>
          </Group>

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={20}>
            <FeatureCard
              title="Fix dead / stuck pixels"
              description="Fix dead or stuck pixels on your screen with just a couple of mouse clicks, free of charge!"
              icon={<IconUserScreen size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Method of action"
              description="DeadPix can fix stuck or dead pixels by rapidly cycling the color value of the pixel. Please note that this tool does not provide a 100% success rate."
              icon={<IconWand size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Cross-platform"
              description="Screen issues are not limited to Windows. DeadPix is available for Windows and Android. More platforms are coming soon."
              icon={<IconDeviceDesktop size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Open source"
              description="Being open source means that DeadPix is free to use and can be modified to suit your needs. The source code is available on GitHub."
              icon={<IconBrandGithub size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Private"
              description="DeadPix does not collect any data from its users. The application is designed to be as transparent as possible. No ads, no trackers, no nonsense."
              icon={<IconLockHeart size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Made with love"
              description="DeadPix is a project made with love by the CodeDead team and open-source contributors. We hope you enjoy using it as much as we enjoyed making it."
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
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
              <Center>
                <Text size="lg">Android</Text>
              </Center>
              <Button
                component="a"
                href="https://play.google.com/store/apps/details?id=com.codedead.deadpix"
                target="_blank"
                rel="noreferrer noopener"
                fullWidth
                leftSection={<IconBrandGooglePlay size={20} />}
                size="md"
              >
                Google Play
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
              <Center>
                <Text size="lg">Windows</Text>
              </Center>
              <Button
                component="a"
                href="https://github.com/CodeDead/DeadPix/releases/download/1.2/DP_setup.exe"
                target="_blank"
                rel="noreferrer noopener"
                fullWidth
                leftSection={<IconBrandWindows size={20} />}
                size="md"
              >
                Installer
              </Button>
              <Button
                component="a"
                href="https://github.com/CodeDead/DeadPix/releases/download/1.2/DP_Port.zip"
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
          </Grid>

          <Group mt={20}>
            <Badge variant="filled" size="lg" leftSection={<IconQuote size={12} />}>
              What others say
            </Badge>
          </Group>

          <Card shadow="sm" padding="lg" radius="md" mt={20} withBorder>
            <Text fw={500} size="lg">
              A handy dead pixel finder
            </Text>
            <Text size="md" mt={10}>
              "Overall, DeadPix proves to be a practical program that you can resort to for locating
              and trying to fix stuck pixels on your screen by flashing random colors for a
              lengthier period of time; however, you should not expect miracles."
            </Text>
            <Text size="md" mt={10}>
              -{' '}
              <a
                href="https://www.softpedia.com/get/Others/Miscellaneous/DeadPix.shtml"
                target="_blank"
                rel="noreferrer noopener"
              >
                Marina Dan, Softpedia
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
              <Button component={Link} href="/software/deadpix/requirements" fullWidth size="md">
                Requirements
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
              <Button
                component="a"
                href="/Software/DeadPix/help.pdf"
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
                href="/Software/DeadPix/gpl.pdf"
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
                href="https://github.com/CodeDead/DeadPix"
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

export default DeadPix;
