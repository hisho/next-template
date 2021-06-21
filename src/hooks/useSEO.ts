import {siteMeta} from "@src/configs";
import { pageDataType } from '@src/configs';

type useSEOType = {
  lang: string;
  locale: string;
  name: string;
  title: string;
  description: string;
  url: string;
  image: string;
  path: string;
};

type useSEOFunctionType = (props: pageDataType) => useSEOType | never;

export const useSEO: useSEOFunctionType = ({
  page_id,
  title,
  description,
  image = 'common/ogp.png',
  path,
}) => {
  const isTopPage = page_id === '1';
  const pageTitle = isTopPage
    ? siteMeta.name + ' | ' + title
    : title + ' | ' + siteMeta.name;
  const pageDescription = description ? description : siteMeta.description;
  const pagePath = siteMeta.siteUrl + path;
  const pageOGPImage = siteMeta.siteUrl + 'assets/images/' + image;

  return {
    lang: siteMeta.lang,
    locale: siteMeta.locale,
    name: siteMeta.name,
    title: pageTitle,
    description: pageDescription,
    url: siteMeta.siteUrl,
    image: pageOGPImage,
    path: pagePath,
  };
};
