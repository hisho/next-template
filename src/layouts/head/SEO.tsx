import React, { FC } from 'react';
import Head from 'next/head';

type SEOPropsType = Readonly<{
  title: string;
  description: string;
}>;

export const SEO: FC<SEOPropsType> = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {children}
      </Head>
    </>
  );
};
