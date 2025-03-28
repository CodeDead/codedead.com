import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { IconAdjustmentsCog, IconShield, IconTools } from '@tabler/icons-react';
import { Badge, Card, Container, Grid, Group, Image, Text, Title } from '@mantine/core';
import { MainContext } from '../../contexts/MainContextProvider';
import { setPageIndex } from '../../reducers/MainReducer/Actions';
import classes from '../../public/title.module.css';

const Software = () => {
  const [, d1] = useContext(MainContext);
  const router = useRouter();

  useEffect(() => {
    d1(setPageIndex(1));
  }, []);

  return (
    <>
      <Head>
        <title>Software | CodeDead</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content="Discover the software that CodeDead has to offer." />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Container size="xl">
        <Title className={classes.title} ta="center">
          <Text
            inherit
            variant="gradient"
            component="span"
            gradient={{ from: 'pink', to: 'yellow' }}
          >
            Software
          </Text>
        </Title>
        <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="md">
          Discover the software that CodeDead has to offer.
        </Text>

        <Container mt={50} size="xl">
          <Group>
            <Badge variant="filled" size="lg" leftSection={<IconShield size={12} />}>
              Security
            </Badge>
          </Group>

          <Grid>
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
              <Card
                mt={20}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                style={{ height: '100%' }}
                component="a"
                href="/software/deadhash"
                onClick={(e) => {
                  e.preventDefault();
                  router.push('/software/deadhash');
                }}
              >
                <Card.Section>
                  <Image src="/DeadHash.webp" height={150} alt="DeadHash" />
                </Card.Section>
                <Text size="md" mt={10}>
                  DeadHash
                </Text>
                <Text size="sm" c="dimmed">
                  Calculate file hashes on any platform with ease thanks to an easy to use GUI, drag
                  and drop functionality and help documentation!
                </Text>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
              <Card
                mt={20}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                style={{ height: '100%' }}
                component="a"
                href="/software/advanced-passgen"
                onClick={(e) => {
                  e.preventDefault();
                  router.push('/software/advanced-passgen');
                }}
              >
                <Card.Section>
                  <Image src="/advanced%20passgen.webp" height={150} alt="Advanced PassGen" />
                </Card.Section>
                <Text size="md" mt={10}>
                  Advanced PassGen
                </Text>
                <Text size="sm" c="dimmed">
                  Easily generate thousands of passwords using Advanced PassGen. You can even go so
                  far as to define your own character set!
                </Text>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
              <Card
                mt={20}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                style={{ height: '100%' }}
                component="a"
                href="/software/advanced-portchecker"
                onClick={(e) => {
                  e.preventDefault();
                  router.push('/software/advanced-portchecker');
                }}
              >
                <Card.Section>
                  <Image
                    src="/advanced%20portchecker.webp"
                    height={150}
                    alt="Advanced PortChecker"
                  />
                </Card.Section>
                <Text size="md" mt={10}>
                  Advanced PortChecker
                </Text>
                <Text size="sm" c="dimmed">
                  Scanning TCP/IP ports has never been this easy. Watch how Advanced PortChecker
                  scans for open ports in seconds!
                </Text>
              </Card>
            </Grid.Col>
          </Grid>

          <Group mt={50}>
            <Badge variant="filled" size="lg" leftSection={<IconAdjustmentsCog size={12} />}>
              System
            </Badge>
          </Group>
          <Grid>
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
              <Card
                mt={20}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                style={{ height: '100%' }}
                component="a"
                href="/software/memplus"
                onClick={(e) => {
                  e.preventDefault();
                  router.push('/software/memplus');
                }}
              >
                <Card.Section>
                  <Image src="/memplus.webp" height={150} alt="MemPlus" />
                </Card.Section>
                <Text size="md" mt={10}>
                  MemPlus
                </Text>
                <Text size="sm" c="dimmed">
                  MemPlus can be used to reduce the amount of RAM that is being used by applications
                  on your system. In essence, freeing up memory so that more memory is available to
                  you!
                </Text>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
              <Card
                mt={20}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                style={{ height: '100%' }}
                component="a"
                href="/software/pk-finder"
                onClick={(e) => {
                  e.preventDefault();
                  router.push('/software/pk-finder');
                }}
              >
                <Card.Section>
                  <Image src="/pkfinder.webp" height={150} alt="PK Finder" />
                </Card.Section>
                <Text size="md" mt={10}>
                  PK Finder
                </Text>
                <Text size="sm" c="dimmed">
                  Easily recover your Windows Product Key with PK Finder. As soon as you open PK
                  Finder, you’ll be able to view your product key.
                </Text>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
              <Card
                mt={20}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                style={{ height: '100%' }}
                component="a"
                href="/software/deadlock"
                onClick={(e) => {
                  e.preventDefault();
                  router.push('/software/deadlock');
                }}
              >
                <Card.Section>
                  <Image src="/deadlock.webp" height={150} alt="DeadLock" />
                </Card.Section>
                <Text size="md" mt={10}>
                  DeadLock
                </Text>
                <Text size="sm" c="dimmed">
                  Unlock files and folders, take full ownership over them and remove, move or copy
                  them, free of charge! Windows Explorer integration is also possible.
                </Text>
              </Card>
            </Grid.Col>
          </Grid>

          <Group mt={50}>
            <Badge variant="filled" size="lg" leftSection={<IconTools size={12} />}>
              Utilities
            </Badge>
          </Group>
          <Grid>
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
              <Card
                mt={20}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                style={{ height: '100%' }}
                component="a"
                href="/software/opal"
                onClick={(e) => {
                  e.preventDefault();
                  router.push('/software/opal');
                }}
              >
                <Card.Section>
                  <Image src="/opal.webp" height={150} alt="Opal" />
                </Card.Section>
                <Text size="md" mt={10}>
                  Opal
                </Text>
                <Text size="sm" c="dimmed">
                  Opal is a free and open source music player that will help you relax. It runs on
                  Windows and Linux.
                </Text>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
              <Card
                mt={20}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                style={{ height: '100%' }}
                component="a"
                href="/software/aniview"
                onClick={(e) => {
                  e.preventDefault();
                  router.push('/software/aniview');
                }}
              >
                <Card.Section>
                  <Image src="/aniview.webp" height={150} alt="AniView" />
                </Card.Section>
                <Text size="md" mt={10}>
                  AniView
                </Text>
                <Text size="sm" c="dimmed">
                  AniView is a free and open source GIF image viewer. You can watch GIF images your
                  way, thanks to all the options that are available in AniView.
                </Text>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
              <Card
                mt={20}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                style={{ height: '100%' }}
                component="a"
                href="/software/deadpix"
                onClick={(e) => {
                  e.preventDefault();
                  router.push('/software/deadpix');
                }}
              >
                <Card.Section>
                  <Image src="/deadpix.webp" height={150} alt="DeadPix" />
                </Card.Section>
                <Text size="md" mt={10}>
                  DeadPix
                </Text>
                <Text size="sm" c="dimmed">
                  Fix dead or stuck pixels on your screen with just a couple of mouse clicks, free
                  of charge! DeadPix can fix stuck or dead pixels by rapidly cycling the color value
                  of the pixel.
                </Text>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
              <Card
                mt={20}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                style={{ height: '100%' }}
                component="a"
                href="https://compressr.codedead.com/"
                target="_blank"
              >
                <Card.Section>
                  <Image src="/compressr.webp" height={150} alt="Compressr" />
                </Card.Section>
                <Text size="md" mt={10}>
                  Compressr
                </Text>
                <Text size="sm" c="dimmed">
                  Compressr is a free and open source bulk image compressor / compression tool that
                  you can use in the browser.
                </Text>
              </Card>
            </Grid.Col>
          </Grid>
          <Group mt={50} />
        </Container>
      </Container>
    </>
  );
};

export default Software;
