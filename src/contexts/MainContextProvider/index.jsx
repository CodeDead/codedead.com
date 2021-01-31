import React, { useReducer, createContext } from 'react';
import MainReducer from '../../reducers/MainReducer';

const themeIndex = typeof window !== 'undefined' && localStorage.themeIndex ? parseFloat(localStorage.themeIndex) : 1;
const themeColorIndex = typeof window !== 'undefined' && localStorage.themeColorIndex
  ? parseFloat(localStorage.themeColorIndex)
  : 0;

const initState = {
  pageIndex: 0,
  themeIndex,
  themeColorIndex,
  themes: {
    defaultColor: '#3f50b5',
  },
  blogLimit: 0,
};

export const MainContext = createContext(initState);

const MainContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MainReducer, initState);
  return (
    <MainContext.Provider value={[state, dispatch]}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
