import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="googlebot" content="noindex, nofollow" />
        <meta name="theme-color" content="#15123A" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
