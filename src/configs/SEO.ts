import { pageType } from '@src/configs';
import { SITE_META } from './siteMeta';

export class SEO {
  private readonly page: pageType.pageData;
  private readonly isTopPage: boolean;

  constructor(page: pageType.pageData) {
    this.page = page;
    this.isTopPage = page.page_id === '1';
  }

  /**
   * サイトのタイトルを返すgetter
   */
  get getTitle() {
    const siteName = SITE_META.name;
    const pageTitle = this.page.title;
    return this.isTopPage
      ? siteName + ' | ' + pageTitle
      : pageTitle + ' | ' + siteName;
  }

  /**
   * サイトのdescriptionを返すgetter
   */
  get getDescription() {
    const siteDescription = SITE_META.description;
    const pageDescription = this.page.description;
    return pageDescription ? pageDescription : siteDescription;
  }

  /**
   * ページの絶対パスを返すgetter
   */
  get getPath() {
    return SITE_META.siteUrl + this.page.path;
  }

  /**
   * ページのOGPの絶対pathを返すgetter
   */
  get getImage() {
    const image = this.page.image ?? 'common/ogp.png';
    return SITE_META.siteUrl + '/assets/images/' + image;
  }

  get getUrl() {
    return SITE_META.siteUrl;
  }

  get getLang() {
    return SITE_META.lang;
  }

  get getLocale() {
    return SITE_META.locale;
  }

  get getName() {
    return SITE_META.name;
  }
}
