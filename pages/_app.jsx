import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import { AppShell, MantineProvider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import TopBar from '../components/TopBar';
import MainContextProvider from '../contexts/MainContextProvider';
import { theme } from '../theme';

const App = ({ Component, pageProps }) => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <MainContextProvider>
        <AppShell
          header={{ height: 60 }}
          navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
          footer={{ height: 100 }}
          padding="md"
        >
          <AppShell.Header>
            <TopBar opened={opened} toggle={toggle} />
          </AppShell.Header>
          <AppShell.Navbar p="md">
            <NavBar />
          </AppShell.Navbar>
          <AppShell.Main>
            <Component {...pageProps} />
          </AppShell.Main>
          <AppShell.Footer>
            <Footer />
          </AppShell.Footer>
        </AppShell>
      </MainContextProvider>
    </MantineProvider>
  );
};

export default App;
