import '@src/styles/globals.css';
import React from 'react';
import { AppProps } from 'next/app';
import 'what-input';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className="wrapper">
      <Component {...pageProps} />
    </div>
    );
}

export default MyApp;
