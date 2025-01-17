import React, { useContext, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
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
      <PageHeader title="Advanced PortChecker - Requirements" subTitle="System requirements" backButton />
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
                    <TableCell>At least 85MB</TableCell>
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
            <Button
              fullWidth
              variant="contained"
              color="primary"
              href="https://www.virustotal.com/gui/file/be652b842b0a6933067fcb471e79bd110e4ed64346e9ec8b5acb66810f372593?nocache=1"
              target="_blank"
            >
              Windows Installer
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              href="https://www.virustotal.com/gui/file/727b9c8c83717f448ac03d9d7e9920ac18226fc1edec7f3cafb1ecf383e23840?nocache=1"
              target="_blank"
            >
              Linux AppImage
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              href="https://www.virustotal.com/gui/file/605c7b8bf290452c6999a1bd414d089f2c8eca3813b48f7e2d3300036a644c54?nocache=1"
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
