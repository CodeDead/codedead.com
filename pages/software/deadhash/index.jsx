import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import {
  IconBrandGooglePlay,
  IconBrandAndroid,
  IconBrandWindows,
  IconDeviceDesktop,
  IconDownload,
  IconGauge,
  IconInfoCircle,
  IconMath,
  IconQuote,
  IconTerminal2,
  IconZip,
  IconBrandGithub,
  IconLockHeart,
  IconHeart,
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
import { MainContext } from '../../../contexts/MainContextProvider';
import { setPageIndex } from '../../../reducers/MainReducer/Actions';
import classes from '../../../public/title.module.css';
import FloatingDownloadButton from "../../../components/FloatingDownloadButton";
import Link from "next/link";

const DeadHash = () => {
  const theme = useMantineTheme();
  const [, d] = useContext(MainContext);

  /**
   * Scroll to the downloads section
   */
  const scrollToDownloads = () => {
    document.getElementById('downloads').scrollIntoView();
  };

  useEffect(() => {
    d(setPageIndex(1));
  }, []);

  return (
    <>
      <Head>
        <title>DeadHash | CodeDead</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="DeadHash is a free and open source tool for hashing files and text."
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
            alt="DeadHash"
          >
            DeadHash
          </Text>
        </Title>
        <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="md">
          A free and open source file and text hash calculator!
        </Text>

        <Container mt={50} size="xl">
          <Card shadow="sm" padding="lg" radius="md" mt={20} withBorder>
            <Carousel withIndicators slideSize={{ base: '100%' }} slideGap={{ base: 0 }} loop>
              <Carousel.Slide>
                <Image radius="md" fit="contain" src="/DeadHash.webp" />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image radius="md" fit="contain" src="/deadhash/deadhash_result.webp" />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image radius="md" fit="contain" src="/deadhash/deadhash_text.webp" />
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
              DeadHash is a free and open source tool for hashing files and text in a matter of seconds. Supported hashes:
            </Text>

            <List mt={10}>
              <List.Item>MD4</List.Item>
              <List.Item>MD5</List.Item>
              <List.Item>SHA-1</List.Item>
              <List.Item>SHA-224</List.Item>
              <List.Item>SHA-256</List.Item>
              <List.Item>SHA-384</List.Item>
              <List.Item>SHA-512</List.Item>
              <List.Item>RIPEMD-160</List.Item>
              <List.Item>CRC32</List.Item>
            </List>

            <Text size="md" mt={10}>
              DeadHash respects your privacy, is open-source and does not collect any data. It is available for Android, Linux and Windows.
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
              description="Calculate file and text hashes and checksums with ease thanks to an easy to use GUI, drag and drop functionality and help documentation that are all included!"
              icon={<IconGauge size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Formats"
              description="MD4, MD5, SHA-1, SHA-224, SHA-256, SHA-384, SHA-512, RIPEMD-160 and CRC32 are all supported out of the box."
              icon={<IconMath size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Cross-platform"
              description="DeadHash is available for Android, Linux and Windows, offering a similar look and feel on all platforms. Additionally, DeadHash can be compiled manually to run on macOS."
              icon={<IconDeviceDesktop size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
                title="Open source"
                description="Being open source means that DeadHash is free to use and can be modified to suit your needs. The source code is available on GitHub."
                icon={<IconBrandGithub size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
                title="Private"
                description="DeadHash does not collect any data from its users. The application is designed to be as transparent as possible. No ads, no trackers, no nonsense."
                icon={<IconLockHeart size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
                title="Made with love"
                description="DeadHash is a project made with love by the CodeDead team and open-source contributors. We hope you enjoy using it as much as we enjoyed making it."
                icon={<IconHeart size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
          </SimpleGrid>

          <Group mt={20}>
            <Badge variant="filled" size="lg" leftSection={<IconDownload size={12} />} id="downloads">
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
                  href="https://play.google.com/store/apps/details?id=com.codedead.deadhash"
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
                  href="https://f-droid.org/en/packages/com.codedead.deadhash/"
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
                  href="https://github.com/CodeDead/DeadHash-js/releases/download/v2.2.3/DeadHash.Setup.2.2.3.exe"
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
                  href="https://github.com/CodeDead/DeadHash-js/releases/download/v2.2.3/DeadHash.2.2.3.exe"
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
                  href="https://github.com/CodeDead/DeadHash-js/releases/download/v2.2.3/DeadHash-2.2.3.AppImage"
                  target="_blank"
                  rel="noreferrer noopener"
                  leftSection={<IconTerminal2 size={20} />}
                  fullWidth
                  size="md"
              >
                AppImage
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
              A handy document hasher
            </Text>
            <Text size="md" mt={10}>
              "All things considered, DeadHash proves to be a practical and useful application that
              can successfully calculate hash strings for your files or compare them to discover if
              they have been modified or not."
            </Text>
            <Text size="md" mt={10}>
              -{' '}
              <a
                  href="https://www.softpedia.com/get/Security/Security-Related/DeadHash.shtml"
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
              <Button
                  component={Link}
                  href="/software/deadhash/requirements"
                  fullWidth
                  size="md"
              >
                Requirements
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
              <Button
                  component="a"
                  href="/Software/DeadHash/help.pdf"
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
                  href="/Software/DeadHash/gpl.pdf"
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
                  href="https://github.com/CodeDead/DeadHash-js"
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
                  href="https://github.com/CodeDead/DeadHash-android"
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

export default DeadHash;
