import { VFC, useContext } from 'react';
import { NextSeo, NextSeoProps } from 'next-seo';
import { PageContext } from '@src/store';
import {SEO} from "@src/configs";

type HeadPropsType = Omit<NextSeoProps, 'title' | 'description' | 'canonical'>;

export const Head: VFC<HeadPropsType> = () => {
  const { page } = useContext(PageContext);
  const meta = new SEO(page);
  return (
    <NextSeo
      title={meta.getTitle}
      description={meta.getDescription}
      openGraph={{
        type: 'website',
        locale: meta.getLocale,
        url: meta.getPath,
        site_name: meta.getName,
        title: meta.getTitle,
        description: meta.getDescription,
        images: [{ url: meta.getImage }],
      }}
      canonical={meta.getPath}
    />
  );
};
