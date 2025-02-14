import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { IconArrowLeft } from '@tabler/icons-react';
import ReactMarkdown from 'react-markdown';
import { Button, Card, Center, Container, Divider, Image, Text, Title } from '@mantine/core';
import { MainContext } from '../../../../../contexts/MainContextProvider';
import { getAllPosts, getPostData } from '../../../../../lib/posts';
import { setPageIndex } from '../../../../../reducers/MainReducer/Actions';

export function getStaticPaths() {
  const paths = getAllPosts();

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const year = params.year;
  const month = params.month;
  const day = params.day;
  const id = params.id;

  const postData = getPostData(year, month, day, id);
  return {
    props: {
      postData,
    },
  };
}

const BlogPage = ({ postData }) => {
  const [, d1] = useContext(MainContext);
  const router = useRouter();

  useEffect(() => {
    d1(setPageIndex(-1));
  }, []);

  return (
    <>
      <Head>
        <title>{`${postData.title} | CodeDead`}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content={postData.abstract} />
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
          <Title order={1}>{postData.title.toString()}</Title>
        </Center>
        <Card shadow="sm" padding="lg" radius="md" mt={20} withBorder>
          <Text size="lg">
            {postData.author} | {postData.date} | {postData.categories}
          </Text>
          <Divider />
          <ReactMarkdown
            components={{
              img(props) {
                return <Image radius="md" alt="Blog image" fit="contain" {...props} />;
              },
            }}
          >
            {postData.content}
          </ReactMarkdown>
        </Card>
      </Container>
    </>
  );
};

export default BlogPage;
