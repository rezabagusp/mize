import React from 'react';
import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

const MyDocument = () => (
  <Html>
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" href="/favicon.icon" />
      <link rel="manifest" href="/manifest.json" />

      <script async src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
