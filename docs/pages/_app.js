import '@hack4impact-uiuc/bridge/dist/styles.css';
import { DefaultSeo } from 'next-seo';

import Head from 'next/head';
import SEO from '../lib/utils/next-seo.config';


export default function MyApp({ Component, pageProps }) {
  return (
    /* Here we call NextSeo and pass our default configuration to it  */
    <>
      <DefaultSeo {...SEO} />
      <Head>
        <title>Bridge | Hack4Impact UIUC Design System</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:title" content="Bridge | Hack4Impact UIUC Design System" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
