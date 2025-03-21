import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import {
  Badge,
  Button,
  Card,
  Container,
  Group,
  Popover,
  SimpleGrid,
  Table,
  Text,
  Title,
} from '@mantine/core';
import { MainContext } from '../contexts/MainContextProvider';
import { setPageIndex } from '../reducers/MainReducer/Actions';
import classes from '../public/title.module.css';
import {IconLink, IconBalloon, IconInfoCircle} from '@tabler/icons-react';

const Donate = () => {
  const [, d1] = useContext(MainContext);

  useEffect(() => {
    d1(setPageIndex(3));
  }, []);

  return (
    <>
      <Head>
        <title>Donate | CodeDead</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
            name="description"
            content="Donate to CodeDead to help us keep the lights on."
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
            Donate
          </Text>
        </Title>
        <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="md">
          Donate to help us keep the lights on.
        </Text>

        <Container mt={50}>
          <Group>
            <Badge variant="filled" size="lg" leftSection={<IconInfoCircle size={12} />}>
              General information
            </Badge>
          </Group>
          <Card shadow="sm" padding="lg" radius="md" mt={20} withBorder>
            <Text size="md">
              CodeDead is a passion project. We do not make any money from our software. We run most
              of the infrastructure on our own dime (and machines!) and we do not have any ads on our website or in
              our software. We do not have any sponsors or investors and we do not have any
              partnerships.
            </Text>

            <Text size="md" mt={10}>
              This means that we rely on donations to keep the lights on. All of the
              money that is donated to us will go towards the development of new and old projects,
              the maintenance of our servers, domain name fees and the occasional cup of coffee.
              Simply click the PayPal or EGLD button to start the donation process. PayPal allows
              you to donate using practically any payment method you like.
            </Text>

            <Text size="md" mt={10}>
              {
                'In addition, we are verified Brave creators, which means you can donate BAT directly to us via the Brave browser. '
              }
              <a
                href="https://www.youtube.com/watch?v=iJwLxeKxp3k"
                target="_blank"
                rel="noreferrer noopener"
              >
                You can find more information on how to donate BAT here.
              </a>
            </Text>
            <Text size="md" mt={10}>
              BAT donations will not appear in the hall of fame because it's impossible to retrace.
              However, if you have donated a certain amount of BAT, you can always contact us so we
              can add you to the hall of fame.
            </Text>
            <Text size="md" mt={10}>
              Don’t worry if you don’t immediately appear in the hall of fame. We’ll update the hall
              of fame within 3 days after your donation (but if we failed to do so, send us a mail to let us know!!).
            </Text>
            <Text size="md" mt={10}>
              In case of a EGLD donation, please email us if you’d like to appear in the hall of
              fame, otherwise it will show up as an anonymous donation.
            </Text>
            <Text size="md" mt={10}>
              Even if you don’t want to donate, simply spreading the word means a lot to us. Thank
              you for your interest in our software and for making the world a better place,
              together!
            </Text>
            <Text size="md" mt={10}>
              If you don’t want your name to appear in the hall of fame or would like to have it
              removed, feel free to let us know in the message of the donation or by sending us an
              e-mail.
            </Text>
          </Card>

          <Group mt={20}>
            <Badge variant="filled" size="lg" leftSection={<IconLink size={12} /> }>
              Links
            </Badge>
          </Group>
          <SimpleGrid cols={3} mt={20}>
            <Button
              variant="light"
              component="a"
              href="https://paypal.me/codedead"
              target="_blank"
              rel="noreferrer noopener"
            >
              Paypal
            </Button>
            <Button
              variant="light"
              component="a"
              href="https://github.com/sponsors/CodeDead"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub Sponsors
            </Button>
            <Popover position="bottom" withArrow shadow="md">
              <Popover.Target>
                <Button variant="light">EGDL</Button>
              </Popover.Target>
              <Popover.Dropdown>
                <Text size="md">
                  Our EGLD address is erd1rdc6w82ftjsyp5ethh0q56297fsef6w5ht75vyltcjh3ms220urqezdhd3
                </Text>
                <Text size="md">
                  {'Learn more about EGLD '}
                  <a href="https://multiversx.com/" target="_blank" rel="noreferrer noopener">
                    here
                  </a>
                  .
                </Text>
              </Popover.Dropdown>
            </Popover>
          </SimpleGrid>

          <Group mt={20}>
            <Badge variant="filled" size="lg" leftSection={<IconBalloon size={12} />}>
              Hall of fame
            </Badge>
          </Group>
          <Card shadow="sm" padding="lg" radius="md" mt={20} withBorder>
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Date (DD/MM/YYYY)</Table.Th>
                  <Table.Th>Name</Table.Th>
                  <Table.Th>Amount</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                <Table.Tr>
                  <Table.Td>13/12/2015</Table.Td>
                  <Table.Td>Jaschar Domann</Table.Td>
                  <Table.Td>€5.00</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>16/05/2017</Table.Td>
                  <Table.Td>
                    <a href="https://leomoon.com/" target="_blank" rel="noreferrer">
                      LeoMoon Studios
                    </a>
                  </Table.Td>
                  <Table.Td>€10.00</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>17/01/2019</Table.Td>
                  <Table.Td>John B.</Table.Td>
                  <Table.Td>€20.00</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>12/08/2019</Table.Td>
                  <Table.Td>Anonymous</Table.Td>
                  <Table.Td>€1.00</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>08/03/2021</Table.Td>
                  <Table.Td>Ron Rooker</Table.Td>
                  <Table.Td>€5.00</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>03/05/2022</Table.Td>
                  <Table.Td>Anonymous</Table.Td>
                  <Table.Td>0.04345 EGLD</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>03/03/2023</Table.Td>
                  <Table.Td>Anonymous</Table.Td>
                  <Table.Td>€1.73</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>08/10/2023</Table.Td>
                  <Table.Td>Anonymous</Table.Td>
                  <Table.Td>€2.00</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>09/12/2023</Table.Td>
                  <Table.Td>Anonymous</Table.Td>
                  <Table.Td>€3.27</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>18/06/2024 (Monthly)</Table.Td>
                  <Table.Td>
                    <a href="https://github.com/PandaRainbow" target="_blank" rel="noreferrer">
                      PandaRainbow
                    </a>
                  </Table.Td>
                  <Table.Td>$10.00 USD</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>21/10/2024 (Monthly)</Table.Td>
                  <Table.Td>
                    <a href="https://freesoft-100.com/" target="_blank" rel="noreferrer">
                      freesoft100
                    </a>
                  </Table.Td>
                  <Table.Td>$5.00 USD</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>14/02/2025 (Monthly)</Table.Td>
                  <Table.Td>
                    <a href="https://sanesecurityguy.com/" target="_blank" rel="noreferrer">
                      sanesecurityguy
                    </a>
                  </Table.Td>
                  <Table.Td>$5.00 USD</Table.Td>
                </Table.Tr>
              </Table.Tbody>
            </Table>
          </Card>
        </Container>
      </Container>
    </>
  );
};

export default Donate;
