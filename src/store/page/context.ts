import { createContext } from 'react';
import { PageContextState, PageContextAction } from '@src/store/page/type';

export const PageContext = createContext(
  {} as {
    page: PageContextState;
    dispatch: (nextState: PageContextAction) => void;
  }
);
