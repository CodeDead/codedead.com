import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Button } from '@material-ui/core';
import SecurityIcon from '@material-ui/icons/Security';
import InfoIcon from '@material-ui/icons/Info';
import PageHeader from '../../../../components/PageHeader';
import Layout from '../../../../components/Layout';

const Requirements = () => (
  <Layout>
    <PageHeader title="PK Finder" subTitle="System requirements" backButton />
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

      <Table style={{ marginTop: 10 }}>
        <TableBody>
          <TableRow>
            <TableCell><b>Operating System</b></TableCell>
            <TableCell>
              Windows 7 SP1 (x86 and x64), Windows 8.1 (x86 and x64), Windows 10 (x86 and x64),
              Windows Server 2008 R2 SP1 (x64), Windows Server 2012 (x64), Windows Server 2012 R2
              (x64), Windows Server 2016 (x64)
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
            variant="outlined"
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
            variant="outlined"
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

export default Requirements;
