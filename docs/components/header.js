import Head from 'next/head';

const Header = ({ children, ...props }) => (
  <Head>
    <title>{`${props.type} - ${props.title} | Bridge`}</title>
    {/* <meta name="twitter:card" content={props.image ? 'summary_large_image' : 'summary'} /> */}
    {/* <meta name="twitter:site" content={`@${TWITTER_USER_NAME}`} /> */}
    <meta name="og:title" content={props.ogTitle || props.title} />
    {props.description ? <meta name="description" content={props.description} /> : null}
    {props.ogDescription ? (
      <meta name="og:description" content={props.ogDescription} />
    ) : (
      <meta name="og:description" content={props.description} />
    )}
    {props.video
      ? [
        <meta name="og:type" content="video" key="0" />,
        <meta name="og:video" content={props.video} key="1" />,
        <meta name="og:video:type" content="video/mp4" key="2" />,
      ]
      : null}
    {props.meta
      ? props.meta.map((elm) => (
        <meta name={elm.property} content={elm.content} />
      ))
      : null }

    {children}
  </Head>
);

export default Header;
