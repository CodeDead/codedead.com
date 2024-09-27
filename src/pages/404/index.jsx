import React, { useContext, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeader';
import { MainContext } from '../../contexts/MainContextProvider';
import { setPageIndex } from '../../reducers/MainReducer/Actions';

const NotFoundPage = () => {
  const [, dispatch] = useContext(MainContext);

  useEffect(() => {
    dispatch(setPageIndex(-1));
  }, []);

  return (
    <Layout>
      <PageHeader title="Not found" subTitle="The requested page could not be found" />
      <Container maxWidth="md" sx={{ mt: 10 }}>
        <Card>
          <CardContent>
            <Typography gutterBottom>
              There&apos;s really nothing here except for some top secret stuff (maybe).
            </Typography>
            <Typography>
              Would you like to go back to the home page?
            </Typography>
          </CardContent>
          <CardActions>
            <Button color="primary" variant="contained" href="/">
              Home
            </Button>
          </CardActions>
        </Card>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
