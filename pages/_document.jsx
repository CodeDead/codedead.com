import { Head, Html, Main, NextScript } from 'next/document';
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';

const Document = () => {
  return (
    <Html lang="en" {...mantineHtmlProps}>
      <Head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
