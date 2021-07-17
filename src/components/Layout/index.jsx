import React, { useContext } from 'react';
import { graphql, useStaticQuery, navigate } from 'gatsby';
import { CssBaseline } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DefaultAppBar from '../DefaultAppBar';
import Footer from '../Footer';
import { MainContext } from '../../contexts/MainContextProvider';
import ThemeSelector from '../../utils/ThemeSelector';
import './index.css';
import { setHasAcceptedCookieNotice } from '../../reducers/MainReducer/Actions';

const Layout = ({ children }) => {
  const [state, dispatch] = useContext(MainContext);
  const { themeIndex, themeColorIndex, hasAcceptedCookieNotice } = state;
  const data = useStaticQuery(graphql`query {
      site {
        siteMetadata {
          title,
          github,
          twitter,
          reddit,
          facebook
        }
      }
     }`);

  let themeType = 'light';
  if (themeIndex === 1) {
    themeType = 'dark';
  }

  const color = ThemeSelector(themeColorIndex, state.themes.defaultColor);

  const theme = createTheme({
    palette: {
      primary: color,
      type: themeType,
    },
  });

  /**
   * Accept cookies
   */
  const acceptCookies = () => {
    dispatch(setHasAcceptedCookieNotice(true));
  };

  /**
   * Go to the GDPR site
   */
  const gotoGdpr = () => {
    navigate('http://ec.europa.eu/ipg/basics/legal/cookies/index_en.htm');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DefaultAppBar title={data.site.siteMetadata.title} />
      {children}
      {hasAcceptedCookieNotice ? null : (
        <Alert
          severity="warning"
          style={{ position: 'sticky', bottom: 0, marginTop: 10 }}
        >
          <Typography>
            We might use cookies to ensure that we give you the best experience on our website.
            If you continue to use this site we will assume that you are happy with it.
          </Typography>

          <Button
            variant="contained"
            color="secondary"
            onClick={gotoGdpr}
            style={{ marginRight: 5 }}
          >
            Decline
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={acceptCookies}
          >
            Agree
          </Button>
        </Alert>
      )}
      <div style={{ marginBottom: 65 }} />
      <Footer
        facebookUrl={data.site.siteMetadata.facebook}
        githubUrl={data.site.siteMetadata.github}
        twitterUrl={data.site.siteMetadata.twitter}
      />
    </ThemeProvider>
  );
};

export default Layout;
