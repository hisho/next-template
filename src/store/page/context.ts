import { createContext } from 'react';
import { PageContextAction } from '@src/store/page/type';
import { pageType } from '@src/configs';

export const PageContext = createContext(
  {} as {
    page: pageType.pageData;
    dispatch: (nextState: PageContextAction) => void;
  }
);
