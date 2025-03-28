import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import {
  Button,
  Card,
  Container,
  Grid,
  Group,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import { MainContext } from '../contexts/MainContextProvider';
import { setPageIndex } from '../reducers/MainReducer/Actions';
import classes from '../public/title.module.css';

const Contact = () => {
  const [, d1] = useContext(MainContext);

  /**
   * Open the default email client to send an email to the support email address
   */
  const openContact = () => {
    window.location = 'mailto:support@codedead.com';
  };

  useEffect(() => {
    d1(setPageIndex(15));
  }, []);

  return (
    <>
      <Head>
        <title>Contact | CodeDead</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
            name="description"
            content="Contact CodeDead for support or to report an issue."
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
          >
            Contact
          </Text>
          {' us'}
        </Title>
        <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="md">
          Have a question or need support?
        </Text>
        <Container mt={50}>
          <Grid>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
              <Card shadow="sm" padding="lg" radius="md" withBorder style={{ height: '100%' }}>
                <Group justify="space-between" mb="xs">
                  <Text fw={500}>Report an issue</Text>
                </Group>

                <Text size="sm" c="dimmed" style={{ flexGrow: 1 }}>
                  Feel free to report issues on any of the GitHub repositories for our software
                  projects. You can also contact us directly by sending us an email.
                </Text>

                <SimpleGrid cols={2}>
                  <Button color="blue" mt="md" radius="md" fullWidth component="a" href="https://github.com/codedead" target="_blank">
                    GitHub
                  </Button>
                  <Button color="blue" mt="md" radius="md" fullWidth onClick={openContact}>
                    Contact
                  </Button>
                </SimpleGrid>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
              <Card shadow="sm" padding="lg" radius="md" withBorder style={{ height: '100%' }}>
                <Group justify="space-between" mb="xs">
                  <Text fw={500}>Other</Text>
                </Group>

                <Text size="sm" c="dimmed" style={{ flexGrow: 1 }}>
                  If you have any questions, feel free to send us an email. All advertisement offers
                  will be discarded instantly without notification or we might just waste your time too.
                </Text>

                <Button color="blue" fullWidth mt="md" radius="md" onClick={openContact}>
                  Contact
                </Button>
              </Card>
            </Grid.Col>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default Contact;
