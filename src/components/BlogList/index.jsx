import React from 'react';
import Grid from '@mui/material/Grid2';
import BlogPost from '../BlogPost';

const BlogList = ({ blogPosts}) => (
  <Grid container spacing={2}>
    {blogPosts && blogPosts.map((item) => {
      const post = item.node.frontmatter;
      return (
        <Grid size={12} key={post.path}>
          <BlogPost
            title={post.title}
            abstract={post.abstract}
            path={post.path}
            date={post.date}
          />
        </Grid>
      );
    })}
  </Grid>
);

export default BlogList;
