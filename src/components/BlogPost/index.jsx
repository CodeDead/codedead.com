import React from 'react';
import { navigate } from 'gatsby';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const BlogPost = ({
  title, path, abstract, date,
}) => (
  <Card>
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
