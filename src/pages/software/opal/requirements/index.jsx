import React, { useContext, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Button, Card } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import InfoIcon from '@mui/icons-material/Info';
import CardContent from '@mui/material/CardContent';
import TableContainer from '@mui/material/TableContainer';
import PageHeader from '../../../../components/PageHeader';
import Layout from '../../../../components/Layout';
import { MainContext } from '../../../../contexts/MainContextProvider';
import { setPageIndex } from '../../../../reducers/MainReducer/Actions';

const Requirements = () => {
  const [, dispatch] = useContext(MainContext);

  useEffect(() => {
    dispatch(setPageIndex(-1));
  }, []);

  return (
    <Layout>
      <PageHeader title="Opal - Requirements" subTitle="System requirements" backButton />
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Grid container spacing={2} sx={{ mt: 5 }}>
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

        <Card sx={{ mt: 5 }}>
          <CardContent>
            <TableContainer>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell><b>Operating System</b></TableCell>
                    <TableCell>
                      Windows 7 and later (x64), GNU/Linux (x64), macOS (x64)(arm64)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><b>Disk space</b></TableCell>
                    <TableCell>
                      At least 150MB
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><b>RAM</b></TableCell>
                    <TableCell>At least 100MB free RAM</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><b>Internet connection</b></TableCell>
                    <TableCell>
                      Required in order to check for updates. This can be turned off in the
                      settings menu
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>

        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid size={12}>
            <Typography variant="h5" color="textPrimary">
              <SecurityIcon color="inherit" />
              {' Malware scan'}
            </Typography>
          </Grid>
          <Grid size={12}>
            <Divider />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <Typography variant="h6" align="center">
              Windows
            </Typography>
            <Button
              fullWidth
              variant="contained"
              href="https://www.virustotal.com/gui/file/2c800f5aae5024b7ea44901f3291d7cac1c3c893fd44c4f408a42c731ef34e79"
              target="_blank"
            >
              Installer
            </Button>
            <Button
              sx={{ mt: 1 }}
              variant="contained"
              fullWidth
              href="https://www.virustotal.com/gui/file/c5fa8d2bea8b347fa38f14f1ae2234e66244551984d3570fa51adae38af87c48"
              target="_blank"
            >
              Portable
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <Typography variant="h6" align="center">
              macOS
            </Typography>
            <Button
              fullWidth
              variant="contained"
              href="https://www.virustotal.com/gui/file/a6584ef3cf1af561f9359baa32cc43edda840e23bb06d168d8c67960a9426097"
              target="_blank"
            >
              dmg
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <Typography variant="h6" align="center">
              Linux
            </Typography>
            <Button
              fullWidth
              variant="contained"
              href="https://www.virustotal.com/gui/file/48f0100b91cf56b243756a0b3c930396c0a65d1ba15fc8aec397530ed21fe12b"
              target="_blank"
            >
              AppImage
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Requirements;
