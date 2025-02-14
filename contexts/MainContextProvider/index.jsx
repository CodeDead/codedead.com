import React, { useReducer, createContext } from 'react';
import MainReducer from '../../reducers/MainReducer';

const hasAcceptedCookieNotice = typeof window !== 'undefined' && localStorage.hasAcceptedCookieNotice ? localStorage.hasAcceptedCookieNotice === 'true' : false;

const initState = {
  pageIndex: 0,
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
