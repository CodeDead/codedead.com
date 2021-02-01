const React = require('react');
const MainContextProvider = require('./src/contexts/MainContextProvider').default;

exports.wrapRootElement = ({ element }) => (
  <MainContextProvider>
    {element}
  </MainContextProvider>
);
