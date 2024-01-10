import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <head
          dangerouslySetInnerHTML={{
            __html:
              '<!-- <a href="https://www.flaticon.com/free-icons/aster" title="aster icons">Aster icons created by Freepik - Flaticon</a> -->',
          }}
        ></head>
      </Head>
      <body data-theme="pastel">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
