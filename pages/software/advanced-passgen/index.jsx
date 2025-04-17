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
  IconWorldWww,
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

const AdvancedPassGen = () => {
  const theme = useMantineTheme();
  const [, d] = useContext(MainContext);

  /**
   * Scroll to the downloads section
   */
  const scrollToDownloads = () => {
    document.getElementById('downloads').scrollIntoView();
  };

  useEffect(() => {
    d(setPageIndex(3));
  }, []);

  return (
    <>
      <Head>
        <title>Advanced PassGen | CodeDead</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="Advanced PassGen is a password generator that allows you to create safe and strong passwords."
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
            alt="Advanced PassGen"
          >
            Advanced
          </Text>
          {' PassGen'}
        </Title>
        <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="md">
          A free and open source password generator!
        </Text>

        <Container mt={50} size="xl">
          <Card shadow="sm" padding="lg" radius="md" mt={20} withBorder>
            <Carousel withIndicators slideSize={{ base: '100%' }} slideGap={{ base: 0 }} loop>
              <Carousel.Slide>
                <Image
                  radius="md"
                  fit="contain"
                  src="/advanced-passgen/ap.webp"
                  alt="Advanced PassGen"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  radius="md"
                  fit="contain"
                  src="/advanced-passgen/ap_theme_settings.webp"
                  alt="Advanced PassGen theme settings"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  radius="md"
                  fit="contain"
                  src="/advanced-passgen/ap_advanced_settings.webp"
                  alt="Advanced PassGen advanced settings"
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
              Advanced PassGen is a password generator that allows you to create safe and strong
              passwords. It is a free and open source software that is available for Android, Linux
              and Windows.
            </Text>

            <Text size="md" mt={10}>
              The app has a lot of features that you can use to customize your passwords. You can
              choose the length of the password, the characters that you want to use, and even the
              number of passwords that you want to generate.
            </Text>

            <Text size="md" mt={10}>
              The app also has a dark mode that you can use to generate passwords in low light
              conditions. Advanced PassGen can export any and all data that it generates for you in
              a couple of different formats including: CSV, JSON and of course plain text. A simple
              copy is also available!
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
              description="Easily generate thousands of passwords using the options that are available in Advanced PassGen. You can even go so far as to define your own character set that Advanced PassGen can use to generate passwords!"
              icon={<IconGauge size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Preferences"
              description="Want a different theme or would you like to disable automatic updates? Don’t want to export a certain field? It’s all possible, thanks to our intuitive and easy to use GUI."
              icon={<IconMath size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Cross-platform"
              description="Advanced PassGen is available for Android, Linux, macOS and Windows, offering a similar look and feel on all platforms. Additionally, Advanced PassGen can be compiled on other platforms manually."
              icon={<IconDeviceDesktop size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Open source"
              description="Being open source means that Advanced PassGen is free to use and can be modified to suit your needs. The source code is available on GitHub."
              icon={<IconBrandGithub size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Private"
              description="Advanced PassGen does not collect any data from its users. The application is designed to be as transparent as possible. No ads, no trackers, no nonsense."
              icon={<IconLockHeart size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Made with love"
              description="Advanced PassGen is a project made with love by the CodeDead team and open-source contributors. We hope you enjoy using it as much as we enjoyed making it."
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
                href="https://play.google.com/store/apps/details?id=com.codedead.advancedpassgen"
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
                href="https://f-droid.org/en/packages/com.codedead.advancedpassgen/"
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
                href="https://github.com/CodeDead/Advanced-PassGen/releases/download/v2.5.2/advanced-passgen_2.5.2_x64_en-US.msi"
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
                href="https://github.com/CodeDead/Advanced-PassGen/releases/download/v2.5.2/advanced-passgen_2.5.2_amd64.AppImage"
                target="_blank"
                rel="noreferrer noopener"
                leftSection={<IconTerminal2 size={20} />}
                fullWidth
                size="md"
              >
                AppImage
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
              <Center>
                <Text size="lg">macOS</Text>
              </Center>
              <Button
                component="a"
                href="https://github.com/CodeDead/Advanced-PassGen/releases/download/v2.5.2/advanced-passgen_2.5.2_aarch64.dmg"
                target="_blank"
                rel="noreferrer noopener"
                leftSection={<IconBrandFinder size={20} />}
                fullWidth
                size="md"
              >
                dmg
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
              <Center>
                <Text size="lg">Web</Text>
              </Center>
              <Button
                component="a"
                href="https://advancedpassgen.codedead.com"
                leftSection={<IconWorldWww size={20} />}
                fullWidth
                size="md"
              >
                Web version
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
              Generates various passwords based on the specified parameters
            </Text>
            <Text size="md" mt={10}>
              "This application allows you to generate multiple passwords with ease, by defining a
              series of parameters. It is possible to toggle the inclusion of several elements
              within your passkeys, such as uppercase or lowercase characters, symbols and numbers.
              Additionally, you can define the minimum and maximum string lengths for your entries,
              specify a custom character set or generate a random seed. It is also possible to
              specify a fixed string length size and the amount of passwords that the application
              can generate during a session."
            </Text>
            <Text size="md" mt={10}>
              -{' '}
              <a
                href="https://www.softpedia.com/get/Security/Password-Managers-Generators/Advanced-PassGen.shtml"
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
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
              <Button
                component={Link}
                href="/software/advanced-passgen/requirements"
                fullWidth
                size="md"
              >
                Requirements
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
              <Button
                component="a"
                href="/Software/Advanced PassGen/gpl.pdf"
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
                href="https://github.com/CodeDead/Advanced-PassGen"
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
                href="https://github.com/CodeDead/advanced-passgen-android"
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

export default AdvancedPassGen;
