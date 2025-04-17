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

const DeadLockRequirements = () => {
  const [, d] = useContext(MainContext);
  const router = useRouter();

  useEffect(() => {
    d(setPageIndex(7));
  }, []);

  return (
    <>
      <Head>
        <title>DeadLock requirements | CodeDead</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content="DeadLock system requirements" />
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
              alt="DeadLock"
            >
              DeadLock
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
                      Windows 10, Windows 7 Service Pack 1, Windows 8, Windows 8.1, Windows Server
                      2008 R2 SP1, Windows Server 2012, Windows Server 2012 R2, Windows Server 2016
                    </Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>
                      <b>Disk space</b>
                    </Table.Td>
                    <Table.Td>At least 20MB free disk space</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>
                      <b>Memory</b>
                    </Table.Td>
                    <Table.Td>At least 30MB</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>
                      <b>Internet connection</b>
                    </Table.Td>
                    <Table.Td>Not required, except for the auto-update functionality</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>
                      <b>Other</b>
                    </Table.Td>
                    <Table.Td>
                      <a
                        href="https://www.microsoft.com/en-us/download/details.aspx?id=49982"
                        rel="noreferrer"
                        target="_blank"
                      >
                        .NET Framework 4.6.1 or later
                      </a>
                    </Table.Td>
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
            <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
              <Button
                component="a"
                href="https://www.virustotal.com/gui/file/edfe8daab3ff2ac264a7cf44699b8d1e96de1cba9ec03eaba0ccb0c8e988bd00/detection"
                target="_blank"
                rel="noreferrer noopener"
                fullWidth
                size="md"
              >
                Installer
              </Button>
            </Grid.Col>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default DeadLockRequirements;
