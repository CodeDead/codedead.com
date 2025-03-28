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

const DeadPixRequirements = () => {
  const [, d] = useContext(MainContext);
  const router = useRouter();

  useEffect(() => {
    d(setPageIndex(10));
  }, []);

  return (
    <>
      <Head>
        <title>DeadPix requirements | CodeDead</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content="DeadPix system requirements" />
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
              alt="DeadPix"
            >
              DeadPix
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
                  <Table.Td>
                    Windows 7 SP1 (x86 and x64), Windows 8.1 (x86 and x64), Windows 10 (x86 and
                    x64), Windows Server 2008 R2 SP1 (x64), Windows Server 2012 (x64), Windows
                    Server 2012 R2 (x64), Windows Server 2016 (x64), Windows Server 2012 R2 (x64),
                    Windows Server 2019 (x64), Android
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    <b>Disk space</b>
                  </Table.Td>
                  <Table.Td>At least 35MB free disk space</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    <b>Memory</b>
                  </Table.Td>
                  <Table.Td>At least 40MB</Table.Td>
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
                      href="https://dotnet.microsoft.com/en-us/download/dotnet-framework/net48"
                      rel="noreferrer"
                      target="_blank"
                    >
                      .NET Framework 4.8
                    </a>
                  </Table.Td>
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
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
              <Button
                component="a"
                href="https://www.virustotal.com/gui/file/82400b0be59a9b83fc3b78332bbec98eeb3dff6be91aafd4e7cfa09e75820db5/detection"
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
                href="https://www.virustotal.com/gui/file/01a49424a25f439ca8a595d0c67e7a215f3b201bd469ea85554d8e42facfea4a/detection"
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

export default DeadPixRequirements;
