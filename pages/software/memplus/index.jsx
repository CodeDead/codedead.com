import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { IconBrandGithub, IconBrandWindows, IconDeviceDesktop, IconDownload, IconGauge, IconHeart, IconInfoCircle, IconLockHeart, IconMath, IconQuote, IconZip } from '@tabler/icons-react';
import { Carousel } from '@mantine/carousel';
import { Badge, Button, Card, Container, Grid, Group, Image, SimpleGrid, Text, Title, useMantineTheme } from '@mantine/core';
import FeatureCard from '../../../components/FeatureCard';
import FloatingDownloadButton from '../../../components/FloatingDownloadButton';
import { MainContext } from '../../../contexts/MainContextProvider';
import { setPageIndex } from '../../../reducers/MainReducer/Actions';
import classes from '../../../public/title.module.css';


const MemPlus = () => {
  const theme = useMantineTheme();
  const [, d] = useContext(MainContext);

  /**
   * Scroll to the downloads section
   */
  const scrollToDownloads = () => {
    document.getElementById('downloads').scrollIntoView();
  };

  useEffect(() => {
    d(setPageIndex(5));
  }, []);

  return (
    <>
      <Head>
        <title>MemPlus | CodeDead</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="MemPlus is a memory management tool that helps you optimize your system's performance."
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
            alt="MemPlus"
          >
            MemPlus
          </Text>
        </Title>
        <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="md">
          MemPlus is a memory management tool that helps you optimize your system's performance.
        </Text>

        <Container mt={50} size="xl">
          <Card shadow="sm" padding="lg" radius="md" mt={20} withBorder>
            <Carousel withIndicators slideSize={{ base: '100%' }} slideGap={{ base: 0 }} loop>
              <Carousel.Slide>
                <Image radius="md" fit="contain" src="/memplus/memplus.webp" />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image radius="md" fit="contain" src="/memplus/memplus_analyzer.webp" />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image radius="md" fit="contain" src="/memplus/memplus_settings_monitor.webp" />
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
              MemPlus can be used to reduce the amount of RAM that is being used by applications on
              your system. In essence, freeing up memory so that more memory is available to you!
            </Text>

            <Text size="md" mt={10}>
              MemPlus can help recover memory that is being used by applications / Windows. This can
              help improve the performance of your system and make it more responsive.
            </Text>
          </Card>

          <Group mt={20}>
            <Badge variant="filled" size="lg" leftSection={<IconInfoCircle size={12} />}>
              Highlights
            </Badge>
          </Group>

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={20}>
            <FeatureCard
              title="Reduce memory usage"
              description="MemPlus can be used to reduce the amount of RAM that is being used by applications on your system. In essence, freeing up memory so that more memory is available to you!"
              icon={<IconGauge size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Preferences"
              description="Need MemPlus to automatically optimize your RAM in the background? Want a different theme or start MemPlus when your computer starts up? You got it! MemPlus offers a myriad of settings to make MemPlus truly yours."
              icon={<IconMath size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Made for Windows"
              description="Because no other operating system is so bad at managing memory, MemPlus is made and designed specifically for Windows. MemPlus is designed to be as lightweight as possible while still being powerful."
              icon={<IconDeviceDesktop size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Open source"
              description="Being open source means that MemPlus is free to use and can be modified to suit your needs. The source code is available on GitHub."
              icon={<IconBrandGithub size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Private"
              description="MemPlus does not collect any data from its users. The application is designed to be as transparent as possible. No ads, no trackers, no nonsense."
              icon={<IconLockHeart size={50} stroke={2} color={theme.colors.blue[6]} />}
            />
            <FeatureCard
              title="Made with love"
              description="MwmPlus is a project made with love by the CodeDead team and open-source contributors. We hope you enjoy using it as much as we enjoyed making it."
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
                href="https://github.com/CodeDead/MemPlus/releases/download/1.3.2/MP_setup.exe"
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
                href="https://github.com/CodeDead/MemPlus/releases/download/1.3.2/MP_portable.zip"
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
              A straightforward tool for managing RAM more efficiently
            </Text>
            <Text size="md" mt={10}>
              "While it is true that certain problems cannot be fixed unless you add more physical
              memory to your system, MemPlus has the role of helping you with maintenance and to
              keep your PC running smooth."
            </Text>
            <Text size="md" mt={10}>
              -{' '}
              <a
                href="https://www.softpedia.com/get/Tweak/Memory-Tweak/MemPlus-CodeDead.shtml"
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
              <Button component={Link} href="/software/memplus/requirements" fullWidth size="md">
                Requirements
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
              <Button
                component="a"
                href="/Software/MemPlus/help.pdf"
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
                href="/Software/MemPlus/gpl.pdf"
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
                href="https://github.com/CodeDead/MemPlus"
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

export default MemPlus;
