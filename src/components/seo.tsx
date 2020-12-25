import React, {FC} from "react";
import Head from "next/head";

type SEOType = Readonly<{
  title: string
  description: string
  children?: never
}>

export const SEO: FC<SEOType> = ({title, description}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
      </Head>
    </>
  )
}