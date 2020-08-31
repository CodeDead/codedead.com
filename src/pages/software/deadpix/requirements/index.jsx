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
import PageHeader from '../../../../components/PageHeader';
import Layout from '../../../../components/Layout';

const Requirements = () => (
  <Layout>
    <PageHeader title="DeadPix" subTitle="System requirements" backButton/>
    <Container maxWidth="md" style={{ marginTop: 10 }}>
      <Grid container spacing={2} style={{ marginTop: 10 }}>
        <Grid item xs={12} md={12} lg={12}>
          <Typography variant="h5" color="textPrimary">
            General
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Divider/>
        </Grid>
      </Grid>

      <Table style={{ marginTop: 10 }}>
        <TableBody>
          <TableRow>
            <TableCell><b>Operating System</b></TableCell>
            <TableCell>
              Windows 7 SP1 (x86 and x64), Windows 8.1 (x86 and x64), Windows 10 (x86 and x64),
              Windows Server 2008 R2 SP1 (x64), Windows Server 2012 (x64), Windows Server 2012 R2
              (x64), Windows Server 2016 (x64), Windows Server 2012 R2 (x64), Windows Server 2019
              (x64)
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><b>Disk space</b></TableCell>
            <TableCell>
              At least 35 MB free disk space
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><b>Memory</b></TableCell>
            <TableCell>At least 40 MB free RAM memory</TableCell>
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
              <a href="https://dotnet.microsoft.com/download/dotnet-framework/net48"
                 rel="noreferrer" target="_blank">
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
            Malware scan
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Divider/>
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ marginTop: 10 }}>
        <Grid item xs={12} md={6} lg={6}>
          <Button
            style={{ width: '100%' }}
            variant="outlined"
            color="primary"
            href="https://www.virustotal.com/#/file/82400b0be59a9b83fc3b78332bbec98eeb3dff6be91aafd4e7cfa09e75820db5/detection"
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
            href="https://www.virustotal.com/#/file/01a49424a25f439ca8a595d0c67e7a215f3b201bd469ea85554d8e42facfea4a/detection"
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
