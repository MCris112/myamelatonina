import Head from "next/head";
import { useRouter } from "next/router";

import { sitevars } from "../constants";

const HeadComponent = ({ page, description, keywords }) => {
  const router = useRouter();

  console.log(router);

  const ogImage = `${
    sitevars.production ? sitevars.url : sitevars.url_dev
  }og-image.jpg`;
  const URL = `${
    sitevars.production ? sitevars.url : sitevars.url_dev
  }${router.asPath.substring(1)}`;

  return (
    <>
      <Head>
        <title>Myamelatonina | {page}</title>
        <meta name="description" content={description} />
        <a rel="icon" href="/favicon.ico" />

        <meta name="title" content={page} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Spanish" />
        <meta name="author" content="Darkredgm" />

        <meta property="og:url" content={URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={page} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={URL} />
        <meta property="twitter:url" content={URL} />
        <meta name="twitter:title" content={page} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Head>
    </>
  );
};

export default HeadComponent;
