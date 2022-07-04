import React, { ReactNode } from 'react';
import type { AppProps } from 'next/app';

import ToastWrapper from '../components/toast';
import '../styles/globals.css';

const MyApp = ({
  Component,
  pageProps,
}: AppProps): ReactNode => (
  <>
    <Component {...pageProps} />
    <ToastWrapper />
  </>
);

export default MyApp;
