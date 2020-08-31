import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import InfoIcon from '@material-ui/icons/Info';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AlertDialog from '../../components/AlertDialog';
import PageHeader from '../../components/PageHeader';
import Layout from '../../components/Layout';

const Donate = () => {
  const [btcOpen, setBtcOpen] = useState(false);

  return (
    <Layout>
      <PageHeader title="Donate" subTitle="Keep us going" />
      <Container maxWidth="md" style={{ marginTop: 10 }}>
        <Typography variant="h5" color="textPrimary">
          <InfoIcon color="inherit" />
          {' '}
          General
        </Typography>
        <Card style={{ marginTop: 10 }}>
          <CardContent>
            <Typography>
              Donations are always welcome. All of the money that is donated to us will go towards
              the development of new and old projects, the maintenance of our servers, domain name
              fees and the occasional cup of coffee! Simply click the PayPal or BTC button to start
              the donation process! PayPal allows you to donate using practically any payment method
              you like. Brave tips are also welcome!
              <br />
              <br />
              Don’t worry if you don’t immediately appear in the hall of fame. We’ll update the hall
              of fame within 3 days after your donation (and if we haven’t, because we should have,
              send us a mail to let us know!!). In case of a BTC donation, please email us if you’d
              like to appear in the hall of fame, otherwise it will show up as an anonymous
              donation.
              <br />
              <br />
              Even if you don’t want to donate, simply spreading the word means a lot to us. Thank
              you for your interest in our software and for making the world a better place,
              together!
              <br />
              <br />
              If you don’t want your name to appear in the hall of fame or would like to have it
              removed, feel free to let us know in the message of the donation or by sending us an
              e-mail.
            </Typography>
          </CardContent>
        </Card>

        <Typography variant="h5" color="textPrimary" style={{ marginTop: 10 }}>
          <AccountBalanceIcon color="inherit" />
          {' '}
          Hall of fame
        </Typography>

        <Card style={{ marginTop: 10 }}>
          <CardContent>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>13/12/2015</TableCell>
                  <TableCell>Jaschar Domann</TableCell>
                  <TableCell>€5.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>16/05/2017</TableCell>
                  <TableCell><a href="https://leomoon.com/">LeoMoon Studios</a></TableCell>
                  <TableCell>€10.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>17/01/2019</TableCell>
                  <TableCell>John B.</TableCell>
                  <TableCell>€20.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>12/08/2019</TableCell>
                  <TableCell>Anonymous</TableCell>
                  <TableCell>€1.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {btcOpen ? (
          <AlertDialog
            title="Donate"
            onClose={() => setBtcOpen(false)}
            content="You can donate using this BTC address: 3PFD5MqnVeftqKiqhDVYodyk2izxWDLLMs"
            ok="OK"
          />
        ) : null}

        <Typography variant="h5" color="textPrimary" style={{ marginTop: 10 }}>
          <AttachMoneyIcon color="inherit" />
          {' '}
          Donate
        </Typography>

        <Grid container spacing={2} style={{ marginTop: 10 }}>
          <Grid item xs={12} md={6} lg={6}>
            <Button
              variant="outlined"
              color="primary"
              target="_blank"
              href="https://paypal.me/codedead"
              style={{ width: '100%' }}
            >
              Donate via PayPal
            </Button>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Button
              variant="outlined"
              color="primary"
              style={{ width: '100%' }}
              onClick={() => setBtcOpen(true)}
            >
              Donate BTC
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Donate;
