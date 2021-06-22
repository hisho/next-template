import { PAGES } from '@src/configs';

//pagesの型
export type pages = typeof PAGES;

//pagesのpropsのユニオン型
export type pagesProps = {
  [Prop in keyof typeof PAGES[number]]: typeof PAGES[number][Prop];
};

//pagesのオブジェクトのユニオン型
export type pageObjects = typeof PAGES[number];

//page_idのユニオン型
export type page_id = pagesProps['page_id'];

export type pageData = {
  page_id: page_id;
  title: string;
  heading?: {
    japanese: string;
    english: string;
  };
  description?: string;
  image?: string;
  path: string;
  parent_id?: string;
};
