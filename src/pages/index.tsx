import { VFC } from 'react';
import { Layout, SEO } from '@src/layouts';
import { PageContext } from '@src/store';
import { usePageReducer } from '@src/hooks';

const Page: VFC = () => {
  const currentPage = usePageReducer('1');

  return (
    <PageContext.Provider value={currentPage}>
      <Layout>
        <SEO />
        top page
        <img src="/vercel.svg" alt="" />
      </Layout>
    </PageContext.Provider>
  );
};

export default Page;
