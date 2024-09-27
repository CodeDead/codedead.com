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
import TableContainer from '@mui/material/TableContainer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
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
      <PageHeader title="MemPlus - Requirements" subTitle="System requirements" backButton />
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
                        .NET Framework 4.8
                      </a>
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
          <Grid size={{xs: 12, md: 6, lg: 6 }}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              href="https://www.virustotal.com/#/file/362dd5565951231aa4b785a91b364bc819549e0ed8c9ce20d06976848d370ac3/detection"
              target="_blank"
            >
              Installer
            </Button>
          </Grid>
          <Grid size={{xs: 12, md: 6, lg: 6 }}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              href="https://www.virustotal.com/#/file/854aaa86935cab36f25ee64576ee0883d685662feeae1fd4cb9e9d48fc4f8d71/detection"
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
