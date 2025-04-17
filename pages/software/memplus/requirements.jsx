import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { IconArrowLeft, IconInfoCircle, IconShieldCheckFilled } from '@tabler/icons-react';
import { Badge, Button, Card, Center, Container, Grid, Group, Table, Text, Title } from '@mantine/core';
import { MainContext } from '../../../contexts/MainContextProvider';
import { setPageIndex } from '../../../reducers/MainReducer/Actions';
import classes from '../../../public/title.module.css';


const MemPlusRequirements = () => {
  const [, d] = useContext(MainContext);
  const router = useRouter();

  useEffect(() => {
    d(setPageIndex(5));
  }, []);

  return (
    <>
      <Head>
        <title>MemPlus requirements | CodeDead</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content="MemPlus system requirements" />
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
              alt="MemPlus"
            >
              MemPlus
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
                      Windows 7 SP1 (x86 and x64), Windows 8.1 (x86 and x64), Windows 10 (x86 and
                      x64), Windows Server 2008 R2 SP1 (x64), Windows Server 2012 (x64), Windows
                      Server 2012 R2 (x64), Windows Server 2016 (x64)
                    </Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>
                      <b>Disk space</b>
                    </Table.Td>
                    <Table.Td>At least 40MB free disk space</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>
                      <b>Memory</b>
                    </Table.Td>
                    <Table.Td>At least 80MB</Table.Td>
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
            </Table.ScrollContainer>
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
                href="https://www.virustotal.com/gui/file/362dd5565951231aa4b785a91b364bc819549e0ed8c9ce20d06976848d370ac3/detection"
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
                href="https://www.virustotal.com/gui/file/854aaa86935cab36f25ee64576ee0883d685662feeae1fd4cb9e9d48fc4f8d71/detection"
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

export default MemPlusRequirements;
