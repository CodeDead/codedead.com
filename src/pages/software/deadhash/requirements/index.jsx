import React, { useContext, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Button, Card } from '@material-ui/core';
import SecurityIcon from '@material-ui/icons/Security';
import InfoIcon from '@material-ui/icons/Info';
import CardContent from '@material-ui/core/CardContent';
import TableContainer from '@material-ui/core/TableContainer';
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
      <PageHeader title="DeadHash" subTitle="System requirements" backButton />
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
              variant="outlined"
              color="primary"
              href="https://www.virustotal.com/gui/file/903b947bb03f02b7f4fda8417f0ca57c6b0e12463896d9e22aba90d9494022a0/detection"
              target="_blank"
            >
              Installer
            </Button>
            <Button
              style={{ width: '100%', marginTop: 10 }}
              variant="outlined"
              color="primary"
              href="https://www.virustotal.com/gui/file/e1e7d3c6a7deff4da6567fdd983bcc5d103a4e35842e0c34c5c4c21d910d0226/detection"
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
              variant="outlined"
              color="primary"
              href="https://www.virustotal.com/gui/file/1ba1335dd39ba7c92a528f9833fce04a2c9b040a4c28b53e3341e50871c9ef5e/detection"
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
