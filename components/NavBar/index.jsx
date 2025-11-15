import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  IconArticle,
  IconChevronRight,
  IconCoin,
  IconHome,
  IconInfoCircle,
  IconLockSquare,
  IconMail,
  IconTool,
} from '@tabler/icons-react';
import { Badge, Box, Collapse, Divider, Group, ScrollArea } from '@mantine/core';
import { MainContext } from '../../contexts/MainContextProvider';
import classes from './navbar.module.css';

const NavBar = () => {
  const router = useRouter();
  const [state] = useContext(MainContext);
  const { pageIndex } = state;

  const [softwareOpened, setSoftwareOpened] = useState(false);

  return (
    <ScrollArea>
      <nav>
        <div className={classes.navbarMain}>
          <Link
            className={classes.link}
            href="/"
            data-active={pageIndex === 0 ? true : undefined}
            onClick={(event) => {
              event.preventDefault();
              router.push('/');
            }}
          >
            <IconHome className={classes.linkIcon} stroke={1.5} />
            <span>Home</span>
          </Link>
          <Group justify="space-between" gap={0}>
            <Box
              className={classes.link}
              data-active={pageIndex === 1 ? true : undefined}
              style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', flexGrow: 1 }}
              href="/software"
              onClick={(event) => {
                event.preventDefault();
                router.push('/software');
              }}
            >
              <IconTool variant="light" stroke={1.5} />
              <Box ml="md">Software</Box>
            </Box>
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              size={16}
              style={{ transform: softwareOpened ? 'rotate(-90deg)' : 'none', cursor: 'pointer' }}
              onClick={() => setSoftwareOpened((prev) => !prev)}
            />
          </Group>
          <Collapse in={softwareOpened}>
            <Link
              className={classes.link2}
              data-active={pageIndex === 2 ? true : undefined}
              href="/software/deadhash"
              ml={10}
              onClick={(event) => {
                event.preventDefault();
                router.push('/software/deadhash');
              }}
            >
              <span>DeadHash</span>
            </Link>
            <Link
              className={classes.link2}
              data-active={pageIndex === 3 ? true : undefined}
              href="/software/advanced-passgen"
              ml={10}
              onClick={(event) => {
                event.preventDefault();
                router.push('/software/advanced-passgen');
              }}
            >
              <span>Advanced PassGen</span>
            </Link>
            <Link
              className={classes.link2}
              data-active={pageIndex === 4 ? true : undefined}
              href="/software/advanced-portchecker"
              ml={10}
              onClick={(event) => {
                event.preventDefault();
                router.push('/software/advanced-portchecker');
              }}
            >
              <span>Advanced PortChecker</span>
              <Badge color="orange" style={{ float: 'right' }}>
                Updated
              </Badge>
            </Link>
            <Link
              className={classes.link2}
              data-active={pageIndex === 5 ? true : undefined}
              href="/software/memplus"
              ml={10}
              onClick={(event) => {
                event.preventDefault();
                router.push('/software/memplus');
              }}
            >
              <span>MemPlus</span>
            </Link>
            <Link
              className={classes.link2}
              data-active={pageIndex === 6 ? true : undefined}
              href="/software/pk-finder"
              ml={10}
              onClick={(event) => {
                event.preventDefault();
                router.push('/software/pk-finder');
              }}
            >
              <span>PK Finder</span>
            </Link>
            <Link
              className={classes.link2}
              data-active={pageIndex === 7 ? true : undefined}
              href="/software/deadlock"
              ml={10}
              onClick={(event) => {
                event.preventDefault();
                router.push('/software/deadlock');
              }}
            >
              <span>DeadLock</span>
            </Link>
            <Link
              className={classes.link2}
              data-active={pageIndex === 8 ? true : undefined}
              href="/software/opal"
              ml={10}
              onClick={(event) => {
                event.preventDefault();
                router.push('/software/opal');
              }}
            >
              <span>Opal</span>
              <Badge color="orange" style={{ float: 'right' }}>
                Updated
              </Badge>
            </Link>
            <Link
              className={classes.link2}
              data-active={pageIndex === 9 ? true : undefined}
              href="/software/aniview"
              ml={10}
              onClick={(event) => {
                event.preventDefault();
                router.push('/software/aniview');
              }}
            >
              <span>AniView</span>
            </Link>
            <Link
              className={classes.link2}
              data-active={pageIndex === 10 ? true : undefined}
              href="/software/deadpix"
              ml={10}
              onClick={(event) => {
                event.preventDefault();
                router.push('/software/deadpix');
              }}
            >
              <span>DeadPix</span>
            </Link>
            <Link className={classes.link2} href="https://compressr.codedead.com" ml={10}>
              <span>Compressr</span>
            </Link>
          </Collapse>
          <Link
            className={classes.link}
            href="/blog"
            data-active={pageIndex === 11 ? true : undefined}
            onClick={(event) => {
              event.preventDefault();
              router.push('/blog');
            }}
          >
            <IconArticle className={classes.linkIcon} stroke={1.5} />
            <span>Blog</span>
          </Link>

          <Divider my="md" />

          <Link
            className={classes.link}
            href="/donate"
            data-active={pageIndex === 12 ? true : undefined}
            onClick={(event) => {
              event.preventDefault();
              router.push('/donate');
            }}
          >
            <IconCoin className={classes.linkIcon} stroke={1.5} />
            <span>Donate</span>
          </Link>
          <Link
            className={classes.link}
            href="/about"
            data-active={pageIndex === 13 ? true : undefined}
            onClick={(event) => {
              event.preventDefault();
              router.push('/about');
            }}
          >
            <IconInfoCircle className={classes.linkIcon} stroke={1.5} />
            <span>About</span>
          </Link>

          <Divider my="md" />

          <Link
            className={classes.link}
            href="/privacy"
            data-active={pageIndex === 14 ? true : undefined}
            onClick={(event) => {
              event.preventDefault();
              router.push('/privacy');
            }}
          >
            <IconLockSquare className={classes.linkIcon} stroke={1.5} />
            <span>Privacy</span>
          </Link>
          <Link
            className={classes.link}
            href="/contact"
            data-active={pageIndex === 15 ? true : undefined}
            onClick={(event) => {
              event.preventDefault();
              router.push('/contact');
            }}
          >
            <IconMail className={classes.linkIcon} stroke={1.5} />
            <span>Contact</span>
          </Link>
        </div>
      </nav>
    </ScrollArea>
  );
};

export default NavBar;
