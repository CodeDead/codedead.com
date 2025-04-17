import React from 'react';
import { IconBrandBluesky, IconBrandGithub, IconBrandReddit } from '@tabler/icons-react';
import { ActionIcon, Container, Group } from '@mantine/core';
import classes from './index.module.css';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        Copyright &copy; 2025 CodeDead
        <Group gap={0} justify="flex-end" wrap="nowrap">
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            aria-label="Bluesky"
            onClick={() => window.open('https://bsky.app/profile/codedead.com', '_blank')}
          >
            <IconBrandBluesky size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            aria-label="Reddit"
            variant="subtle"
            onClick={() => window.open('https://www.reddit.com/r/CodeDead/', '_blank')}
          >
            <IconBrandReddit size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            aria-label="GitHub"
            variant="subtle"
            onClick={() => window.open('https://github.com/CodeDead', '_blank')}
          >
            <IconBrandGithub size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
};

export default Footer;
