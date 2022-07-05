import React, { ReactNode } from 'react';
import type { AppProps } from 'next/app';

import '../styles/globals.css';

const MyApp = ({
  Component,
  pageProps,
}: AppProps): ReactNode => <Component {...pageProps} />;

export default MyApp;
