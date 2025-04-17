import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { IconArrowLeft, IconInfoCircle, IconShieldCheckFilled } from '@tabler/icons-react';
import {
  Badge,
  Button,
  Card,
  Center,
  Container,
  Grid,
  Group,
  Table,
  Text,
  Title,
} from '@mantine/core';
import { MainContext } from '../../../contexts/MainContextProvider';
import { setPageIndex } from '../../../reducers/MainReducer/Actions';
import classes from '../../../public/title.module.css';

const AdvancedPortCheckerRequirements = () => {
  const [, d] = useContext(MainContext);
  const router = useRouter();

  useEffect(() => {
    d(setPageIndex(4));
  }, []);

  return (
    <>
      <Head>
        <title>Advanced PortChecker requirements | CodeDead</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content="Advanced PortChecker system requirements" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Container size="xl">
        <Center>
          <Button
            variant="subtle"
            mr={5}
            component="a"
            aria-label="Go back"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              router.back();
            }}
          >
            <IconArrowLeft size={14} />
          </Button>
          <Title className={classes.title} ta="center">
            <Text
              inherit
              variant="gradient"
              component="span"
              gradient={{ from: 'pink', to: 'yellow' }}
              alt="Advanced PortChecker"
            >
              Advanced
            </Text>
            {' PortChecker requirements'}
          </Title>
        </Center>
        <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="md">
          System requirements
        </Text>

        <Container mt={50} size="xl">
          <Group mt={20}>
            <Badge variant="filled" size="lg" leftSection={<IconInfoCircle size={12} />}>
              Info
            </Badge>
          </Group>

          <Card shadow="sm" padding="lg" radius="md" mt={20} withBorder>
            <Table.ScrollContainer type="native">
              <Table>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>#</Table.Th>
                    <Table.Th>Windows 10 and later (x64)</Table.Th>
                    <Table.Th>GNU/Linux (x64)</Table.Th>
                    <Table.Th>macOS (aarch64)</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  <Table.Tr>
                    <Table.Td>
                      <b>Disk space</b>
                    </Table.Td>
                    <Table.Td>At least 5MB</Table.Td>
                    <Table.Td>At least 85MB</Table.Td>
                    <Table.Td>At least 5MB</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>
                      <b>Memory</b>
                    </Table.Td>
                    <Table.Td>At least 30MB</Table.Td>
                    <Table.Td>At least 30MB</Table.Td>
                    <Table.Td>At least 30MB</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>
                      <b>Internet connection</b>
                    </Table.Td>
                    <Table.Td>Not required, except for the auto-update functionality</Table.Td>
                    <Table.Td>Not required, except for the auto-update functionality</Table.Td>
                    <Table.Td>Not required, except for the auto-update functionality</Table.Td>
                  </Table.Tr>
                </Table.Tbody>
              </Table>
            </Table.ScrollContainer>
          </Card>

          <Group mt={20}>
            <Badge variant="filled" size="lg" leftSection={<IconShieldCheckFilled size={12} />}>
              Malware scans
            </Badge>
          </Group>

          <Grid mt={20}>
            <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
              <Center>
                <Text size="lg">Windows</Text>
              </Center>
              <Button
                component="a"
                href="https://www.virustotal.com/gui/file/ab01b927f9b2273bdc661827690ca8f61c62ea7492f1aaa05710032629210fa2?nocache=1"
                target="_blank"
                rel="noreferrer noopener"
                fullWidth
                size="md"
              >
                Installer
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
              <Center>
                <Text size="lg">macOS</Text>
              </Center>
              <Button
                component="a"
                href="https://www.virustotal.com/gui/file/cc2f43c02e6b30dcb09841466ae2e06eba8499f2bf51634ad55acdaac8364bd3?nocache=1"
                target="_blank"
                rel="noreferrer noopener"
                fullWidth
                size="md"
              >
                dmg
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
              <Center>
                <Text size="lg">Linux</Text>
              </Center>
              <Button
                component="a"
                href=""
                target="_blank"
                rel="noreferrer noopener"
                fullWidth
                size="md"
              >
                AppImage
              </Button>
            </Grid.Col>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default AdvancedPortCheckerRequirements;
