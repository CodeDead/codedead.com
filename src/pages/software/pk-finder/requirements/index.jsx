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
import SecurityIcon from '@mui/icons-material/Security';
import InfoIcon from '@mui/icons-material/Info';
import TableContainer from '@mui/material/TableContainer';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
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
      <PageHeader title="PK Finder - Requirements" subTitle="System requirements" backButton />
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
                    <TableCell>At least 80 MB free RAM memory</TableCell>
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
              href="https://www.virustotal.com/#/file/d49762e1fedf25d5417e9ea644dbd57b90ca418a634dcb01ff1f4ec4b62572ca/detection"
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
              href="https://www.virustotal.com/#/file/7bb675c55b5a833dc7f3cd28c00a96da5528a78d9f2bbb8c49583f7a54461d61/detection"
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
