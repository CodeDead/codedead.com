import React, { useContext, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import SecurityIcon from '@mui/icons-material/Security';
import CardContent from '@mui/material/CardContent';
import TableContainer from '@mui/material/TableContainer';
import Card from '@mui/material/Card';
import TableHead from '@mui/material/TableHead';
import Layout from '../../../../components/Layout';
import PageHeader from '../../../../components/PageHeader';
import { MainContext } from '../../../../contexts/MainContextProvider';
import { setPageIndex } from '../../../../reducers/MainReducer/Actions';

const Requirements = () => {
  const [, dispatch] = useContext(MainContext);

  useEffect(() => {
    dispatch(setPageIndex(-1));
  }, []);

  return (
    <Layout>
      <PageHeader title="Advanced PassGen - Requirements" subTitle="System requirements" backButton />
      <Container maxWidth="md" style={{ marginTop: 10 }}>
        <Grid container spacing={2} style={{ marginTop: 10 }}>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h5" color="textPrimary">
              <InfoIcon color="inherit" />
              {' General'}
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
                    <TableCell>#</TableCell>
                    <TableCell>Windows 10 and later (x64)</TableCell>
                    <TableCell>GNU/Linux(x64)</TableCell>
                    <TableCell>macOS</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell><b>Disk space</b></TableCell>
                    <TableCell>At least 5MB</TableCell>
                    <TableCell>At least 70MB</TableCell>
                    <TableCell>At least 5MB</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><b>Memory</b></TableCell>
                    <TableCell>At least 30 MB free RAM memory</TableCell>
                    <TableCell>At least 30 MB free RAM memory</TableCell>
                    <TableCell>At least 30 MB free RAM memory</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><b>Internet connection</b></TableCell>
                    <TableCell>
                      Required in order to check for updates. This can be turned off in the
                      settings menu
                    </TableCell>
                    <TableCell>
                      Required in order to check for updates. This can be turned off in the
                      settings menu
                    </TableCell>
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

        <Grid container spacing={2} style={{ marginTop: 10 }}>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h5" color="textPrimary">
              <SecurityIcon color="inherit" />
              {' Malware scan'}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Divider />
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ marginTop: 10 }}>
          <Grid item xs={12} md={4} lg={4}>
            <Button
              style={{ width: '100%' }}
              variant="contained"
              color="primary"
              href="https://www.virustotal.com/gui/file/e057bd2e31fb5be4539237584870b238086ae46da8426cdca743e81cfff9376e?nocache=1"
              target="_blank"
            >
              Windows Installer
            </Button>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Button
              style={{ width: '100%' }}
              variant="contained"
              color="primary"
              href="https://www.virustotal.com/gui/file/ba0ace5b5e1ece745ef478cae7c9258e595e6c12f705cf92e7291450fca1268b?nocache=1"
              target="_blank"
            >
              Linux AppImage
            </Button>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Button
              style={{ width: '100%' }}
              variant="contained"
              color="primary"
              href="https://www.virustotal.com/gui/file/7992a06ce0cb7d0ea2cfe0b336fcfb1811b3adb9a1a3c73890b29bd8397fb1e5?nocache=1"
              target="_blank"
            >
              macOS dmg
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Requirements;
