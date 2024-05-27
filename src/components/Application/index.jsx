import React from 'react';
import { navigate } from 'gatsby';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import { GatsbyImage } from 'gatsby-plugin-image';

const Application = ({
  name, description, url, image, newTab,
}) => {
  /**
   * Go to the designated URL
   */
  const goToUrl = () => {
    if (newTab) {
      window.open(url, '_blank');
      return;
    }
    navigate(url);
  };

  return (
    <Card style={{ height: '100%' }}>
      <CardActionArea
        onClick={goToUrl}
        style={{ height: '100%' }}
      >
        <CardMedia
          title={name}
        >
          <GatsbyImage alt={name} image={image} style={{ width: '100%' }} />
        </CardMedia>
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
