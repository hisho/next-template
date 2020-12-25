import React from 'react';
import {NextPage} from 'next';
import {SEO} from '../components/seo';

const Home: NextPage = () => {
  return (
    <>
      <SEO title={"タイトル"} description={"説明文"}/>
      内容
    </>
  )
}

export default Home