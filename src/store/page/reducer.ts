import { Reducer } from 'react';
import { PageContextAction } from '@src/store/page/type';
import { pageType } from '@src/configs';

export const PageContextReducer: Reducer<pageType.pageData, PageContextAction> = (
  prevState,
  action
) => {
  switch (action.type) {
    case 'path':
      return { ...prevState, path: action.payload };
    default:
      return prevState;
  }
};
