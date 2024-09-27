import React from 'react';
import { navigate } from 'gatsby';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const BlogPost = ({
  title, path, abstract, date,
}) => (
  <Card elevation={2}>
    <CardActionArea onClick={() => navigate(path)}>
      <CardHeader title={title} subheader={<i>{date}</i>} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {abstract}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default BlogPost;
