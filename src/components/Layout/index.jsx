import React, { useContext } from 'react';
import { graphql, navigate, useStaticQuery } from 'gatsby';
import { CssBaseline } from '@mui/material';
import Alert from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DefaultAppBar from '../DefaultAppBar';
import Footer from '../Footer';
import { MainContext } from '../../contexts/MainContextProvider';
import ThemeSelector from '../../utils/ThemeSelector';
import './index.css';
import { disableV2Notice, setHasAcceptedCookieNotice } from '../../reducers/MainReducer/Actions';

const Layout = ({ children }) => {
  const [state, dispatch] = useContext(MainContext);
  const {
    themeIndex, themeColorIndex, hasAcceptedCookieNotice, hasTriedVersion2,
  } = state;
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
   * Accept the cookie notice
   */
  const acceptCookies = () => {
    dispatch(setHasAcceptedCookieNotice(true));
  };

  /**
   * Disable the new version of the site
   */
  const disableV2 = () => {
    dispatch(disableV2Notice());
  };

  /**
   * Go to the new version of the site
   */
  const tryV2 = () => {
    window.location.href = window.location.href.replace('codedead.com', 'v2.codedead.com');
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
      {!hasTriedVersion2 ? (
        <Dialog
          open={!hasTriedVersion2}
          onClose={disableV2}
          aria-labelledby="v2-alert-dialog-title"
          aria-describedby="v2-alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            New website design!
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="v2-alert-dialog-description">
              We&apos;re redesigning our website to make it more user-friendly
              and visually appealing.

              Keep in mind that this is still a work in progress and some
              features may not be available yet.

              Would you like to try the new design?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={disableV2}>No</Button>
            <Button onClick={tryV2} autoFocus>
              Yes please!
            </Button>
          </DialogActions>
        </Dialog>
      ) : null}
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
