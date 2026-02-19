import '@/styles/globals.css';
import Head from 'next/head';
import profile from '@/data/profile.json';

export default function App({ Component, pageProps }) {
  const { meta } = profile;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={meta.siteDescription} />
        <meta name="author" content={profile.hero.name} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.siteTitle} />
        <meta property="og:description" content={meta.siteDescription} />
        <meta property="og:url" content={meta.siteUrl} />
        {meta.ogImage && <meta property="og:image" content={meta.ogImage} />}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.siteTitle} />
        <meta name="twitter:description" content={meta.siteDescription} />
        {meta.twitterHandle && <meta name="twitter:creator" content={meta.twitterHandle} />}

        <title>{meta.siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
