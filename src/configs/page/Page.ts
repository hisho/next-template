import {pages} from "@src/configs";
import * as pageType from './types';

export class Page {

  public static readonly getPage = (page_id: pageType.page_id): pageType.pageObjects | never => {
    const currentPage = pages.find((n) => n.page_id === page_id);
    if (!currentPage) {
      throw new Error(`${page_id}は存在しません。`);
    }
    return currentPage;
  };

  public static readonly getPages = (...page_id: pageType.page_id[]): pageType.pageObjects[] | never => {
    const currentPages = [];
    for (const id of page_id) {
      const currentPage = pages.find((n) => n.page_id === id);
      if (currentPage) currentPages.push(currentPage);
    }

    if (currentPages.length === 0) {
      throw new Error(`${page_id}は存在しません。`);
    }
    return currentPages;
  };

  public static readonly isTopPage = (page_id: pageType.page_id): boolean => {
    return page_id === '1';
  };
}
