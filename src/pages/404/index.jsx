import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeader';

const NotFoundPage = () => (
  <Layout>
    <PageHeader title="Not found" subTitle="The requested page could not be found" />
    <Container maxWidth="md" style={{ marginTop: 20 }}>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom>
              There&apos;s really nothing here except for some top secret stuff (maybe).
            </Typography>
            <Typography>
              Would you like to go back to the home page?
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button color="primary" variant="outlined" href="/">
            Home
          </Button>
        </CardActions>
      </Card>
    </Container>
  </Layout>
);

export default NotFoundPage;
