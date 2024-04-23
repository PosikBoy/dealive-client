import React from "react";
import Head from "next/head";

type MetaProps = {
  title: string;
  description?: string;
};

const MetaTags: React.FC<MetaProps> = ({ title, description }) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>{title}</title>
      {description ? (
        <>
          <meta
            name="keywords"
            content="срочная доставка, Москва быстрая доставка, экспресс доставка по Москве, курьер в Москве, Москва доставить посылку"
          />
          <meta name="description" content={description} />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="yungg" />
          {title && <meta property="og:title" content={title} />}
          {description && (
            <meta property="og:description" content={description} />
          )}
          <meta property="og:image" content="/favicon.ico" />
          <link rel="canonical" href="https://dealive.ru" />
        </>
      ) : (
        <>
          <meta name="robots" content="index, follow" />
        </>
      )}
    </Head>
  );
};

export default MetaTags;
