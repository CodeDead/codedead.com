import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  IconBrandFinder,
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
  IconTerminal2,
  IconWorldWww,
} from '@tabler/icons-react';
import { Carousel } from '@mantine/carousel';
import {
  Anchor,
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

const Compressr = () => {
  const theme = useMantineTheme();
  const [, d] = useContext(MainContext);

  /**
   * Scroll to the downloads section
   */
  const scrollToDownloads = () => {
    document.getElementById('downloads').scrollIntoView();
  };

  useEffect(() => {
    d(setPageIndex(11));
  }, []);

  return (
    <>
      <Head>
        <title>Compressr | CodeDead</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="Compressr is a free and open source bulk image compressor / compression tool that you can use in the browser or on your computer."
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
            alt="Compressr"
          >
            Compressr
          </Text>
        </Title>
        <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="md">
          A free and open source bulk image compressor / compression tool that you can use in the
          browser or on your computer.
        </Text>

        <Container mt={50} size="xl">
          <Card shadow="sm" padding="lg" radius="md" mt={20} withBorder>
            <Carousel withIndicators slideSize={{ base: '100%' }} slideGap={{ base: 0 }} loop>
              <Carousel.Slide>
                <Image radius="md" fit="contain" src="/compressr/compressr.webp" alt="Compressr" />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  radius="md"
                  fit="contain"
                  src="/compressr/compressr_settings.webp"
                  alt="Compressr General Settings"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  radius="md"
                  fit="contain"
                  src="/compressr/compressr_about.webp"
                  alt="Compressr About"
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
              Compressr is an application for compressing and optimizing images. It supports various
              image formats and provides a user-friendly interface for batch processing. It is
              available on the web and as a desktop application. It is recommended to use the
              desktop application if you need advanced features such as customizable compression
              settings and the ability to preserve metadata and/or improved performance.
            </Text>

            <Text size="md" mt={10}>
              With Compressr, you can easily reduce the file size of your images without
              compromising on quality, making it ideal for web use, sharing, and storage. The app
              also offers advanced features such as customizable compression settings and the
              ability to preserve metadata.
            </Text>

            <Text size="md" mt={10}>
              Whether you're a professional photographer or just looking to save space on your
              device, Compressr is the perfect tool for all your image optimization needs.
            </Text>

            <Text size="md" mt={10}>
              The following image formats are supported by Compressr:
            </Text>

            <List>
              <List.Item>JPEG</List.Item>
              <List.Item>PNG</List.Item>
              <List.Item>GIF</List.Item>
              <List.Item>WebP</List.Item>
              <List.Item>BMP</List.Item>
              <List.Item>TIFF</List.Item>
            </List>
          </Card>

          <Group mt={20}>
            <Badge variant="filled" size="lg" leftSection={<IconInfoCircle size={12} />}>
              Highlights
            </Badge>
          </Group>

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={20}>
            <FeatureCard
              title="Performance"
              description="Made with performance in mind, Compressr is fast and efficient. It was written in Rust and it offers lightning-fast image compression and optimization, ensuring that your images load quickly and efficiently."
              icon={<IconGauge size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Preferences"
              description="Want a different theme or would you like to disable automatic updates? It’s all possible, thanks to our intuitive and easy to use GUI."
              icon={<IconMath size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Cross-platform"
              description="Compressr is available for Linux, macOS, Windows and every OS that has a browser, offering a similar look and feel on all platforms. Additionally, Compressr can be compiled on other platforms due to its open-source nature."
              icon={<IconDeviceDesktop size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Open source"
              description="Being open source means that Compressr is free to use and can be modified to suit your needs. The source code is available on GitHub. For more information, please see the links below."
              icon={<IconBrandGithub size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Private"
              description="Compressr does not collect any data from its users. The application is designed to be as transparent as possible. No ads, no trackers, no nonsense."
              icon={<IconLockHeart size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Made with love"
              description="Compressr is a project made with love by the CodeDead team and open-source contributors. We hope you enjoy using it as much as we enjoyed making it."
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
                href="https://github.com/CodeDead/compressr-app/releases/download/v1.0.0/compressr-app-windows-x64.exe"
                target="_blank"
                rel="noreferrer noopener"
                leftSection={<IconBrandWindows size={20} />}
                fullWidth
                size="md"
              >
                EXE (x64)
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
              <Center>
                <Text size="lg">Linux</Text>
              </Center>
              <Button
                component="a"
                href="https://github.com/CodeDead/compressr-app/releases/download/v1.0.0/compressr-x86_64-v1.0.0.AppImage"
                target="_blank"
                rel="noreferrer noopener"
                leftSection={<IconTerminal2 size={20} />}
                fullWidth
                size="md"
              >
                AppImage (x64)
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
              <Center>
                <Text size="lg">macOS</Text>
              </Center>
              <Button
                component="a"
                href="https://github.com/CodeDead/compressr-app/releases/download/v1.0.0/compressr-app-macos-aarch64"
                target="_blank"
                rel="noreferrer noopener"
                leftSection={<IconBrandFinder size={20} />}
                fullWidth
                size="md"
              >
                dmg (aarch64)
              </Button>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
              <Center>
                <Text size="lg">Web</Text>
              </Center>
              <Button
                component="a"
                href="https://compressr.codedead.com"
                target="_blank"
                rel="noreferrer noopener"
                leftSection={<IconWorldWww size={20} />}
                fullWidth
                size="md"
              >
                Website
              </Button>
            </Grid.Col>
          </Grid>

          <Text size="md" mt={10}>
            <Anchor href="https://github.com/CodeDead/compressr-app/releases" target="_blank">
              Check out the releases page on GitHub to see if Compressr is available for your
              platform.
            </Anchor>
          </Text>

          <Group mt={20}>
            <Badge variant="filled" size="lg" leftSection={<IconQuote size={12} />}>
              Extra
            </Badge>
          </Group>

          <Grid mt={20}>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
              <Button
                component={Link}
                variant="default"
                href="/software/compressr/requirements"
                fullWidth
                size="md"
              >
                Requirements
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
              <Button
                component="a"
                variant="default"
                href="/Software/compressr/gpl.pdf"
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
                variant="default"
                href="https://github.com/CodeDead/compressr-app"
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
                variant="default"
                href="https://github.com/CodeDead/compressr"
                target="_blank"
                rel="noreferrer noopener"
                fullWidth
                size="md"
              >
                Source code (website)
              </Button>
            </Grid.Col>
          </Grid>
          <FloatingDownloadButton onClick={scrollToDownloads} />
        </Container>
      </Container>
    </>
  );
};

export default Compressr;
