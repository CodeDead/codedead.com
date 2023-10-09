import React, { useReducer, createContext } from 'react';
import MainReducer from '../../reducers/MainReducer';

const darkThemeMq = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
const dark = darkThemeMq ? 1 : 0;

const themeIndex = typeof window !== 'undefined' && localStorage.themeIndex ? parseFloat(localStorage.themeIndex) : dark;
const themeColorIndex = typeof window !== 'undefined' && localStorage.themeColorIndex
  ? parseFloat(localStorage.themeColorIndex)
  : 0;
const hasAcceptedCookieNotice = typeof window !== 'undefined' && localStorage.hasAcceptedCookieNotice ? localStorage.hasAcceptedCookieNotice === 'true' : false;

const initState = {
  pageIndex: 0,
  themeIndex,
  themeColorIndex,
  themes: {
    defaultColor: '#1c2661',
  },
  blogLimit: 0,
  hasAcceptedCookieNotice,
};

export const MainContext = createContext(initState);

const MainContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MainReducer, initState);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <MainContext.Provider value={[state, dispatch]}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
