const React = require('react');
const MainContextProvider = require('./src/contexts/MainContextProvider');

exports.wrapRootElement = ({ element }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <MainContextProvider>
    {element}
  </MainContextProvider>
);
