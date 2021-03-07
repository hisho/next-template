import React, { FC, useContext } from 'react';
import { PageContext } from '@src/store';
import Head from 'next/head';

type SEOPropsType = Readonly<{
  title: string;
  description: string;
}>;

export const SEO: FC<SEOPropsType> = ({ title, description, children }) => {
  const { page } = useContext(PageContext);
  return (
    <>
      <Head>
        <title>{title + page.path}</title>
        <meta name="description" content={description} />
        {children}
      </Head>
    </>
  );
};
