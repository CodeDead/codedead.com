import React, { useContext, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeader';
import { MainContext } from '../../contexts/MainContextProvider';
import { setPageIndex } from '../../reducers/MainReducer/Actions';

const Privacy = () => {
  const [, dispatch] = useContext(MainContext);

  useEffect(() => {
    dispatch(setPageIndex(5));
  }, []);

  return (
    <Layout>
      <PageHeader title="Privacy" subTitle="What?" />
      <Container maxWidth="md" style={{ marginTop: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h5" color="textPrimary">
              Information
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Divider />
          </Grid>
        </Grid>
        <Card style={{ marginTop: 10 }}>
          <CardContent>
            <Typography gutterBottom>
              Let’s get started shall we. We’re all about transparency. That is why our applications
              are always open-source and compiled as-is. There are no hidden fee’s or trackers in
              our software. There’s a good reason for that too. Not only do we not want your money
              by means of adware or other dubious methods like including other products in our
              installers, we want you to know exactly what we know about you. Donations are still
              welcome though ;).
            </Typography>

            <Typography>
              We’re not huge fans of collecting massive amounts of data on the people who use our
              applications and browse our website so we’re going to be brutally honest about the
              things we collect, by choice, and simply because of our server logs. Also, no, we do
              not incorporate any governmental back-doors.
            </Typography>
          </CardContent>
        </Card>
        <Grid container spacing={2} style={{ marginTop: 20 }}>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h5" color="textPrimary">
              Google Analytics
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Divider />
          </Grid>
        </Grid>
        <Card style={{ marginTop: 10 }}>
          <CardContent>
            <Typography gutterBottom>
              This is an external party we use to collect information on the usage of this
              website. This data is kept privately (on our side) and does not get shared with anyone
              other than the owners of this website. This includes information such as:
            </Typography>
            <ul>
              <li>How you found our website (referral, direct, search, social media,…)</li>
              <li>Which pages are popular</li>
              <li>The duration of a visit</li>
              <li>General information about our demographic</li>
              <li>Etc.</li>
            </ul>

            <Typography gutterBottom>
              <a href="https://policies.google.com/" rel="noopener noreferrer" target="_blank">Take a look at google’s privacy policy to find out more.</a>
              We don’t export this data to any hard drives or sell it or anything. This information
              is quite useful for our applications in the following sense:
            </Typography>
            <ul>
              <li>
                Translations: if we notice that a certain country is using our site very frequently,
                it’s always a plus to have translations ready for that specific country
              </li>
              <li>
                Insight: We’d like to know how active our brand is on the internet and how people
                respond to us on Social Media
              </li>
            </ul>
          </CardContent>
        </Card>
        <Grid container spacing={2} style={{ marginTop: 20 }}>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h5" color="textPrimary">
              Server logs
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Divider />
          </Grid>
        </Grid>
        <Card style={{ marginTop: 10 }}>
          <CardContent>
            <Typography gutterBottom>
              Server logs are data that is automatically collected by our server when you visit our
              website. This includes our software that can periodically check for updates. This
              includes information such as:
            </Typography>
            <ul>
              <li>The date and time of the visit</li>
              <li>The duration of the visit</li>
              <li>The URL’s that were consulted</li>
              <li>Your IP address</li>
              <li>
                Headers that get sent to us by your web browser such as the user agent, the protocol
                that was used etc.
              </li>
            </ul>

            <Typography gutterBottom>
              This information is mainly used to calculate download statistics of our applications.
              It does not get used to personally identify anyone. This information does not get sold
              to any third parties or used for any other activities other than bragging about how
              many people downloaded our software to our friends and family.
            </Typography>

            <Typography gutterBottom>
              Periodically, we also have to fight off attacks and hacks using these logs. This
              usually means blocking the malicious attacker as soon as possible. We’re gonna be
              honest here: if you attack us, there’s no question that your information will be
              reported to the right authorities instantly. If you have a problem with that, we
              suggest you do not launch any attacks against us (Sorry, hackers, but we’re not
              sorry).
            </Typography>
          </CardContent>
        </Card>
        <Grid container spacing={2} style={{ marginTop: 20 }}>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h5" color="textPrimary">
              E-mail
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Divider />
          </Grid>
        </Grid>
        <Card style={{ marginTop: 10 }}>
          <CardContent>
            <Typography gutterBottom>
              It’s quite possible that you have to send us a mail, contact us in order to get
              support or if you happen to have any questions. These emails are stored on our server
              and includes information about you such as your email address, your name and the email
              headers that are sent to us (that’s just the way the mail protocol works).
            </Typography>

            <Typography>
              Your emails are not shared with third parties. They are not going to be sold to
              anyone and you will not be subscribed to any newsletters or the likes (who likes
              those, anyway?). Yes, we periodically clean out our mail boxes, so we can’t really
              say how long we keep the information for. Sometimes it’s only for a couple of
              minutes, other times it’s useful to keep the mails so that we can diagnose problems.
            </Typography>
          </CardContent>
        </Card>
        <Grid container spacing={2} style={{ marginTop: 20 }}>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h5" color="textPrimary">
              That&apos;s it?
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Divider />
          </Grid>
        </Grid>
        <Card style={{ marginTop: 10 }}>
          <CardContent>
            <Typography gutterBottom>
              Yeah. That’s it. We’re not internet gangster collecting tons of e-mail addresses or
              data in order to send you spam or newsletters. That’s not how we want to work and
              behave. Our only source of income are your generous donations.
            </Typography>

            <Typography>
              If you have any questions, you’re always free to contact us.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Layout>
  );
};

export default Privacy;
