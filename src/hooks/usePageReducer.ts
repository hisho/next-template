import { useReducer, Dispatch } from 'react';
import { PageContextReducer, PageContextAction } from '@src/store';
import { Page, pageType } from '@src/configs';

type usePageReducerType = (
  page_id: pageType.page_id,
  callback?: (currentPage: pageType.pageData) => pageType.pageData
) => { page: pageType.pageData; dispatch: Dispatch<PageContextAction> };

export const usePageReducer: usePageReducerType = (page_id, callBack) => {
  const currentPage = Page.getPage(page_id);
  const newPage = callBack ? callBack(currentPage) : currentPage;

  const [page, dispatch] = useReducer(PageContextReducer, newPage);

  return {
    page,
    dispatch,
  };
};
