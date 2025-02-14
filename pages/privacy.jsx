import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import {
  IconBrandCloudflare,
  IconHttpQue,
  IconInfoCircle,
  IconLogs,
  IconMail,
} from '@tabler/icons-react';
import { Badge, Card, Container, Group, List, Text, Title } from '@mantine/core';
import { MainContext } from '../contexts/MainContextProvider';
import { setPageIndex } from '../reducers/MainReducer/Actions';
import classes from '../public/title.module.css';

const Privacy = () => {
  const [, d1] = useContext(MainContext);

  useEffect(() => {
    d1(setPageIndex(5));
  }, []);

  return (
    <>
      <Head>
        <title>Privacy | CodeDead</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content="Learn more about the privacy policy of CodeDead." />
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
            Privacy
          </Text>
        </Title>
        <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="md">
          What? Privacy? We don't know her.
        </Text>

        <Container mt={50}>
          <Group>
            <Badge variant="filled" size="lg" leftSection={<IconInfoCircle size={12} />}>
              General information
            </Badge>
          </Group>
          <Card shadow="sm" padding="lg" radius="md" mt={20} withBorder>
            <Text size="md">
              We’re all about transparency. That is why our applications are always open-source and
              compiled as-is. There are no hidden fees or trackers in our software. There’s a good
              reason for that too. Not only do we not want your money by means of adware or other
              dubious methods like including other products in our installers, we want you to know
              exactly what we know about you. Donations are still welcome though ;).
            </Text>
            <Text size="md" mt={10}>
              We’re not huge fans of collecting massive amounts of data on the people who use our
              applications and browse our website so we’re going to be brutally honest about the
              things we collect, by choice, and simply because of our server logs. Also: no, we do
              not incorporate any governmental back-doors.
            </Text>
          </Card>

          <Group mt={20}>
            <Badge variant="filled" size="lg" leftSection={<IconBrandCloudflare size={12} />}>
              Cloudflare Analytics
            </Badge>
          </Group>
          <Card shadow="sm" padding="lg" radius="md" mt={20} withBorder>
            <Text size="md">
              Cloudflare is an external party we use to collect information on the usage of this
              website. This data is kept privately (on our side) and does not get shared with anyone
              other than the owners of this website. This includes information such as:
            </Text>
            <List mt={10}>
              <List.Item>
                How you found our website (referral, direct, search, social media,…)
              </List.Item>
              <List.Item>Which pages are popular</List.Item>
              <List.Item>The duration of a visit</List.Item>
              <List.Item>General information about our demographic</List.Item>
              <List.Item>Etc.</List.Item>
            </List>
            <Text size="md" mt={10}>
              <a
                href="https://www.cloudflare.com/web-analytics/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Take a look at the Cloudflare website to find out more.
              </a>
            </Text>
            <Text size="md" mt={10}>
              We don’t export this data to any hard drives or sell it or anything. This information
              is quite useful for our applications in the following sense:
            </Text>
            <List mt={10}>
              <List.Item>
                Translations: if we notice that a certain country is using our site very frequently,
                it’s always a plus to have translations ready for that specific country
              </List.Item>
              <List.Item>
                Insight: We’d like to know how active our brand is on the internet and how people
                respond to us in general
              </List.Item>
            </List>
          </Card>

          <Group mt={20}>
            <Badge variant="filled" size="lg" leftSection={<IconLogs size={12} />}>
              Server logs
            </Badge>
          </Group>
          <Card shadow="sm" padding="lg" radius="md" mt={20} withBorder>
            <Text size="md">
              Server logs are data that is automatically collected by our server when you visit our
              website. This includes our software that can periodically check for updates. This
              includes information such as:
            </Text>
            <List mt={10}>
              <List.Item>The date and time of the visit</List.Item>
              <List.Item>The duration of the visit</List.Item>
              <List.Item>The URL’s that were consulted</List.Item>
              <List.Item>Your IP address</List.Item>
              <List.Item>
                Headers that get sent to us by your web browser such as the user agent, the protocol
                that was used etc.
              </List.Item>
            </List>
            <Text size="md" mt={10}>
              This information is mainly used to calculate statistics for our applications. It does
              not get used to personally identify anyone. This information does not get sold to any
              third parties or used for any other activities other than bragging about how many
              people downloaded our software to our friends and family.
            </Text>
            <Text size="md" mt={10}>
              Periodically, we also have to fight off attacks and hacks using these logs. This
              usually means blocking the malicious attacker as soon as possible. We’re gonna be
              honest here: if you attack us, there’s no question that your information will be
              reported to the right authorities instantly. If you have a problem with that, we
              suggest you do not launch any attacks against us.
            </Text>
          </Card>

          <Group mt={20}>
            <Badge variant="filled" size="lg" leftSection={<IconMail size={12} />}>
              E-mail
            </Badge>
          </Group>
          <Card shadow="sm" padding="lg" radius="md" mt={20} withBorder>
            <Text size="md">
              It’s quite possible that you have to send us a mail, contact us in order to get
              support or if you happen to have any questions. These emails are stored on our server
              and includes information about you such as your email address, your name and the email
              headers that are sent to us (that’s just the way the mail protocol works).
            </Text>

            <Text size="md" mt={10}>
              Your emails are not shared with third parties. They are not going to be sold to anyone
              and you will not be subscribed to any newsletters or the likes (who likes those,
              anyway?). Yes, we periodically clean out our mail boxes, so we can’t really say how
              long we keep the information for. Sometimes it’s only for a couple of minutes, other
              times it’s useful to keep the mails so that we can diagnose problems.
            </Text>
          </Card>

          <Group mt={20}>
            <Badge variant="filled" size="lg" leftSection={<IconHttpQue size={12} />}>
              That&apos;s it?
            </Badge>
          </Group>
          <Card shadow="sm" padding="lg" radius="md" mt={20} withBorder>
            <Text size="md">
              Yeah. That’s it. We’re not internet gangster collecting tons of e-mail addresses or
              data in order to send you spam or newsletters. That’s not how we want to work and
              behave. Our only source of income are your generous donations.
            </Text>

            <Text size="md" mt={10}>
              If you have any questions, you’re always free to contact us.
            </Text>
          </Card>
        </Container>
      </Container>
    </>
  );
};

export default Privacy;
