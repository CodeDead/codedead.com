import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  IconBrandGithub,
  IconBrandWindows,
  IconDeviceDesktop,
  IconDownload,
  IconGauge,
  IconHeart,
  IconInfoCircle,
  IconLockHeart,
  IconMath,
  IconQuote,
  IconZip,
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

const AniView = () => {
  const theme = useMantineTheme();
  const [, d] = useContext(MainContext);

  /**
   * Scroll to the downloads section
   */
  const scrollToDownloads = () => {
    document.getElementById('downloads').scrollIntoView();
  };

  useEffect(() => {
    d(setPageIndex(9));
  }, []);

  return (
    <>
      <Head>
        <title>AniView | CodeDead</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="AniView is a free and open source GIF image viewer. You can watch GIF images your way, thanks to all the options that are available in AniView."
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
            alt="AniView"
          >
            AniView
          </Text>
        </Title>
        <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="md">
          AniView is a free and open source GIF image viewer. You can watch GIF images your way,
          thanks to all the options that are available in AniView.
        </Text>

        <Container mt={50} size="xl">
          <Card shadow="sm" padding="lg" radius="md" mt={20} withBorder>
            <Carousel withIndicators slideSize={{ base: '100%' }} slideGap={{ base: 0 }} loop>
              <Carousel.Slide>
                <Image radius="md" fit="contain" src="/aniview/aniview.webp" />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image radius="md" fit="contain" src="/aniview/settings.webp" />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image radius="md" fit="contain" src="/aniview/av_settings_image.webp" />
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
              AniView is a free and open source GIF image viewer. You can watch GIF images your way,
              thanks to all the options that are available in AniView.
            </Text>

            <Text size="md" mt={10}>
              As an added bonus, you can also extract each individual frame inside a GIF image to a
              format of your liking. Particularly interesting if you’re only interested in a single
              frame.
            </Text>
          </Card>

          <Group mt={20}>
            <Badge variant="filled" size="lg" leftSection={<IconInfoCircle size={12} />}>
              Highlights
            </Badge>
          </Group>

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={20}>
            <FeatureCard
              title="GIF Image Viewer"
              description="AniView is a free and open source GIF image viewer. You can watch GIF images your way, thanks to all the options that are available in AniView."
              icon={<IconGauge size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Preferences"
              description="Want a different theme or would you like to disable automatic updates? Don’t want your GIF’s to loop? It’s all possible, thanks to our intuitive and easy to use GUI."
              icon={<IconMath size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Made for Windows"
              description="AniView is designed to run on Windows. This makes it easy to use and install. You can run AniView on Windows 7, 8, 8.1, 10 and 11."
              icon={<IconDeviceDesktop size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Open source"
              description="Being open source means that AniView is free to use and can be modified to suit your needs. The source code is available on GitHub."
              icon={<IconBrandGithub size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Private"
              description="AniView does not collect any data from its users. The application is designed to be as transparent as possible. No ads, no trackers, no nonsense."
              icon={<IconLockHeart size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Made with love"
              description="AniView is a project made with love by the CodeDead team and open-source contributors. We hope you enjoy using it as much as we enjoyed making it."
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
              <Button
                component="a"
                href="https://github.com/CodeDead/AniView/releases/download/1.6.0/AV_setup.exe"
                target="_blank"
                rel="noreferrer noopener"
                fullWidth
                leftSection={<IconBrandWindows size={20} />}
                size="md"
              >
                Installer
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
              <Button
                component="a"
                href="https://github.com/CodeDead/AniView/releases/download/1.6.0/AV_portable.zip"
                target="_blank"
                rel="noreferrer noopener"
                leftSection={<IconZip size={20} />}
                fullWidth
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
              A humdrum GIF viewer with a surprising amount of customization options
            </Text>
            <Text size="md" mt={10}>
              "To change the format, simply visit the app’s Settings section. Since we are on the
              subject, from the General tab, you can enable or disable the following features:
              automatic updates, drag and drop functionality, automatic window resizing, full-screen
              support. What is more, you can also change the repeat behavior or even create custom
              ones. Despite its simplicity, you might be surprised to hear that the app also comes
              with a few UI customization options. For example, within the Theme Tab, you can change
              the app’s interface style, the metro brush’s color and even the border thickness."
            </Text>
            <Text size="md" mt={10}>
              -{' '}
              <a
                href="https://www.softpedia.com/get/Multimedia/Graphic/Graphic-Viewers/AniView.shtml"
                target="_blank"
                rel="noreferrer noopener"
              >
                Vladimir Ciobica, Softpedia
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
              <Button component={Link} href="/software/aniview/requirements" fullWidth size="md">
                Requirements
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
              <Button
                component="a"
                href="/Software/AniView/help.pdf"
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
                href="/Software/AniView/gpl.pdf"
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
                href="https://github.com/CodeDead/AniView"
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

export default AniView;
