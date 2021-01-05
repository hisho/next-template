import React from 'react';
import { NextPage } from 'next';
import { SEO } from '@src/components/seo';

const Home: NextPage = () => {
  return (
    <>
      <SEO title={'タイトル'} description={'説明文'} />
      <div className="mx-auto max-w-xl px-5 pt-32 md:pt-64">
        <div className="flex justify-between">
          <input className="border border-solid border-green-400 px-3 py-2 w-full focus:bg-blue-50" type="text" placeholder="入力してください"/>
          <div className="ml-2 flex-shrink-0">
            <button className="border border-solid border-green-400 rounded bg-green-600 px-3 py-2 text-white font-bold hover:bg-green-700 focus:bg-green-700" type="button">追加する</button>
          </div>
        </div>

        <div className="mt-10">
          <ul className="-mt-3">
            <li className="pt-3">
              <div className="flex justify-between">
                <div className="px-3 py-2 bg-red-50 w-full">追加したTODO</div>
                <div className="ml-2 flex-shrink-0">
                  <button className="border border-solid border-red-400 rounded bg-red-600 px-3 py-2 text-white font-bold hover:bg-red-700 focus:bg-red-700" type="button">削除する</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
