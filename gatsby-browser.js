import React from 'react';
import MainContextProvider from './src/contexts/MainContextProvider';
import { Helmet } from 'react-helmet';

export const wrapRootElement = ({ element }) => (
  <MainContextProvider>
    <>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Helmet>
      {element}
    </>
  </MainContextProvider>
);
