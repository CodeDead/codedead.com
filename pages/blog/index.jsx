import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { Badge, Card, Container, Pagination, SimpleGrid, Text, Title } from '@mantine/core';
import { MainContext } from '../../contexts/MainContextProvider';
import { getAllPosts, getPostData } from '../../lib/posts';
import { setPageIndex } from '../../reducers/MainReducer/Actions';
import classes from '../../public/title.module.css';

const numberOfPostsPerPage = 12;

export const getStaticProps = () => {
  const posts = getAllPosts();
  // Sort posts by date
  const sortedPosts = posts.sort((a, b) => {
    const concatA = `${a.params.year}-${a.params.month}-${a.params.day}`;
    const concatB = `${b.params.year}-${b.params.month}-${b.params.day}`;

    if (concatA < concatB) {
      return 1;
    }
    return -1;
  });

  const requiredPosts = sortedPosts.slice(0, numberOfPostsPerPage);

  // Calculate the number of pages, rounded up to the nearest whole number
  const numberOfPages = Math.ceil(posts.length / numberOfPostsPerPage);

  const postData = [];
  requiredPosts.forEach((post) => {
    postData.push(
      getPostData(post.params.year, post.params.month, post.params.day, post.params.id)
    );
  });

  return {
    props: {
      posts: postData,
      numberOfPages,
    },
  };
};

const Blog = ({ posts, numberOfPages }) => {
  const [, d1] = useContext(MainContext);
  const router = useRouter();

  /**
   * Change the page
   * @param page The page to change to
   */
  const setPage = (page) => {
    router.push(`/blog/posts/${page - 1}`);
  };

  useEffect(() => {
    d1(setPageIndex(2));
  }, []);

  return (
    <>
      <Head>
        <title>Blog | CodeDead</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content="Read the latest blog posts from CodeDead." />
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
            Blog
          </Text>
        </Title>
        <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="md">
          News! News! Read all about it!
        </Text>
        <Container mt={30} size="xl">
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>
            {posts.map((e) => {
              return (
                <Card
                  key={e.id}
                  mt={20}
                  shadow="sm"
                  padding="lg"
                  radius="md"
                  withBorder
                  style={{ height: '100%' }}
                  component="a"
                  href={e.path}
                  onClick={(ev) => {
                    ev.preventDefault();
                    router.push(e.path);
                  }}
                >
                  <Text size="lg">{e.title}</Text>
                  <Badge color="orange" size="lg" radius="md">
                    {new Date(e.date).toLocaleDateString()}
                  </Badge>

                  <Text size="sm" c="dimmed" mt={20} style={{ height: '100%' }}>
                    {e.abstract}
                  </Text>

                  <Text size="sm" mt={20}>
                    By {e.author}
                  </Text>
                </Card>
              );
            })}
          </SimpleGrid>
        </Container>
        <Container mt={50}>
          <Pagination
            withEdges
            style={{ justifyContent: 'center', display: 'flex' }}
            total={numberOfPages}
            value={1}
            onChange={setPage}
          />
        </Container>
      </Container>
    </>
  );
};

export default Blog;
