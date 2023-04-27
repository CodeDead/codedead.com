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
                    <TableCell>At least 75MB</TableCell>
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
              fullWidth
              variant="contained"
              color="primary"
              href="https://www.virustotal.com/gui/file/8ea45ca2f538aca7f19a0be05cf5a45252bee89198a2a5cdfcd3268b532f80bc?nocache=1"
              target="_blank"
            >
              Windows Installer
            </Button>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              href="https://www.virustotal.com/gui/file/96b383f9c29cb0e4b8b809b80802b5eb6f252c4cbf115f40d2f6a79cb742ac58?nocache=1"
              target="_blank"
            >
              Linux AppImage
            </Button>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              href="https://www.virustotal.com/gui/file/d83f71c7ddfe4baf72b8148068083c34a4138c2d8fe88beac4e4c1f497833eeb?nocache=1"
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
