import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import { navigate } from 'gatsby';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { CardHeader } from '@material-ui/core';

const Application = ({ name, description, url }) => {
  /**
   * Go to the designated URL
   */
  const goToUrl = () => {
    navigate(url);
  };

  return (
    <Card style={{ height: '100%' }}>
      <CardActionArea
        onClick={goToUrl}
        style={{ height: '100%' }}
      >
        <CardHeader
          title={name}
        />
        <CardContent>
          <Typography color="textSecondary" paragraph>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Application;
