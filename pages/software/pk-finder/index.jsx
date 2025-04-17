import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  IconBrandGithub,
  IconBrandWindows,
  IconDeviceFloppy,
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

const PkFinder = () => {
  const theme = useMantineTheme();
  const [, d] = useContext(MainContext);

  /**
   * Scroll to the downloads section
   */
  const scrollToDownloads = () => {
    document.getElementById('downloads').scrollIntoView();
  };

  useEffect(() => {
    d(setPageIndex(6));
  }, []);

  return (
    <>
      <Head>
        <title>PK Finder | CodeDead</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="PK Finder is a tool that helps you find the product key of your Windows installation."
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
            alt="PK Finder"
          >
            PK
          </Text>
          {' Finder'}
        </Title>
        <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="md">
          PK Finder is a tool that helps you find the product key of your Windows installation.
        </Text>

        <Container mt={50} size="xl">
          <Card shadow="sm" padding="lg" radius="md" mt={20} withBorder>
            <Carousel withIndicators slideSize={{ base: '100%' }} slideGap={{ base: 0 }} loop>
              <Carousel.Slide>
                <Image radius="md" fit="contain" src="/pk-finder/pkfinder.webp" alt="PK Finder" />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  radius="md"
                  fit="contain"
                  src="/pk-finder/pkgeneral.webp"
                  alt="PK Finder general settings"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  radius="md"
                  fit="contain"
                  src="/pk-finder/pktheme.webp"
                  alt="PK Finder theme settings"
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
              PK Finder will help you find the product key of your Windows installation. This is
              useful if you need to reinstall Windows or if you want to transfer your license to
              another computer.
            </Text>

            <Text size="md" mt={10}>
              As soon as you open PK Finder, you’ll be able to view your product key.
            </Text>
          </Card>

          <Group mt={20}>
            <Badge variant="filled" size="lg" leftSection={<IconInfoCircle size={12} />}>
              Highlights
            </Badge>
          </Group>

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={20}>
            <FeatureCard
              title="Quick and easy"
              description="PK Finder is designed to be as simple as possible. You can find and copy your product key in just a few clicks."
              icon={<IconGauge size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Preferences"
              description="Want a different theme or would you like to disable automatic updates? It’s all possible, thanks to our intuitive and easy to use GUI."
              icon={<IconMath size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Exporting"
              description="You can export your product key in any of the supported formats, including: HTML, Excel, JSON, CSV and of course plain text format."
              icon={<IconDeviceFloppy size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Open source"
              description="Being open source means that PK Finder is free to use and can be modified to suit your needs. The source code is available on GitHub."
              icon={<IconBrandGithub size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Private"
              description="PK Finder does not collect any data from its users. The application is designed to be as transparent as possible. No ads, no trackers, no nonsense."
              icon={<IconLockHeart size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Made with love"
              description="PK Finder is a project made with love by the CodeDead team and open-source contributors. We hope you enjoy using it as much as we enjoyed making it."
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
                href="https://github.com/CodeDead/PK-Finder/releases/download/v2.0.0/PK.Finder.Setup.exe"
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
                href="https://github.com/CodeDead/PK-Finder/releases/download/v2.0.0/PK-Finder.zip"
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
              A reliable tool for retrieving Windows keys
            </Text>
            <Text size="md" mt={10}>
              "In case you want to reinstall your operating system but cannot find or extract the
              serial key through the traditional methods, then perhaps PK Finder could come in
              handy."
            </Text>
            <Text size="md" mt={10}>
              -{' '}
              <a
                href="https://www.softpedia.com/get/System/System-Info/PK-Finder.shtml"
                target="_blank"
                rel="noreferrer noopener"
              >
                Alexandra Sava, Softpedia
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
              <Button component={Link} href="/software/pk-finder/requirements" fullWidth size="md">
                Requirements
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
              <Button
                component="a"
                href="/Software/PK%20Finder/help.pdf"
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
                href="/Software/PK%20Finder/gpl.pdf"
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
                href="https://github.com/CodeDead/PK-Finder"
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

export default PkFinder;
