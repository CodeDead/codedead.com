import React, { useContext, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
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
      <PageHeader title="DeadHash - Requirements" subTitle="System requirements" backButton />
      <Container maxWidth="md" style={{ marginTop: 10 }}>
        <Grid container spacing={2} style={{ marginTop: 10 }}>
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
            <TableContainer>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell><b>Operating System</b></TableCell>
                    <TableCell>
                      Windows 7 and later (x64), GNU/Linux (x64)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><b>Disk space</b></TableCell>
                    <TableCell>
                      At least 260MB
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><b>Memory</b></TableCell>
                    <TableCell>At least 60 MB free RAM memory</TableCell>
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

        <Grid container spacing={2} style={{ marginTop: 10 }}>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h5" color="textPrimary">
              <SecurityIcon color="inherit" />
              {' '}
              Malware scan
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Divider />
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ marginTop: 10 }}>
          <Grid item xs={12} md={6} lg={6}>
            <Typography variant="h6" align="center">
              Windows
            </Typography>
            <Button
              style={{ width: '100%' }}
              variant="contained"
              color="primary"
              href="https://www.virustotal.com/gui/file/ec66b4ef2960a82a5946b3ffef24479a1024339e278e7572a31a76a160e4e16f?nocache=1"
              target="_blank"
            >
              Installer
            </Button>
            <Button
              style={{ width: '100%', marginTop: 10 }}
              variant="contained"
              color="primary"
              href="https://www.virustotal.com/gui/file/a1ff2f9aaf903a3f4a424bd14b0c6838f6c06ca0603adedca7775392fa9165cf?nocache=1"
              target="_blank"
            >
              Portable
            </Button>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Typography variant="h6" align="center">
              Linux
            </Typography>
            <Button
              style={{ width: '100%' }}
              variant="contained"
              color="primary"
              href="https://www.virustotal.com/gui/file/87233e0a96bdc4083ee8cfac81042ed3bb387937cd560e17d5855bef6fd453de?nocache=1"
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
