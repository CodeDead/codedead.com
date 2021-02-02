import React, { useContext, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
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
      <Container maxWidth="md" style={{ marginTop: 20 }}>
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
