import React, { useContext, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
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
                <TableBody>
                  <TableRow>
                    <TableCell><b>Operating System</b></TableCell>
                    <TableCell>
                      Windows 7 and later (x64), GNU/Linux (x64), macOS (x64)(arm64)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><b>Disk space</b></TableCell>
                    <TableCell>
                      At least 150MB
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
            <Typography variant="h6" align="center">
              Windows
            </Typography>
            <Button
              fullWidth
              variant="contained"
              href="https://www.virustotal.com/gui/file/8317601baf0b7aad708cf0bd726649443b13b96c06f77e32f2dbb352365b6b16?nocache=1"
              target="_blank"
            >
              Installer
            </Button>
            <Button
              sx={{ mt: 1 }}
              variant="contained"
              fullWidth
              href="https://www.virustotal.com/gui/file/a4acf5443e81228cd4b5faa923f84e6a54d0105942ba31e2d69af90bc21c3173?nocache=1"
              target="_blank"
            >
              Portable
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <Typography variant="h6" align="center">
              macOS
            </Typography>
            <Button
              fullWidth
              variant="contained"
              href="https://www.virustotal.com/gui/file/4512507469c45ff8fb8f5d544da79419582e87b18e7cdaa3de229140120c409c?nocache=1"
              target="_blank"
            >
              dmg
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <Typography variant="h6" align="center">
              Linux
            </Typography>
            <Button
              fullWidth
              variant="contained"
              href="https://www.virustotal.com/gui/file/839fe1acb7ea5d9b13be2dd3eea6c18b5cea7f8b597189a221c73ca6f0b4316a?nocache=1"
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
