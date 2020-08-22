import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 2),
  },
}));

const PageHeader = ({ title, subTitle }) => {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          {subTitle}
        </Typography>
      </Container>
    </div>
  );
};

export default PageHeader;
