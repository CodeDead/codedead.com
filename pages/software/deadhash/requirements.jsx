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

const DeadHashRequirements = () => {
  const [, d] = useContext(MainContext);
  const router = useRouter();

  useEffect(() => {
    d(setPageIndex(2));
  }, []);

  return (
    <>
      <Head>
        <title>DeadHash requirements | CodeDead</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content="DeadHash system requirements" />
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
              alt="DeadHash"
            >
              DeadHash
            </Text>
            {' requirements'}
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
            <Table>
              <Table.Tbody>
                <Table.Tr>
                  <Table.Td>
                    <b>Operating system</b>
                  </Table.Td>
                  <Table.Td>Windows 7 and later (x64), GNU/Linux (x64)</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    <b>Disk space</b>
                  </Table.Td>
                  <Table.Td>At least 260MB</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    <b>Memory</b>
                  </Table.Td>
                  <Table.Td>At least 60MB</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    <b>Internet connection</b>
                  </Table.Td>
                  <Table.Td>Not required, except for the auto-update functionality</Table.Td>
                </Table.Tr>
              </Table.Tbody>
            </Table>
          </Card>

          <Group mt={20}>
            <Badge variant="filled" size="lg" leftSection={<IconShieldCheckFilled size={12} />}>
              Malware scans
            </Badge>
          </Group>

          <Grid mt={20}>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }} visibleFrom="md">
              <Center>
                <Text size="lg">Windows</Text>
              </Center>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }} visibleFrom="md">
              <Text size="lg">
                <Center>Linux</Center>
              </Text>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
              <Button
                component="a"
                href="https://www.virustotal.com/gui/file/f827527afe4c398518404ac782b3038aa7721642272d298a9e4f8b23f586d5d0?nocache=1"
                target="_blank"
                rel="noreferrer noopener"
                fullWidth
                size="md"
              >
                Installer
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
              <Button
                component="a"
                href="https://www.virustotal.com/gui/file/d4080228e08a727d2145d443aec8b339b7f2088e35844f15690f3bc7714eea4e?nocache=1"
                target="_blank"
                rel="noreferrer noopener"
                fullWidth
                size="md"
              >
                AppImage
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
              <Button
                component="a"
                href="https://www.virustotal.com/gui/file/7699b53825075198bd440eeb771a71aede2cb837874a08f97788831e84389369?nocache=1"
                target="_blank"
                rel="noreferrer noopener"
                fullWidth
                size="md"
              >
                Portable
              </Button>
            </Grid.Col>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default DeadHashRequirements;
