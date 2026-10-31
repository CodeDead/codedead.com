import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { IconArrowLeft, IconInfoCircle, IconShieldCheckFilled } from '@tabler/icons-react';
import { Badge, Button, Card, Center, Container, Grid, Group, Table, Text, Title } from '@mantine/core';
import { MainContext } from '../../../contexts/MainContextProvider';
import { setPageIndex } from '../../../reducers/MainReducer/Actions';
import classes from '../../../public/title.module.css';


const OpalRequirements = () => {
  const [, d] = useContext(MainContext);
  const router = useRouter();

  useEffect(() => {
    d(setPageIndex(8));
  }, []);

  return (
    <>
      <Head>
        <title>Opal requirements | CodeDead</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content="Opal system requirements" />
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
              alt="Opal"
            >
              Opal
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
            <Table.ScrollContainer type="native">
              <Table>
                <Table.Tbody>
                  <Table.Tr>
                    <Table.Td>
                      <b>Operating system</b>
                    </Table.Td>
                    <Table.Td>
                      Windows 7 and later (x64), GNU/Linux (x64), macOS (x64)(arm64)
                    </Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>
                      <b>Disk space</b>
                    </Table.Td>
                    <Table.Td>At least 150MB</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>
                      <b>Memory</b>
                    </Table.Td>
                    <Table.Td>At least 100MB</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>
                      <b>Internet connection</b>
                    </Table.Td>
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
                href="https://www.virustotal.com/gui/file/8e85e3d516df78d1023e10d661f79d885481970006eaf030b6115733d3db66ae?nocache=1"
                target="_blank"
                rel="noreferrer noopener"
                fullWidth
                size="md"
              >
                Installer
              </Button>
              <Button
                component="a"
                href="https://www.virustotal.com/gui/file/01030a5b01af842249aeb920ebd68c8e70483acb5d833917f14f0336d7dae94d?nocache=1"
                target="_blank"
                rel="noreferrer noopener"
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
                href="https://www.virustotal.com/gui/file/786e78bf685eb6e48d7c4037a3482de7fe5154a82a57e9eed08ba0686e733501?nocache=1"
                target="_blank"
                rel="noreferrer noopener"
                fullWidth
                size="md"
              >
                AppImage
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
              <Center>
                <Text size="lg">macOS</Text>
              </Center>
              <Button
                component="a"
                href="https://www.virustotal.com/gui/file/a8babcdcd768528aeb79cbaf34d803f378ba905075452363fd970eadf28873aa?nocache=1"
                target="_blank"
                rel="noreferrer noopener"
                fullWidth
                size="md"
              >
                DMG
              </Button>
            </Grid.Col>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default OpalRequirements;
