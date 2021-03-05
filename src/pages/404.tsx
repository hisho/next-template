import React from 'react';
import { NextPage } from 'next';
import { SEO, Layout } from '@src/layouts';

const IndexPage: NextPage = () => {
  return (
    <>
      <SEO
        title={'404エラー　お探しのページは存在しません。'}
        description={'404エラー お探しのページは存在しません。'}
      />
      <Layout>
        <div>本文</div>
      </Layout>
    </>
  );
};

export default IndexPage;
