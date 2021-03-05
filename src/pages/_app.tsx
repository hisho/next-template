import '@src/styles/globals.css';
import React from 'react';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className="wrapper">
      <Component {...pageProps} />
    </div>
    );
}

export default MyApp;
