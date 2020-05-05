import '@hack4impact-uiuc/design/dist/styles.css';
import { DefaultSeo } from 'next-seo';

import SEO from '../lib/utils/next-seo.config';
import Header from '../components/header';


export default function MyApp({ Component, pageProps }) {
  return (
    /* Here we call NextSeo and pass our default configuration to it  */
    <>
      <DefaultSeo {...SEO} />
      <Header
        title="Hack4Impact UIUC Design System"
        meta={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
          { property: 'og:title', content: 'Hack4Impact UIUC Design System' },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}
