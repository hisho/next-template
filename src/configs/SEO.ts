import {pageDataType} from "@src/configs";
import {siteMeta} from "./siteMeta";

export class SEO {
  private readonly page: pageDataType
  private readonly isTopPage: boolean;
  private readonly siteMeta = siteMeta;

  constructor(page: pageDataType) {
    this.page = page;
    this.isTopPage = page.page_id === '1';
  }

  /**
   * サイトのタイトルを返すgetter
   */
  get getTitle() {
    const siteName = this.siteMeta.name;
    const pageTitle = this.page.title;
    return this.isTopPage
      ? siteName + ' | ' + pageTitle
      : pageTitle + ' | ' + siteName;
  }

  /**
   * サイトのdescriptionを返すgetter
   */
  get getDescription() {
    const siteDescription = this.siteMeta.description;
    const pageDescription = this.page.description;
    return pageDescription ? pageDescription : siteDescription;
  }

  /**
   * ページの絶対パスを返すgetter
   */
  get getPath() {
    return this.siteMeta.siteUrl + this.page.path;
  }

  /**
   * ページのOGPの絶対pathを返すgetter
   */
  get getImage() {
    const image = this.page.image ?? 'common/ogp.png';
    return this.siteMeta.siteUrl + '/assets/images/' + image;
  }

  get getUrl() {
    return this.siteMeta.siteUrl;
  }

  get getLang() {
    return this.siteMeta.lang;
  }

  get getLocale() {
    return this.siteMeta.locale;
  }

  get getName() {
    return this.siteMeta.name;
  }
}
