import { Reducer } from 'react';
import { PageContextState, PageContextAction } from '@src/store/page/type';

export const PageContextReducer: Reducer<
  PageContextState,
  PageContextAction
> = (prevState, action) => {
  switch (action.type) {
    case 'increment':
      return { ...prevState, path: prevState.path + action.payload };
    default:
      return prevState;
  }
};
