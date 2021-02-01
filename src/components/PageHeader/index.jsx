import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import BackButton from '../BackButton';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 2),
  },
}));

const PageHeader = ({ title, subTitle, backButton }) => {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
          {backButton
            ? (<BackButton />)
            : null}
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
