import React, { useContext, useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import InfoIcon from '@material-ui/icons/Info';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import Divider from '@material-ui/core/Divider';
import AlertDialog from '../../components/AlertDialog';
import PageHeader from '../../components/PageHeader';
import Layout from '../../components/Layout';
import { MainContext } from '../../contexts/MainContextProvider';
import { setPageIndex } from '../../reducers/MainReducer/Actions';

const Donate = () => {
  const [, dispatch] = useContext(MainContext);
  const [egldOpen, setEgldOpen] = useState(false);

  useEffect(() => {
    dispatch(setPageIndex(3));
  }, []);

  return (
    <Layout>
      <PageHeader title="Donate" subTitle="Keep us going" />
      <Container maxWidth="md" style={{ marginTop: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h5" color="textPrimary">
              <InfoIcon color="inherit" />
              {' '}
              General
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Divider />
          </Grid>
        </Grid>
        <Card style={{ marginTop: 10 }}>
          <CardContent>
            <Typography>
              Donations are always welcome. All of the money that is donated to us will go towards
              the development of new and old projects, the maintenance of our servers, domain name
              fees and the occasional cup of coffee! Simply click the PayPal or EGLD button to
              start the donation process! PayPal allows you to donate using practically
              any payment method you like.
            </Typography>

            <Typography style={{ marginTop: 20 }}>
              In addition, we are verified Brave creators, which means you can donate BAT directly
              to us via the Brave browser.
              <a
                href="https://www.youtube.com/watch?v=iJwLxeKxp3k"
                rel="noopener noreferrer"
              >
                You can find more information on how to donate BAT here.
              </a>
            </Typography>

            <Typography style={{ marginTop: 20 }}>
              BAT donations will not appear in the hall of fame because it&apos;s impossible to
              retrace. However, if you have donated a certain amount of BAT, you can always contact
              us so we can add you to the hall of fame.
            </Typography>

            <Typography style={{ marginTop: 20 }}>
              Don’t worry if you don’t immediately appear in the hall of fame. We’ll update the
              hall of fame within 3 days after your donation (and if we haven’t, because we should
              have, send us a mail to let us know!!).
            </Typography>

            <Typography style={{ marginTop: 20 }}>
              In case of a EGLD donation, please email us if you’d
              like to appear in the hall of fame, otherwise it will show up as an anonymous
              donation.
            </Typography>

            <Typography style={{ marginTop: 20 }}>
              Even if you don’t want to donate, simply spreading the word means a lot to us. Thank
              you for your interest in our software and for making the world a better place,
              together!
            </Typography>

            <Typography style={{ marginTop: 20 }}>
              If you don’t want your name to appear in the hall of fame or would like to have it
              removed, feel free to let us know in the message of the donation or by sending us an
              e-mail.
            </Typography>
          </CardContent>
        </Card>

        <Grid container spacing={2} style={{ marginTop: 20 }}>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h5" color="textPrimary">
              <AttachMoneyIcon color="inherit" />
              {' '}
              Donate
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Divider />
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ marginTop: 10 }}>
          <Grid item xs={12} md={6} lg={6}>
            <Button
              variant="contained"
              color="primary"
              target="_blank"
              href="https://paypal.me/codedead"
              rel="noreferrer"
              style={{ width: '100%' }}
            >
              Donate via PayPal
            </Button>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Button
              variant="contained"
              color="primary"
              style={{ width: '100%' }}
              onClick={() => setEgldOpen(true)}
            >
              Donate EGLD
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ marginTop: 20 }}>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h5" color="textPrimary">
              <AccountBalanceIcon color="inherit" />
              {' '}
              Hall of fame
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Divider />
          </Grid>
        </Grid>

        <Card style={{ marginTop: 10 }}>
          <CardContent>
            <TableContainer>
              <Table>
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
                    <TableCell><a href="https://leomoon.com/" target="_blank" rel="noreferrer">LeoMoon Studios</a></TableCell>
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
                  <TableRow>
                    <TableCell>08/03/2021</TableCell>
                    <TableCell>Ron Rooker</TableCell>
                    <TableCell>€5.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>

        {egldOpen ? (
          <AlertDialog
            title="Donate"
            onClose={() => setEgldOpen(false)}
            content={(
              <>
                You can donate
                {' '}
                <a href="https://elrond.com" target="_blank" rel="noreferrer">EGLD</a>
                {' '}
                to the following address:
                erd1rdc6w82ftjsyp5ethh0q56297fsef6w5ht75vyltcjh3ms220urqezdhd3
              </>
            )}
            ok="OK"
          />
        ) : null}
      </Container>
    </Layout>
  );
};

export default Donate;
