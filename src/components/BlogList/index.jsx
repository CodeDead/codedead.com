import React from 'react';
import Grid from '@material-ui/core/Grid';
import BlogPost from '../BlogPost';

const BlogList = ({ blogPosts, style }) => (
  <Grid container spacing={2} style={style}>
    {blogPosts && blogPosts.map((item) => {
      const post = item.node.frontmatter;
      return (
        <Grid item xs={12} md={12} lg={12} key={post.path}>
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
