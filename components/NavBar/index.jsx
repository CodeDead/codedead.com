import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import {
  IconArticle,
  IconCoin,
  IconHome,
  IconInfoCircle,
  IconLockSquare,
  IconMail,
  IconTool,
} from '@tabler/icons-react';
import { Divider, ScrollArea } from '@mantine/core';
import { MainContext } from '../../contexts/MainContextProvider';
import classes from './navbar.module.css';

const NavBar = () => {
  const router = useRouter();
  const [state, d1] = useContext(MainContext);
  const { pageIndex } = state;

  return (
    <ScrollArea>
      <nav>
        <div className={classes.navbarMain}>
          <a
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
          </a>
          <a
            className={classes.link}
            data-active={pageIndex === 1 ? true : undefined}
            href="/software"
            onClick={(event) => {
              event.preventDefault();
              router.push('/software');
            }}
          >
            <IconTool className={classes.linkIcon} stroke={1.5} />
            <span>Software</span>
          </a>
          <a
            className={classes.link}
            href="/blog"
            data-active={pageIndex === 2 ? true : undefined}
            onClick={(event) => {
              event.preventDefault();
              router.push('/blog');
            }}
          >
            <IconArticle className={classes.linkIcon} stroke={1.5} />
            <span>Blog</span>
          </a>

          <Divider my="md" />

          <a
            className={classes.link}
            href="/donate"
            data-active={pageIndex === 3 ? true : undefined}
            onClick={(event) => {
              event.preventDefault();
              router.push('/donate');
            }}
          >
            <IconCoin className={classes.linkIcon} stroke={1.5} />
            <span>Donate</span>
          </a>
          <a
            className={classes.link}
            href="/about"
            data-active={pageIndex === 4 ? true : undefined}
            onClick={(event) => {
              event.preventDefault();
              router.push('/about');
            }}
          >
            <IconInfoCircle className={classes.linkIcon} stroke={1.5} />
            <span>About</span>
          </a>

          <Divider my="md" />

          <a
            className={classes.link}
            href="/privacy"
            data-active={pageIndex === 5 ? true : undefined}
            onClick={(event) => {
              event.preventDefault();
              router.push('/privacy');
            }}
          >
            <IconLockSquare className={classes.linkIcon} stroke={1.5} />
            <span>Privacy</span>
          </a>
          <a
            className={classes.link}
            href="/contact"
            data-active={pageIndex === 6 ? true : undefined}
            onClick={(event) => {
              event.preventDefault();
              router.push('/contact');
            }}
          >
            <IconMail className={classes.linkIcon} stroke={1.5} />
            <span>Contact</span>
          </a>
        </div>
      </nav>
    </ScrollArea>
  );
};

export default NavBar;
