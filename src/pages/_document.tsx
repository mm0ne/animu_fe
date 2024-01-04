import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <head dangerouslySetInnerHTML={{__html: '<!-- <a href="https://www.flaticon.com/free-icons/aster" title="aster icons">Aster icons created by Freepik - Flaticon</a> -->'}}></head>
      </Head>
      <body data-theme='pastel' className="bg-base-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
