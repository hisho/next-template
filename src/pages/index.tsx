import React from 'react';
import { NextPage } from 'next';
import { SEO, Layout } from '@src/layouts';

const IndexPage: NextPage = () => {
  return (
    <>
      <SEO title={'タイトル'} description={'説明文'} />
      <Layout>
        <div>本文</div>
      </Layout>
    </>
  );
};

export default IndexPage;
