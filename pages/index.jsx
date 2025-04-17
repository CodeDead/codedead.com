import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { IconInfoCircle, IconLink, IconTool } from '@tabler/icons-react';
import {
  Badge,
  Button,
  Card,
  Container,
  Group,
  Image,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import { MainContext } from '../contexts/MainContextProvider';
import { getLastPosts } from '../lib/posts';
import { setPageIndex } from '../reducers/MainReducer/Actions';
import classes from '../public/title.module.css';

export async function getStaticProps() {
  const allPostsData = getLastPosts(1);
  return {
    props: {
      allPostsData,
    },
  };
}

const HomePage = ({ allPostsData }) => {
  const [, d1] = useContext(MainContext);
  const router = useRouter();

  useEffect(() => {
    d1(setPageIndex(0));
  }, []);

  return (
    <>
      <Head>
        <title>Welcome | CodeDead</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="Welcome to CodeDead, where we solve problems using software."
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Container size="xl">
        <Title className={classes.title} ta="center">
          {'Welcome to '}
          <Text
            inherit
            variant="gradient"
            component="span"
            gradient={{ from: 'pink', to: 'yellow' }}
          >
            CodeDead
          </Text>
        </Title>
        <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="md">
          CodeDead provides free and open-source applications to make your life easier.
        </Text>

        <Container mt={50}>
          <Group>
            <Badge variant="filled" size="lg" leftSection={<IconTool size={12} />}>
              Highlighted tools
            </Badge>
          </Group>

          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            mt={20}
            withBorder
            component="a"
            href="/software/opal"
            onClick={(e) => {
              e.preventDefault();
              router.push('/software/opal');
            }}
          >
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
              <Image radius="md" src="/opal.webp" alt="Opal" fit="contain" />

              <div>
                <Group justify="space-between" mb="xs">
                  <Text size="lg" fw={500}>
                    Opal
                  </Text>
                </Group>

                <Text c="dimmed">
                  A free and open source music player that will help you relax. Opal has 30+ sounds
                  available that will help you relax. It runs on Windows and Linux.
                </Text>
              </div>
            </SimpleGrid>
          </Card>

          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            mt={20}
            withBorder
            component="a"
            href="/software/memplus"
            onClick={(e) => {
              e.preventDefault();
              router.push('/software/memplus');
            }}
          >
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
              <Image radius="md" src="/memplus.webp" alt="MemPlus" fit="contain" />

              <div>
                <Group justify="space-between" mb="xs">
                  <Text size="lg" fw={500}>
                    MemPlus
                  </Text>
                </Group>

                <Text c="dimmed">
                  MemPlus can be used to reduce the amount of RAM that is being used by applications
                  on your system. In essence, freeing up memory so that more memory is available to
                  you!
                </Text>
              </div>
            </SimpleGrid>
          </Card>

          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            mt={20}
            withBorder
            component="a"
            href="/software/advanced-passgen"
            onClick={(e) => {
              e.preventDefault();
              router.push('/software/advanced-passgen');
            }}
          >
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
              <Image
                radius="md"
                src="/advanced%20passgen.webp"
                alt="Advanced PassGen"
                fit="contain"
              />

              <div>
                <Group justify="space-between" mb="xs">
                  <Text size="lg" fw={500}>
                    Advanced PassGen
                  </Text>
                </Group>

                <Text c="dimmed">
                  Easily generate thousands of passwords using the options that are available in
                  Advanced PassGen. You can even go so far as to define your own character set that
                  Advanced PassGen can use to generate passwords!
                </Text>
              </div>
            </SimpleGrid>
          </Card>

          <Button
            mt={20}
            variant="outline"
            component="a"
            href="/software"
            leftSection={<IconLink size={20} />}
            onClick={(e) => {
              e.preventDefault();
              router.push('/software');
            }}
          >
            Check out our software
          </Button>

          <Group mt={20}>
            <Badge variant="filled" size="lg" leftSection={<IconInfoCircle size={12} />}>
              Latest news
            </Badge>
          </Group>
          <section>
            {allPostsData.map((e) => {
              return (
                <Card
                  key={e.id}
                  mt={20}
                  shadow="sm"
                  padding="lg"
                  radius="md"
                  withBorder
                  style={{ height: '100%' }}
                  component="a"
                  href={e.path}
                  onClick={(ev) => {
                    ev.preventDefault();
                    router.push(e.path);
                  }}
                >
                  <Text size="lg">{e.title}</Text>
                  <Badge color="orange" size="md" radius="md">
                    {new Date(e.date).toLocaleDateString()}
                  </Badge>

                  <Text size="sm" c="dimmed" mt={20}>
                    {e.abstract}
                  </Text>

                  <Text size="sm" mt={20}>
                    By {e.author}
                  </Text>
                </Card>
              );
            })}
          </section>
          <Button
            variant="outline"
            component="a"
            href="/blog"
            mt={20}
            leftSection={<IconLink size={20} />}
            onClick={(ev) => {
              ev.preventDefault();
              router.push('/blog');
            }}
          >
            Check out our blog
          </Button>
        </Container>
      </Container>
    </>
  );
};

export default HomePage;
