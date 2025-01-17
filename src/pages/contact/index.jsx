import React, { useContext, useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
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
    dispatch(setPageIndex(6));
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
              content={(
                <div>
                  Feel free to send an email to
                  {' '}
                  <a href="mailto:support@codedead.com">support@codedead.com</a>
                </div>
              )}
              onClose={onContactClose}
            />
          )
          : null}
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6, lg: 6 }}>
            <Card sx={{
              mt: 5,
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
                <Button variant="outlined" onClick={openGithub} sx={{ mb: 1 }}>
                  GitHub
                </Button>
                <Button variant="outlined" onClick={() => setContactOpen(true)} sx={{ mb: 1 }}>
                  Contact
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 6 }}>
            <Card sx={{
              mt: 5,
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
                <Button variant="outlined" onClick={() => setContactOpen(true)} sx={{ mb: 1 }}>
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
