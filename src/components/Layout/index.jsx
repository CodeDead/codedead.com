import React, { useContext } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import DefaultAppBar from '../DefaultAppBar';
import Footer from '../Footer';
import { MainContext } from '../../contexts/MainContextProvider';
import ThemeSelector from '../../utils/ThemeSelector';

const Layout = ({ children }) => {
  const [state] = useContext(MainContext);
  const { themeIndex, themeColorIndex } = state;
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

  const theme = createMuiTheme({
    palette: {
      primary: color,
      type: themeType,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DefaultAppBar
        title={data.site.siteMetadata.title}
        githubUrl={data.site.siteMetadata.github}
        twitterUrl={data.site.siteMetadata.twitter}
        facebookUrl={data.site.siteMetadata.facebook}
      />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
