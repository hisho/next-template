import React, { useReducer } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { SEO, Layout } from '@src/layouts';
import { PageContext, PageContextReducer } from '@src/store';

const IndexPage: NextPage = () => {
  const { pathname } = useRouter();
  const [page, dispatch] = useReducer(PageContextReducer, {
    path: pathname,
  });
  return (
    <PageContext.Provider value={{ page, dispatch }}>
      <SEO title={'タイトル'} description={'説明文'} />
      <Layout>
        <div>本文</div>
      </Layout>
    </PageContext.Provider>
  );
};

export default IndexPage;
