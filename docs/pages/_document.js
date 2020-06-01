import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

class DocSite extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            type="image/svg+xml"
            sizes="180x180"
            href="/favicons/apple-touch-icon.svg"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            sizes="32x32"
            href="/favicons/favicon-32x32.svg"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            sizes="16x16"
            href="/favicons/favicon-16x16.svg"
          />
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap" rel="stylesheet" />

          <meta name="theme-color" content="#155DA1" />
          <meta charSet="UTF-8" />
        </Head>
        <body style={{ margin: 0 }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default DocSite;
