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
      <PageHeader title="Opal - Requirements" subTitle="System requirements" backButton />
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
                      At least 100MB
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><b>Memory</b></TableCell>
                    <TableCell>At least 100MB free RAM memory</TableCell>
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
              fullWidth
              variant="contained"
              href="https://www.virustotal.com/gui/file/539513c50766c0631844f68aed147ba267596cc866772dc8f8b5b223a7e4e055?nocache=1"
              target="_blank"
            >
              Installer
            </Button>
            <Button
              style={{ marginTop: 10 }}
              variant="contained"
              fullWidth
              href="https://www.virustotal.com/gui/file/42d380c5b8ebb04b39f7b3c333bf21b109f89826ecdf770a005752b7e34b1610?nocache=1"
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
              fullWidth
              variant="contained"
              href="https://www.virustotal.com/gui/file/3e41ccc23266143bf0e56820eb74f8bdd84f4cdc85333ce0f4ebc02e499f33b7?nocache=1"
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
