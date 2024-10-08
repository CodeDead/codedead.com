import React, { useContext } from 'react';
import { graphql, useStaticQuery, navigate } from 'gatsby';
import { CssBaseline } from '@mui/material';
import Alert from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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
          mastodon,
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
      mode: themeType,
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
    navigate('https://commission.europa.eu/resources-partners/europa-web-guide_en');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DefaultAppBar title={data.site.siteMetadata.title} />
      {children}
      {hasAcceptedCookieNotice ? null : (
        <Alert
          severity="warning"
          sx={{
            position: 'sticky', bottom: 0, mt: 5, zIndex: 1000,
          }}
        >
          <Typography>
            We might use cookies to ensure that we give you the best experience on our website.
            If you continue to use this site we will assume that you are happy with it.
          </Typography>

          <Button
            variant="contained"
            color="secondary"
            onClick={gotoGdpr}
            sx={{ mr: 1 }}
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
        mastodonUrl={data.site.siteMetadata.mastodon}
      />
    </ThemeProvider>
  );
};

export default Layout;
