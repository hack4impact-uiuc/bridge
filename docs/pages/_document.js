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
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link rel="mask-icon" href="favicons/safari-pinned-tab.svg" color="#000000" />
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
          <meta name="theme-color" content="#000" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default DocSite;
