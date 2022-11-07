//Librairies
import { Html, Head, Main, NextScript } from 'next/document';

export default function MonDocument() {
  return (
    <Html lang='fr'>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <link
          rel='icon'
          type='image/png'
          href='/images/favicon.png'
        />
        <meta name='robots' content='index, follow' />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* Balise Facebook, Google ou autres */}
      </body>
    </Html>
  );
}
