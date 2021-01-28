import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import { navigate } from 'gatsby';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

const Application = ({ name, description, url }) => (
  <Card style={{ height: '100%' }}>
    <CardActionArea
      style={{ height: '100%' }}
      onClick={() => navigate(url)}
    >
      <CardContent>
        <Typography variant="h6" color="textPrimary" paragraph>
          {name}
        </Typography>
        <Typography color="textSecondary" paragraph>
          {description}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default Application;
