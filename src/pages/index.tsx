import React from 'react';
import { NextPage } from 'next';
import { SEO } from '@src/layouts';

const IndexPage: NextPage = () => {
  return (
    <>
      <SEO title={'タイトル'} description={'説明文'} />
      <div>本文</div>
    </>
  );
};

export default IndexPage;
