import React, { useContext, useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeader';
import AlertDialog from '../../components/AlertDialog';
import { setPageIndex } from '../../reducers/MainReducer/Actions';
import { MainContext } from '../../contexts/MainContextProvider';

const ContactPage = () => {
  const [, dispatch] = useContext(MainContext);
  const [contactOpen, setContactOpen] = useState(false);

  /**
   * Open our GitHub page
   * @param e The event parameter
   */
  const openGithub = (e) => {
    if (e) e.preventDefault();
    window.open('https://github.com/codedead', '_blank');
  };

  /**
   * Hide the contact alert dialog
   */
  const onContactClose = () => {
    setContactOpen(false);
  };

  useEffect(() => {
    dispatch(setPageIndex(5));
  }, []);

  return (
    <Layout>
      <PageHeader title="Contact" subTitle="Have a question or need support?" />
      <Container maxWidth="md">
        {contactOpen
          ? (
            <AlertDialog
              title="Contact us"
              ok="OK"
              content={`Feel free to send an email to ${atob('c3VwcG9ydEBjb2RlZGVhZC5jb20=')}`}
              onClose={onContactClose}
            />
          )
          : null}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <Card style={{
              marginTop: 10,
              height: '100%',
            }}
            >
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  Report an issue
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Feel free to report issues on any of the GitHub repositories for our software
                  projects. You can also contact us directly by sending us an email.
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" onClick={openGithub}>
                  GitHub
                </Button>
                <Button variant="outlined" onClick={() => setContactOpen(true)}>
                  Contact
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Card style={{
              marginTop: 10,
              height: '100%',
            }}
            >
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  Other
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  If you have any questions, feel free to send us an email.
                  All advertisement offers will be discarded instantly without notification.
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" onClick={() => setContactOpen(true)}>
                  Contact
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default ContactPage;
