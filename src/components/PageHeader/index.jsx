import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import BackButton from '../BackButton';
import SEO from '../SEO';

const PageHeader = ({ title, subTitle, backButton }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        padding: theme.spacing(4, 0, 2),
      }}
    >
      <SEO title={title} description={subTitle} />
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
          {backButton
            ? (<BackButton />)
            : null}
          {title}
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          {subTitle}
        </Typography>
      </Container>
    </Box>
  );
};

export default PageHeader;
