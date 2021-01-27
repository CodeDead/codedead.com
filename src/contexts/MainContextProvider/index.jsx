import React, { useReducer, createContext } from 'react';
import MainReducer from '../../reducers/MainReducer';

const initState = {
  pageIndex: 0,
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
