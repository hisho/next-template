import React, { useState, useRef } from 'react';
import { NextPage } from 'next';
import { SEO } from '@src/components/seo';
import { todoType } from '@src/components/todoType';
import { Item } from '@src/components/item';

const Home: NextPage = () => {
  const [todoList, updateTodoList] = useState<todoType[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = () => {
    if (!inputRef.current) return;
    const text = inputRef.current.value;
    if (text.length === 0) return;

    updateTodoList((prevState) => {
      return [
        ...prevState,
        {
          id: new Date().getTime(),
          todo: text,
        },
      ];
    });

    inputRef.current.value = '';
  };

  return (
    <>
      <SEO title={'タイトル'} description={'説明文'} />
      <div className="mx-auto max-w-xl px-5 pt-32 md:pt-64">
        <div className="flex justify-between">
          <input
            ref={inputRef}
            className="border border-solid border-green-400 px-3 py-2 w-full focus:bg-blue-50"
            type="text"
            placeholder="入力してください"
          />
          <div className="ml-2 flex-shrink-0">
            <button
              onClick={onSubmit}
              className="border border-solid border-green-400 rounded bg-green-600 px-3 py-2 text-white font-bold hover:bg-green-700 focus:bg-green-700"
              type="button"
            >
              追加する
            </button>
          </div>
        </div>

        <div className="mt-10">
          <ul className="-mt-3">
            {todoList.map(({ id, todo }) => (
              <li className="pt-3" key={id}>
                <Item id={id} todo={todo} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
