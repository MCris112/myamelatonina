import Head from "next/head";

const HeadComponent = ({ page, description, keywords }) => {
  return (
    <>
      <Head>
        <title>{`Lunaria Suplementos | ${page}`}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />

        <meta name="title" content={page} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Spanish" />
        <meta name="author" content="Darkredgm" />
      </Head>
    </>
  );
};

export default HeadComponent;
