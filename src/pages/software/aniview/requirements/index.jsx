import React, { useContext, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import SecurityIcon from '@material-ui/icons/Security';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import TableContainer from '@material-ui/core/TableContainer';
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
      <PageHeader title="AniView" subTitle="System requirements" backButton />
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
                      Windows 7 SP1 (x86 and x64), Windows 8.1 (x86 and x64),
                      Windows 10 (x86 and x64), Windows Server 2008 R2 SP1 (x64),
                      Windows Server 2012 (x64), Windows Server 2012 R2 (x64),
                      Windows Server 2016 (x64)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><b>Disk space</b></TableCell>
                    <TableCell>
                      At least 40 MB free disk space
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><b>Memory</b></TableCell>
                    <TableCell>At least 50 MB free RAM memory</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><b>Internet connection</b></TableCell>
                    <TableCell>
                      Required in order to check for updates. This can be turned off in the
                      settings menu
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><b>Other</b></TableCell>
                    <TableCell>
                      <a
                        href="https://dotnet.microsoft.com/download/dotnet-framework/net48"
                        rel="noreferrer"
                        target="_blank"
                      >
                        .NET
                        Framework 4.8
                      </a>
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
            <Button
              style={{ width: '100%' }}
              variant="contained"
              color="primary"
              href="https://www.virustotal.com/#/file/32f9f1de13bc52519eec42c8e7014c4888ccd8631f20cbf9a366fee95ecce8f3/detection"
              target="_blank"
            >
              Installer
            </Button>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Button
              style={{ width: '100%' }}
              variant="contained"
              color="primary"
              href="https://www.virustotal.com/#/file/6fede958fcc5d5f937f9d3c568269b4c5b02fc2e0cc0c9092ab4221acc5bcc62/detection"
              target="_blank"
            >
              Portable
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Requirements;
