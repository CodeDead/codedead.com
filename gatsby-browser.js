import React from 'react';
import MainContextProvider from './src/contexts/MainContextProvider';

export const wrapRootElement = ({ element }) => (
  <MainContextProvider>
    {element}
  </MainContextProvider>
);
