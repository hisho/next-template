import React from 'react';
import { NextPage } from 'next';
import { SEO } from '@src/components/seo';
import classes from '@src/styles/Home.module.css';

const a = test;
const Home: NextPage = () => {
  return (
    <>
      <SEO title={'タイトル'} description={'説明文'} />
      <div className="text-8xl">aaaaaaaaaaa</div>
    </>
  );
};

export default Home;
