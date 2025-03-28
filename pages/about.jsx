import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import { IconInfoCircle, IconTerminal2, IconUsers } from '@tabler/icons-react';
import {
  Avatar,
  Badge,
  Card,
  Center,
  Container,
  Group,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import { MainContext } from '../contexts/MainContextProvider';
import { setPageIndex } from '../reducers/MainReducer/Actions';
import classes from '../public/title.module.css';

const About = () => {
  const [, d1] = useContext(MainContext);

  useEffect(() => {
    d1(setPageIndex(13));
  }, []);
  return (
    <>
      <Head>
        <title>About | CodeDead</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content="Learn more about CodeDead and the people behind it." />
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
            About
          </Text>
          {' CodeDead'}
        </Title>
        <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="md">
          Solving problems using software!
        </Text>

        <Container mt={50}>
          <Group>
            <Badge variant="filled" size="lg" leftSection={<IconInfoCircle size={12} />}>
              General information
            </Badge>
          </Group>
          <Card shadow="sm" padding="lg" radius="md" mt={20} withBorder>
            <Text size="lg">Our story</Text>
            <Text size="md">
              CodeDead is based in Belgium. We try to help solve problems by writing code. The
              concept and idea behind CodeDead started in december 2014 and we've been releasing
              free and open-source applications ever since!
            </Text>

            <Text size="lg" mt={10}>
              Our mission
            </Text>
            <Text size="md">
              Our mission is to release software that can help users achieve their goal. We will
              always aim to release high quality software and update our software if necessary.
            </Text>
          </Card>

          <Group mt={20}>
            <Badge variant="filled" size="lg" leftSection={<IconUsers size={12} />}>
              Team
            </Badge>
          </Group>
          <SimpleGrid cols={2}>
            <Card shadow="sm" padding="lg" radius="md" mt={20} withBorder>
              <Card.Section
                h={140}
                alt="Alessandro Mercier"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)',
                }}
              />
              <Avatar
                src="/favicon.svg"
                alt="Alessandro Mercier"
                size={80}
                radius={80}
                mx="auto"
                mt={-30}
                className={classes.avatar}
              />
              <Text size="lg" mt={10}>
                Alessandro Mercier
              </Text>
              <Text size="md">
                I was born in Gent, Belgium. I always enjoyed making programs, apps and websites and
                I decided to create this website so that other people can easily find and download
                our software.
              </Text>
            </Card>
            <Card shadow="sm" padding="lg" radius="md" mt={20} withBorder>
              <Card.Section
                h={140}
                alt="You"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=4096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                }}
              />
              <Avatar size={80} radius={80} mx="auto" mt={-30} className={classes.avatar}>
                <IconUsers size={60} />
              </Avatar>
              <Text size="lg" mt={10}>
                You
              </Text>
              <Text size="md">
                Throughout the years, there have been various people working on CodeDead projects.
                Translations, code contributions, donations, issue reporting and more. A big thank
                you to all the people who've made this a possibility!
              </Text>
            </Card>
          </SimpleGrid>

          <Group mt={20}>
            <Badge variant="filled" size="lg" leftSection={<IconTerminal2 size={12} />}>
              Open Source
            </Badge>
          </Group>
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            mt={20}
            withBorder
            component="a"
            href="https://github.com/CodeDead"
            target="_blank"
          >
            <Text size="md">
              Did you know that this website is completely open-source? You are free to edit, build
              and create pull requests to make this website even better!
            </Text>
          </Card>

          <Center mt={20}>
            <Text size="md" c="dimmed">
              {'Logo and favicon by '}
              <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer">
                icons8
              </a>
            </Text>
          </Center>
        </Container>
      </Container>
    </>
  );
};

export default About;
