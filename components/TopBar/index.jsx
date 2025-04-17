import React from 'react';
import { useRouter } from 'next/navigation';
import { IconSun, IconSunOff } from '@tabler/icons-react';
import {
  ActionIcon,
  Burger,
  Container,
  Divider,
  Drawer,
  Group,
  rem,
  ScrollArea,
  Title,
  Tooltip,
  useMantineColorScheme,
} from '@mantine/core';
import classes from './index.module.css';
import Link from 'next/link';

const TopBar = ({ opened, toggle }) => {
  const router = useRouter();
  const { toggleColorScheme } = useMantineColorScheme();

  /**
   * Change the color scheme
   */
  const changeTheme = () => {
    toggleColorScheme();
  };

  /**
   * Click the scroll link
   * @param event The event argument
   * @param link The link to navigate to
   */
  const clickScrollLink = (event, link) => {
    event.preventDefault();

    toggle();
    router.push(link);
  };

  return (
    <header>
      <Container className={classes.inner}>
        <Group gap={10} style={{ flexGrow: 1 }}>
          <Title
            order={2}
            style={{ cursor: 'pointer' }}
            onClick={(e) => {
              e.preventDefault();
              router.push('/');
            }}
          >
            CodeDead
          </Title>
        </Group>

        <Group gap={5} mr={10}>
          <Tooltip label="Light theme">
            <ActionIcon aria-label="Theme" variant="subtle" onClick={changeTheme} lightHidden>
              <IconSun style={{ width: '70%', height: '70%' }} stroke={1.5} />
            </ActionIcon>
          </Tooltip>

          <Tooltip label="Dark theme">
            <ActionIcon aria-label="Theme" variant="subtle" onClick={changeTheme} darkHidden>
              <IconSunOff style={{ width: '70%', height: '70%' }} stroke={1.5} />
            </ActionIcon>
          </Tooltip>
        </Group>

        <Burger
          aria-label="Burger menu"
          opened={opened}
          onClick={toggle}
          hiddenFrom="xs"
          size="sm"
        />
        <Drawer
          opened={opened}
          onClose={() => toggle()}
          size="100%"
          padding="md"
          title="Navigation"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />
            <Link href="/" className={classes.link} onClick={(e) => clickScrollLink(e, '/')}>
              Home
            </Link>
            <Link
              href="/software"
              className={classes.link}
              onClick={(e) => clickScrollLink(e, '/software')}
            >
              Software
            </Link>
            <Link
                href="/blog"
                className={classes.link}
                onClick={(e) => clickScrollLink(e, '/blog')}
            >
              Blog
            </Link>
            <Divider my="sm" />
            <Link
              href="/donate"
              className={classes.link}
              onClick={(e) => clickScrollLink(e, '/donate')}
            >
              Donate
            </Link>
            <Link
                href="/about"
                className={classes.link}
                onClick={(e) => clickScrollLink(e, '/about')}
            >
              About
            </Link>
            <Divider my="sm" />
            <Link
              href="/privacy"
              className={classes.link}
              onClick={(e) => clickScrollLink(e, '/privacy')}
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className={classes.link}
              onClick={(e) => clickScrollLink(e, '/contact')}
            >
              Contact
            </Link>
          </ScrollArea>
        </Drawer>
      </Container>
    </header>
  );
};

export default TopBar;
