import React, { useContext, useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import InfoIcon from '@mui/icons-material/Info';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Divider from '@mui/material/Divider';
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
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Typography variant="h5" color="textPrimary">
              <InfoIcon color="inherit" />
              {' General'}
            </Typography>
          </Grid>
          <Grid size={12}>
            <Divider />
          </Grid>
        </Grid>
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography>
              Donations are always welcome. All of the money that is donated to us will go towards
              the development of new and old projects, the maintenance of our servers, domain name
              fees and the occasional cup of coffee! Simply click the PayPal or EGLD button to
              start the donation process! PayPal allows you to donate using practically
              any payment method you like.
            </Typography>

            <Typography sx={{ mt: 3 }}>
              In addition, we are verified Brave creators, which means you can donate BAT directly
              to us via the Brave browser.
              <a
                href="https://www.youtube.com/watch?v=iJwLxeKxp3k"
                rel="noopener noreferrer"
              >
                You can find more information on how to donate BAT here.
              </a>
            </Typography>

            <Typography sx={{ mt: 3 }}>
              BAT donations will not appear in the hall of fame because it&apos;s impossible to
              retrace. However, if you have donated a certain amount of BAT, you can always contact
              us so we can add you to the hall of fame.
            </Typography>

            <Typography sx={{ mt: 3 }}>
              Don’t worry if you don’t immediately appear in the hall of fame. We’ll update the
              hall of fame within 3 days after your donation (and if we haven’t, because we should
              have, send us a mail to let us know!!).
            </Typography>

            <Typography sx={{ mt: 3 }}>
              In case of a EGLD donation, please email us if you’d
              like to appear in the hall of fame, otherwise it will show up as an anonymous
              donation.
            </Typography>

            <Typography sx={{ mt: 3 }}>
              Even if you don’t want to donate, simply spreading the word means a lot to us. Thank
              you for your interest in our software and for making the world a better place,
              together!
            </Typography>

            <Typography sx={{ mt: 3 }}>
              If you don’t want your name to appear in the hall of fame or would like to have it
              removed, feel free to let us know in the message of the donation or by sending us an
              e-mail.
            </Typography>
          </CardContent>
        </Card>

        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid size={12}>
            <Typography variant="h5" color="textPrimary">
              <AttachMoneyIcon color="inherit" />
              {' Donate'}
            </Typography>
          </Grid>
          <Grid size={12}>
            <Divider />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid size={{xs: 12, md: 4, lg: 4}}>
            <Button
              variant="contained"
              color="primary"
              target="_blank"
              href="https://paypal.me/codedead"
              rel="noreferrer"
              fullWidth
            >
              Donate via PayPal
            </Button>
          </Grid>
          <Grid size={{xs: 12, md: 4, lg: 4}}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              target="_blank"
              rel="noreferrer"
              href="https://github.com/sponsors/CodeDead"
            >
              GitHub Sponsor
            </Button>
          </Grid>
          <Grid size={{xs: 12, md: 4, lg: 4}}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => setEgldOpen(true)}
            >
              Donate EGLD
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid size={12}>
            <Typography variant="h5" color="textPrimary">
              <AccountBalanceIcon color="inherit" />
              {' Hall of fame'}
            </Typography>
          </Grid>
          <Grid size={12}>
            <Divider />
          </Grid>
        </Grid>

        <Card sx={{ mt: 3 }}>
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
                  <TableRow>
                    <TableCell>03/05/2022</TableCell>
                    <TableCell>Anonymous</TableCell>
                    <TableCell>0.04345 EGLD</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>03/03/2023</TableCell>
                    <TableCell>Anonymous</TableCell>
                    <TableCell>€1.73</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>08/10/2023</TableCell>
                    <TableCell>Anonymous</TableCell>
                    <TableCell>€2.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>09/12/2023</TableCell>
                    <TableCell>Anonymous</TableCell>
                    <TableCell>€3.27</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>18/06/2024</TableCell>
                    <TableCell><a href="https://github.com/PandaRainbow" target="_blank" rel="noreferrer">PandaRainbow</a></TableCell>
                    <TableCell>$10.00</TableCell>
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
                <a href="https://multiversx.com/" target="_blank" rel="noreferrer">EGLD</a>
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
